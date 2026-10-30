import{B as f}from"./defaultContent.9dE4QXkE.js";import{s as B,d as I}from"./supabaseSync.Ir1-o2S7.js";import"./supabase.CLFogjFB.js";const g=document.getElementById("blog-tbody"),r=document.getElementById("blog-modal"),p=document.getElementById("blog-form"),c=document.getElementById("blog-alert"),y=document.getElementById("b-title"),v=document.getElementById("b-slug");function E(){const t=localStorage.getItem("vo_blog");return t?JSON.parse(t):f}function h(t){localStorage.setItem("vo_blog",JSON.stringify(t)),localStorage.setItem("vo_blogs",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("vo_content_updated",{detail:{key:"vo_blog",data:t}})),window.dispatchEvent(new Event("storage"));try{new BroadcastChannel("vo_sync_channel").postMessage({type:"VO_UPDATED",key:"vo_blog",data:t})}catch{}x()}function x(){if(!g)return;const t=E();g.innerHTML=t.map((e,n)=>`
        <tr class="hover:bg-[#163832]/50 transition-colors">
          <td class="py-3 px-4 font-bold text-white max-w-sm">
            <div class="flex items-center gap-2.5">
              <img src="${e.thumbnailUrl||"/images/hero-bromo-sunrise.webp"}" alt="${e.title}" class="w-10 h-8 rounded object-cover border border-[#235347] flex-shrink-0" />
              <div class="min-w-0">
                <div class="truncate">${e.title}</div>
                <div class="text-[10px] text-[#8EB69B] font-mono">/blog/${e.slug}</div>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-[#DAF1DE] font-semibold">${e.category}</td>
          <td class="py-3 px-4 text-[#DAF1DE]/80">${e.authorName}</td>
          <td class="py-3 px-4 text-[#8EB69B]">${e.readingTimeMinutes} mnt</td>
          <td class="py-3 px-4">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${e.status==="draft"?"bg-[#051F20] text-[#8EB69B] border border-[#235347]":"bg-[#235347]/60 text-[#DAF1DE] border border-[#8EB69B]/40"}">
              ${e.status==="draft"?"Draft":"Published"}
            </span>
          </td>
          <td class="py-3 px-4 text-right space-x-2">
            <a href="/blog/${e.slug}" target="_blank" class="px-2 py-1 rounded bg-[#051F20] text-[#DAF1DE] text-[10px] border border-[#235347]">
              Lihat
            </a>
            <button class="edit-b-btn px-2.5 py-1 rounded bg-[#163832] hover:bg-[#235347] text-[#DAF1DE] text-[10px] font-bold border border-[#235347]" data-idx="${n}">
              Edit
            </button>
            <button class="del-b-btn px-2.5 py-1 rounded bg-[#051F20] hover:bg-rose-950 text-rose-300 text-[10px] border border-[#235347]" data-idx="${n}">
              Hapus
            </button>
          </td>
        </tr>
      `).join("");const o=document.getElementById("b-thumb"),a=document.getElementById("b-thumb-preview"),l=document.getElementById("b-thumb-file");o?.addEventListener("input",()=>{a&&(a.src=o.value||"")}),document.querySelectorAll(".btn-bthumb-preset").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-val");n&&(o&&(o.value=n),a&&(a.src=n))})}),l?.addEventListener("change",()=>{const e=l.files?.[0];if(e){const n=new FileReader;n.onload=d=>{const s=d.target?.result;o&&(o.value=s),a&&(a.src=s)},n.readAsDataURL(e)}}),document.querySelectorAll(".edit-b-btn").forEach(e=>{e.addEventListener("click",()=>{const n=Number(e.dataset.idx),d=t[n];if(d&&r){document.getElementById("blog-idx").value=String(n),document.getElementById("b-title").value=d.title,document.getElementById("b-slug").value=d.slug,document.getElementById("b-category").value=d.category,document.getElementById("b-answer-first").value=d.answerFirst||"",document.getElementById("b-excerpt").value=d.excerpt,document.getElementById("b-body").value=d.body,document.getElementById("b-status").value=d.status||"published";const s=d.thumbnailUrl||"/images/hero-bromo-sunrise.webp";o&&(o.value=s),a&&(a.src=s),r.showModal()}})}),document.querySelectorAll(".del-b-btn").forEach(e=>{e.addEventListener("click",async()=>{if(confirm("Hapus artikel ini?")){const n=Number(e.dataset.idx),d=t[n]?.slug;t.splice(n,1),h(t),d&&await I(d)}})})}x();y?.addEventListener("input",()=>{document.getElementById("blog-idx").value==="-1"&&v&&(v.value=y.value.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"))});document.getElementById("add-post-btn")?.addEventListener("click",()=>{p?.reset(),document.getElementById("blog-idx").value="-1";const t=document.getElementById("b-thumb"),o=document.getElementById("b-thumb-preview");t&&(t.value="/images/hero-bromo-sunrise.webp"),o&&(o.src="/images/hero-bromo-sunrise.webp"),r?.showModal()});document.getElementById("close-blog-modal-btn")?.addEventListener("click",()=>r?.close());document.getElementById("cancel-blog-btn")?.addEventListener("click",()=>r?.close());p?.addEventListener("submit",async t=>{t.preventDefault();const o=E(),a=Number(document.getElementById("blog-idx").value),l=document.getElementById("b-title").value,e=document.getElementById("b-slug").value,n=document.getElementById("b-category").value,d=document.getElementById("b-answer-first").value,s=document.getElementById("b-excerpt").value,u=document.getElementById("b-body").value,m=document.getElementById("b-status").value,b=document.getElementById("b-thumb")?.value||"/images/hero-bromo-sunrise.webp";let i;a>=0?(o[a]={...o[a],title:l,slug:e,category:n,answerFirst:d,excerpt:s,body:u,status:m,thumbnailUrl:b},i=o[a]):(i={id:"post-"+Date.now(),title:l,slug:e,excerpt:s,body:u,category:n,authorName:"Arby Ardiansyah",authorAvatar:"/images/author-artikel/author-artikel-arby-ardiansyah.webp",authorBio:"Lead Outbound Consultant & Fasilitator Tersertifikasi BNSP di Batu Malang.",thumbnailUrl:b,imageAlt:l,seoTitle:`${l} | Provider Outbound`,seoDescription:s,canonicalUrl:`https://provideroutbound.web.id/blog/${e}`,publishedAt:new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),readingTimeMinutes:Math.max(1,Math.ceil(u.split(" ").length/200)),answerFirst:d,status:m},o.unshift(i)),h(o),r?.close(),B(i),c&&(c.className="p-3 rounded-lg text-xs font-bold bg-emerald-950 text-emerald-200 border border-emerald-500 block",c.textContent="✓ Artikel berhasil disimpan ke Front-End & Supabase!",setTimeout(()=>c.classList.add("hidden"),2500))});
