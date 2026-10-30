const SUPABASE_URL='https://gnfyqlmgitriyavjkuew.supabase.co';
const SUPABASE_KEY='sb_publishable_mEEoVhx_yGQau4kn5rOutg__dKI2wWm';
const ROOM='dogprinter2026';
const AVATARS=['🐶','🐰','🦊','🐻','🐼','🐣','🦋','🦄','🐨','🐱','🐹','🐸'];
const QUOTES=['You are someone’s reason to smile today.','You deserve all the lovely things life has to offer.','Your kindness is your superpower.','Keep going, beautiful things take time.','A little progress is still progress.','The world is brighter because you are here.','You are enough, exactly as you are.','A new day means a new little miracle.','Your smile looks good on you.','Believe in the magic of new beginnings.','Be gentle with yourself today.','Your story is still full of possibilities.'];
const GIFT_TYPES={rose:{label:'Rose',image:'rose.jpg',paper:'white'},donut:{label:'Donut',image:'donut.jpg',paper:'silver'},legendary:{label:'Hand Heart',image:'legendary.jpg',paper:'gold'}};
const normalizeGift=g=>g==='donut'||/donut|big|โดนัท/i.test(g)?'donut':g==='legendary'||g==='paw'||/legendary|paw|อุ้งมือ/i.test(g)?'legendary':'rose';
const pick=a=>a[Math.floor(Math.random()*a.length)];
const api=SUPABASE_URL+'/rest/v1/printer_events';
const headers={apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY};
async function sendPrint(name,gift){const item={uid:crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random(),name:name.replace(/^@/,'').trim().slice(0,35),gift:normalizeGift(gift),avatar:pick(AVATARS),quote:pick(QUOTES)};if(!item.name)throw Error('กรุณากรอกชื่อผู้ส่ง');const res=await fetch(api,{method:'POST',headers:{...headers,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({room:ROOM,payload:item})});if(!res.ok)throw Error('ส่งไม่สำเร็จ ('+res.status+'): '+(await res.text()).slice(0,100));return item;}
async function fetchPrints(after=0){const q=new URLSearchParams({select:'id,payload',room:'eq.'+ROOM,id:'gt.'+Number(after),order:'id.asc',limit:'100'});const res=await fetch(api+'?'+q,{headers,cache:'no-store'});if(!res.ok)throw Error('เชื่อมต่อไม่สำเร็จ ('+res.status+')');return res.json();}

async function sendReset(){const item={uid:'reset-'+Date.now()+'-'+Math.random().toString(36).slice(2),type:'reset'};const res=await fetch(api,{method:'POST',headers:{...headers,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({room:ROOM,payload:item})});if(!res.ok)throw Error('รีเซ็ตไม่สำเร็จ ('+res.status+')');return item}
async function fetchRecent(limit=1000){const q=new URLSearchParams({select:'id,payload',room:'eq.'+ROOM,order:'id.desc',limit:String(limit)});const r=await fetch(api+'?'+q,{headers,cache:'no-store'});if(!r.ok)throw Error('โหลดสถิติไม่สำเร็จ ('+r.status+')');return r.json()}
function leaderboard(rows){const counts=new Map();for(const row of rows){const x=row.payload||{};if(x.type==='reset')break;if(!x.name)continue;const name=String(x.name).trim().replace(/^@/,'');const key=name.toLowerCase();const old=counts.get(key)||{name,count:0};old.count++;counts.set(key,old)}return [...counts.values()].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name)).slice(0,10)}
