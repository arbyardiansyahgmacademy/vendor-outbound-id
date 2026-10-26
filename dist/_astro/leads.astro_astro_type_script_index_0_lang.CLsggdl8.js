import{D as m}from"./adminStore.DDson66S.js";import"./supabase.B882Lz42.js";const i=document.getElementById("leads-table-body"),u=document.getElementById("lead-search-input"),x=document.getElementById("lead-status-filter");function l(){const t=localStorage.getItem("vo_leads");return t?JSON.parse(t):m}function p(t){localStorage.setItem("vo_leads",JSON.stringify(t)),r()}function r(){if(!i)return;let t=l();const o=u?.value.toLowerCase().trim()||"",c=x?.value||"all";if(o&&(t=t.filter(e=>e.name.toLowerCase().includes(o)||e.whatsapp.includes(o)||e.organization&&e.organization.toLowerCase().includes(o))),c!=="all"&&(t=t.filter(e=>e.status===c)),t.length===0){i.innerHTML='<tr><td colspan="8" class="py-8 text-center text-rose-400">Tidak ada leads yang sesuai filter.</td></tr>';return}i.innerHTML=t.map((e,a)=>{const n=`https://wa.me/${e.whatsapp.replace(/[^0-9]/g,"")}?text=${encodeURIComponent(`Halo ${e.name}, kami dari tim Vendor Outbound Batu Malang ingin mengonfirmasi permintaan konsultasi program ${e.service_type}.`)}`;return`
          <tr class="hover:bg-rose-950/40 transition-colors">
            <td class="py-3.5 px-4 text-[11px] text-rose-300/70 whitespace-nowrap">
              ${new Date(e.created_at).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}
            </td>
            <td class="py-3.5 px-4">
              <div class="font-bold text-white text-xs">${e.name}</div>
              <div class="text-[11px] text-rose-300/80">${e.organization||"-"}</div>
            </td>
            <td class="py-3.5 px-4 font-mono text-amber-300">
              ${e.whatsapp}
            </td>
            <td class="py-3.5 px-4 font-semibold text-rose-100">
              ${e.service_type}
            </td>
            <td class="py-3.5 px-4 text-[11px]">
              <div>${e.participant_count?e.participant_count+" Peserta":"-"}</div>
              <div class="text-rose-300/70">${e.preferred_location||"Batu/Malang"}</div>
            </td>
            <td class="py-3.5 px-4 max-w-xs">
              <div class="text-xs text-rose-200/90 line-clamp-2" title="${e.message}">
                ${e.message}
              </div>
            </td>
            <td class="py-3.5 px-4 whitespace-nowrap">
              <select
                class="status-changer px-2 py-1 rounded text-[11px] font-bold bg-[#1C0103] border border-rose-700/60 text-amber-300"
                data-lead-idx="${a}"
              >
                <option value="Baru" ${e.status==="Baru"?"selected":""}>Baru</option>
                <option value="Dihubungi" ${e.status==="Dihubungi"?"selected":""}>Dihubungi</option>
                <option value="Follow-up" ${e.status==="Follow-up"?"selected":""}>Follow-up</option>
                <option value="Selesai" ${e.status==="Selesai"?"selected":""}>Selesai</option>
                <option value="Spam" ${e.status==="Spam"?"selected":""}>Spam</option>
              </select>
            </td>
            <td class="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
              <a
                href="${n}"
                target="_blank"
                class="px-2.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] inline-flex items-center gap-1 shadow"
              >
                <span>Chat WA</span>
              </a>
              <button
                type="button"
                class="delete-lead-btn px-2 py-1.5 rounded bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] border border-rose-800/40"
                data-lead-idx="${a}"
              >
                Hapus
              </button>
            </td>
          </tr>
        `}).join(""),document.querySelectorAll(".status-changer").forEach(e=>{e.addEventListener("change",a=>{const s=a.target,n=Number(s.dataset.leadIdx),d=l();d[n]&&(d[n].status=s.value,p(d))})}),document.querySelectorAll(".delete-lead-btn").forEach(e=>{e.addEventListener("click",()=>{if(confirm("Hapus data lead ini?")){const a=Number(e.dataset.leadIdx),s=l();s.splice(a,1),p(s)}})})}r();u?.addEventListener("input",r);x?.addEventListener("change",r);
