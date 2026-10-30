const SUPABASE_URL='https://gnfyqlmgitriyavjkuew.supabase.co';
const SUPABASE_KEY='sb_publishable_mEEoVhx_yGQau4kn5rOutg__dKI2wWm';
const ROOM='dogprinter2026';
const AVATARS=['🐶','🐰','🦊','🐻','🐼','🐣','🦋','🦄','🐨','🐱','🐹','🐸'];
const QUOTES=['You are someone’s reason to smile today.','You deserve all the lovely things life has to offer.','Your kindness is your superpower.','Keep going, beautiful things take time.','A little progress is still progress.','The world is brighter because you are here.','You are enough, exactly as you are.','A new day means a new little miracle.','Your smile looks good on you.','Believe in the magic of new beginnings.','Be gentle with yourself today.','Your story is still full of possibilities.'];
const pick=a=>a[Math.floor(Math.random()*a.length)];
const api=SUPABASE_URL+'/rest/v1/printer_events';
const headers={apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY};
async function sendPrint(name,gift){const item={uid:crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random(),name:name.replace(/^@/,'').trim().slice(0,35),gift,avatar:pick(AVATARS),quote:pick(QUOTES)};if(!item.name)throw Error('กรุณากรอกชื่อผู้ส่ง');const res=await fetch(api,{method:'POST',headers:{...headers,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({room:ROOM,payload:item})});if(!res.ok)throw Error('ส่งไม่สำเร็จ ('+res.status+'): '+(await res.text()).slice(0,100));return item;}
async function fetchPrints(after=0){const q=new URLSearchParams({select:'id,payload',room:'eq.'+ROOM,id:'gt.'+Number(after),order:'id.asc',limit:'100'});const res=await fetch(api+'?'+q,{headers,cache:'no-store'});if(!res.ok)throw Error('เชื่อมต่อไม่สำเร็จ ('+res.status+')');return res.json();}
