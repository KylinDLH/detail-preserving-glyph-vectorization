const tabs = [...document.querySelectorAll('[data-tab]')];
function activate(button) {
 tabs.forEach(t=>{const selected=t===button;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.dataset.tab).hidden=!selected;});
}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>activate(t));t.addEventListener('keydown',e=>{let j;if(e.key==='ArrowRight')j=(i+1)%tabs.length;if(e.key==='ArrowLeft')j=(i+tabs.length-1)%tabs.length;if(e.key==='Home')j=0;if(e.key==='End')j=tabs.length-1;if(j!==undefined){e.preventDefault();activate(tabs[j]);tabs[j].focus();}});});
const dialog=document.getElementById('lightbox'),image=document.getElementById('full-image');
document.querySelectorAll('[data-full]').forEach(b=>b.addEventListener('click',()=>{image.src=b.dataset.full;image.alt=b.querySelector('img').alt;dialog.showModal();}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
