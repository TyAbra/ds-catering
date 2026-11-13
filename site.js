// Hero photo crossfade (home page only).
(function(){
  const imgs=[...document.querySelectorAll('#crossfade img')];
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||imgs.length<2)return;
  let i=0,t;
  const step=()=>{imgs[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].classList.add('on')};
  const run=()=>{clearInterval(t);if(!document.hidden)t=setInterval(step,5600)};
  imgs.slice(1).forEach(im=>{im.loading='eager'});
  document.addEventListener('visibilitychange',run);run();
})();
// Fade sections in as they scroll into view. Without IntersectionObserver, show everything.
(function(){
  const els=document.querySelectorAll('.rise');
  if(!('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('section').forEach(s=>s.querySelectorAll('.rise').forEach((el,k)=>{el.style.transitionDelay=((k%4)*80)+'ms'}));
  els.forEach(el=>io.observe(el));
})();
