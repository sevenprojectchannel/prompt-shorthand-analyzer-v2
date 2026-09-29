(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Da={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH"},aa={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},la=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]}];function z(l,a){if(!a||typeof a!="string"||!a.trim())return 1;const t=a.toLowerCase().trim(),e=l.code.toLowerCase(),i=l.name.toLowerCase(),r=l.target.toLowerCase(),n=l.category.toLowerCase(),s=l.description.toLowerCase();if(e===t||e===`/${t}`)return 100;if(e.includes(t))return 75;if(l.semanticTriggers&&l.semanticTriggers.some(g=>g.toLowerCase()===t))return 95;if(l.negativeTriggers)for(const g of l.negativeTriggers){const m=g.toLowerCase(),h=t.indexOf(m);if(h!==-1){const b=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(m),y=t.slice(0,h).trim(),f=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(y);if(b||!f)return-50}}if(l.semanticTriggers)for(const g of l.semanticTriggers){const m=g.toLowerCase(),h=t.indexOf(m);if(h!==-1){const b=t.slice(0,h).trim(),y=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(b),f=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(m);if(!y||f)return 85}else if(m.includes(t))return 80}const o=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),p=t.split(/\s+/).filter(g=>g.length>2&&!o.has(g));let c=0;for(const g of l.semanticTriggers||[]){const m=g.toLowerCase();if(p.length>0&&p.every(y=>m.includes(y)))return 75;const b=p.filter(y=>m.includes(y)).length;b>c&&(c=b)}return c>1?40+c*5:i.includes(t)?50:r.includes(t)||n.includes(t)?40:s.includes(t)?30:0}function Pa(l,{category:a="ALL",target:t="ALL",recommendationLevel:e="ALL",searchQuery:i=""}={}){const r=l.filter(n=>!(a!=="ALL"&&n.category!==a||t!=="ALL"&&n.target!==t||e!=="ALL"&&n.recommendationLevel!==e));if(i&&i.trim()){const n=[];for(const s of r){const o=z(s,i);o>0&&n.push({item:s,score:o})}return n.sort((s,o)=>o.score-s.score),n.map(s=>s.item)}return r}const Ga="psa_v2_catalog_db",Ua=1,O="user_shorthands";class xa{constructor(a=la){this.coreCatalog=a.map(t=>({...t,status:t.status||"CORE",source:t.source||"CORE",preferredRepresentative:t.preferredRepresentative!==void 0?t.preferredRepresentative:!0,equivalentTo:t.equivalentTo||[],relationships:t.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((t,e)=>{const i=window.indexedDB.open(Ga,Ua);i.onupgradeneeded=r=>{const n=r.target.result;n.objectStoreNames.contains(O)||n.createObjectStore(O,{keyPath:"code"})},i.onsuccess=r=>t(r.target.result),i.onerror=r=>e(r.target.error)}),await this.loadFromIndexedDB()}catch(t){console.warn("IndexedDB unavailable, using memory fallback:",t)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((t,e)=>{const n=this.db.transaction([O],"readonly").objectStore(O).getAll();n.onsuccess=()=>t(n.result||[]),n.onerror=()=>e(n.error)});this.userCatalog.clear();for(const t of a)t&&t.code&&this.userCatalog.set(t.code,t)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const t=[...this.coreCatalog];for(const e of this.userCatalog.values()){const i=t.findIndex(r=>r.code===e.code);i!==-1?t[i]={...t[i],...e}:t.push(e)}return a?t:t.filter(e=>e.status!=="DISABLED")}searchShorthands(a,t={}){const e=this.getAll(t.includeDisabled??!0);if(!a||!a.trim())return e;const i=a.toLowerCase().trim(),r=[];for(const n of e){let s=z(n,i);n.functionGroup&&n.functionGroup.toLowerCase().includes(i)&&(s=Math.max(s,60)),n.equivalentTo&&n.equivalentTo.some(o=>o.toLowerCase().includes(i))&&(s=Math.max(s,70)),n.relationships&&n.relationships.some(o=>{var p,c;return((p=o.code)==null?void 0:p.toLowerCase().includes(i))||((c=o.relationType)==null?void 0:c.toLowerCase().includes(i))})&&(s=Math.max(s,45)),s>0&&r.push({item:n,score:s})}return r.sort((n,s)=>s.score-n.score),r.map(n=>n.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(t=>t.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(t=>t.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(t=>t.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(t=>t.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(t=>t.status===a)}getEquivalent(a){const t=this.getAll().find(e=>e.code===a);return t?t.equivalentTo||[]:[]}getConflicts(a){const t=this.getAll().find(e=>e.code===a);return t?t.conflicts||[]:[]}getCompatible(a){const t=this.getAll().find(e=>e.code===a);return t?t.compatibleWith||[]:[]}getRelated(a){const e=this.getAll().find(i=>i.code===a||i.target===a);return!e||!e.relationships?[]:e.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const t=this.getAll(),e=t.find(r=>r.code.toLowerCase()===a.code.toLowerCase());if(e)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:e,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const r=t.find(n=>n.functionGroup===a.functionGroup);if(r)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:r,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${r.code}).`}}const i=t.find(r=>r.equivalentTo&&r.equivalentTo.some(n=>n.toLowerCase()===a.code.toLowerCase()));return i?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:i,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${i.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const t={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(t.code,t),this.db&&await new Promise((e,i)=>{const s=this.db.transaction([O],"readwrite").objectStore(O).put(t);s.onsuccess=()=>e(),s.onerror=()=>i(s.error)}),t}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(e=>e.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((e,i)=>{const s=this.db.transaction([O],"readwrite").objectStore(O).delete(a);s.onsuccess=()=>e(),s.onerror=()=>i(s.error)}),!0}exportCatalog(){const a=this.getAll().map(t=>{const{apiKey:e,geminiKey:i,secret:r,password:n,...s}=t;return s});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,t="MERGE"){let e=null;if(typeof a=="string")try{e=JSON.parse(a)}catch(n){throw new Error("Format JSON impor tidak valid: "+n.message)}else e=a;const i=Array.isArray(e)?e:e.entries||[];if(!Array.isArray(i))throw new Error('Data impor harus memiliki array "entries".');t==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((n,s)=>{const c=this.db.transaction([O],"readwrite").objectStore(O).clear();c.onsuccess=()=>n(),c.onerror=()=>s(c.error)}));let r=0;for(const n of i){if(!n||!n.code||this.coreCatalog.some(h=>h.code===n.code)&&t==="MERGE")continue;const{apiKey:o,geminiKey:p,secret:c,password:g,...m}=n;await this.add({...m,status:m.status||"APPROVED",source:m.source||"USER"}),r++}return{success:!0,count:r,mode:t}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,t)=>{const r=this.db.transaction([O],"readwrite").objectStore(O).clear();r.onsuccess=()=>a(),r.onerror=()=>t(r.error)}),!0}}const L={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},C={getApiKey(){try{return localStorage.getItem(L.GEMINI_API_KEY)||""}catch{return""}},setApiKey(l){try{return l?localStorage.setItem(L.GEMINI_API_KEY,l.trim()):localStorage.removeItem(L.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(L.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{return localStorage.getItem(L.GEMINI_MODEL)||"gemini-2.5-flash"}catch{return"gemini-2.5-flash"}},setModel(l){try{return localStorage.setItem(L.GEMINI_MODEL,l),!0}catch{return!1}},getCustomCatalog(){try{const l=localStorage.getItem(L.CUSTOM_CATALOG);return l?JSON.parse(l):[]}catch{return[]}},saveCustomCatalog(l){try{return localStorage.setItem(L.CUSTOM_CATALOG,JSON.stringify(l)),!0}catch{return!1}},getUiPreferences(){try{const l=localStorage.getItem(L.UI_PREFS);return l?JSON.parse(l):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(l){try{return localStorage.setItem(L.UI_PREFS,JSON.stringify(l)),!0}catch{return!1}}};class $a{constructor(a=la){this.catalog=a}setCatalog(a){this.catalog=a}analyze(a,t=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const e=this.normalize(a),i=this.extractExistingShorthands(a),r=this.stripShorthands(a),n=this.analyzeIntent(r),{editAreas:s,lockedAreas:o,unchangedAreas:p}=this.extractAreas(r,n),c=this.queryPrimaryShorthands(r,s,o,n),g=this.deduplicateByFunctionGroup(c).map(E=>({...E,isPrimary:!0,checked:!0,priority:"WAJIB"})),m=this.discoverRelatedShorthands(r,g,s,o),h=[...g,...m],b=this.detectConflicts(s,o,g,i),y=this.evaluateExclusions(h,g);let f=[];if(t&&Array.isArray(t))f=[...t];else{const E=g.sort((S,N)=>(S.promptIndex??999)-(N.promptIndex??999)).map(S=>S.code),I=new Set([...i,...E]);f=Array.from(I)}for(const E of h)E.checked=f.includes(E.code),E.active=E.checked;const u=this.generateVisualTransformation(s,o,r),k=this.buildOptimalPrompt(r,f);return{rawPrompt:a,normalizedPrompt:e,cleanText:r,intent:n,editAreas:s,lockedAreas:o,unchangedAreas:p,conflicts:b,primaryShorthands:g,relatedShorthands:m,recommendations:h,exclusions:y,installedShorthands:f,visualTransformation:u,optimalPrompt:k,timestamp:new Date().toISOString()}}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const t=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,e=[];let i;for(;(i=t.exec(a))!==null;)e.push(i[0]);return Array.from(new Set(e))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const t=a.toLowerCase();let e="MODIFIKASI_VISUAL",i="Gambar",r="Memproses instruksi visual pada gambar.",n="MEDIUM",s="GENERAL";return t.includes("pencahayaan")||t.includes("lighting")||t.includes("terangkan")||t.includes("gelap")?(e="PENINGKATAN_PENCAHAYAAN",i="Pencahayaan & Tata Cahaya",r="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",n="HIGH",s="LIGHTING"):t.includes("hijab")||t.includes("kerudung")||t.includes("headwear")||t.includes("penutup kepala")?(e="PELEPASAN_PENUTUP_KEPALA",i="Hijab / Penutup Kepala",r="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",n="HIGH",s="HEADWEAR"):t.includes("baju")||t.includes("pakaian")||t.includes("outfit")||t.includes("tanktop")||t.includes("gaun")||t.includes("kemeja")?(e="PENGGANTIAN_BUSANA",i="Pakaian & Outfit",r="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",n="HIGH",s="OUTFIT"):t.includes("tajam")||t.includes("sharpen")||t.includes("perjelas")||t.includes("jernih")||t.includes("ketajaman")?(e="PENAJAMAN_DETAIL",i="Mikrokontras & Detail",r="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",n="HIGH",s="IMAGE_QUALITY"):t.includes("hapus latar")||t.includes("hapus background")||t.includes("transparan")||t.includes("hilangkan background")||t.includes("buang background")?(e="PENGHAPUSAN_LATAR",i="Latar Belakang / Background",r="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",n="CRITICAL",s="TRANSPARENCY"):t.includes("ganti background")||t.includes("ganti latar")||t.includes("latar baru")||t.includes("gunakan latar baru")||t.includes("pemandangan baru")?(e="PENGGANTIAN_LATAR",i="Latar Belakang / Background",r="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",n="HIGH",s="BACKGROUND"):t.includes("rasio")||t.includes("9:16")||t.includes("16:9")||t.includes("1:1")||t.includes("4:5")||t.includes("aspect ratio")?(e="PENYESUAIAN_RASIO_KANVAS",i="Kanvas & Dimensi",r="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",n="HIGH",s="CANVAS_RATIO"):(t.includes("rambut")||t.includes("hair")||t.includes("botak")||t.includes("cukur"))&&(e="MODIFIKASI_RAMBUT",i="Rambut & Gaya Rambut",r="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",n="HIGH",s="HAIR"),{primaryAction:e,primaryTarget:i,summary:r,priority:n,category:s}}extractAreas(a,t){const e=a.toLowerCase(),i=[],r=[],n=new Set,s=u=>{for(const k of u){if(!e.includes(k))continue;if([`jangan ubah ${k}`,`jangan ganti ${k}`,`jangan sentuh ${k}`,`jangan mengubah ${k}`,`pertahankan ${k}`,`kunci ${k}`,`jaga ${k}`,`${k} asli`,`${k} tetap`,`${k} sama`,`${k} harus tetap sama`,`keep ${k}`,`same ${k}`,`preserve ${k}`].some(I=>e.includes(I)))return!0}return!1},o=u=>{for(const k of u){if(!e.includes(k))continue;if([`ubah ${k}`,`ganti ${k}`,`hapus ${k}`,`hilangkan ${k}`,`perbaiki ${k}`,`tingkatkan ${k}`,`buat ${k}`,`lepas ${k}`,`lepaskan ${k}`,`buka ${k}`,`change ${k}`,`remove ${k}`].some(I=>e.includes(I))||k==="pencahayaan"&&(e.includes("perbaiki pencahayaan")||e.includes("lighting")||e.includes("terangkan"))||k==="hijab"&&(e.includes("hapus hijab")||e.includes("lepas hijab")||e.includes("lepaskan hijab")||e.includes("tanpa hijab"))||k==="baju"&&(e.includes("tanktop")||e.includes("kemeja")||e.includes("gaun")||e.includes("jaket"))||k==="rasio"&&(e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5"))||k==="latar"&&(e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("hapus latar")))return!0}return!1},p=["wajah","muka","face","identitas","paras"];p.some(u=>e.includes(u))&&(n.add("FACE"),s(p)?r.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):o(p)&&i.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:e.includes("ganti wajah")?"/facechange":"/faceedit"}));const c=["hijab","kerudung","jilbab","penutup kepala","topi"];c.some(u=>e.includes(u))&&(n.add("HEADWEAR"),s(c)?r.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):i.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const g=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(g.some(u=>e.includes(u)))if(n.add("OUTFIT"),s(g))r.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let u="Pakaian subjek";e.includes("tanktop putih tali tipis")?u="Tanktop putih tali tipis":e.includes("tanktop")?u="Tanktop":e.includes("gaun")?u="Gaun":e.includes("kemeja")&&(u="Kemeja"),i.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${u}.`,shorthand:"/outfit"})}const m=["latar","background","backdrop","lingkungan"];if(m.some(u=>e.includes(u))&&(n.add("BACKGROUND"),s(m)?r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):e.includes("hapus")||e.includes("transparan")||e.includes("hilangkan")||e.includes("buang")?i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(e.includes("ganti")||e.includes("ubah")||e.includes("baru")||e.includes("gunakan latar baru")||e.includes("studio"))&&i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("cahaya"))&&(n.add("LIGHTING"),i.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),(e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("detail")||e.includes("ketajaman"))&&(n.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("format")){n.add("CANVAS_RATIO");let u="Rasio baru",k="/ar 9:16";e.includes("9:16")?(u="9:16 (Vertical)",k="/ar 9:16"):e.includes("16:9")?(u="16:9 (Landscape)",k="/ar 16:9"):e.includes("1:1")?(u="1:1 (Persegi)",k="/ar 1:1"):e.includes("4:5")&&(u="4:5 (Portrait)",k="/ar 4:5"),i.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${u}.`,shorthand:k})}(e.includes("full body")||e.includes("seluruh tubuh")||e.includes("badan penuh"))&&(n.add("BODY_POSE"),i.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const h=["rambut","hair","botak","cukur"];if(h.some(u=>e.includes(u))){n.add("HAIR");const u=s(h),k=o(h)||e.includes("botak")||e.includes("merah")||e.includes("cat")||e.includes("gaya rambut");u&&k?(r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:e.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):u?r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):k&&i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:e.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const b=["tubuh","badan","pose","postur"];b.some(u=>e.includes(u))&&!n.has("BODY_POSE")&&(n.add("BODY_POSE"),s(b)&&r.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}));const f=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(u=>!n.has(u.key)).map(u=>({entity:u.key,label:u.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${u.label.toLowerCase()}.`}));return{editAreas:i,lockedAreas:r,unchangedAreas:f}}findPromptIndex(a,t,e=[]){const i=a.toLowerCase();let r=999;const n=[...t.semanticTriggers||[],...e];for(const s of n){if(!s||s.length<3)continue;const o=i.indexOf(s.toLowerCase());o!==-1&&o<r&&(r=o)}return r}queryPrimaryShorthands(a,t,e,i){const r=new Map;for(const n of e)if(n.shorthand){const s=this.catalog.find(o=>o.code===n.shorthand);if(s){const o=this.findPromptIndex(a,s,[n.label,n.entity,"jangan","pertahankan","kunci"]);r.set(s.code,{item:s,code:s.code,name:s.name,category:s.category,target:n.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${n.description.toLowerCase()}`,score:100,promptIndex:o})}}for(const n of t)if(n.shorthand){const s=this.catalog.find(o=>o.code===n.shorthand);if(s){const o=this.findPromptIndex(a,s,[n.label,n.entity,"ubah","ganti","hapus"]);r.set(s.code,{item:s,code:s.code,name:s.name,category:n.category||s.category,target:n.label,priority:"WAJIB",reason:`Mendukung eksekusi ${n.description.toLowerCase()}`,score:95,promptIndex:o})}}if(t.some(n=>n.entity==="LIGHTING")&&!r.has("/enhance")){const n=this.catalog.find(s=>s.code==="/enhance");n&&r.set("/enhance",{item:n,code:n.code,name:n.name,category:n.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,n,["pencahayaan","lighting"])})}if(t.some(n=>n.entity==="IMAGE_QUALITY")&&!r.has("/sharpen")){const n=this.catalog.find(s=>s.code==="/sharpen");n&&r.set("/sharpen",{item:n,code:n.code,name:n.name,category:n.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,n,["tajam","sharpen"])})}for(const n of this.catalog){if(r.has(n.code))continue;const s=z(n,a);if(s>=70){if(e.some(c=>{if(c.shorthand&&n.conflicts&&n.conflicts.includes(c.shorthand))return!0;const g=this.catalog.find(m=>m.code===c.shorthand);return!!(g&&g.conflicts&&g.conflicts.includes(n.code))}))continue;n.category;const p=this.findPromptIndex(a,n);r.set(n.code,{item:n,code:n.code,name:n.name,category:n.category,target:n.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${n.name}'.`,score:s,promptIndex:p})}}return Array.from(r.values())}deduplicateByFunctionGroup(a){var i,r,n;const t=new Map;for(const s of a){const o=((i=s.item)==null?void 0:i.functionGroup)||((r=s.item)==null?void 0:r.category)||s.code;t.has(o)?t.get(o).push(s):t.set(o,[s])}const e=[];for(const[s,o]of t.entries()){if(o.length===1){e.push(o[0]);continue}o.sort((m,h)=>{var E,I,S,N;const b=(E=m.item)!=null&&E.preferredRepresentative?1:0,y=(I=h.item)!=null&&I.preferredRepresentative?1:0;if(y!==b)return y-b;const f={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},u=f[(S=m.item)==null?void 0:S.status]||2,k=f[(N=h.item)==null?void 0:N.status]||2;return k!==u?k-u:(h.score||0)!==(m.score||0)?(h.score||0)-(m.score||0):m.code.length-h.code.length});const p={...o[0]},c=o.slice(1).map(m=>m.code),g=Array.from(new Set([...((n=p.item)==null?void 0:n.equivalentTo)||[],...c,...o.slice(1).flatMap(m=>{var h;return((h=m.item)==null?void 0:h.equivalentTo)||[]})])).filter(m=>m!==p.code);p.item={...p.item,equivalentTo:g},p.equivalentTo=g,e.push(p)}return e}hasConflict(a,t,e){if(!a)return!1;for(const i of t){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const r=this.catalog.find(n=>n.code===i);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}for(const i of e){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const r=this.catalog.find(n=>n.code===i);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,t,e,i){var h;const r=new Set(t.map(b=>b.code));for(const b of t)if(b.equivalentTo)for(const y of b.equivalentTo)r.add(y);const n=new Set(t.map(b=>{var y,f;return((y=b.item)==null?void 0:y.functionGroup)||((f=b.item)==null?void 0:f.category)})),s=new Set([...e.map(b=>b.entity),...i.map(b=>b.entity)]),o=new Set(i.map(b=>b.shorthand).filter(Boolean)),p=new Map;for(const b of t){const y=((h=b.item)==null?void 0:h.relationships)||[];for(const f of y){if(!f.code||r.has(f.code))continue;const u=this.catalog.find(E=>E.code===f.code);if(!u||this.hasConflict(u,o,r)||z(u,a)<0)continue;const k=u.functionGroup||u.category;n.has(k)||u.category==="HEADWEAR"&&!s.has("HEADWEAR")||p.has(u.code)||p.set(u.code,{item:u,code:u.code,name:u.name,category:u.category,target:u.target,functionGroup:k,description:u.description,relationship:f.relationType||"DIRECTLY_RELATED",reason:f.reason||`Berhubungan dengan ${b.name}`,source:u.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const c={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const b of s){const y=c[b]||[];for(const f of y)for(const u of this.catalog){if(r.has(u.code)||p.has(u.code)||f.category&&u.category!==f.category||f.target&&u.target!==f.target||u.category==="HEADWEAR"&&!s.has("HEADWEAR")||u.category==="TRANSPARENCY"&&!s.has("BACKGROUND")||this.hasConflict(u,o,r)||z(u,a)<0)continue;const k=u.functionGroup||u.category;n.has(k)||p.set(u.code,{item:u,code:u.code,name:u.name,category:u.category,target:u.target,functionGroup:k,description:u.description,relationship:f.relation||"CONTEXTUAL",reason:f.reason||`Berhubungan dengan area ${b}`,source:u.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const g=Array.from(p.values());return this.deduplicateByFunctionGroup(g).map(b=>({...b,isPrimary:!1,checked:!1,priority:b.priority||"DISARANKAN"}))}detectConflicts(a,t,e,i){const r=[];for(const o of a){const p=t.find(c=>c.entity===o.entity);p&&r.push({id:`conflict-${o.entity.toLowerCase()}`,entity:o.entity,label:o.label,type:"EDIT_VS_LOCK",shorthandA:p.shorthand||`[Lock ${o.entity}]`,shorthandB:o.shorthand||`[Ubah ${o.entity}]`,instructionA:p.description,instructionB:o.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${o.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]})}const n=Array.isArray(e)?e.map(o=>typeof o=="string"?o:o.code):Array.from(e.keys?e.keys():[]),s=Array.from(new Set([...n,...i]));for(const o of s){const p=this.catalog.find(c=>c.code===o);if(!(!p||!p.conflicts||p.conflicts.length===0)){for(const c of p.conflicts)if(s.includes(c)){if(r.some(h=>h.shorthandA===o&&h.shorthandB===c||h.shorthandA===c&&h.shorthandB===o))continue;const m=`conflict-${[o,c].sort().join("-")}`;r.some(h=>h.id===m)||r.push({id:m,entity:p.target,label:p.name,type:"SHORTHAND_CLASH",shorthandA:o,shorthandB:c,instructionA:p.description,instructionB:`Konflik dengan direktif ${c}`,reason:`Shorthand ${o} bertentangan langsung dengan ${c} pada target ${p.target}.`,options:[{id:"keep_a",label:`Gunakan ${o}`},{id:"keep_b",label:`Gunakan ${c}`}]})}}}return r}evaluateExclusions(a,t=[]){const e=new Set(a.map(n=>n.code));for(const n of a)if(n.equivalentTo)for(const s of n.equivalentTo)e.add(s);const i=new Set(t.map(n=>n.code)),r=[];for(const n of this.catalog){if(e.has(n.code))continue;let s="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const o=t.find(p=>{var c;return!!(n.conflicts&&n.conflicts.includes(p.code)||(c=p.item)!=null&&c.conflicts&&p.item.conflicts.includes(n.code))});o?s=`Bertentangan dengan direktif aktif: ${o.code} (${o.name}).`:n.category==="LOCK_PRESERVATION"||n.category==="FACE_IDENTITY"?n.code==="/facelock"||n.code==="/faceedit"||n.code==="/facechange"?s="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":n.code==="/hairlock"?s="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":n.code==="/backgroundlock"?s="Latar belakang tidak diminta untuk dikunci secara eksplisit.":n.code==="/outfitlock"?s="Pakaian subjek tidak diminta untuk dikunci.":n.code==="/headwearlock"&&(s="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):n.category==="HAIR"?s="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":n.category==="OUTFIT"?i.has("/outfit")?n.code==="/outfit-remove"?s="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":n.code==="/outfit-color"?s="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":s="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":s="Tidak ada instruksi yang memodifikasi pakaian atau busana.":n.category==="HEADWEAR"?s="Tidak ada instruksi penutup kepala atau hijab.":n.category==="BACKGROUND"||n.category==="TRANSPARENCY"?n.code==="/bgremove"?s="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":n.code==="/bgreplace"?s="Tidak ada permintaan penggantian latar belakang ke scene baru.":s="Tidak ada permintaan manipulasi latar belakang.":n.category==="CANVAS_RATIO"?s="Tidak ada instruksi pengubahan rasio kanvas gambar.":n.category==="BODY_POSE"?s="Tidak ada permintaan perubahan pose atau framing seluruh badan.":n.category==="STYLE_EFFECT"||n.category==="CAMERA_PHOTO"?s="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":n.category==="EXPRESSION"?s="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":n.category==="OBJECT"&&(s="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),r.push({code:n.code,name:n.name,category:n.category,target:n.target,description:n.description,reason:s})}return r}generateVisualTransformation(a,t,e){if(a.length===0&&t.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:e||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const i=a.map(o=>o.label).join(", "),r=t.map(o=>o.label).join(", ");let n="Elemen visual awal gambar",s="Elemen visual teroptimasi";if(a.some(o=>o.entity==="LIGHTING"))n="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",s="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(o=>o.entity==="HEADWEAR"))n="Subjek mengenakan penutup kepala / hijab asli",s="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(r?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(o=>o.entity==="OUTFIT")){const o=a.find(p=>p.entity==="OUTFIT");n="Busana awal subjek",s=`${o?o.description:"Busana baru terpasang"}`+(r?`; ${r} tetap terkunci aman.`:"")}else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REMOVE")))n="Foto subjek dengan latar belakang bawaan",s="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REPLACE")))n="Latar belakang awal foto",s="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(o=>o.entity==="CANVAS_RATIO")){const o=a.find(p=>p.entity==="CANVAS_RATIO");n="Dimensi kanvas bawaan foto",s=`${o?o.description:"Dimensi kanvas baru disesuaikan"}`}return{from:n,to:s,summary:`Transformasi pada [${i||"Tanpa Edit"}] dengan preservasi pada [${r||"Elemen Lain"}].`}}buildOptimalPrompt(a,t){if(!a&&t.length===0)return"";let e=a.trim();e&&!e.endsWith(".")&&!e.endsWith("!")&&!e.endsWith("?")&&(e+=".");const i=t.join(" ");return e&&i?`${e} ${i}`:i||e}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",timestamp:null}}}const v={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class Ha{constructor(a=[]){this.localEngine=new $a(a),this.status=v.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){C.getApiKey()||(this.status=v.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!C.getApiKey()}}async testConnection(a,t){var r;const e=(a||C.getApiKey()).trim(),i=t||C.getModel()||"gemini-2.5-flash";if(!e)return this.status=v.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:v.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};try{const n=`https://generativelanguage.googleapis.com/v1beta/models/${i}?key=${encodeURIComponent(e)}`,s=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});if(!s.ok){const p=((r=(await s.json().catch(()=>({}))).error)==null?void 0:r.message)||`HTTP ${s.status}: ${s.statusText}`;return this.status=v.FAILED,this.lastError=p,{success:!1,status:v.FAILED,message:`Gagal tersambung ke Gemini: ${p}`}}return this.status=v.CONNECTED,this.lastError=null,{success:!0,status:v.CONNECTED,message:`Berhasil terhubung ke model ${i}!`}}catch(n){return this.status=v.FAILED,this.lastError=n.message||"Koneksi jaringan gagal",{success:!1,status:v.FAILED,message:`Koneksi gagal: ${this.lastError}`}}}async analyzePrompt(a,t=null){const e=C.getApiKey().trim(),i=C.getModel()||"gemini-2.5-flash";if(!e)return{...this.localEngine.analyze(a,t),source:"LOCAL_ENGINE",engineNotice:"Analisis berjalan menggunakan Heuristic Semantic Engine Lokal (BYOK Gemini belum disetel)."};try{const n=await this.callGeminiAPI(a,e,i);if(n){const s=this.mergeAiWithCatalog(n,a,t);return this.status=v.CONNECTED,this.lastError=null,{...s,source:"GEMINI_AI",engineNotice:`Dianalisis menggunakan ${i} melalui BYOK.`}}}catch(n){console.warn("Gemini API call failed, falling back to local engine:",n),this.status=v.FAILED,this.lastError=n.message}return{...this.localEngine.analyze(a,t),source:"LOCAL_ENGINE_FALLBACK",engineNotice:"Gemini API tidak merespons, beralih otomatis ke Engine Semantik Lokal."}}async callGeminiAPI(a,t,e){var c,g,m,h,b;const i=`https://generativelanguage.googleapis.com/v1beta/models/${e}:generateContent?key=${encodeURIComponent(t)}`,n={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V2. Tugas Anda menganalisis instruksi prompt gambar dari user dan memetakan maksud semantik, area yang diubah (editAreas), area yang dikunci (lockedAreas), deteksi konflik, rekomendasi shorthand (WAJIB, DISARANKAN, OPSIONAL), dan visual transformation.
Jawab HANYA dalam format JSON valid tanpa markdown formatting.

Prompt User: "${a}"

Katalog Shorthand yang didukung: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /denoise, /hdr, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade.`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},s=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!s.ok){const y=await s.text();throw new Error(`Gemini API error (${s.status}): ${y}`)}const p=(b=(h=(m=(g=(c=(await s.json()).candidates)==null?void 0:c[0])==null?void 0:g.content)==null?void 0:m.parts)==null?void 0:h[0])==null?void 0:b.text;if(!p)throw new Error("Respon Gemini kosong.");try{return JSON.parse(p)}catch{const y=p.replace(/```json/g,"").replace(/```/g,"").trim();return JSON.parse(y)}}mergeAiWithCatalog(a,t,e){var r,n,s,o;const i=this.localEngine.analyze(t,e);return{rawPrompt:t,normalizedPrompt:i.normalizedPrompt,cleanText:i.cleanText,intent:{primaryAction:((r=a.intent)==null?void 0:r.primaryAction)||i.intent.primaryAction,primaryTarget:((n=a.intent)==null?void 0:n.primaryTarget)||i.intent.primaryTarget,summary:((s=a.intent)==null?void 0:s.summary)||a.summary||i.intent.summary,priority:((o=a.intent)==null?void 0:o.priority)||i.intent.priority,category:i.intent.category},editAreas:a.editAreas&&a.editAreas.length>0?a.editAreas:i.editAreas,lockedAreas:a.lockedAreas&&a.lockedAreas.length>0?a.lockedAreas:i.lockedAreas,unchangedAreas:i.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:i.conflicts,primaryShorthands:i.primaryShorthands,relatedShorthands:i.relatedShorthands,recommendations:i.recommendations,exclusions:i.exclusions,installedShorthands:i.installedShorthands,visualTransformation:a.visualTransformation||i.visualTransformation,optimalPrompt:i.optimalPrompt,timestamp:new Date().toISOString()}}}function Sa(l){return!l||typeof l!="string"?0:l.trim().split(/\s+/).filter(Boolean).length}function Ba(l){if(!l||typeof l!="string")return 0;const a=l.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function Ka(l,a=[]){if(!l||a.length===0)return 0;const t=Sa(l);if(t===0)return 0;const e=a.length;return Math.min(100,Math.round(e/t*100))}function Fa(l){return!l||typeof l!="string"?"":l.trim()}function Va(l,a,t,e){const{status:i}=a;let r="status-unconfigured",n="Gemini: Belum diuji";return i===v.CONNECTED?(r="status-connected",n="Gemini: Tersambung"):i===v.FAILED&&(r="status-failed",n="Gemini: Gagal"),{html:`
    <header class="app-header">
      <div class="header-container">
        <div class="brand-wrapper">
          <div class="brand-logo" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-text">
            <h1>
              PROMPT SHORTHAND ANALYZER
              <span class="version-tag">V2.1</span>
            </h1>
            <p>Contextual Shorthand Notation &amp; Semantic Preservation</p>
          </div>
        </div>

        <nav class="nav-menu" role="tablist">
          <button type="button" class="nav-item ${l==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${l==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${l==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${l==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${l==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${l==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${l==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${l==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions">
          <button type="button" class="status-badge ${r}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${n}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(o){o.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",()=>{const g=c.getAttribute("data-tab");t&&t(g)})});const p=o.querySelector("#header-status-badge");p&&e&&p.addEventListener("click",()=>e())}}}const Ca=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function Wa(l){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${Ca.map(e=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${e.id}" title="${e.description}">
      <span style="font-weight: 700; color: #93c5fd;">${e.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(e){e.querySelectorAll(".btn-preset-chip").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-preset-id"),n=Ca.find(s=>s.id===r);n&&l&&l(n.prompt)})})}}}function za({currentValue:l="",onAnalyze:a,onReset:t,onClear:e,onSelectPreset:i,isAnalyzing:r=!1}){const n=Wa(i);return{html:`
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
        ${n.html}
      </div>

      <!-- Textarea Input -->
      <div class="form-group" style="margin-bottom: 0.85rem;">
        <textarea 
          id="prompt-textarea" 
          class="textarea-prompt font-mono" 
          placeholder="Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh:&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• hapus latar belakang&#10;• ubah rasio menjadi 9:16"
        >${l||""}</textarea>
      </div>

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          💡 Mendukung analisis semantik maksud, entity lock, isolasi area, dan shorthand notation.
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${r?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${r?"Menganalisis...":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(o){n.bindEvents(o);const p=o.querySelector("#prompt-textarea"),c=o.querySelector("#btn-run-analysis"),g=o.querySelector("#btn-clear-prompt"),m=o.querySelector("#btn-reset-app");c&&c.addEventListener("click",()=>{a&&a(p.value)}),g&&g.addEventListener("click",()=>{p.value="",e&&e()}),m&&m.addEventListener("click",()=>{t&&t()}),p&&p.addEventListener("keydown",h=>{(h.ctrlKey||h.metaKey)&&h.key==="Enter"&&(h.preventDefault(),a&&a(p.value))})}}}function Ya(l=[],a){const t=l&&l.length>0,e=t?l.map(r=>`
    <div class="conflict-banner" data-conflict-id="${r.id}" style="margin-bottom: 0.75rem;">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>DETEKSI KONFLIK &mdash; CONFLICT DETECTED</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${r.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${r.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${r.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${r.instructionA||r.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${r.instructionB||r.shorthandB}"</em>
        </span>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${r.id}">
          Gunakan Instruksi User (Abaikan Kunci)
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${r.id}">
          Pertahankan Lock (Abaikan Ubah)
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${r.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `).join(""):"";return{html:`
    <!-- CARD G: SHORTHAND KONFLIK (CONFLICT DETECTED) -->
    <section class="panel analyzer-card" id="card-conflicts">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: ${t?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">G</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${t?"badge-wajib":"badge-neutral"}">
          ${t?`${l.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${t?`
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${e}
        </div>
      `:`
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik direktif yang terdeteksi. Seluruh instruksi prompt konsisten.</span>
        </div>
      `}
    </section>
  `,bindEvents(r){r.querySelectorAll(".btn-resolve").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-action"),o=n.getAttribute("data-conflict-id");a&&a(o,s)})})}}}function qa({installedShorthands:l=[],catalog:a=[],onRemoveShorthand:t,onAddShorthand:e}){const i=l.length>0?l.map(s=>`
        <span class="shorthand-chip" data-code="${s}">
          <span>${s}</span>
          <button type="button" class="chip-remove-btn" data-code="${s}" title="Hapus ${s}">&times;</button>
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
            ${a.filter(s=>!l.includes(s.code)).map(s=>`
      <option value="${s.code}">${s.code} - ${s.name}</option>
    `).join("")}
          </select>
          <button type="button" class="btn btn-secondary btn-xs" id="btn-add-shorthand" title="Pasang shorthand ke prompt">
            + Tambah
          </button>
        </div>
      </div>

      <div class="installed-chips-container" id="installed-chips-list">
        ${i}
      </div>
    </div>
  `,bindEvents(s){s.querySelectorAll(".chip-remove-btn").forEach(c=>{c.addEventListener("click",g=>{g.stopPropagation();const m=c.getAttribute("data-code");t&&t(m)})});const o=s.querySelector("#btn-add-shorthand"),p=s.querySelector("#select-catalog-shorthand");o&&p&&o.addEventListener("click",()=>{const c=p.value;c&&e&&e(c)})}}}function Ja({optimalPrompt:l="",installedShorthands:a=[],catalog:t=[],onCopyPrompt:e,onRemoveShorthand:i,onAddShorthand:r}){const n=qa({installedShorthands:a,catalog:t,onRemoveShorthand:i,onAddShorthand:r}),s=Sa(l),o=Ba(l);return Ka(l,a),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${s} kata &bull; ~${o} token
          </span>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-main-prompt" title="Hanya salin main prompt tanpa metadata">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            SALIN PROMPT
          </button>
        </div>
      </div>

      <!-- Optimal Output String Display -->
      <div class="optimal-output-box" id="optimal-prompt-display">
        <span>${l||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${n.html}
    </section>
  `,bindEvents(c){n.bindEvents(c);const g=c.querySelector("#btn-copy-main-prompt");g&&g.addEventListener("click",()=>{e&&e(l)})}}}function Qa(l){const{primaryAction:a="-",primaryTarget:t="-",summary:e="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:i="-",category:r="-"}=l||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${e}</p>
      </div>

      <div class="intent-grid">
        <div class="intent-meta-card">
          <span class="intent-meta-label">INTENT</span>
          <span class="intent-meta-value">${a}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">TARGET AREA</span>
          <span class="intent-meta-value">${t}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">KATEGORI</span>
          <span class="intent-meta-value">${r}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${i}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function Xa(l=[]){const a=l.length>0?l.map(e=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${e.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${e.label}</span>
              ${e.shorthand?`<span class="badge badge-blue font-mono">${e.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${e.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${l.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function Za(l=[],a=[]){const t=l.length>0?l.map(i=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${i.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${i.label}</span>
              ${i.shorthand?`<span class="badge badge-wajib font-mono">${i.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${i.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Seluruh elemen visual selain instruksi edit dipertahankan secara otomatis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-locked-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">C</span>
          <h2>AREA YANG DIPERTAHANKAN / LOCKED</h2>
        </div>
        <span class="badge badge-blue">${l.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${t}
      </div>
    </section>
  `,bindEvents(){}}}function ae(l){const{from:a="Kondisi awal gambar",to:t="Kondisi teroptimasi",summary:e=""}=l||{};return{html:`
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
          <p class="transform-box-content">${a}</p>
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
          <p class="transform-box-content">${t}</p>
        </div>
      </div>

      ${e?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${e}</p>`:""}
    </section>
  `,bindEvents(){}}}function ee({primaryShorthands:l=[],relatedShorthands:a=[],recommendations:t=[],installedShorthands:e=[],onToggleShorthand:i}){const r=l.length>0?l:t.filter(c=>c.isPrimary!==!1&&c.priority==="WAJIB"),n=a.length>0?a:t.filter(c=>c.isPrimary===!1||c.priority!=="WAJIB"),s=r.length>0?r.map(c=>{var b,y,f;const g=e.includes(c.code),m=c.equivalentTo||((b=c.item)==null?void 0:b.equivalentTo)||[],h=c.functionGroup||((y=c.item)==null?void 0:y.functionGroup)||c.category;return`
          <div class="rec-card primary-rec-card ${g?"rec-card-active":""}" data-code="${c.code}">
            <div>
              <div class="rec-card-header">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="rec-code" style="color: #60a5fa; font-size: 1rem; font-weight: 800;">✓ ${c.code}</span>
                  <span class="badge badge-wajib">WAJIB</span>
                  <span class="badge badge-blue font-mono" style="font-size: 0.675rem;">REPRESENTATIF UTAMA</span>
                </div>
                <span class="badge badge-neutral" style="font-size: 0.7rem;">${c.category}</span>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${c.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${c.target}</span></div>
                <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #c084fc;">${h}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${c.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${((f=c.item)==null?void 0:f.status)||"CORE"}</span></div>
                ${m.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${m.map(u=>`<span class="alias-tag font-mono">${u}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${g?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${g?"✅ Aktif Otomatis di Prompt Optimal":"⚠️ Dilepas dari Prompt"}
              </span>
              <button 
                type="button" 
                class="btn ${g?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${c.code}"
                title="${g?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${g?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand utama langsung yang terdeteksi dari prompt ini.</div>',o=n.length>0?n.map(c=>{var y;const g=e.includes(c.code),m=c.equivalentTo||((y=c.item)==null?void 0:y.equivalentTo)||[],h=c.relationship||"CONTEXTUAL",b=c.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${g?"rec-card-active":""}" data-code="${c.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${c.code}" 
                    ${g?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${c.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${h}</span>
                  <span class="badge ${b}" style="font-size: 0.675rem;">${c.source||"CORE"}</span>
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${c.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${c.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${c.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${h}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${c.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${c.source||"CORE"}</span></div>
                ${m.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${m.map(f=>`<span class="alias-tag font-mono">${f}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${g?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${g?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
              </span>
              <button 
                type="button" 
                class="btn ${g?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
                data-code="${c.code}"
                title="${g?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
              >
                ${g?"Batal Centang":"+ Centang & Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand berhubungan yang relevan.</div>';return{html:`
    <!-- CARD E: SHORTHAND UTAMA (PRIMARY SHORTHAND) -->
    <section class="panel analyzer-card" id="card-primary-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">E</span>
          <h2>SHORTHAND UTAMA (PRIMARY SHORTHAND)</h2>
        </div>
        <span class="badge badge-blue">${r.length} Aktif Otomatis</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Mewakili instruksi langsung dari prompt user. Otomatis terpasang [✓] dan masuk ke Prompt Optimal dengan deduplikasi fungsi terbaik.
      </p>

      <div class="rec-grid">
        ${s}
      </div>
    </section>

    <!-- CARD F: SHORTHAND BERHUBUNGAN (RELATED SHORTHAND) -->
    <section class="panel analyzer-card" id="card-related-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">F</span>
          <h2>SHORTHAND BERHUBUNGAN (RELATED SHORTHAND)</h2>
        </div>
        <span class="badge badge-purple">${n.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${o}
      </div>
    </section>
  `,bindEvents(c){c.querySelectorAll(".btn-toggle-rec").forEach(g=>{g.addEventListener("click",m=>{m.stopPropagation();const h=g.getAttribute("data-code");i&&i(h)})}),c.querySelectorAll(".related-checkbox").forEach(g=>{g.addEventListener("change",m=>{m.stopPropagation();const h=g.getAttribute("data-code");i&&i(h)})})}}}function te(l=[]){const a=l.length>0?l.map(e=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${e.code}</span>
            <span class="exclusion-target">&bull; ${e.target}</span>
          </div>
          <p class="exclusion-reason">
            ${e.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">H</span>
          <h2>SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <span class="badge badge-neutral">${l.length} Dikecualikan</span>
      </div>

      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Engine secara cerdas mengecualikan shorthand di bawah ini karena tidak relevan dengan konteks prompt:
      </p>

      <div class="exclusions-grid">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function ne({analysisResult:l,currentPrompt:a,catalog:t,isAnalyzing:e,onAnalyze:i,onReset:r,onClear:n,onSelectPreset:s,onCopyPrompt:o,onAddShorthand:p,onRemoveShorthand:c,onToggleRecommendation:g,onResolveConflict:m}){const{optimalPrompt:h="",installedShorthands:b=[],conflicts:y=[],intent:f={},editAreas:u=[],lockedAreas:k=[],unchangedAreas:E=[],visualTransformation:I={},primaryShorthands:S=[],relatedShorthands:N=[],recommendations:Y=[],exclusions:q=[]}=l||{},$=za({currentValue:a,onAnalyze:i,onReset:r,onClear:n,onSelectPreset:s,isAnalyzing:e}),_=Ya(y,m),H=Ja({optimalPrompt:h,installedShorthands:b,catalog:t,onCopyPrompt:o,onRemoveShorthand:c,onAddShorthand:p}),J=Qa(f),D=Xa(u),w=Za(k,E),Q=ae(I),B=ee({primaryShorthands:S,relatedShorthands:N,recommendations:Y,installedShorthands:b,onToggleShorthand:g}),ea=te(q);return{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${$.html}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${H.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${J.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${D.html}
        ${w.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${Q.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${B.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${_.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${ea.html}
    </div>
  `,bindEvents(P){$.bindEvents(P),H.bindEvents(P),B.bindEvents(P),_.bindEvents(P)}}}function ie({analysisResult:l,onCopyJson:a,onRunCustomJson:t}){var c,g,m;const e=JSON.stringify({rawPrompt:(l==null?void 0:l.rawPrompt)||"",cleanText:(l==null?void 0:l.cleanText)||"",installedShorthands:(l==null?void 0:l.installedShorthands)||[]},null,2),i=JSON.stringify(l||{},null,2),r=((c=l==null?void 0:l.conflicts)==null?void 0:c.length)>0,n=!!((g=l==null?void 0:l.intent)!=null&&g.primaryAction&&l.intent.primaryAction!=="-"),s=((m=l==null?void 0:l.installedShorthands)==null?void 0:m.length)||0,o=(l==null?void 0:l.source)||"LOCAL_ENGINE";return{html:`
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
        <div class="val-item" style="border-left: 3px solid ${n?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${n?"✅ Ya":"⚪ Menunggu Input"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid ${r?"var(--status-danger)":"var(--status-success)"};">
          <span>Status Konflik:</span>
          <strong>${r?"⚠️ Terdeteksi":"✅ Aman"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-blue);">
          <span>Shorthand Aktif:</span>
          <strong>${s} Item</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-purple);">
          <span>Sumber Engine:</span>
          <strong>${o}</strong>
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
          <pre class="json-box" id="json-input-view">${e}</pre>
        </div>

        <!-- Output JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7; text-transform: uppercase;">
              OUTPUT JSON (PIPELINE RESULT)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Hasil Analisis Lengkap</span>
          </div>
          <pre class="json-box" id="json-output-view">${i}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(h){const b=h.querySelector("#btn-copy-output-json");b&&b.addEventListener("click",()=>{a&&a(i)})}}}function re({catalog:l=[],activeCategory:a="ALL",activeTarget:t="ALL",activeRecLevel:e="ALL",searchQuery:i="",currentPage:r=1,pageSize:n=12,selectedDetailCode:s=null,isAddModalOpen:o=!1,isImportModalOpen:p=!1,duplicateWarning:c=null,onSelectCategory:g,onSelectTarget:m,onSelectRecLevel:h,onSearchChange:b,onPageChange:y,onOpenDetail:f,onCloseDetail:u,onOpenAddModal:k,onCloseAddModal:E,onSubmitAddShorthand:I,onOpenImportModal:S,onCloseImportModal:N,onSubmitImport:Y,onExportCatalog:q,onResetUserCatalog:$,onAddShorthandToPrompt:_}){const H=Pa(l,{category:a,target:t,recommendationLevel:e,searchQuery:i}),J=H.length,D=Math.max(1,Math.ceil(J/n)),w=Math.min(Math.max(1,r),D),Q=(w-1)*n,B=H.slice(Q,Q+n),ea=Array.from(new Set(l.map(d=>d.target))).sort(),P=["ALL",...Object.keys(aa)].map(d=>{const T=aa[d],G=d==="ALL"?"Semua Kategori":`${T.code}. ${T.label}`;return`
      <button type="button" class="category-tab-btn ${a===d?"active":""}" data-cat="${d}">
        ${G}
      </button>
    `}).join(""),Na=B.length>0?B.map(d=>{let T="badge-opsional";d.recommendationLevel==="WAJIB"||d.priority==="HIGH"?T="badge-wajib":d.recommendationLevel==="DISARANKAN"&&(T="badge-disarankan");const G=d.source==="USER"?"badge-purple":"badge-neutral",K=(d.semanticTriggers||[]).slice(0,3).map(j=>`<span class="compat-pill">"${j}"</span>`).join(" "),F=d.equivalentTo||[],U=d.relationships||[];return`
          <div class="catalog-item-card" data-code="${d.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${d.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${G}">${d.source||"CORE"}</span>
                  <span class="badge ${T}">${d.recommendationLevel||d.priority}</span>
                  <span class="badge badge-neutral">${d.category}</span>
                </div>
              </div>
              <h3 class="catalog-item-name">${d.name}</h3>
              <p class="catalog-item-desc" style="margin-top: 0.4rem;">${d.description}</p>
            </div>

            <!-- Structured Metadata Section -->
            <div class="catalog-meta-list" style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <div><strong>Target:</strong> <span style="color: #93c5fd;">${d.target}</span></div>
              ${d.functionGroup?`<div><strong>Fungsi:</strong> <span style="color: #c084fc; font-size: 0.75rem;">${d.functionGroup}</span></div>`:""}
              ${F.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${F.map(j=>`<span class="alias-tag font-mono">${j}</span>`).join(" ")}
                </div>
              `:""}
              ${U.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${U.length} terhubung (${U.map(j=>j.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${K||"-"}</div>
            </div>

            <!-- Card Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 0.75rem;">
              <button type="button" class="btn btn-outline btn-xs btn-open-detail" data-code="${d.code}" title="Lihat detail lengkap direktif">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Detail
              </button>
              <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${d.code}">
                + Tambah ke Prompt
              </button>
            </div>
          </div>
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',wa=D>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${w<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${w} dari ${D} (${J} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${w>=D?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let ca="";if(s){const d=l.find(T=>T.code===s);d&&(ca=`
        <div class="modal-backdrop" id="modal-detail-backdrop">
          <div class="modal-card" style="max-width: 680px;" role="dialog" aria-modal="true">
            <div class="modal-header">
              <div>
                <span class="catalog-item-code" style="font-size: 1.35rem;">${d.code}</span>
                <h3 style="font-size: 1rem; color: #ffffff; margin-top: 0.2rem;">${d.name}</h3>
              </div>
              <button type="button" class="modal-close" id="btn-close-detail-modal" aria-label="Tutup">&times;</button>
            </div>

            <div class="modal-body" style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto;">
              <!-- Meta Row -->
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-neutral">Sumber: ${d.source||"CORE"}</span>
                <span class="badge badge-blue">Kategori: ${d.category}</span>
                <span class="badge badge-purple">Target: ${d.target}</span>
                <span class="badge badge-wajib">Level: ${d.recommendationLevel||d.priority}</span>
                ${d.preferredRepresentative?'<span class="badge badge-blue font-mono">REPRESENTATIF UTAMA</span>':""}
              </div>

              <!-- Function Group & Equivalents -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-card); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>Function Group:</strong> <span style="color: #c084fc;">${d.functionGroup||"-"}</span>
                </div>
                ${d.equivalentTo&&d.equivalentTo.length>0?`
                  <div style="margin-top: 0.4rem; font-size: 0.8rem;">
                    <strong>Alias Setara (Equivalent To):</strong>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.25rem;">
                      ${d.equivalentTo.map(T=>`<span class="alias-tag font-mono">${T}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${d.relationships&&d.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${d.relationships.map(T=>`
                      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 0.4rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                        <span class="font-mono" style="color: #c4b5fd; font-weight: 700;">${T.code}</span>
                        <span class="badge badge-purple" style="font-size: 0.65rem; margin-left: 0.35rem;">${T.relationType}</span>
                        <div style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.2rem;">${T.reason}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Deskripsi -->
              <div>
                <span class="detail-label">DESKRIPSI:</span>
                <p class="detail-value" style="margin-top: 0.25rem;">${d.description}</p>
              </div>

              <!-- Kapan Digunakan -->
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #6ee7b7; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${d.whenToUse||"Sesuai dengan instruksi user yang relevan."}</p>
              </div>

              <!-- Kapan Tidak Digunakan -->
              <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #fca5a5; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN TIDAK DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${d.whenNotToUse||"Jika bertentangan dengan preferensi user."}</p>
              </div>

              <!-- Semantic Triggers -->
              <div>
                <span class="detail-label">SEMANTIC TRIGGERS:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                  ${(d.semanticTriggers||[]).map(T=>`<span class="compat-pill">"${T}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${d.conflicts&&d.conflicts.length>0?d.conflicts.map(T=>`<span class="conflict-pill">${T}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${d.compatibleWith&&d.compatibleWith.length>0?d.compatibleWith.map(T=>`<span class="compat-pill">${T}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-close-detail-footer">Tutup</button>
              <button type="button" class="btn btn-primary btn-sm btn-add-from-modal" data-code="${d.code}">
                + Tambah ${d.code} ke Prompt
              </button>
            </div>
          </div>
        </div>
      `)}let da="";if(o){const d=Object.keys(Da);da=`
      <div class="modal-backdrop" id="modal-add-backdrop">
        <div class="modal-card" style="max-width: 620px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">+ Tambah Shorthand Baru (User Catalog)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Tersimpan permanen di browser (IndexedDB). Tidak akan terhapus saat Analyzer di-reset.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-add-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-add-shorthand">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 65vh; overflow-y: auto;">
              ${c?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${c.message}</p>
                  <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
                    Disarankan menambahkan kode ini sebagai <em>Alias Setara (Equivalent To)</em> atau klik Simpan Kembali jika tetap ingin membuat entri baru.
                  </p>
                </div>
              `:""}

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-code">KODE SHORTHAND *</label>
                  <input type="text" id="add-code" class="input-primary" placeholder="/customtag" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
                <div>
                  <label class="detail-label" for="add-name">NAMA SHORTHAND *</label>
                  <input type="text" id="add-name" class="input-primary" placeholder="Nama representatif" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-category">KATEGORI *</label>
                  <select id="add-category" class="select-input" style="width: 100%; margin-top: 0.25rem;">
                    ${Object.keys(aa).map(T=>`<option value="${T}">${T} - ${aa[T].label}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label class="detail-label" for="add-target">TARGET AREA *</label>
                  <input type="text" id="add-target" class="input-primary" placeholder="Misal: Wajah, Pakaian, Latar" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div>
                <label class="detail-label" for="add-func-group">FUNCTION GROUP (SEMANTIC DEDUPLICATION) *</label>
                <input type="text" id="add-func-group" class="input-primary" placeholder="Misal: CUSTOM_ACTION atau pilih group standar" list="list-func-groups" style="width: 100%; margin-top: 0.25rem;" />
                <datalist id="list-func-groups">
                  ${d.map(T=>`<option value="${T}">`).join("")}
                </datalist>
              </div>

              <div>
                <label class="detail-label" for="add-desc">DESKRIPSI *</label>
                <textarea id="add-desc" class="input-primary" rows="2" placeholder="Fungsi dan cara kerja shorthand ini..." required style="width: 100%; margin-top: 0.25rem;"></textarea>
              </div>

              <div>
                <label class="detail-label" for="add-triggers">SEMANTIC TRIGGERS (Pisahkan dengan koma)</label>
                <input type="text" id="add-triggers" class="input-primary" placeholder="kata kunci 1, kata kunci 2, pemicu semantik" style="width: 100%; margin-top: 0.25rem;" />
              </div>

              <div>
                <label class="detail-label" for="add-equivalent">ALIAS SETARA (EQUIVALENT TO, pisahkan dengan koma)</label>
                <input type="text" id="add-equivalent" class="input-primary" placeholder="/alias1, /alias2" style="width: 100%; margin-top: 0.25rem;" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-add">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Simpan Shorthand</button>
            </div>
          </form>
        </div>
      </div>
    `}let ua="";return p&&(ua=`
      <div class="modal-backdrop" id="modal-import-backdrop">
        <div class="modal-card" style="max-width: 580px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">⬆️ Impor Katalog (JSON)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Impor data shorthand. Format JSON aman tanpa API key atau kredensial rahasia.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-import-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-import-catalog">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div>
                <label class="detail-label">MODE IMPOR:</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.35rem;">
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="MERGE" checked />
                    <strong>MERGE</strong> (Gabungkan tanpa menimpa CORE)
                  </label>
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="REPLACE" />
                    <strong>REPLACE</strong> (Ganti User Catalog)
                  </label>
                </div>
              </div>

              <div>
                <label class="detail-label" for="import-json-textarea">PASTE JSON ATAU PILIH FILE:</label>
                <textarea id="import-json-textarea" class="input-primary font-mono" rows="6" placeholder='{ "catalogVersion": "2.1", "entries": [...] }' style="width: 100%; margin-top: 0.25rem; font-size: 0.775rem;"></textarea>
              </div>

              <div>
                <input type="file" id="import-file-input" accept=".json" style="font-size: 0.8rem; color: var(--text-muted);" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-import">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Mulai Impor</button>
            </div>
          </form>
        </div>
      </div>
    `),{html:`
    <section class="panel">
      <!-- Page Header -->
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">SEMANTIC SHORTHAND KNOWLEDGE BASE</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Basis pengetahuan semantik shorthand yang terintegrasi langsung dengan Semantic Engine, Deduplikasi Fungsi, dan Relasi Antar-Domain.
          </p>
        </div>
        <span class="badge badge-blue font-mono">${l.length} Shorthand Terdaftar</span>
      </div>

      <!-- Action Bar: Add, Export, Import, Reset User Catalog -->
      <div class="catalog-action-bar">
        <div style="font-size: 0.825rem; color: var(--text-muted);">
          CORE CATALOG: <strong>Read-Only</strong> &bull; USER CATALOG: <strong>IndexedDB Persistent</strong>
        </div>
        <div class="catalog-actions-group">
          <button type="button" class="btn btn-primary btn-xs" id="btn-open-add-shorthand">
            + Tambah Shorthand
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-catalog" title="Download sanitized catalog JSON">
            ⬇️ Ekspor JSON
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-open-import-catalog" title="Import catalog JSON">
            ⬆️ Impor JSON
          </button>
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-user-catalog" title="Reset hanya entri user, core tetap utuh">
            🔄 Reset User Katalog
          </button>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="category-tabs" id="catalog-category-tabs" style="margin-bottom: 1rem;">
        ${P}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${ea.map(d=>`<option value="${d}" ${t===d?"selected":""}>Target: ${d}</option>`).join("")}
          </select>

          <!-- Filter Recommendation Level -->
          <select id="select-filter-rec-level" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Level Rekomendasi --</option>
            <option value="WAJIB" ${e==="WAJIB"?"selected":""}>Level: WAJIB</option>
            <option value="DISARANKAN" ${e==="DISARANKAN"?"selected":""}>Level: DISARANKAN</option>
            <option value="OPSIONAL" ${e==="OPSIONAL"?"selected":""}>Level: OPSIONAL</option>
          </select>
        </div>

        <!-- Semantic Search Input -->
        <div style="flex: 1; max-width: 380px; min-width: 250px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari semantik: misal 'jangan ubah wajah', 'ganti baju', 'latar baru'..."
            value="${i||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${Na}
      </div>

      <!-- Pagination -->
      ${wa}

      <!-- Modals -->
      ${ca}
      ${da}
      ${ua}
    </section>
  `,bindEvents(d){d.querySelectorAll(".category-tab-btn").forEach(A=>{A.addEventListener("click",()=>{const R=A.getAttribute("data-cat");g&&g(R)})});const T=d.querySelector("#select-filter-target");T&&T.addEventListener("change",A=>{m&&m(A.target.value)});const G=d.querySelector("#select-filter-rec-level");G&&G.addEventListener("change",A=>{h&&h(A.target.value)});const K=d.querySelector("#catalog-search-input");K&&K.addEventListener("input",A=>{b&&b(A.target.value)});const F=d.querySelector(".btn-prev-page");F&&F.addEventListener("click",()=>{y&&y(w-1)});const U=d.querySelector(".btn-next-page");U&&U.addEventListener("click",()=>{y&&y(w+1)});const j=d.querySelector("#btn-open-add-shorthand");j&&k&&j.addEventListener("click",k);const pa=d.querySelector("#btn-export-catalog");pa&&q&&pa.addEventListener("click",q);const ga=d.querySelector("#btn-open-import-catalog");ga&&S&&ga.addEventListener("click",S);const ma=d.querySelector("#btn-reset-user-catalog");ma&&$&&ma.addEventListener("click",$),d.querySelectorAll(".btn-open-detail").forEach(A=>{A.addEventListener("click",()=>{const R=A.getAttribute("data-code");f&&f(R)})});const ha=d.querySelector("#btn-close-detail-modal"),ka=d.querySelector("#btn-close-detail-footer"),ta=d.querySelector("#modal-detail-backdrop"),X=()=>{u&&u()};ha&&ha.addEventListener("click",X),ka&&ka.addEventListener("click",X),ta&&ta.addEventListener("click",A=>{A.target===ta&&X()});const ba=d.querySelector("#btn-close-add-modal"),fa=d.querySelector("#btn-cancel-add"),na=d.querySelector("#modal-add-backdrop"),ia=()=>{E&&E()};ba&&ba.addEventListener("click",ia),fa&&fa.addEventListener("click",ia),na&&na.addEventListener("click",A=>{A.target===na&&ia()});const ya=d.querySelector("#form-add-shorthand");ya&&I&&ya.addEventListener("submit",A=>{A.preventDefault();let R=d.querySelector("#add-code").value.trim();R.startsWith("/")||(R="/"+R);const x=d.querySelector("#add-name").value.trim(),M=d.querySelector("#add-category").value,V=d.querySelector("#add-target").value.trim(),Z=d.querySelector("#add-func-group").value.trim()||M,ja=d.querySelector("#add-desc").value.trim(),Ia=d.querySelector("#add-triggers").value.trim(),Oa=d.querySelector("#add-equivalent").value.trim(),_a=Ia?Ia.split(",").map(W=>W.trim()).filter(Boolean):[],Ma=Oa?Oa.split(",").map(W=>W.trim().startsWith("/")?W.trim():"/"+W.trim()).filter(Boolean):[];I({code:R,name:x,category:M,target:V,functionGroup:Z,description:ja,semanticTriggers:_a,equivalentTo:Ma,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${V.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const Ta=d.querySelector("#btn-close-import-modal"),Aa=d.querySelector("#btn-cancel-import"),ra=d.querySelector("#modal-import-backdrop"),sa=()=>{N&&N()};Ta&&Ta.addEventListener("click",sa),Aa&&Aa.addEventListener("click",sa),ra&&ra.addEventListener("click",A=>{A.target===ra&&sa()});const Ea=d.querySelector("#import-file-input"),va=d.querySelector("#import-json-textarea");Ea&&va&&Ea.addEventListener("change",A=>{const R=A.target.files[0];if(R){const x=new FileReader;x.onload=M=>{va.value=M.target.result},x.readAsText(R)}});const Ra=d.querySelector("#form-import-catalog");Ra&&Y&&Ra.addEventListener("submit",A=>{var M,V,Z;A.preventDefault();const R=((M=d.querySelector('input[name="import-mode"]:checked'))==null?void 0:M.value)||"MERGE",x=(Z=(V=d.querySelector("#import-json-textarea"))==null?void 0:V.value)==null?void 0:Z.trim();Y(x,R)}),d.querySelectorAll(".btn-add-from-catalog").forEach(A=>{A.addEventListener("click",()=>{const R=A.getAttribute("data-code");_&&_(R)})});const oa=d.querySelector(".btn-add-from-modal");oa&&oa.addEventListener("click",()=>{const A=oa.getAttribute("data-code");_&&_(A),X()})}}}function se({geminiStatusInfo:l,onTestConnection:a,onSaveSettings:t,onClearKey:e}){const i=C.getApiKey(),r=C.getModel(),{status:n,error:s}=l;let o="status-unconfigured",p="🟡 Gemini: Belum diuji / konfigurasi";return n===v.CONNECTED?(o="status-connected",p="🟢 Gemini: Tersambung"):n===v.FAILED&&(o="status-failed",p="🔴 Gemini: Gagal"),{html:`
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
                value="${i||""}" 
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
              <option value="gemini-2.5-flash" ${r==="gemini-2.5-flash"?"selected":""}>gemini-2.5-flash (Direkomendasikan &bull; Cepat &amp; Akurat)</option>
              <option value="gemini-2.5-pro" ${r==="gemini-2.5-pro"?"selected":""}>gemini-2.5-pro (Penalaran Kompleks)</option>
              <option value="gemini-2.0-flash" ${r==="gemini-2.0-flash"?"selected":""}>gemini-2.0-flash (Flash Standar)</option>
              <option value="gemini-1.5-flash" ${r==="gemini-1.5-flash"?"selected":""}>gemini-1.5-flash (Generasi Sebelumnya)</option>
            </select>
          </div>

          <!-- Connection Status Card -->
          <div class="connection-status-card">
            <div style="flex: 1;">
              <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                Status Koneksi:
              </div>
              <div class="status-badge ${o}" id="settings-status-badge">
                <span class="status-dot"></span>
                <span>${p}</span>
              </div>
              ${s?`<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${s}</div>`:""}
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
  `,bindEvents(g){const m=g.querySelector("#setting-api-key"),h=g.querySelector("#setting-model-select"),b=g.querySelector("#btn-toggle-key-visibility"),y=g.querySelector("#btn-test-connection"),f=g.querySelector("#btn-save-settings"),u=g.querySelector("#btn-clear-key");b&&m&&b.addEventListener("click",()=>{const k=m.type==="password";m.type=k?"text":"password"}),y&&y.addEventListener("click",()=>{a&&a(m.value,h.value)}),f&&f.addEventListener("click",()=>{t&&t(m.value,h.value)}),u&&u.addEventListener("click",()=>{m.value="",e&&e()})}}}class oe{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new xa(la),this.catalog=this.catalogRepo.getAll(),this.geminiService=new Ha(this.catalog),this.activeTab="analyzer",this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=C.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,t="success"){let e=document.getElementById("toast-container");e||(e=document.createElement("div"),e.id="toast-container",e.className="toast-container",document.body.appendChild(e));const i=document.createElement("div");i.className=`toast toast-${t}`,i.innerHTML=`
      <span>${t==="success"?"✅":t==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,e.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 0.3s ease",setTimeout(()=>i.remove(),300)},2800)}async runAnalysis(a,t=null){if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const e=await this.geminiService.analyzePrompt(a,t);this.analysisResult=e,this.showToast("Analisis prompt selesai!")}catch(e){this.showToast(`Gagal menganalisis: ${e.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a){const t=Fa(a);if(!t){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(t).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}handleAddShorthand(a){if(!a)return;const t=this.analysisResult.installedShorthands||[];if(!t.includes(a)){const e=[...t,a];this.updateInstalledShorthands(e),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const e=(this.analysisResult.installedShorthands||[]).filter(i=>i!==a);this.updateInstalledShorthands(e),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){if(this.analysisResult.installedShorthands=a,this.analysisResult.optimalPrompt=this.geminiService.localEngine.buildOptimalPrompt(this.analysisResult.cleanText,a),this.analysisResult.recommendations)for(const t of this.analysisResult.recommendations)t.checked=a.includes(t.code),t.active=t.checked;if(this.analysisResult.primaryShorthands)for(const t of this.analysisResult.primaryShorthands)t.checked=a.includes(t.code),t.active=t.checked;if(this.analysisResult.relatedShorthands)for(const t of this.analysisResult.relatedShorthands)t.checked=a.includes(t.code),t.active=t.checked;this.render()}handleResolveConflict(a,t){const e=this.analysisResult.conflicts.find(r=>r.id===a);if(!e)return;let i=[...this.analysisResult.installedShorthands||[]];t==="use_user_edit"?(i=i.filter(r=>r!==e.shorthandA),this.showToast(`Kunci ${e.shorthandA} dilepas sesuai instruksi ubah.`)):t==="keep_lock"&&(i=i.filter(r=>r!==e.shorthandB),i.includes(e.shorthandA)||i.push(e.shorthandA),this.showToast(`Lock ${e.shorthandA} dipertahankan.`)),this.analysisResult.conflicts=this.analysisResult.conflicts.filter(r=>r.id!==a),this.updateInstalledShorthands(i)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const t=this.catalogRepo.detectSimilarFunction(a);if(t.hasSimilar){this.duplicateWarning=t,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(t){this.showToast(`Gagal menambahkan: ${t.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),t=new Blob([a],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(e),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,t){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const e=await this.catalogRepo.importCatalog(a,t);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${e.count} shorthand (${t})!`),this.render()}catch(e){this.showToast(`Gagal impor: ${e.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,t){this.showToast("Menguji koneksi ke Gemini API...","info");const e=await this.geminiService.testConnection(a,t);e.success?this.showToast(e.message,"success"):this.showToast(e.message,"error"),this.render()}handleSaveSettings(a,t){C.setApiKey(a),C.setModel(t),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,t).then(()=>this.render())}handleClearKey(){C.clearApiKey(),this.geminiService.status=v.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}render(){const a=this.geminiService.getStatus(),t=Va(this.activeTab,a,i=>{this.activeTab=i,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let e=null;this.activeTab==="analyzer"?e=ne({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,onAnalyze:i=>this.runAnalysis(i),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:i=>this.handleSelectPreset(i),onCopyPrompt:i=>this.handleCopyPrompt(i),onAddShorthand:i=>this.handleAddShorthand(i),onRemoveShorthand:i=>this.handleRemoveShorthand(i),onToggleRecommendation:i=>this.handleToggleRecommendation(i),onResolveConflict:(i,r)=>this.handleResolveConflict(i,r)}):this.activeTab==="json-test"?e=ie({analysisResult:this.analysisResult,onCopyJson:i=>{navigator.clipboard.writeText(i),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?e=re({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:i=>{this.catalogCategory=i,this.catalogCurrentPage=1,this.render()},onSelectTarget:i=>{this.catalogTarget=i,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:i=>{this.catalogRecLevel=i,this.catalogCurrentPage=1,this.render()},onSearchChange:i=>{this.catalogSearchQuery=i,this.catalogCurrentPage=1,this.render()},onPageChange:i=>{this.catalogCurrentPage=i,this.render()},onOpenDetail:i=>{this.selectedDetailCode=i,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async i=>{await this.handleAddShorthandSubmit(i)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(i,r)=>{await this.handleImportCatalog(i,r)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:i=>{this.handleAddShorthand(i),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${i} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="settings"&&(e=se({geminiStatusInfo:a,onTestConnection:(i,r)=>this.handleTestConnection(i,r),onSaveSettings:(i,r)=>this.handleSaveSettings(i,r),onClearKey:()=>this.handleClearKey()})),this.appRoot.innerHTML=`
      <div class="app-container">
        ${t.html}
        <main class="main-content">
          ${e.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V2.1</strong> &mdash; 100% Client-Side Static App
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; GitHub Pages Ready
            </div>
          </div>
        </footer>
      </div>
    `,t.bindEvents(this.appRoot),e.bindEvents&&e.bindEvents(this.appRoot)}}document.addEventListener("DOMContentLoaded",()=>{window.__PSA_APP__=new oe,window.__PSA_APP__.render()});
//# sourceMappingURL=index-uWH5OtDk.js.map
