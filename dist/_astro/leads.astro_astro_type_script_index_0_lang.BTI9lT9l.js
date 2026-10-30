import{D as m}from"./adminStore.DLpzSTC1.js";import"./supabase.CLFogjFB.js";const r=document.getElementById("leads-table-body"),u=document.getElementById("lead-search-input"),x=document.getElementById("lead-status-filter");function l(){const e=localStorage.getItem("vo_leads");return e?JSON.parse(e):m}function p(e){localStorage.setItem("vo_leads",JSON.stringify(e)),d()}function d(){if(!r)return;let e=l();const n=u?.value.toLowerCase().trim()||"",c=x?.value||"all";if(n&&(e=e.filter(t=>t.name.toLowerCase().includes(n)||t.whatsapp.includes(n)||t.organization&&t.organization.toLowerCase().includes(n))),c!=="all"&&(e=e.filter(t=>t.status===c)),e.length===0){r.innerHTML='<tr><td colspan="8" class="py-8 text-center text-[#8EB69B]">Tidak ada leads yang sesuai filter.</td></tr>';return}r.innerHTML=e.map((t,a)=>{const o=`https://wa.me/${t.whatsapp.replace(/[^0-9]/g,"")}?text=${encodeURIComponent(`Halo ${t.name}, kami dari tim Provider Outbound Batu Malang ingin mengonfirmasi permintaan konsultasi program ${t.service_type}.`)}`;return`
          <tr class="hover:bg-[#163832]/50 transition-colors">
            <td class="py-3.5 px-4 text-[11px] text-[#8EB69B]/70 whitespace-nowrap">
              ${new Date(t.created_at).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}
            </td>
            <td class="py-3.5 px-4">
              <div class="font-bold text-white text-xs">${t.name}</div>
              <div class="text-[11px] text-[#8EB69B]">${t.organization||"-"}</div>
            </td>
            <td class="py-3.5 px-4 font-mono text-[#DAF1DE]">
              ${t.whatsapp}
            </td>
            <td class="py-3.5 px-4 font-semibold text-white">
              ${t.service_type}
            </td>
            <td class="py-3.5 px-4 text-[11px]">
              <div>${t.participant_count?t.participant_count+" Peserta":"-"}</div>
              <div class="text-[#8EB69B]">${t.preferred_location||"Batu/Malang"}</div>
            </td>
            <td class="py-3.5 px-4 max-w-xs">
              <div class="text-xs text-[#DAF1DE]/80 line-clamp-2" title="${t.message}">
                ${t.message}
              </div>
            </td>
            <td class="py-3.5 px-4 whitespace-nowrap">
              <select
                class="status-changer px-2 py-1 rounded text-[11px] font-bold bg-[#051F20] border border-[#235347] text-[#DAF1DE]"
                data-lead-idx="${a}"
              >
                <option value="Baru" ${t.status==="Baru"?"selected":""}>Baru</option>
                <option value="Dihubungi" ${t.status==="Dihubungi"?"selected":""}>Dihubungi</option>
                <option value="Follow-up" ${t.status==="Follow-up"?"selected":""}>Follow-up</option>
                <option value="Selesai" ${t.status==="Selesai"?"selected":""}>Selesai</option>
                <option value="Spam" ${t.status==="Spam"?"selected":""}>Spam</option>
              </select>
            </td>
            <td class="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
              <a
                href="${o}"
                target="_blank"
                class="px-2.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] inline-flex items-center gap-1 shadow"
              >
                <span>Chat WA</span>
              </a>
              <button
                type="button"
                class="delete-lead-btn px-2 py-1.5 rounded bg-[#163832] hover:bg-rose-950 text-rose-300 text-[10px] border border-[#235347]"
                data-lead-idx="${a}"
              >
                Hapus
              </button>
            </td>
          </tr>
        `}).join(""),document.querySelectorAll(".status-changer").forEach(t=>{t.addEventListener("change",a=>{const s=a.target,o=Number(s.dataset.leadIdx),i=l();i[o]&&(i[o].status=s.value,p(i))})}),document.querySelectorAll(".delete-lead-btn").forEach(t=>{t.addEventListener("click",()=>{if(confirm("Hapus data lead ini?")){const a=Number(t.dataset.leadIdx),s=l();s.splice(a,1),p(s)}})})}d();u?.addEventListener("input",d);x?.addEventListener("change",d);
