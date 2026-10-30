import{D as n}from"./adminStore.DLpzSTC1.js";import"./supabase.CLFogjFB.js";const a=document.getElementById("dashboard-leads-tbody");if(a){const e=localStorage.getItem("vo_leads"),s=e?JSON.parse(e):n;s.length===0?a.innerHTML='<tr><td colspan="6" class="py-4 text-center text-[#8EB69B]">Belum ada leads masuk.</td></tr>':a.innerHTML=s.slice(0,5).map(t=>`
          <tr class="hover:bg-rose-950/40 transition-colors">
            <td class="py-3 px-3 font-semibold text-white">${t.name}</td>
            <td class="py-3 px-3 text-amber-300 font-mono">${t.whatsapp}</td>
            <td class="py-3 px-3">${t.service_type}</td>
            <td class="py-3 px-3">${t.participant_count?t.participant_count+" org":"-"}</td>
            <td class="py-3 px-3">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${t.status==="Baru"?"bg-amber-500/20 text-amber-300 border border-amber-400/30":"bg-emerald-500/20 text-emerald-300"}">${t.status}</span>
            </td>
            <td class="py-3 px-3 text-right">
              <a href="https://wa.me/${t.whatsapp.replace(/[^0-9]/g,"")}?text=${encodeURIComponent(`Halo ${t.name}, kami dari Provider Outbound Batu Malang ingin menindaklanjuti konsultasi kegiatan Anda.`)}" target="_blank" class="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px] hover:bg-emerald-500 inline-flex items-center gap-1 shadow">
                <i class="fab fa-whatsapp"></i>
                <span>Chat WA</span>
              </a>
            </td>
          </tr>
        `).join("")}
