// Team bios
document.querySelectorAll('.member').forEach(m=>m.addEventListener('click',()=>{
  document.querySelectorAll('.bio').forEach(b=>b.classList.remove('show'));
  const b=document.getElementById(m.dataset.b);b.classList.add('show');
  b.scrollIntoView({behavior:'smooth',block:'nearest'});
}));
// Close mobile menu on link click
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menu').classList.remove('open')));
// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('yr').textContent=new Date().getFullYear();
// Contact form: opens the visitor's email app (no server needed).
// To send through a service instead, set the form's action to your Formspree/Netlify URL and remove this handler.
document.getElementById('cf').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const body=`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nTopic: ${f.get('topic')}\n\n${f.get('msg')}`;
  location.href='mailto:info@eyeproptical.com?subject='+encodeURIComponent('Website enquiry: '+f.get('topic'))+'&body='+encodeURIComponent(body);
});
