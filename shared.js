const SUPABASE_URL='https://gnfyqlmgitriyavjkuew.supabase.co';
const SUPABASE_KEY='sb_publishable_mEEoVhx_yGQau4kn5rOutg__dKI2wWm';
const ROOM='dogprinter2026';
const AVATARS=['🐶','🐰','🦊','🐻','🐼','🐣','🦋','🦄','🐨','🐱','🐹','🐸'];
// Quotes are grouped by gift; avoid repeats across the room until that tier's pool is exhausted.
const QUOTE_POOLS={
 rose:[
 'You are enough.','Keep shining.','You matter.','Better days are coming.','Choose joy today.','Your smile is magic.','Be proud of yourself.','You deserve kindness.','One step at a time.','You are loved.','Stay hopeful.','Keep blooming.','Small steps count.','Your light matters.','You can do this.','Dream a little bigger.','Let yourself rest.','Today is a fresh start.','Your heart is beautiful.','Good things take time.','You make a difference.','Trust your journey.','You belong here.','Make room for joy.','You are doing great.','Hope looks good on you.','You are a gift.','Breathe and begin again.','Your kindness glows.','You deserve peace.','Magic starts with you.','You are stronger than fear.','Keep your sparkle.','You bring sunshine.','Every day is a chance.','Let your heart smile.'
 ],
 donut:[
 'You do not need to have everything figured out. Every little step forward is worth celebrating.',
 'Some days progress looks like resting. Give yourself credit for showing up and trying.',
 'Your kindness has a way of making ordinary moments feel special. Never underestimate it.',
 'The best chapters often begin quietly. Keep turning the pages and trust your story.',
 'Even when the path feels uncertain, you are learning how strong and capable you can be.',
 'You deserve a life filled with gentle mornings, honest laughter, and people who care.',
 'A difficult day does not erase the beautiful progress you have already made.',
 'Keep choosing the things that make your heart feel lighter. Your happiness matters too.',
 'There is no deadline for becoming yourself. Grow at the pace that feels right for you.',
 'You have survived every hard day so far. Remember how much courage that takes.',
 'Let today be proof that you can begin again, no matter how yesterday went.',
 'Your dreams are worth protecting. Take one brave little step toward them today.',
 'You are allowed to outgrow old fears and make space for something wonderful.',
 'Every act of kindness you share leaves a little more light in the world.',
 'Do not compare your beginning to someone else’s middle. Your journey is yours.',
 'Life can surprise you with beautiful things when you least expect them.',
 'You do not have to be perfect to be deeply loved and appreciated.',
 'The smallest moments of joy can become the memories you treasure most.',
 'Be patient with the person you are becoming. Growth is not always visible.',
 'Your presence makes more of a difference than you may ever know.',
 'It is okay to slow down. A peaceful heart is a beautiful achievement.',
 'You are worthy of the same understanding you so freely give to others.',
 'Some doors close to make room for the opportunities that fit you better.',
 'The world needs your unique voice, your warmth, and your way of seeing beauty.',
 'Every sunrise is another invitation to write a kinder chapter for yourself.',
 'You have permission to celebrate small wins. They are building something big.',
 'Your future is not limited by one mistake, one setback, or one difficult season.',
 'Keep a little space in your heart for unexpected joy and new beginnings.',
 'You can be both a work in progress and someone worth celebrating right now.',
 'May you find people who make being yourself feel easy and safe.'
 ],
 legendary:[
 'There is something extraordinary about the way you keep showing up for life, even when things are not easy. Every challenge you have faced has helped shape your courage, but it does not define your future. You deserve beautiful surprises, meaningful connections, and a happiness that feels peaceful and real.',
 'If nobody has reminded you lately, you are doing better than you think. You have made it through days that once seemed impossible, and you are still here with dreams worth chasing. May the next chapter bring you gentle mornings, unexpected opportunities, and people who recognize the light you carry.',
 'You do not need to earn love by being perfect or by making everyone happy. Your worth has always been there, even on the days when you feel tired or uncertain. Keep choosing a life where you can breathe freely, laugh wholeheartedly, and grow into the person you truly want to be.',
 'One day you may look back and realize that the little decisions you made with courage changed everything. The days you kept going, the boundaries you honored, and the dreams you refused to abandon all mattered. Be proud of your journey, and stay open to the wonderful things still waiting for you.',
 'May your heart never forget that a meaningful life is made from more than big achievements. It is also found in quiet kindness, warm conversations, the courage to begin again, and moments of unexpected joy. You deserve to experience all of those things, not just someday, but along the way.',
 'You have permission to build a future that looks different from what other people expect. Follow the path that gives you peace, respect your own timing, and keep room for the things that make you feel alive. Your story is yours to write, and there is so much beauty still ahead.',
 'Not every season will feel bright, but even the quiet ones can help you grow. Give yourself grace while you learn, rest when you need to, and remember that hope can return in small ways. You are not behind in life; you are moving through it in your own meaningful time.',
 'Some of the most beautiful changes begin with a simple decision to believe in yourself again. Take that next step even if it feels small. Celebrate your progress even if nobody else notices. The person you are becoming deserves patience, encouragement, and a future filled with possibility.',
 'May you always find the courage to leave behind what dims your light and move toward what helps you shine. Your kindness is valuable, your dreams are important, and your happiness deserves a place in your plans. The world is better when you allow yourself to be fully you.',
 'The life you want may take time to create, and that is perfectly okay. Keep collecting lessons, building confidence, and making memories that remind you why you started. There is no need to rush a beautiful story; each thoughtful step is part of the magic.',
 'You are allowed to change your mind, discover new dreams, and start fresh whenever your heart needs a new direction. Nothing about your past can take away your ability to create something meaningful today. Trust the strength you have earned and the possibilities you have not yet seen.',
 'Let this message be a reminder that your efforts matter, even when results take longer than you hoped. The care you put into your dreams is never wasted. Keep learning, keep resting, and keep finding reasons to smile. Your next beautiful surprise may be closer than you imagine.',
 'You deserve relationships where kindness is natural, support is mutual, and being yourself feels safe. Never forget how much peace matters. May the people who enter your life celebrate your growth, respect your boundaries, and remind you that love should help you bloom.',
 'There will be days when the only victory is choosing to try again, and that victory is still worth celebrating. You do not have to measure your life by someone else’s timeline. Every honest effort, brave choice, and gentle act of self-respect is helping you move forward.',
 'Sometimes the most powerful thing you can do is stop chasing perfection and begin appreciating the life happening right now. Notice the little joys, the people who make you laugh, and the strength hidden in your everyday choices. Your story deserves both ambition and happiness.',
 'May your future be full of places that inspire you, conversations that warm your heart, and opportunities that help you discover new strengths. Keep your curiosity alive and your dreams close. There is an entire world of wonderful experiences still waiting to meet you.',
 'When you feel uncertain about what comes next, remember that you do not need to see the whole path to take one meaningful step. You have already learned so much by simply living through change. Trust yourself to keep growing, and let hope travel beside you.',
 'The kindness you offer others is a beautiful gift, but remember to save some of that kindness for yourself. Rest without guilt, celebrate without comparison, and dream without apology. You are worthy of a life that feels good on the inside, not only one that looks good from afar.',
 'Your courage may not always be loud. Sometimes it looks like trying something new, asking for help, or choosing peace over pressure. Those quiet moments count. Be proud of the strength you practice every day, and keep believing that wonderful things can happen for you.',
 'Life is not a race to become the most successful person in the room. It is a chance to discover what matters to you, share love, create meaning, and enjoy the journey. May you find success that feels fulfilling and happiness that does not need anyone else’s approval.',
 'Even if today feels ordinary, you are building memories and becoming someone new with every choice. Keep looking for beauty in the details: a kind word, a warm drink, a lovely sunset, or a fresh idea. The little things are often where happiness begins.',
 'May you always remember that being sensitive, hopeful, and deeply caring can be strengths. The world may ask you to become harder, but you can choose to become wiser while keeping your heart open. Protect your peace and let your compassion remain a beautiful part of who you are.',
 'You have made it through so many versions of yourself, and each one taught you something valuable. Honor the person you used to be while making space for who you are becoming. The future does not require you to be fearless; it only asks you to keep moving with hope.',
 'The most meaningful dreams often grow slowly, nourished by patience, courage, and a thousand small choices. Do not dismiss your progress just because the finish line is far away. You are creating something important every time you choose to keep believing in your possibilities.',
 'May the coming days bring you reasons to laugh unexpectedly, moments of calm when you need them most, and opportunities that feel like they were made for you. You deserve more than simply getting through each day. You deserve to feel excited about living it.',
 'Sometimes a new beginning arrives disguised as a change you did not ask for. Give yourself time to understand it, then look for the possibilities hidden inside. Your life can hold new friendships, fresh adventures, and beautiful dreams you have not even imagined yet.',
 'There is no single correct way to live a beautiful life. You can choose adventure, stability, creativity, connection, or a little of everything. Listen carefully to what makes you feel most alive, and give yourself permission to build a future that reflects your own heart.',
 'You are more than the things you accomplish or the expectations you meet. You are the laughter you share, the kindness you practice, the curiosity you carry, and the love you bring into ordinary moments. Never forget that your presence is already meaningful.',
 'When life feels overwhelming, return to what you can do today. One gentle choice, one honest conversation, and one small act of courage can begin to change your direction. You do not need to solve everything at once to make real and beautiful progress.',
 'Let your dreams be big enough to inspire you and your daily life be gentle enough to enjoy. You can work toward something wonderful while still appreciating where you are. May your journey be filled with purpose, warmth, and countless little reasons to smile.'
 ]
};
const QUOTES=QUOTE_POOLS.rose;
const GIFT_TYPES={rose:{label:'Rose',image:'rose.jpg',paper:'white'},donut:{label:'Donut',image:'donut.jpg',paper:'silver'},legendary:{label:'Hand Heart',image:'legendary.jpg',paper:'gold'}};
const normalizeGift=g=>g==='donut'||/donut|big|โดนัท/i.test(g)?'donut':g==='legendary'||g==='paw'||/legendary|paw|hand[ _-]?heart|อุ้งมือ|หัวใจ/i.test(g)?'legendary':'rose';
const pick=a=>a[Math.floor(Math.random()*a.length)];
const api=SUPABASE_URL+'/rest/v1/printer_events';
const headers={apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY};
async function sendPrint(name,gift){
 const tier=normalizeGift(gift),pool=QUOTE_POOLS[tier];
 const recent=await fetchRecent(1000);
 const used=new Set();
 // Recent rows are newest first. Reset starts a fresh quote cycle.
 for(const row of recent){const old=row.payload||{};if(old.type==='reset')break;if(normalizeGift(old.gift)===tier&&old.quote)used.add(old.quote)}
 let candidates=pool.filter(q=>!used.has(q));
 // When every quote in this tier has been used, begin a new cycle; avoid immediate repetition.
 if(!candidates.length){const previous=recent.find(r=>r.payload&&r.payload.quote&&normalizeGift(r.payload.gift)===tier);candidates=pool.filter(q=>q!==previous?.payload.quote);if(!candidates.length)candidates=pool}
 const item={uid:crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random(),name:name.replace(/^@/,'').trim().slice(0,35),gift:tier,avatar:pick(AVATARS),quote:pick(candidates)};
 if(!item.name)throw Error('กรุณากรอกชื่อผู้ส่ง');
 const res=await fetch(api,{method:'POST',headers:{...headers,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({room:ROOM,payload:item})});
 if(!res.ok)throw Error('ส่งไม่สำเร็จ ('+res.status+'): '+(await res.text()).slice(0,100));return item;
}
async function fetchPrints(after=0){const q=new URLSearchParams({select:'id,payload',room:'eq.'+ROOM,id:'gt.'+Number(after),order:'id.asc',limit:'100'});const res=await fetch(api+'?'+q,{headers,cache:'no-store'});if(!res.ok)throw Error('เชื่อมต่อไม่สำเร็จ ('+res.status+')');return res.json();}

async function sendReset(){const item={uid:'reset-'+Date.now()+'-'+Math.random().toString(36).slice(2),type:'reset'};const res=await fetch(api,{method:'POST',headers:{...headers,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({room:ROOM,payload:item})});if(!res.ok)throw Error('รีเซ็ตไม่สำเร็จ ('+res.status+')');return item}
async function fetchRecent(limit=1000){const q=new URLSearchParams({select:'id,payload',room:'eq.'+ROOM,order:'id.desc',limit:String(limit)});const r=await fetch(api+'?'+q,{headers,cache:'no-store'});if(!r.ok)throw Error('โหลดสถิติไม่สำเร็จ ('+r.status+')');return r.json()}
function leaderboard(rows){const counts=new Map();for(const row of rows){const x=row.payload||{};if(x.type==='reset')break;if(!x.name)continue;const name=String(x.name).trim().replace(/^@/,'');const key=name.toLowerCase();const old=counts.get(key)||{name,count:0};old.count++;counts.set(key,old)}return [...counts.values()].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name)).slice(0,10)}
