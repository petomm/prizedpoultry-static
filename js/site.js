'use strict';
// Display-only interactions. No network requests, cookies, storage or commerce APIs.
const scriptRoot = new URL('../', document.currentScript.src);
const asset = name => new URL('assets/images/' + name, scriptRoot).href;
const find = id => document.getElementById(id);
const put = (id, text) => { if (find(id)) find(id).textContent = text; };
const nav = find('site-nav');
addEventListener('scroll', () => nav?.classList.toggle('scrolled', scrollY > 60), {passive:true});
const slides = [
  {name:'HenGuard Worm Defense',heading:'Protect Your Flock <span class="italic">Naturally.</span>',description:'All-natural poultry cleanse & parasite prevention. A powerful papaya & pumpkin seed blend with oregano, thyme, garlic, and all-natural herbs.',image:'henguard-product.png',handle:'henguard-worm-defense'},
  {name:'Salmonella & E.Coli Defense',heading:'Defend Your Coop <span class="italic">Without Harsh Chemicals.</span>',description:'Comprehensive bacterial defense blend with powerful antimicrobial herbs. Protect your flock from harmful pathogens naturally.',image:'salmonella-defense.png',handle:'salmonella-defense'}
];
let slide = 0;
function showSlide(n) {
  slide=(n+slides.length)%slides.length; const p=slides[slide];
  if(!find('hero-product-img'))return;
  find('hero-headline').innerHTML=p.heading;
  put('product-name',p.name); put('product-description',p.description);
  find('hero-product-img').src=asset(p.image);find('hero-product-img').alt=p.name;
  document.querySelectorAll('.dot').forEach((e,i)=>{e.classList.toggle('active',i===slide);e.setAttribute('aria-label','Show '+slides[i].name);});
  if(find('hero-shop-btn')){find('hero-shop-btn').href=new URL('products/'+p.handle+'/',scriptRoot).href;find('hero-shop-btn').textContent='View '+(slide?'Salmonella':'HenGuard');}
}
document.querySelector('.hero-arrow-prev')?.addEventListener('click',()=>showSlide(slide-1));
document.querySelector('.hero-arrow-next')?.addEventListener('click',()=>showSlide(slide+1));
document.querySelectorAll('.dot').forEach((e,i)=>e.addEventListener('click',()=>showSlide(i)));
showSlide(0);
const productInfo={henguard:{...slides[0],subtitle:'All-Natural Poultry Cleanse & Parasite Prevention',background:'ingredients-bg.webp',features:['Papaya & Pumpkin Seed Blend','Oregano, Thyme & Garlic','No Chemicals or Synthetics','Safe for All Poultry Breeds','Human-Grade Ingredients','Made in America']},salmonella:{...slides[1],subtitle:'All-Natural Bacterial Defense for Your Flock',background:'salmonella-bg.jpg',features:['Echinacea & Black Cumin','Oregano, Thyme & Garlic','All-Natural Herbs & Seeds','Safe for All Poultry Breeds','Human-Grade Ingredients','Made in America']}};
document.querySelectorAll('.pd-tab').forEach(button=>button.addEventListener('click',()=>{
 const p=productInfo[button.dataset.product];
 document.querySelectorAll('.pd-tab').forEach(e=>e.classList.toggle('active',e===button));
 put('pd-title',p.name);put('pd-subtitle',p.subtitle);find('pd-main-img').src=asset(p.image);find('pd-main-img').alt=p.name;
 find('pd-image-wrap').style.backgroundImage=`url("${asset(p.background)}")`;
 find('pd-features').replaceChildren(...p.features.map(t=>{const li=document.createElement('li');li.textContent=t;return li}));
 find('pd-view-link').href=new URL('products/'+p.handle+'/',scriptRoot).href;
}));
for(const [selector,priceId] of [['.pd-size-btn','pd-price'],['.pp-variant-btn','pp-price']])document.querySelectorAll(selector).forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll(selector).forEach(e=>e.classList.toggle('active',e===button));
 put(priceId,'$'+Number(button.dataset.price.replace('$','')).toFixed(2));
 if(button.dataset.note)put('pd-weight-note',button.dataset.note);
}));
const thumbs=[...document.querySelectorAll('.pp-thumb')];let photo=0;
function showPhoto(n){if(!thumbs.length)return;photo=(n+thumbs.length)%thumbs.length;find('pp-main-img').src=thumbs[photo].dataset.full;find('pp-main-img').alt=thumbs[photo].alt;thumbs.forEach((t,i)=>t.classList.toggle('active',i===photo));put('pp-counter',`${photo+1} / ${thumbs.length}`);}
thumbs.forEach((e,i)=>{e.tabIndex=0;e.setAttribute('role','button');e.setAttribute('aria-label','View product photo '+(i+1));e.addEventListener('click',()=>showPhoto(i));e.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();showPhoto(i)}})});
find('pp-arrow-prev')?.addEventListener('click',()=>showPhoto(photo-1));find('pp-arrow-next')?.addEventListener('click',()=>showPhoto(photo+1));
