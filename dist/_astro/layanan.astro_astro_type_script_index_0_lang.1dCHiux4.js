import{S as g}from"./defaultContent.ij3hH2Vd.js";const l=document.getElementById("services-tbody"),d=document.getElementById("service-modal"),i=document.getElementById("service-form"),o=document.getElementById("service-alert");function m(){const n=localStorage.getItem("vo_services");return n?JSON.parse(n):g}function u(n){localStorage.setItem("vo_services",JSON.stringify(n)),v()}function v(){if(!l)return;const n=m();l.innerHTML=n.map((e,t)=>`
        <tr class="hover:bg-rose-950/40 transition-colors">
          <td class="py-3 px-4 font-bold text-amber-400">${t+1}</td>
          <td class="py-3 px-4">
            <img src="${e.imageUrl}" alt="${e.title}" class="w-12 h-8 object-cover rounded bg-stone-950" />
          </td>
          <td class="py-3 px-4 font-bold text-white">${e.title}</td>
          <td class="py-3 px-4 text-rose-300 font-mono text-[11px]">/layanan/${e.slug}</td>
          <td class="py-3 px-4 text-xs text-rose-200/80">${e.targetAudience||"-"}</td>
          <td class="py-3 px-4">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">Published</span>
          </td>
          <td class="py-3 px-4 text-right space-x-2">
            <button class="edit-svc-btn px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500 hover:text-stone-950 text-amber-300 text-[10px] font-bold border border-amber-500/40" data-idx="${t}">
              Edit
            </button>
            <button class="del-svc-btn px-2.5 py-1 rounded bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] border border-rose-800/40" data-idx="${t}">
              Hapus
            </button>
          </td>
        </tr>
      `).join(""),document.querySelectorAll(".edit-svc-btn").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.dataset.idx),s=n[t];s&&d&&(document.getElementById("service-id").value=String(t),document.getElementById("svc-title").value=s.title,document.getElementById("svc-slug").value=s.slug,document.getElementById("svc-excerpt").value=s.excerpt,document.getElementById("svc-target").value=s.targetAudience||"",d.showModal())})}),document.querySelectorAll(".del-svc-btn").forEach(e=>{e.addEventListener("click",()=>{if(confirm("Hapus item layanan ini?")){const t=Number(e.dataset.idx);n.splice(t,1),u(n)}})})}v();document.getElementById("add-service-btn")?.addEventListener("click",()=>{i?.reset(),document.getElementById("service-id").value="-1",d?.showModal()});document.getElementById("close-modal-btn")?.addEventListener("click",()=>d?.close());document.getElementById("cancel-btn")?.addEventListener("click",()=>d?.close());i?.addEventListener("submit",n=>{n.preventDefault();const e=m(),t=Number(document.getElementById("service-id").value),s=document.getElementById("svc-title").value,c=document.getElementById("svc-slug").value,a=document.getElementById("svc-excerpt").value,r=document.getElementById("svc-target").value;t>=0?e[t]={...e[t],title:s,slug:c,excerpt:a,targetAudience:r}:e.push({id:"svc-"+Date.now(),title:s,slug:c,excerpt:a,overview:a,targetAudience:r,benefits:["Kekompakan tim","Peningkatan komunikasi"],activities:["Ice Breaking","Team Simulation"],locationNote:"Kawasan Batu Malang",imageUrl:"/images/services/outbound-perusahaan.webp",featured:!0,sortOrder:e.length+1}),u(e),d?.close(),o&&(o.className="p-3 rounded-lg text-xs font-bold bg-emerald-950 text-emerald-200 border border-emerald-500 block",o.textContent="✓ Data layanan berhasil disimpan!",setTimeout(()=>o.classList.add("hidden"),2500))});
