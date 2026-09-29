(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const L={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",color:"#3b82f6",description:"Mengunci identitas, wajah, latar, atau pakaian agar tidak berubah"},IMAGE_EDIT:{id:"IMAGE_EDIT",label:"Edit & Transformasi Gambar",color:"#8b5cf6",description:"Mengubah bagian tertentu seperti pakaian, background, atau objek"},QUALITY_ENHANCE:{id:"QUALITY_ENHANCE",label:"Kualitas & Pencahayaan",color:"#10b981",description:"Meningkatkan ketajaman, resolusi, dan pencahayaan foto"},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas & Rasio Aspek",color:"#f59e0b",description:"Mengatur dimensi kanvas dan rasio aspek generasi"},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Gaya & Efek Visual",color:"#ec4899",description:"Menerapkan grading warna, sinematik, atau kedalaman"}},w=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"Wajah, Fitur Muka, Identitas Karakter",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",triggerSemantics:["jangan ubah wajah","pertahankan wajah","kunci muka","wajah asli","face lock","keep face","preserve identity","same face"],compatibility:["/outfit","/bgremove","/bgreplace","/enhance","/ar 9:16","/ar 16:9","/sharpen"],conflicts:["/faceedit","ubah wajah","ganti wajah","ekspresi baru","makeover wajah"],priority:"WAJIB",status:"active"},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"Rambut Subjek, Bentuk & Warna Rambut",description:"Menjaga gaya rambut, tekstur, helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",triggerSemantics:["pertahankan rambut","jangan ubah rambut","rambut asli","kunci rambut","keep hair","same haircut"],compatibility:["/facelock","/outfit","/bgremove","/enhance"],conflicts:["ganti gaya rambut","potong rambut","botak","ubah warna rambut","cat rambut"],priority:"WAJIB",status:"active"},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"Latar Belakang & Tata Ruang Sekitar",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",triggerSemantics:["jangan ubah latar","pertahankan background","latar asli","kunci background","keep background","same backdrop"],compatibility:["/facelock","/outfit","/enhance","/sharpen"],conflicts:["/bgremove","/bgreplace","hapus background","ganti latar","latar transparan"],priority:"WAJIB",status:"active"},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"Pakaian, Baju, Celana & Busana",description:"Mempertahankan busana, warna, dan tekstur pakaian asli subjek agar tidak berubah.",triggerSemantics:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","keep outfit","same clothes"],compatibility:["/facelock","/backgroundlock","/enhance","/ar 9:16"],conflicts:["/outfit","ganti baju","ubah pakaian","tanktop","jaket","gaun"],priority:"WAJIB",status:"active"},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"Postur Tubuh, Anatomi & Siluet",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",triggerSemantics:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","keep body","same pose"],compatibility:["/facelock","/outfit","/bgremove","/enhance"],conflicts:["ubah pose","ganti gestur","langsingkan","tubuh berotot"],priority:"WAJIB",status:"active"},{code:"/outfit",name:"Selective Outfit Replacement",category:"IMAGE_EDIT",target:"Area Busana & Pakaian Subjek",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",triggerSemantics:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","change clothes"],compatibility:["/facelock","/hairlock","/enhance","/ar 9:16"],conflicts:["/outfitlock","pertahankan pakaian","jangan ubah baju"],priority:"DISARANKAN",status:"active"},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"IMAGE_EDIT",target:"Latar Belakang / Backdrop",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",triggerSemantics:["hapus background","hapus latar","latar transparan","hilangkan latar belakang","remove background","clean cutout"],compatibility:["/facelock","/outfit","/enhance","/sharpen"],conflicts:["/backgroundlock","/bgreplace","pertahankan background","jangan ubah latar"],priority:"WAJIB",status:"active"},{code:"/bgreplace",name:"Background Scene Replacement",category:"IMAGE_EDIT",target:"Latar Belakang & Pencahayaan Lingkungan",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",triggerSemantics:["ganti background","ganti latar belakang","pindah ke studio","latar pantai","change background","new backdrop"],compatibility:["/facelock","/outfit","/enhance"],conflicts:["/backgroundlock","/bgremove","pertahankan background"],priority:"DISARANKAN",status:"active"},{code:"/headwear-remove",name:"Headwear / Hijab Removal",category:"IMAGE_EDIT",target:"Penutup Kepala / Aksesori Kepala / Hijab",description:"Melepaskan atau menghapus hijab, topi, atau penutup kepala sambil merekonstruksi rambut dan garis leher secara anatomis.",triggerSemantics:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","hapus topi","remove headwear","no hijab"],compatibility:["/facelock","/outfit","/enhance"],conflicts:["pertahankan hijab","jangan ubah hijab"],priority:"WAJIB",status:"active"},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"QUALITY_ENHANCE",target:"Seluruh Gambar, Ambience & Kontras",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",triggerSemantics:["perbaiki pencahayaan","pencahayaan foto","terangkan foto","tata cahaya","enhance lighting","fix lighting","lighting balance"],compatibility:["/facelock","/sharpen","/outfit","/hdr","/denoise"],conflicts:[],priority:"DISARANKAN",status:"active"},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"QUALITY_ENHANCE",target:"Detail Tekstur, Tepian Objek, Mata",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",triggerSemantics:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","sharpen image","crisp focus","high clarity"],compatibility:["/enhance","/facelock","/rawphoto","/denoise"],conflicts:["efek blur","soft focus"],priority:"DISARANKAN",status:"active"},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"QUALITY_ENHANCE",target:"Area Berbintik, Bayangan, Langit",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",triggerSemantics:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain"],compatibility:["/enhance","/sharpen","/facelock"],conflicts:["vintage grain","film grain"],priority:"OPSIONAL",status:"active"},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"QUALITY_ENHANCE",target:"Highlight Terbakar & Shadow Gelap",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",triggerSemantics:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight"],compatibility:["/enhance","/colorgrade","/rawphoto"],conflicts:[],priority:"OPSIONAL",status:"active"},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"Kanvas & Komposisi Vertikal (Stories / Reels)",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",triggerSemantics:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi"],compatibility:["/facelock","/outfit","/enhance","/fullbody"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5","rasio 16:9","rasio 1:1"],priority:"WAJIB",status:"active"},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"Kanvas & Komposisi Horizontal (Landscape / YouTube)",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",triggerSemantics:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],compatibility:["/facelock","/enhance","/cinematic"],conflicts:["/ar 9:16","/ar 1:1","rasio 9:16"],priority:"WAJIB",status:"active"},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"Kanvas Persegi Simetris (Feed Instagram)",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",triggerSemantics:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],compatibility:["/facelock","/outfit","/enhance"],conflicts:["/ar 9:16","/ar 16:9"],priority:"WAJIB",status:"active"},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"CANVAS_RATIO",target:"Skala Subjek dari Ujung Kepala ke Kaki",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",triggerSemantics:["tampilkan full body","seluruh tubuh","tampak badan penuh","full body shot","head to toe"],compatibility:["/ar 9:16","/outfit","/bodylock","/facelock"],conflicts:["close up","zoom wajah"],priority:"DISARANKAN",status:"active"},{code:"/cinematic",name:"Cinematic Mood & Depth Lighting",category:"STYLE_EFFECT",target:"Atmosfer Sinematik, Kontras & Grading",description:"Memberikan sentuhan sinematik ala layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",triggerSemantics:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis"],compatibility:["/enhance","/facelock","/colorgrade"],conflicts:[],priority:"OPSIONAL",status:"active"},{code:"/rawphoto",name:"Authentic RAW Photography Look",category:"STYLE_EFFECT",target:"Tekstur Kulit Alami & Sensor Kamera",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami.",triggerSemantics:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera"],compatibility:["/facelock","/enhance","/sharpen"],conflicts:["kartun","anime","vektor"],priority:"OPSIONAL",status:"active"},{code:"/colorgrade",name:"Master Color Grading",category:"STYLE_EFFECT",target:"Harmonisasi Palet Warna & Suasana",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",triggerSemantics:["color grading","atur warna","tone warna","palet warna estetik"],compatibility:["/enhance","/cinematic","/facelock"],conflicts:[],priority:"OPSIONAL",status:"active"}],A={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},v={getApiKey(){try{return localStorage.getItem(A.GEMINI_API_KEY)||""}catch{return""}},setApiKey(s){try{return s?localStorage.setItem(A.GEMINI_API_KEY,s.trim()):localStorage.removeItem(A.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(A.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{return localStorage.getItem(A.GEMINI_MODEL)||"gemini-2.5-flash"}catch{return"gemini-2.5-flash"}},setModel(s){try{return localStorage.setItem(A.GEMINI_MODEL,s),!0}catch{return!1}},getCustomCatalog(){try{const s=localStorage.getItem(A.CUSTOM_CATALOG);return s?JSON.parse(s):[]}catch{return[]}},saveCustomCatalog(s){try{return localStorage.setItem(A.CUSTOM_CATALOG,JSON.stringify(s)),!0}catch{return!1}},getUiPreferences(){try{const s=localStorage.getItem(A.UI_PREFS);return s?JSON.parse(s):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(s){try{return localStorage.setItem(A.UI_PREFS,JSON.stringify(s)),!0}catch{return!1}}};class H{constructor(e=w){this.catalog=e}setCatalog(e){this.catalog=e}analyze(e,n=null){if(!e||typeof e!="string"||!e.trim())return this.getEmptyResult();const a=this.normalize(e),t=this.extractExistingShorthands(e),i=this.stripShorthands(e),o=this.analyzeIntent(i),{editAreas:r,lockedAreas:d,unchangedAreas:l}=this.extractAreas(i,o),p=this.detectConflicts(r,d,t),{recommendations:c,exclusions:g}=this.evaluateShorthands(o,r,d,t);let m=[];if(n&&Array.isArray(n))m=[...n];else{const y=c.filter(u=>u.priority==="WAJIB"||u.priority==="DISARANKAN").map(u=>u.code),h=new Set([...t,...y]);m=Array.from(h)}const b=this.generateVisualTransformation(r,d,i),f=this.buildOptimalPrompt(i,m);return{rawPrompt:e,normalizedPrompt:a,cleanText:i,intent:o,editAreas:r,lockedAreas:d,unchangedAreas:l,conflicts:p,recommendations:c,exclusions:g,installedShorthands:m,visualTransformation:b,optimalPrompt:f,timestamp:new Date().toISOString()}}normalize(e){return e.trim().replace(/\s+/g," ")}extractExistingShorthands(e){const n=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,a=[];let t;for(;(t=n.exec(e))!==null;)a.push(t[0]);return Array.from(new Set(a))}stripShorthands(e){return e.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(e){const n=e.toLowerCase();let a="MODIFIKASI_VISUAL",t="Gambar",i="Memproses instruksi visual pada gambar.",o="MEDIUM",r="GENERAL";return n.includes("pencahayaan")||n.includes("lighting")||n.includes("terangkan")||n.includes("gelap")?(a="PENINGKATAN_PENCAHAYAAN",t="Pencahayaan & Tata Cahaya",i="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",o="HIGH",r="LIGHTING"):n.includes("hijab")||n.includes("kerudung")||n.includes("headwear")?(a="PELEPASAN_PENUTUP_KEPALA",t="Hijab / Headwear",i="Melepaskan atau menghapus penutup kepala/hijab dengan tetap menjaga integritas subjek.",o="HIGH",r="HEADWEAR"):n.includes("baju")||n.includes("pakaian")||n.includes("outfit")||n.includes("tanktop")||n.includes("gaun")?(a="PENGGANTIAN_BUSANA",t="Pakaian & Outfit",i="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",o="HIGH",r="OUTFIT"):n.includes("tajam")||n.includes("sharpen")||n.includes("perjelas")||n.includes("jernih")?(a="PENAJAMAN_DETAIL",t="Mikrokontras & Detail",i="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",o="HIGH",r="QUALITY"):n.includes("hapus latar")||n.includes("hapus background")||n.includes("transparan")||n.includes("hilangkan background")?(a="PENGHAPUSAN_LATAR",t="Latar Belakang / Background",i="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan.",o="CRITICAL",r="BACKGROUND"):n.includes("rasio")||n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("aspect ratio")?(a="PENYESUAIAN_RASIO_KANVAS",t="Kanvas & Dimensi",i="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",o="HIGH",r="RATIO"):(n.includes("rambut")||n.includes("hair")||n.includes("botak"))&&(a="MODIFIKASI_RAMBUT",t="Rambut & Gaya Rambut",i="Menyesuaikan struktur, warna, atau gaya rambut subjek.",o="HIGH",r="HAIR"),{primaryAction:a,primaryTarget:t,summary:i,priority:o,category:r}}extractAreas(e,n){const a=e.toLowerCase(),t=[],i=[],o=new Set,r=h=>{for(const u of h){if(!a.includes(u))continue;if([`jangan ubah ${u}`,`jangan ganti ${u}`,`jangan sentuh ${u}`,`pertahankan ${u}`,`kunci ${u}`,`jaga ${u}`,`${u} asli`,`${u} tetap`,`keep ${u}`,`same ${u}`].some(E=>a.includes(E)))return!0}return!1},d=h=>{for(const u of h){if(!a.includes(u))continue;if([`ubah ${u}`,`ganti ${u}`,`hapus ${u}`,`hilangkan ${u}`,`perbaiki ${u}`,`tingkatkan ${u}`,`buat ${u}`,`lepas ${u}`,`buka ${u}`,`change ${u}`,`remove ${u}`].some(E=>a.includes(E))||u==="pencahayaan"&&(a.includes("perbaiki pencahayaan")||a.includes("lighting")||a.includes("terangkan"))||u==="hijab"&&(a.includes("hapus hijab")||a.includes("buka hijab")||a.includes("tanpa hijab"))||u==="baju"&&(a.includes("tanktop")||a.includes("kemeja")||a.includes("gaun")||a.includes("jaket"))||u==="rasio"&&(a.includes("9:16")||a.includes("16:9")||a.includes("1:1")))return!0}return!1},l=["wajah","muka","face","identitas","paras"];l.some(h=>a.includes(h))&&(o.add("FACE"),r(l)?i.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):d(l)&&t.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek."}));const p=["hijab","kerudung","jilbab","penutup kepala","topi"];p.some(h=>a.includes(h))&&(o.add("HEADWEAR"),r(p)?i.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):t.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const c=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun"];if(c.some(h=>a.includes(h)))if(o.add("OUTFIT"),r(c))i.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let h="Pakaian subjek";a.includes("tanktop putih tali tipis")?h="Tanktop putih tali tipis":a.includes("tanktop")?h="Tanktop":a.includes("gaun")?h="Gaun":a.includes("kemeja")&&(h="Kemeja"),t.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${h}.`,shorthand:"/outfit"})}const g=["latar","background","backdrop","lingkungan"];if(g.some(h=>a.includes(h))&&(o.add("BACKGROUND"),r(g)?i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):a.includes("hapus")||a.includes("transparan")||a.includes("hilangkan")?t.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(a.includes("ganti")||a.includes("ubah"))&&t.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan pemandangan baru.",shorthand:"/bgreplace"})),(a.includes("pencahayaan")||a.includes("lighting")||a.includes("terangkan")||a.includes("cahaya"))&&(o.add("LIGHTING"),t.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),(a.includes("tajam")||a.includes("sharpen")||a.includes("perjelas")||a.includes("detail"))&&(o.add("QUALITY"),t.push({entity:"QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),a.includes("rasio")||a.includes("9:16")||a.includes("16:9")||a.includes("1:1")||a.includes("format")){o.add("CANVAS");let h="Rasio baru",u="/ar 9:16";a.includes("9:16")?(h="9:16 (Vertical)",u="/ar 9:16"):a.includes("16:9")?(h="16:9 (Landscape)",u="/ar 16:9"):a.includes("1:1")&&(h="1:1 (Persegi)",u="/ar 1:1"),t.push({entity:"CANVAS",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${h}.`,shorthand:u})}(a.includes("full body")||a.includes("seluruh tubuh")||a.includes("badan penuh"))&&(o.add("COMPOSITION"),t.push({entity:"COMPOSITION",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const m=["rambut","hair","botak"];if(m.some(h=>a.includes(h))){o.add("HAIR");const h=r(m),u=d(m)||a.includes("botak")||a.includes("merah")||a.includes("cat");h&&u?(i.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Struktur dan warna rambut asli subjek diminta dipertahankan.",shorthand:"/hairlock"}),t.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:a.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya/warna rambut"})):h?i.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):u&&t.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:a.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah warna/gaya rambut"})}const b=["tubuh","badan","pose","postur"];b.some(h=>a.includes(h))&&(o.add("BODY"),r(b)&&i.push({entity:"BODY",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}));const y=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(h=>!o.has(h.key)).map(h=>({entity:h.key,label:h.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${h.label.toLowerCase()}.`}));return{editAreas:t,lockedAreas:i,unchangedAreas:y}}detectConflicts(e,n,a){const t=[];for(const i of e){const o=n.find(r=>r.entity===i.entity);o&&t.push({id:`conflict-${i.entity.toLowerCase()}`,entity:i.entity,label:i.label,type:"EDIT_VS_LOCK",shorthandA:o.shorthand||`[Lock ${i.entity}]`,shorthandB:i.shorthand||`[Ubah ${i.entity}]`,instructionA:o.description,instructionB:i.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${i.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]})}return a.includes("/backgroundlock")&&(a.includes("/bgremove")||a.includes("/bgreplace"))&&t.push({id:"conflict-bg-shorthand",entity:"BACKGROUND",label:"Latar Belakang",type:"SHORTHAND_CLASH",shorthandA:"/backgroundlock",shorthandB:a.includes("/bgremove")?"/bgremove":"/bgreplace",reason:"Shorthand /backgroundlock bertentangan langsung dengan perintah manipulasi latar belakang.",options:[{id:"keep_lock",label:"Gunakan /backgroundlock"},{id:"keep_edit",label:"Gunakan Shorthand Ubah Latar"}]}),t}evaluateShorthands(e,n,a,t){const i=[],o=[],r=new Map;for(const l of a)l.shorthand&&r.set(l.shorthand,{priority:"WAJIB",target:l.label,reason:`Kritis untuk menjamin ${l.description.toLowerCase()}`});for(const l of n)if(l.shorthand){const p=l.entity==="BACKGROUND"&&l.action.includes("REMOVE")||l.entity==="CANVAS"?"WAJIB":"DISARANKAN";r.set(l.shorthand,{priority:p,target:l.label,reason:`Mendukung eksekusi ${l.description.toLowerCase()}`})}e.category==="LIGHTING"&&!r.has("/enhance")&&r.set("/enhance",{priority:"DISARANKAN",target:"Seluruh Gambar",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh."}),e.category==="QUALITY"&&!r.has("/sharpen")&&r.set("/sharpen",{priority:"DISARANKAN",target:"Detail & Mikrokontras",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek."}),r.has("/enhance")&&!r.has("/sharpen")&&r.set("/sharpen",{priority:"OPSIONAL",target:"Detail Tekstur",reason:"Opsional: menyempurnakan ketajaman setelah pencahayaan ditingkatkan."}),r.has("/sharpen")&&!r.has("/denoise")&&r.set("/denoise",{priority:"OPSIONAL",target:"Area Bayangan & Noise",reason:"Opsional: mereduksi noise digital saat ketajaman ditingkatkan."});for(const l of this.catalog)if(r.has(l.code)){const p=r.get(l.code);i.push({code:l.code,name:l.name,category:l.category,target:p.target||l.target,description:l.description,priority:p.priority,reason:p.reason,active:!0})}else{let p="Tidak ada permintaan yang relevan dengan fungsi shorthand ini pada prompt user.";l.code==="/facelock"?p="Tidak ada permintaan yang menyentuh atau mengunci wajah subjek.":l.code==="/bgremove"?p="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":l.code==="/backgroundlock"?p="Latar belakang tidak diminta untuk dikunci secara eksplisit.":l.code==="/outfit"||l.code==="/outfitlock"?p="Tidak ada instruksi yang memodifikasi atau mengunci pakaian.":l.code.startsWith("/ar")?p="Tidak ada instruksi pengubahan rasio aspek atau kanvas.":l.code==="/fullbody"?p="Tidak ada permintaan framing subjek dari kepala ke kaki.":(l.code==="/cinematic"||l.code==="/colorgrade")&&(p="Gaya artistik atau grading warna tidak dispesifikasikan."),o.push({code:l.code,name:l.name,category:l.category,target:l.target,description:l.description,reason:p})}const d={WAJIB:1,DISARANKAN:2,OPSIONAL:3};return i.sort((l,p)=>(d[l.priority]||4)-(d[p.priority]||4)),{recommendations:i,exclusions:o}}generateVisualTransformation(e,n,a){if(e.length===0&&n.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:a||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const t=e.map(d=>d.label).join(", "),i=n.map(d=>d.label).join(", ");let o="Elemen visual awal gambar",r="Elemen visual teroptimasi";if(e.some(d=>d.entity==="LIGHTING"))o="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",r="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(e.some(d=>d.entity==="HEADWEAR"))o="Subjek mengenakan penutup kepala / hijab asli",r="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(i?"wajah & identitas tetap 100% konsisten.":"");else if(e.some(d=>d.entity==="OUTFIT")){const d=e.find(l=>l.entity==="OUTFIT");o="Busana awal subjek",r=`${d?d.description:"Busana baru terpasang"}`+(i?`; ${i} tetap terkunci aman.`:"")}else if(e.some(d=>d.entity==="BACKGROUND"&&d.action.includes("REMOVE")))o="Foto subjek dengan latar belakang bawaan",r="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(e.some(d=>d.entity==="CANVAS")){const d=e.find(l=>l.entity==="CANVAS");o="Dimensi kanvas bawaan foto",r=`${d?d.description:"Dimensi kanvas baru disesuaikan"}`}return{from:o,to:r,summary:`Transformasi pada [${t||"Tanpa Edit"}] dengan preservasi pada [${i||"Elemen Lain"}].`}}buildOptimalPrompt(e,n){if(!e&&n.length===0)return"";let a=e.trim();a&&!a.endsWith(".")&&!a.endsWith("!")&&!a.endsWith("?")&&(a+=".");const t=n.join(" ");return a&&t?`${a} ${t}`:t||a}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",timestamp:null}}}const k={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class G{constructor(e=[]){this.localEngine=new H(e),this.status=k.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(e){this.localEngine.setCatalog(e)}initStatusFromStorage(){v.getApiKey()||(this.status=k.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!v.getApiKey()}}async testConnection(e,n){var i;const a=(e||v.getApiKey()).trim(),t=n||v.getModel()||"gemini-2.5-flash";if(!a)return this.status=k.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:k.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};try{const o=`https://generativelanguage.googleapis.com/v1beta/models/${t}?key=${encodeURIComponent(a)}`,r=await fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.ok){const l=((i=(await r.json().catch(()=>({}))).error)==null?void 0:i.message)||`HTTP ${r.status}: ${r.statusText}`;return this.status=k.FAILED,this.lastError=l,{success:!1,status:k.FAILED,message:`Gagal tersambung ke Gemini: ${l}`}}return this.status=k.CONNECTED,this.lastError=null,{success:!0,status:k.CONNECTED,message:`Berhasil terhubung ke model ${t}!`}}catch(o){return this.status=k.FAILED,this.lastError=o.message||"Koneksi jaringan gagal",{success:!1,status:k.FAILED,message:`Koneksi gagal: ${this.lastError}`}}}async analyzePrompt(e,n=null){const a=v.getApiKey().trim(),t=v.getModel()||"gemini-2.5-flash";if(!a)return{...this.localEngine.analyze(e,n),source:"LOCAL_ENGINE",engineNotice:"Analisis berjalan menggunakan Heuristic Semantic Engine Lokal (BYOK Gemini belum disetel)."};try{const o=await this.callGeminiAPI(e,a,t);if(o){const r=this.mergeAiWithCatalog(o,e,n);return this.status=k.CONNECTED,this.lastError=null,{...r,source:"GEMINI_AI",engineNotice:`Dianalisis menggunakan ${t} melalui BYOK.`}}}catch(o){console.warn("Gemini API call failed, falling back to local engine:",o),this.status=k.FAILED,this.lastError=o.message}return{...this.localEngine.analyze(e,n),source:"LOCAL_ENGINE_FALLBACK",engineNotice:"Gemini API tidak merespons, beralih otomatis ke Engine Semantik Lokal."}}async callGeminiAPI(e,n,a){var p,c,g,m,b;const t=`https://generativelanguage.googleapis.com/v1beta/models/${a}:generateContent?key=${encodeURIComponent(n)}`,o={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V2. Tugas Anda menganalisis instruksi prompt gambar dari user dan memetakan maksud semantik, area yang diubah (editAreas), area yang dikunci (lockedAreas), deteksi konflik, rekomendasi shorthand (WAJIB, DISARANKAN, OPSIONAL), dan visual transformation.
Jawab HANYA dalam format JSON valid tanpa markdown formatting.

Prompt User: "${e}"

Katalog Shorthand yang didukung: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /denoise, /hdr, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade.`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!r.ok){const f=await r.text();throw new Error(`Gemini API error (${r.status}): ${f}`)}const l=(b=(m=(g=(c=(p=(await r.json()).candidates)==null?void 0:p[0])==null?void 0:c.content)==null?void 0:g.parts)==null?void 0:m[0])==null?void 0:b.text;if(!l)throw new Error("Respon Gemini kosong.");try{return JSON.parse(l)}catch{const f=l.replace(/```json/g,"").replace(/```/g,"").trim();return JSON.parse(f)}}mergeAiWithCatalog(e,n,a){var i,o,r,d;const t=this.localEngine.analyze(n,a);return{rawPrompt:n,normalizedPrompt:t.normalizedPrompt,cleanText:t.cleanText,intent:{primaryAction:((i=e.intent)==null?void 0:i.primaryAction)||t.intent.primaryAction,primaryTarget:((o=e.intent)==null?void 0:o.primaryTarget)||t.intent.primaryTarget,summary:((r=e.intent)==null?void 0:r.summary)||e.summary||t.intent.summary,priority:((d=e.intent)==null?void 0:d.priority)||t.intent.priority,category:t.intent.category},editAreas:e.editAreas&&e.editAreas.length>0?e.editAreas:t.editAreas,lockedAreas:e.lockedAreas&&e.lockedAreas.length>0?e.lockedAreas:t.lockedAreas,unchangedAreas:t.unchangedAreas,conflicts:e.conflicts&&e.conflicts.length>0?e.conflicts:t.conflicts,recommendations:t.recommendations,exclusions:t.exclusions,installedShorthands:t.installedShorthands,visualTransformation:e.visualTransformation||t.visualTransformation,optimalPrompt:t.optimalPrompt,timestamp:new Date().toISOString()}}}function P(s){return!s||typeof s!="string"?0:s.trim().split(/\s+/).filter(Boolean).length}function _(s){if(!s||typeof s!="string")return 0;const e=s.trim();return e?Math.max(1,Math.ceil(e.length/3.8)):0}function z(s,e=[]){if(!s||e.length===0)return 0;const n=P(s);if(n===0)return 0;const a=e.length;return Math.min(100,Math.round(a/n*100))}function U(s){return!s||typeof s!="string"?"":s.trim()}function F(s,e,n,a){const{status:t}=e;let i="status-unconfigured",o="Gemini: Belum diuji";return t===k.CONNECTED?(i="status-connected",o="Gemini: Tersambung"):t===k.FAILED&&(i="status-failed",o="Gemini: Gagal"),{html:`
    <header class="app-header">
      <div class="header-container">
        <div class="brand-wrapper">
          <div class="brand-logo" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-text">
            <h1>
              PROMPT SHORTHAND ANALYZER
              <span class="version-tag">V2.0</span>
            </h1>
            <p>Contextual Shorthand Notation &amp; Semantic Preservation</p>
          </div>
        </div>

        <nav class="nav-menu" role="tablist">
          <button type="button" class="nav-item ${s==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${s==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${s==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${s==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${s==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${s==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${s==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${s==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions">
          <button type="button" class="status-badge ${i}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${o}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(d){d.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const c=p.getAttribute("data-tab");n&&n(c)})});const l=d.querySelector("#header-status-badge");l&&a&&l.addEventListener("click",()=>a())}}}const O=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function V(s){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${O.map(a=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${a.id}" title="${a.description}">
      <span style="font-weight: 700; color: #93c5fd;">${a.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(a){a.querySelectorAll(".btn-preset-chip").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-preset-id"),o=O.find(r=>r.id===i);o&&s&&s(o.prompt)})})}}}function J({currentValue:s="",onAnalyze:e,onReset:n,onClear:a,onSelectPreset:t,isAnalyzing:i=!1}){const o=V(t);return{html:`
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT PROMPT</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          <button type="button" class="btn btn-outline btn-xs" id="btn-clear-prompt" title="Kosongkan teks">
            Kosongkan
          </button>
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-app" title="Kembalikan aplikasi ke keadaan awal">
            Reset
          </button>
        </div>
      </div>

      <!-- Preset Test Cases -->
      <div id="presets-container">
        ${o.html}
      </div>

      <!-- Textarea Input -->
      <div class="form-group" style="margin-bottom: 0.85rem;">
        <textarea 
          id="prompt-textarea" 
          class="textarea-prompt font-mono" 
          placeholder="Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh:&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• hapus latar belakang&#10;• ubah rasio menjadi 9:16"
        >${s||""}</textarea>
      </div>

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          💡 Mendukung analisis semantik maksud, entity lock, isolasi area, dan shorthand notation.
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${i?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${i?"Menganalisis...":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(d){o.bindEvents(d);const l=d.querySelector("#prompt-textarea"),p=d.querySelector("#btn-run-analysis"),c=d.querySelector("#btn-clear-prompt"),g=d.querySelector("#btn-reset-app");p&&p.addEventListener("click",()=>{e&&e(l.value)}),c&&c.addEventListener("click",()=>{l.value="",a&&a()}),g&&g.addEventListener("click",()=>{n&&n()}),l&&l.addEventListener("keydown",m=>{(m.ctrlKey||m.metaKey)&&m.key==="Enter"&&(m.preventDefault(),e&&e(l.value))})}}}function W(s=[],e){return!s||s.length===0?{html:"",bindEvents(){}}:{html:s.map(a=>`
    <div class="conflict-banner" data-conflict-id="${a.id}">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>CONFLICT DETECTED &mdash; KONFLIK SEMANTIK TERDETEKSI</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${a.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${a.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${a.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${a.instructionA||a.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${a.instructionB||a.shorthandB}"</em>
        </span>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${a.id}">
          Gunakan Instruksi User (Abaikan Kunci)
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${a.id}">
          Pertahankan Lock (Abaikan Ubah)
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${a.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `).join(""),bindEvents(a){a.querySelectorAll(".btn-resolve").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-action"),o=t.getAttribute("data-conflict-id");e&&e(o,i)})})}}}function Y({installedShorthands:s=[],catalog:e=[],onRemoveShorthand:n,onAddShorthand:a}){const t=s.length>0?s.map(r=>`
        <span class="shorthand-chip" data-code="${r}">
          <span>${r}</span>
          <button type="button" class="chip-remove-btn" data-code="${r}" title="Hapus ${r}">&times;</button>
        </span>
      `).join(""):'<span style="font-size: 0.8rem; color: var(--text-dim); font-style: italic;">Belum ada shorthand terpasang</span>';return{html:`
    <div class="installed-shorthands-bar">
      <div class="installed-title-row">
        <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.04em;">
          Shorthand Terpasang:
        </span>

        <!-- Add shorthand selector from catalog -->
        <div class="add-shorthand-controls">
          <select id="select-catalog-shorthand" class="select-input">
            <option value="">-- Pilih Shorthand dari Catalog --</option>
            ${e.filter(r=>!s.includes(r.code)).map(r=>`
      <option value="${r.code}">${r.code} - ${r.name}</option>
    `).join("")}
          </select>
          <button type="button" class="btn btn-secondary btn-xs" id="btn-add-shorthand" title="Pasang shorthand ke prompt">
            + Tambah
          </button>
        </div>
      </div>

      <div class="installed-chips-container" id="installed-chips-list">
        ${t}
      </div>
    </div>
  `,bindEvents(r){r.querySelectorAll(".chip-remove-btn").forEach(p=>{p.addEventListener("click",c=>{c.stopPropagation();const g=p.getAttribute("data-code");n&&n(g)})});const d=r.querySelector("#btn-add-shorthand"),l=r.querySelector("#select-catalog-shorthand");d&&l&&d.addEventListener("click",()=>{const p=l.value;p&&a&&a(p)})}}}function q({optimalPrompt:s="",installedShorthands:e=[],catalog:n=[],onCopyPrompt:a,onRemoveShorthand:t,onAddShorthand:i}){const o=Y({installedShorthands:e,catalog:n,onRemoveShorthand:t,onAddShorthand:i}),r=P(s),d=_(s);return z(s,e),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${r} kata &bull; ~${d} token
          </span>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-main-prompt" title="Hanya salin main prompt tanpa metadata">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            SALIN PROMPT
          </button>
        </div>
      </div>

      <!-- Optimal Output String Display -->
      <div class="optimal-output-box" id="optimal-prompt-display">
        <span>${s||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${o.html}
    </section>
  `,bindEvents(p){o.bindEvents(p);const c=p.querySelector("#btn-copy-main-prompt");c&&c.addEventListener("click",()=>{a&&a(s)})}}}function Q(s){const{primaryAction:e="-",primaryTarget:n="-",summary:a="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:t="-",category:i="-"}=s||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${a}</p>
      </div>

      <div class="intent-grid">
        <div class="intent-meta-card">
          <span class="intent-meta-label">INTENT</span>
          <span class="intent-meta-value">${e}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">TARGET AREA</span>
          <span class="intent-meta-value">${n}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">KATEGORI</span>
          <span class="intent-meta-value">${i}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${t}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function Z(s=[]){const e=s.length>0?s.map(a=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${a.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${a.label}</span>
              ${a.shorthand?`<span class="badge badge-blue font-mono">${a.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${a.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${s.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function X(s=[],e=[]){const n=s.length>0?s.map(t=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${t.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${t.label}</span>
              ${t.shorthand?`<span class="badge badge-wajib font-mono">${t.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${t.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Seluruh elemen visual selain instruksi edit dipertahankan secara otomatis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-locked-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">C</span>
          <h2>AREA YANG DIPERTAHANKAN / LOCKED</h2>
        </div>
        <span class="badge badge-blue">${s.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${n}
      </div>
    </section>
  `,bindEvents(){}}}function aa(s){const{from:e="Kondisi awal gambar",to:n="Kondisi teroptimasi",summary:a=""}=s||{};return{html:`
    <section class="panel analyzer-card" id="card-transformation">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">D</span>
          <h2>TRANSFORMASI VISUAL FROM &rarr; TO</h2>
        </div>
      </div>

      <div class="transform-flow-card">
        <!-- FROM BOX -->
        <div class="transform-box">
          <span class="transform-box-label">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            KONDISI AWAL (FROM)
          </span>
          <p class="transform-box-content">${e}</p>
        </div>

        <!-- ARROW ICON -->
        <div class="transform-arrow-box">
          <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </div>

        <!-- TO BOX -->
        <div class="transform-box" style="border-left: 3px solid var(--accent-blue);">
          <span class="transform-box-label" style="color: #60a5fa;">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            KONDISI TARGET (TO)
          </span>
          <p class="transform-box-content">${n}</p>
        </div>
      </div>

      ${a?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${a}</p>`:""}
    </section>
  `,bindEvents(){}}}function ta({recommendations:s=[],installedShorthands:e=[],onToggleShorthand:n}){const a=s.length>0?s.map(i=>{const o=e.includes(i.code);let r="badge-opsional";return i.priority==="WAJIB"&&(r="badge-wajib"),i.priority==="DISARANKAN"&&(r="badge-disarankan"),`
          <div class="rec-card" data-code="${i.code}">
            <div>
              <div class="rec-card-header">
                <span class="rec-code">${i.code}</span>
                <span class="badge ${r}">${i.priority}</span>
              </div>
              <div class="rec-target-label">Target: ${i.target}</div>
              <p class="rec-reason" style="margin-top: 0.45rem;">
                <strong>Alasan:</strong> ${i.reason}
              </p>
            </div>

            <div class="rec-toggle-row">
              <span style="font-size: 0.775rem; color: var(--text-muted);">
                ${i.description}
              </span>
              <button 
                type="button" 
                class="btn ${o?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${i.code}"
                title="${o?"Hapus dari prompt":"Pasang ke prompt"}"
              >
                ${o?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Belum ada rekomendasi shorthand. Jalankan analisis prompt di atas.</div>';return{html:`
    <section class="panel analyzer-card" id="card-recommendations">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">E</span>
          <h2>REKOMENDASI SHORTHAND SEMANTIK</h2>
        </div>
        <span class="badge badge-blue">${s.length} Rekomendasi</span>
      </div>

      <div class="rec-grid">
        ${a}
      </div>
    </section>
  `,bindEvents(i){i.querySelectorAll(".btn-toggle-rec").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-code");n&&n(r)})})}}}function ea(s=[]){const e=s.length>0?s.map(a=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${a.code}</span>
            <span class="exclusion-target">&bull; ${a.target}</span>
          </div>
          <p class="exclusion-reason">
            ${a.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">F</span>
          <h2>H. SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <span class="badge badge-neutral">${s.length} Dikecualikan</span>
      </div>

      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Engine secara cerdas mengecualikan shorthand di bawah ini karena tidak relevan dengan konteks prompt:
      </p>

      <div class="exclusions-grid">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function na({analysisResult:s,currentPrompt:e,catalog:n,isAnalyzing:a,onAnalyze:t,onReset:i,onClear:o,onSelectPreset:r,onCopyPrompt:d,onAddShorthand:l,onRemoveShorthand:p,onToggleRecommendation:c,onResolveConflict:g}){const{optimalPrompt:m="",installedShorthands:b=[],conflicts:f=[],intent:y={},editAreas:h=[],lockedAreas:u=[],unchangedAreas:S=[],visualTransformation:E={},recommendations:$=[],exclusions:M=[]}=s||{},T=J({currentValue:e,onAnalyze:t,onReset:i,onClear:o,onSelectPreset:r,isAnalyzing:a}),C=W(f,g),j=q({optimalPrompt:m,installedShorthands:b,catalog:n,onCopyPrompt:d,onRemoveShorthand:p,onAddShorthand:l}),R=Q(y),K=Z(h),D=X(u,S),B=aa(E),N=ta({recommendations:$,installedShorthands:b,onToggleShorthand:c}),x=ea(M);return{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${T.html}

      <!-- 2. Conflict Banner (Visible only if conflict detected) -->
      ${C.html}

      <!-- 3. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${j.html}

      <!-- 4. Card A: Maksud Prompt -->
      ${R.html}

      <!-- 5. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${K.html}
        ${D.html}
      </div>

      <!-- 6. Card D: Transformasi Visual FROM -> TO -->
      ${B.html}

      <!-- 7. Card E: Rekomendasi Shorthand Semantik -->
      ${N.html}

      <!-- 8. Card F: H. Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${x.html}
    </div>
  `,bindEvents(I){T.bindEvents(I),C.bindEvents(I),j.bindEvents(I),N.bindEvents(I)}}}function ia({analysisResult:s,onCopyJson:e,onRunCustomJson:n}){var p,c,g;const a=JSON.stringify({rawPrompt:(s==null?void 0:s.rawPrompt)||"",cleanText:(s==null?void 0:s.cleanText)||"",installedShorthands:(s==null?void 0:s.installedShorthands)||[]},null,2),t=JSON.stringify(s||{},null,2),i=((p=s==null?void 0:s.conflicts)==null?void 0:p.length)>0,o=!!((c=s==null?void 0:s.intent)!=null&&c.primaryAction&&s.intent.primaryAction!=="-"),r=((g=s==null?void 0:s.installedShorthands)==null?void 0:g.length)||0,d=(s==null?void 0:s.source)||"LOCAL_ENGINE";return{html:`
    <section class="panel">
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">TEST (JSON) &mdash; PIPELINE DATA INSPECTOR</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Inspeksi representasi data JSON terstruktur untuk pengujian developer, integrasi API, dan validasi kepatuhan.
          </p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" id="btn-copy-output-json">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          Salin Output JSON
        </button>
      </div>

      <!-- Validation Checklist Bar -->
      <div class="validation-row">
        <div class="val-item" style="border-left: 3px solid ${o?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${o?"✅ Ya":"⚪ Menunggu Input"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid ${i?"var(--status-danger)":"var(--status-success)"};">
          <span>Status Konflik:</span>
          <strong>${i?"⚠️ Terdeteksi":"✅ Aman"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-blue);">
          <span>Shorthand Aktif:</span>
          <strong>${r} Item</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-purple);">
          <span>Sumber Engine:</span>
          <strong>${d}</strong>
        </div>
      </div>

      <!-- JSON Dual Viewer Grid -->
      <div class="json-viewer-container">
        <!-- Input JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase;">
              INPUT JSON
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Payload Masukan</span>
          </div>
          <pre class="json-box" id="json-input-view">${a}</pre>
        </div>

        <!-- Output JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7; text-transform: uppercase;">
              OUTPUT JSON (PIPELINE RESULT)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Hasil Analisis Lengkap</span>
          </div>
          <pre class="json-box" id="json-output-view">${t}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(m){const b=m.querySelector("#btn-copy-output-json");b&&b.addEventListener("click",()=>{e&&e(t)})}}}function sa({catalog:s=[],activeCategory:e="ALL",searchQuery:n="",onSelectCategory:a,onSearchChange:t,onAddShorthandToPrompt:i}){const o=s.filter(c=>{const g=e==="ALL"||c.category===e,m=n.toLowerCase().trim();if(!m)return g;const b=c.code.toLowerCase().includes(m),f=c.name.toLowerCase().includes(m),y=c.description.toLowerCase().includes(m),h=c.target.toLowerCase().includes(m),u=(c.triggerSemantics||[]).some(S=>S.toLowerCase().includes(m));return g&&(b||f||y||h||u)}),d=["ALL",...Object.keys(L)].map(c=>{const g=c==="ALL"?"Semua Kategori":L[c].label;return`
      <button type="button" class="category-tab-btn ${e===c?"active":""}" data-cat="${c}">
        ${g}
      </button>
    `}).join(""),l=o.length>0?o.map(c=>`
        <div class="catalog-item-card" data-code="${c.code}">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
              <span class="catalog-item-code">${c.code}</span>
              <span class="badge badge-neutral">${c.category}</span>
            </div>
            <h3 class="catalog-item-name">${c.name}</h3>
            <p class="catalog-item-desc" style="margin-top: 0.4rem;">${c.description}</p>
          </div>

          <div class="catalog-meta-list">
            <div><strong>Target:</strong> ${c.target}</div>
            <div><strong>Triggers:</strong> ${(c.triggerSemantics||[]).slice(0,3).join(", ")}</div>
            ${c.conflicts&&c.conflicts.length>0?`<div style="color: #fca5a5;"><strong>Konflik:</strong> ${c.conflicts.join(", ")}</div>`:""}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05);">
            <span class="badge ${c.priority==="WAJIB"?"badge-wajib":c.priority==="DISARANKAN"?"badge-disarankan":"badge-opsional"}">
              ${c.priority}
            </span>
            <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${c.code}">
              + Tambah ke Prompt
            </button>
          </div>
        </div>
      `).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-muted);">Tidak ada shorthand yang cocok dengan kriteria pencarian.</div>';return{html:`
    <section class="panel">
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">KATALOG &amp; REFERENSI SHORTHAND</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Daftar lengkap direktif shorthand prompt visual, deskripsi semantik, target, dan aturan kompatibilitas.
          </p>
        </div>
      </div>

      <!-- Controls: Search & Category Filter -->
      <div class="catalog-controls">
        <div class="category-tabs" id="catalog-category-tabs">
          ${d}
        </div>
        <div style="flex: 1; max-width: 340px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari kode, target, atau kata kunci semantik..."
            value="${n||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${l}
      </div>
    </section>
  `,bindEvents(c){c.querySelectorAll(".category-tab-btn").forEach(m=>{m.addEventListener("click",()=>{const b=m.getAttribute("data-cat");a&&a(b)})});const g=c.querySelector("#catalog-search-input");g&&g.addEventListener("input",m=>{t&&t(m.target.value)}),c.querySelectorAll(".btn-add-from-catalog").forEach(m=>{m.addEventListener("click",()=>{const b=m.getAttribute("data-code");i&&i(b)})})}}}function ra({geminiStatusInfo:s,onTestConnection:e,onSaveSettings:n,onClearKey:a}){const t=v.getApiKey(),i=v.getModel(),{status:o,error:r}=s;let d="status-unconfigured",l="🟡 Gemini: Belum diuji / konfigurasi";return o===k.CONNECTED?(d="status-connected",l="🟢 Gemini: Tersambung"):o===k.FAILED&&(d="status-failed",l="🔴 Gemini: Gagal"),{html:`
    <div class="settings-container">
      <section class="panel">
        <div class="card-header">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: var(--accent-blue);"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <h2>API &amp; PENGATURAN (BYOK)</h2>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
          Aplikasi beroperasi dengan sistem <strong>BYOK (Bring Your Own Key)</strong>. 
          API key disimpan hanya di browser lokal Anda (<code>localStorage</code>) dan tidak pernah dikirim ke server developer.
        </p>

        <!-- FORM BYOK -->
        <form id="settings-form" onsubmit="return false;">
          <!-- API Key Input with Show/Hide -->
          <div class="form-group">
            <label class="form-label" for="setting-api-key">Gemini API Key:</label>
            <div class="password-input-group">
              <input 
                type="password" 
                id="setting-api-key" 
                placeholder="AIzaSy..." 
                value="${t||""}" 
                autocomplete="off"
                spellcheck="false"
              />
              <button type="button" class="password-toggle-btn" id="btn-toggle-key-visibility" title="Tampilkan/Sembunyikan Key">
                <svg class="icon-sm" id="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>
            <p class="form-help">
              Dapatkan API Key gratis di <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue);">Google AI Studio</a>.
            </p>
          </div>

          <!-- Model Selector -->
          <div class="form-group">
            <label class="form-label" for="setting-model-select">Model Gemini:</label>
            <select id="setting-model-select" class="select-input" style="width: 100%; padding: 0.65rem 0.85rem;">
              <option value="gemini-2.5-flash" ${i==="gemini-2.5-flash"?"selected":""}>gemini-2.5-flash (Direkomendasikan &bull; Cepat &amp; Akurat)</option>
              <option value="gemini-2.5-pro" ${i==="gemini-2.5-pro"?"selected":""}>gemini-2.5-pro (Penalaran Kompleks)</option>
              <option value="gemini-2.0-flash" ${i==="gemini-2.0-flash"?"selected":""}>gemini-2.0-flash (Flash Standar)</option>
              <option value="gemini-1.5-flash" ${i==="gemini-1.5-flash"?"selected":""}>gemini-1.5-flash (Generasi Sebelumnya)</option>
            </select>
          </div>

          <!-- Connection Status Card -->
          <div class="connection-status-card">
            <div style="flex: 1;">
              <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                Status Koneksi:
              </div>
              <div class="status-badge ${d}" id="settings-status-badge">
                <span class="status-dot"></span>
                <span>${l}</span>
              </div>
              ${r?`<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${r}</div>`:""}
            </div>
            <div>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-test-connection">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                Test Connection
              </button>
            </div>
          </div>

          <!-- Action Buttons: Save & Clear -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-danger btn-sm" id="btn-clear-key" title="Hapus API Key dari browser">
              Clear Key
            </button>
            <button type="button" class="btn btn-primary" id="btn-save-settings">
              Save / Apply
            </button>
          </div>
        </form>

        <!-- Fallback notice -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
          <strong>🛡️ Mode Offline &amp; Heuristic Fallback:</strong>
          Jika API Key tidak diisi atau koneksi offline, aplikasi tidak akan pernah crash. Engine Semantik Lokal otomatis aktif memproses prompt, mendeteksi entity lock, dan merumuskan shorthand.
        </div>
      </section>
    </div>
  `,bindEvents(c){const g=c.querySelector("#setting-api-key"),m=c.querySelector("#setting-model-select"),b=c.querySelector("#btn-toggle-key-visibility"),f=c.querySelector("#btn-test-connection"),y=c.querySelector("#btn-save-settings"),h=c.querySelector("#btn-clear-key");b&&g&&b.addEventListener("click",()=>{const u=g.type==="password";g.type=u?"text":"password"}),f&&f.addEventListener("click",()=>{e&&e(g.value,m.value)}),y&&y.addEventListener("click",()=>{n&&n(g.value,m.value)}),h&&h.addEventListener("click",()=>{g.value="",a&&a()})}}}class oa{constructor(){this.appRoot=document.getElementById("app"),this.catalog=[...w],this.geminiService=new G(this.catalog),this.activeTab="analyzer",this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogSearchQuery="",this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initGeminiStatus()}async initGeminiStatus(){const e=v.getApiKey();e&&(await this.geminiService.testConnection(e),this.render())}showToast(e,n="success"){let a=document.getElementById("toast-container");a||(a=document.createElement("div"),a.id="toast-container",a.className="toast-container",document.body.appendChild(a));const t=document.createElement("div");t.className=`toast toast-${n}`,t.innerHTML=`
      <span>${n==="success"?"✅":n==="error"?"❌":"ℹ️"}</span>
      <span>${e}</span>
    `,a.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(10px)",t.style.transition="all 0.3s ease",setTimeout(()=>t.remove(),300)},2800)}async runAnalysis(e,n=null){if(!e||!e.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=e,this.isAnalyzing=!0,this.render();try{const a=await this.geminiService.analyzePrompt(e,n);this.analysisResult=a,this.showToast("Analisis prompt selesai!")}catch(a){this.showToast(`Gagal menganalisis: ${a.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Aplikasi telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleSelectPreset(e){this.currentPrompt=e,this.runAnalysis(e)}handleCopyPrompt(e){const n=U(e);if(!n){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(n).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const a=document.createElement("textarea");a.value=n,document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}handleAddShorthand(e){if(!e)return;const n=this.analysisResult.installedShorthands||[];if(!n.includes(e)){const a=[...n,e];this.updateInstalledShorthands(a),this.showToast(`Shorthand ${e} ditambahkan.`)}}handleRemoveShorthand(e){const a=(this.analysisResult.installedShorthands||[]).filter(t=>t!==e);this.updateInstalledShorthands(a),this.showToast(`Shorthand ${e} dilepas.`)}handleToggleRecommendation(e){(this.analysisResult.installedShorthands||[]).includes(e)?this.handleRemoveShorthand(e):this.handleAddShorthand(e)}updateInstalledShorthands(e){this.analysisResult.installedShorthands=e,this.analysisResult.optimalPrompt=this.geminiService.localEngine.buildOptimalPrompt(this.analysisResult.cleanText,e),this.render()}handleResolveConflict(e,n){const a=this.analysisResult.conflicts.find(i=>i.id===e);if(!a)return;let t=[...this.analysisResult.installedShorthands||[]];n==="use_user_edit"?(t=t.filter(i=>i!==a.shorthandA),this.showToast(`Kunci ${a.shorthandA} dilepas sesuai instruksi ubah.`)):n==="keep_lock"&&(t=t.filter(i=>i!==a.shorthandB),t.includes(a.shorthandA)||t.push(a.shorthandA),this.showToast(`Lock ${a.shorthandA} dipertahankan.`)),this.analysisResult.conflicts=this.analysisResult.conflicts.filter(i=>i.id!==e),this.updateInstalledShorthands(t)}async handleTestConnection(e,n){this.showToast("Menguji koneksi ke Gemini API...","info");const a=await this.geminiService.testConnection(e,n);a.success?this.showToast(a.message,"success"):this.showToast(a.message,"error"),this.render()}handleSaveSettings(e,n){v.setApiKey(e),v.setModel(n),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(e,n).then(()=>this.render())}handleClearKey(){v.clearApiKey(),this.geminiService.status=k.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}render(){const e=this.geminiService.getStatus(),n=F(this.activeTab,e,t=>{this.activeTab=t,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let a=null;this.activeTab==="analyzer"?a=na({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,onAnalyze:t=>this.runAnalysis(t),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:t=>this.handleSelectPreset(t),onCopyPrompt:t=>this.handleCopyPrompt(t),onAddShorthand:t=>this.handleAddShorthand(t),onRemoveShorthand:t=>this.handleRemoveShorthand(t),onToggleRecommendation:t=>this.handleToggleRecommendation(t),onResolveConflict:(t,i)=>this.handleResolveConflict(t,i)}):this.activeTab==="json-test"?a=ia({analysisResult:this.analysisResult,onCopyJson:t=>{navigator.clipboard.writeText(t),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?a=sa({catalog:this.catalog,activeCategory:this.catalogCategory,searchQuery:this.catalogSearchQuery,onSelectCategory:t=>{this.catalogCategory=t,this.render()},onSearchChange:t=>{this.catalogSearchQuery=t,this.render()},onAddShorthandToPrompt:t=>{this.handleAddShorthand(t),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${t} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="settings"&&(a=ra({geminiStatusInfo:e,onTestConnection:(t,i)=>this.handleTestConnection(t,i),onSaveSettings:(t,i)=>this.handleSaveSettings(t,i),onClearKey:()=>this.handleClearKey()})),this.appRoot.innerHTML=`
      <div class="app-container">
        ${n.html}
        <main class="main-content">
          ${a.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V2.0</strong> &mdash; 100% Client-Side Static App
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; GitHub Pages Ready
            </div>
          </div>
        </footer>
      </div>
    `,n.bindEvents(this.appRoot),a.bindEvents&&a.bindEvents(this.appRoot)}}document.addEventListener("DOMContentLoaded",()=>{window.__PSA_APP__=new oa,window.__PSA_APP__.render()});
//# sourceMappingURL=index-CoDlOVSW.js.map
