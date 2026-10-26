import{F as u}from"./defaultContent.ij3hH2Vd.js";const r=document.getElementById("faq-tbody"),d=document.getElementById("faq-modal"),l=document.getElementById("faq-form"),a=document.getElementById("faq-alert");function c(){const n=localStorage.getItem("vo_faqs");return n?JSON.parse(n):u}function i(n){localStorage.setItem("vo_faqs",JSON.stringify(n)),m()}function m(){if(!r)return;const n=c();r.innerHTML=n.map((e,t)=>`
        <tr class="hover:bg-rose-950/40 transition-colors">
          <td class="py-3 px-4 font-bold text-amber-400">${t+1}</td>
          <td class="py-3 px-4 font-bold text-white max-w-xs">${e.question}</td>
          <td class="py-3 px-4 text-rose-200/80 leading-relaxed max-w-md">${e.answer}</td>
          <td class="py-3 px-4 text-right space-x-2 whitespace-nowrap">
            <button class="edit-f-btn px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500 hover:text-stone-950 text-amber-300 text-[10px] font-bold border border-amber-500/40" data-idx="${t}">
              Edit
            </button>
            <button class="del-f-btn px-2.5 py-1 rounded bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] border border-rose-800/40" data-idx="${t}">
              Hapus
            </button>
          </td>
        </tr>
      `).join(""),document.querySelectorAll(".edit-f-btn").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.dataset.idx),o=n[t];o&&d&&(document.getElementById("faq-idx").value=String(t),document.getElementById("f-question").value=o.question,document.getElementById("f-answer").value=o.answer,d.showModal())})}),document.querySelectorAll(".del-f-btn").forEach(e=>{e.addEventListener("click",()=>{if(confirm("Hapus pertanyaan FAQ ini?")){const t=Number(e.dataset.idx);n.splice(t,1),i(n)}})})}m();document.getElementById("add-faq-btn")?.addEventListener("click",()=>{l?.reset(),document.getElementById("faq-idx").value="-1",d?.showModal()});document.getElementById("close-faq-modal-btn")?.addEventListener("click",()=>d?.close());document.getElementById("cancel-faq-btn")?.addEventListener("click",()=>d?.close());l?.addEventListener("submit",n=>{n.preventDefault();const e=c(),t=Number(document.getElementById("faq-idx").value),o=document.getElementById("f-question").value,s=document.getElementById("f-answer").value;t>=0?e[t]={...e[t],question:o,answer:s}:e.push({id:"faq-"+Date.now(),pageSlug:"/",question:o,answer:s,sortOrder:e.length+1}),i(e),d?.close(),a&&(a.className="p-3 rounded-lg text-xs font-bold bg-emerald-950 text-emerald-200 border border-emerald-500 block",a.textContent="✓ Data FAQ berhasil disimpan!",setTimeout(()=>a.classList.add("hidden"),2500))});
