let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*بل التكت بتاعها 🐧*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  }

   if (/^عبيط|يا عبيط|اهبل|غبي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بطل تنمر يسطا 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بنوري 🥺💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
    if (/^مين عمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عمي هو لايت طبعا 🫶🏻💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    } 

    if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسمي لايت ياحب 🦦💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      
    }
 if (/^يب$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*قول نعم يسطا 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

   if (/^لايت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*قلب لايت اطلب 🦦💗*',m) //wm, null, [['Menu', '#menu']], m) botones :v

   }

   if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *🗿 دزها يلا انا عمك*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^بحبك|احبك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*امشي يابت غوري مش ناقصة تلزيق 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^خول|متناك|مبعبص|معرص|كسم|عرص$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*متشتمش ياطفل 🐬💥*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^بنورك|دا نورك|نورك الاصل|نور نورك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*يعم بنوري انا 🫠🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هزعلك لو هزرت معايا تاني 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*معرفش انت تعرف؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*شغال يا حب 🐼*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^بتعمل ايه دلوقت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وانت مالك بيا روح نام* 🗿`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` *نورت البيت😂❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حاضر ياقلب لايت 🥺*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عارفين ف اسكت احسن لك🥱*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هل انت بوت ياصحبي 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الشارع الي وراه 🐧⚡*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك 🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*🗿الحمد لله و انت*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

   
 } 
 return !0 } 
 export default handler
