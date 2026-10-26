import{G as b}from"./defaultContent.ij3hH2Vd.js";const i=document.getElementById("gal-grid"),d=document.getElementById("upload-modal"),c=document.getElementById("upload-form"),a=document.getElementById("file-input"),l=document.getElementById("file-size-info"),n=document.getElementById("gal-alert");function m(){const t=localStorage.getItem("vo_gallery");return t?JSON.parse(t):b}function g(t){localStorage.setItem("vo_gallery",JSON.stringify(t)),u()}function u(){if(!i)return;const t=m();i.innerHTML=t.map((e,o)=>`
        <div class="rounded-xl bg-[#300205]/80 border border-rose-700/40 overflow-hidden shadow-card p-4 space-y-3">
          <div class="aspect-4/3 w-full overflow-hidden rounded-lg bg-black/50">
            <img src="${e.imageUrl}" alt="${e.altText||e.title}" class="w-full h-full object-cover" />
          </div>

          <div>
            <span class="text-[10px] uppercase font-bold text-amber-400">${e.category}</span>
            <h4 class="font-bold text-white text-xs uppercase mt-0.5">${e.title}</h4>
            <p class="text-[11px] text-rose-200/70 line-clamp-1 mt-0.5">${e.caption}</p>
          </div>

          <div class="pt-2 border-t border-rose-900/30 flex items-center justify-between text-xs">
            <span class="text-[10px] text-emerald-400 font-semibold">WebP Valid</span>
            <button class="del-gal-btn px-2.5 py-1 rounded bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] border border-rose-800/40" data-idx="${o}">
              Hapus
            </button>
          </div>
        </div>
      `).join(""),document.querySelectorAll(".del-gal-btn").forEach(e=>{e.addEventListener("click",()=>{if(confirm("Hapus foto ini dari galeri?")){const o=Number(e.dataset.idx);t.splice(o,1),g(t)}})})}u();a?.addEventListener("change",()=>{const t=a.files?.[0];if(t&&l){const e=(t.size/1024).toFixed(1);l.classList.remove("hidden"),t.size>102400?(l.className="text-[11px] text-amber-400 font-bold mt-1",l.textContent=`⚠️ Ukuran: ${e} KB (Melebihi target 100 KB, mohon kompresi bila memungkinkan)`):(l.className="text-[11px] text-emerald-400 font-bold mt-1",l.textContent=`✓ Ukuran: ${e} KB (Memenuhi target < 100 KB)`)}});document.getElementById("open-upload-btn")?.addEventListener("click",()=>{c?.reset(),l&&l.classList.add("hidden"),d?.showModal()});document.getElementById("close-upload-btn")?.addEventListener("click",()=>d?.close());document.getElementById("cancel-upload-btn")?.addEventListener("click",()=>d?.close());c?.addEventListener("submit",t=>{t.preventDefault();const e=m(),o=document.getElementById("g-title").value,p=document.getElementById("g-caption").value,f=document.getElementById("g-category").value,s=a?.files?.[0];let r="/images/gallery/gallery-1.webp";s&&(r=URL.createObjectURL(s)),e.unshift({id:"gal-"+Date.now(),title:o,caption:p,altText:o,category:f,imageUrl:r,width:800,height:600}),g(e),d?.close(),n&&(n.className="p-3 rounded-lg text-xs font-bold bg-emerald-950 text-emerald-200 border border-emerald-500 block",n.textContent="✓ Foto berhasil diunggah ke galeri!",setTimeout(()=>n.classList.add("hidden"),2500))});
