import{P as y}from"./defaultContent.ij3hH2Vd.js";const u=document.getElementById("packages-tbody"),o=document.getElementById("pkg-modal"),p=document.getElementById("pkg-form"),g=document.getElementById("pkg-cat-filter"),l=document.getElementById("pkg-alert");function b(){const t=localStorage.getItem("vo_packages");return t?JSON.parse(t):y}function x(t){localStorage.setItem("vo_packages",JSON.stringify(t)),r()}function r(){if(!u)return;let t=b();const n=g?.value||"all";n!=="all"&&(t=t.filter(e=>e.categorySlug===n)),u.innerHTML=t.map((e,d)=>`
        <tr class="hover:bg-rose-950/40 transition-colors">
          <td class="py-3 px-4 font-bold text-white">${e.title}</td>
          <td class="py-3 px-4 text-amber-300 font-semibold">${e.categoryName}</td>
          <td class="py-3 px-4 text-rose-200/80">${e.duration}</td>
          <td class="py-3 px-4 text-[11px] text-rose-300/70">${e.priceLabel}</td>
          <td class="py-3 px-4">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">Published</span>
          </td>
          <td class="py-3 px-4 text-right space-x-2">
            <button class="edit-p-btn px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500 hover:text-stone-950 text-amber-300 text-[10px] font-bold border border-amber-500/40" data-idx="${d}">
              Edit
            </button>
            <button class="del-p-btn px-2.5 py-1 rounded bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] border border-rose-800/40" data-idx="${d}">
              Hapus
            </button>
          </td>
        </tr>
      `).join(""),document.querySelectorAll(".edit-p-btn").forEach(e=>{e.addEventListener("click",()=>{const d=Number(e.dataset.idx),a=t[d];a&&o&&(document.getElementById("pkg-idx").value=String(d),document.getElementById("p-title").value=a.title,document.getElementById("p-category").value=a.categorySlug,document.getElementById("p-duration").value=a.duration,document.getElementById("p-excerpt").value=a.excerpt,document.getElementById("p-price").value=a.priceLabel,o.showModal())})}),document.querySelectorAll(".del-p-btn").forEach(e=>{e.addEventListener("click",()=>{if(confirm("Hapus paket ini?")){const d=Number(e.dataset.idx);t.splice(d,1),x(t)}})})}r();g?.addEventListener("change",r);document.getElementById("add-pkg-btn")?.addEventListener("click",()=>{p?.reset(),document.getElementById("pkg-idx").value="-1",o?.showModal()});document.getElementById("close-pkg-modal-btn")?.addEventListener("click",()=>o?.close());document.getElementById("cancel-pkg-btn")?.addEventListener("click",()=>o?.close());p?.addEventListener("submit",t=>{t.preventDefault();const n=b(),e=Number(document.getElementById("pkg-idx").value),d=document.getElementById("p-title").value,a=document.getElementById("p-category").value,s=document.getElementById("p-duration").value,c=document.getElementById("p-excerpt").value,i=document.getElementById("p-price").value,m=a==="perusahaan"?"Perusahaan":a==="family-gathering"?"Family Gathering":a==="sekolah"?"Sekolah":"Wisata & Adventure";e>=0?n[e]={...n[e],title:d,categorySlug:a,categoryName:m,duration:s,excerpt:c,priceLabel:i}:n.push({id:"pkg-"+Date.now(),categorySlug:a,categoryName:m,title:d,slug:d.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),excerpt:c,imageUrl:"/images/packages/team-building.webp",activities:["Aktivitas Tim Terpilih"],features:["Instruktur & Fasilitator","Air Mineral","P3K"],duration:s,priceLabel:i,featured:!1,sortOrder:n.length+1}),x(n),o?.close(),l&&(l.className="p-3 rounded-lg text-xs font-bold bg-emerald-950 text-emerald-200 border border-emerald-500 block",l.textContent="✓ Data paket berhasil disimpan!",setTimeout(()=>l.classList.add("hidden"),2500))});
