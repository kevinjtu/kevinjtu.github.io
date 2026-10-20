'use strict';
(() => {
const data = window.SITE_DATA;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paths = {
 email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
 github:'<path d="M9 19c-4.3 1.3-4.3-2.2-6-2.6m12 5v-3.4c0-1 .1-1.5-.5-2.2 3.4-.4 6.9-1.7 6.9-7.5A5.8 5.8 0 0 0 20 4.2 5.5 5.5 0 0 0 19.9 1S18.5.6 15.5 2.5a15.7 15.7 0 0 0-8 0C4.5.6 3.1 1 3.1 1A5.5 5.5 0 0 0 3 4.2a5.8 5.8 0 0 0-1.4 4.1c0 5.8 3.5 7.1 6.9 7.5-.5.6-.6 1.3-.5 2.2v3.4"/>',
 scholar:'<path d="m2 8 10-5 10 5-10 5Z"/><path d="M5 10v7c4 3 10 3 14 0v-7M22 8v9"/>',
 linkedin:'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 10v7m0-11v1m4 10v-7m0 3c0-4 6-4 6 0v4"/>',
 twitter:'<path d="m4 3 16 18M20 3 4 21M4 3h5l11 18h-5Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 moon:'<path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
 galaxy:'<circle cx="12" cy="12" r="2"/><path d="M5 4c8-7 20 6 13 13M19 20C11 27-1 14 6 7M3 12h1m16 0h1M12 3v1m0 16v1"/>',
 star:'<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',
 person:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3Z"/>',
 dna:'<path d="M5 2c0 10 14 10 14 20M19 2c0 10-14 10-14 20M6 5h12M8 9h8M8 15h8M6 19h12"/>',
 health:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M4 12h4l2-4 4 8 2-4h4"/>',
 leaf:'<path d="M21 3C8 2 1 7 4 16c9 8 18-2 17-13ZM3 22 17 8"/>',
 paper:'<path d="M5 2h9l5 5v15H5ZM14 2v6h5M8 12h8M8 16h8"/>',
 link:'<path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m0 2 1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0"/>',
 shuffle:'<path d="M3 6h3c5 0 7 12 12 12h3m-4-4 4 4-4 4M3 18h3c5 0 7-12 12-12h3m-4-4 4 4-4 4"/>',
 expand:'<path d="M9 3H3v6m12-6h6v6M3 15v6h6m6 0h6v-6"/>',
 book:'<path d="M12 5C8 2 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-2-7-1-10 1Zm0 0v16"/>'
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.paper}</svg>`;
$$('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
const socials = [ ['Email','mailto:kevin.tu@som.umaryland.edu','email'],['GitHub','https://github.com/kevinjtu','github'],['Google Scholar','https://scholar.google.com/citations?user=AjwcQlcAAAAJ&hl=en','scholar'],['LinkedIn','https://www.linkedin.com/in/thekevintu/','linkedin'],['Twitter','https://twitter.com/thekevintu','twitter'] ];
$$('[data-social]').forEach(el => el.innerHTML = socials.map(([label,url,img])=>`<a href="${esc(url)}" aria-label="${label}" title="${label}">${icon(img)}</a>`).join(''));
function themeUI(){const dark=document.documentElement.classList.contains('dark');$('#theme-toggle').innerHTML=icon(dark?'moon':'sun');$('#theme-toggle').setAttribute('aria-label',dark?'Dark mode (click for light)':'Light mode (click for dark)');document.querySelector('meta[name="theme-color"]').content=dark?'#1c1917':'#fafaf9';}
$('#theme-toggle').addEventListener('click',()=>{document.documentElement.classList.toggle('dark');try{localStorage.setItem('kevin-theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch{}themeUI()});themeUI();
const closeMenu=()=>{$('#nav-sections').classList.remove('open');$('#menu-toggle').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label','Open menu')};
$('#menu-toggle').addEventListener('click',()=>{const open=$('#nav-sections').classList.toggle('open');$('#menu-toggle').classList.toggle('open',open);$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#menu-toggle').setAttribute('aria-label',open?'Close menu':'Open menu')});
$$('#nav-sections a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
let scrollPending=false;
function updateNavigation(){scrollPending=false;$('#navigation').classList.toggle('scrolled',window.scrollY>10);let current='bio';$$('main > section').forEach(s=>{if(s.getBoundingClientRect().top<130)current=s.id});$$('#nav-sections a').forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateNavigation)}},{passive:true});updateNavigation();
function timeline(items){return items.map(e=>`<li><div class="timeline-entry">${e.logo?`<img class="timeline-logo" src="assets/${esc(e.logo)}.svg" alt="" width="42" height="42">`:''}<div class="timeline-main"><strong>${esc(e.title)}${e.url?`<a class="tiny-link" href="${esc(e.url)}" aria-label="${esc(e.title)} website">${icon('link')}</a>`:''}</strong><span class="timeline-role">${esc(e.role)}</span></div></div><div class="timeline-meta"><span class="timeline-location">${esc(e.location)}</span><span class="timeline-date">${esc(e.date)}</span></div></li>`).join('')}
$('#education-list').innerHTML=timeline(data.education);$('#experience-list').innerHTML=timeline(data.experience);$('#work-list').innerHTML=timeline(data.work);
const topicDefs={precision:{label:'Precision medicine',icon:'dna',color:'var(--purple)'},access:{label:'Access to care',icon:'health',color:'var(--blue)'},sustainability:{label:'Sustainable science',icon:'leaf',color:'var(--green)'},education:{label:'Education',icon:'book',color:'var(--amber)'}};
const state={view:'list',filter:'all',topic:'all'};
const mainFilters=[['all','All','list'],['featured','Featured','star'],['first','First author','person']];
$('#publication-filters').innerHTML=mainFilters.map(([key,label,img])=>`<button class="pill${key==='all'?' active':''}" data-filter="${key}" aria-pressed="${key==='all'}">${icon(img)}${label}</button>`).join('');
$('#topic-filters').innerHTML=Object.entries(topicDefs).map(([key,t])=>`<button class="pill" data-filter-topic="${key}" aria-pressed="false" style="--filter:${t.color}">${icon(t.icon)}${t.label}</button>`).join('');
function filtered(){return data.publications.filter(p=>(state.filter==='all'||state.filter==='featured'&&p.featured||state.filter==='first'&&p.first)&&(state.topic==='all'||p.topics.includes(state.topic)))}
function authors(p){return esc(p.authors).replace(/Kevin J\. Tu|Tu KJ|Tu K/g,'<strong>$&</strong>')}
function pubLinks(p){return `<div class="pub-links">${p.url?`<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${icon('paper')} Paper</a>`:''}<button data-paper="${esc(p.id)}">Details</button></div>`}
function pubItem(p){return `<article class="pub-item${p.first?' first':''}" data-pub-id="${esc(p.id)}"><button class="pub-thumb-button" data-paper="${esc(p.id)}" aria-label="View ${esc(p.title)}">${p.thumbnail?`<img class="pub-thumb" src="${esc(p.thumbnail)}" alt="Figure from ${esc(p.title)}" loading="lazy" width="80" height="102">`:`<span class="pub-thumb pub-placeholder">${icon(topicDefs[p.topics[0]]?.icon||'paper')}</span>`}</button><div class="pub-content">${p.url?`<a class="pub-title" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a>`:`<button class="pub-title" data-paper="${esc(p.id)}">${esc(p.title)}</button>`}<p class="pub-authors">${authors(p)}</p><p class="pub-journal">${esc(p.journal)}${p.status==='published'?`, ${p.year}`:''}${p.status!=='published'?` <span class="status-label">· ${p.status==='accepted'?'Accepted':'Under review'}</span>`:''}</p>${pubLinks(p)}</div></article>`}
function renderPublications(){
 $$('[data-filter]').forEach(b=>{const active=b.dataset.filter===state.filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 $$('[data-filter-topic]').forEach(b=>{const active=b.dataset.filterTopic===state.topic;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 const items=filtered(),groups=new Map();
 for(const p of items){const group=p.status==='under review'?'Under review':String(p.year);if(!groups.has(group))groups.set(group,[]);groups.get(group).push(p)}
 const keys=[...groups.keys()].sort((a,b)=>a==='Under review'?1:b==='Under review'?-1:Number(b)-Number(a));
 $('#publication-list').innerHTML=items.length?keys.map(key=>`<div class="year-group"><h3 class="year-heading">${key}</h3>${groups.get(key).map(pubItem).join('')}</div>`).join(''):'<p class="no-results">No publications match these filters. Select All or choose another research area.</p>';
 if(state.view==='galaxy')renderGalaxy();
}
function setView(view){state.view=view;$$('[data-view]').forEach(b=>{const active=b.dataset.view===view;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});$('#publication-list').hidden=view!=='list';$('#list-intro').hidden=view!=='list';$('#galaxy-view').hidden=view!=='galaxy';renderPublications()}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.filter=b.dataset.filter;if(state.filter==='all')state.topic='all';renderPublications()}));
$$('[data-filter-topic]').forEach(b=>b.addEventListener('click',()=>{state.topic=state.topic===b.dataset.filterTopic?'all':b.dataset.filterTopic;renderPublications()}));
$$('[data-topic]').forEach(b=>b.addEventListener('click',()=>{state.filter='all';state.topic=b.dataset.topic;setView('list');$('#publications').scrollIntoView({behavior:'smooth'})}));
$$('[data-featured-link]').forEach(a=>a.addEventListener('click',()=>{state.filter='featured';state.topic='all';setView('list')}));
$('#abstract-list').innerHTML=data.abstracts.map(s=>`<li>${esc(s)}</li>`).join('');
const paperDialog=$('#paper-dialog');
function openPaper(id){const p=data.publications.find(p=>p.id===id);if(!p)return;$('#paper-dialog-content').innerHTML=`${p.thumbnail?`<img class="paper-preview" src="${esc(p.thumbnail)}" alt="Published figure from ${esc(p.title)}">`:''}<p class="dialog-topic">${p.topics.map(t=>esc(topicDefs[t].label)).join(' · ')}</p><h3 id="paper-dialog-title">${esc(p.title)}</h3><p class="pub-authors">${authors(p)}</p><p class="pub-journal">${esc(p.journal)} · ${p.status==='under review'?'Under review':`${p.year}${p.status==='accepted'?' · Accepted':''}`}</p>${p.doi?`<p class="note">DOI: ${esc(p.doi)}</p>`:''}<div class="pub-links">${p.url?`<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Read paper ↗</a>`:''}${p.figure_source?`<a href="${esc(p.figure_source)}" target="_blank" rel="noopener noreferrer">Original figure ↗</a>`:''}</div>`;if(!paperDialog.open)paperDialog.showModal()}
$('#paper-dialog .dialog-close').addEventListener('click',()=>paperDialog.close());paperDialog.addEventListener('click',e=>{if(e.target===paperDialog){const r=paperDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)paperDialog.close()}});
$('#publications').addEventListener('click',e=>{const b=e.target.closest('[data-paper]');if(b)openPaper(b.dataset.paper)});
let transform={x:0,y:0,scale:1};let dragging=null,suppressClick=false;
const galaxy=$('#galaxy'),pan=$('#galaxy-pan');
function applyTransform(){pan.setAttribute('transform',`translate(${transform.x},${transform.y}) scale(${transform.scale})`)}
function renderGalaxy(){
 const list=filtered(),centers={precision:[245,215],access:[575,205],sustainability:[470,420],education:[160,445]},groups={};
 list.forEach(p=>{const t=state.topic==='all'?p.topics[0]:state.topic;(groups[t]??=[]).push(p)});
 let markup='<defs>';
 for(const p of list)markup+=`<clipPath id="clip-${p.id}"><circle r="25"/></clipPath>`;
 markup+='</defs>';
 Object.entries(groups).forEach(([t,items])=>{const [cx,cy]=centers[t],topic=topicDefs[t];markup+=`<text class="galaxy-label" x="${cx}" y="${cy-105}">${esc(topic.label)}</text>`;items.forEach((p,i)=>{const angle=i*2.399963229728653;const r=items.length===1?0:36*Math.sqrt(i);const x=cx+r*Math.cos(angle),y=cy+r*Math.sin(angle);markup+=`<line class="galaxy-line" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/><g class="galaxy-node" transform="translate(${x},${y})" role="button" tabindex="0" aria-label="${esc(p.title)}" data-paper="${p.id}"><title>${esc(p.title)}</title><circle r="27" fill="var(--card)" stroke="${topic.color}" stroke-width="3"/>${p.thumbnail?`<image href="${esc(p.thumbnail)}" x="-25" y="-25" width="50" height="50" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-${p.id})"/>`:`<text text-anchor="middle" dominant-baseline="central" fill="${topic.color}" font-size="11" font-family="Inter,sans-serif">${p.status==='under review'?'MS':p.year}</text>`}</g>`})});
 if(!list.length)markup+='<text x="400" y="290" class="galaxy-label">No publications match these filters.</text>';
 pan.innerHTML=markup;applyTransform();
}
function zoom(factor){const next=Math.max(.45,Math.min(3.5,transform.scale*factor));const ratio=next/transform.scale;transform.x=400-(400-transform.x)*ratio;transform.y=290-(290-transform.y)*ratio;transform.scale=next;applyTransform()}
$('#zoom-in').addEventListener('click',()=>zoom(1.2));$('#zoom-out').addEventListener('click',()=>zoom(1/1.2));
$('#reset-galaxy').addEventListener('click',()=>{transform={x:0,y:0,scale:1};state.filter='all';state.topic='all';renderPublications()});
$('#random-paper').addEventListener('click',()=>{const p=filtered();if(p.length)openPaper(p[Math.floor(Math.random()*p.length)].id)});
galaxy.addEventListener('wheel',e=>{e.preventDefault();zoom(e.deltaY<0?1.1:1/1.1)},{passive:false});
galaxy.addEventListener('pointerdown',e=>{if(e.button!==0)return;dragging={id:e.pointerId,x:e.clientX,y:e.clientY,tx:transform.x,ty:transform.y,paper:e.target.closest('[data-paper]')?.dataset.paper};suppressClick=false;galaxy.setPointerCapture(e.pointerId);galaxy.classList.add('dragging')});
galaxy.addEventListener('pointermove',e=>{if(!dragging||dragging.id!==e.pointerId)return;const dx=e.clientX-dragging.x,dy=e.clientY-dragging.y;if(Math.abs(dx)+Math.abs(dy)>5)suppressClick=true;const ratio=800/galaxy.getBoundingClientRect().width;transform.x=dragging.tx+dx*ratio;transform.y=dragging.ty+dy*ratio;applyTransform()});
function endDrag(e){if(dragging&&dragging.id===e.pointerId){if(galaxy.hasPointerCapture(e.pointerId))galaxy.releasePointerCapture(e.pointerId);dragging=null;galaxy.classList.remove('dragging')}}
galaxy.addEventListener('pointerup',e=>{const paper=dragging?.paper;if(paper&&!suppressClick)openPaper(paper);endDrag(e)});galaxy.addEventListener('pointercancel',endDrag);
galaxy.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false}},true);
galaxy.addEventListener('keydown',e=>{const n=e.target.closest('[data-paper]');if(n&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openPaper(n.dataset.paper)}});
function details(items){return items.map(a=>`<details class="award-item"><summary><span><span class="award-name">${esc(a.title)}</span><span class="award-meta">${esc(a.meta)}</span></span><span class="chevron"></span></summary><div class="award-desc">${esc(a.description)}${a.url?` <a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">View record ↗</a>`:''}</div></details>`).join('')}
$('#award-list').innerHTML=details(data.awards);$('#grant-list').innerHTML=details(data.grants);$('#patent-list').innerHTML=details([{title:'Fume hood energy usage optimization system',meta:'US20250129956A1 · Published patent application',description:'Kevin Tu, Telon Yan, Oliver D’Esposito, Ann-Audrey Ezi, Tyler Kiyoshi Colenbrander, and Michael Li.',url:'https://patents.google.com/patent/US20250129956A1/en'}]);
function renderTalks(group){$('#talk-list').innerHTML=data.talks.filter(t=>t.group===group).map(t=>`<details class="talk-item"><summary><span><strong>${esc(t.title)}${t.upcoming?'<span class="upcoming">Upcoming</span>':''}</strong><span class="talk-info">${esc(t.year)} · ${group==='poster'?'Poster presentation':group==='local'?'Local presentation':'National / international presentation'}</span></span><span class="chevron"></span></summary><p>${esc(t.citation)}</p></details>`).join('');$$('[data-talk]').forEach(b=>{const active=b.dataset.talk===group;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))})}
$$('[data-talk]').forEach(b=>b.addEventListener('click',()=>renderTalks(b.dataset.talk)));renderTalks('national');
$('#news-carousel').innerHTML=data.news.map(n=>`<a class="news-card" href="${esc(n.url)}" target="_blank" rel="noopener noreferrer">${n.image?`<img class="news-image" src="${esc(n.image)}" alt="" loading="lazy">`:`<div class="news-placeholder">${esc(n.source)}</div>`}<div class="news-body"><span class="news-source">${esc(n.source)}</span><h3 class="news-title">${esc(n.title)}</h3><span class="news-date">${esc(n.date)}</span><span class="news-read">${n.source==='WMAR'?'Watch':'Read'} ↗</span></div></a>`).join('');
const carousel=$('#news-carousel');function newsButtons(){$('#news-prev').disabled=carousel.scrollLeft<=1;$('#news-next').disabled=carousel.scrollLeft+carousel.clientWidth>=carousel.scrollWidth-2}
$('#news-prev').addEventListener('click',()=>carousel.scrollBy({left:-carousel.clientWidth*.8,behavior:'smooth'}));$('#news-next').addEventListener('click',()=>carousel.scrollBy({left:carousel.clientWidth*.8,behavior:'smooth'}));carousel.addEventListener('scroll',newsButtons,{passive:true});window.addEventListener('resize',newsButtons);requestAnimationFrame(newsButtons);
$('#gallery').innerHTML=data.photos.map((p,i)=>`<button class="gallery-btn ${p.size||''}" data-photo="${i}" aria-label="${esc(p.alt)}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" width="400" height="400"><span class="gallery-caption">${esc(p.alt)}</span></button>`).join('');
const photoDialog=$('#photo-dialog');let currentPhoto=0;function showPhoto(index){currentPhoto=(index+data.photos.length)%data.photos.length;const p=data.photos[currentPhoto];$('#lightbox-image').src=p.src;$('#lightbox-image').alt=p.alt;$('#lightbox-caption').textContent=p.alt;if(!photoDialog.open)photoDialog.showModal()}
$('#gallery').addEventListener('click',e=>{const b=e.target.closest('[data-photo]');if(b)showPhoto(Number(b.dataset.photo))});$('#photo-dialog .lightbox-close').addEventListener('click',()=>photoDialog.close());$('#photo-dialog .photo-prev').addEventListener('click',()=>showPhoto(currentPhoto-1));$('#photo-dialog .photo-next').addEventListener('click',()=>showPhoto(currentPhoto+1));photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)photoDialog.close()});photoDialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(currentPhoto-1)}else if(e.key==='ArrowRight'){e.preventDefault();showPhoto(currentPhoto+1)}});
[photoDialog,paperDialog].forEach(d=>{d.addEventListener('close',()=>document.body.style.overflow='');new MutationObserver(()=>{if(d.open)document.body.style.overflow='hidden'}).observe(d,{attributes:true,attributeFilter:['open']})});
$('#copyright-year').textContent=new Date().getFullYear();renderPublications();
})();
