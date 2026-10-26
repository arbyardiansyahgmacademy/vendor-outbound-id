import{B as E}from"./defaultContent.ij3hH2Vd.js";const m=document.getElementById("blog-tbody"),d=document.getElementById("blog-modal"),y=document.getElementById("blog-form"),a=document.getElementById("blog-alert"),b=document.getElementById("b-title"),g=document.getElementById("b-slug");function x(){const o=localStorage.getItem("vo_blog");return o?JSON.parse(o):E}function p(o){localStorage.setItem("vo_blog",JSON.stringify(o)),v()}function v(){if(!m)return;const o=x();m.innerHTML=o.map((e,n)=>`
        <tr class="hover:bg-rose-950/40 transition-colors">
          <td class="py-3 px-4 font-bold text-white max-w-sm">
            <div class="truncate">${e.title}</div>
            <div class="text-[10px] text-rose-300/70 font-mono">/blog/${e.slug}</div>
          </td>
          <td class="py-3 px-4 text-amber-300 font-semibold">${e.category}</td>
          <td class="py-3 px-4 text-rose-200/80">${e.authorName}</td>
          <td class="py-3 px-4 text-rose-300/70">${e.readingTimeMinutes} mnt</td>
          <td class="py-3 px-4">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${e.status==="draft"?"bg-stone-800 text-rose-300":"bg-emerald-500/20 text-emerald-300"}">
              ${e.status==="draft"?"Draft":"Published"}
            </span>
          </td>
          <td class="py-3 px-4 text-right space-x-2">
            <a href="/blog/${e.slug}" target="_blank" class="px-2 py-1 rounded bg-stone-900 text-rose-200 text-[10px]">
              Lihat
            </a>
            <button class="edit-b-btn px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500 hover:text-stone-950 text-amber-300 text-[10px] font-bold border border-amber-500/40" data-idx="${n}">
              Edit
            </button>
            <button class="del-b-btn px-2.5 py-1 rounded bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] border border-rose-800/40" data-idx="${n}">
              Hapus
            </button>
          </td>
        </tr>
      `).join(""),document.querySelectorAll(".edit-b-btn").forEach(e=>{e.addEventListener("click",()=>{const n=Number(e.dataset.idx),t=o[n];t&&d&&(document.getElementById("blog-idx").value=String(n),document.getElementById("b-title").value=t.title,document.getElementById("b-slug").value=t.slug,document.getElementById("b-category").value=t.category,document.getElementById("b-answer-first").value=t.answerFirst||"",document.getElementById("b-excerpt").value=t.excerpt,document.getElementById("b-body").value=t.body,document.getElementById("b-status").value=t.status||"published",d.showModal())})}),document.querySelectorAll(".del-b-btn").forEach(e=>{e.addEventListener("click",()=>{if(confirm("Hapus artikel ini?")){const n=Number(e.dataset.idx);o.splice(n,1),p(o)}})})}v();b?.addEventListener("input",()=>{document.getElementById("blog-idx").value==="-1"&&g&&(g.value=b.value.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"))});document.getElementById("add-post-btn")?.addEventListener("click",()=>{y?.reset(),document.getElementById("blog-idx").value="-1",d?.showModal()});document.getElementById("close-blog-modal-btn")?.addEventListener("click",()=>d?.close());document.getElementById("cancel-blog-btn")?.addEventListener("click",()=>d?.close());y?.addEventListener("submit",o=>{o.preventDefault();const e=x(),n=Number(document.getElementById("blog-idx").value),t=document.getElementById("b-title").value,l=document.getElementById("b-slug").value,i=document.getElementById("b-category").value,c=document.getElementById("b-answer-first").value,s=document.getElementById("b-excerpt").value,r=document.getElementById("b-body").value,u=document.getElementById("b-status").value;n>=0?e[n]={...e[n],title:t,slug:l,category:i,answerFirst:c,excerpt:s,body:r,status:u}:e.unshift({id:"post-"+Date.now(),title:t,slug:l,excerpt:s,body:r,category:i,authorName:"Arby Ardiansyah",authorAvatar:"/images/author-artikel/author-artikel-arby-ardiansyah.webp",authorBio:"Lead Outbound Consultant & Fasilitator Tersertifikasi BNSP di Batu Malang.",thumbnailUrl:"/images/blog/panduan-lengkap-corporate-gathering-malang.webp",imageAlt:t,seoTitle:`${t} | Vendor Outbound`,seoDescription:s,canonicalUrl:`https://vendoroutbound.id/blog/${l}`,publishedAt:new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),readingTimeMinutes:Math.max(1,Math.ceil(r.split(" ").length/200)),answerFirst:c,status:u}),p(e),d?.close(),a&&(a.className="p-3 rounded-lg text-xs font-bold bg-emerald-950 text-emerald-200 border border-emerald-500 block",a.textContent="✓ Artikel berhasil disimpan!",setTimeout(()=>a.classList.add("hidden"),2500))});
