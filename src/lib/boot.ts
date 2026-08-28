/**
 * Blocking inline script injected in <head>, before first paint.
 *
 * It does two things that MUST happen before the React bundle loads:
 *
 *  1. Theme resolution — sets .dark/.light up front so there is no flash of
 *     the wrong theme while ThemeContext hydrates.
 *
 *  2. The scroll-reveal engine — a ~40-line IntersectionObserver. Reveal
 *     animations previously came from framer-motion's `initial={{opacity:0}}`,
 *     which meant every element was server-rendered invisible and stayed
 *     invisible until a 250kB bundle hydrated. Measured FCP was 3.2s on
 *     localhost. Now: content is visible by default, the `js` class (set here,
 *     pre-paint) is what opts it into being hidden, and the reveal runs
 *     independent of React. If the bundle is slow or fails outright, the page
 *     is still fully readable.
 */
export const bootScript = `(function(){
  var d=document, r=d.documentElement;
  try{
    var t=localStorage.getItem('theme');
    if(!t) t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    r.classList.add(t);
  }catch(e){ r.classList.add('light'); }

  var reduce=false;
  try{ reduce=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  if(reduce||!('IntersectionObserver' in window)) return;

  r.classList.add('js');

  var io=new IntersectionObserver(function(entries){
    for(var i=0;i<entries.length;i++){
      var e=entries[i];
      if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }
  },{rootMargin:'0px 0px -12% 0px',threshold:0.01});

  function scan(root){
    var els=(root||d).querySelectorAll('.reveal:not(.is-visible)');
    for(var i=0;i<els.length;i++){
      var el=els[i];
      // Already on screen at load: show immediately, do not wait for a scroll.
      if(el.getBoundingClientRect().top < innerHeight*0.92){ el.classList.add('is-visible'); }
      else io.observe(el);
    }
  }

  function start(){
    scan();
    new MutationObserver(function(){ scan(); })
      .observe(d.body,{childList:true,subtree:true});
  }

  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',start);
  else start();
})();`
