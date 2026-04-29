const VERBS_LIST = [
  // ===================== ДВИЖЕНИЕ (Motion) =====================
  {
    nsv:"ходить", sv:"сходить",
    imp:"ходи, ходите / сходи, сходите",
    meaning:{ ru:"ходить", ar:"يمشي (متكرر)", en:"to go (on foot, multidirectional)", fr:"aller (à pied, multidirectionnel)" },
    example:{ ru:"Я часто хожу в парк.", ar:"أذهب كثيراً إلى الحديقة.", en:"I often go to the park.", fr:"Je vais souvent au parc." },
    root:"ХОД", cat:"حركة"
  },
  {
    nsv:"идти", sv:"пойти",
    imp:"иди, идите / пойди, пойдите",
    meaning:{ ru:"идти", ar:"يذهب (مشياً)", en:"to go (by foot, unidirectional)", fr:"aller (à pied, unidirectionnel)" },
    example:{ ru:"Я иду в магазин.", ar:"أنا ذاهب إلى المتجر.", en:"I'm going to the store.", fr:"Je vais au magasin." },
    root:"ИД", cat:"حركة"
  },
  {
    nsv:"ехать", sv:"поехать",
    imp:"едь, едьте / поедь, поедьте",
    meaning:{ ru:"ехать", ar:"يذهب (بوسيلة)", en:"to go (by transport, unidirectional)", fr:"aller (en transport, unidirectionnel)" },
    example:{ ru:"Мы едем на автобусе.", ar:"نحن نذهب بالحافلة.", en:"We are going by bus.", fr:"Nous y allons en bus." },
    root:"ЕХ", cat:"حركة"
  },
  {
    nsv:"ездить", sv:"съездить",
    imp:"езди, ездите / съезди, съездите",
    meaning:{ ru:"ездить", ar:"يسافر (متكرر)", en:"to travel (by vehicle, regular)", fr:"voyager (en véhicule, régulier)" },
    example:{ ru:"Он часто ездит в командировки.", ar:"يسافر كثيراً في رحلات عمل.", en:"He often goes on business trips.", fr:"Il part souvent en voyage d'affaires." },
    root:"ЕЗД", cat:"حركة"
  },
  {
    nsv:"летать", sv:"полететь",
    imp:"летай, летайте / полети, полетите",
    meaning:{ ru:"летать", ar:"يطير (متكرر)", en:"to fly (multidirectional)", fr:"voler (multidirectionnel)" },
    example:{ ru:"Птицы летают на юг.", ar:"الطيور تطير إلى الجنوب.", en:"Birds fly south.", fr:"Les oiseaux volent vers le sud." },
    root:"ЛЕТ", cat:"حركة"
  },
  {
    nsv:"лететь", sv:"прилететь",
    imp:"лети, летите / прилети, прилетите",
    meaning:{ ru:"лететь", ar:"يطير (اتجاه واحد)", en:"to fly (unidirectional)", fr:"voler (unidirectionnel)" },
    example:{ ru:"Самолёт летит в Москву.", ar:"الطائرة تطير إلى موسكو.", en:"The plane is flying to Moscow.", fr:"L'avion vole vers Moscou." },
    root:"ЛЕТ", cat:"حركة"
  },
  {
    nsv:"плыть", sv:"поплыть",
    imp:"плыви, плывите / поплыви, поплывите",
    meaning:{ ru:"плыть", ar:"يسبح (اتجاه واحد)", en:"to swim (unidirectional)", fr:"nager (unidirectionnel)" },
    example:{ ru:"Он плывёт к берегу.", ar:"يسبح نحو الشاطئ.", en:"He is swimming to the shore.", fr:"Il nage vers la rive." },
    root:"ПЛЫ", cat:"حركة"
  },
  {
    nsv:"плавать", sv:"поплыть",
    imp:"плавай, плавайте / поплыви, поплывите",
    meaning:{ ru:"плавать", ar:"يسبح (متكرر)", en:"to swim (multidirectional)", fr:"nager (multidirectionnel)" },
    example:{ ru:"Я люблю плавать в бассейне.", ar:"أحب السباحة في المسبح.", en:"I love swimming in the pool.", fr:"J'aime nager à la piscine." },
    root:"ПЛАВ", cat:"حركة"
  },
  {
    nsv:"бегать", sv:"побежать",
    imp:"бегай, бегайте / побеги, побегите",
    meaning:{ ru:"бегать", ar:"يجري (متكرر)", en:"to run (multidirectional)", fr:"courir (multidirectionnel)" },
    example:{ ru:"Дети бегают во дворе.", ar:"الأطفال يجرون في الفناء.", en:"Children are running in the yard.", fr:"Les enfants courent dans la cour." },
    root:"БЕГ", cat:"حركة"
  },
  {
    nsv:"бежать", sv:"убежать",
    imp:"беги, бегите / убеги, убегите",
    meaning:{ ru:"бежать", ar:"يجري (اتجاه واحد)", en:"to run (unidirectional)", fr:"courir (unidirectionnel)" },
    example:{ ru:"Я бегу на работу.", ar:"أجري إلى العمل.", en:"I'm running to work.", fr:"Je cours au travail." },
    root:"БЕГ", cat:"حركة"
  },
  {
    nsv:"нести", sv:"понести",
    imp:"неси, несите / понеси, понесите",
    meaning:{ ru:"нести", ar:"يحمل (شخص)", en:"to carry (by hand)", fr:"porter (à la main)" },
    example:{ ru:"Он несёт тяжёлую сумку.", ar:"يحمل حقيبة ثقيلة.", en:"He is carrying a heavy bag.", fr:"Il porte un sac lourd." },
    root:"НЕС", cat:"حركة"
  },
  {
    nsv:"везти", sv:"повезти",
    imp:"вези, везите / повези, повезите",
    meaning:{ ru:"везти", ar:"ينقل (بوسيلة)", en:"to transport (by vehicle)", fr:"transporter (en véhicule)" },
    example:{ ru:"Грузовик везёт кирпичи.", ar:"الشاحنة تنقل الطوب.", en:"The truck is carrying bricks.", fr:"Le camion transporte des briques." },
    root:"ВЕЗ", cat:"حركة"
  },
  {
    nsv:"катиться", sv:"покатиться",
    imp:"катись, катитесь / покатись, покатитесь",
    meaning:{ ru:"катиться", ar:"يتدحرج", en:"to roll (oneself)", fr:"rouler (se déplacer en roulant)" },
    example:{ ru:"Мяч катится по траве.", ar:"الكرة تتدحرج على العشب.", en:"The ball is rolling on the grass.", fr:"Le ballon roule sur l'herbe." },
    root:"КАТ", cat:"حركة"
  },
  {
    nsv:"ползти", sv:"поползти",
    imp:"ползи, ползите / поползи, поползите",
    meaning:{ ru:"ползти", ar:"يزحف", en:"to crawl", fr:"ramper" },
    example:{ ru:"Ребёнок ползёт к игрушке.", ar:"الطفل يزحف نحو اللعبة.", en:"The baby is crawling to the toy.", fr:"Le bébé rampe vers le jouet." },
    root:"ПОЛЗ", cat:"حركة"
  },

  // ===================== ЧУВСТВА (Senses) =====================
  {
    nsv:"видеть", sv:"увидеть",
    imp:"видь, видьте / увидь, увидьте",
    meaning:{ ru:"видеть", ar:"يرى", en:"to see", fr:"voir" },
    example:{ ru:"Я вижу красивый закат.", ar:"أرى غروباً جميلاً.", en:"I see a beautiful sunset.", fr:"Je vois un beau coucher de soleil." },
    root:"ВИД", cat:"حواس"
  },
  {
    nsv:"смотреть", sv:"посмотреть",
    imp:"смотри, смотрите / посмотри, посмотрите",
    meaning:{ ru:"смотреть", ar:"يشاهد / ينظر", en:"to look / watch", fr:"regarder" },
    example:{ ru:"Мы смотрим фильм.", ar:"نشاهد فيلماً.", en:"We are watching a movie.", fr:"Nous regardons un film." },
    root:"СМОТР", cat:"حواس"
  },
  {
    nsv:"глядеть", sv:"поглядеть",
    imp:"гляди, глядите / погляди, поглядите",
    meaning:{ ru:"глядеть", ar:"ينظر (بانتباه)", en:"to gaze", fr:"regarder (fixement)" },
    example:{ ru:"Она глядит в окно.", ar:"تنظر من النافذة.", en:"She is gazing out the window.", fr:"Elle regarde par la fenêtre." },
    root:"ГЛЯД", cat:"حواس"
  },
  {
    nsv:"слышать", sv:"услышать",
    imp:"слышь, слышьте / услышь, услышьте",
    meaning:{ ru:"слышать", ar:"يسمع (حاسة)", en:"to hear", fr:"entendre" },
    example:{ ru:"Ты слышишь этот звук?", ar:"هل تسمع هذا الصوت؟", en:"Do you hear that sound?", fr:"Entends-tu ce bruit ?" },
    root:"СЛЫШ", cat:"حواس"
  },
  {
    nsv:"слушать", sv:"послушать",
    imp:"слушай, слушайте / послушай, послушайте",
    meaning:{ ru:"слушать", ar:"يستمع", en:"to listen", fr:"écouter" },
    example:{ ru:"Я слушаю музыку.", ar:"أستمع إلى الموسيقى.", en:"I'm listening to music.", fr:"J'écoute de la musique." },
    root:"СЛУШ", cat:"حواس"
  },
  {
    nsv:"осязать", sv:"осязать",
    imp:"осязай, осязайте / осязай, осязайте",
    meaning:{ ru:"осязать", ar:"يلمس (يدرك باللمس)", en:"to feel / touch (perceive)", fr:"toucher / palper" },
    example:{ ru:"Кожа осязает тепло.", ar:"الجلد يلمس الدفء.", en:"The skin feels warmth.", fr:"La peau sent la chaleur." },
    root:"ОСЯЗ", cat:"حواس"
  },
  {
    nsv:"нюхать", sv:"понюхать",
    imp:"нюхай, нюхайте / понюхай, понюхайте",
    meaning:{ ru:"нюхать", ar:"يشم", en:"to smell (sniff)", fr:"sentir (renifler)" },
    example:{ ru:"Собака нюхает след.", ar:"الكلب يشم الأثر.", en:"The dog is sniffing the trail.", fr:"Le chien flaire la piste." },
    root:"НЮХ", cat:"حواس"
  },
  {
    nsv:"чувствовать", sv:"почувствовать",
    imp:"чувствуй, чувствуйте / почувствуй, почувствуйте",
    meaning:{ ru:"чувствовать", ar:"يشعر / يحس", en:"to feel (emotion/sensation)", fr:"ressentir" },
    example:{ ru:"Я чувствую радость.", ar:"أشعر بالفرح.", en:"I feel joy.", fr:"Je ressens de la joie." },
    root:"ЧУВ", cat:"حواس"
  },

  // ===================== ОБЩЕНИЕ (Communication) =====================
  {
    nsv:"говорить", sv:"сказать",
    imp:"говори, говорите / скажи, скажите",
    meaning:{ ru:"говорить", ar:"يتحدث / يقول", en:"to speak / say", fr:"parler / dire" },
    example:{ ru:"Он говорит по-русски.", ar:"يتحدث الروسية.", en:"He speaks Russian.", fr:"Il parle russe." },
    root:"ГОВОР", cat:"تواصل"
  },
  {
    nsv:"рассказывать", sv:"рассказать",
    imp:"рассказывай, рассказывайте / расскажи, расскажите",
    meaning:{ ru:"рассказывать", ar:"يحكي / يروي", en:"to tell / narrate", fr:"raconter" },
    example:{ ru:"Бабушка рассказывает сказку.", ar:"الجدة تحكي حكاية.", en:"Grandma is telling a fairy tale.", fr:"Grand-mère raconte un conte." },
    root:"СКАЗ", cat:"تواصل"
  },
  {
    nsv:"спрашивать", sv:"спросить",
    imp:"спрашивай, спрашивайте / спроси, спросите",
    meaning:{ ru:"спрашивать", ar:"يسأل", en:"to ask", fr:"demander" },
    example:{ ru:"Я спрашиваю дорогу.", ar:"أسأل عن الطريق.", en:"I'm asking for directions.", fr:"Je demande le chemin." },
    root:"ПРОС", cat:"تواصل"
  },
  {
    nsv:"отвечать", sv:"ответить",
    imp:"отвечай, отвечайте / ответь, ответьте",
    meaning:{ ru:"отвечать", ar:"يجيب", en:"to answer / reply", fr:"répondre" },
    example:{ ru:"Она отвечает на вопрос.", ar:"تجيب على السؤال.", en:"She is answering the question.", fr:"Elle répond à la question." },
    root:"ВЕТ", cat:"تواصل"
  },
  {
    nsv:"писать", sv:"написать",
    imp:"пиши, пишите / напиши, напишите",
    meaning:{ ru:"писать", ar:"يكتب", en:"to write", fr:"écrire" },
    example:{ ru:"Я пишу письмо.", ar:"أكتب رسالة.", en:"I'm writing a letter.", fr:"J'écris une lettre." },
    root:"ПИС", cat:"تواصل"
  },
  {
    nsv:"читать", sv:"прочитать",
    imp:"читай, читайте / прочитай, прочитайте",
    meaning:{ ru:"читать", ar:"يقرأ", en:"to read", fr:"lire" },
    example:{ ru:"Он читает книгу.", ar:"يقرأ كتاباً.", en:"He is reading a book.", fr:"Il lit un livre." },
    root:"ЧИТ", cat:"تواصل"
  },
  {
    nsv:"звать", sv:"позвать",
    imp:"зови, зовите / позови, позовите",
    meaning:{ ru:"звать", ar:"ينادي / يدعو", en:"to call / invite", fr:"appeler / inviter" },
    example:{ ru:"Мама зовёт ужинать.", ar:"ماما تنادي على العشاء.", en:"Mom is calling for dinner.", fr:"Maman appelle pour le dîner." },
    root:"ЗВ", cat:"تواصل"
  },
  {
    nsv:"благодарить", sv:"поблагодарить",
    imp:"благодари, благодарите / поблагодари, поблагодарите",
    meaning:{ ru:"благодарить", ar:"يشكر", en:"to thank", fr:"remercier" },
    example:{ ru:"Я благодарю вас за помощь.", ar:"أشكركم على المساعدة.", en:"I thank you for your help.", fr:"Je vous remercie pour votre aide." },
    root:"БЛАГОДАР", cat:"تواصل"
  },
  {
    nsv:"просить", sv:"попросить",
    imp:"проси, просите / попроси, попросите",
    meaning:{ ru:"просить", ar:"يطلب", en:"to ask for / request", fr:"demander / prier" },
    example:{ ru:"Он просит прощения.", ar:"يطلب السماح.", en:"He asks for forgiveness.", fr:"Il demande pardon." },
    root:"ПРОС", cat:"تواصل"
  },
  {
    nsv:"приказывать", sv:"приказать",
    imp:"приказывай, приказывайте / прикажи, прикажите",
    meaning:{ ru:"приказывать", ar:"يأمر", en:"to order / command", fr:"ordonner" },
    example:{ ru:"Офицер приказывает солдатам.", ar:"الضابط يأمر الجنود.", en:"The officer commands the soldiers.", fr:"L'officier commande aux soldats." },
    root:"КАЗ", cat:"تواصل"
  },
  {
    nsv:"сообщать", sv:"сообщить",
    imp:"сообщай, сообщайте / сообщи, сообщите",
    meaning:{ ru:"сообщать", ar:"يُبلغ / يُخبر", en:"to inform / report", fr:"informer / communiquer" },
    example:{ ru:"Журналист сообщает новости.", ar:"الصحفي يبلغ الأخبار.", en:"The journalist reports the news.", fr:"Le journaliste informe des nouvelles." },
    root:"ОБЩ", cat:"تواصل"
  },
  {
    nsv:"переводить", sv:"перевести",
    imp:"переводи, переводите / переведи, переведите",
    meaning:{ ru:"переводить", ar:"يترجم", en:"to translate", fr:"traduire" },
    example:{ ru:"Она переводит текст с английского.", ar:"تترجم النص من الإنجليزية.", en:"She is translating the text from English.", fr:"Elle traduit le texte de l'anglais." },
    root:"ВОД", cat:"تواصل"
  },

  // ===================== УМСТВЕННЫЕ (Mental) =====================
  {
    nsv:"думать", sv:"подумать",
    imp:"думай, думайте / подумай, подумайте",
    meaning:{ ru:"думать", ar:"يفكر", en:"to think", fr:"penser" },
    example:{ ru:"Я думаю о тебе.", ar:"أفكر فيك.", en:"I'm thinking about you.", fr:"Je pense à toi." },
    root:"ДУМ", cat:"ذهنية"
  },
  {
    nsv:"знать", sv:"узнать",
    imp:"знай, знайте / узнай, узнайте",
    meaning:{ ru:"знать", ar:"يعرف", en:"to know", fr:"savoir / connaître" },
    example:{ ru:"Ты знаешь ответ?", ar:"هل تعرف الإجابة؟", en:"Do you know the answer?", fr:"Connais-tu la réponse ?" },
    root:"ЗНА", cat:"ذهنية"
  },
  {
    nsv:"понимать", sv:"понять",
    imp:"понимай, понимайте / пойми, поймите",
    meaning:{ ru:"понимать", ar:"يفهم", en:"to understand", fr:"comprendre" },
    example:{ ru:"Я понимаю по-русски.", ar:"أفهم الروسية.", en:"I understand Russian.", fr:"Je comprends le russe." },
    root:"НИМ", cat:"ذهنية"
  },
  {
    nsv:"помнить", sv:"запомнить",
    imp:"помни, помните / запомни, запомните",
    meaning:{ ru:"помнить", ar:"يتذكر", en:"to remember", fr:"se souvenir" },
    example:{ ru:"Помнишь наш разговор?", ar:"هل تتذكر حديثنا؟", en:"Do you remember our conversation?", fr:"Te souviens-tu de notre conversation ?" },
    root:"МН", cat:"ذهنية"
  },
  {
    nsv:"забывать", sv:"забыть",
    imp:"забывай, забывайте / забудь, забудьте",
    meaning:{ ru:"забывать", ar:"ينسى", en:"to forget", fr:"oublier" },
    example:{ ru:"Не забывай ключи.", ar:"لا تنسَ المفاتيح.", en:"Don't forget the keys.", fr:"N'oublie pas les clés." },
    root:"БЫВ", cat:"ذهنية"
  },
  {
    nsv:"верить", sv:"поверить",
    imp:"верь, верьте / поверь, поверьте",
    meaning:{ ru:"верить", ar:"يصدق / يؤمن", en:"to believe", fr:"croire" },
    example:{ ru:"Я верю в справедливость.", ar:"أؤمن بالعدالة.", en:"I believe in justice.", fr:"Je crois en la justice." },
    root:"ВЕР", cat:"ذهنية"
  },
  {
    nsv:"сомневаться", sv:"засомневаться",
    imp:"сомневайся, сомневайтесь / засомневайся, засомневайтесь",
    meaning:{ ru:"сомневаться", ar:"يشك", en:"to doubt", fr:"douter" },
    example:{ ru:"Он сомневается в успехе.", ar:"يشك في النجاح.", en:"He doubts the success.", fr:"Il doute du succès." },
    root:"МНЕ", cat:"ذهنية"
  },
  {
    nsv:"решать", sv:"решить",
    imp:"решай, решайте / реши, решите",
    meaning:{ ru:"решать", ar:"يقرر / يحل", en:"to decide / solve", fr:"décider / résoudre" },
    example:{ ru:"Мы решаем задачу.", ar:"نحل المسألة.", en:"We are solving the problem.", fr:"Nous résolvons le problème." },
    root:"РЕШ", cat:"ذهنية"
  },
  {
    nsv:"изучать", sv:"изучить",
    imp:"изучай, изучайте / изучи, изучите",
    meaning:{ ru:"изучать", ar:"يدرس بعمق", en:"to study (in depth)", fr:"étudier (en profondeur)" },
    example:{ ru:"Учёный изучает клетки.", ar:"العالم يدرس الخلايا.", en:"The scientist studies cells.", fr:"Le scientifique étudie les cellules." },
    root:"УЧ", cat:"ذهنية"
  },
  {
    nsv:"анализировать", sv:"анализировать",
    imp:"анализируй, анализируйте / анализируй, анализируйте",
    meaning:{ ru:"анализировать", ar:"يحلل", en:"to analyze", fr:"analyser" },
    example:{ ru:"Эксперт анализирует данные.", ar:"الخبير يحلل البيانات.", en:"The expert analyses the data.", fr:"L'expert analyse les données." },
    root:"АНАЛИЗ", cat:"ذهنية"
  },

  // ===================== РАБОТА/БЫТ (Work/Life) =====================
  {
    nsv:"делать", sv:"сделать",
    imp:"делай, делайте / сделай, сделайте",
    meaning:{ ru:"делать", ar:"يفعل / يعمل", en:"to do / make", fr:"faire" },
    example:{ ru:"Я делаю домашнее задание.", ar:"أقوم بالواجب المنزلي.", en:"I'm doing my homework.", fr:"Je fais mes devoirs." },
    root:"ДЕЛ", cat:"عمل"
  },
  {
    nsv:"работать", sv:"поработать",
    imp:"работай, работайте / поработай, поработайте",
    meaning:{ ru:"работать", ar:"يعمل / يشتغل", en:"to work", fr:"travailler" },
    example:{ ru:"Он работает инженером.", ar:"يعمل مهندساً.", en:"He works as an engineer.", fr:"Il travaille comme ingénieur." },
    root:"РАБОТ", cat:"عمل"
  },
  {
    nsv:"готовить", sv:"приготовить",
    imp:"готовь, готовьте / приготовь, приготовьте",
    meaning:{ ru:"готовить", ar:"يطبخ / يجهز", en:"to cook / prepare", fr:"cuisiner / préparer" },
    example:{ ru:"Мама готовит ужин.", ar:"ماما تطبخ العشاء.", en:"Mom is cooking dinner.", fr:"Maman prépare le dîner." },
    root:"ГОТОВ", cat:"عمل"
  },
  {
    nsv:"есть", sv:"съесть",
    imp:"ешь, ешьте / съешь, съешьте",
    meaning:{ ru:"есть", ar:"يأكل", en:"to eat", fr:"manger" },
    example:{ ru:"Я ем яблоко.", ar:"آكل تفاحة.", en:"I'm eating an apple.", fr:"Je mange une pomme." },
    root:"ЕД", cat:"عمل"
  },
  {
    nsv:"пить", sv:"выпить",
    imp:"пей, пейте / выпей, выпейте",
    meaning:{ ru:"пить", ar:"يشرب", en:"to drink", fr:"boire" },
    example:{ ru:"Он пьёт чай.", ar:"يشرب الشاي.", en:"He is drinking tea.", fr:"Il boit du thé." },
    root:"ПИ", cat:"عمل"
  },
  {
    nsv:"спать", sv:"поспать",
    imp:"спи, спите / поспи, поспите",
    meaning:{ ru:"спать", ar:"ينام", en:"to sleep", fr:"dormir" },
    example:{ ru:"Ребёнок спит в кроватке.", ar:"الطفل ينام في سريره.", en:"The baby is sleeping in the crib.", fr:"Le bébé dort dans son lit." },
    root:"СП", cat:"عمل"
  },
  {
    nsv:"мыть", sv:"помыть",
    imp:"мой, мойте / помой, помойте",
    meaning:{ ru:"мыть", ar:"يغسل", en:"to wash", fr:"laver" },
    example:{ ru:"Я мою посуду.", ar:"أغسل الأطباق.", en:"I'm washing the dishes.", fr:"Je lave la vaisselle." },
    root:"МЫ", cat:"عمل"
  },
  {
    nsv:"чистить", sv:"почистить",
    imp:"чисти, чистите / почисти, почистите",
    meaning:{ ru:"чистить", ar:"ينظف", en:"to clean", fr:"nettoyer" },
    example:{ ru:"Он чистит обувь.", ar:"ينظف الحذاء.", en:"He is cleaning his shoes.", fr:"Il nettoie ses chaussures." },
    root:"ЧИСТ", cat:"عمل"
  },
  {
    nsv:"стирать", sv:"постирать",
    imp:"стирай, стирайте / постирай, постирайте",
    meaning:{ ru:"стирать", ar:"يغسل الملابس", en:"to do laundry", fr:"faire la lessive" },
    example:{ ru:"Я стираю рубашку.", ar:"أغسل القميص.", en:"I'm washing the shirt.", fr:"Je lave la chemise." },
    root:"СТИР", cat:"عمل"
  },
  {
    nsv:"покупать", sv:"купить",
    imp:"покупай, покупайте / купи, купите",
    meaning:{ ru:"покупать", ar:"يشتري", en:"to buy", fr:"acheter" },
    example:{ ru:"Мы покупаем продукты.", ar:"نشتري البقالة.", en:"We are buying groceries.", fr:"Nous achetons des provisions." },
    root:"КУП", cat:"عمل"
  },
  {
    nsv:"продавать", sv:"продать",
    imp:"продавай, продавайте / продай, продайте",
    meaning:{ ru:"продавать", ar:"يبيع", en:"to sell", fr:"vendre" },
    example:{ ru:"Магазин продаёт одежду.", ar:"المتجر يبيع الملابس.", en:"The store sells clothes.", fr:"Le magasin vend des vêtements." },
    root:"ДА", cat:"عمل"
  },
  {
    nsv:"открывать", sv:"открыть",
    imp:"открывай, открывайте / открой, откройте",
    meaning:{ ru:"открывать", ar:"يفتح", en:"to open", fr:"ouvrir" },
    example:{ ru:"Он открывает дверь.", ar:"يفتح الباب.", en:"He is opening the door.", fr:"Il ouvre la porte." },
    root:"КРЫ", cat:"عمل"
  },
  {
    nsv:"закрывать", sv:"закрыть",
    imp:"закрывай, закрывайте / закрой, закройте",
    meaning:{ ru:"закрывать", ar:"يغلق", en:"to close", fr:"fermer" },
    example:{ ru:"Закрой окно, холодно.", ar:"أغلق النافذة، الجو بارد.", en:"Close the window, it's cold.", fr:"Ferme la fenêtre, il fait froid." },
    root:"КРЫ", cat:"عمل"
  },
  {
    nsv:"брать", sv:"взять",
    imp:"бери, берите / возьми, возьмите",
    meaning:{ ru:"брать", ar:"يأخذ", en:"to take", fr:"prendre" },
    example:{ ru:"Возьми яблоко со стола.", ar:"خذ تفاحة من الطاولة.", en:"Take an apple from the table.", fr:"Prends une pomme sur la table." },
    root:"БР", cat:"عمل"
  },
  {
    nsv:"давать", sv:"дать",
    imp:"давай, давайте / дай, дайте",
    meaning:{ ru:"давать", ar:"يعطي", en:"to give", fr:"donner" },
    example:{ ru:"Дай мне ручку.", ar:"أعطني القلم.", en:"Give me the pen.", fr:"Donne-moi le stylo." },
    root:"ДА", cat:"عمل"
  },
  {
    nsv:"получать", sv:"получить",
    imp:"получай, получайте / получи, получите",
    meaning:{ ru:"получать", ar:"يحصل على", en:"to receive / get", fr:"recevoir / obtenir" },
    example:{ ru:"Я получаю письма каждый день.", ar:"أتلقى رسائل كل يوم.", en:"I receive letters every day.", fr:"Je reçois des lettres tous les jours." },
    root:"ЛУЧ", cat:"عمل"
  },
  {
    nsv:"отправлять", sv:"отправить",
    imp:"отправляй, отправляйте / отправь, отправьте",
    meaning:{ ru:"отправлять", ar:"يرسل", en:"to send", fr:"envoyer" },
    example:{ ru:"Она отправляет посылку.", ar:"ترسل الطرد.", en:"She is sending the parcel.", fr:"Elle envoie le colis." },
    root:"ПРАВ", cat:"عمل"
  },
  {
    nsv:"звонить", sv:"позвонить",
    imp:"звони, звоните / позвони, позвоните",
    meaning:{ ru:"звонить", ar:"يتصل / يرن", en:"to call / ring", fr:"appeler / sonner" },
    example:{ ru:"Я звоню другу.", ar:"أتصل بصديقي.", en:"I'm calling my friend.", fr:"J'appelle mon ami." },
    root:"ЗВОН", cat:"عمل"
  },
  {
    nsv:"встречать", sv:"встретить",
    imp:"встречай, встречайте / встреть, встретьте",
    meaning:{ ru:"встречать", ar:"يستقبل / يقابل", en:"to meet / greet", fr:"rencontrer / accueillir" },
    example:{ ru:"Мы встречаем гостей.", ar:"نستقبل الضيوف.", en:"We are greeting the guests.", fr:"Nous accueillons les invités." },
    root:"ВСТРЕЧ", cat:"عمل"
  },
  {
    nsv:"провожать", sv:"проводить",
    imp:"провожай, провожайте / проводи, проводите",
    meaning:{ ru:"провожать", ar:"يودع", en:"to see off", fr:"raccompagner" },
    example:{ ru:"Я провожаю подругу на вокзал.", ar:"أودع صديقتي في المحطة.", en:"I'm seeing my friend off at the station.", fr:"Je raccompagne mon amie à la gare." },
    root:"ВОД", cat:"عمل"
  },
  {
    nsv:"ждать", sv:"подождать",
    imp:"жди, ждите / подожди, подождите",
    meaning:{ ru:"ждать", ar:"ينتظر", en:"to wait", fr:"attendre" },
    example:{ ru:"Я жду автобус.", ar:"أنتظر الحافلة.", en:"I'm waiting for the bus.", fr:"J'attends le bus." },
    root:"ЖД", cat:"عمل"
  },
  {
    nsv:"начинать", sv:"начать",
    imp:"начинай, начинайте / начни, начните",
    meaning:{ ru:"начинать", ar:"يبدأ", en:"to begin / start", fr:"commencer" },
    example:{ ru:"Урок начинается в 9 утра.", ar:"يبدأ الدرس في التاسعة صباحاً.", en:"The lesson begins at 9 a.m.", fr:"La leçon commence à 9h." },
    root:"НАЧ", cat:"عمل"
  },
  {
    nsv:"заканчивать", sv:"закончить",
    imp:"заканчивай, заканчивайте / закончи, закончите",
    meaning:{ ru:"заканчивать", ar:"ينهي", en:"to finish", fr:"finir" },
    example:{ ru:"Я заканчиваю работу в 6.", ar:"أنهي العمل في السادسة.", en:"I finish work at 6.", fr:"Je finis le travail à 18h." },
    root:"КОНЧ", cat:"عمل"
  },
  {
    nsv:"продолжать", sv:"продолжить",
    imp:"продолжай, продолжайте / продолжи, продолжите",
    meaning:{ ru:"продолжать", ar:"يستمر", en:"to continue", fr:"continuer" },
    example:{ ru:"Продолжайте в том же духе!", ar:"استمروا على نفس المنوال!", en:"Keep up the good work!", fr:"Continuez comme ça !" },
    root:"ДОЛЖ", cat:"عمل"
  },
  {
    nsv:"менять", sv:"поменять",
    imp:"меняй, меняйте / поменяй, поменяйте",
    meaning:{ ru:"менять", ar:"يغير", en:"to change", fr:"changer" },
    example:{ ru:"Я меняю лампочку.", ar:"أغير اللمبة.", en:"I'm changing the light bulb.", fr:"Je change l'ampoule." },
    root:"МЕН", cat:"عمل"
  },
  {
    nsv:"использовать", sv:"использовать",
    imp:"используй, используйте / используй, используйте",
    meaning:{ ru:"использовать", ar:"يستخدم", en:"to use", fr:"utiliser" },
    example:{ ru:"Мы используем новые технологии.", ar:"نستخدم تقنيات جديدة.", en:"We use new technologies.", fr:"Nous utilisons de nouvelles technologies." },
    root:"ПОЛЬЗ", cat:"عمل"
  },
  {
    nsv:"проверять", sv:"проверить",
    imp:"проверяй, проверяйте / проверь, проверьте",
    meaning:{ ru:"проверять", ar:"يفحص / يراجع", en:"to check / verify", fr:"vérifier" },
    example:{ ru:"Проверь документы перед отправкой.", ar:"راجع المستندات قبل الإرسال.", en:"Check the documents before sending.", fr:"Vérifie les documents avant l'envoi." },
    root:"ВЕР", cat:"عمل"
  },
  {
    nsv:"искать", sv:"найти",
    imp:"ищи, ищите / найди, найдите",
    meaning:{ ru:"искать", ar:"يبحث", en:"to search / look for", fr:"chercher" },
    example:{ ru:"Я ищу свои ключи.", ar:"أبحث عن مفاتيحي.", en:"I'm looking for my keys.", fr:"Je cherche mes clés." },
    root:"ИСК", cat:"عمل"
  },
  {
    nsv:"находить", sv:"найти",
    imp:"находи, находите / найди, найдите",
    meaning:{ ru:"находить", ar:"يجد", en:"to find", fr:"trouver" },
    example:{ ru:"Он нашёл потерянный кошелёк.", ar:"وجد المحفظة المفقودة.", en:"He found the lost wallet.", fr:"Il a trouvé le portefeuille perdu." },
    root:"ХОД", cat:"عمل"
  },
  {
    nsv:"терять", sv:"потерять",
    imp:"теряй, теряйте / потеряй, потеряйте",
    meaning:{ ru:"терять", ar:"يفقد", en:"to lose", fr:"perdre" },
    example:{ ru:"Не теряй времени.", ar:"لا تضيع الوقت.", en:"Don't waste time.", fr:"Ne perds pas de temps." },
    root:"ТЕР", cat:"عمل"
  },
  {
    nsv:"класть", sv:"положить",
    imp:"клади, кладите / положи, положите",
    meaning:{ ru:"класть", ar:"يضع", en:"to put / lay", fr:"mettre / poser" },
    example:{ ru:"Положи книгу на стол.", ar:"ضع الكتاب على الطاولة.", en:"Put the book on the table.", fr:"Pose le livre sur la table." },
    root:"ЛАГ", cat:"عمل"
  },
  {
    nsv:"стоять", sv:"постоять",
    imp:"стой, стойте / постой, постойте",
    meaning:{ ru:"стоять", ar:"يقف", en:"to stand", fr:"être debout" },
    example:{ ru:"Я стою в очереди.", ar:"أقف في الطابور.", en:"I'm standing in line.", fr:"Je fais la queue." },
    root:"СТО", cat:"عمل"
  },
  {
    nsv:"сидеть", sv:"посидеть",
    imp:"сиди, сидите / посиди, посидите",
    meaning:{ ru:"сидеть", ar:"يجلس", en:"to sit", fr:"être assis" },
    example:{ ru:"Кот сидит на стуле.", ar:"القط يجلس على الكرسي.", en:"The cat is sitting on the chair.", fr:"Le chat est assis sur la chaise." },
    root:"СИД", cat:"عمل"
  },
  {
    nsv:"лежать", sv:"полежать",
    imp:"лежи, лежите / полежи, полежите",
    meaning:{ ru:"лежать", ar:"يستلقي / يرقد", en:"to lie (be lying)", fr:"être couché" },
    example:{ ru:"Книга лежит на столе.", ar:"الكتاب مستلقٍ على الطاولة.", en:"The book is lying on the table.", fr:"Le livre est posé sur la table." },
    root:"ЛЕЖ", cat:"عمل"
  },
  {
    nsv:"вставать", sv:"встать",
    imp:"вставай, вставайте / встань, встаньте",
    meaning:{ ru:"вставать", ar:"ينهض / يستيقظ", en:"to get up / stand up", fr:"se lever" },
    example:{ ru:"Я встаю в 7 утра.", ar:"أستيقظ في السابعة صباحاً.", en:"I get up at 7 a.m.", fr:"Je me lève à 7h." },
    root:"СТА", cat:"عمل"
  },
  {
    nsv:"садиться", sv:"сесть",
    imp:"садись, садитесь / сядь, сядьте",
    meaning:{ ru:"садиться", ar:"يجلس (حركة)", en:"to sit down", fr:"s'asseoir" },
    example:{ ru:"Садитесь, пожалуйста.", ar:"تفضلوا بالجلوس.", en:"Please, sit down.", fr:"Asseyez-vous, s'il vous plaît." },
    root:"САД", cat:"عمل"
  },
  {
    nsv:"жить", sv:"пожить",
    imp:"живи, живите / поживи, поживите",
    meaning:{ ru:"жить", ar:"يعيش", en:"to live", fr:"vivre" },
    example:{ ru:"Мы живём в Москве.", ar:"نعيش في موسكو.", en:"We live in Moscow.", fr:"Nous vivons à Moscou." },
    root:"ЖИ", cat:"عمل"
  },

  // ===================== ЭМОЦИИ (Emotions) =====================
  {
    nsv:"любить", sv:"полюбить",
    imp:"люби, любите / полюби, полюбите",
    meaning:{ ru:"любить", ar:"يحب", en:"to love", fr:"aimer" },
    example:{ ru:"Я люблю свою семью.", ar:"أحب عائلتي.", en:"I love my family.", fr:"J'aime ma famille." },
    root:"ЛЮБ", cat:"عواطف"
  },
  {
    nsv:"нравиться", sv:"понравиться",
    imp:"нравься, нравьтесь / понравься, понравьтесь",
    meaning:{ ru:"нравиться", ar:"يعجب", en:"to like (be liked)", fr:"plaire" },
    example:{ ru:"Мне нравится эта песня.", ar:"تعجبني هذه الأغنية.", en:"I like this song.", fr:"Cette chanson me plaît." },
    root:"НРАВ", cat:"عواطف"
  },
  {
    nsv:"бояться", sv:"побояться",
    imp:"бойся, бойтесь / побойся, побойтесь",
    meaning:{ ru:"бояться", ar:"يخاف", en:"to be afraid", fr:"avoir peur" },
    example:{ ru:"Ребёнок боится темноты.", ar:"الطفل يخاف الظلام.", en:"The child is afraid of the dark.", fr:"L'enfant a peur du noir." },
    root:"БО", cat:"عواطف"
  },
  {
    nsv:"радоваться", sv:"обрадоваться",
    imp:"радуйся, радуйтесь / обрадуйся, обрадуйтесь",
    meaning:{ ru:"радоваться", ar:"يفرح", en:"to rejoice / be glad", fr:"se réjouir" },
    example:{ ru:"Все радуются солнцу.", ar:"الكل يفرح بالشمس.", en:"Everyone rejoices in the sun.", fr:"Tout le monde se réjouit du soleil." },
    root:"РАД", cat:"عواطف"
  },
  {
    nsv:"удивляться", sv:"удивиться",
    imp:"удивляйся, удивляйтесь / удивись, удивитесь",
    meaning:{ ru:"удивляться", ar:"يتعجب", en:"to be surprised", fr:"s'étonner" },
    example:{ ru:"Я удивляюсь твоей силе.", ar:"أتعجب من قوتك.", en:"I'm surprised by your strength.", fr:"Je suis étonné par ta force." },
    root:"ДИВ", cat:"عواطف"
  },
  {
    nsv:"злиться", sv:"разозлиться",
    imp:"злись, злитесь / разозлись, разозлитесь",
    meaning:{ ru:"злиться", ar:"يغضب", en:"to be angry", fr:"se fâcher" },
    example:{ ru:"Она злится на меня.", ar:"هي غاضبة مني.", en:"She is angry with me.", fr:"Elle est fâchée contre moi." },
    root:"ЗЛ", cat:"عواطف"
  },
  {
    nsv:"плакать", sv:"заплакать",
    imp:"плачь, плачьте / заплачь, заплачьте",
    meaning:{ ru:"плакать", ar:"يبكي", en:"to cry", fr:"pleurer" },
    example:{ ru:"Малыш плачет.", ar:"الطفل يبكي.", en:"The baby is crying.", fr:"Le bébé pleure." },
    root:"ПЛАК", cat:"عواطف"
  },
  {
    nsv:"смеяться", sv:"засмеяться",
    imp:"смейся, смейтесь / засмейся, засмейтесь",
    meaning:{ ru:"смеяться", ar:"يضحك", en:"to laugh", fr:"rire" },
    example:{ ru:"Дети весело смеются.", ar:"الأطفال يضحكون بسعادة.", en:"The children laugh happily.", fr:"Les enfants rient joyeusement." },
    root:"СМЕ", cat:"عواطف"
  },
  {
    nsv:"грустить", sv:"загрустить",
    imp:"грусти, грустите / загрусти, загрустите",
    meaning:{ ru:"грустить", ar:"يحزن", en:"to be sad", fr:"être triste" },
    example:{ ru:"Он грустит о прошлом.", ar:"يحزن على الماضي.", en:"He is sad about the past.", fr:"Il est triste du passé." },
    root:"ГРУСТ", cat:"عواطف"
  },
  {
    nsv:"гордиться", sv:"возгордиться",
    imp:"гордись, гордитесь / возгордись, возгордитесь",
    meaning:{ ru:"гордиться", ar:"يفتخر", en:"to be proud", fr:"être fier" },
    example:{ ru:"Родители гордятся сыном.", ar:"الوالدان فخوران بابنهما.", en:"The parents are proud of their son.", fr:"Les parents sont fiers de leur fils." },
    root:"ГОРД", cat:"عواطف"
  },
  {
    nsv:"стесняться", sv:"застесняться",
    imp:"стесняйся, стесняйтесь / застесняйся, застесняйтесь",
    meaning:{ ru:"стесняться", ar:"يخجل", en:"to be shy / embarrassed", fr:"être timide / gêné" },
    example:{ ru:"Девушка стесняется незнакомцев.", ar:"الفتاة تخجل من الغرباء.", en:"The girl is shy around strangers.", fr:"La fille est timide avec les inconnus." },
    root:"СТЕСН", cat:"عواطف"
  },
  // ============= ДВИЖЕНИЕ (Motion) – продолжение =============
  {
    nsv:"везти", sv:"повезти", imp:"вези, везите / повези, повезите",
    meaning:{ ru:"везти (перевозить)", ar:"ينقل (بمركبة)", en:"to transport (by vehicle)", fr:"transporter (en véhicule)" },
    example:{ ru:"Грузовик везёт песок.", ar:"الشاحنة تنقل الرمل.", en:"The truck carries sand.", fr:"Le camion transporte du sable." },
    root:"ВЕЗ", cat:"حركة"
  },
  {
    nsv:"нести", sv:"понести", imp:"неси, несите / понеси, понесите",
    meaning:{ ru:"нести (в руках)", ar:"يحمل (باليدين)", en:"to carry (in hands)", fr:"porter (dans les mains)" },
    example:{ ru:"Она несёт тяжелую сумку.", ar:"تحمل حقيبة ثقيلة.", en:"She is carrying a heavy bag.", fr:"Elle porte un sac lourd." },
    root:"НЕС", cat:"حركة"
  },
  {
    nsv:"тащить", sv:"потащить", imp:"тащи, тащите / потащи, потащите",
    meaning:{ ru:"тащить", ar:"يجر / يسحب", en:"to drag / pull", fr:"traîner / tirer" },
    example:{ ru:"Ребёнок тащит игрушку.", ar:"الطفل يجر اللعبة.", en:"The child drags the toy.", fr:"L'enfant traîne le jouet." },
    root:"ТАЩ", cat:"حركة"
  },
  // ... (I will continue with more verbs, 100 in total, across categories)

  // ============= ЧУВСТВА (Senses) – продолжение =============
  {
    nsv:"осязать", sv:"осязать", imp:"осязай, осязайте",
    meaning:{ ru:"осязать", ar:"يدرك باللمس", en:"to perceive by touch", fr:"percevoir par le toucher" },
    example:{ ru:"Кожа осязает тепло.", ar:"الجلد يدرك الدفء باللمس.", en:"The skin feels warmth.", fr:"La peau perçoit la chaleur." },
    root:"ОСЯЗ", cat:"حواس"
  },
  {
    nsv:"обонять", sv:"обонять", imp:"обоняй, обоняйте",
    meaning:{ ru:"обонять", ar:"يشم (يدرك بالأنف)", en:"to smell (sense)", fr:"flairer (percevoir)" },
    example:{ ru:"Цветы приятно обонять.", ar:"الزهور رائحتها طيبة عند الشم.", en:"Flowers smell nice.", fr:"Les fleurs ont une bonne odeur." },
    root:"ОБОН", cat:"حواس"
  },
  {
    nsv:"пробовать", sv:"попробовать", imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать (на вкус)", ar:"يتذوق", en:"to taste (try)", fr:"goûter" },
    example:{ ru:"Попробуй этот суп.", ar:"تذوق هذه الشوربة.", en:"Taste this soup.", fr:"Goûte cette soupe." },
    root:"ПРОБ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) – продолжение =============
  {
    nsv:"спрашивать", sv:"спросить", imp:"спрашивай, спрашивайте / спроси, спросите",
    meaning:{ ru:"спрашивать", ar:"يسأل", en:"to ask", fr:"demander" },
    example:{ ru:"Я спрашиваю дорогу.", ar:"أسأل عن الطريق.", en:"I ask for directions.", fr:"Je demande le chemin." },
    root:"ПРОС", cat:"تواصل"
  },
  {
    nsv:"отвечать", sv:"ответить", imp:"отвечай, отвечайте / ответь, ответьте",
    meaning:{ ru:"отвечать", ar:"يجيب", en:"to answer", fr:"répondre" },
    example:{ ru:"Она отвечает на вопрос.", ar:"تجيب على السؤال.", en:"She answers the question.", fr:"Elle répond à la question." },
    root:"ВЕТ", cat:"تواصل"
  },
  {
    nsv:"объяснять", sv:"объяснить", imp:"объясняй, объясняйте / объясни, объясните",
    meaning:{ ru:"объяснять", ar:"يشرح", en:"to explain", fr:"expliquer" },
    example:{ ru:"Учитель объясняет правило.", ar:"المعلم يشرح القاعدة.", en:"The teacher explains the rule.", fr:"Le professeur explique la règle." },
    root:"ЯСН", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) – продолжение =============
  {
    nsv:"соображать", sv:"сообразить", imp:"соображай, соображайте / сообрази, сообразите",
    meaning:{ ru:"соображать", ar:"يفهم بسرعة / يدرك", en:"to grasp / realise", fr:"comprendre vite" },
    example:{ ru:"Он быстро соображает.", ar:"يفهم بسرعة.", en:"He grasps quickly.", fr:"Il comprend vite." },
    root:"ОБРАЖ", cat:"ذهنية"
  },
  {
    nsv:"размышлять", sv:"размыслить", imp:"размышляй, размышляйте / размысли, размыслите",
    meaning:{ ru:"размышлять", ar:"يتأمل / يفكر ملياً", en:"to ponder / reflect", fr:"réfléchir profondément" },
    example:{ ru:"Философ размышляет о жизни.", ar:"الفيلسوف يتأمل الحياة.", en:"The philosopher ponders life.", fr:"Le philosophe réfléchit sur la vie." },
    root:"МЫСЛ", cat:"ذهنية"
  },
  {
    nsv:"воображать", sv:"вообразить", imp:"воображай, воображайте / вообрази, вообразите",
    meaning:{ ru:"воображать", ar:"يتخيل", en:"to imagine", fr:"imaginer" },
    example:{ ru:"Вообрази себе рай.", ar:"تخيل الجنة.", en:"Imagine paradise.", fr:"Imagine le paradis." },
    root:"ОБРАЖ", cat:"ذهنية"
  },

  // ============= РАБОТА/БЫТ (Work/Life) – продолжение =============
  {
    nsv:"строить", sv:"построить", imp:"строй, стройте / построй, постройте",
    meaning:{ ru:"строить", ar:"يبني", en:"to build", fr:"construire" },
    example:{ ru:"Рабочие строят дом.", ar:"العمال يبنون منزلاً.", en:"The workers build a house.", fr:"Les ouvriers construisent une maison." },
    root:"СТРО", cat:"عمل"
  },
  {
    nsv:"чинить", sv:"починить", imp:"чини, чините / почини, почините",
    meaning:{ ru:"чинить", ar:"يصلح", en:"to repair / fix", fr:"réparer" },
    example:{ ru:"Мастер чинит телевизор.", ar:"الفني يصلح التلفاز.", en:"The technician repairs the TV.", fr:"Le technicien répare la télé." },
    root:"ЧИН", cat:"عمل"
  },
  {
    nsv:"шить", sv:"сшить", imp:"шей, шейте / сшей, сшейте",
    meaning:{ ru:"шить", ar:"يخيط", en:"to sew", fr:"coudre" },
    example:{ ru:"Портной шьёт костюм.", ar:"الخياط يخيط بدلة.", en:"The tailor sews a suit.", fr:"Le tailleur coud un costume." },
    root:"ШИ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) – продолжение =============
  {
    nsv:"волноваться", sv:"заволноваться", imp:"волнуйся, волнуйтесь / заволнуйся, заволнуйтесь",
    meaning:{ ru:"волноваться", ar:"يتوتر / يقلق", en:"to worry / be nervous", fr:"s'inquiéter" },
    example:{ ru:"Не волнуйся перед экзаменом.", ar:"لا تتوتر قبل الامتحان.", en:"Don't be nervous before the exam.", fr:"Ne sois pas nerveux avant l'examen." },
    root:"ВОЛН", cat:"عواطف"
  },
  {
    nsv:"сердиться", sv:"рассердиться", imp:"сердись, сердитесь / рассердись, рассердитесь",
    meaning:{ ru:"сердиться", ar:"يغضب", en:"to get angry", fr:"se fâcher" },
    example:{ ru:"Отец сердится на сына.", ar:"الأب يغضب من ابنه.", en:"The father is angry with his son.", fr:"Le père se fâche contre son fils." },
    root:"СЕРД", cat:"عواطف"
  },
  {
    nsv:"скучать", sv:"заскучать", imp:"скучай, скучайте / заскучай, заскучайте",
    meaning:{ ru:"скучать", ar:"يشعر بالملل / يشتاق", en:"to be bored / miss", fr:"s'ennuyer / manquer" },
    example:{ ru:"Я скучаю по дому.", ar:"أشتاق إلى البيت.", en:"I miss home.", fr:"La maison me manque." },
    root:"СКУЧ", cat:"عواطف"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"прыгать", sv:"прыгнуть",
    imp:"прыгай, прыгайте / прыгни, прыгните",
    meaning:{ ru:"прыгать", ar:"يقفز", en:"to jump", fr:"sauter" },
    example:{ ru:"Спортсмен высоко прыгает.", ar:"الرياضي يقفز عالياً.", en:"The athlete jumps high.", fr:"L'athlète saute haut." },
    root:"ПРЫГ", cat:"حركة"
  },
  {
    nsv:"кататься", sv:"покататься",
    imp:"катайся, катайтесь / покатайся, покатайтесь",
    meaning:{ ru:"кататься", ar:"يتزحلق / يتنزه", en:"to ride / skate", fr:"faire du patin / se promener" },
    example:{ ru:"Дети катаются на коньках.", ar:"الأطفال يتزلجون على الجليد.", en:"The children are ice skating.", fr:"Les enfants patinent." },
    root:"КАТ", cat:"حركة"
  },
  {
    nsv:"лазить", sv:"полазить",
    imp:"лазь, лазьте / полазай, полазайте",
    meaning:{ ru:"лазить", ar:"يتسلق", en:"to climb / scramble", fr:"grimper" },
    example:{ ru:"Кот лазит по деревьям.", ar:"القط يتسلق الأشجار.", en:"The cat climbs trees.", fr:"Le chat grimpe aux arbres." },
    root:"ЛАЗ", cat:"حركة"
  },
  {
    nsv:"везти (безлично)", sv:"повезти",
    imp:"—",
    meaning:{ ru:"везти (об удаче)", ar:"يحالفه الحظ", en:"to be lucky", fr:"avoir de la chance" },
    example:{ ru:"Мне везёт в жизни.", ar:"الحظ بيحالفني في الحياة.", en:"I'm lucky in life.", fr:"J'ai de la chance dans la vie." },
    root:"ВЕЗ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"осязать", sv:"осязать",
    imp:"осязай, осязайте / осязай, осязайте",
    meaning:{ ru:"осязать", ar:"يدرك باللمس", en:"to feel (by touch)", fr:"toucher (perception)" },
    example:{ ru:"Пальцы осязают холод металла.", ar:"الأصابع تلمس برودة المعدن.", en:"Fingers feel the cold of metal.", fr:"Les doigts sentent le froid du métal." },
    root:"ОСЯЗ", cat:"حواس"
  },
  {
    nsv:"смотреть вслед", sv:"посмотреть вслед",
    imp:"смотри вслед, смотрите вслед / посмотри вслед, посмотрите вслед",
    meaning:{ ru:"смотреть вслед", ar:"يتبع بنظره", en:"to gaze after", fr:"suivre du regard" },
    example:{ ru:"Он долго смотрел ей вслед.", ar:"ظل يتبعها بنظره طويلاً.", en:"He gazed after her for a long time.", fr:"Il l'a suivie du regard longtemps." },
    root:"СМОТР", cat:"حواس"
  },
  {
    nsv:"прислушиваться", sv:"прислушаться",
    imp:"прислушивайся, прислушивайтесь / прислушайся, прислушайтесь",
    meaning:{ ru:"прислушиваться", ar:"ينصت باهتمام", en:"to listen carefully", fr:"écouter attentivement" },
    example:{ ru:"Врач прислушивается к дыханию.", ar:"الطبيب ينصت للتنفس.", en:"The doctor listens to the breathing.", fr:"Le médecin écoute la respiration." },
    root:"СЛУШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"шептать", sv:"прошептать",
    imp:"шепчи, шепчите / прошепчи, прошепчите",
    meaning:{ ru:"шептать", ar:"يهمس", en:"to whisper", fr:"chuchoter" },
    example:{ ru:"Она шепчет ему на ухо.", ar:"تهمس في أذنه.", en:"She whispers in his ear.", fr:"Elle lui chuchote à l'oreille." },
    root:"ШЕПТ", cat:"تواصل"
  },
  {
    nsv:"кричать", sv:"закричать",
    imp:"кричи, кричите / закричи, закричите",
    meaning:{ ru:"кричать", ar:"يصرخ", en:"to shout / scream", fr:"crier" },
    example:{ ru:"Ребёнок громко кричит.", ar:"الطفل يصرخ بصوت عالٍ.", en:"The child screams loudly.", fr:"L'enfant crie fort." },
    root:"КРИЧ", cat:"تواصل"
  },
  {
    nsv:"объявлять", sv:"объявить",
    imp:"объявляй, объявляйте / объяви, объявите",
    meaning:{ ru:"объявлять", ar:"يعلن", en:"to announce", fr:"annoncer" },
    example:{ ru:"Диктор объявил результаты.", ar:"المذيع أعلن النتائج.", en:"The announcer announced the results.", fr:"Le présentateur a annoncé les résultats." },
    root:"ЯВ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"придумывать", sv:"придумать",
    imp:"придумывай, придумывайте / придумай, придумайте",
    meaning:{ ru:"придумывать", ar:"يبتكر / يخترع", en:"to invent / come up with", fr:"inventer / imaginer" },
    example:{ ru:"Он придумал новый трюк.", ar:"ابتكر خدعة جديدة.", en:"He invented a new trick.", fr:"Il a inventé un nouveau truc." },
    root:"ДУМ", cat:"ذهنية"
  },
  {
    nsv:"осознавать", sv:"осознать",
    imp:"осознавай, осознавайте / осознай, осознайте",
    meaning:{ ru:"осознавать", ar:"يدرك / يستوعب", en:"to realize / become aware", fr:"réaliser / prendre conscience" },
    example:{ ru:"Я осознал свою ошибку.", ar:"أدركت خطأي.", en:"I realized my mistake.", fr:"J'ai réalisé mon erreur." },
    root:"ЗНА", cat:"ذهنية"
  },
  {
    nsv:"верить в себя", sv:"поверить в себя",
    imp:"верь в себя, верьте в себя / поверь в себя, поверьте в себя",
    meaning:{ ru:"верить в себя", ar:"يؤمن بنفسه", en:"to believe in oneself", fr:"croire en soi" },
    example:{ ru:"Ты должен верить в себя.", ar:"لازم تؤمن بنفسك.", en:"You must believe in yourself.", fr:"Tu dois croire en toi." },
    root:"ВЕР", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"гладить", sv:"погладить",
    imp:"гладь, гладьте / погладь, погладьте",
    meaning:{ ru:"гладить (утюгом)", ar:"يكوي", en:"to iron", fr:"repasser" },
    example:{ ru:"Я глажу рубашку.", ar:"أكوي القميص.", en:"I'm ironing the shirt.", fr:"Je repasse la chemise." },
    root:"ГЛАД", cat:"عمل"
  },
  {
    nsv:"пылесосить", sv:"пропылесосить",
    imp:"пылесось, пылесосьте / пропылесось, пропылесосьте",
    meaning:{ ru:"пылесосить", ar:"يكنس بالمكنسة الكهربائية", en:"to vacuum", fr:"passer l'aspirateur" },
    example:{ ru:"Она пылесосит ковёр.", ar:"تكنس السجادة بالمكنسة.", en:"She is vacuuming the carpet.", fr:"Elle passe l'aspirateur sur le tapis." },
    root:"ПЫЛ", cat:"عمل"
  },
  {
    nsv:"завтракать", sv:"позавтракать",
    imp:"завтракай, завтракайте / позавтракай, позавтракайте",
    meaning:{ ru:"завтракать", ar:"يفطر", en:"to have breakfast", fr:"prendre le petit-déjeuner" },
    example:{ ru:"Мы завтракаем в 8 утра.", ar:"نفطر في الثامنة صباحاً.", en:"We have breakfast at 8 a.m.", fr:"Nous prenons le petit-déjeuner à 8h." },
    root:"ЗАВТР", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"восхищаться", sv:"восхититься",
    imp:"восхищайся, восхищайтесь / восхитись, восхититесь",
    meaning:{ ru:"восхищаться", ar:"ينبهر / يعجب بشدة", en:"to admire / be delighted", fr:"admirer / être émerveillé" },
    example:{ ru:"Зрители восхищаются акробатами.", ar:"الجمهور منبهر بالبهلوانات.", en:"The audience admires the acrobats.", fr:"Le public admire les acrobates." },
    root:"ХИЩ", cat:"عواطف"
  },
  {
    nsv:"завидовать", sv:"позавидовать",
    imp:"завидуй, завидуйте / позавидуй, позавидуйте",
    meaning:{ ru:"завидовать", ar:"يحسد", en:"to envy", fr:"envier" },
    example:{ ru:"Не завидуй чужим успехам.", ar:"لا تحسد نجاحات الآخرين.", en:"Don't envy others' success.", fr:"N'envie pas le succès des autres." },
    root:"ЗАВИД", cat:"عواطف"
  },
  {
    nsv:"тосковать", sv:"затосковать",
    imp:"тоскуй, тоскуйте / затоскуй, затоскуйте",
    meaning:{ ru:"тосковать", ar:"يحن / يكتئب", en:"to yearn / feel melancholy", fr:"languir" },
    example:{ ru:"Он тоскует по родине.", ar:"يحن إلى وطنه.", en:"He yearns for his homeland.", fr:"Il languit de sa patrie." },
    root:"ТОСК", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"светить", sv:"посветить",
    imp:"свети, светите / посвети, посветите",
    meaning:{ ru:"светить (о солнце)", ar:"تشرق / تضيء", en:"to shine (sun)", fr:"briller (soleil)" },
    example:{ ru:"Солнце ярко светит.", ar:"الشمس تشرق بقوة.", en:"The sun is shining brightly.", fr:"Le soleil brille intensément." },
    root:"СВЕТ", cat:"طبيعة"
  },
  {
    nsv:"моросить", sv:"заморосить",
    imp:"— (безличный)",
    meaning:{ ru:"моросить", ar:"ترذ المطر", en:"to drizzle", fr:"bruiner" },
    example:{ ru:"На улице моросит.", ar:"الدنيا بترذ مطر خفيف.", en:"It's drizzling outside.", fr:"Il bruine dehors." },
    root:"МОРОС", cat:"طبيعة"
  },
  {
    nsv:"таять", sv:"растаять",
    imp:"тай, тайте / растай, растайте",
    meaning:{ ru:"таять", ar:"يذوب", en:"to melt", fr:"fondre" },
    example:{ ru:"Снег тает весной.", ar:"الثلج يذوب في الربيع.", en:"Snow melts in spring.", fr:"La neige fond au printemps." },
    root:"ТА", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"кашлять", sv:"кашлянуть",
    imp:"кашляй, кашляйте / кашляни, кашляните",
    meaning:{ ru:"кашлять", ar:"يسعل", en:"to cough", fr:"tousser" },
    example:{ ru:"Больной сильно кашляет.", ar:"المريض يسعل بشدة.", en:"The patient coughs heavily.", fr:"Le malade tousse fort." },
    root:"КАШЛ", cat:"صحة"
  },
  {
    nsv:"чихать", sv:"чихнуть",
    imp:"чихай, чихайте / чихни, чихните",
    meaning:{ ru:"чихать", ar:"يعطس", en:"to sneeze", fr:"éternuer" },
    example:{ ru:"От пыли я чихаю.", ar:"بسبب الغبار أعطس.", en:"I sneeze from dust.", fr:"J'éternue à cause de la poussière." },
    root:"ЧИХ", cat:"صحة"
  },
  {
    nsv:"потеть", sv:"вспотеть",
    imp:"потей, потейте / вспотей, вспотейте",
    meaning:{ ru:"потеть", ar:"يتعرق", en:"to sweat", fr:"transpirer" },
    example:{ ru:"После тренировки я потею.", ar:"بعد التمرين بتعرق.", en:"I sweat after training.", fr:"Je transpire après l'entraînement." },
    root:"ПОТ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"дружить", sv:"подружиться",
    imp:"дружи, дружите / подружись, подружитесь",
    meaning:{ ru:"дружить", ar:"يصادق / يكون صديقاً", en:"to be friends", fr:"être ami" },
    example:{ ru:"Мы дружим с детства.", ar:"نحن أصدقاء منذ الطفولة.", en:"We have been friends since childhood.", fr:"Nous sommes amis depuis l'enfance." },
    root:"ДРУЖ", cat:"علاقات"
  },
  {
    nsv:"мириться", sv:"помириться",
    imp:"мирись, миритесь / помирись, помиритесь",
    meaning:{ ru:"мириться", ar:"يتصالح", en:"to make peace / reconcile", fr:"se réconcilier" },
    example:{ ru:"Они помирились после ссоры.", ar:"تصالحوا بعد الخلاف.", en:"They made up after the quarrel.", fr:"Ils se sont réconciliés après la dispute." },
    root:"МИР", cat:"علاقات"
  },
  {
    nsv:"общаться", sv:"пообщаться",
    imp:"общайся, общайтесь / пообщайся, пообщайтесь",
    meaning:{ ru:"общаться", ar:"يتواصل / يختلط", en:"to communicate / socialise", fr:"communiquer / socialiser" },
    example:{ ru:"Подростки много общаются в соцсетях.", ar:"المراهقون يتواصلون كثيراً في مواقع التواصل.", en:"Teenagers communicate a lot on social networks.", fr:"Les ados communiquent beaucoup sur les réseaux sociaux." },
    root:"ОБЩ", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"скачивать", sv:"скачать",
    imp:"скачивай, скачивайте / скачай, скачайте",
    meaning:{ ru:"скачивать", ar:"يُنزّل (ملفاً)", en:"to download", fr:"télécharger" },
    example:{ ru:"Я скачиваю новый фильм.", ar:"أقوم بتنزيل فيلم جديد.", en:"I'm downloading a new film.", fr:"Je télécharge un nouveau film." },
    root:"КАЧ", cat:"تقنية"
  },
  {
    nsv:"загружать", sv:"загрузить",
    imp:"загружай, загружайте / загрузи, загрузите",
    meaning:{ ru:"загружать", ar:"يرفع / يحمّل", en:"to upload", fr:"téléverser" },
    example:{ ru:"Он загружает фото в облако.", ar:"يرفع الصورة إلى السحابة.", en:"He is uploading a photo to the cloud.", fr:"Il téléverse une photo sur le cloud." },
    root:"ГРУЗ", cat:"تقنية"
  },
  {
    nsv:"программировать", sv:"запрограммировать",
    imp:"программируй, программируйте / запрограммируй, запрограммируйте",
    meaning:{ ru:"программировать", ar:"يبرمج", en:"to program", fr:"programmer" },
    example:{ ru:"Она программирует игру.", ar:"تكتب برنامج لعبة.", en:"She is programming a game.", fr:"Elle programme un jeu." },
    root:"ПРОГРАММ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"учить наизусть", sv:"выучить наизусть",
    imp:"учи наизусть, учите наизусть / выучи наизусть, выучите наизусть",
    meaning:{ ru:"учить наизусть", ar:"يحفظ عن ظهر قلب", en:"to learn by heart", fr:"apprendre par cœur" },
    example:{ ru:"Я учу стих наизусть.", ar:"أحفظ القصيدة عن ظهر قلب.", en:"I'm learning a poem by heart.", fr:"J'apprends un poème par cœur." },
    root:"УЧ", cat:"تعليم"
  },
  {
    nsv:"переписывать", sv:"переписать",
    imp:"переписывай, переписывайте / перепиши, перепишите",
    meaning:{ ru:"переписывать", ar:"يعيد كتابة", en:"to rewrite", fr:"réécrire" },
    example:{ ru:"Ученик переписывает упражнение.", ar:"التلميذ يعيد كتابة التمرين.", en:"The pupil rewrites the exercise.", fr:"L'élève réécrit l'exercice." },
    root:"ПИС", cat:"تعليم"
  },
  {
    nsv:"исследовать", sv:"исследовать",
    imp:"исследуй, исследуйте / исследуй, исследуйте",
    meaning:{ ru:"исследовать", ar:"يبحث / يفحص", en:"to research / investigate", fr:"rechercher / examiner" },
    example:{ ru:"Учёный исследует ДНК.", ar:"العالم يفحص الحمض النووي.", en:"The scientist is researching DNA.", fr:"Le scientifique étudie l'ADN." },
    root:"СЛЕД", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"платить", sv:"заплатить",
    imp:"плати, платите / заплати, заплатите",
    meaning:{ ru:"платить", ar:"يدفع", en:"to pay", fr:"payer" },
    example:{ ru:"Я плачу́ за проезд.", ar:"أدفع ثمن المواصلات.", en:"I pay for the fare.", fr:"Je paie le trajet." },
    root:"ПЛАТ", cat:"اقتصاد"
  },
  {
    nsv:"зарабатывать", sv:"заработать",
    imp:"зарабатывай, зарабатывайте / заработай, заработайте",
    meaning:{ ru:"зарабатывать", ar:"يكسب (مالاً)", en:"to earn (money)", fr:"gagner (de l'argent)" },
    example:{ ru:"Он зарабатывает на жизнь программистом.", ar:"يكسب قوته كمبرمج.", en:"He earns a living as a programmer.", fr:"Il gagne sa vie comme programmeur." },
    root:"РАБОТ", cat:"اقتصاد"
  },
  {
    nsv:"инвестировать", sv:"инвестировать",
    imp:"инвестируй, инвестируйте / инвестируй, инвестируйте",
    meaning:{ ru:"инвестировать", ar:"يستثمر", en:"to invest", fr:"investir" },
    example:{ ru:"Фонд инвестирует в стартапы.", ar:"الصندوق يستثمر في الشركات الناشئة.", en:"The fund invests in startups.", fr:"Le fonds investit dans les startups." },
    root:"ИНВЕСТ", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"голосовать", sv:"проголосовать",
    imp:"голосуй, голосуйте / проголосуй, проголосуйте",
    meaning:{ ru:"голосовать", ar:"يُصوّت", en:"to vote", fr:"voter" },
    example:{ ru:"Граждане голосуют на выборах.", ar:"المواطنون يصوتون في الانتخابات.", en:"Citizens vote in elections.", fr:"Les citoyens votent aux élections." },
    root:"ГОЛОС", cat:"قانون"
  },
  {
    nsv:"судить", sv:"осудить",
    imp:"суди, судите / осуди, осудите",
    meaning:{ ru:"судить", ar:"يحاكم / يدين", en:"to judge / condemn", fr:"juger / condamner" },
    example:{ ru:"Судья судит преступника.", ar:"القاضي يحاكم المجرم.", en:"The judge judges the criminal.", fr:"Le juge juge le criminel." },
    root:"СУД", cat:"قانون"
  },
  {
    nsv:"запрещать", sv:"запретить",
    imp:"запрещай, запрещайте / запрети, запретите",
    meaning:{ ru:"запрещать", ar:"يمنع", en:"to forbid / ban", fr:"interdire" },
    example:{ ru:"Курить запрещено.", ar:"التدخين ممنوع.", en:"Smoking is forbidden.", fr:"Il est interdit de fumer." },
    root:"ЗАПРЕТ", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"играть (в футбол)", sv:"сыграть",
    imp:"играй, играйте / сыграй, сыграйте",
    meaning:{ ru:"играть (в мяч)", ar:"يلعب (بالكرة)", en:"to play (ball)", fr:"jouer (au ballon)" },
    example:{ ru:"Команда играет в футбол.", ar:"الفريق يلعب كرة القدم.", en:"The team plays football.", fr:"L'équipe joue au football." },
    root:"ИГР", cat:"رياضة"
  },
  {
    nsv:"бегать (спорт)", sv:"пробежать",
    imp:"бегай, бегайте / пробеги, пробегите",
    meaning:{ ru:"бегать (на тренировке)", ar:"يجري (تدريباً)", en:"to run (exercise)", fr:"courir (entraînement)" },
    example:{ ru:"Я бегаю каждое утро.", ar:"أجري كل صباح.", en:"I run every morning.", fr:"Je cours chaque matin." },
    root:"БЕГ", cat:"رياضة"
  },
  {
    nsv:"плавать (спорт)", sv:"проплыть",
    imp:"плавай, плавайте / проплыви, проплывите",
    meaning:{ ru:"плавать (стиль)", ar:"يسبح (رياضة)", en:"to swim (stroke)", fr:"nager (sport)" },
    example:{ ru:"Он хорошо плавает кролем.", ar:"يسبح جيداً سباحة حرة.", en:"He swims crawl well.", fr:"Il nage bien le crawl." },
    root:"ПЛАВ", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"рисовать", sv:"нарисовать",
    imp:"рисуй, рисуйте / нарисуй, нарисуйте",
    meaning:{ ru:"рисовать", ar:"يرسم", en:"to draw", fr:"dessiner" },
    example:{ ru:"Художник рисует портрет.", ar:"الرسام يرسم بورتريه.", en:"The artist is drawing a portrait.", fr:"L'artiste dessine un portrait." },
    root:"РИС", cat:"فن"
  },
  {
    nsv:"танцевать", sv:"станцевать",
    imp:"танцуй, танцуйте / станцуй, станцуйте",
    meaning:{ ru:"танцевать", ar:"يرقص", en:"to dance", fr:"danser" },
    example:{ ru:"Пара красиво танцует вальс.", ar:"الثنائي يرقص الفالس بشكل جميل.", en:"The couple dances a beautiful waltz.", fr:"Le couple danse une belle valse." },
    root:"ТАНЦ", cat:"فن"
  },
  {
    nsv:"сочинять", sv:"сочинить",
    imp:"сочиняй, сочиняйте / сочини, сочините",
    meaning:{ ru:"сочинять", ar:"يؤلف (موسيقى)", en:"to compose (music)", fr:"composer (musique)" },
    example:{ ru:"Композитор сочиняет симфонию.", ar:"المؤلف الموسيقي يؤلف سيمفونية.", en:"The composer is composing a symphony.", fr:"Le compositeur compose une symphonie." },
    root:"СОЧИН", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"воевать", sv:"повоевать",
    imp:"воюй, воюйте / повоюй, повоюйте",
    meaning:{ ru:"воевать", ar:"يحارب", en:"to fight (war)", fr:"combattre (guerre)" },
    example:{ ru:"Армия воюет с врагом.", ar:"الجيش يحارب العدو.", en:"The army fights the enemy.", fr:"L'armée combat l'ennemi." },
    root:"ВОЙ", cat:"عسكرية"
  },
  {
    nsv:"защищать", sv:"защитить",
    imp:"защищай, защищайте / защити, защитите",
    meaning:{ ru:"защищать", ar:"يدافع / يحمي", en:"to defend / protect", fr:"défendre / protéger" },
    example:{ ru:"Солдат защищает Родину.", ar:"الجندي يدافع عن الوطن.", en:"The soldier defends the homeland.", fr:"Le soldat défend la patrie." },
    root:"ЗАЩИТ", cat:"عسكرية"
  },
  {
    nsv:"стрелять", sv:"выстрелить",
    imp:"стреляй, стреляйте / выстрели, выстрелите",
    meaning:{ ru:"стрелять", ar:"يطلق النار", en:"to shoot", fr:"tirer" },
    example:{ ru:"Охотник стреляет в мишень.", ar:"الصياد يطلق النار على الهدف.", en:"The hunter shoots at the target.", fr:"Le chasseur tire sur la cible." },
    root:"СТРЕЛ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"мчаться", sv:"помчаться",
    imp:"мчись, мчитесь / помчись, помчитесь",
    meaning:{ ru:"мчаться", ar:"ينطلق بسرعة", en:"to race / speed", fr:"filer à toute allure" },
    example:{ ru:"Машина мчится по трассе.", ar:"السيارة تنطلق بسرعة على الطريق.", en:"The car is speeding down the highway.", fr:"La voiture file à toute allure sur l'autoroute." },
    root:"МЧАТ", cat:"حركة"
  },
  {
    nsv:"скользить", sv:"заскользить",
    imp:"скользи, скользите / заскользи, заскользите",
    meaning:{ ru:"скользить", ar:"ينزلق", en:"to slide / glide", fr:"glisser" },
    example:{ ru:"Конькобежец скользит по льду.", ar:"المتزلج ينزلق على الجليد.", en:"The skater glides on the ice.", fr:"Le patineur glisse sur la glace." },
    root:"СКОЛЬЗ", cat:"حركة"
  },
  {
    nsv:"шагать", sv:"шагнуть",
    imp:"шагай, шагайте / шагни, шагните",
    meaning:{ ru:"шагать", ar:"يخطو", en:"to step / stride", fr:"marcher à grands pas" },
    example:{ ru:"Солдаты шагают в ногу.", ar:"الجنود يخطون بانتظام.", en:"The soldiers are marching in step.", fr:"Les soldats marchent au pas." },
    root:"ШАГ", cat:"حركة"
  },
  {
    nsv:"возвращаться", sv:"вернуться",
    imp:"возвращайся, возвращайтесь / вернись, вернитесь",
    meaning:{ ru:"возвращаться", ar:"يعود", en:"to return", fr:"revenir / retourner" },
    example:{ ru:"Я возвращаюсь домой поздно.", ar:"أعود إلى البيت متأخراً.", en:"I return home late.", fr:"Je rentre tard à la maison." },
    root:"ВРАТ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"нюхать", sv:"понюхать",
    imp:"нюхай, нюхайте / понюхай, понюхайте",
    meaning:{ ru:"нюхать", ar:"يشم (فعل متعمد)", en:"to smell (sniff deliberately)", fr:"renifler (délibérément)" },
    example:{ ru:"Собака нюхает след.", ar:"الكلب يشم الأثر.", en:"The dog is sniffing the trail.", fr:"Le chien flaire la piste." },
    root:"НЮХ", cat:"حواس"
  },
  {
    nsv:"пробовать (на ощупь)", sv:"попробовать",
    imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать на ощупь", ar:"يجرب الملمس", en:"to feel / test by touch", fr:"tester au toucher" },
    example:{ ru:"Попробуй ткань – она мягкая.", ar:"جرب ملمس القماش – إنه ناعم.", en:"Feel the fabric – it's soft.", fr:"Touche le tissu – il est doux." },
    root:"ПРОБ", cat:"حواس"
  },
  {
    nsv:"любоваться", sv:"полюбоваться",
    imp:"любуйся, любуйтесь / полюбуйся, полюбуйтесь",
    meaning:{ ru:"любоваться", ar:"يتأمل جمال", en:"to admire (visually)", fr:"admirer (visuellement)" },
    example:{ ru:"Мы любуемся закатом.", ar:"نتأمل جمال الغروب.", en:"We admire the sunset.", fr:"Nous admirons le coucher de soleil." },
    root:"ЛЮБОВ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"жаловаться", sv:"пожаловаться",
    imp:"жалуйся, жалуйтесь / пожалйся, пожалуйтесь",
    meaning:{ ru:"жаловаться", ar:"يشتكي", en:"to complain", fr:"se plaindre" },
    example:{ ru:"Пациент жалуется на боль.", ar:"المريض يشتكي من الألم.", en:"The patient complains of pain.", fr:"Le patient se plaint de la douleur." },
    root:"ЖАЛ", cat:"تواصل"
  },
  {
    nsv:"хвастаться", sv:"похвастаться",
    imp:"хвастайся, хвастайтесь / похвастайся, похвастайтесь",
    meaning:{ ru:"хвастаться", ar:"يتباهى", en:"to boast", fr:"se vanter" },
    example:{ ru:"Он хвастается своей силой.", ar:"يتباهى بقوته.", en:"He boasts about his strength.", fr:"Il se vante de sa force." },
    root:"ХВАСТ", cat:"تواصل"
  },
  {
    nsv:"возражать", sv:"возразить",
    imp:"возражай, возражайте / возрази, возразите",
    meaning:{ ru:"возражать", ar:"يعترض", en:"to object", fr:"objecter" },
    example:{ ru:"Никто не возражает против плана.", ar:"لا أحد يعترض على الخطة.", en:"Nobody objects to the plan.", fr:"Personne ne s'oppose au plan." },
    root:"РАЖ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"сравнивать", sv:"сравнить",
    imp:"сравнивай, сравнивайте / сравни, сравните",
    meaning:{ ru:"сравнивать", ar:"يقارن", en:"to compare", fr:"comparer" },
    example:{ ru:"Я всегда сравниваю цены.", ar:"دائماً أقارن الأسعار.", en:"I always compare prices.", fr:"Je compare toujours les prix." },
    root:"РАВН", cat:"ذهنية"
  },
  {
    nsv:"выбирать", sv:"выбрать",
    imp:"выбирай, выбирайте / выбери, выберите",
    meaning:{ ru:"выбирать", ar:"يختار", en:"to choose", fr:"choisir" },
    example:{ ru:"Мы выбираем подарок для мамы.", ar:"نختار هدية للأم.", en:"We are choosing a gift for mom.", fr:"Nous choisissons un cadeau pour maman." },
    root:"БИР", cat:"ذهنية"
  },
  {
    nsv:"ошибаться", sv:"ошибиться",
    imp:"ошибайся, ошибайтесь / ошибись, ошибитесь",
    meaning:{ ru:"ошибаться", ar:"يخطئ", en:"to make a mistake", fr:"se tromper" },
    example:{ ru:"Все иногда ошибаются.", ar:"الكل يخطئ أحياناً.", en:"Everyone makes mistakes sometimes.", fr:"Tout le monde se trompe parfois." },
    root:"ШИБ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"печь", sv:"испечь",
    imp:"пеки, пеките / испеки, испеките",
    meaning:{ ru:"печь", ar:"يخبز", en:"to bake", fr:"cuire au four" },
    example:{ ru:"Бабушка печёт пироги.", ar:"الجدّة تخبز الفطائر.", en:"Grandma bakes pies.", fr:"Grand-mère fait des tartes." },
    root:"ПЕК", cat:"عمل"
  },
  {
    nsv:"жарить", sv:"пожарить",
    imp:"жарь, жарьте / пожарь, пожарьте",
    meaning:{ ru:"жарить", ar:"يقلي / يشوي", en:"to fry / roast", fr:"frire / rôtir" },
    example:{ ru:"Я жарю картошку на ужин.", ar:"أقلي البطاطس للعشاء.", en:"I'm frying potatoes for dinner.", fr:"Je fais frire des pommes de terre pour le dîner." },
    root:"ЖАР", cat:"عمل"
  },
  {
    nsv:"убираться", sv:"убраться",
    imp:"убирайся, убирайтесь / уберись, уберитесь",
    meaning:{ ru:"убираться", ar:"ينظف المكان", en:"to tidy up", fr:"ranger" },
    example:{ ru:"Я убираюсь в комнате по субботам.", ar:"أنظف الغرفة أيام السبت.", en:"I tidy my room on Saturdays.", fr:"Je range ma chambre le samedi." },
    root:"БР", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"надеяться", sv:"понадеяться",
    imp:"надейся, надейтесь / понадейся, понадейтесь",
    meaning:{ ru:"надеяться", ar:"يأمل", en:"to hope", fr:"espérer" },
    example:{ ru:"Я надеюсь на лучшее.", ar:"آمل في الأفضل.", en:"I hope for the best.", fr:"J'espère le meilleur." },
    root:"НАДЕЖ", cat:"عواطف"
  },
  {
    nsv:"разочаровываться", sv:"разочароваться",
    imp:"разочаровывайся, разочаровывайтесь / разочаруйся, разочаруйтесь",
    meaning:{ ru:"разочаровываться", ar:"يصاب بخيبة أمل", en:"to be disappointed", fr:"être déçu" },
    example:{ ru:"Не разочаровывайся из-за неудачи.", ar:"لا تصب بخيبة أمل بسبب الفشل.", en:"Don't be disappointed by failure.", fr:"Ne sois pas déçu par l'échec." },
    root:"ЧАР", cat:"عواطف"
  },
  {
    nsv:"стыдиться", sv:"постыдиться",
    imp:"стыдись, стыдитесь / постыдись, постыдитесь",
    meaning:{ ru:"стыдиться", ar:"يشعر بالعار", en:"to be ashamed", fr:"avoir honte" },
    example:{ ru:"Ему нечего стыдиться.", ar:"ليس لديه ما يخجل منه.", en:"He has nothing to be ashamed of.", fr:"Il n'a pas à avoir honte." },
    root:"СТЫД", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"цвести", sv:"зацвести",
    imp:"цвети, цветите / зацвети, зацветите",
    meaning:{ ru:"цвести", ar:"يزهر", en:"to bloom", fr:"fleurir" },
    example:{ ru:"Весной сады цветут.", ar:"في الربيع الحدائق تزهر.", en:"In spring gardens bloom.", fr:"Au printemps les jardins fleurissent." },
    root:"ЦВЕТ", cat:"طبيعة"
  },
  {
    nsv:"греметь (гром)", sv:"загреметь",
    imp:"— (безличный)",
    meaning:{ ru:"греметь (о громе)", ar:"يرعد", en:"to thunder", fr:"tonner" },
    example:{ ru:"Гром гремит вдалеке.", ar:"الرعد يدوي في البعيد.", en:"Thunder rumbles in the distance.", fr:"Le tonnerre gronde au loin." },
    root:"ГРЕМ", cat:"طبيعة"
  },
  {
    nsv:"смеркаться", sv:"смеркнуться",
    imp:"— (безличный)",
    meaning:{ ru:"смеркаться", ar:"يحل الظلام", en:"to get dark / dusk", fr:"faire sombre / crépuscule" },
    example:{ ru:"Осенью рано смеркается.", ar:"في الخريف يحل الظلام باكراً.", en:"In autumn it gets dark early.", fr:"En automne il fait sombre tôt." },
    root:"МЕРК", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"лечиться", sv:"вылечиться",
    imp:"лечись, лечитесь / вылечись, вылечитесь",
    meaning:{ ru:"лечиться", ar:"يتعالج", en:"to undergo treatment", fr:"se soigner" },
    example:{ ru:"Он лечится от простуды.", ar:"يتعالج من الزكام.", en:"He is being treated for a cold.", fr:"Il se soigne contre le rhume." },
    root:"ЛЕЧ", cat:"صحة"
  },
  {
    nsv:"здороветь", sv:"поздороветь",
    imp:"здоровей, здоровейте / поздоровей, поздоровейте",
    meaning:{ ru:"здороветь", ar:"يصبح أكثر صحة", en:"to become healthier", fr:"devenir plus sain" },
    example:{ ru:"С каждым днём он здоровеет.", ar:"كل يوم يصبح أكثر صحة.", en:"He's getting healthier every day.", fr:"Il devient plus sain chaque jour." },
    root:"ЗДОРОВ", cat:"صحة"
  },
  {
    nsv:"травмировать", sv:"травмировать",
    imp:"травмируй, травмируйте / травмируй, травмируйте",
    meaning:{ ru:"травмировать", ar:"يُصيب", en:"to injure", fr:"blesser" },
    example:{ ru:"Спортсмен травмировал колено.", ar:"الرياضي أصاب ركبته.", en:"The athlete injured his knee.", fr:"Le sportif s'est blessé le genou." },
    root:"ТРАВМ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"помогать", sv:"помочь",
    imp:"помогай, помогайте / помоги, помогите",
    meaning:{ ru:"помогать", ar:"يساعد", en:"to help", fr:"aider" },
    example:{ ru:"Я помогаю другу с переездом.", ar:"أساعد صديقي في الانتقال.", en:"I'm helping my friend move.", fr:"J'aide mon ami à déménager." },
    root:"МОГ", cat:"علاقات"
  },
  {
    nsv:"приглашать", sv:"пригласить",
    imp:"приглашай, приглашайте / пригласи, пригласите",
    meaning:{ ru:"приглашать", ar:"يدعو", en:"to invite", fr:"inviter" },
    example:{ ru:"Она приглашает гостей на день рождения.", ar:"تدعو الضيوف إلى عيد ميلادها.", en:"She invites guests to her birthday.", fr:"Elle invite des invités à son anniversaire." },
    root:"ГЛАШ", cat:"علاقات"
  },
  {
    nsv:"благодарить", sv:"поблагодарить",
    imp:"благодари, благодарите / поблагодари, поблагодарите",
    meaning:{ ru:"благодарить", ar:"يشكر", en:"to thank", fr:"remercier" },
    example:{ ru:"Я благодарю вас за внимание.", ar:"أشكركم على الاهتمام.", en:"I thank you for your attention.", fr:"Je vous remercie de votre attention." },
    root:"БЛАГОДАР", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"печатать", sv:"напечатать",
    imp:"печатай, печатайте / напечатай, напечатайте",
    meaning:{ ru:"печатать", ar:"يطبع", en:"to print / type", fr:"imprimer / taper" },
    example:{ ru:"Я печатаю документы на принтере.", ar:"أطبع المستندات على الطابعة.", en:"I print documents on the printer.", fr:"J'imprime des documents sur l'imprimante." },
    root:"ПЕЧАТ", cat:"تقنية"
  },
  {
    nsv:"сохранять", sv:"сохранить",
    imp:"сохраняй, сохраняйте / сохрани, сохраните",
    meaning:{ ru:"сохранять", ar:"يحفظ (بيانات)", en:"to save (data)", fr:"sauvegarder" },
    example:{ ru:"Не забудь сохранить файл.", ar:"لا تنس حفظ الملف.", en:"Don't forget to save the file.", fr:"N'oublie pas de sauvegarder le fichier." },
    root:"ХРАН", cat:"تقنية"
  },
  {
    nsv:"взламывать", sv:"взломать",
    imp:"взламывай, взламывайте / взломай, взломайте",
    meaning:{ ru:"взламывать", ar:"يخترق", en:"to hack", fr:"pirater" },
    example:{ ru:"Хакер взломал сайт.", ar:"الهاكر اخترق الموقع.", en:"The hacker hacked the site.", fr:"Le hacker a piraté le site." },
    root:"ЛОМ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"обучать", sv:"обучить",
    imp:"обучай, обучайте / обучи, обучите",
    meaning:{ ru:"обучать", ar:"يدرّب / يعلم", en:"to train / teach", fr:"former / enseigner" },
    example:{ ru:"Тренер обучает новичков.", ar:"المدرب يدرب المبتدئين.", en:"The coach trains beginners.", fr:"L'entraîneur forme les débutants." },
    root:"УЧ", cat:"تعليم"
  },
  {
    nsv:"посещать", sv:"посетить",
    imp:"посещай, посещайте / посети, посетите",
    meaning:{ ru:"посещать", ar:"يزور (مكاناً)", en:"to visit / attend", fr:"visiter / assister" },
    example:{ ru:"Я посещаю курсы английского.", ar:"أحضر دروس الإنجليزية.", en:"I attend English courses.", fr:"Je suis des cours d'anglais." },
    root:"СЕЩ", cat:"تعليم"
  },
  {
    nsv:"конспектировать", sv:"законспектировать",
    imp:"конспектируй, конспектируйте / законспектируй, законспектируйте",
    meaning:{ ru:"конспектировать", ar:"يلخص / يدون ملاحظات", en:"to take notes", fr:"prendre des notes" },
    example:{ ru:"Студент конспектирует лекцию.", ar:"الطالب يدون ملاحظات المحاضرة.", en:"The student is taking notes of the lecture.", fr:"L'étudiant prend des notes du cours." },
    root:"СПЕКТ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"тратить", sv:"потратить",
    imp:"трать, тратьте / потрать, потратьте",
    meaning:{ ru:"тратить", ar:"ينفق", en:"to spend", fr:"dépenser" },
    example:{ ru:"Не трать деньги зря.", ar:"لا تنفق الفلوس عبثاً.", en:"Don't waste money.", fr:"Ne gaspille pas l'argent." },
    root:"ТРАТ", cat:"اقتصاد"
  },
  {
    nsv:"экономить", sv:"сэкономить",
    imp:"экономь, экономьте / сэкономь, сэкономьте",
    meaning:{ ru:"экономить", ar:"يدخر / يقتصد", en:"to save (money)", fr:"économiser" },
    example:{ ru:"Мы экономим на электричестве.", ar:"نوفر في الكهرباء.", en:"We save on electricity.", fr:"Nous économisons l'électricité." },
    root:"ЭКОНОМ", cat:"اقتصاد"
  },
  {
    nsv:"одолжить", sv:"одалживать",
    imp:"одолжи, одолжите / одалживай, одалживайте",
    meaning:{ ru:"одолжить (дать взаймы)", ar:"يُقرض", en:"to lend", fr:"prêter" },
    example:{ ru:"Я одолжил другу немного денег.", ar:"أقرضت صديقي بعض المال.", en:"I lent my friend some money.", fr:"J'ai prêté un peu d'argent à mon ami." },
    root:"ДОЛЖ", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"выбирать (президента)", sv:"выбрать",
    imp:"выбирай, выбирайте / выбери, выберите",
    meaning:{ ru:"выбирать (голосованием)", ar:"ينتخب", en:"to elect", fr:"élire" },
    example:{ ru:"Народ выбирает президента.", ar:"الشعب ينتخب الرئيس.", en:"The people elect the president.", fr:"Le peuple élit le président." },
    root:"БИР", cat:"قانون"
  },
  {
    nsv:"править", sv:"править",
    imp:"правь, правьте / правь, правьте",
    meaning:{ ru:"править", ar:"يحكم", en:"to rule / govern", fr:"gouverner" },
    example:{ ru:"Король правит страной.", ar:"الملك يحكم البلاد.", en:"The king rules the country.", fr:"Le roi gouverne le pays." },
    root:"ПРАВ", cat:"قانون"
  },
  {
    nsv:"наказывать", sv:"наказать",
    imp:"наказывай, наказывайте / накажи, накажите",
    meaning:{ ru:"наказывать", ar:"يعاقب", en:"to punish", fr:"punir" },
    example:{ ru:"Преступника наказали по закону.", ar:"عوقب المجرم حسب القانون.", en:"The criminal was punished according to the law.", fr:"Le criminel a été puni conformément à la loi." },
    root:"КАЗ", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"соревноваться", sv:"посоревноваться",
    imp:"соревнуйся, соревнуйтесь / посоревнуйся, посоревнуйтесь",
    meaning:{ ru:"соревноваться", ar:"يتنافس", en:"to compete", fr:"concourir / rivaliser" },
    example:{ ru:"Спортсмены соревнуются за золото.", ar:"الرياضيون يتنافسون على الذهب.", en:"Athletes compete for gold.", fr:"Les athlètes rivalisent pour l'or." },
    root:"РЕВН", cat:"رياضة"
  },
  {
    nsv:"побеждать", sv:"победить",
    imp:"побеждай, побеждайте / победи, победите",
    meaning:{ ru:"побеждать", ar:"ينتصر", en:"to defeat / win", fr:"vaincre / gagner" },
    example:{ ru:"Наша команда всегда побеждает!", ar:"فريقنا دائماً ينتصر!", en:"Our team always wins!", fr:"Notre équipe gagne toujours !" },
    root:"БЕД", cat:"رياضة"
  },
  {
    nsv:"забивать (гол)", sv:"забить",
    imp:"забивай, забивайте / забей, забейте",
    meaning:{ ru:"забивать (гол)", ar:"يسجل هدفاً", en:"to score (a goal)", fr:"marquer (un but)" },
    example:{ ru:"Форвард забил решающий гол.", ar:"المهاجم سجل الهدف الحاسم.", en:"The forward scored the decisive goal.", fr:"L'attaquant a marqué le but décisif." },
    root:"БИ", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"фотографировать", sv:"сфотографировать",
    imp:"фотографируй, фотографируйте / сфотографируй, сфотографируйте",
    meaning:{ ru:"фотографировать", ar:"يلتقط صورة", en:"to photograph", fr:"photographier" },
    example:{ ru:"Турист фотографирует закат.", ar:"السائح يلتقط صورة للغروب.", en:"The tourist photographs the sunset.", fr:"Le touriste photographie le coucher de soleil." },
    root:"ФОТО", cat:"فن"
  },
  {
    nsv:"лепить", sv:"слепить",
    imp:"лепи, лепите / слепи, слепите",
    meaning:{ ru:"лепить", ar:"ينحت / يشكّل", en:"to sculpt / model", fr:"sculpter / modeler" },
    example:{ ru:"Дети лепят из пластилина.", ar:"الأطفال يشكلون بالصلصال.", en:"Children model with clay.", fr:"Les enfants modèlent avec de la pâte." },
    root:"ЛЕП", cat:"فن"
  },
  {
    nsv:"играть (на гитаре)", sv:"сыграть",
    imp:"играй, играйте / сыграй, сыграйте",
    meaning:{ ru:"играть (на инструменте)", ar:"يعزف (على آلة)", en:"to play (an instrument)", fr:"jouer (d'un instrument)" },
    example:{ ru:"Он классно играет на гитаре.", ar:"يعزف على الغيتار ببراعة.", en:"He plays the guitar brilliantly.", fr:"Il joue brillamment de la guitare." },
    root:"ИГР", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"сражаться", sv:"сразиться",
    imp:"сражайся, сражайтесь / сразись, сразитесь",
    meaning:{ ru:"сражаться", ar:"يخوض معركة", en:"to fight / battle", fr:"combattre / lutter" },
    example:{ ru:"Солдаты храбро сражаются.", ar:"الجنود يحاربون بشجاعة.", en:"The soldiers fight bravely.", fr:"Les soldats combattent courageusement." },
    root:"СРАЖ", cat:"عسكرية"
  },
  {
    nsv:"вторгаться", sv:"вторгнуться",
    imp:"вторгайся, вторгайтесь / вторгнись, вторгнитесь",
    meaning:{ ru:"вторгаться", ar:"يغزو", en:"to invade", fr:"envahir" },
    example:{ ru:"Враг вторгся на нашу землю.", ar:"العدو غزا أرضنا.", en:"The enemy invaded our land.", fr:"L'ennemi a envahi notre terre." },
    root:"ТОРГ", cat:"عسكرية"
  },
  {
    nsv:"патрулировать", sv:"отпатрулировать",
    imp:"патрулируй, патрулируйте / отпатрулируй, отпатрулируйте",
    meaning:{ ru:"патрулировать", ar:"يقوم بدورية", en:"to patrol", fr:"patrouiller" },
    example:{ ru:"Полиция патрулирует улицы.", ar:"الشرطة تقوم بدورية في الشوارع.", en:"The police patrol the streets.", fr:"La police patrouille dans les rues." },
    root:"ПАТРУЛ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"пересекать", sv:"пересечь",
    imp:"пересекай, пересекайте / пересеки, пересеките",
    meaning:{ ru:"пересекать", ar:"يقطع / يعبر", en:"to cross", fr:"traverser" },
    example:{ ru:"Мы пересекаем границу.", ar:"نعبر الحدود.", en:"We are crossing the border.", fr:"Nous traversons la frontière." },
    root:"СЕК", cat:"حركة"
  },
  {
    nsv:"обгонять", sv:"обогнать",
    imp:"обгоняй, обгоняйте / обгони, обгоните",
    meaning:{ ru:"обгонять", ar:"يتجاوز (في السباق)", en:"to overtake", fr:"dépasser" },
    example:{ ru:"Гонщик обгоняет соперника.", ar:"المتسابق يتجاوز منافسه.", en:"The racer overtakes the rival.", fr:"Le coureur dépasse son rival." },
    root:"ГОН", cat:"حركة"
  },
  {
    nsv:"бродить", sv:"побродить",
    imp:"броди, бродите / поброди, побродите",
    meaning:{ ru:"бродить", ar:"يتجول بلا هدف", en:"to wander / roam", fr:"errer / flâner" },
    example:{ ru:"Туристы бродят по городу.", ar:"السياح يتجولون في المدينة.", en:"Tourists wander around the city.", fr:"Les touristes flânent dans la ville." },
    root:"БРОД", cat:"حركة"
  },
  {
    nsv:"отступать", sv:"отступить",
    imp:"отступай, отступайте / отступи, отступите",
    meaning:{ ru:"отступать", ar:"يتراجع", en:"to retreat / step back", fr:"reculer / battre en retraite" },
    example:{ ru:"Армия отступает к столице.", ar:"الجيش يتراجع نحو العاصمة.", en:"The army retreats to the capital.", fr:"L'armée bat en retraite vers la capitale." },
    root:"СТУП", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"ощущать", sv:"ощутить",
    imp:"ощущай, ощущайте / ощути, ощутите",
    meaning:{ ru:"ощущать", ar:"يشعر بـ (إحساس داخلي)", en:"to feel (inner sensation)", fr:"ressentir (sensation interne)" },
    example:{ ru:"Я ощущаю тепло от костра.", ar:"أشعر بالدفء من النار.", en:"I feel warmth from the campfire.", fr:"Je ressens la chaleur du feu de camp." },
    root:"ОЩУЩ", cat:"حواس"
  },
  {
    nsv:"пробовать (на вкус)", sv:"попробовать",
    imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать (еду)", ar:"يتذوق الطعام", en:"to taste (food)", fr:"goûter (nourriture)" },
    example:{ ru:"Попробуй этот соус.", ar:"تذوق هذه الصلصة.", en:"Taste this sauce.", fr:"Goûte cette sauce." },
    root:"ПРОБ", cat:"حواس"
  },
  {
    nsv:"подслушивать", sv:"подслушать",
    imp:"подслушивай, подслушивайте / подслушай, подслушайте",
    meaning:{ ru:"подслушивать", ar:"يتنصت", en:"to eavesdrop", fr:"écouter aux portes" },
    example:{ ru:"Не подслушивай чужие разговоры.", ar:"لا تتنصت على محادثات الآخرين.", en:"Don't eavesdrop on others' conversations.", fr:"N'écoute pas aux portes." },
    root:"СЛУШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"договариваться", sv:"договориться",
    imp:"договаривайся, договаривайтесь / договорись, договоритесь",
    meaning:{ ru:"договариваться", ar:"يتفق (بعد نقاش)", en:"to come to an agreement", fr:"se mettre d'accord" },
    example:{ ru:"Мы договорились о встрече.", ar:"اتفقنا على اللقاء.", en:"We agreed on a meeting.", fr:"Nous nous sommes mis d'accord pour une rencontre." },
    root:"ГОВОР", cat:"تواصل"
  },
  {
    nsv:"рукоплескать", sv:"зарукоплескать",
    imp:"рукоплещи, рукоплещите / зарукоплещи, зарукоплещите",
    meaning:{ ru:"рукоплескать", ar:"يصفق (إعجاباً)", en:"to applaud", fr:"applaudir" },
    example:{ ru:"Зрители рукоплескали артистам.", ar:"صفق الجمهور للفنانين.", en:"The audience applauded the performers.", fr:"Le public a applaudi les artistes." },
    root:"ПЛЕСК", cat:"تواصل"
  },
  {
    nsv:"выражать", sv:"выразить",
    imp:"выражай, выражайте / вырази, выразите",
    meaning:{ ru:"выражать", ar:"يعبر عن", en:"to express", fr:"exprimer" },
    example:{ ru:"Она выразила благодарность.", ar:"عبرت عن الامتنان.", en:"She expressed gratitude.", fr:"Elle a exprimé sa gratitude." },
    root:"РАЖ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"напрягать мозги", sv:"напрячь мозги",
    imp:"напрягай мозги, напрягайте мозги / напряги мозги, напрягите мозги",
    meaning:{ ru:"напрягать мозги", ar:"يشغل عقله بقوة", en:"to strain one's brain", fr:"se creuser la tête" },
    example:{ ru:"Пришлось напрячь мозги над задачей.", ar:"اضطررت أشغل عقلي في المسألة.", en:"I had to rack my brain over the problem.", fr:"J'ai dû me creuser la tête sur ce problème." },
    root:"ПРЯГ", cat:"ذهنية"
  },
  {
    nsv:"вдумываться", sv:"вдуматься",
    imp:"вдумывайся, вдумывайтесь / вдумайся, вдумайтесь",
    meaning:{ ru:"вдумываться", ar:"يتفكر بعمق", en:"to ponder deeply", fr:"réfléchir profondément" },
    example:{ ru:"Вдумайся в смысл этих слов.", ar:"تفكر في معنى هذه الكلمات.", en:"Ponder the meaning of these words.", fr:"Réfléchis bien au sens de ces mots." },
    root:"ДУМ", cat:"ذهنية"
  },
  {
    nsv:"учить (высшее образование)", sv:"выучить",
    imp:"учи, учите / выучи, выучите",
    meaning:{ ru:"учить (в вузе)", ar:"يدرس (في الجامعة)", en:"to study (at university)", fr:"étudier (à l'université)" },
    example:{ ru:"Он учится на врача.", ar:"يدرس ليكون طبيباً.", en:"He studies to be a doctor.", fr:"Il étudie pour devenir médecin." },
    root:"УЧ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"подметать", sv:"подмести",
    imp:"подметай, подметайте / подмети, подметите",
    meaning:{ ru:"подметать", ar:"يكنس", en:"to sweep", fr:"balayer" },
    example:{ ru:"Я подметаю пол на кухне.", ar:"أكنس أرضية المطبخ.", en:"I sweep the kitchen floor.", fr:"Je balaye le sol de la cuisine." },
    root:"МЕТ", cat:"عمل"
  },
  {
    nsv:"вытирать пыль", sv:"вытереть пыль",
    imp:"вытирай пыль, вытирайте пыль / вытри пыль, вытрите пыль",
    meaning:{ ru:"вытирать пыль", ar:"يمسح الغبار", en:"to dust", fr:"épousseter" },
    example:{ ru:"Она вытирает пыль с полок.", ar:"تمسح الغبار عن الرفوف.", en:"She dusts the shelves.", fr:"Elle époussette les étagères." },
    root:"ТИР", cat:"عمل"
  },
  {
    nsv:"поливать", sv:"полить",
    imp:"поливай, поливайте / полей, полейте",
    meaning:{ ru:"поливать", ar:"يسقي", en:"to water (plants)", fr:"arroser" },
    example:{ ru:"Я поливаю цветы каждый вечер.", ar:"أسقي الزهور كل مساء.", en:"I water the flowers every evening.", fr:"J'arrose les fleurs chaque soir." },
    root:"ЛИВ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"удивляться", sv:"удивиться",
    imp:"удивляйся, удивляйтесь / удивись, удивитесь",
    meaning:{ ru:"удивляться", ar:"يتعجب", en:"to be surprised", fr:"s'étonner" },
    example:{ ru:"Я удивляюсь твоей силе.", ar:"أتعجب من قوتك.", en:"I'm surprised by your strength.", fr:"Je suis étonné par ta force." },
    root:"ДИВ", cat:"عواطف"
  },
  {
    nsv:"беспокоиться", sv:"забеспокоиться",
    imp:"беспокойся, беспокойтесь / забеспокойся, забеспокойтесь",
    meaning:{ ru:"беспокоиться", ar:"يقلق", en:"to worry", fr:"s'inquiéter" },
    example:{ ru:"Мама беспокоится о детях.", ar:"الأم تقلق على الأطفال.", en:"Mom worries about the children.", fr:"Maman s'inquiète pour les enfants." },
    root:"ПОКОЙ", cat:"عواطف"
  },
  {
    nsv:"улыбаться", sv:"улыбнуться",
    imp:"улыбайся, улыбайтесь / улыбнись, улыбнитесь",
    meaning:{ ru:"улыбаться", ar:"يبتسم", en:"to smile", fr:"sourire" },
    example:{ ru:"Ребёнок улыбается маме.", ar:"الطفل يبتسم لأمه.", en:"The baby smiles at mom.", fr:"Le bébé sourit à sa maman." },
    root:"ЛЫБ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"светать", sv:"рассвести",
    imp:"— (безличный)",
    meaning:{ ru:"светать", ar:"ينبلج الصباح", en:"to dawn", fr:"poindre (jour)" },
    example:{ ru:"На востоке уже светает.", ar:"في الشرق بدأ الصباح يطلع.", en:"It's already dawning in the east.", fr:"Le jour se lève déjà à l'est." },
    root:"СВЕТ", cat:"طبيعة"
  },
  {
    nsv:"морозить (безлично)", sv:"заморозить",
    imp:"— (безличный)",
    meaning:{ ru:"морозить", ar:"يصقيع / يبرد بشدة", en:"to freeze (weather)", fr:"geler (météo)" },
    example:{ ru:"Сегодня на улице морозит.", ar:"النهاردة بره بيسقع.", en:"It's freezing outside today.", fr:"Il gèle dehors aujourd'hui." },
    root:"МОРОЗ", cat:"طبيعة"
  },
  {
    nsv:"таять (снег)", sv:"растаять",
    imp:"— (безличный или тай, тайте)",
    meaning:{ ru:"таять", ar:"يذوب (الثلج)", en:"to melt (snow/ice)", fr:"fondre (neige)" },
    example:{ ru:"Снеговик растаял на солнце.", ar:"رجل الثلج ذاب في الشمس.", en:"The snowman melted in the sun.", fr:"Le bonhomme de neige a fondu au soleil." },
    root:"ТА", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"чихать", sv:"чихнуть",
    imp:"чихай, чихайте / чихни, чихните",
    meaning:{ ru:"чихать", ar:"يعطس", en:"to sneeze", fr:"éternuer" },
    example:{ ru:"Я громко чихнул.", ar:"عطست بصوت عالي.", en:"I sneezed loudly.", fr:"J'ai éternué bruyamment." },
    root:"ЧИХ", cat:"صحة"
  },
  {
    nsv:"знобить", sv:"зазнобить",
    imp:"— (безличный)",
    meaning:{ ru:"знобить", ar:"يرتجف من البرد", en:"to have chills", fr:"frissonner (de froid)" },
    example:{ ru:"Больного знобит.", ar:"المريض يرتجف من البرد.", en:"The patient has chills.", fr:"Le malade a des frissons." },
    root:"ЗНОБ", cat:"صحة"
  },
  {
    nsv:"лечить", sv:"вылечить",
    imp:"лечи, лечите / вылечи, вылечите",
    meaning:{ ru:"лечить", ar:"يعالج / يشفي", en:"to treat / heal", fr:"soigner / guérir" },
    example:{ ru:"Врач лечит больного.", ar:"الطبيب يعالج المريض.", en:"The doctor treats the patient.", fr:"Le médecin soigne le malade." },
    root:"ЛЕЧ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"гостить", sv:"погостить",
    imp:"гости, гостите / погости, погостите",
    meaning:{ ru:"гостить", ar:"يبيت كضيف", en:"to stay (as a guest)", fr:"séjourner (comme invité)" },
    example:{ ru:"Мы гостим у бабушки в деревне.", ar:"نقيم عند الجدة في القرية.", en:"We stay at grandma's in the country.", fr:"Nous séjournons chez grand-mère à la campagne." },
    root:"ГОСТ", cat:"علاقات"
  },
  {
    nsv:"угождать", sv:"угодить",
    imp:"угождай, угождайте / угоди, угодите",
    meaning:{ ru:"угождать", ar:"يرضي / يدلل", en:"to please / indulge", fr:"complaire / gâter" },
    example:{ ru:"Трудно всем угодить.", ar:"من الصعب إرضاء الجميع.", en:"It's hard to please everyone.", fr:"Il est difficile de plaire à tout le monde." },
    root:"ГОД", cat:"علاقات"
  },
  {
    nsv:"ссориться", sv:"поссориться",
    imp:"ссорься, ссорьтесь / поссорься, поссорьтесь",
    meaning:{ ru:"ссориться", ar:"يتخاصم", en:"to quarrel", fr:"se disputer" },
    example:{ ru:"Братья часто ссорятся из-за игрушек.", ar:"الإخوة يتخاصمون كثيراً بسبب الألعاب.", en:"Brothers often quarrel over toys.", fr:"Les frères se disputent souvent pour les jouets." },
    root:"ССОР", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"подключаться", sv:"подключиться",
    imp:"подключайся, подключайтесь / подключись, подключитесь",
    meaning:{ ru:"подключаться", ar:"يتصل (بالإنترنت)", en:"to connect (to a network)", fr:"se connecter (à un réseau)" },
    example:{ ru:"Я подключаюсь к Wi-Fi.", ar:"أتصل بالواي فاي.", en:"I connect to Wi-Fi.", fr:"Je me connecte au Wi-Fi." },
    root:"КЛЮЧ", cat:"تقنية"
  },
  {
    nsv:"настраивать", sv:"настроить",
    imp:"настраивай, настраивайте / настрой, настройте",
    meaning:{ ru:"настраивать (устройство)", ar:"يضبط الإعدادت", en:"to configure / set up", fr:"configurer" },
    example:{ ru:"Он настраивает новый телефон.", ar:"يضبط إعدادات التليفون الجديد.", en:"He is setting up the new phone.", fr:"Il configure le nouveau téléphone." },
    root:"СТРО", cat:"تقنية"
  },
  {
    nsv:"перезагружать", sv:"перезагрузить",
    imp:"перезагружай, перезагружайте / перезагрузи, перезагрузите",
    meaning:{ ru:"перезагружать", ar:"يعيد تشغيل", en:"to reboot / restart", fr:"redémarrer" },
    example:{ ru:"Перезагрузи компьютер.", ar:"أعد تشغيل الكمبيوتر.", en:"Reboot the computer.", fr:"Redémarre l'ordinateur." },
    root:"ГРУЗ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"читать вслух", sv:"прочитать вслух",
    imp:"читай вслух, читайте вслух / прочитай вслух, прочитайте вслух",
    meaning:{ ru:"читать вслух", ar:"يقرأ بصوت عالي", en:"to read aloud", fr:"lire à haute voix" },
    example:{ ru:"Учитель просит читать вслух.", ar:"المعلم يطلب القراءة بصوت عالي.", en:"The teacher asks to read aloud.", fr:"Le professeur demande de lire à haute voix." },
    root:"ЧИТ", cat:"تعليم"
  },
  {
    nsv:"проверять (тетради)", sv:"проверить",
    imp:"проверяй, проверяйте / проверь, проверьте",
    meaning:{ ru:"проверять (тетради)", ar:"يصحح (الواجبات)", en:"to check (notebooks)", fr:"corriger (les cahiers)" },
    example:{ ru:"Учитель проверяет тетради.", ar:"المعلم يصحح الدفاتر.", en:"The teacher checks the notebooks.", fr:"Le professeur corrige les cahiers." },
    root:"ВЕР", cat:"تعليم"
  },
  {
    nsv:"сдавать (экзамен)", sv:"сдать",
    imp:"сдавай, сдавайте / сдай, сдайте",
    meaning:{ ru:"сдавать (экзамен)", ar:"يجتاز امتحاناً", en:"to pass an exam", fr:"réussir un examen" },
    example:{ ru:"Я сдал экзамен на отлично.", ar:"اجتزت الامتحان بامتياز.", en:"I passed the exam with excellence.", fr:"J'ai réussi l'examen avec mention." },
    root:"ДА", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"задолжать", sv:"задолжать",
    imp:"задолжай, задолжайте / задолжай, задолжайте",
    meaning:{ ru:"задолжать", ar:"يصبح مديوناً", en:"to owe money", fr:"devoir de l'argent" },
    example:{ ru:"Он задолжал банку большую сумму.", ar:"أصبح مديوناً للبنك بمبلغ كبير.", en:"He owes the bank a large sum.", fr:"Il doit une grosse somme à la banque." },
    root:"ДОЛЖ", cat:"اقتصاد"
  },
  {
    nsv:"откладывать (деньги)", sv:"отложить",
    imp:"откладывай, откладывайте / отложи, отложите",
    meaning:{ ru:"откладывать (сбережения)", ar:"يدخر (فلوس)", en:"to save up (money)", fr:"épargner (argent)" },
    example:{ ru:"Мы откладываем деньги на отпуск.", ar:"ندخر فلوس للأجازة.", en:"We are saving money for the vacation.", fr:"Nous épargnons pour les vacances." },
    root:"ЛАГ", cat:"اقتصاد"
  },
  {
    nsv:"тратить (время)", sv:"потратить",
    imp:"трать, тратьте / потрать, потратьте",
    meaning:{ ru:"тратить (время)", ar:"يضيع وقتاً", en:"to spend (time)", fr:"perdre (du temps)" },
    example:{ ru:"Не трать время попусту.", ar:"لا تضيع الوقت سدى.", en:"Don't waste time.", fr:"Ne perds pas ton temps." },
    root:"ТРАТ", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"голосовать", sv:"проголосовать",
    imp:"голосуй, голосуйте / проголосуй, проголосуйте",
    meaning:{ ru:"голосовать", ar:"يصوت (انتخابات)", en:"to vote", fr:"voter" },
    example:{ ru:"Я голосую за этого кандидата.", ar:"أصوت لهذا المرشح.", en:"I vote for this candidate.", fr:"Je vote pour ce candidat." },
    root:"ГОЛОС", cat:"قانون"
  },
  {
    nsv:"ратифицировать", sv:"ратифицировать",
    imp:"ратифицируй, ратифицируйте / ратифицируй, ратифицируйте",
    meaning:{ ru:"ратифицировать", ar:"يصدق (معاهدة)", en:"to ratify", fr:"ratifier" },
    example:{ ru:"Парламент ратифицировал договор.", ar:"البرلمان صدّق على المعاهدة.", en:"Parliament ratified the treaty.", fr:"Le Parlement a ratifié le traité." },
    root:"РАТИФ", cat:"قانون"
  },
  {
    nsv:"конфисковывать", sv:"конфисковать",
    imp:"конфисковывай, конфисковывайте / конфискуй, конфискуйте",
    meaning:{ ru:"конфисковывать", ar:"يصادر", en:"to confiscate", fr:"confisquer" },
    example:{ ru:"Таможня конфисковала запрещённый товар.", ar:"الجمارك صادرت البضاعة الممنوعة.", en:"Customs confiscated the prohibited goods.", fr:"La douane a confisqué la marchandise interdite." },
    root:"КОНФИСК", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"растягиваться", sv:"растянуться",
    imp:"растягивайся, растягивайтесь / растянись, растянитесь",
    meaning:{ ru:"растягиваться", ar:"يمطط عضلاته", en:"to stretch (muscles)", fr:"s'étirer (muscles)" },
    example:{ ru:"Перед бегом обязательно растянись.", ar:"قبل الجري لازم تمطط نفسك.", en:"Be sure to stretch before running.", fr:"Étire-toi bien avant de courir." },
    root:"ТЯГ", cat:"رياضة"
  },
  {
    nsv:"бросать (мяч)", sv:"бросить",
    imp:"бросай, бросайте / брось, бросьте",
    meaning:{ ru:"бросать (мяч)", ar:"يرمي الكرة", en:"to throw (ball)", fr:"lancer (balle)" },
    example:{ ru:"Бросай мяч мне!", ar:"ارمي الكرة لي!", en:"Throw the ball to me!", fr:"Lance-moi le ballon !" },
    root:"БРОС", cat:"رياضة"
  },
  {
    nsv:"отжиматься", sv:"отжаться",
    imp:"отжимайся, отжимайтесь / отожмись, отожмитесь",
    meaning:{ ru:"отжиматься", ar:"يعمل تمرين ضغط", en:"to do push-ups", fr:"faire des pompes" },
    example:{ ru:"Я могу отжаться 50 раз.", ar:"أقدر أعمل تمرين ضغط 50 مرة.", en:"I can do 50 push-ups.", fr:"Je peux faire 50 pompes." },
    root:"ЖИМ", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"красить", sv:"покрасить",
    imp:"крась, красьте / покрась, покрасьте",
    meaning:{ ru:"красить", ar:"يصبغ / يلون", en:"to paint / dye", fr:"peindre / teindre" },
    example:{ ru:"Он красит забор в зелёный.", ar:"بيصبغ السور باللون الأخضر.", en:"He paints the fence green.", fr:"Il peint la clôture en vert." },
    root:"КРАС", cat:"فن"
  },
  {
    nsv:"вышивать", sv:"вышить",
    imp:"вышивай, вышивайте / вышей, вышейте",
    meaning:{ ru:"вышивать", ar:"يطرز", en:"to embroider", fr:"broder" },
    example:{ ru:"Бабушка вышивает подушку.", ar:"الجدة تطرز مخدة.", en:"Grandma embroiders a pillow.", fr:"Grand-mère brode un coussin." },
    root:"ШИВ", cat:"فن"
  },
  {
    nsv:"репетировать", sv:"отрепетировать",
    imp:"репетируй, репетируйте / отрепетируй, отрепетируйте",
    meaning:{ ru:"репетировать", ar:"يتدرب على العرض", en:"to rehearse", fr:"répéter" },
    example:{ ru:"Оркестр репетирует симфонию.", ar:"الأوركسترا يتدربون على السيمفونية.", en:"The orchestra rehearses the symphony.", fr:"L'orchestre répète la symphonie." },
    root:"РЕПЕТ", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"обстреливать", sv:"обстрелять",
    imp:"обстреливай, обстреливайте / обстреляй, обстреляйте",
    meaning:{ ru:"обстреливать", ar:"يقصف (بالنار)", en:"to shell / fire upon", fr:"bombarder / tirer sur" },
    example:{ ru:"Противник обстреливает наши позиции.", ar:"العدو يقصف مواقعنا.", en:"The enemy shells our positions.", fr:"L'ennemi bombarde nos positions." },
    root:"СТРЕЛ", cat:"عسكرية"
  },
  {
    nsv:"минировать", sv:"заминировать",
    imp:"минируй, минируйте / заминируй, заминируйте",
    meaning:{ ru:"минировать", ar:"يزرع ألغاماً", en:"to mine (lay mines)", fr:"miner (poser des mines)" },
    example:{ ru:"Террористы заминировали мост.", ar:"الإرهابيون زرعوا ألغاماً في الجسر.", en:"The terrorists mined the bridge.", fr:"Les terroristes ont miné le pont." },
    root:"МИН", cat:"عسكرية"
  },
  {
    nsv:"допрашивать", sv:"допросить",
    imp:"допрашивай, допрашивайте / допроси, допросите",
    meaning:{ ru:"допрашивать", ar:"يستجوب", en:"to interrogate", fr:"interroger" },
    example:{ ru:"Следователь допрашивает свидетеля.", ar:"المحقق يستجوب الشاهد.", en:"The investigator interrogates the witness.", fr:"L'enquêteur interroge le témoin." },
    root:"ПРОС", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"взбираться", sv:"взобраться",
    imp:"взбирайся, взбирайтесь / взберись, взберитесь",
    meaning:{ ru:"взбираться", ar:"يتسلق صعوداً", en:"to climb up", fr:"grimper (en haut)" },
    example:{ ru:"Альпинист взбирается на скалу.", ar:"المتسلق يطلع على الصخرة.", en:"The climber climbs up the rock.", fr:"L'alpiniste grimpe sur le rocher." },
    root:"БИР", cat:"حركة"
  },
  {
    nsv:"переплывать", sv:"переплыть",
    imp:"переплывай, переплывайте / переплыви, переплывите",
    meaning:{ ru:"переплывать", ar:"يعبر سباحة", en:"to swim across", fr:"traverser à la nage" },
    example:{ ru:"Он переплыл реку за полчаса.", ar:"عبر النهر سباحة في نصف ساعة.", en:"He swam across the river in half an hour.", fr:"Il a traversé la rivière à la nage en une demi‑heure." },
    root:"ПЛЫ", cat:"حركة"
  },
  {
    nsv:"спускаться", sv:"спуститься",
    imp:"спускайся, спускайтесь / спустись, спуститесь",
    meaning:{ ru:"спускаться", ar:"ينزل", en:"to descend / go down", fr:"descendre" },
    example:{ ru:"Лифт спускается на первый этаж.", ar:"المصعد ينزل للدور الأول.", en:"The elevator goes down to the first floor.", fr:"L'ascenseur descend au rez‑de‑chaussée." },
    root:"ПУСК", cat:"حركة"
  },
  {
    nsv:"приближаться", sv:"приблизиться",
    imp:"приближайся, приближайтесь / приблизься, приблизьтесь",
    meaning:{ ru:"приближаться", ar:"يقترب", en:"to approach / come closer", fr:"s'approcher" },
    example:{ ru:"Поезд приближается к станции.", ar:"القطار يقترب من المحطة.", en:"The train approaches the station.", fr:"Le train s'approche de la gare." },
    root:"БЛИЖ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"разглядывать", sv:"разглядеть",
    imp:"разглядывай, разглядывайте / разгляди, разглядите",
    meaning:{ ru:"разглядывать", ar:"يتفحص بالنظر", en:"to scrutinize / examine visually", fr:"examiner (du regard)" },
    example:{ ru:"Он разглядывает старую монету.", ar:"بيتفحص عملة قديمة.", en:"He scrutinizes the old coin.", fr:"Il examine la vieille pièce." },
    root:"ГЛЯД", cat:"حواس"
  },
  {
    nsv:"вслушиваться", sv:"вслушаться",
    imp:"вслушивайся, вслушивайтесь / вслушайся, вслушайтесь",
    meaning:{ ru:"вслушиваться", ar:"يصغي بإنصات", en:"to listen intently", fr:"écouter attentivement" },
    example:{ ru:"Врач вслушивается в дыхание больного.", ar:"الطبيب يصغي لتنفس المريض.", en:"The doctor listens intently to the patient's breathing.", fr:"Le médecin écoute attentivement la respiration du patient." },
    root:"СЛУШ", cat:"حواس"
  },
  {
    nsv:"прикасаться", sv:"прикоснуться",
    imp:"прикасайся, прикасайтесь / прикоснись, прикоснитесь",
    meaning:{ ru:"прикасаться", ar:"يلمس بلطف", en:"to touch gently", fr:"toucher doucement" },
    example:{ ru:"Не прикасайся к горячей плите.", ar:"لا تلمس البوتاجاز السخن.", en:"Don't touch the hot stove.", fr:"Ne touche pas la cuisinière chaude." },
    root:"КАС", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"бормотать", sv:"пробормотать",
    imp:"бормочи, бормочите / пробормочи, пробормочите",
    meaning:{ ru:"бормотать", ar:"يغمغم", en:"to mutter", fr:"marmonner" },
    example:{ ru:"Старик бормочет себе под нос.", ar:"العجوز بيغمغم لنفسه.", en:"The old man mutters to himself.", fr:"Le vieil homme marmonne entre ses dents." },
    root:"БОРМОТ", cat:"تواصل"
  },
  {
    nsv:"орать", sv:"заорать",
    imp:"ори, орите / заори, заорите",
    meaning:{ ru:"орать", ar:"يصيح بصوت عالي جداً", en:"to yell / holler", fr:"hurler / brailler" },
    example:{ ru:"Не ори на меня!", ar:"ما تصحش فيا!", en:"Don't yell at me!", fr:"Ne me hurle pas dessus !" },
    root:"ОР", cat:"تواصل"
  },
  {
    nsv:"намекать", sv:"намекнуть",
    imp:"намекай, намекайте / намекни, намекните",
    meaning:{ ru:"намекать", ar:"يلمح", en:"to hint", fr:"faire allusion" },
    example:{ ru:"Она намекнула на сюрприз.", ar:"لمحت للمفاجأة.", en:"She hinted at a surprise.", fr:"Elle a fait allusion à une surprise." },
    root:"МЕК", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"осознавать", sv:"осознать",
    imp:"осознавай, осознавайте / осознай, осознайте",
    meaning:{ ru:"осознавать", ar:"يدرك / يستوعب", en:"to realize / become aware", fr:"réaliser / prendre conscience" },
    example:{ ru:"Он осознал свою ошибку.", ar:"أدرك غلطته.", en:"He realized his mistake.", fr:"Il a réalisé son erreur." },
    root:"ЗНА", cat:"ذهنية"
  },
  {
    nsv:"обдумывать", sv:"обдумать",
    imp:"обдумывай, обдумывайте / обдумай, обдумайте",
    meaning:{ ru:"обдумывать", ar:"يدرس الأمر بعقله", en:"to think over", fr:"réfléchir à" },
    example:{ ru:"Я обдумываю твоё предложение.", ar:"بدرس اقتراحك.", en:"I'm thinking over your proposal.", fr:"Je réfléchis à ta proposition." },
    root:"ДУМ", cat:"ذهنية"
  },
  {
    nsv:"планировать", sv:"запланировать",
    imp:"планируй, планируйте / запланируй, запланируйте",
    meaning:{ ru:"планировать", ar:"يخطط", en:"to plan", fr:"planifier" },
    example:{ ru:"Мы планируем поездку на море.", ar:"بنخطط لرحلة للبحر.", en:"We are planning a trip to the sea.", fr:"Nous planifions un voyage à la mer." },
    root:"ПЛАН", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"зашивать", sv:"зашить",
    imp:"зашивай, зашивайте / зашей, зашейте",
    meaning:{ ru:"зашивать", ar:"يرتق / يخيط فتحة", en:"to sew up / mend", fr:"recoudre / raccommoder" },
    example:{ ru:"Мама зашила дырку на штанах.", ar:"ماما رتقت الفتحة في البنطلون.", en:"Mom sewed up the hole in the trousers.", fr:"Maman a recousu le trou du pantalon." },
    root:"ШИВ", cat:"عمل"
  },
  {
    nsv:"накрывать (на стол)", sv:"накрыть",
    imp:"накрывай, накрывайте / накрой, накройте",
    meaning:{ ru:"накрывать на стол", ar:"يجهز المائدة", en:"to set the table", fr:"mettre la table" },
    example:{ ru:"Помоги накрыть на стол.", ar:"ساعدني أجهز السفرة.", en:"Help set the table.", fr:"Aide à mettre la table." },
    root:"КРЫ", cat:"عمل"
  },
  {
    nsv:"упаковывать", sv:"упаковать",
    imp:"упаковывай, упаковывайте / упакуй, упакуйте",
    meaning:{ ru:"упаковывать", ar:"يغلف / يحزم", en:"to pack / wrap", fr:"emballer" },
    example:{ ru:"Я упаковываю подарок.", ar:"بغلف الهدية.", en:"I'm wrapping the gift.", fr:"J'emballe le cadeau." },
    root:"ПАК", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"тронуться (сердцем)", sv:"тронуть",
    imp:"тронься, троньтесь / тронь, троньте",
    meaning:{ ru:"тронуть (эмоционально)", ar:"يتأثر عاطفياً", en:"to be moved (emotionally)", fr:"être touché (émotionnellement)" },
    example:{ ru:"Её рассказ тронул меня до слёз.", ar:"حكايتها أثرت فيا لدرجة الدموع.", en:"Her story moved me to tears.", fr:"Son récit m'a ému aux larmes." },
    root:"ТРОГ", cat:"عواطف"
  },
  {
    nsv:"негодовать", sv:"занегодовать",
    imp:"негодуй, негодуйте / занегодуй, занегодуйте",
    meaning:{ ru:"негодовать", ar:"يستاء بشدة", en:"to be indignant", fr:"s'indigner" },
    example:{ ru:"Жители негодуют из‑за шума.", ar:"السكان مستاؤون بشدة من الضوضاء.", en:"The residents are indignant about the noise.", fr:"Les habitants s'indignent du bruit." },
    root:"ГОД", cat:"عواطف"
  },
  {
    nsv:"скучать (по кому‑то)", sv:"заскучать",
    imp:"скучай, скучайте / заскучай, заскучайте",
    meaning:{ ru:"скучать по кому‑то", ar:"يشتاق لشخص", en:"to miss someone", fr:"s'ennuyer de quelqu'un" },
    example:{ ru:"Я скучаю по родителям.", ar:"أشتاق لوالديّ.", en:"I miss my parents.", fr:"Mes parents me manquent." },
    root:"СКУЧ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"испаряться", sv:"испариться",
    imp:"испаряйся, испаряйтесь / испарись, испаритесь",
    meaning:{ ru:"испаряться", ar:"يتبخر", en:"to evaporate", fr:"s'évaporer" },
    example:{ ru:"Вода быстро испаряется на солнце.", ar:"المية بتتبخر بسرعة في الشمس.", en:"Water evaporates quickly in the sun.", fr:"L'eau s'évapore vite au soleil." },
    root:"ПАР", cat:"طبيعة"
  },
  {
    nsv:"замерзать", sv:"замёрзнуть",
    imp:"замерзай, замерзайте / замёрзни, замёрзните",
    meaning:{ ru:"замерзать", ar:"يتجمد", en:"to freeze (liquid)", fr:"geler (liquide)" },
    example:{ ru:"Озеро замерзает зимой.", ar:"البحيرة بتتجمد في الشتا.", en:"The lake freezes in winter.", fr:"Le lac gèle en hiver." },
    root:"МЕРЗ", cat:"طبيعة"
  },
  {
    nsv:"цвести", sv:"зацвести",
    imp:"цвети, цветите / зацвети, зацветите",
    meaning:{ ru:"цвести (о растениях)", ar:"يزهر (النبات)", en:"to blossom", fr:"fleurir" },
    example:{ ru:"В саду цветут розы.", ar:"الورد مزهر في الجنينة.", en:"Roses are blooming in the garden.", fr:"Les roses fleurissent dans le jardin." },
    root:"ЦВЕТ", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"осматривать (пациента)", sv:"осмотреть",
    imp:"осматривай, осматривайте / осмотри, осмотрите",
    meaning:{ ru:"осматривать (пациента)", ar:"يفحص (المريض)", en:"to examine (a patient)", fr:"examiner (un patient)" },
    example:{ ru:"Врач осматривает горло.", ar:"الدكتور بيفحص الزور.", en:"The doctor examines the throat.", fr:"Le médecin examine la gorge." },
    root:"СМОТР", cat:"صحة"
  },
  {
    nsv:"заживать", sv:"зажить",
    imp:"заживай, заживайте / заживи, заживите",
    meaning:{ ru:"заживать (рана)", ar:"يلتئم (الجرح)", en:"to heal (wound)", fr:"cicatriser" },
    example:{ ru:"Рана быстро заживает.", ar:"الجرح بيلتئم بسرعة.", en:"The wound is healing quickly.", fr:"La blessure cicatrise vite." },
    root:"ЖИ", cat:"صحة"
  },
  {
    nsv:"тошнить", sv:"затошнить",
    imp:"— (безличный)",
    meaning:{ ru:"тошнить", ar:"يشعر بالغثيان", en:"to feel nauseous", fr:"avoir la nausée" },
    example:{ ru:"Меня тошнит от этой еды.", ar:"حاسس بغثيان من الأكل ده.", en:"This food makes me nauseous.", fr:"Cette nourriture me donne la nausée." },
    root:"ТОШН", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"примиряться", sv:"примириться",
    imp:"примиряйся, примиряйтесь / примирись, примиритесь",
    meaning:{ ru:"примиряться", ar:"يتصالح / يتقبل", en:"to reconcile / accept", fr:"se réconcilier / accepter" },
    example:{ ru:"После долгой ссоры они примирились.", ar:"بعد خلاف طويل تصالحوا.", en:"After a long quarrel they reconciled.", fr:"Après une longue dispute ils se sont réconciliés." },
    root:"МИР", cat:"علاقات"
  },
  {
    nsv:"уважать", sv:"уважить",
    imp:"уважай, уважайте / уважь, уважьте",
    meaning:{ ru:"уважать", ar:"يحترم", en:"to respect", fr:"respecter" },
    example:{ ru:"Ты должен уважать старших.", ar:"لازم تحترم الكبار.", en:"You must respect elders.", fr:"Tu dois respecter les aînés." },
    root:"ВАЖ", cat:"علاقات"
  },
  {
    nsv:"приветствовать", sv:"поприветствовать",
    imp:"приветствуй, приветствуйте / поприветствуй, поприветствуйте",
    meaning:{ ru:"приветствовать", ar:"يحيي / يرحب", en:"to greet", fr:"saluer" },
    example:{ ru:"Президент приветствует гостей.", ar:"الرئيس بيحيي الضيوف.", en:"The president greets the guests.", fr:"Le président salue les invités." },
    root:"ВЕТ", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"форматировать", sv:"отформатировать",
    imp:"форматируй, форматируйте / отформатируй, отформатируйте",
    meaning:{ ru:"форматировать", ar:"يهيئ / يفرمت", en:"to format", fr:"formater" },
    example:{ ru:"Не забудь отформатировать флешку.", ar:"ما تنساش تفرمت الفلاشة.", en:"Don't forget to format the flash drive.", fr:"N'oublie pas de formater la clé USB." },
    root:"ФОРМ", cat:"تقنية"
  },
  {
    nsv:"логиниться", sv:"залогиниться",
    imp:"логинься, логиньтесь / залогинься, залогиньтесь",
    meaning:{ ru:"логиниться", ar:"يسجل الدخول (حساب)", en:"to log in", fr:"se connecter (compte)" },
    example:{ ru:"Я логинюсь в приложение.", ar:"بسجل دخولي في التطبيق.", en:"I log in to the app.", fr:"Je me connecte à l'application." },
    root:"ЛОГ", cat:"تقنية"
  },
  {
    nsv:"удалять", sv:"удалить",
    imp:"удаляй, удаляйте / удали, удалите",
    meaning:{ ru:"удалять (файл)", ar:"يحذف (ملفاً)", en:"to delete (a file)", fr:"supprimer (un fichier)" },
    example:{ ru:"Я случайно удалил фото.", ar:"حذفت الصورة بالغلط.", en:"I accidentally deleted the photo.", fr:"J'ai accidentellement supprimé la photo." },
    root:"ДАЛ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"заучивать", sv:"заучить",
    imp:"заучивай, заучивайте / заучи, заучите",
    meaning:{ ru:"заучивать", ar:"يحفظ عن ظهر قلب", en:"to memorize", fr:"mémoriser" },
    example:{ ru:"Актёр заучивает роль.", ar:"الممثل بيحفظ الدور.", en:"The actor memorizes the role.", fr:"L'acteur mémorise son rôle." },
    root:"УЧ", cat:"تعليم"
  },
  {
    nsv:"преподавать", sv:"преподать",
    imp:"преподавай, преподавай / преподай, преподайте",
    meaning:{ ru:"преподавать", ar:"يدرس (في الجامعة)", en:"to teach (academically)", fr:"enseigner (à l'université)" },
    example:{ ru:"Профессор преподаёт физику.", ar:"الأستاذ بيدرس الفيزياء.", en:"The professor teaches physics.", fr:"Le professeur enseigne la physique." },
    root:"ДА", cat:"تعليم"
  },
  {
    nsv:"иллюстрировать", sv:"проиллюстрировать",
    imp:"иллюстрируй, иллюстрируйте / проиллюстрируй, проиллюстрируйте",
    meaning:{ ru:"иллюстрировать", ar:"يصور / يرسم توضيحاً", en:"to illustrate", fr:"illustrer" },
    example:{ ru:"Художник иллюстрирует книгу.", ar:"الرسام يرسم توضيحات للكتاب.", en:"The artist illustrates the book.", fr:"L'artiste illustre le livre." },
    root:"ЛЮСТР", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"наследовать", sv:"унаследовать",
    imp:"наследуй, наследуйте / унаследуй, унаследуйте",
    meaning:{ ru:"наследовать", ar:"يرث", en:"to inherit", fr:"hériter" },
    example:{ ru:"Он унаследовал дом от деда.", ar:"ورث البيت من جده.", en:"He inherited the house from his grandfather.", fr:"Il a hérité la maison de son grand‑père." },
    root:"СЛЕД", cat:"اقتصاد"
  },
  {
    nsv:"страховать", sv:"застраховать",
    imp:"страхуй, страхуйте / застрахуй, застрахуйте",
    meaning:{ ru:"страховать", ar:"يؤمّن (على)", en:"to insure", fr:"assurer" },
    example:{ ru:"Мы застраховали машину от угона.", ar:"أمنا على العربية من السرقة.", en:"We insured the car against theft.", fr:"Nous avons assuré la voiture contre le vol." },
    root:"СТРАХ", cat:"اقتصاد"
  },
  {
    nsv:"обанкротиться", sv:"обанкротиться",
    imp:"обанкроться, обанкротьтесь / обанкроться, обанкротьтесь",
    meaning:{ ru:"обанкротиться", ar:"يعلن إفلاسه", en:"to go bankrupt", fr:"faire faillite" },
    example:{ ru:"Компания обанкротилась из‑за долгов.", ar:"الشركة أعلنت إفلاسها بسبب الديون.", en:"The company went bankrupt due to debts.", fr:"L'entreprise a fait faillite à cause des dettes." },
    root:"БАНКРОТ", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"свидетельствовать", sv:"засвидетельствовать",
    imp:"свидетельствуй, свидетельствуйте / засвидетельствуй, засвидетельствуйте",
    meaning:{ ru:"свидетельствовать", ar:"يشهد (في محكمة)", en:"to testify", fr:"témoigner" },
    example:{ ru:"Он свидетельствовал против обвиняемого.", ar:"شهد ضد المتهم.", en:"He testified against the accused.", fr:"Il a témoigné contre l'accusé." },
    root:"СВИДЕТ", cat:"قانون"
  },
  {
    nsv:"арестовывать", sv:"арестовать",
    imp:"арестовывай, арестовывайте / арестуй, арестуйте",
    meaning:{ ru:"арестовывать", ar:"يعتقل", en:"to arrest", fr:"arrêter" },
    example:{ ru:"Полиция арестовала преступника.", ar:"البوليس قبض على المجرم.", en:"The police arrested the criminal.", fr:"La police a arrêté le criminel." },
    root:"АРЕСТ", cat:"قانون"
  },
  {
    nsv:"голосовать (за)", sv:"проголосовать",
    imp:"голосуй, голосуйте / проголосуй, проголосуйте",
    meaning:{ ru:"голосовать (за кандидата)", ar:"يصوت لمرشح", en:"to vote for a candidate", fr:"voter pour un candidat" },
    example:{ ru:"Я проголосовал за независимого кандидата.", ar:"صوتت للمرشح المستقل.", en:"I voted for the independent candidate.", fr:"J'ai voté pour le candidat indépendant." },
    root:"ГОЛОС", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"приседать", sv:"присесть",
    imp:"приседай, приседайте / присядь, присядьте",
    meaning:{ ru:"приседать", ar:"يعمل قرفصاء", en:"to squat", fr:"faire des squats" },
    example:{ ru:"Тренер велит приседать 20 раз.", ar:"المدرب بيطلب نعمل قرفصاء 20 مرة.", en:"The coach says to squat 20 times.", fr:"L'entraîneur dit de faire 20 squats." },
    root:"СЕД", cat:"رياضة"
  },
  {
    nsv:"подтягиваться", sv:"подтянуться",
    imp:"подтягивайся, подтягивайтесь / подтянись, подтянитесь",
    meaning:{ ru:"подтягиваться (на турнике)", ar:"يعمل عقلة", en:"to do pull‑ups", fr:"faire des tractions" },
    example:{ ru:"Я могу подтянуться 10 раз.", ar:"أقدر أعمل عقلة 10 مرات.", en:"I can do 10 pull‑ups.", fr:"Je peux faire 10 tractions." },
    root:"ТЯГ", cat:"رياضة"
  },
  {
    nsv:"заряжаться (энергией)", sv:"зарядиться",
    imp:"заряжайся, заряжайтесь / зарядись, зарядитесь",
    meaning:{ ru:"заряжаться (энергией)", ar:"يشحن طاقته", en:"to recharge one's batteries", fr:"recharger ses batteries" },
    example:{ ru:"Перед игрой нужно зарядиться энергией.", ar:"قبل اللعب لازم تشحن طاقتك.", en:"Before the game you need to recharge your batteries.", fr:"Avant le match il faut recharger ses batteries." },
    root:"РЯД", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"декламировать", sv:"продекламировать",
    imp:"декламируй, декламируйте / продекламируй, продекламируйте",
    meaning:{ ru:"декламировать", ar:"يلقي (شعراً)", en:"to recite (poetry)", fr:"déclamer (poésie)" },
    example:{ ru:"Актёр декламирует стихи.", ar:"الممثل بيلقي شعر.", en:"The actor recites poetry.", fr:"L'acteur déclame des poèmes." },
    root:"ДЕКЛАМ", cat:"فن"
  },
  {
    nsv:"записывать (музыку)", sv:"записать",
    imp:"записывай, записывайте / запиши, запишите",
    meaning:{ ru:"записывать (музыку)", ar:"يسجل (صوتاً)", en:"to record (music)", fr:"enregistrer (musique)" },
    example:{ ru:"Группа записывает новый альбом.", ar:"الفرقة بتسجل ألبوم جديد.", en:"The band is recording a new album.", fr:"Le groupe enregistre un nouvel album." },
    root:"ПИС", cat:"فن"
  },
  {
    nsv:"монтировать", sv:"смонтировать",
    imp:"монтируй, монтируйте / смонтируй, смонтируйте",
    meaning:{ ru:"монтировать (видео)", ar:"يحرر فيديو", en:"to edit (video)", fr:"monter (vidéo)" },
    example:{ ru:"Режиссёр монтирует фильм.", ar:"المخرج بيحرر الفيلم.", en:"The director edits the film.", fr:"Le réalisateur monte le film." },
    root:"МОНТАЖ", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"разминировать", sv:"разминировать",
    imp:"разминируй, разминируйте / разминируй, разминируйте",
    meaning:{ ru:"разминировать", ar:"يزيل الألغام", en:"to clear of mines", fr:"déminer" },
    example:{ ru:"Сапёры разминируют поле.", ar:"خبراء المفرقعات بيشيلوا الألغام من الحقل.", en:"Sappers clear the field of mines.", fr:"Les démineurs déminent le champ." },
    root:"МИН", cat:"عسكرية"
  },
  {
    nsv:"бомбить", sv:"разбомбить",
    imp:"бомби, бомбите / разбомби, разбомбите",
    meaning:{ ru:"бомбить", ar:"يقصف (بالقنابل)", en:"to bomb", fr:"bombarder" },
    example:{ ru:"Самолёты бомбили вражеские позиции.", ar:"الطيارات قصفت مواقع العدو.", en:"Planes bombed enemy positions.", fr:"Les avions ont bombardé les positions ennemies." },
    root:"БОМБ", cat:"عسكرية"
  },
  {
    nsv:"разоружаться", sv:"разоружиться",
    imp:"разоружайся, разоружайтесь / разоружись, разоружитесь",
    meaning:{ ru:"разоружаться", ar:"ينزع سلاحه", en:"to disarm", fr:"se désarmer" },
    example:{ ru:"Войска согласились разоружиться.", ar:"القوات وافقت على نزع السلاح.", en:"The troops agreed to disarm.", fr:"Les troupes ont accepté de se désarmer." },
    root:"РУЖ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перелетать", sv:"перелететь",
    imp:"перелетай, перелетайте / перелети, перелетите",
    meaning:{ ru:"перелетать", ar:"يطير عبر", en:"to fly across", fr:"voler à travers" },
    example:{ ru:"Птицы перелетают через океан.", ar:"الطيور تطير عبر المحيط.", en:"Birds fly across the ocean.", fr:"Les oiseaux volent à travers l'océan." },
    root:"ЛЕТ", cat:"حركة"
  },
  {
    nsv:"подползать", sv:"подползти",
    imp:"подползай, подползайте / подползи, подползите",
    meaning:{ ru:"подползать", ar:"يزحف نحو", en:"to crawl closer", fr:"ramper vers" },
    example:{ ru:"Котёнок подполз ко мне.", ar:"القطة الصغيرة زحفت ناحيتي.", en:"The kitten crawled closer to me.", fr:"Le chaton a rampé vers moi." },
    root:"ПОЛЗ", cat:"حركة"
  },
  {
    nsv:"добираться", sv:"добраться",
    imp:"добирайся, добирайтесь / доберись, доберитесь",
    meaning:{ ru:"добираться", ar:"يصل (بعد عناء)", en:"to get (to a place)", fr:"arriver (après un trajet)" },
    example:{ ru:"Мы добрались до вершины горы.", ar:"أخيراً وصلنا لقمة الجبل.", en:"We finally got to the top of the mountain.", fr:"Nous sommes enfin arrivés au sommet de la montagne." },
    root:"БИР", cat:"حركة"
  },
  {
    nsv:"выходить (из дома)", sv:"выйти",
    imp:"выходи, выходите / выйди, выйдите",
    meaning:{ ru:"выходить", ar:"يخرج (من مكان)", en:"to go out", fr:"sortir" },
    example:{ ru:"Я выхожу на прогулку.", ar:"أخرج للتمشية.", en:"I'm going out for a walk.", fr:"Je sors me promener." },
    root:"ХОД", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"ощупывать", sv:"ощупать",
    imp:"ощупывай, ощупывайте / ощупай, ощупайте",
    meaning:{ ru:"ощупывать", ar:"يتحسس (بيديه)", en:"to feel (with hands)", fr:"palper" },
    example:{ ru:"Врач ощупывает живот пациента.", ar:"الطبيب يتحسس بطن المريض.", en:"The doctor palpates the patient's belly.", fr:"Le médecin palpe le ventre du patient." },
    root:"ЩУП", cat:"حواس"
  },
  {
    nsv:"присматриваться", sv:"присмотреться",
    imp:"присматривайся, присматривайтесь / присмотрись, присмотритесь",
    meaning:{ ru:"присматриваться", ar:"يدقق النظر", en:"to look closely", fr:"regarder attentivement" },
    example:{ ru:"Она присматривается к новому коллеге.", ar:"بتدقق النظر في زميلها الجديد.", en:"She looks closely at the new colleague.", fr:"Elle regarde attentivement le nouveau collègue." },
    root:"СМОТР", cat:"حواس"
  },
  {
    nsv:"обонять", sv:"обонять",
    imp:"обоняй, обоняйте / обоняй, обоняйте",
    meaning:{ ru:"обонять", ar:"يشم (حاسة)", en:"to smell (sense)", fr:"percevoir (odorat)" },
    example:{ ru:"Цветок приятно обонять.", ar:"الزهرة رائحتها طيبة.", en:"The flower smells nice.", fr:"La fleur sent bon." },
    root:"БОН", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"допрашивать", sv:"допросить",
    imp:"допрашивай, допрашивайте / допроси, допросите",
    meaning:{ ru:"допрашивать", ar:"يستجوب", en:"to interrogate", fr:"interroger" },
    example:{ ru:"Полиция допрашивает подозреваемого.", ar:"البوليس يستجوب المشتبه فيه.", en:"The police interrogate the suspect.", fr:"La police interroge le suspect." },
    root:"ПРОС", cat:"تواصل"
  },
  {
    nsv:"передразнивать", sv:"передразнить",
    imp:"передразнивай, передразнивайте / передразни, передразните",
    meaning:{ ru:"передразнивать", ar:"يقلد ساخراً", en:"to mimic (mockingly)", fr:"imiter (moqueur)" },
    example:{ ru:"Дети передразнивают друг друга.", ar:"الأطفال بيقلدوا بعض بسخرية.", en:"The kids mimic each other mockingly.", fr:"Les enfants s'imitent en se moquant." },
    root:"ДРАЗН", cat:"تواصل"
  },
  {
    nsv:"восклицать", sv:"воскликнуть",
    imp:"восклицай, восклицайте / воскликни, воскликните",
    meaning:{ ru:"восклицать", ar:"يصيح (تعجباً)", en:"to exclaim", fr:"s'exclamer" },
    example:{ ru:"«Как красиво!» – воскликнула она.", ar:"«ما أجمل هذا!» صاحت.", en:"«How beautiful!» she exclaimed.", fr:"« Que c'est beau ! » s'exclama-t-elle." },
    root:"КЛИК", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"забываться", sv:"забыться",
    imp:"забывайся, забывайтесь / забудься, забудьтесь",
    meaning:{ ru:"забываться", ar:"يسرح بذهنه", en:"to become lost in thought", fr:"s'absorber dans ses pensées" },
    example:{ ru:"Он забылся и опоздал на встречу.", ar:"سرح واتأخر عن الموعد.", en:"He became lost in thought and was late for the meeting.", fr:"Il s'est absorbé dans ses pensées et a été en retard." },
    root:"БЫВ", cat:"ذهنية"
  },
  {
    nsv:"концентрироваться", sv:"сконцентрироваться",
    imp:"концентрируйся, концентрируйтесь / сконцентрируйся, сконцентрируйтесь",
    meaning:{ ru:"концентрироваться", ar:"يركز", en:"to concentrate", fr:"se concentrer" },
    example:{ ru:"Спортсмен должен концентрироваться перед стартом.", ar:"الرياضي لازم يركز قبل البداية.", en:"An athlete must concentrate before the start.", fr:"L'athlète doit se concentrer avant le départ." },
    root:"ЦЕНТР", cat:"ذهنية"
  },
  {
    nsv:"предполагать", sv:"предположить",
    imp:"предполагай, предполагайте / предположи, предположите",
    meaning:{ ru:"предполагать", ar:"يفترض", en:"to assume / suppose", fr:"supposer" },
    example:{ ru:"Я предполагаю, что ты прав.", ar:"أفترض إنك على حق.", en:"I assume you are right.", fr:"Je suppose que tu as raison." },
    root:"ЛАГ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"забивать (гвоздь)", sv:"забить",
    imp:"забивай, забивайте / забей, забейте",
    meaning:{ ru:"забивать (гвоздь)", ar:"يطرق مسمار", en:"to hammer in", fr:"enfoncer (un clou)" },
    example:{ ru:"Он забивает гвоздь в стену.", ar:"بيطرق مسمار في الحيط.", en:"He hammers a nail into the wall.", fr:"Il enfonce un clou dans le mur." },
    root:"БИ", cat:"عمل"
  },
  {
    nsv:"заваривать (чай)", sv:"заварить",
    imp:"заваривай, заваривайте / завари, заварите",
    meaning:{ ru:"заваривать (чай)", ar:"يعمل شاي (بالماء الساخن)", en:"to brew (tea)", fr:"infuser (thé)" },
    example:{ ru:"Я завариваю чай каждое утро.", ar:"بعمل شاي كل صباح.", en:"I brew tea every morning.", fr:"Je prépare du thé chaque matin." },
    root:"ВАР", cat:"عمل"
  },
  {
    nsv:"выбрасывать (мусор)", sv:"выбросить",
    imp:"выбрасывай, выбрасывайте / выброси, выбросите",
    meaning:{ ru:"выбрасывать (мусор)", ar:"يرمي الزبالة", en:"to throw out trash", fr:"jeter les ordures" },
    example:{ ru:"Пора выбрасывать мусор.", ar:"حان وقت رمي الزبالة.", en:"It's time to throw out the trash.", fr:"Il est temps de jeter les ordures." },
    root:"БРОС", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"восторгаться", sv:"восторгнуться",
    imp:"восторгайся, восторгайтесь / восторгнись, восторгнитесь",
    meaning:{ ru:"восторгаться", ar:"ينبهر بشدة", en:"to be delighted", fr:"s'enthousiasmer" },
    example:{ ru:"Зрители восторгаются выступлением.", ar:"الجمهور منبهر بالعرض.", en:"The audience is delighted by the performance.", fr:"Le public est enchanté par le spectacle." },
    root:"ТОРГ", cat:"عواطف"
  },
  {
    nsv:"возмущаться", sv:"возмутиться",
    imp:"возмущайся, возмущайтесь / возмутись, возмутитесь",
    meaning:{ ru:"возмущаться", ar:"يستاء / يغضب", en:"to be outraged", fr:"s'indigner" },
    example:{ ru:"Я возмущён таким отношением!", ar:"أنا غاضب من المعاملة دي!", en:"I'm outraged by such treatment!", fr:"Je suis outré par un tel traitement !" },
    root:"МУТ", cat:"عواطف"
  },
  {
    nsv:"ликовать", sv:"заликовать",
    imp:"ликуй, ликуйте / заликуй, заликуйте",
    meaning:{ ru:"ликовать", ar:"يبتهج / يهلل", en:"to jubilate", fr:"jubiler" },
    example:{ ru:"Болельщики ликуют после победы.", ar:"المشجعون يهللون بعد الفوز.", en:"The fans jubilate after the victory.", fr:"Les supporteurs jubilent après la victoire." },
    root:"ЛИК", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"накрапывать", sv:"закрапать",
    imp:"— (безличный)",
    meaning:{ ru:"накрапывать", ar:"تنقط المطر", en:"to start drizzling", fr:"commencer à bruiner" },
    example:{ ru:"На улице накрапывает дождь.", ar:"بره المطر بدأ ينقط.", en:"It's starting to drizzle outside.", fr:"Il commence à bruiner dehors." },
    root:"КРАП", cat:"طبيعة"
  },
  {
    nsv:"просыхать", sv:"просохнуть",
    imp:"просыхай, просыхайте / просохни, просохните",
    meaning:{ ru:"просыхать", ar:"يجف (تدريجياً)", en:"to dry gradually", fr:"sécher progressivement" },
    example:{ ru:"Дорога просыхает после дождя.", ar:"الطريق بينشف بعد المطر.", en:"The road is drying after the rain.", fr:"La route sèche après la pluie." },
    root:"СЫХ", cat:"طبيعة"
  },
  {
    nsv:"зеленеть", sv:"зазеленеть",
    imp:"зеленей, зеленейте / зазеленей, зазеленейте",
    meaning:{ ru:"зеленеть", ar:"يخضر (الربيع)", en:"to become green", fr:"verdir" },
    example:{ ru:"В мае всё зеленеет.", ar:"في مايو كل حاجة بتخضر.", en:"In May everything turns green.", fr:"En mai tout verdit." },
    root:"ЗЕЛЕН", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"лечить (народными средствами)", sv:"полечить",
    imp:"лечи, лечите / полечи, полечите",
    meaning:{ ru:"лечить (народными средствами)", ar:"يداوي (بالوصفات)", en:"to treat (with home remedies)", fr:"soigner (par des remèdes)" },
    example:{ ru:"Бабушка лечила меня травами.", ar:"جدتي كانت تداويني بالأعشاب.", en:"Grandma treated me with herbs.", fr:"Grand-mère me soignait avec des herbes." },
    root:"ЛЕЧ", cat:"صحة"
  },
  {
    nsv:"поправляться", sv:"поправиться",
    imp:"поправляйся, поправляйтесь / поправься, поправьтесь",
    meaning:{ ru:"поправляться (после болезни)", ar:"يتعافى", en:"to recover", fr:"se rétablir" },
    example:{ ru:"Больной быстро поправляется.", ar:"المريض بيتعافى بسرعة.", en:"The patient recovers quickly.", fr:"Le malade se rétablit vite." },
    root:"ПРАВ", cat:"صحة"
  },
  {
    nsv:"перевязывать", sv:"перевязать",
    imp:"перевязывай, перевязывайте / перевяжи, перевяжите",
    meaning:{ ru:"перевязывать", ar:"يضمد", en:"to bandage", fr:"bander" },
    example:{ ru:"Медсестра перевязала рану.", ar:"الممرضة ضمدت الجرح.", en:"The nurse bandaged the wound.", fr:"L'infirmière a bandé la blessure." },
    root:"ВЯЗ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"обманывать", sv:"обмануть",
    imp:"обманывай, обманывайте / обмани, обманите",
    meaning:{ ru:"обманывать", ar:"يخدع", en:"to deceive", fr:"tromper" },
    example:{ ru:"Не обманывай меня.", ar:"لا تخدعني.", en:"Don't deceive me.", fr:"Ne me trompe pas." },
    root:"МАН", cat:"علاقات"
  },
  {
    nsv:"заботиться", sv:"позаботиться",
    imp:"заботься, заботьтесь / позаботься, позаботьтесь",
    meaning:{ ru:"заботиться", ar:"يهتم بـ", en:"to take care of", fr:"prendre soin de" },
    example:{ ru:"Заботься о своём здоровье.", ar:"اهتم بصحتك.", en:"Take care of your health.", fr:"Prends soin de ta santé." },
    root:"ЗАБОТ", cat:"علاقات"
  },
  {
    nsv:"мирить", sv:"помирить",
    imp:"мири, мирите / помири, помирите",
    meaning:{ ru:"мирить", ar:"يصلح بين متخاصمين", en:"to reconcile (people)", fr:"réconcilier (des personnes)" },
    example:{ ru:"Тренер мирит поссорившихся игроков.", ar:"المدرب بيصلح بين اللاعبين المتخاصمين.", en:"The coach reconciles quarrelling players.", fr:"L'entraîneur réconcilie les joueurs qui se disputent." },
    root:"МИР", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"обновлять", sv:"обновить",
    imp:"обновляй, обновляйте / обнови, обновите",
    meaning:{ ru:"обновлять", ar:"يحدّث (تطبيقاً)", en:"to update", fr:"mettre à jour" },
    example:{ ru:"Я обновляю приложение до последней версии.", ar:"بحدث التطبيق لآخر إصدار.", en:"I update the app to the latest version.", fr:"Je mets l'application à la dernière version." },
    root:"НОВ", cat:"تقنية"
  },
  {
    nsv:"входить (в систему)", sv:"войти",
    imp:"входи, входите / войди, войдите",
    meaning:{ ru:"входить (логин)", ar:"يسجل الدخول", en:"to sign in", fr:"se connecter (compte)" },
    example:{ ru:"Войдите в свою учётную запись.", ar:"سجل دخولك لحسابك.", en:"Sign in to your account.", fr:"Connectez-vous à votre compte." },
    root:"ХОД", cat:"تقنية"
  },
  {
    nsv:"вычислять", sv:"вычислить",
    imp:"вычисляй, вычисляйте / вычисли, вычислите",
    meaning:{ ru:"вычислять", ar:"يحسب (رياضياً)", en:"to calculate", fr:"calculer" },
    example:{ ru:"Компьютер быстро вычисляет сложные задачи.", ar:"الكمبيوتر بيحسب المسائل المعقدة بسرعة.", en:"The computer quickly calculates complex tasks.", fr:"L'ordinateur calcule rapidement des tâches complexes." },
    root:"ЧИСЛ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"цитировать", sv:"процитировать",
    imp:"цитируй, цитируйте / процитируй, процитируйте",
    meaning:{ ru:"цитировать", ar:"يقتبس", en:"to quote", fr:"citer" },
    example:{ ru:"В своём докладе он цитирует классиков.", ar:"في تقريره بيقتبس من الكلاسيكيين.", en:"In his report he quotes the classics.", fr:"Dans son rapport il cite les classiques." },
    root:"ЦИТ", cat:"تعليم"
  },
  {
    nsv:"переводить (текст)", sv:"перевести",
    imp:"переводи, переводите / переведи, переведите",
    meaning:{ ru:"переводить (текст)", ar:"يترجم", en:"to translate", fr:"traduire" },
    example:{ ru:"Она переводит статью с английского.", ar:"بتترجم المقال من الإنجليزي.", en:"She translates an article from English.", fr:"Elle traduit un article de l'anglais." },
    root:"ВОД", cat:"تعليم"
  },
  {
    nsv:"составлять (предложение)", sv:"составить",
    imp:"составляй, составляйте / составь, составьте",
    meaning:{ ru:"составлять (предложение)", ar:"يكوّن جملة", en:"to compose a sentence", fr:"composer une phrase" },
    example:{ ru:"Составь предложение из этих слов.", ar:"كوّن جملة من الكلمات دي.", en:"Compose a sentence from these words.", fr:"Compose une phrase avec ces mots." },
    root:"СТАВ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"копить", sv:"накопить",
    imp:"копи, копите / накопи, накопите",
    meaning:{ ru:"копить", ar:"يجمع مالاً", en:"to save up", fr:"épargner" },
    example:{ ru:"Я копю на новую машину.", ar:"بجمع فلوس عشان عربية جديدة.", en:"I'm saving up for a new car.", fr:"J'économise pour une nouvelle voiture." },
    root:"КОП", cat:"اقتصاد"
  },
  {
    nsv:"вкладывать", sv:"вложить",
    imp:"вкладывай, вкладывайте / вложи, вложите",
    meaning:{ ru:"вкладывать (деньги)", ar:"يستثمر", en:"to invest", fr:"investir" },
    example:{ ru:"Он вкладывает деньги в акции.", ar:"بيستثمر فلوسه في أسهم.", en:"He invests money in stocks.", fr:"Il investit de l'argent dans des actions." },
    root:"КЛАД", cat:"اقتصاد"
  },
  {
    nsv:"банкротиться", sv:"обанкротиться",
    imp:"банкроться, банкротьтесь / обанкроться, обанкротьтесь",
    meaning:{ ru:"банкротиться", ar:"يعلن إفلاسه", en:"to go bankrupt", fr:"faire faillite" },
    example:{ ru:"Компания может банкротиться из‑за кризиса.", ar:"الشركة ممكن تعلن إفلاسها بسبب الأزمة.", en:"The company may go bankrupt because of the crisis.", fr:"L'entreprise peut faire faillite à cause de la crise." },
    root:"БАНКРОТ", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"голосовать (против)", sv:"проголосовать",
    imp:"голосуй, голосуйте / проголосуй, проголосуйте",
    meaning:{ ru:"голосовать против", ar:"يصوت ضد", en:"to vote against", fr:"voter contre" },
    example:{ ru:"Большинство проголосовало против нового закона.", ar:"الأغلبية صوتت ضد القانون الجديد.", en:"The majority voted against the new law.", fr:"La majorité a voté contre la nouvelle loi." },
    root:"ГОЛОС", cat:"قانون"
  },
  {
    nsv:"подавать в суд", sv:"подать в суд",
    imp:"подавай в суд, подавайте в суд / подай в суд, подайте в суд",
    meaning:{ ru:"подавать в суд", ar:"يرفع دعوى قضائية", en:"to sue", fr:"poursuivre en justice" },
    example:{ ru:"Он подал в суд на компанию.", ar:"رفع دعوى قضائية على الشركة.", en:"He sued the company.", fr:"Il a poursuivi l'entreprise en justice." },
    root:"ДА", cat:"قانون"
  },
  {
    nsv:"оправдывать", sv:"оправдать",
    imp:"оправдывай, оправдывайте / оправдай, оправдайте",
    meaning:{ ru:"оправдывать", ar:"يبرئ / يثبت براءة", en:"to acquit / justify", fr:"acquitter / justifier" },
    example:{ ru:"Суд оправдал обвиняемого.", ar:"المحكمة برأت المتهم.", en:"The court acquitted the accused.", fr:"Le tribunal a acquitté l'accusé." },
    root:"ПРАВ", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"бегать (кросс)", sv:"пробежать",
    imp:"бегай, бегайте / пробеги, пробегите",
    meaning:{ ru:"бегать (дистанция)", ar:"يجري مسافة", en:"to run (a distance)", fr:"courir (une distance)" },
    example:{ ru:"Я пробежал марафон за 4 часа.", ar:"جريت الماراثون في 4 ساعات.", en:"I ran the marathon in 4 hours.", fr:"J'ai couru le marathon en 4 heures." },
    root:"БЕГ", cat:"رياضة"
  },
  {
    nsv:"играть (в шахматы)", sv:"сыграть",
    imp:"играй, играйте / сыграй, сыграйте",
    meaning:{ ru:"играть (шахматы)", ar:"يلعب شطرنج", en:"to play chess", fr:"jouer aux échecs" },
    example:{ ru:"Мы любим играть в шахматы.", ar:"بنحب نلعب شطرنج.", en:"We love to play chess.", fr:"Nous aimons jouer aux échecs." },
    root:"ИГР", cat:"رياضة"
  },
  {
    nsv:"прыгать (на скакалке)", sv:"попрыгать",
    imp:"прыгай, прыгайте / попрыгай, попрыгайте",
    meaning:{ ru:"прыгать на скакалке", ar:"ينط على الحبل", en:"to jump rope", fr:"sauter à la corde" },
    example:{ ru:"Девочка прыгает на скакалке во дворе.", ar:"البنت بتنط على الحبل في الفناء.", en:"The girl is jumping rope in the yard.", fr:"La fillette saute à la corde dans la cour." },
    root:"ПРЫГ", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"гравировать", sv:"выгравировать",
    imp:"гравируй, гравируйте / выгравируй, выгравируйте",
    meaning:{ ru:"гравировать", ar:"ينقش (على معدن)", en:"to engrave", fr:"graver" },
    example:{ ru:"Ювелир гравирует кольцо.", ar:"الصائغ بينقش الخاتم.", en:"The jeweller engraves the ring.", fr:"Le bijoutier grave la bague." },
    root:"ГРАВ", cat:"فن"
  },
  {
    nsv:"ваять", sv:"изваять",
    imp:"ваяй, ваяйте / изваяй, изваяйте",
    meaning:{ ru:"ваять", ar:"ينحت (تمثالاً)", en:"to sculpt (a statue)", fr:"sculpter (une statue)" },
    example:{ ru:"Скульптор ваяет из мрамора.", ar:"النحات بينحت من الرخام.", en:"The sculptor sculpts from marble.", fr:"Le sculpteur sculpte dans le marbre." },
    root:"ВАЯ", cat:"فن"
  },
  {
    nsv:"аккомпанировать", sv:"саккомпанировать",
    imp:"аккомпанируй, аккомпанируйте / саккомпанируй, саккомпанируйте",
    meaning:{ ru:"аккомпанировать", ar:"يصاحب (بآلة موسيقية)", en:"to accompany (musically)", fr:"accompagner (musicalement)" },
    example:{ ru:"Пианист аккомпанирует певице.", ar:"عازف البيانو بيصاحب المطربة.", en:"The pianist accompanies the singer.", fr:"Le pianiste accompagne la chanteuse." },
    root:"КОМПАН", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"окружать", sv:"окружить",
    imp:"окружай, окружайте / окружи, окружите",
    meaning:{ ru:"окружать", ar:"يحاصر", en:"to surround", fr:"encercler" },
    example:{ ru:"Войска окружают город.", ar:"الجيوش بتحاصر المدينة.", en:"The troops surround the city.", fr:"Les troupes encerclent la ville." },
    root:"КРУЖ", cat:"عسكرية"
  },
  {
    nsv:"капитулировать", sv:"капитулировать",
    imp:"капитулируй, капитулируйте / капитулируй, капитулируйте",
    meaning:{ ru:"капитулировать", ar:"يستسلم", en:"to surrender", fr:"capituler" },
    example:{ ru:"Гарнизон отказался капитулировать.", ar:"الحامية رفضت الاستسلام.", en:"The garrison refused to surrender.", fr:"La garnison a refusé de capituler." },
    root:"КАПИТУЛ", cat:"عسكرية"
  },
  {
    nsv:"разгромить", sv:"разгромить",
    imp:"разгроми, разгромите / разгроми, разгромите",
    meaning:{ ru:"разгромить", ar:"يدمر / يهزم هزيمة ساحقة", en:"to destroy / rout", fr:"anéantir / mettre en déroute" },
    example:{ ru:"Армия разгромила противника.", ar:"الجيش دمر العدو.", en:"The army routed the enemy.", fr:"L'armée a mis l'ennemi en déroute." },
    root:"ГРОМ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"карабкаться", sv:"вскарабкаться",
    imp:"карабкайся, карабкайтесь / вскарабкайся, вскарабкайтесь",
    meaning:{ ru:"карабкаться", ar:"يتسلق بصعوبة", en:"to clamber / scramble", fr:"grimper péniblement" },
    example:{ ru:"Котёнок карабкается на диван.", ar:"القط الصغير يتسلق الكنبة بصعوبة.", en:"The kitten scrambles onto the sofa.", fr:"Le chaton grimpe péniblement sur le canapé." },
    root:"КАРАБ", cat:"حركة"
  },
  {
    nsv:"пробираться", sv:"пробраться",
    imp:"пробирайся, пробирайтесь / проберись, проберитесь",
    meaning:{ ru:"пробираться", ar:"يشق طريقه", en:"to make one's way through", fr:"se frayer un chemin" },
    example:{ ru:"Туристы пробираются через лес.", ar:"السياح بيشقوا طريقهم عبر الغابة.", en:"The tourists make their way through the forest.", fr:"Les touristes se frayent un chemin à travers la forêt." },
    root:"БИР", cat:"حركة"
  },
  {
    nsv:"отчаливать", sv:"отчалить",
    imp:"отчаливай, отчаливайте / отчаль, отчальте",
    meaning:{ ru:"отчаливать", ar:"يُبحر (مغادرة)", en:"to set sail / cast off", fr:"appareiller / larguer les amarres" },
    example:{ ru:"Корабль отчаливает от пристани.", ar:"السفينة بتبحر من الرصيف.", en:"The ship casts off from the pier.", fr:"Le navire appareille du quai." },
    root:"ЧАЛ", cat:"حركة"
  },
  {
    nsv:"петлять", sv:"попетлять",
    imp:"петляй, петляйте / попетляй, попетляйте",
    meaning:{ ru:"петлять", ar:"يتعرج / يسير بشكل متعرج", en:"to zigzag / wind", fr:"zigzaguer / serpenter" },
    example:{ ru:"Дорога петляет между холмов.", ar:"الطريق بيتعرج بين التلال.", en:"The road winds through the hills.", fr:"La route serpente entre les collines." },
    root:"ПЕТЛ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"осязать", sv:"осязать",
    imp:"осязай, осязайте / осязай, осязайте",
    meaning:{ ru:"осязать", ar:"يدرك باللمس", en:"to feel (by touch)", fr:"palper / percevoir par le toucher" },
    example:{ ru:"Пальцы осязают шершавую поверхность.", ar:"الصوابع بتحس بخشونة السطح.", en:"Fingers feel the rough surface.", fr:"Les doigts sentent la surface rugueuse." },
    root:"ОСЯЗ", cat:"حواس"
  },
  {
    nsv:"прислушиваться", sv:"прислушаться",
    imp:"прислушивайся, прислушивайтесь / прислушайся, прислушайтесь",
    meaning:{ ru:"прислушиваться", ar:"ينصت باهتمام", en:"to listen intently", fr:"tendre l'oreille" },
    example:{ ru:"Дети прислушиваются к звукам ночи.", ar:"الأطفال بينصتوا لأصوات الليل.", en:"The children listen intently to the night sounds.", fr:"Les enfants tendent l'oreille aux bruits de la nuit." },
    root:"СЛУШ", cat:"حواس"
  },
  {
    nsv:"присматриваться", sv:"присмотреться",
    imp:"присматривайся, присматривайтесь / присмотрись, присмотритесь",
    meaning:{ ru:"присматриваться", ar:"يدقق النظر", en:"to look closely", fr:"observer attentivement" },
    example:{ ru:"Он долго присматривался к картине.", ar:"فضل يدقق النظر في اللوحة.", en:"He looked closely at the painting for a long time.", fr:"Il observa longuement le tableau." },
    root:"СМОТР", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"заикаться", sv:"заикнуться",
    imp:"заикайся, заикайтесь / заикнись, заикнитесь",
    meaning:{ ru:"заикаться", ar:"يتأتأ / يلمح بخجل", en:"to stammer / hint timidly", fr:"bégayer / faire allusion timidement" },
    example:{ ru:"Ребёнок заикается от волнения.", ar:"الطفل بيتأتأ من التوتر.", en:"The child stammers from nervousness.", fr:"L'enfant bégaie de nervosité." },
    root:"ИК", cat:"تواصل"
  },
  {
    nsv:"льстить", sv:"польстить",
    imp:"льсти, льстите / польсти, польстите",
    meaning:{ ru:"льстить", ar:"يتملق / يطري", en:"to flatter", fr:"flatter" },
    example:{ ru:"Не льсти мне – говори правду.", ar:"لا تتملقني – قول الحقيقة.", en:"Don't flatter me – tell the truth.", fr:"Ne me flatte pas – dis la vérité." },
    root:"ЛЬСТ", cat:"تواصل"
  },
  {
    nsv:"убеждать", sv:"убедить",
    imp:"убеждай, убеждайте / убеди, убедите",
    meaning:{ ru:"убеждать", ar:"يقنع", en:"to convince / persuade", fr:"convaincre" },
    example:{ ru:"Тренер убеждает спортсмена не сдаваться.", ar:"المدرب بيقنع الرياضي إنه ما يستسلمش.", en:"The coach convinces the athlete not to give up.", fr:"L'entraîneur persuade l'athlète de ne pas abandonner." },
    root:"БЕД", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"осмысливать", sv:"осмыслить",
    imp:"осмысливай, осмысливайте / осмысли, осмыслите",
    meaning:{ ru:"осмысливать", ar:"يفهم بعمق", en:"to comprehend deeply", fr:"comprendre en profondeur" },
    example:{ ru:"Философ осмысливает природу бытия.", ar:"الفيلسوف بيحاول يفهم طبيعة الوجود بعمق.", en:"The philosopher comprehends the nature of being.", fr:"Le philosophe comprend en profondeur la nature de l'être." },
    root:"МЫСЛ", cat:"ذهنية"
  },
  {
    nsv:"расшифровывать", sv:"расшифровать",
    imp:"расшифровывай, расшифровывайте / расшифруй, расшифруйте",
    meaning:{ ru:"расшифровывать", ar:"يفك الشفرة", en:"to decipher / decode", fr:"déchiffrer" },
    example:{ ru:"Учёный расшифровал древнюю надпись.", ar:"العالم فك شفرة النقش القديم.", en:"The scientist deciphered the ancient inscription.", fr:"Le scientifique a déchiffré l'inscription ancienne." },
    root:"ШИФР", cat:"ذهنية"
  },
  {
    nsv:"зазубривать", sv:"зазубрить",
    imp:"зазубривай, зазубривайте / зазубри, зазубрите",
    meaning:{ ru:"зазубривать", ar:"يحفظ بدون فهم (حفظ أعمى)", en:"to cram / rote learn", fr:"bachoter / apprendre par cœur machinalement" },
    example:{ ru:"Он зазубривает даты к экзамену.", ar:"بيحفظ التواريخ للامتحان بدون فهم.", en:"He's cramming dates for the exam.", fr:"Il bachote les dates pour l'examen." },
    root:"ЗУБР", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"консервировать", sv:"законсервировать",
    imp:"консервируй, консервируйте / законсервируй, законсервируйте",
    meaning:{ ru:"консервировать", ar:"يحفظ (طعاماً) / يعلب", en:"to preserve / can (food)", fr:"conserver / mettre en conserve" },
    example:{ ru:"Бабушка консервирует огурцы.", ar:"جدتي بتحفظ الخيار.", en:"Grandma cans cucumbers.", fr:"Grand-mère met les concombres en conserve." },
    root:"КОНСЕРВ", cat:"عمل"
  },
  {
    nsv:"размораживать", sv:"разморозить",
    imp:"размораживай, размораживайте / разморозь, разморозьте",
    meaning:{ ru:"размораживать", ar:"يفك التجميد", en:"to defrost", fr:"décongeler" },
    example:{ ru:"Я размораживаю мясо перед готовкой.", ar:"بفك تجميد اللحمة قبل الطبخ.", en:"I defrost the meat before cooking.", fr:"Je décongèle la viande avant de cuisiner." },
    root:"МОРОЗ", cat:"عمل"
  },
  {
    nsv:"кипятить", sv:"вскипятить",
    imp:"кипяти, кипятите / вскипяти, вскипятите",
    meaning:{ ru:"кипятить", ar:"يغلي (الماء)", en:"to boil (water)", fr:"faire bouillir" },
    example:{ ru:"Вскипяти чайник, пожалуйста.", ar:"اغلي الغلاية من فضلك.", en:"Boil the kettle, please.", fr:"Fais bouillir la bouilloire, s'il te plaît." },
    root:"КИП", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"нервничать", sv:"занервничать",
    imp:"нервничай, нервничайте / занервничай, занервничайте",
    meaning:{ ru:"нервничать", ar:"يتوتر / يتضايق", en:"to be nervous / fidget", fr:"s'énerver / être nerveux" },
    example:{ ru:"Не нервничай перед выступлением.", ar:"لا تتوتر قبل العرض.", en:"Don't be nervous before the performance.", fr:"Ne sois pas nerveux avant la représentation." },
    root:"НЕРВ", cat:"عواطف"
  },
  {
    nsv:"обижаться", sv:"обидеться",
    imp:"обижайся, обижайтесь / обидься, обидьтесь",
    meaning:{ ru:"обижаться", ar:"يزعل / ينزعج", en:"to take offence", fr:"se vexer" },
    example:{ ru:"Она обиделась на шутку.", ar:"هي زعلت من النكتة.", en:"She took offence at the joke.", fr:"Elle s'est vexée de la plaisanterie." },
    root:"ОБИД", cat:"عواطف"
  },
  {
    nsv:"вдохновляться", sv:"вдохновиться",
    imp:"вдохновляйся, вдохновляйтесь / вдохновись, вдохновитесь",
    meaning:{ ru:"вдохновляться", ar:"يُلهم", en:"to be inspired", fr:"s'inspirer" },
    example:{ ru:"Художник вдохновляется природой.", ar:"الرسام بيُلهَم من الطبيعة.", en:"The artist is inspired by nature.", fr:"L'artiste s'inspire de la nature." },
    root:"ДОХ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"завывать", sv:"завыть",
    imp:"завывай, завывайте / завой, завойте",
    meaning:{ ru:"завывать (о ветре)", ar:"تعوي الريح", en:"to howl (wind)", fr:"hurler (vent)" },
    example:{ ru:"Ветер завывает за окном.", ar:"الريح بتعوي برا الشباك.", en:"The wind howls outside the window.", fr:"Le vent hurle dehors." },
    root:"ВЫ", cat:"طبيعة"
  },
  {
    nsv:"градировать", sv:"выпасть градом",
    imp:"— (безличный)",
    meaning:{ ru:"выпадать градом", ar:"ينزل البرد", en:"to hail", fr:"grêler" },
    example:{ ru:"Вчера выпал крупный град.", ar:"إمبارح نزل برد كبير.", en:"Large hail fell yesterday.", fr:"De gros grêlons sont tombés hier." },
    root:"ГРАД", cat:"طبيعة"
  },
  {
    nsv:"туманиться", sv:"затуманиться",
    imp:"туманься, туманьтесь / затуманься, затуманьтесь",
    meaning:{ ru:"туманиться", ar:"يتكون الضباب", en:"to become foggy", fr:"s'embrumer" },
    example:{ ru:"Долина туманится по утрам.", ar:"الوادي بيضبب في الصبح.", en:"The valley becomes foggy in the mornings.", fr:"La vallée s'embrume le matin." },
    root:"ТУМАН", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"простывать", sv:"простыть",
    imp:"простывай, простывайте / простынь, простыньте",
    meaning:{ ru:"простывать", ar:"يصاب بنزلة برد", en:"to catch a cold", fr:"attraper froid" },
    example:{ ru:"Я простыл под дождём.", ar:"أصبت بنزلة برد من المطر.", en:"I caught a cold in the rain.", fr:"J'ai attrapé froid sous la pluie." },
    root:"СТЫ", cat:"صحة"
  },
  {
    nsv:"колоть (в боку)", sv:"заколоть",
    imp:"— (безличный)",
    meaning:{ ru:"колоть (о боли)", ar:"يشعر بوخزة", en:"to have a stitch", fr:"avoir un point de côté" },
    example:{ ru:"У меня колет в боку.", ar:"حاسس بوخزة في جنبي.", en:"I have a stitch in my side.", fr:"J'ai un point de côté." },
    root:"КОЛ", cat:"صحة"
  },
  {
    nsv:"слабить", sv:"послабить",
    imp:"— (безличный)",
    meaning:{ ru:"слабить (кишечник)", ar:"يليّن البطن", en:"to have a laxative effect", fr:"avoir un effet laxatif" },
    example:{ ru:"Чернослив хорошо слабит.", ar:"القراصيا بتليّن البطن.", en:"Prunes have a good laxative effect.", fr:"Les pruneaux sont un bon laxatif." },
    root:"СЛАБ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"угощать", sv:"угостить",
    imp:"угощай, угощайте / угости, угостите",
    meaning:{ ru:"угощать", ar:"يكرم (بالطعام)", en:"to treat (to food)", fr:"régaler / offrir à manger" },
    example:{ ru:"Хозяйка угощает гостей пирогом.", ar:"صاحبة البيت بتكرم الضيوف بالفطيرة.", en:"The hostess treats the guests to a pie.", fr:"La maîtresse de maison régale les invités d'une tarte." },
    root:"ГОЩ", cat:"علاقات"
  },
  {
    nsv:"натравливать", sv:"натравить",
    imp:"натравливай, натравливайте / натрави, натравите",
    meaning:{ ru:"натравливать", ar:"يحرض (ضد أحد)", en:"to set on / instigate against", fr:"exciter / monter contre" },
    example:{ ru:"Не натравливай собак друг на друга.", ar:"لا تحرض الكلاب على بعضها.", en:"Don't set the dogs on each other.", fr:"N'excite pas les chiens les uns contre les autres." },
    root:"ТРАВ", cat:"علاقات"
  },
  {
    nsv:"свататься", sv:"посвататься",
    imp:"сватайся, сватайтесь / посватайся, посватайтесь",
    meaning:{ ru:"свататься", ar:"يتقدم للزواج", en:"to propose marriage", fr:"demander en mariage" },
    example:{ ru:"Он посватался к дочери соседа.", ar:"تقدم لجواز بنت الجيران.", en:"He proposed to the neighbour's daughter.", fr:"Il a demandé en mariage la fille du voisin." },
    root:"СВАТ", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"тестировать", sv:"протестировать",
    imp:"тестируй, тестируйте / протестируй, протестируйте",
    meaning:{ ru:"тестировать", ar:"يختبر (برنامجاً)", en:"to test (software)", fr:"tester (logiciel)" },
    example:{ ru:"Разработчик тестирует новое приложение.", ar:"المطور بيختبر التطبيق الجديد.", en:"The developer tests the new app.", fr:"Le développeur teste la nouvelle application." },
    root:"ТЕСТ", cat:"تقنية"
  },
  {
    nsv:"форматировать", sv:"отформатировать",
    imp:"форматируй, форматируйте / отформатируй, отформатируйте",
    meaning:{ ru:"форматировать (диск)", ar:"يهيئ القرص", en:"to format (disk)", fr:"formater (disque)" },
    example:{ ru:"Не забудь отформатировать флешку.", ar:"ما تنساش تفرمت الفلاشة.", en:"Don't forget to format the flash drive.", fr:"N'oublie pas de formater la clé USB." },
    root:"ФОРМ", cat:"تقنية"
  },
  {
    nsv:"шифровать", sv:"зашифровать",
    imp:"шифруй, шифруйте / зашифруй, зашифруйте",
    meaning:{ ru:"шифровать", ar:"يُعمي / يُشفر", en:"to encrypt", fr:"chiffrer" },
    example:{ ru:"Программа шифрует сообщение.", ar:"البرنامج بيشفر الرسالة.", en:"The program encrypts the message.", fr:"Le programme chiffre le message." },
    root:"ШИФР", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"доказывать", sv:"доказать",
    imp:"доказывай, доказывайте / докажи, докажите",
    meaning:{ ru:"доказывать", ar:"يُثبت / يبرهن", en:"to prove", fr:"prouver" },
    example:{ ru:"Математик доказывает теорему.", ar:"الرياضياتي بيُثبت نظرية.", en:"The mathematician proves a theorem.", fr:"Le mathématicien prouve un théorème." },
    root:"КАЗ", cat:"تعليم"
  },
  {
    nsv:"обобщать", sv:"обобщить",
    imp:"обобщай, обобщайте / обобщи, обобщите",
    meaning:{ ru:"обобщать", ar:"يعمم / يُلخص", en:"to generalize / summarize", fr:"généraliser / résumer" },
    example:{ ru:"Учитель обобщает пройденный материал.", ar:"المعلم بيلخص المادة اللي فاتت.", en:"The teacher summarizes the covered material.", fr:"Le professeur résume la matière vue." },
    root:"ОБЩ", cat:"تعليم"
  },
  {
    nsv:"заимствовать", sv:"заимствовать",
    imp:"заимствуй, заимствуйте / заимствуй, заимствуйте",
    meaning:{ ru:"заимствовать", ar:"يقتبس / يستعير", en:"to borrow (word / idea)", fr:"emprunter (mot / idée)" },
    example:{ ru:"Русский язык заимствовал много слов из французского.", ar:"اللغة الروسية اقتبست كلمات كتير من الفرنساوي.", en:"Russian borrowed many words from French.", fr:"Le russe a emprunté beaucoup de mots au français." },
    root:"ИМ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"обменивать", sv:"обменять",
    imp:"обменивай, обменивайте / обменяй, обменяйте",
    meaning:{ ru:"обменивать (валюту)", ar:"يصرف (عملة)", en:"to exchange (currency)", fr:"changer (devise)" },
    example:{ ru:"Турист обменивает доллары на евро.", ar:"السايح بيصرف دولارات ليورو.", en:"The tourist exchanges dollars for euros.", fr:"Le touriste change des dollars en euros." },
    root:"МЕН", cat:"اقتصاد"
  },
  {
    nsv:"закладывать", sv:"заложить",
    imp:"закладывай, закладывайте / заложи, заложите",
    meaning:{ ru:"закладывать (недвижимость)", ar:"يرهن عقاراً", en:"to mortgage", fr:"hypothéquer" },
    example:{ ru:"Семья заложила дом для получения кредита.", ar:"العيلة رهنت البيت عشان تاخد قرض.", en:"The family mortgaged the house to get a loan.", fr:"La famille a hypothéqué la maison pour obtenir un prêt." },
    root:"КЛАД", cat:"اقتصاد"
  },
  {
    nsv:"накопить (капитал)", sv:"скопить",
    imp:"накопи, накопите / скопи, скопите",
    meaning:{ ru:"накопить (капитал)", ar:"يجمع رأس مال", en:"to accumulate (capital)", fr:"accumuler (capital)" },
    example:{ ru:"Он скопил небольшой капитал.", ar:"جمع رأس مال صغير.", en:"He accumulated a small capital.", fr:"Il a accumulé un petit capital." },
    root:"КОП", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"давать показания", sv:"дать показания",
    imp:"давай показания, давайте показания / дай показания, дайте показания",
    meaning:{ ru:"давать показания", ar:"يدلي بشهادته", en:"to testify", fr:"témoigner" },
    example:{ ru:"Свидетель даёт показания в суде.", ar:"الشاهد بيدلي بشهادته في المحكمة.", en:"The witness testifies in court.", fr:"Le témoin témoigne au tribunal." },
    root:"ДА", cat:"قانون"
  },
  {
    nsv:"присягать", sv:"присягнуть",
    imp:"присягай, присягайте / присягни, присягните",
    meaning:{ ru:"присягать", ar:"يقسم اليمين القانوني", en:"to swear an oath", fr:"prêter serment" },
    example:{ ru:"Солдаты присягают на верность Родине.", ar:"الجنود بيقسموا يمين الولاء للوطن.", en:"Soldiers swear an oath of loyalty to the Motherland.", fr:"Les soldats prêtent serment de fidélité à la Patrie." },
    root:"СЯГ", cat:"قانون"
  },
  {
    nsv:"легализовать", sv:"легализовать",
    imp:"легализуй, легализуйте / легализуй, легализуйте",
    meaning:{ ru:"легализовать", ar:"يُقنن / يجعله قانونياً", en:"to legalize", fr:"légaliser" },
    example:{ ru:"Правительство легализовало этот вид деятельности.", ar:"الحكومة قننت النشاط ده.", en:"The government legalized this type of activity.", fr:"Le gouvernement a légalisé cette activité." },
    root:"ЛЕГАЛ", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"балансировать", sv:"сбалансировать",
    imp:"балансируй, балансируйте / сбалансируй, сбалансируйте",
    meaning:{ ru:"балансировать", ar:"يحافظ على توازنه", en:"to balance", fr:"garder l'équilibre" },
    example:{ ru:"Гимнаст балансирует на бревне.", ar:"الجمبازية بيحافظ على توازنه على العارضة.", en:"The gymnast balances on the beam.", fr:"Le gymnaste garde l'équilibre sur la poutre." },
    root:"БАЛАНС", cat:"رياضة"
  },
  {
    nsv:"разминаться", sv:"размяться",
    imp:"разминайся, разминайтесь / разомнись, разомнитесь",
    meaning:{ ru:"разминаться", ar:"يسخن (قبل التمرين)", en:"to warm up", fr:"s'échauffer" },
    example:{ ru:"Перед бегом обязательно разомнись.", ar:"قبل الجري لازم تسخن.", en:"Be sure to warm up before running.", fr:"Échauffe-toi bien avant de courir." },
    root:"МИН", cat:"رياضة"
  },
  {
    nsv:"играть в защите", sv:"сыграть в защите",
    imp:"играй в защите, играйте в защите / сыграй в защите, сыграйте в защите",
    meaning:{ ru:"играть в защите", ar:"يلعب في الدفاع", en:"to play defence", fr:"jouer en défense" },
    example:{ ru:"Этот игрок отлично играет в защите.", ar:"اللاعب ده بيلعب دفاع ممتاز.", en:"This player plays excellent defence.", fr:"Ce joueur joue une excellente défense." },
    root:"ИГР", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"раскрашивать", sv:"раскрасить",
    imp:"раскрашивай, раскрашивайте / раскрась, раскрасьте",
    meaning:{ ru:"раскрашивать", ar:"يلون (صورة)", en:"to color (a drawing)", fr:"colorier" },
    example:{ ru:"Ребёнок раскрашивает картинку.", ar:"الطفل بيلون الصورة.", en:"The child colors the picture.", fr:"L'enfant colorie le dessin." },
    root:"КРАС", cat:"فن"
  },
  {
    nsv:"импровизировать", sv:"сымпровизировать",
    imp:"импровизируй, импровизируйте / сымпровизируй, сымпровизируйте",
    meaning:{ ru:"импровизировать", ar:"يرتجل (فنياً)", en:"to improvise", fr:"improviser" },
    example:{ ru:"Актёр импровизировал на сцене.", ar:"الممثل ارتجل على المسرح.", en:"The actor improvised on stage.", fr:"L'acteur improvisa sur scène." },
    root:"ИМПРО", cat:"فن"
  },
  {
    nsv:"озвучивать (фильм)", sv:"озвучить",
    imp:"озвучивай, озвучивайте / озвучь, озвучьте",
    meaning:{ ru:"озвучивать (фильм)", ar:"يسجل الصوت لفيلم", en:"to dub (a film)", fr:"doubler (un film)" },
    example:{ ru:"Актёры озвучивают персонажей мультфильма.", ar:"الممثلون بيسجلوا صوت شخصيات الكرتون.", en:"Actors dub cartoon characters.", fr:"Les acteurs doublent les personnages du dessin animé." },
    root:"ЗВУК", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"оккупировать", sv:"оккупировать",
    imp:"оккупируй, оккупируйте / оккупируй, оккупируйте",
    meaning:{ ru:"оккупировать", ar:"يحتل", en:"to occupy", fr:"occuper" },
    example:{ ru:"Войска оккупировали город.", ar:"القوات احتلت المدينة.", en:"The troops occupied the city.", fr:"Les troupes occupèrent la ville." },
    root:"ОККУП", cat:"عسكرية"
  },
  {
    nsv:"демобилизоваться", sv:"демобилизоваться",
    imp:"демобилизуйся, демобилизуйтесь / демобилизуйся, демобилизуйтесь",
    meaning:{ ru:"демобилизоваться", ar:"يسرّح من الجيش", en:"to be demobilized", fr:"être démobilisé" },
    example:{ ru:"Солдат демобилизовался после войны.", ar:"الجندي اتسرح من الجيش بعد الحرب.", en:"The soldier was demobilized after the war.", fr:"Le soldat fut démobilisé après la guerre." },
    root:"МОБИЛ", cat:"عسكرية"
  },
  {
    nsv:"квартировать", sv:"расквартировать",
    imp:"квартируй, квартируйте / расквартируй, расквартируйте",
    meaning:{ ru:"квартировать", ar:"يُقيم (عسكر)", en:"to quarter (troops)", fr:"cantonner" },
    example:{ ru:"Полк квартирует в деревне.", ar:"الفوج بيعسكر في القرية.", en:"The regiment quarters in the village.", fr:"Le régiment cantonne dans le village." },
    root:"КВАРТИР", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перепрыгивать", sv:"перепрыгнуть",
    imp:"перепрыгивай, перепрыгивайте / перепрыгни, перепрыгните",
    meaning:{ ru:"перепрыгивать", ar:"يقفز فوق", en:"to jump over", fr:"sauter par‑dessus" },
    example:{ ru:"Лошадь перепрыгнула через барьер.", ar:"الحصان قفز فوق الحاجز.", en:"The horse jumped over the barrier.", fr:"Le cheval a sauté par‑dessus la barrière." },
    root:"ПРЫГ", cat:"حركة"
  },
  {
    nsv:"отступать", sv:"отступить",
    imp:"отступай, отступайте / отступи, отступите",
    meaning:{ ru:"отступать", ar:"يتراجع", en:"to retreat / step back", fr:"reculer / battre en retraite" },
    example:{ ru:"Войска отступают к столице.", ar:"الجيوش بتتراجع للعاصمة.", en:"The troops retreat to the capital.", fr:"Les troupes battent en retraite vers la capitale." },
    root:"СТУП", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"обонять", sv:"обонять",
    imp:"обоняй, обоняйте / обоняй, обоняйте",
    meaning:{ ru:"обонять", ar:"يشم (حاسة)", en:"to smell (sense)", fr:"percevoir par l'odorat" },
    example:{ ru:"Собака хорошо обоняет.", ar:"الكلب بيشم كويس.", en:"A dog smells well.", fr:"Le chien sent bien." },
    root:"БОН", cat:"حواس"
  },
  {
    nsv:"прислушиваться", sv:"прислушаться",
    imp:"прислушивайся, прислушивайтесь / прислушайся, прислушайтесь",
    meaning:{ ru:"прислушиваться", ar:"ينصت باهتمام", en:"to listen intently", fr:"écouter attentivement" },
    example:{ ru:"Врач прислушивается к дыханию.", ar:"الدكتور بينصت للتنفس.", en:"The doctor listens to the breathing.", fr:"Le médecin écoute la respiration." },
    root:"СЛУШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"угрожать", sv:"пригрозить",
    imp:"угрожай, угрожайте / пригрози, пригрозите",
    meaning:{ ru:"угрожать", ar:"يهدد", en:"to threaten", fr:"menacer" },
    example:{ ru:"Не угрожай мне.", ar:"لا تهددني.", en:"Don't threaten me.", fr:"Ne me menace pas." },
    root:"ГРОЗ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"оптимизировать", sv:"оптимизировать",
    imp:"оптимизируй, оптимизируйте / оптимизируй, оптимизируйте",
    meaning:{ ru:"оптимизировать", ar:"يحسّن (يحلّل)", en:"to optimize", fr:"optimiser" },
    example:{ ru:"Программист оптимизирует код.", ar:"المبرمج بيحسّن الكود.", en:"The programmer optimizes the code.", fr:"Le programmeur optimise le code." },
    root:"ОПТИМ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"красить", sv:"покрасить",
    imp:"крась, красьте / покрась, покрасьте",
    meaning:{ ru:"красить", ar:"يصبغ / يدهن", en:"to paint", fr:"peindre" },
    example:{ ru:"Он красит забор.", ar:"بيصبغ السور.", en:"He paints the fence.", fr:"Il peint la clôture." },
    root:"КРАС", cat:"عمل"
  },
  {
    nsv:"лакировать", sv:"отлакировать",
    imp:"лакируй, лакируйте / отлакируй, отлакируйте",
    meaning:{ ru:"лакировать", ar:"يُلمّع (بالورنيش)", en:"to varnish", fr:"vernir" },
    example:{ ru:"Мастер лакирует пол.", ar:"الصنايعي بيلمّع الأرضية.", en:"The craftsman varnishes the floor.", fr:"L'artisan vernit le sol." },
    root:"ЛАК", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"веселиться", sv:"повеселиться",
    imp:"веселись, веселитесь / повеселись, повеселитесь",
    meaning:{ ru:"веселиться", ar:"يمرح / يستمتع", en:"to have fun", fr:"s'amuser" },
    example:{ ru:"Гости веселятся на свадьбе.", ar:"الضيوف بيمرحوا في الفرح.", en:"The guests have fun at the wedding.", fr:"Les invités s'amusent au mariage." },
    root:"ВЕСЕЛ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"расцветать", sv:"расцвести",
    imp:"расцветай, расцветайте / расцвети, расцветите",
    meaning:{ ru:"расцветать", ar:"يزدهر / يتفتح", en:"to bloom / flourish", fr:"fleurir / s'épanouir" },
    example:{ ru:"Весной всё расцветает.", ar:"في الربيع كل حاجة بتزهر.", en:"In spring everything blooms.", fr:"Au printemps tout fleurit." },
    root:"ЦВЕТ", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"здороваться", sv:"поздороваться",
    imp:"здоровайся, здоровайтесь / поздоровайся, поздоровайтесь",
    meaning:{ ru:"здороваться", ar:"يلقي التحية", en:"to greet (say hello)", fr:"saluer (dire bonjour)" },
    example:{ ru:"Мы всегда здороваемся с соседями.", ar:"دائماً بنسلم على الجيران.", en:"We always greet the neighbours.", fr:"Nous saluons toujours les voisins." },
    root:"ЗДОРОВ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"гостить", sv:"погостить",
    imp:"гости, гостите / погости, погостите",
    meaning:{ ru:"гостить", ar:"يزور (ويبيت)", en:"to stay as a guest", fr:"séjourner (comme invité)" },
    example:{ ru:"Мы гостили у бабушки неделю.", ar:"قعدنا عند الجدة أسبوع.", en:"We stayed at grandma's for a week.", fr:"Nous avons séjourné une semaine chez grand‑mère." },
    root:"ГОСТ", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"резервировать", sv:"зарезервировать",
    imp:"резервируй, резервируйте / зарезервируй, зарезервируйте",
    meaning:{ ru:"резервировать", ar:"يحجز (مسبقاً)", en:"to reserve", fr:"réserver" },
    example:{ ru:"Я резервирую столик в ресторане.", ar:"بحجز ترابيزة في المطعم.", en:"I reserve a table at the restaurant.", fr:"Je réserve une table au restaurant." },
    root:"РЕЗЕРВ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"декламировать", sv:"продекламировать",
    imp:"декламируй, декламируйте / продекламируй, продекламируйте",
    meaning:{ ru:"декламировать", ar:"يلقي (شعراً)", en:"to recite (poetry)", fr:"déclamer" },
    example:{ ru:"Актёр декламирует Пушкина.", ar:"الممثل بيلقي شعر بوشكين.", en:"The actor recites Pushkin.", fr:"L'acteur déclame Pouchkine." },
    root:"ДЕКЛАМ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"инкассировать", sv:"инкассировать",
    imp:"инкассируй, инкассируйте / инкассируй, инкассируйте",
    meaning:{ ru:"инкассировать", ar:"يحصل نقداً (تحصيل)", en:"to collect cash", fr:"encaisser" },
    example:{ ru:"Банк инкассирует выручку магазина.", ar:"البنك بيحصل إيرادات المحل.", en:"The bank collects the store's proceeds.", fr:"La banque encaisse les recettes du magasin." },
    root:"КАСС", cat:"اقتصاد"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"протестовать", sv:"запротестовать",
    imp:"протестуй, протестуйте / запротестуй, запротестуйте",
    meaning:{ ru:"протестовать", ar:"يعترض / يحتج", en:"to protest", fr:"protester" },
    example:{ ru:"Студенты протестуют против повышения платы.", ar:"الطلاب بيحتجوا على زيادة المصاريف.", en:"Students protest against the fee increase.", fr:"Les étudiants protestent contre la hausse des frais." },
    root:"ТЕСТ", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"фехтовать", sv:"пофехтовать",
    imp:"фехтуй, фехтуйте / пофехтуй, пофехтуйте",
    meaning:{ ru:"фехтовать", ar:"يبارز (بالسلاح)", en:"to fence", fr:"faire de l'escrime" },
    example:{ ru:"Спортсмен фехтует на шпагах.", ar:"الرياضي بيتبارز بسيف الشيش.", en:"The athlete fences with épées.", fr:"Le sportif fait de l'escrime à l'épée." },
    root:"ФЕХТ", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"глинировать", sv:"заглинировать",
    imp:"глинируй, глинируйте / заглинируй, заглинируйте",
    meaning:{ ru:"глинировать", ar:"يُشكّل بالطين", en:"to model in clay", fr:"modeler (argile)" },
    example:{ ru:"Художник глинирует скульптуру.", ar:"الفنان بيشكل التمثال بالطين.", en:"The artist models the sculpture in clay.", fr:"L'artiste modèle la sculpture en argile." },
    root:"ГЛИН", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"осаждать", sv:"осадить",
    imp:"осаждай, осаждайте / осади, осадите",
    meaning:{ ru:"осаждать", ar:"يحاصر (قلعة)", en:"to besiege", fr:"assiéger" },
    example:{ ru:"Войска осаждали крепость месяц.", ar:"الجيوش حاصرت القلعة شهر.", en:"The troops besieged the fortress for a month.", fr:"Les troupes assiégèrent la forteresse un mois." },
    root:"САД", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перемещаться", sv:"переместиться",
    imp:"перемещайся, перемещайтесь / переместись, переместитесь",
    meaning:{ ru:"перемещаться", ar:"يتحرك / ينتقل", en:"to move / relocate", fr:"se déplacer" },
    example:{ ru:"Робот плавно перемещается по комнате.", ar:"الروبوت بيتحرك بسلاسة في الأوضة.", en:"The robot moves smoothly around the room.", fr:"Le robot se déplace en douceur dans la pièce." },
    root:"МЕСТ", cat:"حركة"
  },
  {
    nsv:"семенить", sv:"посеменить",
    imp:"семени, семените / посемени, посемените",
    meaning:{ ru:"семенить", ar:"يُهرول بخطوات صغيرة", en:"to scurry / mince", fr:"trottiner à petits pas" },
    example:{ ru:"Мышка семенит по полу.", ar:"الفارة بتجري بخطوات صغيرة على الأرض.", en:"The mouse scurries across the floor.", fr:"La souris trottine sur le sol." },
    root:"СЕМЕН", cat:"حركة"
  },
  {
    nsv:"плестись", sv:"поплестись",
    imp:"плетись, плетитесь / поплетись, поплетитесь",
    meaning:{ ru:"плестись", ar:"يمشي ببطء وتعب", en:"to trudge", fr:"se traîner" },
    example:{ ru:"Уставший путник плетётся по дороге.", ar:"المسافر التعبان بيمشي بتعب في الطريق.", en:"The tired traveller trudges along the road.", fr:"Le voyageur fatigué se traîne sur la route." },
    root:"ПЛЕТ", cat:"حركة"
  },
  {
    nsv:"взмывать", sv:"взмыть",
    imp:"взмывай, взмывайте / взмой, взмойте",
    meaning:{ ru:"взмывать", ar:"يرتفع بسرعة (طيران)", en:"to soar up", fr:"s'élever rapidement" },
    example:{ ru:"Орёл взмыл в небо.", ar:"النسر ارتفع في السما.", en:"The eagle soared up into the sky.", fr:"L'aigle s'éleva dans le ciel." },
    root:"МЫ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"нащупывать", sv:"нащупать",
    imp:"нащупывай, нащупывайте / нащупай, нащупайте",
    meaning:{ ru:"нащупывать", ar:"يتحسس (للعثور)", en:"to grope / feel for", fr:"tâtonner" },
    example:{ ru:"В темноте он нащупывал выключатель.", ar:"في الضلمة كان بيتحسس المفتاح.", en:"In the dark he was groping for the switch.", fr:"Dans le noir il tâtonnait à la recherche de l'interrupteur." },
    root:"ЩУП", cat:"حواس"
  },
  {
    nsv:"пробовать (на вкус)", sv:"попробовать",
    imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать (еду)", ar:"يتذوق", en:"to taste (food)", fr:"goûter (nourriture)" },
    example:{ ru:"Попробуй этот суп, он вкусный.", ar:"تذوق الشوربة دي، لذيذة.", en:"Taste this soup, it's delicious.", fr:"Goûte cette soupe, elle est délicieuse." },
    root:"ПРОБ", cat:"حواس"
  },
  {
    nsv:"приглядываться", sv:"приглядеться",
    imp:"приглядывайся, приглядывайтесь / приглядись, приглядитесь",
    meaning:{ ru:"приглядываться", ar:"يدقق النظر", en:"to peer / scrutinize", fr:"scruter" },
    example:{ ru:"Она приглядывалась к незнакомцу.", ar:"كانت بتدقق في الغريب.", en:"She was scrutinizing the stranger.", fr:"Elle scrutait l'inconnu." },
    root:"ГЛЯД", cat:"حواس"
  },
  {
    nsv:"обонять розы", sv:"обонять",
    imp:"обоняй, обоняйте / обоняй, обоняйте",
    meaning:{ ru:"обонять (цветы)", ar:"يشم الورد", en:"to smell (flowers)", fr:"sentir (des fleurs)" },
    example:{ ru:"Я люблю обонять розы в саду.", ar:"بحب أشم الورد في الجنينة.", en:"I love smelling roses in the garden.", fr:"J'aime sentir les roses dans le jardin." },
    root:"БОН", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"поддакивать", sv:"поддакнуть",
    imp:"поддакивай, поддакивайте / поддакни, поддакните",
    meaning:{ ru:"поддакивать", ar:"يوافق كلامياً (بـ: نعم)", en:"to say yes to everything", fr:"approuver constamment" },
    example:{ ru:"Он всё время поддакивает начальнику.", ar:"هو على طول بيقول أيوه للمدير.", en:"He always says yes to the boss.", fr:"Il approuve sans cesse son chef." },
    root:"ДАК", cat:"تواصل"
  },
  {
    nsv:"поздравлять", sv:"поздравить",
    imp:"поздравляй, поздравляйте / поздравь, поздравьте",
    meaning:{ ru:"поздравлять", ar:"يهنئ", en:"to congratulate", fr:"féliciter" },
    example:{ ru:"Поздравляю тебя с победой!", ar:"مبروك الفوز!", en:"Congratulations on your victory!", fr:"Félicitations pour ta victoire !" },
    root:"ЗДРАВ", cat:"تواصل"
  },
  {
    nsv:"советовать", sv:"посоветовать",
    imp:"советуй, советуйте / посоветуй, посоветуйте",
    meaning:{ ru:"советовать", ar:"ينصح", en:"to advise", fr:"conseiller" },
    example:{ ru:"Я советую тебе отдохнуть.", ar:"بنصحك تستريح.", en:"I advise you to rest.", fr:"Je te conseille de te reposer." },
    root:"СОВЕТ", cat:"تواصل"
  },
  {
    nsv:"диктовать", sv:"продиктовать",
    imp:"диктуй, диктуйте / продиктуй, продиктуйте",
    meaning:{ ru:"диктовать", ar:"يُملي", en:"to dictate", fr:"dicter" },
    example:{ ru:"Учитель диктует текст.", ar:"المعلم بيملي النص.", en:"The teacher dictates the text.", fr:"Le professeur dicte le texte." },
    root:"ДИКТ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"вычислять", sv:"вычислить",
    imp:"вычисляй, вычисляйте / вычисли, вычислите",
    meaning:{ ru:"вычислять", ar:"يحسب", en:"to calculate", fr:"calculer" },
    example:{ ru:"Инженер вычисляет нагрузку.", ar:"المهندس بيحسب الحمل.", en:"The engineer calculates the load.", fr:"L'ingénieur calcule la charge." },
    root:"ЧИСЛ", cat:"ذهنية"
  },
  {
    nsv:"прогнозировать", sv:"спрогнозировать",
    imp:"прогнозируй, прогнозируйте / спрогнозируй, спрогнозируйте",
    meaning:{ ru:"прогнозировать", ar:"يتنبأ", en:"to forecast", fr:"prévoir" },
    example:{ ru:"Синоптик прогнозирует дождь.", ar:"المتنبئ الجوي بيتنبأ بمطر.", en:"The weather forecaster forecasts rain.", fr:"Le météorologue prévoit de la pluie." },
    root:"ГНОЗ", cat:"ذهنية"
  },
  {
    nsv:"обучаться", sv:"обучиться",
    imp:"обучайся, обучайтесь / обучись, обучитесь",
    meaning:{ ru:"обучаться", ar:"يتعلم (مهنة)", en:"to learn (a skill)", fr:"apprendre (un métier)" },
    example:{ ru:"Он обучается на повара.", ar:"بيتعلم عشان يبقى طباخ.", en:"He is learning to be a cook.", fr:"Il apprend à devenir cuisinier." },
    root:"УЧ", cat:"ذهنية"
  },
  {
    nsv:"логически мыслить", sv:"логически помыслить",
    imp:"мысли логически, мыслите логически",
    meaning:{ ru:"логически мыслить", ar:"يفكر منطقياً", en:"to think logically", fr:"penser logiquement" },
    example:{ ru:"Важно уметь логически мыслить.", ar:"مهم تعرف تفكر منطقياً.", en:"It's important to think logically.", fr:"Il est important de penser logiquement." },
    root:"МЫСЛ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"тачать (обувь)", sv:"стачать",
    imp:"тачай, тачайте / стачай, стачайте",
    meaning:{ ru:"тачать (обувь)", ar:"يخيط حذاء", en:"to stitch (shoes)", fr:"coudre (des chaussures)" },
    example:{ ru:"Сапожник тачает сапоги.", ar:"الجزمجي بيخيط جزمة.", en:"The cobbler stitches boots.", fr:"Le cordonnier coud des bottes." },
    root:"ТАЧ", cat:"عمل"
  },
  {
    nsv:"штукатурить", sv:"отштукатурить",
    imp:"штукатури, штукатурите / отштукатури, отштукатурите",
    meaning:{ ru:"штукатурить", ar:"يُملّس الجدران", en:"to plaster (a wall)", fr:"plâtrer" },
    example:{ ru:"Рабочий штукатурит стену.", ar:"العامل بيملّس الحيط.", en:"The worker plasters the wall.", fr:"L'ouvrier plâtre le mur." },
    root:"ШТУКАТУР", cat:"عمل"
  },
  {
    nsv:"строгать", sv:"острогать",
    imp:"строгай, строгайте / острогай, острогайте",
    meaning:{ ru:"строгать (дерево)", ar:"يسوي الخشب", en:"to plane (wood)", fr:"raboter" },
    example:{ ru:"Плотник строгает доску.", ar:"النجار بيسوي اللوح.", en:"The carpenter planes the board.", fr:"Le menuisier rabote la planche." },
    root:"СТРОГ", cat:"عمل"
  },
  {
    nsv:"перестилать", sv:"перестлать",
    imp:"перестилай, перестилайте / перестели, перестелите",
    meaning:{ ru:"перестилать", ar:"يُعيد فرش (السرير)", en:"to remake (bed)", fr:"refaire (le lit)" },
    example:{ ru:"Я перестилаю постель каждую неделю.", ar:"بغير فرش السرير كل أسبوع.", en:"I remake the bed every week.", fr:"Je refais le lit chaque semaine." },
    root:"СТЕЛ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"злиться", sv:"разозлиться",
    imp:"злись, злитесь / разозлись, разозлитесь",
    meaning:{ ru:"злиться", ar:"يغضب", en:"to be angry", fr:"s'énerver" },
    example:{ ru:"Она злится из‑за опоздания.", ar:"هي غضبانة بسبب التأخير.", en:"She is angry about the delay.", fr:"Elle est fâchée du retard." },
    root:"ЗЛ", cat:"عواطف"
  },
  {
    nsv:"обижать", sv:"обидеть",
    imp:"обижай, обижайте / обидь, обидьте",
    meaning:{ ru:"обижать", ar:"يجرح (شعور)", en:"to offend / hurt", fr:"offenser" },
    example:{ ru:"Не обижай младших.", ar:"لا تجرح الصغيرين.", en:"Don't offend the younger ones.", fr:"N'offense pas les plus petits." },
    root:"ОБИД", cat:"عواطف"
  },
  {
    nsv:"тосковать", sv:"затосковать",
    imp:"тоскуй, тоскуйте / затоскуй, затоскуйте",
    meaning:{ ru:"тосковать", ar:"يحن / يكتئب", en:"to yearn / be sad", fr:"languir" },
    example:{ ru:"Собака тоскует по хозяину.", ar:"الكلب حنّ لصاحبه.", en:"The dog yearns for its owner.", fr:"Le chien languit de son maître." },
    root:"ТОСК", cat:"عواطف"
  },
  {
    nsv:"пугаться", sv:"испугаться",
    imp:"пугайся, пугайтесь / испугайся, испугайтесь",
    meaning:{ ru:"пугаться", ar:"يخاف / يفزع", en:"to get scared", fr:"s'effrayer" },
    example:{ ru:"Ребёнок испугался грозы.", ar:"الطفل خاف من الرعد.", en:"The child got scared of the thunder.", fr:"L'enfant s'est effrayé de l'orage." },
    root:"ПУГ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"разливаться", sv:"разлиться",
    imp:"разливайся, разливайтесь / разлейся, разлейтесь",
    meaning:{ ru:"разливаться (о реке)", ar:"يفيض (النهر)", en:"to overflow (river)", fr:"déborder (rivière)" },
    example:{ ru:"Весной река разливается.", ar:"في الربيع النهر بيفيض.", en:"In spring the river overflows.", fr:"Au printemps la rivière déborde." },
    root:"ЛИВ", cat:"طبيعة"
  },
  {
    nsv:"осыпаться", sv:"осыпаться",
    imp:"осыпайся, осыпайтесь / осыпься, осыпьтесь",
    meaning:{ ru:"осыпаться (о листьях)", ar:"يتساقط (الورق)", en:"to fall off (leaves)", fr:"tomber (feuilles)" },
    example:{ ru:"Осенью листья осыпаются.", ar:"في الخريف الورق بيتساقط.", en:"In autumn leaves fall off.", fr:"En automne les feuilles tombent." },
    root:"СЫП", cat:"طبيعة"
  },
  {
    nsv:"печеть (солнце)", sv:"припекать",
    imp:"припекай, припекайте",
    meaning:{ ru:"припекать (о солнце)", ar:"تحرق الشمس", en:"to beat down (sun)", fr:"taper (soleil)" },
    example:{ ru:"Солнце припекает в полдень.", ar:"الشمس بتحرق الظهر.", en:"The sun beats down at noon.", fr:"Le soleil tape à midi." },
    root:"ПЕК", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"прихрамывать", sv:"прихрамывать",
    imp:"прихрамывай, прихрамывайте",
    meaning:{ ru:"прихрамывать", ar:"يعرج قليلاً", en:"to limp slightly", fr:"boitiller" },
    example:{ ru:"После травмы он прихрамывает.", ar:"بعد الإصابة هو بيعرج شوية.", en:"After the injury he limps slightly.", fr:"Après sa blessure il boitille." },
    root:"ХРАМ", cat:"صحة"
  },
  {
    nsv:"воспаляться", sv:"воспалиться",
    imp:"воспаляйся, воспаляйтесь / воспались, воспалитесь",
    meaning:{ ru:"воспаляться", ar:"يلتهب", en:"to become inflamed", fr:"s'enflammer" },
    example:{ ru:"Рана воспалилась.", ar:"الجرح التهب.", en:"The wound became inflamed.", fr:"La plaie s'est enflammée." },
    root:"ПАЛ", cat:"صحة"
  },
  {
    nsv:"прощупывать (пульс)", sv:"прощупать",
    imp:"прощупывай, прощупывайте / прощупай, прощупайте",
    meaning:{ ru:"прощупывать (пульс)", ar:"يتحسس النبض", en:"to feel the pulse", fr:"tâter le pouls" },
    example:{ ru:"Врач прощупывает пульс пациента.", ar:"الدكتور بيتحسس نبض المريض.", en:"The doctor feels the patient's pulse.", fr:"Le médecin tâte le pouls du patient." },
    root:"ЩУП", cat:"صحة"
  },
  {
    nsv:"отравляться", sv:"отравиться",
    imp:"отравляйся, отравляйтесь / отравись, отравитесь",
    meaning:{ ru:"отравляться", ar:"يتسمم", en:"to get poisoned", fr:"s'empoisonner" },
    example:{ ru:"Он отравился несвежей едой.", ar:"اتسمم من أكل بايت.", en:"He got poisoned by stale food.", fr:"Il s'est empoisonné avec de la nourriture avariée." },
    root:"ТРАВЛ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ И ОБЩЕСТВО (Relations & Social) =============
  {
    nsv:"сватать", sv:"сосватать",
    imp:"сватай, сватайте / сосватай, сосватайте",
    meaning:{ ru:"сватать", ar:"يخطب له", en:"to match‑make", fr:"arranger un mariage" },
    example:{ ru:"Сваха сватает невесту жениху.", ar:"الخاطبة بتخطب العروسة للعريس.", en:"The matchmaker matches a bride for the groom.", fr:"La marieuse trouve une fiancée pour le fiancé." },
    root:"СВАТ", cat:"علاقات"
  },
  {
    nsv:"нянчиться", sv:"понянчиться",
    imp:"нянчись, нянчитесь / понянчись, понянчитесь",
    meaning:{ ru:"нянчиться", ar:"يدلل / يرعى طفلاً", en:"to babysit / coddle", fr:"pouponner / materner" },
    example:{ ru:"Бабушка нянчится с внуками.", ar:"الجدة بتدلل أحفادها.", en:"Grandma coddles her grandchildren.", fr:"Grand‑mère pouponne ses petits‑enfants." },
    root:"НЯН", cat:"علاقات"
  },
  {
    nsv:"игнорировать", sv:"проигнорировать",
    imp:"игнорируй, игнорируйте / проигнорируй, проигнорируйте",
    meaning:{ ru:"игнорировать", ar:"يتجاهل", en:"to ignore", fr:"ignorer" },
    example:{ ru:"Не игнорируй мои сообщения.", ar:"لا تتجاهل رسايلي.", en:"Don't ignore my messages.", fr:"N'ignore pas mes messages." },
    root:"ИГНОР", cat:"علاقات"
  },
  {
    nsv:"рекомендовать", sv:"порекомендовать",
    imp:"рекомендуй, рекомендуйте / порекомендуй, порекомендуйте",
    meaning:{ ru:"рекомендовать", ar:"يوصي بـ", en:"to recommend", fr:"recommander" },
    example:{ ru:"Я рекомендую этого врача.", ar:"بنصح بالدكتور ده.", en:"I recommend this doctor.", fr:"Je recommande ce médecin." },
    root:"РЕКОМЕНД", cat:"علاقات"
  },

  // ============= ТЕХНИКА И ЦИФРА (Technology & Digital) =============
  {
    nsv:"веб‑серфить", sv:"повеб‑серфить",
    imp:"веб‑серфи, веб‑серфите / повеб‑серфи, повеб‑серфите",
    meaning:{ ru:"веб‑серфить", ar:"يتصفح الإنترنت", en:"to surf the web", fr:"surfer sur le web" },
    example:{ ru:"Я часто веб‑серфлю по вечерам.", ar:"كتير بتصفح الإنترنت بالليل.", en:"I often surf the web in the evenings.", fr:"Je surfe souvent sur le web le soir." },
    root:"СЕРФ", cat:"تقنية"
  },
  {
    nsv:"кликать", sv:"кликнуть",
    imp:"кликай, кликайте / кликни, кликните",
    meaning:{ ru:"кликать", ar:"ينقر (بالماوس)", en:"to click", fr:"cliquer" },
    example:{ ru:"Кликни на иконку, чтобы открыть программу.", ar:"انقر على الأيقونة عشان تفتح البرنامج.", en:"Click the icon to open the program.", fr:"Clique sur l'icône pour ouvrir le programme." },
    root:"КЛИК", cat:"تقنية"
  },
  {
    nsv:"логиниться (залогиниться)", sv:"залогиниться",
    imp:"логинься, логиньтесь / залогинься, залогиньтесь",
    meaning:{ ru:"логиниться", ar:"يسجل الدخول", en:"to log in", fr:"se connecter" },
    example:{ ru:"Я логинюсь в свой аккаунт.", ar:"بسجل دخول لحسابي.", en:"I log in to my account.", fr:"Je me connecte à mon compte." },
    root:"ЛОГ", cat:"تقنية"
  },
  {
    nsv:"сохраняться (в облаке)", sv:"сохраниться",
    imp:"сохраняйся, сохраняйтесь / сохранись, сохранитесь",
    meaning:{ ru:"сохраняться (в облаке)", ar:"يُحفظ تلقائياً", en:"to be saved to cloud", fr:"être sauvegardé dans le cloud" },
    example:{ ru:"Документ автоматически сохраняется в облаке.", ar:"المستند بينحفظ تلقائي في السحابة.", en:"The document is automatically saved to the cloud.", fr:"Le document est automatiquement sauvegardé dans le cloud." },
    root:"ХРАН", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ И КУЛЬТУРА (Education & Culture) =============
  {
    nsv:"посещать (музей)", sv:"посетить",
    imp:"посещай, посещайте / посети, посетите",
    meaning:{ ru:"посещать (музей)", ar:"يزور متحفاً", en:"to visit (a museum)", fr:"visiter (un musée)" },
    example:{ ru:"Туристы посещают Эрмитаж.", ar:"السياح بيزوروا الأرميتاج.", en:"Tourists visit the Hermitage.", fr:"Les touristes visitent l'Ermitage." },
    root:"СЕЩ", cat:"تعليم"
  },
  {
    nsv:"исследовать (космос)", sv:"исследовать",
    imp:"исследуй, исследуйте / исследуй, исследуйте",
    meaning:{ ru:"исследовать (космос)", ar:"يستكشف الفضاء", en:"to explore space", fr:"explorer l'espace" },
    example:{ ru:"Астрономы исследуют далёкие галактики.", ar:"الفلكيون بيستكشفوا مجرات بعيدة.", en:"Astronomers explore distant galaxies.", fr:"Les astronomes explorent des galaxies lointaines." },
    root:"СЛЕД", cat:"تعليم"
  },
  {
    nsv:"анализировать (текст)", sv:"проанализировать",
    imp:"анализируй, анализируйте / проанализируй, проанализируйте",
    meaning:{ ru:"анализировать (текст)", ar:"يحلل نصاً", en:"to analyze a text", fr:"analyser un texte" },
    example:{ ru:"Студент анализирует стихотворение.", ar:"الطالب بيحلل قصيدة.", en:"The student analyzes a poem.", fr:"L'étudiant analyse un poème." },
    root:"ЛИЗ", cat:"تعليم"
  },
  {
    nsv:"заучивать (наизусть)", sv:"заучить",
    imp:"заучивай, заучивайте / заучи, заучите",
    meaning:{ ru:"заучивать наизусть", ar:"يحفظ عن ظهر قلب", en:"to memorize", fr:"apprendre par cœur" },
    example:{ ru:"Актёр заучивает роль.", ar:"الممثل بيحفظ الدور.", en:"The actor memorizes the role.", fr:"L'acteur apprend son rôle par cœur." },
    root:"УЧ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА И ДЕНЬГИ (Economy & Money) =============
  {
    nsv:"давать взаймы", sv:"дать взаймы",
    imp:"давай взаймы, давайте взаймы / дай взаймы, дайте взаймы",
    meaning:{ ru:"давать взаймы", ar:"يُقرض", en:"to lend", fr:"prêter" },
    example:{ ru:"Я дал другу взаймы.", ar:"أقرضت صاحبي فلوس.", en:"I lent my friend money.", fr:"J'ai prêté de l'argent à mon ami." },
    root:"ДА", cat:"экономика"
  },
  {
    nsv:"просить в долг", sv:"попросить в долг",
    imp:"проси в долг, просите в долг / попроси в долг, попросите в долг",
    meaning:{ ru:"просить в долг", ar:"يطلب قرضاً", en:"to borrow (ask for loan)", fr:"emprunter (demander un prêt)" },
    example:{ ru:"Он попросил в долг до зарплаты.", ar:"طلب سلفة ليوم القبض.", en:"He asked for a loan until payday.", fr:"Il a demandé un prêt jusqu'à la paie." },
    root:"ПРОС", cat:"экономика"
  },
  {
    nsv:"обналичивать", sv:"обналичить",
    imp:"обналичивай, обналичивайте / обналичь, обналичьте",
    meaning:{ ru:"обналичивать", ar:"يصرف (شيكاً)", en:"to cash (a cheque)", fr:"encaisser (un chèque)" },
    example:{ ru:"Я обналичил чек в банке.", ar:"صرفت الشيك في البنك.", en:"I cashed the check at the bank.", fr:"J'ai encaissé le chèque à la banque." },
    root:"ЛИЧ", cat:"экономика"
  },
  {
    nsv:"инвестировать", sv:"проинвестировать",
    imp:"инвестируй, инвестируйте / проинвестируй, проинвестируйте",
    meaning:{ ru:"инвестировать", ar:"يستثمر", en:"to invest", fr:"investir" },
    example:{ ru:"Мы инвестируем в образование.", ar:"بنستثمر في التعليم.", en:"We invest in education.", fr:"Nous investissons dans l'éducation." },
    root:"ВЕСТ", cat:"экономика"
  },

  // ============= ПРАВО И ПОЛИТИКА (Law & Politics) =============
  {
    nsv:"голосовать (на выборах)", sv:"проголосовать",
    imp:"голосуй, голосуйте / проголосуй, проголосуйте",
    meaning:{ ru:"голосовать (на выборах)", ar:"يدلي بصوته", en:"to cast a vote", fr:"voter (dans une élection)" },
    example:{ ru:"Граждане голосовали на избирательном участке.", ar:"المواطنون أدلوا بأصواتهم في اللجنة.", en:"Citizens cast their votes at the polling station.", fr:"Les citoyens ont voté au bureau de vote." },
    root:"ГОЛОС", cat:"قانون"
  },
  {
    nsv:"вносить законопроект", sv:"внести",
    imp:"вноси законопроект, вносите законопроект / внеси законопроект, внесите законопроект",
    meaning:{ ru:"вносить законопроект", ar:"يتقدم بمشروع قانون", en:"to introduce a bill", fr:"déposer un projet de loi" },
    example:{ ru:"Депутат внёс законопроект о спорте.", ar:"النائب قدم مشروع قانون عن الرياضة.", en:"The deputy introduced a bill on sports.", fr:"Le député a déposé un projet de loi sur le sport." },
    root:"НОС", cat:"قانون"
  },
  {
    nsv:"ратифицировать", sv:"ратифицировать",
    imp:"ратифицируй, ратифицируйте / ратифицируй, ратифицируйте",
    meaning:{ ru:"ратифицировать", ar:"يصادق على معاهدة", en:"to ratify a treaty", fr:"ratifier un traité" },
    example:{ ru:"Парламент ратифицировал международный договор.", ar:"البرلمان صادق على المعاهدة الدولية.", en:"Parliament ratified the international treaty.", fr:"Le parlement a ratifié le traité international." },
    root:"РАТИФ", cat:"قانون"
  },
  {
    nsv:"апеллировать", sv:"апеллировать",
    imp:"апеллируй, апеллируйте / апеллируй, апеллируйте",
    meaning:{ ru:"апеллировать", ar:"يستأنف حكماً", en:"to appeal (a decision)", fr:"faire appel (d'une décision)" },
    example:{ ru:"Адвокат апеллировал к высшему суду.", ar:"المحامي استأنف للمحكمة العليا.", en:"The lawyer appealed to the higher court.", fr:"L'avocat a fait appel à la cour supérieure." },
    root:"АПЕЛ", cat:"قانون"
  },

  // ============= СПОРТ И ИГРЫ (Sports & Games) =============
  {
    nsv:"стартовать", sv:"стартовать",
    imp:"стартуй, стартуйте / стартуй, стартуйте",
    meaning:{ ru:"стартовать", ar:"يبدأ السباق", en:"to start (a race)", fr:"prendre le départ" },
    example:{ ru:"Гонщики стартуют после сигнала.", ar:"المتسابقون بينطلقوا بعد الإشارة.", en:"The racers start after the signal.", fr:"Les coureurs prennent le départ après le signal." },
    root:"СТАРТ", cat:"رياضة"
  },
  {
    nsv:"финишировать", sv:"финишировать",
    imp:"финишируй, финишируйте / финишируй, финишируйте",
    meaning:{ ru:"финишировать", ar:"يصل لخط النهاية", en:"to finish (a race)", fr:"franchir la ligne d'arrivée" },
    example:{ ru:"Первым финишировал российский бегун.", ar:"العدّاء الروسي وصل الأول.", en:"The Russian runner finished first.", fr:"Le coureur russe a franchi la ligne le premier." },
    root:"ФИНИШ", cat:"رياضة"
  },
  {
    nsv:"играть в баскетбол", sv:"сыграть в баскетбол",
    imp:"играй, играйте / сыграй, сыграйте",
    meaning:{ ru:"играть в баскетбол", ar:"يلعب كرة السلة", en:"to play basketball", fr:"jouer au basket" },
    example:{ ru:"Мы играем в баскетбол по выходным.", ar:"بنلعب باسكتبول في الإجازات.", en:"We play basketball on weekends.", fr:"Nous jouons au basket le week‑end." },
    root:"ИГР", cat:"رياضة"
  },
  {
    nsv:"качать пресс", sv:"покачать пресс",
    imp:"качай пресс, качайте пресс / покачай пресс, покачайте пресс",
    meaning:{ ru:"качать пресс", ar:"يقوي عضلات البطن", en:"to do sit‑ups / crunches", fr:"faire des abdominaux" },
    example:{ ru:"Я качаю пресс каждый день.", ar:"بمرن عضلات بطني كل يوم.", en:"I do sit‑ups every day.", fr:"Je fais des abdominaux tous les jours." },
    root:"КАЧ", cat:"رياضة"
  },

  // ============= ИСКУССТВО И ТВОРЧЕСТВО (Art & Creativity) =============
  {
    nsv:"выступать (на сцене)", sv:"выступить",
    imp:"выступай, выступайте / выступи, выступите",
    meaning:{ ru:"выступать (на сцене)", ar:"يؤدي على المسرح", en:"to perform on stage", fr:"se produire sur scène" },
    example:{ ru:"Певица выступает в большом зале.", ar:"المطربة بتؤدي في القاعة الكبيرة.", en:"The singer performs in the big hall.", fr:"La chanteuse se produit dans la grande salle." },
    root:"СТУП", cat:"فن"
  },
  {
    nsv:"позировать", sv:"попозировать",
    imp:"позируй, позируйте / попозируй, попозируйте",
    meaning:{ ru:"позировать", ar:"يتخذ وضعية (للرسم)", en:"to pose", fr:"poser" },
    example:{ ru:"Модель позирует художнику.", ar:"الموديل بتتخذ وضعية للرسام.", en:"The model poses for the artist.", fr:"Le modèle pose pour l'artiste." },
    root:"ПОЗ", cat:"فن"
  },
  {
    nsv:"копировать (картину)", sv:"скопировать",
    imp:"копируй, копируйте / скопируй, скопируйте",
    meaning:{ ru:"копировать (произведение)", ar:"يقلد لوحة", en:"to copy (a painting)", fr:"copier (un tableau)" },
    example:{ ru:"Студент копирует работу мастера.", ar:"الطالب بيقلد لوحة الفنان.", en:"The student copies the master's work.", fr:"L'étudiant copie l'œuvre du maître." },
    root:"КОПИР", cat:"فن"
  },
  {
    nsv:"оркестровать", sv:"оркестровать",
    imp:"оркеструй, оркеструйте / оркеструй, оркеструйте",
    meaning:{ ru:"оркестровать", ar:"يوزع الأوركسترا", en:"to orchestrate", fr:"orchestrer" },
    example:{ ru:"Композитор оркеструет симфонию.", ar:"المؤلف بيوزع الأوركسترا للسيمفونية.", en:"The composer orchestrates the symphony.", fr:"Le compositeur orchestre la symphonie." },
    root:"ОРКЕСТР", cat:"فن"
  },

  // ============= ВОЕННОЕ ДЕЛО (Military & Defense) =============
  {
    nsv:"штурмовать", sv:"штурмовать",
    imp:"штурмуй, штурмуйте / штурмуй, штурмуйте",
    meaning:{ ru:"штурмовать", ar:"يقتحم", en:"to storm / assault", fr:"donner l'assaut" },
    example:{ ru:"Солдаты штурмуют крепость.", ar:"الجنود بيقتحموا القلعة.", en:"The soldiers storm the fortress.", fr:"Les soldats donnent l'assaut à la forteresse." },
    root:"ШТУРМ", cat:"عسكرية"
  },
  {
    nsv:"отстреливаться", sv:"отстреляться",
    imp:"отстреливайся, отстреливайтесь / отстреляйся, отстреляйтесь",
    meaning:{ ru:"отстреливаться", ar:"يرد النار", en:"to shoot back", fr:"riposter par le feu" },
    example:{ ru:"Подразделение отстреливалось от атакующих.", ar:"الوحدة ردت النار على المهاجمين.", en:"The unit shot back at the attackers.", fr:"L'unité ripostait par le feu contre les assaillants." },
    root:"СТРЕЛ", cat:"عسكرية"
  },
  {
    nsv:"брать в плен", sv:"взять в плен",
    imp:"бери в плен, берите в плен / возьми в плен, возьмите в плен",
    meaning:{ ru:"брать в плен", ar:"يأسر", en:"to take prisoner", fr:"faire prisonnier" },
    example:{ ru:"Солдаты взяли в плен вражеского офицера.", ar:"الجنود أسروا ضابطاً من العدو.", en:"The soldiers took an enemy officer prisoner.", fr:"Les soldats ont fait prisonnier un officier ennemi." },
    root:"БР", cat:"عسكرية"
  },
  {
    nsv:"капитулировать", sv:"капитулировать",
    imp:"капитулируй, капитулируйте / капитулируй, капитулируйте",
    meaning:{ ru:"капитулировать", ar:"يستسلم", en:"to surrender", fr:"capituler" },
    example:{ ru:"Гарнизон капитулировал после долгой осады.", ar:"الحامية استسلمت بعد حصار طويل.", en:"The garrison surrendered after a long siege.", fr:"La garnison capitula après un long siège." },
    root:"КАПИТУЛ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"подниматься", sv:"подняться",
    imp:"поднимайся, поднимайтесь / поднимись, поднимитесь",
    meaning:{ ru:"подниматься", ar:"يصعد / يرتفع", en:"to rise / go up", fr:"monter / s'élever" },
    example:{ ru:"Солнце поднимается над горизонтом.", ar:"الشمس بتطلع فوق الأفق.", en:"The sun rises above the horizon.", fr:"Le soleil se lève au‑dessus de l'horizon." },
    root:"НИМ", cat:"حركة"
  },
  {
    nsv:"спускаться", sv:"спуститься",
    imp:"спускайся, спускайтесь / спустись, спуститесь",
    meaning:{ ru:"спускаться", ar:"ينزل", en:"to descend / go down", fr:"descendre" },
    example:{ ru:"Лифт спускается на первый этаж.", ar:"المصعد بينزل للدور الأول.", en:"The elevator descends to the first floor.", fr:"L'ascenseur descend au rez‑de‑chaussée." },
    root:"ПУСК", cat:"حركة"
  },
  {
    nsv:"приближаться", sv:"приблизиться",
    imp:"приближайся, приближайтесь / приблизься, приблизьтесь",
    meaning:{ ru:"приближаться", ar:"يقترب", en:"to approach / come closer", fr:"s'approcher" },
    example:{ ru:"Поезд приближается к станции.", ar:"القطار بيقرب من المحطة.", en:"The train approaches the station.", fr:"Le train s'approche de la gare." },
    root:"БЛИЖ", cat:"حركة"
  },
  {
    nsv:"отдаляться", sv:"отдалиться",
    imp:"отдаляйся, отдаляйтесь / отдались, отдалитесь",
    meaning:{ ru:"отдаляться", ar:"يبتعد", en:"to move away / distance oneself", fr:"s'éloigner" },
    example:{ ru:"Звук отдаляется.", ar:"الصوت بيبعد.", en:"The sound is fading away.", fr:"Le son s'éloigne." },
    root:"ДАЛ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"ощущать вкус", sv:"ощутить вкус",
    imp:"ощущай вкус, ощущайте вкус / ощути вкус, ощутите вкус",
    meaning:{ ru:"ощущать вкус", ar:"يتذوق", en:"to taste (perceive)", fr:"goûter (percevoir)" },
    example:{ ru:"Я ощущаю вкус лимона.", ar:"حاسس بطعم الليمون.", en:"I taste lemon.", fr:"Je sens le goût du citron." },
    root:"ОЩУЩ", cat:"حواس"
  },
  {
    nsv:"вдыхать", sv:"вдохнуть",
    imp:"вдыхай, вдыхайте / вдохни, вдохните",
    meaning:{ ru:"вдыхать", ar:"يستنشق", en:"to inhale", fr:"inspirer" },
    example:{ ru:"Вдохни свежий воздух.", ar:"استنشق الهوا النقي.", en:"Inhale the fresh air.", fr:"Inspire l'air frais." },
    root:"ДЫХ", cat:"حواس"
  },
  {
    nsv:"выдыхать", sv:"выдохнуть",
    imp:"выдыхай, выдыхайте / выдохни, выдохните",
    meaning:{ ru:"выдыхать", ar:"يزفر", en:"to exhale", fr:"expirer" },
    example:{ ru:"Выдохни медленно.", ar:"اطلع النفس ببطء.", en:"Exhale slowly.", fr:"Expire lentement." },
    root:"ДЫХ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"шептаться", sv:"пошептаться",
    imp:"шепчитесь, шепчитесь / пошепчитесь, пошепчитесь",
    meaning:{ ru:"шептаться", ar:"يتهامسون", en:"to whisper (to each other)", fr:"chuchoter (entre eux)" },
    example:{ ru:"Подруги шепчутся на уроке.", ar:"البنات بيتهامسوا في الفصل.", en:"The girlfriends whisper in class.", fr:"Les copines chuchotent en classe." },
    root:"ШЕПТ", cat:"تواصل"
  },
  {
    nsv:"критиковать", sv:"раскритиковать",
    imp:"критикуй, критикуйте / раскритикуй, раскритикуйте",
    meaning:{ ru:"критиковать", ar:"ينتقد", en:"to criticize", fr:"critiquer" },
    example:{ ru:"Не критикуй других зря.", ar:"لا تنتقد غيرك عبثاً.", en:"Don't criticize others for nothing.", fr:"Ne critique pas les autres pour rien." },
    root:"КРИТ", cat:"تواصل"
  },
  {
    nsv:"приказывать", sv:"приказать",
    imp:"приказывай, приказывайте / прикажи, прикажите",
    meaning:{ ru:"приказывать", ar:"يأمر", en:"to order / command", fr:"ordonner" },
    example:{ ru:"Офицер приказывает солдатам.", ar:"الضابط بيأمر الجنود.", en:"The officer orders the soldiers.", fr:"L'officier commande aux soldats." },
    root:"КАЗ", cat:"تواصل"
  },
  {
    nsv:"просить прощения", sv:"попросить прощения",
    imp:"проси прощения, просите прощения / попроси прощения, попросите прощения",
    meaning:{ ru:"просить прощения", ar:"يطلب السماح", en:"to apologize", fr:"demander pardon" },
    example:{ ru:"Я хочу попросить прощения.", ar:"عاوز أطلب السماح.", en:"I want to apologize.", fr:"Je veux demander pardon." },
    root:"ПРОС", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"обучать", sv:"обучить",
    imp:"обучай, обучайте / обучи, обучите",
    meaning:{ ru:"обучать", ar:"يدرّب / يعلم", en:"to teach / train", fr:"former / enseigner" },
    example:{ ru:"Тренер обучает новичков.", ar:"المدرب بيدرب المبتدئين.", en:"The coach trains beginners.", fr:"L'entraîneur forme les débutants." },
    root:"УЧ", cat:"ذهنية"
  },
  {
    nsv:"продумывать", sv:"продумать",
    imp:"продумывай, продумывайте / продумай, продумайте",
    meaning:{ ru:"продумывать", ar:"يخطط بعناية", en:"to think through", fr:"réfléchir à fond" },
    example:{ ru:"Я продумываю план действий.", ar:"بخطط للخطة بدقة.", en:"I think through the action plan.", fr:"Je réfléchis à fond au plan d'action." },
    root:"ДУМ", cat:"ذهنية"
  },
  {
    nsv:"рефлексировать", sv:"отрефлексировать",
    imp:"рефлексируй, рефлексируйте / отрефлексируй, отрефлексируйте",
    meaning:{ ru:"рефлексировать", ar:"يتأمل (ذاته)", en:"to reflect on oneself", fr:"réfléchir sur soi‑même" },
    example:{ ru:"Психолог учит рефлексировать.", ar:"الطبيب النفسي بيعلم التأمل الذاتي.", en:"The psychologist teaches to reflect.", fr:"Le psychologue enseigne à réfléchir sur soi." },
    root:"РЕФЛЕКС", cat:"ذهنية"
  },
  {
    nsv:"приходить к выводу", sv:"прийти к выводу",
    imp:"приходи к выводу, приходите к выводу / приди к выводу, придите к выводу",
    meaning:{ ru:"приходить к выводу", ar:"يخلص إلى نتيجة", en:"to come to a conclusion", fr:"arriver à une conclusion" },
    example:{ ru:"Учёный пришёл к выводу о пользе спорта.", ar:"العالم خلص لنتيجة إن الرياضة مفيدة.", en:"The scientist came to the conclusion that sport is beneficial.", fr:"Le scientifique est arrivé à la conclusion que le sport est bénéfique." },
    root:"ХОД", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"нарезать", sv:"нарезать",
    imp:"нарезай, нарезайте / нарежь, нарежьте",
    meaning:{ ru:"нарезать", ar:"يقطع (طعاماً)", en:"to slice / cut", fr:"couper / trancher" },
    example:{ ru:"Нарежь хлеб для бутербродов.", ar:"قطع العيش للسندويتشات.", en:"Slice the bread for sandwiches.", fr:"Tranche le pain pour les sandwichs." },
    root:"РЕЗ", cat:"عمل"
  },
  {
    nsv:"открывать (кран)", sv:"открыть",
    imp:"открывай, открывайте / открой, откройте",
    meaning:{ ru:"открывать (кран)", ar:"يفتح الحنفية", en:"to turn on (a tap)", fr:"ouvrir (un robinet)" },
    example:{ ru:"Открой кран с горячей водой.", ar:"افتح حنفية المية السخنة.", en:"Turn on the hot water tap.", fr:"Ouvre le robinet d'eau chaude." },
    root:"КРЫ", cat:"عمل"
  },
  {
    nsv:"закрывать (кран)", sv:"закрыть",
    imp:"закрывай, закрывайте / закрой, закройте",
    meaning:{ ru:"закрывать (кран)", ar:"يقفل الحنفية", en:"to turn off (a tap)", fr:"fermer (un robinet)" },
    example:{ ru:"Закрой кран – вода переливается.", ar:"اقفل الحنفية – المية بتفيض.", en:"Turn off the tap – the water is overflowing.", fr:"Ferme le robinet – l'eau déborde." },
    root:"КРЫ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"радоваться", sv:"обрадоваться",
    imp:"радуйся, радуйтесь / обрадуйся, обрадуйтесь",
    meaning:{ ru:"радоваться", ar:"يفرح", en:"to rejoice / be glad", fr:"se réjouir" },
    example:{ ru:"Дети радуются подаркам.", ar:"الأطفال فرحانين بالهدايا.", en:"The children rejoice over the gifts.", fr:"Les enfants se réjouissent des cadeaux." },
    root:"РАД", cat:"عواطف"
  },
  {
    nsv:"плакать", sv:"заплакать",
    imp:"плачь, плачьте / заплачь, заплачьте",
    meaning:{ ru:"плакать", ar:"يبكي", en:"to cry", fr:"pleurer" },
    example:{ ru:"Младенец плачет от голода.", ar:"الرضيع بيعيط من الجوع.", en:"The infant cries from hunger.", fr:"Le nourrisson pleure de faim." },
    root:"ПЛАК", cat:"عواطف"
  },
  {
    nsv:"восхищаться", sv:"восхититься",
    imp:"восхищайся, восхищайтесь / восхитись, восхититесь",
    meaning:{ ru:"восхищаться", ar:"ينبهر", en:"to admire / be amazed", fr:"admirer / s'émerveiller" },
    example:{ ru:"Зрители восхищаются акробатами.", ar:"الجمهور منبهر بالبهلوانات.", en:"The audience admires the acrobats.", fr:"Le public admire les acrobates." },
    root:"ХИЩ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"закаляться", sv:"закалиться",
    imp:"закаляйся, закаляйтесь / закались, закалитесь",
    meaning:{ ru:"закаляться (о стали/организме)", ar:"يتصلب / يتقوى", en:"to become hardened / tempered", fr:"se tremper / s'endurcir" },
    example:{ ru:"Закаляйся: принимай контрастный душ!", ar:"اتقوّى: خد دش متباين!", en:"Temper yourself: take a contrast shower!", fr:"Endurcis‑toi : prends une douche contrastée !" },
    root:"КАЛ", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"промывать (рану)", sv:"промыть",
    imp:"промывай, промывайте / промой, промойте",
    meaning:{ ru:"промывать (рану)", ar:"ينظف الجرح بالماء", en:"to wash out a wound", fr:"nettoyer une plaie à l'eau" },
    example:{ ru:"Промой рану перекисью.", ar:"نضّف الجرح بالبيروكسيد.", en:"Wash the wound with peroxide.", fr:"Nettoie la plaie avec de l'eau oxygénée." },
    root:"МЫ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"заступаться", sv:"заступиться",
    imp:"заступайся, заступайтесь / заступись, заступитесь",
    meaning:{ ru:"заступаться", ar:"يدافع عن شخص", en:"to stand up for someone", fr:"prendre la défense de quelqu'un" },
    example:{ ru:"Старший брат заступился за младшего.", ar:"الأخ الكبير دافع عن الصغير.", en:"The older brother stood up for the younger one.", fr:"Le grand frère a pris la défense du petit." },
    root:"СТУП", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"верифицировать", sv:"верифицировать",
    imp:"верифицируй, верифицируйте / верифицируй, верифицируйте",
    meaning:{ ru:"верифицировать", ar:"يتحقق من صحة", en:"to verify", fr:"vérifier" },
    example:{ ru:"Система верифицирует данные.", ar:"النظام بيتحقق من صحة البيانات.", en:"The system verifies the data.", fr:"Le système vérifie les données." },
    root:"ВЕРИФ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"практиковаться", sv:"попрактиковаться",
    imp:"практикуйся, практикуйтесь / попрактикуйся, попрактикуйтесь",
    meaning:{ ru:"практиковаться", ar:"يتدرب عملياً", en:"to practise", fr:"s'entraîner" },
    example:{ ru:"Студенты практикуются в лаборатории.", ar:"الطلاب بيتدربوا في المعمل.", en:"Students practise in the laboratory.", fr:"Les étudiants s'entraînent au laboratoire." },
    root:"ПРАКТ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"расплачиваться", sv:"расплатиться",
    imp:"расплачивайся, расплачивайтесь / расплатись, расплатитесь",
    meaning:{ ru:"расплачиваться", ar:"يسدد الحساب", en:"to pay off / settle up", fr:"régler (une dette)" },
    example:{ ru:"Пора расплатиться по кредиту.", ar:"حان وقت سداد القرض.", en:"It's time to pay off the loan.", fr:"Il est temps de rembourser le prêt." },
    root:"ПЛАТ", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"оспаривать", sv:"оспорить",
    imp:"оспаривай, оспаривайте / оспорь, оспорьте",
    meaning:{ ru:"оспаривать", ar:"يعترض قانونياً", en:"to dispute / contest", fr:"contester" },
    example:{ ru:"Адвокат оспаривает решение суда.", ar:"المحامي بيعترض على حكم المحكمة.", en:"The lawyer disputes the court ruling.", fr:"L'avocat conteste la décision du tribunal." },
    root:"СПОР", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"побеждать", sv:"победить",
    imp:"побеждай, побеждайте / победи, победите",
    meaning:{ ru:"побеждать", ar:"ينتصر", en:"to win / defeat", fr:"vaincre / gagner" },
    example:{ ru:"Наша команда всегда побеждает!", ar:"فريقنا دايمًا بينتصر!", en:"Our team always wins!", fr:"Notre équipe gagne toujours !" },
    root:"БЕД", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"реставрировать", sv:"отреставрировать",
    imp:"реставрируй, реставрируйте / отреставрируй, отреставрируйте",
    meaning:{ ru:"реставрировать", ar:"يرمم (لوحة)", en:"to restore (art)", fr:"restaurer (une œuvre)" },
    example:{ ru:"Реставратор реставрирует старую икону.", ar:"المرمم بيصلح أيقونة قديمة.", en:"The restorer restores an old icon.", fr:"Le restaurateur restaure une vieille icône." },
    root:"РЕСТАВР", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"маскироваться", sv:"замаскироваться",
    imp:"маскируйся, маскируйтесь / замаскируйся, замаскируйтесь",
    meaning:{ ru:"маскироваться", ar:"يتخفى", en:"to camouflage oneself", fr:"se camoufler" },
    example:{ ru:"Солдаты маскируются в лесу.", ar:"الجنود بيتخفوا في الغابة.", en:"Soldiers camouflage themselves in the forest.", fr:"Les soldats se camouflent dans la forêt." },
    root:"МАСК", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перемещать", sv:"переместить",
    imp:"перемещай, перемещайте / перемести, переместите",
    meaning:{ ru:"перемещать", ar:"ينقل / يحرك", en:"to move (something)", fr:"déplacer (qqch)" },
    example:{ ru:"Он перемещает стол в угол.", ar:"بينقل الطرابيزة للركن.", en:"He moves the table to the corner.", fr:"Il déplace la table dans le coin." },
    root:"МЕСТ", cat:"حركة"
  },
  {
    nsv:"перетаскивать", sv:"перетащить",
    imp:"перетаскивай, перетаскивайте / перетащи, перетащите",
    meaning:{ ru:"перетаскивать", ar:"يسحب (شيئاً ثقيلاً)", en:"to drag over", fr:"traîner (qqch)" },
    example:{ ru:"Мы перетащили диван в другую комнату.", ar:"سحبنا الكنبة للأوضة التانية.", en:"We dragged the sofa to the other room.", fr:"Nous avons traîné le canapé dans l'autre pièce." },
    root:"ТАЩ", cat:"حركة"
  },
  {
    nsv:"спускаться (с горы)", sv:"спуститься",
    imp:"спускайся, спускайтесь / спустись, спуститесь",
    meaning:{ ru:"спускаться (с горы)", ar:"ينزل (من الجبل)", en:"to descend (from a mountain)", fr:"descendre (d'une montagne)" },
    example:{ ru:"Альпинисты спускаются с вершины.", ar:"المتسلقون بينزلوا من القمة.", en:"The climbers descend from the peak.", fr:"Les alpinistes descendent du sommet." },
    root:"ПУСК", cat:"حركة"
  },
  {
    nsv:"объезжать", sv:"объехать",
    imp:"объезжай, объезжайте / объедь, объедьте",
    meaning:{ ru:"объезжать", ar:"يدور حول", en:"to drive around / bypass", fr:"contourner" },
    example:{ ru:"Мы объехали пробку.", ar:"لفّينا حوالين الزحمة.", en:"We bypassed the traffic jam.", fr:"Nous avons contourné l'embouteillage." },
    root:"ЕЗД", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"всматриваться", sv:"всмотреться",
    imp:"всматривайся, всматривайтесь / всмотрись, всмотритесь",
    meaning:{ ru:"всматриваться", ar:"يدقق النظر", en:"to peer / gaze intently", fr:"scruter du regard" },
    example:{ ru:"Он всматривается в темноту.", ar:"بيدقق في الضلمة.", en:"He peers into the darkness.", fr:"Il scrute l'obscurité." },
    root:"СМОТР", cat:"حواس"
  },
  {
    nsv:"пробовать (на ощупь)", sv:"попробовать",
    imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать на ощупь", ar:"يتحسس", en:"to feel (by touch)", fr:"toucher (palper)" },
    example:{ ru:"Попробуй материал – он мягкий.", ar:"تحسس القماش – ناعم.", en:"Feel the fabric – it's soft.", fr:"Touche le tissu – il est doux." },
    root:"ПРОБ", cat:"حواس"
  },
  {
    nsv:"слышать (слух)", sv:"услышать",
    imp:"слышь, слышьте / услышь, услышьте",
    meaning:{ ru:"слышать", ar:"يسمع", en:"to hear", fr:"entendre" },
    example:{ ru:"Я слышу шум моря.", ar:"بسمع صوت البحر.", en:"I hear the sound of the sea.", fr:"J'entends le bruit de la mer." },
    root:"СЛЫШ", cat:"حواس"
  },
  {
    nsv:"слушать (музыку)", sv:"послушать",
    imp:"слушай, слушайте / послушай, послушайте",
    meaning:{ ru:"слушать (музыку)", ar:"يستمع للموسيقى", en:"to listen to music", fr:"écouter de la musique" },
    example:{ ru:"Я люблю слушать классическую музыку.", ar:"بحب أسمع مزيكا كلاسيكية.", en:"I love listening to classical music.", fr:"J'aime écouter de la musique classique." },
    root:"СЛУШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"возражать", sv:"возразить",
    imp:"возражай, возражайте / возрази, возразите",
    meaning:{ ru:"возражать", ar:"يعترض", en:"to object", fr:"objecter" },
    example:{ ru:"Никто не возражает против плана.", ar:"محدش بيعترض على الخطة.", en:"Nobody objects to the plan.", fr:"Personne ne s'oppose au plan." },
    root:"РАЖ", cat:"تواصل"
  },
  {
    nsv:"восхвалять", sv:"восхвалить",
    imp:"восхваляй, восхваляйте / восхвали, восхвалите",
    meaning:{ ru:"восхвалять", ar:"يمدح / يثني على", en:"to praise", fr:"louer" },
    example:{ ru:"Учитель восхваляет ученика.", ar:"المعلم بيمدح الطالب.", en:"The teacher praises the pupil.", fr:"Le professeur loue l'élève." },
    root:"ХВАЛ", cat:"تواصل"
  },
  {
    nsv:"комментировать", sv:"прокомментировать",
    imp:"комментируй, комментируйте / прокомментируй, прокомментируйте",
    meaning:{ ru:"комментировать", ar:"يعلق (على خبر)", en:"to comment", fr:"commenter" },
    example:{ ru:"Эксперт комментирует новости.", ar:"الخبير بيعلق على الأخبار.", en:"The expert comments on the news.", fr:"L'expert commente les nouvelles." },
    root:"КОММЕНТ", cat:"تواصل"
  },
  {
    nsv:"произносить", sv:"произнести",
    imp:"произноси, произносите / произнеси, произнесите",
    meaning:{ ru:"произносить", ar:"ينطق", en:"to pronounce / utter", fr:"prononcer" },
    example:{ ru:"Она произнесла речь перед залом.", ar:"ألقت خطاباً قدام القاعة.", en:"She delivered a speech to the hall.", fr:"Elle a prononcé un discours devant la salle." },
    root:"НОС", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"раздумывать", sv:"раздумать",
    imp:"раздумывай, раздумывайте / раздумай, раздумайте",
    meaning:{ ru:"раздумывать", ar:"يغير رأيه", en:"to change one's mind", fr:"changer d'avis" },
    example:{ ru:"Я раздумал ехать.", ar:"غيرت رأيي في السفر.", en:"I changed my mind about going.", fr:"J'ai changé d'avis sur le voyage." },
    root:"ДУМ", cat:"ذهنية"
  },
  {
    nsv:"понимать (осознавать)", sv:"понять",
    imp:"понимай, понимайте / пойми, поймите",
    meaning:{ ru:"понимать", ar:"يفهم", en:"to understand", fr:"comprendre" },
    example:{ ru:"Я понимаю твои чувства.", ar:"أنا فاهم مشاعرك.", en:"I understand your feelings.", fr:"Je comprends tes sentiments." },
    root:"НИМ", cat:"ذهنية"
  },
  {
    nsv:"заучивать", sv:"заучить",
    imp:"заучивай, заучивайте / заучи, заучите",
    meaning:{ ru:"заучивать", ar:"يحفظ", en:"to memorize", fr:"mémoriser" },
    example:{ ru:"Актёр заучивает текст.", ar:"الممثل بيحفظ النص.", en:"The actor memorizes the text.", fr:"L'acteur mémorise le texte." },
    root:"УЧ", cat:"ذهنية"
  },
  {
    nsv:"осмыслить", sv:"осмыслить",
    imp:"осмысляй, осмысляйте / осмысли, осмыслите",
    meaning:{ ru:"осмыслить", ar:"يستوعب", en:"to comprehend", fr:"comprendre en profondeur" },
    example:{ ru:"Он осмыслил прочитанное.", ar:"استوعب اللي قراه.", en:"He comprehended what he read.", fr:"Il a compris en profondeur ce qu'il a lu." },
    root:"МЫСЛ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"пылесосить", sv:"пропылесосить",
    imp:"пылесось, пылесосьте / пропылесось, пропылесосьте",
    meaning:{ ru:"пылесосить", ar:"يكنس بالميكانيكية", en:"to vacuum", fr:"passer l'aspirateur" },
    example:{ ru:"Я пылесошу ковёр раз в неделю.", ar:"بكنس السجادة مرة في الأسبوع.", en:"I vacuum the carpet once a week.", fr:"Je passe l'aspirateur une fois par semaine." },
    root:"ПЫЛ", cat:"عمل"
  },
  {
    nsv:"подметать", sv:"подмести",
    imp:"подметай, подметайте / подмети, подметите",
    meaning:{ ru:"подметать", ar:"يكنس (باليد)", en:"to sweep", fr:"balayer" },
    example:{ ru:"Подмети пол перед уходом.", ar:"اكنس الأرض قبل ما تمشي.", en:"Sweep the floor before leaving.", fr:"Balaye le sol avant de partir." },
    root:"МЕТ", cat:"عمل"
  },
  {
    nsv:"гладить (бельё)", sv:"погладить",
    imp:"гладь, гладьте / погладь, погладьте",
    meaning:{ ru:"гладить (бельё)", ar:"يكوي", en:"to iron", fr:"repasser" },
    example:{ ru:"Она гладит рубашку для мужa.", ar:"بتكوي القميص لجوزها.", en:"She irons a shirt for her husband.", fr:"Elle repasse une chemise pour son mari." },
    root:"ГЛАД", cat:"عمل"
  },
  {
    nsv:"шить (иголкой)", sv:"сшить",
    imp:"шей, шейте / сшей, сшейте",
    meaning:{ ru:"шить", ar:"يخيط", en:"to sew", fr:"coudre" },
    example:{ ru:"Портной шьёт платье.", ar:"الخياط بيخيط فستان.", en:"The tailor sews a dress.", fr:"Le tailleur coud une robe." },
    root:"ШИ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"завидовать", sv:"позавидовать",
    imp:"завидуй, завидуйте / позавидуй, позавидуйте",
    meaning:{ ru:"завидовать", ar:"يحسد", en:"to envy", fr:"envier" },
    example:{ ru:"Не завидуй чужим успехам.", ar:"لا تحسد نجاح غيرك.", en:"Don't envy others' success.", fr:"N'envie pas le succès des autres." },
    root:"ЗАВИД", cat:"عواطف"
  },
  {
    nsv:"жалеть", sv:"пожалеть",
    imp:"жалей, жалейте / пожалей, пожалейте",
    meaning:{ ru:"жалеть", ar:"يشفق / يأسف", en:"to pity / regret", fr:"plaindre / regretter" },
    example:{ ru:"Я жалею о своей ошибке.", ar:"أنا نادم على غلطتي.", en:"I regret my mistake.", fr:"Je regrette mon erreur." },
    root:"ЖАЛ", cat:"عواطف"
  },
  {
    nsv:"возмущаться", sv:"возмутиться",
    imp:"возмущайся, возмущайтесь / возмутись, возмутитесь",
    meaning:{ ru:"возмущаться", ar:"يغضب / يستاء", en:"to be outraged", fr:"s'indigner" },
    example:{ ru:"Жители возмущаются шумом.", ar:"السكان غاضبون من الضوضاء.", en:"The residents are outraged by the noise.", fr:"Les habitants s'indignent du bruit." },
    root:"МУТ", cat:"عواطف"
  },
  {
    nsv:"надеяться", sv:"понадеяться",
    imp:"надейся, надейтесь / понадейся, понадейтесь",
    meaning:{ ru:"надеяться", ar:"يأمل", en:"to hope", fr:"espérer" },
    example:{ ru:"Я надеюсь на лучшее.", ar:"بأمل في الأفضل.", en:"I hope for the best.", fr:"J'espère le meilleur." },
    root:"НАД", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"распускаться", sv:"распуститься",
    imp:"распускайся, распускайтесь / распустись, распуститесь",
    meaning:{ ru:"распускаться (о цветах)", ar:"يتفتح (الزهر)", en:"to bloom (flowers)", fr:"éclore (fleurs)" },
    example:{ ru:"Розы распускаются в июне.", ar:"الورد بيتفتح في يونيو.", en:"Roses bloom in June.", fr:"Les roses éclosent en juin." },
    root:"ПУСК", cat:"طبيعة"
  },
  {
    nsv:"линять", sv:"полинять",
    imp:"линяй, линяйте / полиняй, полиняйте",
    meaning:{ ru:"линять (о животных)", ar:"يطرح شعره (الحيوان)", en:"to moult / shed", fr:"muer (animaux)" },
    example:{ ru:"Кошка линяет весной.", ar:"القطة بتطرح شعرها في الربيع.", en:"The cat sheds in spring.", fr:"Le chat mue au printemps." },
    root:"ЛИН", cat:"طبيعة"
  },
  {
    nsv:"созревать", sv:"созреть",
    imp:"созревай, созревайте / созрей, созрейте",
    meaning:{ ru:"созревать", ar:"ينضج", en:"to ripen", fr:"mûrir" },
    example:{ ru:"Помидоры созревают в августе.", ar:"الطماطم بتنضج في أغسطس.", en:"Tomatoes ripen in August.", fr:"Les tomates mûrissent en août." },
    root:"ЗРЕ", cat:"طبيعة"
  },
  {
    nsv:"увядать", sv:"увянуть",
    imp:"увядай, увядайте / увянь, увяньте",
    meaning:{ ru:"увядать", ar:"يذبل", en:"to wither", fr:"faner" },
    example:{ ru:"Цветы увядают без воды.", ar:"الزهور بتذبل من غير مية.", en:"Flowers wither without water.", fr:"Les fleurs fanent sans eau." },
    root:"ВЯД", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"падать в обморок", sv:"упасть в обморок",
    imp:"падай в обморок, падайте в обморок / упади в обморок, упадите в обморок",
    meaning:{ ru:"падать в обморок", ar:"يغمى عليه", en:"to faint", fr:"s'évanouir" },
    example:{ ru:"Она упала в обморок от жары.", ar:"أغمى عليها من الحر.", en:"She fainted from the heat.", fr:"Elle s'est évanouie à cause de la chaleur." },
    root:"ПАД", cat:"صحة"
  },
  {
    nsv:"рвать", sv:"вырвать",
    imp:"рви, рвите / вырви, вырвите",
    meaning:{ ru:"рвать (тошнить)", ar:"يتقيأ", en:"to vomit", fr:"vomir" },
    example:{ ru:"Ребёнка рвёт после еды.", ar:"الطفل بيترجع بعد الأكل.", en:"The child vomits after eating.", fr:"L'enfant vomit après avoir mangé." },
    root:"РВ", cat:"صحة"
  },
  {
    nsv:"кашлять", sv:"кашлянуть",
    imp:"кашляй, кашляйте / кашляни, кашляните",
    meaning:{ ru:"кашлять", ar:"يسعل", en:"to cough", fr:"tousser" },
    example:{ ru:"Больной сильно кашляет.", ar:"المريض بيسعل بشدة.", en:"The patient coughs heavily.", fr:"Le malade tousse fort." },
    root:"КАШЛ", cat:"صحة"
  },
  {
    nsv:"чихать", sv:"чихнуть",
    imp:"чихай, чихайте / чихни, чихните",
    meaning:{ ru:"чихать", ar:"يعطس", en:"to sneeze", fr:"éternuer" },
    example:{ ru:"От пыли я чихаю.", ar:"من الغبار بعطس.", en:"I sneeze from dust.", fr:"J'éternue à cause de la poussière." },
    root:"ЧИХ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"упрекать", sv:"упрекнуть",
    imp:"упрекай, упрекайте / упрекни, упрекните",
    meaning:{ ru:"упрекать", ar:"يوبخ / يلوم", en:"to reproach", fr:"reprocher" },
    example:{ ru:"Мама упрекает сына за ложь.", ar:"ماما بتلوم ابنها على الكذب.", en:"Mom reproaches her son for lying.", fr:"Maman reproche à son fils d'avoir menti." },
    root:"ПРЕК", cat:"علاقات"
  },
  {
    nsv:"одобрять", sv:"одобрить",
    imp:"одобряй, одобряйте / одобри, одобрите",
    meaning:{ ru:"одобрять", ar:"يوافق على", en:"to approve", fr:"approuver" },
    example:{ ru:"Директор одобрил план.", ar:"المدير وافق على الخطة.", en:"The director approved the plan.", fr:"Le directeur a approuvé le plan." },
    root:"ДОБР", cat:"علاقات"
  },
  {
    nsv:"подражать", sv:"подражать",
    imp:"подражай, подражайте / подражай, подражайте",
    meaning:{ ru:"подражать", ar:"يقلد", en:"to imitate", fr:"imiter" },
    example:{ ru:"Дети подражают взрослым.", ar:"الأطفال بيقلدوا الكبار.", en:"Children imitate adults.", fr:"Les enfants imitent les adultes." },
    root:"ДРАЖ", cat:"علاقات"
  },
  {
    nsv:"ухаживать", sv:"ухаживать",
    imp:"ухаживай, ухаживайте / ухаживай, ухаживайте",
    meaning:{ ru:"ухаживать (за больным)", ar:"يعتني بـ", en:"to nurse / look after", fr:"soigner / prendre soin" },
    example:{ ru:"Медсестра ухаживает за раненым.", ar:"الممرضة بتعتني بالمصاب.", en:"The nurse looks after the wounded.", fr:"L'infirmière prend soin du blessé." },
    root:"ХАЖ", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"декодировать", sv:"декодировать",
    imp:"декодируй, декодируйте / декодируй, декодируйте",
    meaning:{ ru:"декодировать", ar:"يفك التشفير", en:"to decode", fr:"décoder" },
    example:{ ru:"Программа декодирует сигнал.", ar:"البرنامج بيفك تشفير الإشارة.", en:"The program decodes the signal.", fr:"Le programme décode le signal." },
    root:"КОД", cat:"تقنية"
  },
  {
    nsv:"форматировать (диск)", sv:"отформатировать",
    imp:"форматируй, форматируйте / отформатируй, отформатируйте",
    meaning:{ ru:"форматировать (диск)", ar:"يهيئ القرص", en:"to format (disk)", fr:"formater (disque)" },
    example:{ ru:"Он отформатировал жёсткий диск.", ar:"هو فرمت القرص الصلب.", en:"He formatted the hard drive.", fr:"Il a formaté le disque dur." },
    root:"ФОРМ", cat:"تقنية"
  },
  {
    nsv:"программировать", sv:"запрограммировать",
    imp:"программируй, программируйте / запрограммируй, запрограммируйте",
    meaning:{ ru:"программировать", ar:"يبرمج", en:"to program", fr:"programmer" },
    example:{ ru:"Она программирует новое приложение.", ar:"بتبرمج تطبيق جديد.", en:"She is programming a new app.", fr:"Elle programme une nouvelle application." },
    root:"ГРАММ", cat:"تقنية"
  },
  {
    nsv:"архивировать", sv:"заархивировать",
    imp:"архивируй, архивируйте / заархивируй, заархивируйте",
    meaning:{ ru:"архивировать", ar:"يضغط ملفاً", en:"to archive / compress", fr:"archiver / compresser" },
    example:{ ru:"Заархивируй папку и отправь по почте.", ar:"اضغط المجلد وابعته بالإيميل.", en:"Archive the folder and send it by email.", fr:"Archive le dossier et envoie‑le par mail." },
    root:"АРХИВ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"пересказывать", sv:"пересказать",
    imp:"пересказывай, пересказывайте / перескажи, перескажите",
    meaning:{ ru:"пересказывать", ar:"يعيد سرد", en:"to retell", fr:"raconter de nouveau" },
    example:{ ru:"Ученик пересказывает текст.", ar:"الطالب بيعيد سرد النص.", en:"The pupil retells the text.", fr:"L'élève raconte de nouveau le texte." },
    root:"КАЗ", cat:"تعليم"
  },
  {
    nsv:"выписывать (конспект)", sv:"выписать",
    imp:"выписывай, выписывайте / выпиши, выпишите",
    meaning:{ ru:"выписывать (конспект)", ar:"يدون ملاحظات", en:"to write down notes", fr:"prendre des notes écrites" },
    example:{ ru:"Студенты выписывают главное из лекции.", ar:"الطلاب بيدونوا المهم من المحاضرة.", en:"Students write down the main points from the lecture.", fr:"Les étudiants prennent en note l'essentiel du cours." },
    root:"ПИС", cat:"تعليم"
  },
  {
    nsv:"заниматься (с репетитором)", sv:"позаниматься",
    imp:"занимайся, занимайтесь / позанимайся, позанимайтесь",
    meaning:{ ru:"заниматься (с репетитором)", ar:"يأخذ درساً خصوصياً", en:"to take a private lesson", fr:"prendre un cours particulier" },
    example:{ ru:"Он занимается с репетитором по математике.", ar:"بياخد درس خصوصي في الرياضة.", en:"He takes a private lesson in maths.", fr:"Il prend un cours particulier de maths." },
    root:"НИМ", cat:"تعليم"
  },
  {
    nsv:"сдавать (экзамен)", sv:"сдать",
    imp:"сдавай, сдавайте / сдай, сдайте",
    meaning:{ ru:"сдавать (экзамен)", ar:"يؤدي الامتحان", en:"to take an exam", fr:"passer un examen" },
    example:{ ru:"Завтра я сдаю экзамен по физике.", ar:"بكره عندي امتحان فيزياء.", en:"Tomorrow I'm taking the physics exam.", fr:"Demain je passe l'examen de physique." },
    root:"ДА", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"выписывать (чек)", sv:"выписать",
    imp:"выписывай, выписывайте / выпиши, выпишите",
    meaning:{ ru:"выписывать (чек)", ar:"يحرر شيكاً", en:"to write a cheque", fr:"rédiger un chèque" },
    example:{ ru:"Я выписал чек на крупную сумму.", ar:"حررت شيك بمبلغ كبير.", en:"I wrote a cheque for a large sum.", fr:"J'ai rédigé un chèque d'un gros montant." },
    root:"ПИС", cat:"اقتصاد"
  },
  {
    nsv:"переводить (деньги)", sv:"перевести",
    imp:"переводи, переводите / переведи, переведите",
    meaning:{ ru:"переводить (деньги)", ar:"يحول فلوساً", en:"to transfer money", fr:"transférer de l'argent" },
    example:{ ru:"Я перевёл деньги на счёт в банке.", ar:"حولت فلوس على حساب في البنك.", en:"I transferred money to a bank account.", fr:"J'ai transféré de l'argent sur un compte bancaire." },
    root:"ВОД", cat:"اقتصاد"
  },
  {
    nsv:"облагать (налогом)", sv:"обложить",
    imp:"облагай, облагайте / обложи, обложите",
    meaning:{ ru:"облагать налогом", ar:"يفرض ضريبة", en:"to tax", fr:"imposer" },
    example:{ ru:"Государство облагает доходы налогом.", ar:"الدولة بتفرض ضريبة على الدخل.", en:"The state taxes income.", fr:"L'État impose les revenus." },
    root:"ЛАГ", cat:"اقتصاد"
  },
  {
    nsv:"возмещать", sv:"возместить",
    imp:"возмещай, возмещайте / возмести, возместите",
    meaning:{ ru:"возмещать", ar:"يعوض (خسارة)", en:"to compensate", fr:"compenser / rembourser" },
    example:{ ru:"Страховая компания возместила ущерб.", ar:"شركة التأمين عوضت الضرر.", en:"The insurance company compensated the damage.", fr:"La compagnie d'assurance a compensé les dégâts." },
    root:"МЕСТ", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"допрашивать", sv:"допросить",
    imp:"допрашивай, допрашивайте / допроси, допросите",
    meaning:{ ru:"допрашивать", ar:"يستجوب", en:"to interrogate", fr:"interroger" },
    example:{ ru:"Полиция допрашивает подозреваемого.", ar:"البوليس بيستجوب المشتبه فيه.", en:"The police interrogate the suspect.", fr:"La police interroge le suspect." },
    root:"ПРОС", cat:"قانون"
  },
  {
    nsv:"освобождать (из тюрьмы)", sv:"освободить",
    imp:"освобождай, освобождайте / освободи, освободите",
    meaning:{ ru:"освобождать (из тюрьмы)", ar:"يُطلق سراح", en:"to release (from prison)", fr:"libérer (de prison)" },
    example:{ ru:"Заключённого освободили досрочно.", ar:"أفرجوا عن المسجون مبكراً.", en:"The prisoner was released early.", fr:"Le prisonnier a été libéré par anticipation." },
    root:"СВОБОД", cat:"قانون"
  },
  {
    nsv:"обвинять", sv:"обвинить",
    imp:"обвиняй, обвиняйте / обвини, обвините",
    meaning:{ ru:"обвинять", ar:"يتهم", en:"to accuse", fr:"accuser" },
    example:{ ru:"Его обвинили в краже.", ar:"اتهموه بالسرقة.", en:"He was accused of theft.", fr:"On l'a accusé de vol." },
    root:"ВИН", cat:"قانون"
  },
  {
    nsv:"оправдываться", sv:"оправдаться",
    imp:"оправдывайся, оправдывайтесь / оправдайся, оправдайтесь",
    meaning:{ ru:"оправдываться", ar:"يبرر نفسه", en:"to justify oneself", fr:"se justifier" },
    example:{ ru:"Он оправдывался перед начальником.", ar:"كان بيبرر نفسه قدام المدير.", en:"He was justifying himself to the boss.", fr:"Il se justifiait devant son chef." },
    root:"ПРАВ", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"разминать мышцы", sv:"размять",
    imp:"разминай, разминайте / разомни, разомните",
    meaning:{ ru:"разминать мышцы", ar:"يسخن العضلات", en:"to warm up muscles", fr:"échauffer les muscles" },
    example:{ ru:"Перед бегом разомни мышцы ног.", ar:"سخن عضلات رجليك قبل الجري.", en:"Warm up your leg muscles before running.", fr:"Échauffe tes jambes avant de courir." },
    root:"МИН", cat:"رياضة"
  },
  {
    nsv:"бегать трусцой", sv:"пробежать трусцой",
    imp:"бегай трусцой, бегайте трусцой / пробеги трусцой, пробегите трусцой",
    meaning:{ ru:"бегать трусцой", ar:"يهرول", en:"to jog", fr:"faire du jogging" },
    example:{ ru:"Я бегаю трусцой каждое утро.", ar:"بهرول كل صباح.", en:"I jog every morning.", fr:"Je fais du jogging chaque matin." },
    root:"БЕГ", cat:"رياضة"
  },
  {
    nsv:"подтягиваться (на турнике)", sv:"подтянуться",
    imp:"подтягивайся, подтягивайтесь / подтянись, подтянитесь",
    meaning:{ ru:"подтягиваться", ar:"يعمل عقلة", en:"to do pull‑ups", fr:"faire des tractions" },
    example:{ ru:"Я могу подтянуться 15 раз.", ar:"أقدر أعمل 15 عدة.", en:"I can do 15 pull‑ups.", fr:"Je peux faire 15 tractions." },
    root:"ТЯГ", cat:"رياضة"
  },
  {
    nsv:"отжиматься", sv:"отжаться",
    imp:"отжимайся, отжимайтесь / отожмись, отожмитесь",
    meaning:{ ru:"отжиматься", ar:"يعمل تمرين ضغط", en:"to do push‑ups", fr:"faire des pompes" },
    example:{ ru:"Я отжимаюсь 30 раз каждое утро.", ar:"بتمرن ضغط 30 مرة كل صباح.", en:"I do 30 push‑ups every morning.", fr:"Je fais 30 pompes chaque matin." },
    root:"ЖИМ", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"набрасывать (эскиз)", sv:"набросать",
    imp:"набрасывай, набрасывайте / набросай, набросайте",
    meaning:{ ru:"набрасывать (эскиз)", ar:"يخطط رسماً سريعاً", en:"to sketch", fr:"esquisser" },
    example:{ ru:"Художник набрасывает портрет.", ar:"الرسام بيرسم بورتريه سريع.", en:"The artist sketches a portrait.", fr:"L'artiste esquisse un portrait." },
    root:"БРОС", cat:"فن"
  },
  {
    nsv:"чертить", sv:"начертить",
    imp:"черти, чертите / начерти, начертите",
    meaning:{ ru:"чертить", ar:"يرسم خطوطاً", en:"to draw lines / draft", fr:"tracer / dessiner" },
    example:{ ru:"Архитектор чертит план здания.", ar:"المهندس المعماري بيرسم مخطط المبنى.", en:"The architect draws the building plan.", fr:"L'architecte trace le plan du bâtiment." },
    root:"ЧЕРТ", cat:"فن"
  },
  {
    nsv:"моделировать", sv:"смоделировать",
    imp:"моделируй, моделируйте / смоделируй, смоделируйте",
    meaning:{ ru:"моделировать", ar:"ينمذج / يصمم نموذجاً", en:"to model (3D)", fr:"modéliser" },
    example:{ ru:"Дизайнер моделирует автомобиль.", ar:"المصمم بينمذج عربية.", en:"The designer models a car.", fr:"Le designer modélise une voiture." },
    root:"МОДЕЛ", cat:"فن"
  },
  {
    nsv:"освещать (сцену)", sv:"осветить",
    imp:"освещай, освещайте / освети, осветите",
    meaning:{ ru:"освещать (сцену)", ar:"يضيء المسرح", en:"to light up (a stage)", fr:"éclairer (une scène)" },
    example:{ ru:"Прожектора освещают артистов.", ar:"الكشافات بتنور الفنانين.", en:"Spotlights light up the performers.", fr:"Les projecteurs éclairent les artistes." },
    root:"СВЕТ", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"нести караул", sv:"отстоять караул",
    imp:"неси караул, несите караул / отстой караул, отстойте караул",
    meaning:{ ru:"нести караул", ar:"يقوم بالحراسة", en:"to stand guard", fr:"monter la garde" },
    example:{ ru:"Солдаты несут караул у знамени.", ar:"الجنود بيحرسوا العلم.", en:"The soldiers stand guard at the flag.", fr:"Les soldats montent la garde au drapeau." },
    root:"НЕС", cat:"عسكرية"
  },
  {
    nsv:"совершать марш‑бросок", sv:"совершить марш‑бросок",
    imp:"совершай марш‑бросок, совершайте марш‑бросок / соверши марш‑бросок, совершите марш‑бросок",
    meaning:{ ru:"совершать марш‑бросок", ar:"يقوم بمسيرة عسكرية", en:"to make a forced march", fr:"effectuer une marche forcée" },
    example:{ ru:"Батальон совершил марш‑бросок за ночь.", ar:"الكتيبة قامت بمسيرة عسكرية في الليل.", en:"The battalion made a forced march overnight.", fr:"Le bataillon a effectué une marche forcée de nuit." },
    root:"МАРШ", cat:"عسكرية"
  },
  {
    nsv:"минировать", sv:"заминировать",
    imp:"минируй, минируйте / заминируй, заминируйте",
    meaning:{ ru:"минировать", ar:"يزرع ألغاماً", en:"to mine (a field)", fr:"miner (un terrain)" },
    example:{ ru:"Сапёры разминировали мост.", ar:"خبراء المفرقعات أزالوا الألغام من الجسر.", en:"The sappers cleared the bridge of mines.", fr:"Les démineurs ont déminé le pont." },
    root:"МИН", cat:"عسكرية"
  },
  {
    nsv:"брать в осаду", sv:"взять в осаду",
    imp:"бери в осаду, берите в осаду / возьми в осаду, возьмите в осаду",
    meaning:{ ru:"брать в осаду", ar:"يحاصر (مدينة)", en:"to lay siege to", fr:"mettre le siège devant" },
    example:{ ru:"Армия взяла город в осаду.", ar:"الجيش حاصر المدينة.", en:"The army laid siege to the city.", fr:"L'armée mit le siège devant la ville." },
    root:"БР", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"забегать", sv:"забежать",
    imp:"забегай, забегайте / забеги, забегите",
    meaning:{ ru:"забегать (на минутку)", ar:"يدخل سريعاً", en:"to drop in (quickly)", fr:"passer rapidement" },
    example:{ ru:"Я забежал в магазин за хлебом.", ar:"دخلت المحل بسرعة عشان العيش.", en:"I dropped into the shop for bread.", fr:"Je suis passé rapidement au magasin pour du pain." },
    root:"БЕГ", cat:"حركة"
  },
  {
    nsv:"миновать", sv:"минуть",
    imp:"минуй, минуйте / мини, мините",
    meaning:{ ru:"миновать", ar:"يترك خلفه / يتجاوز", en:"to pass / leave behind", fr:"laisser derrière" },
    example:{ ru:"Опасность миновала.", ar:"الخطر عدّى.", en:"The danger has passed.", fr:"Le danger est passé." },
    root:"МИН", cat:"حركة"
  },
  {
    nsv:"пятиться", sv:"попятиться",
    imp:"пяться, пятьтесь / попяться, попятьтесь",
    meaning:{ ru:"пятиться", ar:"يتراجع للخلف", en:"to back away", fr:"reculer" },
    example:{ ru:"Лошадь пятилась от огня.", ar:"الحصان كان بيتراجع من النار.", en:"The horse backed away from the fire.", fr:"Le cheval reculait devant le feu." },
    root:"ПЯТ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"наблюдать", sv:"понаблюдать",
    imp:"наблюдай, наблюдайте / понаблюдай, понаблюдайте",
    meaning:{ ru:"наблюдать", ar:"يراقب", en:"to observe", fr:"observer" },
    example:{ ru:"Астрономы наблюдают за звёздами.", ar:"الفلكيون بيراقبوا النجوم.", en:"Astronomers observe the stars.", fr:"Les astronomes observent les étoiles." },
    root:"БЛЮД", cat:"حواس"
  },
  {
    nsv:"осязать (фактуру)", sv:"осязать",
    imp:"осязай, осязайте",
    meaning:{ ru:"осязать (фактуру)", ar:"يتحسس الملمس", en:"to touch (texture)", fr:"toucher (texture)" },
    example:{ ru:"Слепые осязают мир руками.", ar:"المكفوفين بيتحسسوا العالم بإيديهم.", en:"The blind touch the world with their hands.", fr:"Les aveugles touchent le monde avec leurs mains." },
    root:"ОСЯЗ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"переговариваться", sv:"переговорить",
    imp:"переговаривайся, переговаривайтесь / переговори, переговорите",
    meaning:{ ru:"переговариваться", ar:"يتبادل الحديث", en:"to talk (to each other)", fr:"se parler" },
    example:{ ru:"Студенты переговаривались во время лекции.", ar:"الطلاب كانوا بيتكلموا مع بعض في المحاضرة.", en:"Students were talking to each other during the lecture.", fr:"Les étudiants se parlaient pendant le cours." },
    root:"ГОВОР", cat:"تواصل"
  },
  {
    nsv:"дискуссировать", sv:"подискуссировать",
    imp:"дискуссируй, дискуссируйте / подискуссируй, подискуссируйте",
    meaning:{ ru:"дискуссировать", ar:"يناقش بقوة", en:"to debate", fr:"débattre" },
    example:{ ru:"Политики дискуссируют о реформах.", ar:"الساسة بيناقشوا الإصلاحات.", en:"Politicians debate about reforms.", fr:"Les politiciens débattent des réformes." },
    root:"КУСС", cat:"تواصل"
  },
  {
    nsv:"заявлять", sv:"заявить",
    imp:"заявляй, заявляйте / заяви, заявите",
    meaning:{ ru:"заявлять", ar:"يصرح / يعلن", en:"to declare / claim", fr:"déclarer" },
    example:{ ru:"Президент заявил о решении.", ar:"الرئيس أعلن عن القرار.", en:"The president declared the decision.", fr:"Le président a déclaré la décision." },
    root:"ЯВ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"забывать", sv:"забыть",
    imp:"забывай, забывайте / забудь, забудьте",
    meaning:{ ru:"забывать", ar:"ينسى", en:"to forget", fr:"oublier" },
    example:{ ru:"Не забывай свои обещания.", ar:"لا تنس وعودك.", en:"Don't forget your promises.", fr:"N'oublie pas tes promesses." },
    root:"БЫВ", cat:"ذهنية"
  },
  {
    nsv:"вспоминать", sv:"вспомнить",
    imp:"вспоминай, вспоминайте / вспомни, вспомните",
    meaning:{ ru:"вспоминать", ar:"يتذكر", en:"to recall", fr:"se souvenir" },
    example:{ ru:"Я вспоминаю летние каникулы.", ar:"بفتكر الإجازة الصيفية.", en:"I recall summer holidays.", fr:"Je me souviens des vacances d'été." },
    root:"ПОМИН", cat:"ذهنية"
  },
  {
    nsv:"представлять (себе)", sv:"представить",
    imp:"представляй, представляйте / представь, представьте",
    meaning:{ ru:"представлять (себе)", ar:"يتخيل", en:"to imagine", fr:"imaginer" },
    example:{ ru:"Представь себе море.", ar:"تخيل البحر.", en:"Imagine the sea.", fr:"Imagine la mer." },
    root:"СТАВ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"зашивать (дыру)", sv:"зашить",
    imp:"зашивай, зашивайте / зашей, зашейте",
    meaning:{ ru:"зашивать (дыру)", ar:"يرتق", en:"to mend", fr:"raccommoder" },
    example:{ ru:"Бабушка зашила мне носок.", ar:"ستي رتقت لي الشراب.", en:"Grandma mended my sock.", fr:"Grand-mère a raccommodé ma chaussette." },
    root:"ШИ", cat:"عمل"
  },
  {
    nsv:"прибираться", sv:"прибраться",
    imp:"прибирайся, прибирайтесь / приберись, приберитесь",
    meaning:{ ru:"прибираться", ar:"يرتب المكان", en:"to tidy up", fr:"ranger" },
    example:{ ru:"Я прибрался в комнате перед гостями.", ar:"رتبت الأوضة قبل الضيوف.", en:"I tidied up the room before the guests.", fr:"J'ai rangé la chambre avant les invités." },
    root:"БИР", cat:"عمل"
  },
  {
    nsv:"жарить (яичницу)", sv:"пожарить",
    imp:"жарь, жарьте / пожарь, пожарьте",
    meaning:{ ru:"жарить (яичницу)", ar:"يقلي بيض", en:"to fry (eggs)", fr:"faire frire (des œufs)" },
    example:{ ru:"Я жарю яичницу на завтрак.", ar:"بقلي بيض على الفطار.", en:"I fry eggs for breakfast.", fr:"Je fais frire des œufs pour le petit-déjeuner." },
    root:"ЖАР", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"восхищаться", sv:"восхититься",
    imp:"восхищайся, восхищайтесь / восхитись, восхититесь",
    meaning:{ ru:"восхищаться", ar:"ينبهر", en:"to admire", fr:"admirer" },
    example:{ ru:"Я восхищаюсь твоим талантом.", ar:"أنا منبهر بموهبتك.", en:"I admire your talent.", fr:"J'admire ton talent." },
    root:"ХИЩ", cat:"عواطف"
  },
  {
    nsv:"печалиться", sv:"опечалиться",
    imp:"печалься, печальтесь / опечалься, опечальтесь",
    meaning:{ ru:"печалиться", ar:"يحزن", en:"to grieve", fr:"s'affliger" },
    example:{ ru:"Он печалится о потере друга.", ar:"حزين على فقدان صديقه.", en:"He grieves for the loss of his friend.", fr:"Il s'afflige de la perte de son ami." },
    root:"ПЕЧАЛ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"разгораться", sv:"разгореться",
    imp:"разгорайся, разгорайтесь / разгорись, разгоритесь",
    meaning:{ ru:"разгораться", ar:"يتوهج / يشتعل", en:"to flare up", fr:"s'enflammer" },
    example:{ ru:"Костер разгорелся ярко.", ar:"النار اشتعلت بقوة.", en:"The campfire flared up brightly.", fr:"Le feu de camp s'est enflammé." },
    root:"ГОР", cat:"طبيعة"
  },
  {
    nsv:"замерзать (лёд)", sv:"замёрзнуть",
    imp:"замерзай, замерзайте / замёрзни, замёрзните",
    meaning:{ ru:"замерзать (лёд)", ar:"يتجمد الماء", en:"to freeze (water)", fr:"geler" },
    example:{ ru:"Река замёрзла зимой.", ar:"النهر اتجمد في الشتا.", en:"The river froze in winter.", fr:"La rivière a gelé en hiver." },
    root:"МЕРЗ", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"вакцинировать", sv:"вакцинировать",
    imp:"вакцинируй, вакцинируйте",
    meaning:{ ru:"вакцинировать", ar:"يُطعم (لقاح)", en:"to vaccinate", fr:"vacciner" },
    example:{ ru:"Детей вакцинируют от кори.", ar:"الأطفال اتطعموا ضد الحصبة.", en:"Children are vaccinated against measles.", fr:"Les enfants sont vaccinés contre la rougeole." },
    root:"ВАКЦИН", cat:"صحة"
  },
  {
    nsv:"осматривать (врач)", sv:"осмотреть",
    imp:"осматривай, осматривайте / осмотри, осмотрите",
    meaning:{ ru:"осматривать (врач)", ar:"يفحص طبياً", en:"to examine medically", fr:"examiner médicalement" },
    example:{ ru:"Врач осматривает пациента.", ar:"الدكتور بيفحص المريض.", en:"The doctor examines the patient.", fr:"Le médecin examine le patient." },
    root:"СМОТР", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"мириться", sv:"помириться",
    imp:"мирись, миритесь / помирись, помиритесь",
    meaning:{ ru:"мириться", ar:"يتصالح", en:"to make peace", fr:"se réconcilier" },
    example:{ ru:"Они помирились после ссоры.", ar:"اتصالحوا بعد الخناقة.", en:"They made peace after the quarrel.", fr:"Ils se sont réconciliés après la dispute." },
    root:"МИР", cat:"علاقات"
  },
  {
    nsv:"ссориться", sv:"поссориться",
    imp:"ссорься, ссорьтесь / поссорься, поссорьтесь",
    meaning:{ ru:"ссориться", ar:"يتخاصم", en:"to quarrel", fr:"se disputer" },
    example:{ ru:"Братья ссорятся из-за игрушек.", ar:"الإخوة بيتخانقوا على اللعب.", en:"Brothers quarrel over toys.", fr:"Les frères se disputent pour les jouets." },
    root:"ССОР", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"дефрагментировать", sv:"дефрагментировать",
    imp:"дефрагментируй, дефрагментируйте",
    meaning:{ ru:"дефрагментировать", ar:"يجمع تجزئة القرص", en:"to defragment", fr:"défragmenter" },
    example:{ ru:"Я дефрагментирую жёсткий диск для ускорения.", ar:"بجمع تجزئة القرص الصلب عشان السرعة.", en:"I defragment the hard drive to speed it up.", fr:"Je défragmente le disque dur pour l'accélérer." },
    root:"ФРАГМЕНТ", cat:"تقنية"
  },
  {
    nsv:"сбрасывать (настройки)", sv:"сбросить",
    imp:"сбрасывай, сбрасывайте / сбрось, сбросьте",
    meaning:{ ru:"сбрасывать (настройки)", ar:"يعيد ضبط المصنع", en:"to reset (settings)", fr:"réinitialiser" },
    example:{ ru:"Я сбросил настройки телефона.", ar:"رجعت ضبط المصنع للتليفون.", en:"I reset the phone settings.", fr:"J'ai réinitialisé les paramètres du téléphone." },
    root:"БРОС", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"дискутировать", sv:"подискутировать",
    imp:"дискутируй, дискутируйте / подискутируй, подискутируйте",
    meaning:{ ru:"дискутировать (научно)", ar:"يناقش علمياً", en:"to discuss academically", fr:"discuter académiquement" },
    example:{ ru:"Учёные дискутируют на конференции.", ar:"العلماء بيناقشوا في المؤتمر.", en:"Scientists discuss at the conference.", fr:"Les scientifiques discutent à la conférence." },
    root:"КУСС", cat:"تعليم"
  },
  {
    nsv:"писать (сочинение)", sv:"написать",
    imp:"пиши, пишите / напиши, напишите",
    meaning:{ ru:"писать (сочинение)", ar:"يكتب تعبيراً", en:"to write an essay", fr:"écrire une rédaction" },
    example:{ ru:"Ученик пишет сочинение о спорте.", ar:"الطالب بيكتب تعبير عن الرياضة.", en:"The pupil writes an essay about sport.", fr:"L'élève écrit une rédaction sur le sport." },
    root:"ПИС", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"начислять", sv:"начислить",
    imp:"начисляй, начисляйте / начисли, начислите",
    meaning:{ ru:"начислять (проценты)", ar:"يضيف فائدة", en:"to accrue interest", fr:"calculer des intérêts" },
    example:{ ru:"Банк начисляет проценты по вкладу.", ar:"البنك بيضيف فوايد على الوديعة.", en:"The bank accrues interest on the deposit.", fr:"La banque calcule des intérêts sur le dépôt." },
    root:"ЧИСЛ", cat:"اقتصاد"
  },
  {
    nsv:"донатить", sv:"задонатить",
    imp:"донать, донатьте / задонать, задонатьте",
    meaning:{ ru:"донатить", ar:"يتبرع (عبر الإنترنت)", en:"to donate (online)", fr:"faire un don" },
    example:{ ru:"Зрители донатят стримеру.", ar:"المشاهدين بيتبرعوا للستريمر.", en:"Viewers donate to the streamer.", fr:"Les spectateurs font un don au streamer." },
    root:"ДОНАТ", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"санкционировать", sv:"санкционировать",
    imp:"санкционируй, санкционируйте",
    meaning:{ ru:"санкционировать", ar:"يأذن رسمياً", en:"to sanction / authorise", fr:"autoriser officiellement" },
    example:{ ru:"Суд санкционировал обыск.", ar:"المحكمة أذنت بالتفتيش.", en:"The court authorised the search.", fr:"Le tribunal a autorisé la perquisition." },
    root:"САНКЦИ", cat:"قانون"
  },
  {
    nsv:"легитимировать", sv:"легитимировать",
    imp:"легитимируй, легитимируйте",
    meaning:{ ru:"легитимировать", ar:"يُضفي شرعية", en:"to legitimise", fr:"légitimer" },
    example:{ ru:"Документ легитимирует его власть.", ar:"الوثيقة بتدي شرعية لسلطته.", en:"The document legitimises his power.", fr:"Le document légitime son pouvoir." },
    root:"ЛЕГИТ", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"жонглировать (мячом)", sv:"пожонглировать",
    imp:"жонглируй, жонглируйте / пожонглируй, пожонглируйте",
    meaning:{ ru:"жонглировать (мячом)", ar:"ينط الكورة", en:"to juggle (a ball)", fr:"jongler (avec un ballon)" },
    example:{ ru:"Футболист жонглирует мячом.", ar:"اللاعب بينط الكورة.", en:"The footballer juggles the ball.", fr:"Le footballeur jongle avec le ballon." },
    root:"ЖОНГЛ", cat:"رياضة"
  },
  {
    nsv:"подавать (в теннисе)", sv:"подать",
    imp:"подавай, подавайте / подай, подайте",
    meaning:{ ru:"подавать (в теннисе)", ar:"يرسل الكرة", en:"to serve (tennis)", fr:"servir (tennis)" },
    example:{ ru:"Теннисист мощно подаёт.", ar:"لاعب التنس بيسرف بقوة.", en:"The tennis player serves powerfully.", fr:"Le joueur de tennis sert puissamment." },
    root:"ДА", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"декорировать", sv:"задекорировать",
    imp:"декорируй, декорируйте / задекорируй, задекорируйте",
    meaning:{ ru:"декорировать", ar:"يزين / يزخرف", en:"to decorate", fr:"décorer" },
    example:{ ru:"Она декорирует зал к празднику.", ar:"هي بتزين القاعة للحفلة.", en:"She decorates the hall for the celebration.", fr:"Elle décore la salle pour la fête." },
    root:"ДЕКОР", cat:"فن"
  },
  {
    nsv:"аранжировать", sv:"аранжировать",
    imp:"аранжируй, аранжируйте",
    meaning:{ ru:"аранжировать", ar:"يوزع موسيقى", en:"to arrange (music)", fr:"arranger (musique)" },
    example:{ ru:"Композитор аранжирует песню для оркестра.", ar:"الملحن بيوزع الأغنية للأوركسترا.", en:"The composer arranges the song for orchestra.", fr:"Le compositeur arrange la chanson pour l'orchestre." },
    root:"АРАНЖ", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"форсировать", sv:"форсировать",
    imp:"форсируй, форсируйте",
    meaning:{ ru:"форсировать (реку)", ar:"يعبر بقوة", en:"to force (a river)", fr:"franchir de force" },
    example:{ ru:"Войска форсировали реку под огнём.", ar:"القوات عبرت النهر تحت النار.", en:"The troops forced the river under fire.", fr:"Les troupes ont franchi la rivière sous le feu." },
    root:"ФОРС", cat:"عسكرية"
  },
  {
    nsv:"контузить", sv:"контузить",
    imp:"контузи, контузите",
    meaning:{ ru:"контузить", ar:"يصاب بارتجاج", en:"to concuss", fr:"commotionner" },
    example:{ ru:"Солдата контузило взрывом.", ar:"الجندي أصيب بارتجاج من الانفجار.", en:"The soldier was concussed by the explosion.", fr:"Le soldat a été commotionné par l'explosion." },
    root:"КОНТУЗ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перешагивать", sv:"перешагнуть",
    imp:"перешагивай, перешагивайте / перешагни, перешагните",
    meaning:{ ru:"перешагивать", ar:"يخطو فوق", en:"to step over", fr:"enjamber" },
    example:{ ru:"Он перешагнул через лужу.", ar:"خَطى فوق البركة.", en:"He stepped over the puddle.", fr:"Il a enjambé la flaque." },
    root:"ШАГ", cat:"حركة"
  },
  {
    nsv:"семенить", sv:"посеменить",
    imp:"семени, семените / посемени, посемените",
    meaning:{ ru:"семенить", ar:"يُهرول بخطوات صغيرة", en:"to scurry", fr:"trottiner à petits pas" },
    example:{ ru:"Мышка семенит по полу.", ar:"الفارة بتجري بخطوات صغيرة.", en:"The mouse scurries across the floor.", fr:"La souris trottine sur le sol." },
    root:"СЕМЕН", cat:"حركة"
  },
  {
    nsv:"волочить", sv:"поволочить",
    imp:"волочи, волочите / поволочи, поволочите",
    meaning:{ ru:"волочить", ar:"يسحب ببطء", en:"to drag slowly", fr:"traîner lentement" },
    example:{ ru:"Раненый волочил ногу.", ar:"المصاب كان بيسحب رجله.", en:"The wounded man dragged his leg.", fr:"Le blessé traînait la jambe." },
    root:"ВОЛОК", cat:"حركة"
  },
  {
    nsv:"нырять", sv:"нырнуть",
    imp:"ныряй, ныряйте / нырни, нырните",
    meaning:{ ru:"нырять", ar:"يغوص", en:"to dive", fr:"plonger" },
    example:{ ru:"Пловец нырнул в бассейн.", ar:"السبّاح غطس في الحمام.", en:"The swimmer dived into the pool.", fr:"Le nageur a plongé dans la piscine." },
    root:"НЫР", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"разглядывать", sv:"разглядеть",
    imp:"разглядывай, разглядывайте / разгляди, разглядите",
    meaning:{ ru:"разглядывать", ar:"يتفحص بالنظر", en:"to scrutinize", fr:"examiner attentivement" },
    example:{ ru:"Она разглядывает старую монету.", ar:"بتتفحص عملة قديمة.", en:"She scrutinizes the old coin.", fr:"Elle examine attentivement la vieille pièce." },
    root:"ГЛЯД", cat:"حواس"
  },
  {
    nsv:"пробовать (на вкус)", sv:"попробовать",
    imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать (еду)", ar:"يتذوق", en:"to taste (food)", fr:"goûter" },
    example:{ ru:"Попробуй этот торт.", ar:"تذوق الكيكة دي.", en:"Taste this cake.", fr:"Goûte ce gâteau." },
    root:"ПРОБ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"зачитывать", sv:"зачитать",
    imp:"зачитывай, зачитывайте / зачитай, зачитайте",
    meaning:{ ru:"зачитывать", ar:"يقرأ بصوت عالي", en:"to read aloud", fr:"lire à haute voix" },
    example:{ ru:"Студент зачитывает доклад.", ar:"الطالب بيقرأ التقرير بصوت عالي.", en:"The student reads the report aloud.", fr:"L'étudiant lit le rapport à haute voix." },
    root:"ЧИТ", cat:"تواصل"
  },
  {
    nsv:"разъяснять", sv:"разъяснить",
    imp:"разъясняй, разъясняйте / разъясни, разъясните",
    meaning:{ ru:"разъяснять", ar:"يشرح بالتفصيل", en:"to explain in detail", fr:"expliquer en détail" },
    example:{ ru:"Учитель разъясняет правило.", ar:"المعلم بيشرح القاعدة بالتفصيل.", en:"The teacher explains the rule in detail.", fr:"Le professeur explique la règle en détail." },
    root:"ЯСН", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"анализировать", sv:"проанализировать",
    imp:"анализируй, анализируйте / проанализируй, проанализируйте",
    meaning:{ ru:"анализировать", ar:"يحلل", en:"to analyze", fr:"analyser" },
    example:{ ru:"Учёный анализирует данные.", ar:"العالم بيحلل البيانات.", en:"The scientist analyzes data.", fr:"Le scientifique analyse les données." },
    root:"ЛИЗ", cat:"ذهنية"
  },
  {
    nsv:"размышлять", sv:"размыслить",
    imp:"размышляй, размышляйте / размысли, размыслите",
    meaning:{ ru:"размышлять", ar:"يتأمل", en:"to ponder", fr:"réfléchir" },
    example:{ ru:"Философ размышляет о жизни.", ar:"الفيلسوف بيتأمل في الحياة.", en:"The philosopher ponders life.", fr:"Le philosophe réfléchit sur la vie." },
    root:"МЫСЛ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"складывать", sv:"сложить",
    imp:"складывай, складывайте / сложи, сложите",
    meaning:{ ru:"складывать", ar:"يطوي / يرتب", en:"to fold / put together", fr:"plier / ranger" },
    example:{ ru:"Я складываю одежду в шкаф.", ar:"بطوي الهدوم في الدولاب.", en:"I fold clothes into the wardrobe.", fr:"Je plie les vêtements dans l'armoire." },
    root:"КЛАД", cat:"عمل"
  },
  {
    nsv:"развешивать", sv:"развесить",
    imp:"развешивай, развешивайте / развесь, развесьте",
    meaning:{ ru:"развешивать", ar:"يعلق (الغسيل)", en:"to hang out (laundry)", fr:"étendre (linge)" },
    example:{ ru:"Она развешивает бельё на балконе.", ar:"بتعلق الغسيل في البلكونة.", en:"She hangs out the laundry on the balcony.", fr:"Elle étend le linge sur le balcon." },
    root:"ВЕШ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"ликовать", sv:"заликовать",
    imp:"ликуй, ликуйте / заликуй, заликуйте",
    meaning:{ ru:"ликовать", ar:"يبتهج", en:"to jubilate", fr:"jubiler" },
    example:{ ru:"Болельщики ликуют после гола.", ar:"المشجعين بيهللوا بعد الجون.", en:"The fans jubilate after the goal.", fr:"Les supporteurs jubilent après le but." },
    root:"ЛИК", cat:"عواطف"
  },
  {
    nsv:"ужасаться", sv:"ужаснуться",
    imp:"ужасайся, ужасайтесь / ужаснись, ужаснитесь",
    meaning:{ ru:"ужасаться", ar:"يرتعب", en:"to be horrified", fr:"être horrifié" },
    example:{ ru:"Я ужаснулся от новости.", ar:"ارتعب من الخبر.", en:"I was horrified by the news.", fr:"J'ai été horrifié par la nouvelle." },
    root:"ЖАС", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"вечереть", sv:"завечереть",
    imp:"— (безличный)",
    meaning:{ ru:"вечереть", ar:"يحل المساء", en:"to get dark (evening)", fr:"se faire tard (soir)" },
    example:{ ru:"Вечереет, пора домой.", ar:"الدنيا بليل، نرجع البيت.", en:"It's getting dark, time to go home.", fr:"Il se fait tard, il est temps de rentrer." },
    root:"ВЕЧЕР", cat:"طبيعة"
  },
  {
    nsv:"просветляться", sv:"просветлеть",
    imp:"просветляйся, просветляйтесь / просветлей, просветлейте",
    meaning:{ ru:"просветляться (о небе)", ar:"ينقشع الغيم", en:"to clear up (sky)", fr:"se dégager (ciel)" },
    example:{ ru:"Небо просветлело после дождя.", ar:"السما صفت بعد المطر.", en:"The sky cleared up after the rain.", fr:"Le ciel s'est dégagé après la pluie." },
    root:"СВЕТ", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"отравлять", sv:"отравить",
    imp:"отравляй, отравляйте / отрави, отравите",
    meaning:{ ru:"отравлять", ar:"يسمم", en:"to poison", fr:"empoisonner" },
    example:{ ru:"Ядовитый гриб отравил туриста.", ar:"فطر سام سمم السائح.", en:"The poisonous mushroom poisoned the tourist.", fr:"Le champignon vénéneux a empoisonné le touriste." },
    root:"ТРАВ", cat:"صحة"
  },
  {
    nsv:"беременеть", sv:"забеременеть",
    imp:"беременей, беременейте / забеременей, забеременейте",
    meaning:{ ru:"беременеть", ar:"تحمل (امرأة)", en:"to get pregnant", fr:"tomber enceinte" },
    example:{ ru:"Она забеременела в прошлом году.", ar:"حملت السنة اللي فاتت.", en:"She got pregnant last year.", fr:"Elle est tombée enceinte l'année dernière." },
    root:"БЕРЕМЕН", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"льстить", sv:"польстить",
    imp:"льсти, льстите / польсти, польстите",
    meaning:{ ru:"льстить", ar:"يتملق", en:"to flatter", fr:"flatter" },
    example:{ ru:"Не льсти ему – он не любит.", ar:"لا تتملقه – هو مش بيحب.", en:"Don't flatter him – he doesn't like it.", fr:"Ne le flatte pas – il n'aime pas ça." },
    root:"ЛЬСТ", cat:"علاقات"
  },
  {
    nsv:"обожать", sv:"обожать",
    imp:"обожай, обожайте / обожай, обожайте",
    meaning:{ ru:"обожать", ar:"يعشق", en:"to adore", fr:"adorer" },
    example:{ ru:"Я обожаю шоколад.", ar:"بعشق الشوكولاتة.", en:"I adore chocolate.", fr:"J'adore le chocolat." },
    root:"БОЖ", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"сканировать", sv:"отсканировать",
    imp:"сканируй, сканируйте / отсканируй, отсканируйте",
    meaning:{ ru:"сканировать", ar:"يمسح ضوئياً", en:"to scan", fr:"scanner" },
    example:{ ru:"Она сканирует документ.", ar:"بتمسح الوثيقة ضوئياً.", en:"She scans the document.", fr:"Elle scanne le document." },
    root:"СКАН", cat:"تقنية"
  },
  {
    nsv:"перезагружаться", sv:"перезагрузиться",
    imp:"перезагружайся, перезагружайтесь / перезагрузись, перезагрузитесь",
    meaning:{ ru:"перезагружаться", ar:"يعاد تشغيله", en:"to reboot (oneself)", fr:"redémarrer (soi-même)" },
    example:{ ru:"Компьютер долго перезагружается.", ar:"الكمبيوتر بيعيد تشغيل نفسه ببطء.", en:"The computer reboots slowly.", fr:"L'ordinateur redémarre lentement." },
    root:"ГРУЗ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"консультироваться", sv:"проконсультироваться",
    imp:"консультируйся, консультируйтесь / проконсультируйся, проконсультируйтесь",
    meaning:{ ru:"консультироваться", ar:"يستشير", en:"to consult", fr:"consulter" },
    example:{ ru:"Я консультируюсь с научным руководителем.", ar:"بستشير المشرف العلمي.", en:"I consult with my academic advisor.", fr:"Je consulte mon directeur de recherche." },
    root:"КОНСУЛЬТ", cat:"تعليم"
  },
  {
    nsv:"защищать (диплом)", sv:"защитить",
    imp:"защищай, защищайте / защити, защитите",
    meaning:{ ru:"защищать (диплом)", ar:"يناقش أطروحة", en:"to defend a thesis", fr:"soutenir un mémoire" },
    example:{ ru:"Студент защитил диплом на отлично.", ar:"الطالب ناقش الرسالة بامتياز.", en:"The student defended his thesis with honours.", fr:"L'étudiant a soutenu son mémoire avec mention." },
    root:"ЗАЩИТ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"оценивать", sv:"оценить",
    imp:"оценивай, оценивайте / оцени, оцените",
    meaning:{ ru:"оценивать", ar:"يقيّم (مالياً)", en:"to appraise", fr:"évaluer" },
    example:{ ru:"Эксперт оценил квартиру.", ar:"الخبير قيم الشقة.", en:"The expert appraised the flat.", fr:"L'expert a évalué l'appartement." },
    root:"ЦЕН", cat:"اقتصاد"
  },
  {
    nsv:"инфлировать", sv:"инфлировать",
    imp:"инфлируй, инфлируйте",
    meaning:{ ru:"инфлировать", ar:"يضخم (اقتصاد)", en:"to inflate (economy)", fr:"inflationner" },
    example:{ ru:"Цены инфлируют быстро.", ar:"الأسعار بتتضخم بسرعة.", en:"Prices inflate quickly.", fr:"Les prix augmentent rapidement." },
    root:"ИНФЛИР", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"освобождать (под залог)", sv:"освободить",
    imp:"освобождай, освобождайте / освободи, освободите",
    meaning:{ ru:"освобождать (под залог)", ar:"يُخلي سبيل (بكفالة)", en:"to release on bail", fr:"libérer sous caution" },
    example:{ ru:"Суд освободил подозреваемого под залог.", ar:"المحكمة أخلى سبيل المشتبه فيه بكفالة.", en:"The court released the suspect on bail.", fr:"Le tribunal a libéré le suspect sous caution." },
    root:"СВОБОД", cat:"قانون"
  },
  {
    nsv:"обыскивать", sv:"обыскать",
    imp:"обыскивай, обыскивайте / обыщи, обыщите",
    meaning:{ ru:"обыскивать", ar:"يفتش", en:"to search (a person)", fr:"fouiller" },
    example:{ ru:"Полиция обыскала подозреваемого.", ar:"البوليس فتشت المشتبه فيه.", en:"The police searched the suspect.", fr:"La police a fouillé le suspect." },
    root:"ЫСК", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"принимать (мяч)", sv:"принять",
    imp:"принимай, принимайте / прими, примите",
    meaning:{ ru:"принимать (мяч)", ar:"يستقبل الكورة", en:"to receive (a ball)", fr:"recevoir (le ballon)" },
    example:{ ru:"Футболист чисто принял мяч.", ar:"اللاعب استقبل الكورة تمام.", en:"The footballer received the ball cleanly.", fr:"Le footballeur a reçu le ballon proprement." },
    root:"НИМ", cat:"رياضة"
  },
  {
    nsv:"пасовать", sv:"отпасовать",
    imp:"пасуй, пасуйте / отпасуй, отпасуйте",
    meaning:{ ru:"пасовать", ar:"يمرر الكرة", en:"to pass (a ball)", fr:"faire une passe" },
    example:{ ru:"Игрок пасует партнёру.", ar:"اللاعب بيمرر لزميله.", en:"The player passes to his teammate.", fr:"Le joueur fait une passe à son coéquipier." },
    root:"ПАС", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"записывать (альбом)", sv:"записать",
    imp:"записывай, записывайте / запиши, запишите",
    meaning:{ ru:"записывать (альбом)", ar:"يسجل ألبوماً", en:"to record an album", fr:"enregistrer un album" },
    example:{ ru:"Группа записывает новый альбом.", ar:"الفرقة بتسجل ألبوم جديد.", en:"The band records a new album.", fr:"Le groupe enregistre un nouvel album." },
    root:"ПИС", cat:"فن"
  },
  {
    nsv:"гастролировать", sv:"погастролировать",
    imp:"гастролируй, гастролируйте / погастролируй, погастролируйте",
    meaning:{ ru:"гастролировать", ar:"يقوم بجولة فنية", en:"to tour (perform)", fr:"être en tournée" },
    example:{ ru:"Театр гастролирует по городам.", ar:"المسرح بيعمل جولة في المدن.", en:"Theatre tours the cities.", fr:"Le théâtre est en tournée dans les villes." },
    root:"ГАСТРОЛ", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"патрулировать", sv:"отпатрулировать",
    imp:"патрулируй, патрулируйте / отпатрулируй, отпатрулируйте",
    meaning:{ ru:"патрулировать", ar:"يقوم بدورية", en:"to patrol", fr:"patrouiller" },
    example:{ ru:"Полиция патрулирует улицы.", ar:"البوليس بتعمل دورية في الشوارع.", en:"The police patrol the streets.", fr:"La police patrouille les rues." },
    root:"ПАТРУЛ", cat:"عسكرية"
  },
  {
    nsv:"мобилизоваться", sv:"отмобилизоваться",
    imp:"мобилизуйся, мобилизуйтесь / отмобилизуйся, отмобилизуйтесь",
    meaning:{ ru:"мобилизоваться", ar:"يُستدعى للجيش", en:"to be mobilised", fr:"être mobilisé" },
    example:{ ru:"Резервисты мобилизовались.", ar:"الاحتياطيين استدعوا للجيش.", en:"The reservists were mobilised.", fr:"Les réservistes ont été mobilisés." },
    root:"МОБИЛ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"заезжать", sv:"заехать",
    imp:"заезжай, заезжайте / заедь, заедьте",
    meaning:{ ru:"заезжать", ar:"يدخل بسيارته", en:"to drive in", fr:"entrer en voiture" },
    example:{ ru:"Мы заехали во двор.", ar:"دخلنا بالعربية الفناء.", en:"We drove into the yard.", fr:"Nous sommes entrés en voiture dans la cour." },
    root:"ЕЗД", cat:"حركة"
  },
  {
    nsv:"съезжать", sv:"съехать",
    imp:"съезжай, съезжайте / съедь, съедьте",
    meaning:{ ru:"съезжать", ar:"ينزل بسيارته (منحدر)", en:"to drive down", fr:"descendre en voiture" },
    example:{ ru:"Машина съехала с горки.", ar:"العربية نزلت من على التل.", en:"The car drove down the hill.", fr:"La voiture a descendu la colline." },
    root:"ЕЗД", cat:"حركة"
  },
  {
    nsv:"обгонять", sv:"обогнать",
    imp:"обгоняй, обгоняйте / обгони, обгоните",
    meaning:{ ru:"обгонять", ar:"يتجاوز (في الطريق)", en:"to overtake", fr:"dépasser" },
    example:{ ru:"Спорткар обогнал грузовик.", ar:"العربية الرياضية عدّت الشاحنة.", en:"The sports car overtook the truck.", fr:"La voiture de sport a dépassé le camion." },
    root:"ГОН", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"осязать (пальцами)", sv:"осязать",
    imp:"осязай, осязайте",
    meaning:{ ru:"осязать (пальцами)", ar:"يتحسس بأصابعه", en:"to feel with fingers", fr:"palper" },
    example:{ ru:"Слепой читает шрифт Брайля, осязая буквы.", ar:"الأعمى بيقرا برايل بإيديه.", en:"The blind person reads Braille by feeling the letters.", fr:"L'aveugle lit le braille en palpant les lettres." },
    root:"ОСЯЗ", cat:"حواس"
  },
  {
    nsv:"слышать (издалека)", sv:"услышать",
    imp:"слышь, слышьте / услышь, услышьте",
    meaning:{ ru:"слышать (издалека)", ar:"يسمع من بعيد", en:"to hear from afar", fr:"entendre de loin" },
    example:{ ru:"Я услышал крик о помощи.", ar:"سمعت صرخة استغاثة.", en:"I heard a cry for help.", fr:"J'ai entendu un cri à l'aide." },
    root:"СЛЫШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"бормотать", sv:"пробормотать",
    imp:"бормочи, бормочите / пробормочи, пробормочите",
    meaning:{ ru:"бормотать", ar:"يغمغم", en:"to mutter", fr:"marmonner" },
    example:{ ru:"Старик бормочет молитву.", ar:"العجوز بيغمغم بالدعاء.", en:"The old man mutters a prayer.", fr:"Le vieil homme marmonne une prière." },
    root:"БОРМОТ", cat:"تواصل"
  },
  {
    nsv:"восклицать", sv:"воскликнуть",
    imp:"восклицай, восклицайте / воскликни, воскликните",
    meaning:{ ru:"восклицать", ar:"يهتف", en:"to exclaim", fr:"s'exclamer" },
    example:{ ru:"«Ура!» – воскликнули дети.", ar:"«عاش!» – هتف الأطفال.", en:"«Hooray!» the children exclaimed.", fr:"«Hourra !» s'exclamèrent les enfants." },
    root:"КЛИК", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"воображать", sv:"вообразить",
    imp:"воображай, воображайте / вообрази, вообразите",
    meaning:{ ru:"воображать", ar:"يتخيل", en:"to imagine", fr:"imaginer" },
    example:{ ru:"Вообрази себе рай.", ar:"تخيل الجنة.", en:"Imagine paradise.", fr:"Imagine le paradis." },
    root:"ОБРАЖ", cat:"ذهنية"
  },
  {
    nsv:"формулировать", sv:"сформулировать",
    imp:"формулируй, формулируйте / сформулируй, сформулируйте",
    meaning:{ ru:"формулировать", ar:"يصوغ (فكرة)", en:"to formulate", fr:"formuler" },
    example:{ ru:"Учёный сформулировал гипотезу.", ar:"العالم صاغ فرضية.", en:"The scientist formulated a hypothesis.", fr:"Le scientifique a formulé une hypothèse." },
    root:"ФОРМУЛ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"затачивать", sv:"заточить",
    imp:"затачивай, затачивайте / заточи, заточите",
    meaning:{ ru:"затачивать", ar:"يسنّ (سكيناً)", en:"to sharpen (a knife)", fr:"aiguiser" },
    example:{ ru:"Повар затачивает нож.", ar:"الطباخ بيسن السكين.", en:"The cook sharpens the knife.", fr:"Le cuisinier aiguise le couteau." },
    root:"ТОЧ", cat:"عمل"
  },
  {
    nsv:"строгать", sv:"острогать",
    imp:"строгай, строгайте / острогай, острогайте",
    meaning:{ ru:"строгать (дерево)", ar:"يسوّي الخشب", en:"to plane (wood)", fr:"raboter" },
    example:{ ru:"Плотник строгает доску.", ar:"النجار بيسوي اللوح.", en:"The carpenter planes the board.", fr:"Le menuisier rabote la planche." },
    root:"СТРОГ", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"обижаться", sv:"обидеться",
    imp:"обижайся, обижайтесь / обидься, обидьтесь",
    meaning:{ ru:"обижаться", ar:"يزعل", en:"to take offence", fr:"se vexer" },
    example:{ ru:"Она обиделась на шутку.", ar:"هي زعلت من النكتة.", en:"She took offence at the joke.", fr:"Elle s'est vexée de la plaisanterie." },
    root:"ОБИД", cat:"عواطف"
  },
  {
    nsv:"скучать", sv:"заскучать",
    imp:"скучай, скучайте / заскучай, заскучайте",
    meaning:{ ru:"скучать", ar:"يشتاق / يمل", en:"to miss / be bored", fr:"s'ennuyer / manquer" },
    example:{ ru:"Я скучаю по тебе.", ar:"أشتاق لك.", en:"I miss you.", fr:"Tu me manques." },
    root:"СКУЧ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"цвести", sv:"зацвести",
    imp:"цвети, цветите / зацвети, зацветите",
    meaning:{ ru:"цвести", ar:"يزهر", en:"to bloom", fr:"fleurir" },
    example:{ ru:"В саду цветут розы.", ar:"الورد في الجنينة مزهر.", en:"Roses bloom in the garden.", fr:"Les roses fleurissent dans le jardin." },
    root:"ЦВЕТ", cat:"طبيعة"
  },
  {
    nsv:"осыпаться", sv:"осыпаться",
    imp:"осыпайся, осыпайтесь / осыпься, осыпьтесь",
    meaning:{ ru:"осыпаться (листья)", ar:"يتساقط", en:"to fall (leaves)", fr:"tomber (feuilles)" },
    example:{ ru:"Листья осыпаются осенью.", ar:"الورق بيتساقط في الخريف.", en:"Leaves fall in autumn.", fr:"Les feuilles tombent en automne." },
    root:"СЫП", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"выздоравливать", sv:"выздороветь",
    imp:"выздоравливай, выздоравливайте / выздоровей, выздоровейте",
    meaning:{ ru:"выздоравливать", ar:"يتعافى", en:"to recover", fr:"guérir" },
    example:{ ru:"Больной быстро выздоравливает.", ar:"المريض بيتعافى بسرعة.", en:"The patient recovers quickly.", fr:"Le malade guérit vite." },
    root:"ЗДОРОВ", cat:"صحة"
  },
  {
    nsv:"простужаться", sv:"простудиться",
    imp:"простужайся, простужайтесь / простудись, простудитесь",
    meaning:{ ru:"простужаться", ar:"يصاب بنزلة برد", en:"to catch a cold", fr:"attraper froid" },
    example:{ ru:"Я простудился под дождём.", ar:"أصبت بنزلة برد من المطر.", en:"I caught a cold in the rain.", fr:"J'ai attrapé froid sous la pluie." },
    root:"СТУД", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"угождать", sv:"угодить",
    imp:"угождай, угождайте / угоди, угодите",
    meaning:{ ru:"угождать", ar:"يرضي (شخصاً)", en:"to please (someone)", fr:"complaire" },
    example:{ ru:"Трудно угодить всем.", ar:"صعب ترضي الكل.", en:"It's hard to please everyone.", fr:"Difficile de plaire à tout le monde." },
    root:"ГОД", cat:"علاقات"
  },
  {
    nsv:"хвалить", sv:"похвалить",
    imp:"хвали, хвалите / похвали, похвалите",
    meaning:{ ru:"хвалить", ar:"يمدح", en:"to praise", fr:"féliciter" },
    example:{ ru:"Учитель похвалил ученика за старание.", ar:"المعلم مدح الطالب على اجتهاده.", en:"The teacher praised the pupil for his effort.", fr:"Le professeur a félicité l'élève pour son effort." },
    root:"ХВАЛ", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"форматировать", sv:"отформатировать",
    imp:"форматируй, форматируйте / отформатируй, отформатируйте",
    meaning:{ ru:"форматировать (флешку)", ar:"يهيئ فلاشة", en:"to format a flash drive", fr:"formater une clé USB" },
    example:{ ru:"Я отформатировал флешку.", ar:"هيأت الفلاشة.", en:"I formatted the flash drive.", fr:"J'ai formaté la clé USB." },
    root:"ФОРМ", cat:"تقنية"
  },
  {
    nsv:"логиниться", sv:"залогиниться",
    imp:"логинься, логиньтесь / залогинься, залогиньтесь",
    meaning:{ ru:"логиниться", ar:"يسجل الدخول", en:"to log in", fr:"se connecter" },
    example:{ ru:"Я логинюсь в систему.", ar:"بسجل دخولي في النظام.", en:"I log in to the system.", fr:"Je me connecte au système." },
    root:"ЛОГ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"переписывать (конспект)", sv:"переписать",
    imp:"переписывай, переписывайте / перепиши, перепишите",
    meaning:{ ru:"переписывать (конспект)", ar:"يعيد كتابة الملاحظات", en:"to rewrite notes", fr:"recopier des notes" },
    example:{ ru:"Студент переписывает лекцию.", ar:"الطالب بيعيد كتابة المحاضرة.", en:"The student rewrites the lecture.", fr:"L'étudiant recopie le cours." },
    root:"ПИС", cat:"تعليم"
  },
  {
    nsv:"заучивать (стих)", sv:"заучить",
    imp:"заучивай, заучивайте / заучи, заучите",
    meaning:{ ru:"заучивать (стих)", ar:"يحفظ شعراً", en:"to memorise a poem", fr:"apprendre un poème par cœur" },
    example:{ ru:"Актёр заучил монолог.", ar:"الممثل حفظ المونولوج.", en:"The actor memorised the monologue.", fr:"L'acteur a appris le monologue par cœur." },
    root:"УЧ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"копить (деньги)", sv:"накопить",
    imp:"копи, копите / накопи, накопите",
    meaning:{ ru:"копить (деньги)", ar:"يدخر فلوساً", en:"to save up money", fr:"épargner" },
    example:{ ru:"Я коплю на новый велосипед.", ar:"بدخر عشان عجلة جديدة.", en:"I'm saving up for a new bicycle.", fr:"J'économise pour un nouveau vélo." },
    root:"КОП", cat:"اقتصاد"
  },
  {
    nsv:"покупать (акции)", sv:"купить",
    imp:"покупай, покупайте / купи, купите",
    meaning:{ ru:"покупать (акции)", ar:"يشتري أسهماً", en:"to buy shares", fr:"acheter des actions" },
    example:{ ru:"Инвестор купил акции компании.", ar:"المستثمر اشترى أسهم الشركة.", en:"The investor bought shares of the company.", fr:"L'investisseur a acheté des actions de l'entreprise." },
    root:"КУП", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"свидетельствовать", sv:"засвидетельствовать",
    imp:"свидетельствуй, свидетельствуйте / засвидетельствуй, засвидетельствуйте",
    meaning:{ ru:"свидетельствовать", ar:"يشهد (في المحكمة)", en:"to testify (in court)", fr:"témoigner" },
    example:{ ru:"Свидетель дал показания.", ar:"الشاهد أدلى بشهادته.", en:"The witness gave testimony.", fr:"Le témoin a témoigné." },
    root:"СВИДЕТ", cat:"قانون"
  },
  {
    nsv:"апеллировать", sv:"апеллировать",
    imp:"апеллируй, апеллируйте",
    meaning:{ ru:"апеллировать", ar:"يستأنف حكماً", en:"to appeal (a verdict)", fr:"faire appel" },
    example:{ ru:"Адвокат апеллировал к Верховному суду.", ar:"المحامي استأنف للمحكمة العليا.", en:"The lawyer appealed to the Supreme Court.", fr:"L'avocat a fait appel à la Cour suprême." },
    root:"АПЕЛ", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"жонглировать", sv:"пожонглировать",
    imp:"жонглируй, жонглируйте / пожонглируй, пожонглируйте",
    meaning:{ ru:"жонглировать", ar:"يتلاعب بالكرة", en:"to juggle", fr:"jongler" },
    example:{ ru:"Футболист жонглирует мячом.", ar:"اللاعب بينط الكورة.", en:"The footballer juggles the ball.", fr:"Le footballeur jongle avec le ballon." },
    root:"ЖОНГЛ", cat:"رياضة"
  },
  {
    nsv:"отбивать (мяч)", sv:"отбить",
    imp:"отбивай, отбивайте / отбей, отбейте",
    meaning:{ ru:"отбивать (мяч)", ar:"يصد الكرة", en:"to return (a ball)", fr:"renvoyer (une balle)" },
    example:{ ru:"Теннисист отбил сложную подачу.", ar:"لاعب التنس صد الإرسال الصعب.", en:"The tennis player returned a difficult serve.", fr:"Le joueur de tennis a renvoyé un service difficile." },
    root:"БИ", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"репетировать", sv:"отрепетировать",
    imp:"репетируй, репетируйте / отрепетируй, отрепетируйте",
    meaning:{ ru:"репетировать", ar:"يتدرب على العرض", en:"to rehearse", fr:"répéter" },
    example:{ ru:"Оркестр репетирует симфонию.", ar:"الأوركسترا بيتدربوا على السيمفونية.", en:"The orchestra rehearses the symphony.", fr:"L'orchestre répète la symphonie." },
    root:"РЕПЕТ", cat:"فن"
  },
  {
    nsv:"декламировать", sv:"продекламировать",
    imp:"декламируй, декламируйте / продекламируй, продекламируйте",
    meaning:{ ru:"декламировать", ar:"يلقي شعراً", en:"to recite poetry", fr:"déclamer" },
    example:{ ru:"Поэт декламирует свои стихи.", ar:"الشاعر بيلقي قصيدته.", en:"The poet recites his poems.", fr:"Le poète déclame ses poèmes." },
    root:"ДЕКЛАМ", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"атаковать", sv:"атаковать",
    imp:"атакуй, атакуйте",
    meaning:{ ru:"атаковать", ar:"يهاجم", en:"to attack", fr:"attaquer" },
    example:{ ru:"Войска атаковали на рассвете.", ar:"القوات هاجمت عند الفجر.", en:"The troops attacked at dawn.", fr:"Les troupes ont attaqué à l'aube." },
    root:"АТАК", cat:"عسكرية"
  },
  {
    nsv:"отступать (под натиском)", sv:"отступить",
    imp:"отступай, отступайте / отступи, отступите",
    meaning:{ ru:"отступать (под натиском)", ar:"ينسحب تحت الضغط", en:"to retreat under pressure", fr:"battre en retraite sous pression" },
    example:{ ru:"Враг отступил в лес.", ar:"العدو انسحب للغابة.", en:"The enemy retreated into the forest.", fr:"L'ennemi s'est replié dans la forêt." },
    root:"СТУП", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перекатываться", sv:"перекатиться",
    imp:"перекатывайся, перекатывайтесь / перекатись, перекатитесь",
    meaning:{ ru:"перекатываться", ar:"يتدحرج إلى الجانب", en:"to roll over", fr:"se rouler sur le côté" },
    example:{ ru:"Мяч перекатился через линию.", ar:"الكورة اتدحرجت ورا الخط.", en:"The ball rolled over the line.", fr:"Le ballon a roulé derrière la ligne." },
    root:"КАТ", cat:"حركة"
  },
  {
    nsv:"спотыкаться", sv:"споткнуться",
    imp:"спотыкайся, спотыкайтесь / споткнись, споткнитесь",
    meaning:{ ru:"спотыкаться", ar:"يتعثر", en:"to stumble", fr:"trébucher" },
    example:{ ru:"Он споткнулся о камень.", ar:"اتعثر في حجر.", en:"He stumbled over a stone.", fr:"Il a trébuché sur une pierre." },
    root:"ТЫК", cat:"حركة"
  },
  {
    nsv:"подкрадываться", sv:"подкрасться",
    imp:"подкрадывайся, подкрадывайтесь / подкрадись, подкрадитесь",
    meaning:{ ru:"подкрадываться", ar:"يتسلل خلسة", en:"to sneak up", fr:"s'approcher furtivement" },
    example:{ ru:"Кот подкрался к птице.", ar:"القط اتسلل للعصفورة.", en:"The cat sneaked up on the bird.", fr:"Le chat s'est approché furtivement de l'oiseau." },
    root:"КРАД", cat:"حركة"
  },
  {
    nsv:"перепрыгивать", sv:"перепрыгнуть",
    imp:"перепрыгивай, перепрыгивайте / перепрыгни, перепрыгните",
    meaning:{ ru:"перепрыгивать", ar:"يقفز فوق", en:"to jump over", fr:"sauter par‑dessus" },
    example:{ ru:"Собака перепрыгнула через забор.", ar:"الكلب قفز فوق السور.", en:"The dog jumped over the fence.", fr:"Le chien a sauté par‑dessus la clôture." },
    root:"ПРЫГ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"всматриваться", sv:"всмотреться",
    imp:"всматривайся, всматривайтесь / всмотрись, всмотритесь",
    meaning:{ ru:"всматриваться", ar:"يحملق / يدقق", en:"to peer", fr:"scruter" },
    example:{ ru:"Он всматривался в темноту.", ar:"كان بيحملق في الضلمة.", en:"He peered into the darkness.", fr:"Il scrutait l'obscurité." },
    root:"СМОТР", cat:"حواس"
  },
  {
    nsv:"слышать (шёпот)", sv:"услышать",
    imp:"слышь, слышьте / услышь, услышьте",
    meaning:{ ru:"слышать (шёпот)", ar:"يسمع الهمس", en:"to hear a whisper", fr:"entendre un murmure" },
    example:{ ru:"Я услышал шёпот за дверью.", ar:"سمعت همس ورا الباب.", en:"I heard a whisper behind the door.", fr:"J'ai entendu un murmure derrière la porte." },
    root:"СЛЫШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"шептать", sv:"шепнуть",
    imp:"шепчи, шепчите / шепни, шепните",
    meaning:{ ru:"шептать", ar:"يهمس", en:"to whisper", fr:"chuchoter" },
    example:{ ru:"Она шепнула мне секрет.", ar:"همست لي السر.", en:"She whispered the secret to me.", fr:"Elle m'a chuchoté le secret." },
    root:"ШЕПТ", cat:"تواصل"
  },
  {
    nsv:"кричать", sv:"крикнуть",
    imp:"кричи, кричите / крикни, крикните",
    meaning:{ ru:"кричать", ar:"يصرخ", en:"to shout", fr:"crier" },
    example:{ ru:"Не кричи на меня.", ar:"لا تصرخ فيا.", en:"Don't shout at me.", fr:"Ne me crie pas dessus." },
    root:"КРИК", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"соображать", sv:"сообразить",
    imp:"соображай, соображайте / сообрази, сообразите",
    meaning:{ ru:"соображать", ar:"يدرك بسرعة", en:"to grasp quickly", fr:"comprendre vite" },
    example:{ ru:"Он быстро соображает.", ar:"هو بيفهم بسرعة.", en:"He grasps things quickly.", fr:"Il comprend vite." },
    root:"ОБРАЖ", cat:"ذهنية"
  },
  {
    nsv:"заучивать (наизусть)", sv:"заучить",
    imp:"заучивай, заучивайте / заучи, заучите",
    meaning:{ ru:"заучивать наизусть", ar:"يحفظ عن ظهر قلب", en:"to memorise", fr:"mémoriser" },
    example:{ ru:"Я заучил таблицу умножения.", ar:"حفظت جدول الضرب.", en:"I memorised the multiplication table.", fr:"J'ai mémorisé la table de multiplication." },
    root:"УЧ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"заваривать (кофе)", sv:"заварить",
    imp:"заваривай, заваривайте / завари, заварите",
    meaning:{ ru:"заваривать (кофе)", ar:"يعمل قهوة", en:"to brew coffee", fr:"préparer du café" },
    example:{ ru:"Я завариваю кофе каждое утро.", ar:"بظبط القهوة كل صباح.", en:"I brew coffee every morning.", fr:"Je prépare du café chaque matin." },
    root:"ВАР", cat:"عمل"
  },
  {
    nsv:"заряжать (телефон)", sv:"зарядить",
    imp:"заряжай, заряжайте / заряди, зарядите",
    meaning:{ ru:"заряжать (телефон)", ar:"يشحن التليفون", en:"to charge a phone", fr:"charger un téléphone" },
    example:{ ru:"Не забудь зарядить телефон.", ar:"متنساش تشحن التليفون.", en:"Don't forget to charge your phone.", fr:"N'oublie pas de charger ton téléphone." },
    root:"РЯД", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"злиться", sv:"разозлиться",
    imp:"злись, злитесь / разозлись, разозлитесь",
    meaning:{ ru:"злиться", ar:"يغضب", en:"to be angry", fr:"se fâcher" },
    example:{ ru:"Он злится из-за проигрыша.", ar:"هو غضبان بسبب الخسارة.", en:"He is angry about the loss.", fr:"Il est fâché à cause de la défaite." },
    root:"ЗЛ", cat:"عواطف"
  },
  {
    nsv:"влюбляться", sv:"влюбиться",
    imp:"влюбляйся, влюбляйтесь / влюбись, влюбитесь",
    meaning:{ ru:"влюбляться", ar:"يقع في الحب", en:"to fall in love", fr:"tomber amoureux" },
    example:{ ru:"Он влюбился в неё с первого взгляда.", ar:"وقع في حبها من أول نظرة.", en:"He fell in love with her at first sight.", fr:"Il est tombé amoureux d'elle au premier regard." },
    root:"ЛЮБ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"замерзать", sv:"замёрзнуть",
    imp:"замерзай, замерзайте / замёрзни, замёрзните",
    meaning:{ ru:"замерзать", ar:"يتجمد", en:"to freeze", fr:"geler" },
    example:{ ru:"Озеро замёрзло.", ar:"البحيرة اتجمدت.", en:"The lake froze.", fr:"Le lac a gelé." },
    root:"МЕРЗ", cat:"طبيعة"
  },
  {
    nsv:"таять", sv:"растаять",
    imp:"тай, тайте / растай, растайте",
    meaning:{ ru:"таять", ar:"يذوب", en:"to melt", fr:"fondre" },
    example:{ ru:"Снег растаял весной.", ar:"الثلج داب في الربيع.", en:"The snow melted in spring.", fr:"La neige a fondu au printemps." },
    root:"ТА", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"обрабатывать (рану)", sv:"обработать",
    imp:"обрабатывай, обрабатывайте / обработай, обработайте",
    meaning:{ ru:"обрабатывать (рану)", ar:"يعالج جرحاً", en:"to treat a wound", fr:"désinfecter une plaie" },
    example:{ ru:"Медсестра обработала рану йодом.", ar:"الممرضة عالجت الجرح باليود.", en:"The nurse treated the wound with iodine.", fr:"L'infirmière a désinfecté la plaie avec de l'iode." },
    root:"РАБОТ", cat:"صحة"
  },
  {
    nsv:"перебинтовывать", sv:"перебинтовать",
    imp:"перебинтовывай, перебинтовывайте / перебинтуй, перебинтуйте",
    meaning:{ ru:"перебинтовывать", ar:"يعيد تضميد", en:"to rebandage", fr:"refaire un pansement" },
    example:{ ru:"Врач перебинтовал ногу.", ar:"الدكتور غيّر على رجله.", en:"The doctor rebandaged the leg.", fr:"Le médecin a refait le pansement de la jambe." },
    root:"БИНТ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"ухаживать (за девушкой)", sv:"поухаживать",
    imp:"ухаживай, ухаживайте / поухаживай, поухаживайте",
    meaning:{ ru:"ухаживать (за девушкой)", ar:"يتودد لفتاة", en:"to court a girl", fr:"courtiser une fille" },
    example:{ ru:"Он красиво ухаживает за ней.", ar:"بيتودد ليها بشكل جميل.", en:"He courts her beautifully.", fr:"Il la courtise joliment." },
    root:"ХАЖ", cat:"علاقات"
  },
  {
    nsv:"ревновать", sv:"приревновать",
    imp:"ревнуй, ревнуйте / приревнуй, приревнуйте",
    meaning:{ ru:"ревновать", ar:"يغار", en:"to be jealous", fr:"être jaloux" },
    example:{ ru:"Она ревнует его к подруге.", ar:"هي بتغار عليه من صاحبتها.", en:"She is jealous of him with her friend.", fr:"Elle est jalouse de lui avec son amie." },
    root:"РЕВН", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"компилировать", sv:"скомпилировать",
    imp:"компилируй, компилируйте / скомпилируй, скомпилируйте",
    meaning:{ ru:"компилировать", ar:"يترجم برمجياً", en:"to compile (code)", fr:"compiler" },
    example:{ ru:"Программист компилирует код.", ar:"المبرمج بيترجم الكود.", en:"The programmer compiles the code.", fr:"Le programmeur compile le code." },
    root:"КОМПИЛ", cat:"تقنية"
  },
  {
    nsv:"отлаживать", sv:"отладить",
    imp:"отлаживай, отлаживайте / отладь, отладьте",
    meaning:{ ru:"отлаживать (программу)", ar:"يُصحح أخطاء البرنامج", en:"to debug", fr:"déboguer" },
    example:{ ru:"Разработчик отладил приложение.", ar:"المطور صلح أخطاء التطبيق.", en:"The developer debugged the app.", fr:"Le développeur a débogué l'application." },
    root:"ЛАД", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"обучаться (на курсах)", sv:"обучиться",
    imp:"обучайся, обучайтесь / обучись, обучитесь",
    meaning:{ ru:"обучаться (на курсах)", ar:"يتعلم في دورة", en:"to take a course", fr:"suivre une formation" },
    example:{ ru:"Она обучается веб-дизайну.", ar:"بتتعلم تصميم مواقع.", en:"She takes a web design course.", fr:"Elle suit une formation en web design." },
    root:"УЧ", cat:"تعليم"
  },
  {
    nsv:"сдавать (зачёт)", sv:"сдать",
    imp:"сдавай, сдавайте / сдай, сдайте",
    meaning:{ ru:"сдавать (зачёт)", ar:"يؤدي اختباراً", en:"to pass a test", fr:"réussir un contrôle" },
    example:{ ru:"Я сдал зачёт по истории.", ar:"نجحت في اختبار التاريخ.", en:"I passed the history test.", fr:"J'ai réussi le contrôle d'histoire." },
    root:"ДА", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"обналичивать (чек)", sv:"обналичить",
    imp:"обналичивай, обналичивайте / обналичь, обналичьте",
    meaning:{ ru:"обналичивать (чек)", ar:"يصرف شيكاً", en:"to cash a cheque", fr:"encaisser un chèque" },
    example:{ ru:"Я обналичил зарплатный чек.", ar:"صرفت شيك المرتب.", en:"I cashed my paycheque.", fr:"J'ai encaissé mon chèque de paie." },
    root:"ЛИЦ", cat:"اقتصاد"
  },
  {
    nsv:"закладывать (имущество)", sv:"заложить",
    imp:"закладывай, закладывайте / заложи, заложите",
    meaning:{ ru:"закладывать (имущество)", ar:"يرهن", en:"to mortgage", fr:"hypothéquer" },
    example:{ ru:"Они заложили дом в банке.", ar:"رهنوا البيت في البنك.", en:"They mortgaged the house at the bank.", fr:"Ils ont hypothéqué la maison à la banque." },
    root:"КЛАД", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"задерживать", sv:"задержать",
    imp:"задерживай, задерживайте / задержи, задержите",
    meaning:{ ru:"задерживать (преступника)", ar:"يحتجز مجرماً", en:"to detain", fr:"arrêter / détenir" },
    example:{ ru:"Полиция задержала вора.", ar:"البوليس أمسكت بالحرامي.", en:"The police detained the thief.", fr:"La police a arrêté le voleur." },
    root:"ДЕРЖ", cat:"قانون"
  },
  {
    nsv:"обыскивать (помещение)", sv:"обыскать",
    imp:"обыскивай, обыскивайте / обыщи, обыщите",
    meaning:{ ru:"обыскивать (помещение)", ar:"يفتش مكاناً", en:"to search a place", fr:"perquisitionner" },
    example:{ ru:"Полиция обыскала квартиру.", ar:"البوليس فتشت الشقة.", en:"The police searched the flat.", fr:"La police a perquisitionné l'appartement." },
    root:"ЫСК", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"качаться (в зале)", sv:"покачаться",
    imp:"качайся, качайтесь / покачайся, покачайтесь",
    meaning:{ ru:"качаться (в зале)", ar:"يتمرن بالأثقال", en:"to work out (gym)", fr:"s'entraîner (muscu)" },
    example:{ ru:"Я качаюсь три раза в неделю.", ar:"بتمرن حديد تلات مرات في الأسبوع.", en:"I work out three times a week.", fr:"Je m'entraîne trois fois par semaine." },
    root:"КАЧ", cat:"رياضة"
  },
  {
    nsv:"бегать (на дорожке)", sv:"пробежать",
    imp:"бегай, бегайте / пробеги, пробегите",
    meaning:{ ru:"бегать (на дорожке)", ar:"يجري على السير", en:"to run on a treadmill", fr:"courir sur un tapis" },
    example:{ ru:"Она бегает на дорожке полчаса.", ar:"بتجري على السير نص ساعة.", en:"She runs on the treadmill for half an hour.", fr:"Elle court sur le tapis une demi‑heure." },
    root:"БЕГ", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"снимать (фильм)", sv:"снять",
    imp:"снимай, снимайте / сними, снимите",
    meaning:{ ru:"снимать (фильм)", ar:"يصور فيلماً", en:"to shoot a film", fr:"tourner un film" },
    example:{ ru:"Режиссёр снимает сцену в парке.", ar:"المخرج بيصور مشهد في الجنينة.", en:"The director shoots a scene in the park.", fr:"Le réalisateur tourne une scène dans le parc." },
    root:"НИМ", cat:"فن"
  },
  {
    nsv:"озвучивать (мультфильм)", sv:"озвучить",
    imp:"озвучивай, озвучивайте / озвучь, озвучьте",
    meaning:{ ru:"озвучивать (мультфильм)", ar:"يؤدي الصوت لكرتون", en:"to do voiceover for a cartoon", fr:"faire la voix d'un dessin animé" },
    example:{ ru:"Актёр озвучивает героя мультфильма.", ar:"الممثل بيؤدي صوت شخصية الكرتون.", en:"The actor does the voiceover for a cartoon character.", fr:"L'acteur fait la voix d'un personnage de dessin animé." },
    root:"ЗВУК", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"вести разведку", sv:"провести разведку",
    imp:"веди разведку, ведите разведку / проведи разведку, проведите разведку",
    meaning:{ ru:"вести разведку", ar:"يقوم بالاستطلاع", en:"to conduct reconnaissance", fr:"effectuer une reconnaissance" },
    example:{ ru:"Группа провела разведку местности.", ar:"المجموعة عملت استطلاع للمنطقة.", en:"The group conducted reconnaissance of the area.", fr:"Le groupe a effectué une reconnaissance du terrain." },
    root:"ВЕД", cat:"عسكرية"
  },
  {
    nsv:"штурмовать", sv:"штурмовать",
    imp:"штурмуй, штурмуйте",
    meaning:{ ru:"штурмовать", ar:"يقتحم", en:"to storm", fr:"donner l'assaut" },
    example:{ ru:"Солдаты штурмуют здание.", ar:"الجنود بيقتحموا المبنى.", en:"Soldiers storm the building.", fr:"Les soldats donnent l'assaut au bâtiment." },
    root:"ШТУРМ", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"взлетать", sv:"взлететь",
    imp:"взлетай, взлетайте / взлети, взлетите",
    meaning:{ ru:"взлетать", ar:"يُقلع (طائرة)", en:"to take off (plane)", fr:"décoller (avion)" },
    example:{ ru:"Самолёт взлетел точно по расписанию.", ar:"الطيارة أقلعت بالضبط في الميعاد.", en:"The plane took off exactly on schedule.", fr:"L'avion a décollé exactement à l'heure." },
    root:"ЛЕТ", cat:"حركة"
  },
  {
    nsv:"подвозить", sv:"подвезти",
    imp:"подвози, подвозите / подвези, подвезите",
    meaning:{ ru:"подвозить", ar:"يوصل (شخصاً) بسيارة", en:"to give a lift", fr:"déposer en voiture" },
    example:{ ru:"Он подвёз меня до метро.", ar:"وصلني للـمترو بالعربية.", en:"He gave me a lift to the metro.", fr:"Il m'a déposé au métro." },
    root:"ВОЗ", cat:"حركة"
  },
  {
    nsv:"объезжать", sv:"объехать",
    imp:"объезжай, объезжайте / объедь, объедьте",
    meaning:{ ru:"объезжать", ar:"يدور حول", en:"to drive around / bypass", fr:"contourner" },
    example:{ ru:"Мы объехали пробку по дворам.", ar:"لفّينا الزحمة من الحواري.", en:"We bypassed the traffic jam via yards.", fr:"Nous avons contourné l'embouteillage par les cours." },
    root:"ЕЗД", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"прислушиваться", sv:"прислушаться",
    imp:"прислушивайся, прислушивайтесь / прислушайся, прислушайтесь",
    meaning:{ ru:"прислушиваться", ar:"ينصت بانتباه", en:"to listen carefully", fr:"tendre l'oreille" },
    example:{ ru:"Она прислушалась к разговору.", ar:"نصتت باهتمام للحوار.", en:"She listened carefully to the conversation.", fr:"Elle a tendu l'oreille à la conversation." },
    root:"СЛУШ", cat:"حواس"
  },
  {
    nsv:"нюхать (цветы)", sv:"понюхать",
    imp:"нюхай, нюхайте / понюхай, понюхайте",
    meaning:{ ru:"нюхать (цветы)", ar:"يشم الورد", en:"to smell flowers", fr:"sentir des fleurs" },
    example:{ ru:"Я люблю нюхать сирень.", ar:"بحب أشم الليلك.", en:"I love smelling lilac.", fr:"J'aime sentir le lilas." },
    root:"НЮХ", cat:"حواس"
  },
  {
    nsv:"пробовать (на вкус)", sv:"попробовать",
    imp:"пробуй, пробуйте / попробуй, попробуйте",
    meaning:{ ru:"пробовать (на вкус)", ar:"يتذوق", en:"to taste", fr:"goûter" },
    example:{ ru:"Попробуй этот вареник.", ar:"دوق الزلابية دي.", en:"Taste this dumpling.", fr:"Goûte ce varenyk." },
    root:"ПРОБ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"спорить", sv:"поспорить",
    imp:"сорь, сорьте / поспорь, поспорьте",
    meaning:{ ru:"спорить", ar:"يتجادل", en:"to argue", fr:"se disputer (discuter)" },
    example:{ ru:"Они долго спорили о политике.", ar:"فضلوا يتجادلوا في السياسة.", en:"They argued about politics for a long time.", fr:"Ils se sont disputés longtemps sur la politique." },
    root:"СПОР", cat:"تواصل"
  },
  {
    nsv:"извиняться", sv:"извиниться",
    imp:"извиняйся, извиняйтесь / извинись, извинитесь",
    meaning:{ ru:"извиняться", ar:"يعتذر", en:"to apologize", fr:"s'excuser" },
    example:{ ru:"Он извинился за опоздание.", ar:"اعتذر عن التأخير.", en:"He apologized for being late.", fr:"Il s'est excusé pour le retard." },
    root:"ВИН", cat:"تواصل"
  },
  {
    nsv:"прощаться", sv:"проститься",
    imp:"прощайся, прощайтесь / простись, проститесь",
    meaning:{ ru:"прощаться", ar:"يودّع", en:"to say goodbye", fr:"faire ses adieux" },
    example:{ ru:"Мы тепло простились на вокзале.", ar:"ودعنا بعض بحرارة في المحطة.", en:"We said a warm goodbye at the station.", fr:"Nous nous sommes chaleureusement dit adieu à la gare." },
    root:"ПРОЩ", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"понимать", sv:"понять",
    imp:"понимай, понимайте / пойми, поймите",
    meaning:{ ru:"понимать", ar:"يفهم", en:"to understand", fr:"comprendre" },
    example:{ ru:"Я понимаю твои чувства.", ar:"أنا فاهم مشاعرك.", en:"I understand your feelings.", fr:"Je comprends tes sentiments." },
    root:"НИМ", cat:"ذهنية"
  },
  {
    nsv:"учить (язык)", sv:"выучить",
    imp:"учи, учите / выучи, выучите",
    meaning:{ ru:"учить (язык)", ar:"يتعلم لغة", en:"to learn a language", fr:"apprendre une langue" },
    example:{ ru:"Я учу русский язык.", ar:"أتعلم اللغة الروسية.", en:"I'm learning Russian.", fr:"J'apprends le russe." },
    root:"УЧ", cat:"ذهنية"
  },
  {
    nsv:"составлять (отчёт)", sv:"составить",
    imp:"составляй, составляйте / составь, составьте",
    meaning:{ ru:"составлять (отчёт)", ar:"يعد تقريراً", en:"to compile a report", fr:"rédiger un rapport" },
    example:{ ru:"Бухгалтер составляет отчёт.", ar:"المحاسب بيعد التقرير.", en:"The accountant compiles the report.", fr:"Le comptable rédige le rapport." },
    root:"СТАВ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"нарезать (овощи)", sv:"нарезать",
    imp:"нарезай, нарезайте / нарежь, нарежьте",
    meaning:{ ru:"нарезать (овощи)", ar:"يقطع الخضار", en:"to cut vegetables", fr:"couper les légumes" },
    example:{ ru:"Повар нарезает лук.", ar:"الطباخ بيقطع البصل.", en:"The cook cuts onions.", fr:"Le cuisinier coupe les oignons." },
    root:"РЕЗ", cat:"عمل"
  },
  {
    nsv:"поджаривать", sv:"поджарить",
    imp:"поджаривай, поджаривайте / поджарь, поджарьте",
    meaning:{ ru:"поджаривать", ar:"يحمّر", en:"to roast lightly", fr:"faire revenir" },
    example:{ ru:"Я поджариваю лук до золотистого цвета.", ar:"بحمّر البصل لحد ما يبقى دهبي.", en:"I roast the onion until golden.", fr:"Je fais revenir l'oignon jusqu'à ce qu'il soit doré." },
    root:"ЖАР", cat:"عمل"
  },
  {
    nsv:"сервировать", sv:"сервировать",
    imp:"сервируй, сервируйте / сервируй, сервируйте",
    meaning:{ ru:"сервировать (стол)", ar:"يُجهز المائدة", en:"to set the table", fr:"dresser la table" },
    example:{ ru:"Она красиво сервирует стол.", ar:"بتجهز السفرة بشكل جميل.", en:"She sets the table beautifully.", fr:"Elle dresse joliment la table." },
    root:"СЕРВИР", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"обижаться", sv:"обидеться",
    imp:"обижайся, обижайтесь / обидься, обидьтесь",
    meaning:{ ru:"обижаться", ar:"يزعل", en:"to be offended", fr:"se vexer" },
    example:{ ru:"Не обижайся на глупую шутку.", ar:"ما تزعلش من نكتة هبلة.", en:"Don't be offended by a silly joke.", fr:"Ne te vexe pas d'une blague idiote." },
    root:"ОБИД", cat:"عواطف"
  },
  {
    nsv:"волноваться", sv:"заволноваться",
    imp:"волнуйся, волнуйтесь / заволнуйся, заволнуйтесь",
    meaning:{ ru:"волноваться", ar:"يتوتر", en:"to worry / be nervous", fr:"s'inquiéter" },
    example:{ ru:"Не волнуйся перед экзаменом.", ar:"ما تتوترش قبل الامتحان.", en:"Don't be nervous before the exam.", fr:"Ne sois pas nerveux avant l'examen." },
    root:"ВОЛН", cat:"عواطف"
  },
  {
    nsv:"радоваться", sv:"обрадоваться",
    imp:"радуйся, радуйтесь / обрадуйся, обрадуйтесь",
    meaning:{ ru:"радоваться", ar:"يفرح", en:"to rejoice", fr:"se réjouir" },
    example:{ ru:"Дети радуются каникулам.", ar:"الأطفال فرحانين بالإجازة.", en:"The children rejoice at the holidays.", fr:"Les enfants se réjouissent des vacances." },
    root:"РАД", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"зеленеть", sv:"зазеленеть",
    imp:"зеленей, зеленейте / зазеленей, зазеленейте",
    meaning:{ ru:"зеленеть", ar:"يخضر", en:"to turn green", fr:"verdir" },
    example:{ ru:"Поля зеленеют весной.", ar:"الحقول بتخضر في الربيع.", en:"The fields turn green in spring.", fr:"Les champs verdissent au printemps." },
    root:"ЗЕЛЕН", cat:"طبيعة"
  },
  {
    nsv:"рассветать", sv:"рассвести",
    imp:"— (безличный)",
    meaning:{ ru:"рассветать", ar:"ينبلج الصباح", en:"to dawn", fr:"se lever (jour)" },
    example:{ ru:"На востоке уже рассветает.", ar:"في الشرق ابتدى الصباح يطلع.", en:"It is already dawning in the east.", fr:"Le jour se lève déjà à l'est." },
    root:"СВЕТ", cat:"طبيعة"
  },
  {
    nsv:"моросить", sv:"заморосить",
    imp:"— (безличный)",
    meaning:{ ru:"моросить", ar:"ترذ المطر", en:"to drizzle", fr:"bruiner" },
    example:{ ru:"На улице моросит с утра.", ar:"بره بترذ من الصبح.", en:"It's been drizzling outside since morning.", fr:"Il bruine dehors depuis ce matin." },
    root:"МОРОС", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"выздоравливать", sv:"выздороветь",
    imp:"выздоравливай, выздоравливайте / выздоровей, выздоровейте",
    meaning:{ ru:"выздоравливать", ar:"يتماثل للشفاء", en:"to recover", fr:"guérir" },
    example:{ ru:"Больной быстро выздоравливает.", ar:"المريض بيتعافى بسرعة.", en:"The patient recovers quickly.", fr:"Le malade guérit rapidement." },
    root:"ЗДОРОВ", cat:"صحة"
  },
  {
    nsv:"лечиться (травами)", sv:"полечиться",
    imp:"лечись, лечитесь / полечись, полечитесь",
    meaning:{ ru:"лечиться (травами)", ar:"يتداوى بالأعشاب", en:"to heal with herbs", fr:"se soigner par les plantes" },
    example:{ ru:"Бабушка лечится травами.", ar:"الست بتتداوى بالأعشاب.", en:"Grandma heals herself with herbs.", fr:"Grand-mère se soigne avec des herbes." },
    root:"ЛЕЧ", cat:"صحة"
  },
  {
    nsv:"осматривать (у врача)", sv:"осмотреть",
    imp:"осматривай, осматривайте / осмотри, осмотрите",
    meaning:{ ru:"осматривать (у врача)", ar:"يفحص عند الطبيب", en:"to have a check-up", fr:"se faire examiner par un médecin" },
    example:{ ru:"Я осматриваюсь у стоматолога раз в год.", ar:"بفحص عند دكتور الأسنان مرة في السنة.", en:"I have a dental check-up once a year.", fr:"Je me fais examiner chez le dentiste une fois par an." },
    root:"СМОТР", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"гулять (вместе)", sv:"погулять",
    imp:"гуляй, гуляйте / погуляй, погуляйте",
    meaning:{ ru:"гулять (вместе)", ar:"يتمشى معاً", en:"to take a walk together", fr:"se promener ensemble" },
    example:{ ru:"Мы любим гулять по парку.", ar:"بنحب نتمشى في الجنينة.", en:"We love walking together in the park.", fr:"Nous aimons nous promener ensemble dans le parc." },
    root:"ГУЛ", cat:"علاقات"
  },
  {
    nsv:"знакомиться", sv:"познакомиться",
    imp:"знакомься, знакомьтесь / познакомься, познакомьтесь",
    meaning:{ ru:"знакомиться", ar:"يتعرف على شخص", en:"to get acquainted", fr:"faire connaissance" },
    example:{ ru:"Давай познакомимся поближе.", ar:"تعالى نتعرف على بعض أكتر.", en:"Let's get to know each other better.", fr:"Faisons plus ample connaissance." },
    root:"ЗНАКОМ", cat:"علاقات"
  },
  {
    nsv:"общаться (по душам)", sv:"пообщаться",
    imp:"общайся, общайтесь / пообщайся, пообщайтесь",
    meaning:{ ru:"общаться (по душам)", ar:"يتحدث من القلب", en:"to have a heart-to-heart", fr:"parler à cœur ouvert" },
    example:{ ru:"Подруги общались по душам до утра.", ar:"الصحاب اتكلموا من قلبهم للصبح.", en:"The friends had a heart-to-heart until morning.", fr:"Les amies ont parlé à cœur ouvert jusqu'au matin." },
    root:"ОБЩ", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"копировать (файл)", sv:"скопировать",
    imp:"копируй, копируйте / скопируй, скопируйте",
    meaning:{ ru:"копировать (файл)", ar:"ينسخ ملفاً", en:"to copy a file", fr:"copier un fichier" },
    example:{ ru:"Скопируй документ на флешку.", ar:"انسخ الملف على الفلاشة.", en:"Copy the document to the flash drive.", fr:"Copie le document sur la clé USB." },
    root:"КОПИР", cat:"تقنية"
  },
  {
    nsv:"вставлять (текст)", sv:"вставить",
    imp:"вставляй, вставляйте / вставь, вставьте",
    meaning:{ ru:"вставлять (текст)", ar:"يلصق نصاً", en:"to paste text", fr:"coller du texte" },
    example:{ ru:"Вставь скопированный текст сюда.", ar:"حط النص اللي اتنقل هنا.", en:"Paste the copied text here.", fr:"Colle le texte copié ici." },
    root:"СТАВ", cat:"تقنية"
  },
  {
    nsv:"архивировать", sv:"заархивировать",
    imp:"архивируй, архивируйте / заархивируй, заархивируйте",
    meaning:{ ru:"архивировать", ar:"يضغط ملفاً", en:"to archive (compress)", fr:"compresser" },
    example:{ ru:"Заархивируй папку перед отправкой.", ar:"اضغط المجلد قبل الإرسال.", en:"Archive the folder before sending.", fr:"Compresse le dossier avant l'envoi." },
    root:"АРХИВ", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"проверять (тетради)", sv:"проверить",
    imp:"проверяй, проверяйте / проверь, проверьте",
    meaning:{ ru:"проверять (тетради)", ar:"يصحح الدفاتر", en:"to check notebooks", fr:"corriger les cahiers" },
    example:{ ru:"Учитель проверяет тетради каждый вечер.", ar:"المعلم بيصحح الدفاتر كل ليلة.", en:"The teacher checks notebooks every evening.", fr:"Le professeur corrige les cahiers chaque soir." },
    root:"ВЕР", cat:"تعليم"
  },
  {
    nsv:"объяснять (урок)", sv:"объяснить",
    imp:"объясняй, объясняйте / объясни, объясните",
    meaning:{ ru:"объяснять (урок)", ar:"يشرح درساً", en:"to explain a lesson", fr:"expliquer une leçon" },
    example:{ ru:"Она объяснила новую тему.", ar:"شرحت الموضوع الجديد.", en:"She explained the new topic.", fr:"Elle a expliqué le nouveau sujet." },
    root:"ЯСН", cat:"تعليم"
  },
  {
    nsv:"заниматься (дома)", sv:"позаниматься",
    imp:"занимайся, занимайтесь / позанимайся, позанимайтесь",
    meaning:{ ru:"заниматься (дома)", ar:"يذاكر في البيت", en:"to study at home", fr:"étudier à la maison" },
    example:{ ru:"Я занимаюсь по вечерам.", ar:"بذاكر بالليل.", en:"I study in the evenings.", fr:"J'étudie le soir." },
    root:"НИМ", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"продавать (на рынке)", sv:"продать",
    imp:"продавай, продавайте / продай, продайте",
    meaning:{ ru:"продавать (на рынке)", ar:"يبيع في السوق", en:"to sell at the market", fr:"vendre au marché" },
    example:{ ru:"Фермер продаёт овощи на рынке.", ar:"الفلاح بيبيع خضار في السوق.", en:"The farmer sells vegetables at the market.", fr:"Le fermier vend des légumes au marché." },
    root:"ДА", cat:"اقتصاد"
  },
  {
    nsv:"покупать (в кредит)", sv:"купить",
    imp:"покупай, покупайте / купи, купите",
    meaning:{ ru:"покупать (в кредит)", ar:"يشتري بالتقسيط", en:"to buy on credit", fr:"acheter à crédit" },
    example:{ ru:"Они купили мебель в кредит.", ar:"اشتروا العفش بالتقسيط.", en:"They bought furniture on credit.", fr:"Ils ont acheté les meubles à crédit." },
    root:"КУП", cat:"اقتصاد"
  },
  {
    nsv:"экономить (электроэнергию)", sv:"сэкономить",
    imp:"экономь, экономьте / сэкономь, сэкономьте",
    meaning:{ ru:"экономить (электроэнергию)", ar:"يوفر في الكهرباء", en:"to save electricity", fr:"économiser l'électricité" },
    example:{ ru:"Мы экономим электроэнергию.", ar:"بنوفر في الكهرباء.", en:"We save electricity.", fr:"Nous économisons l'électricité." },
    root:"ЭКОНОМ", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"голосовать (на референдуме)", sv:"проголосовать",
    imp:"голосуй, голосуйте / проголосуй, проголосуйте",
    meaning:{ ru:"голосовать (на референдуме)", ar:"يصوت في استفتاء", en:"to vote in a referendum", fr:"voter lors d'un référendum" },
    example:{ ru:"Граждане проголосовали за новую конституцию.", ar:"المواطنين صوتوا لصالح الدستور الجديد.", en:"Citizens voted for the new constitution.", fr:"Les citoyens ont voté pour la nouvelle constitution." },
    root:"ГОЛОС", cat:"قانون"
  },
  {
    nsv:"судиться", sv:"посудиться",
    imp:"судись, судитесь / посудись, посудитесь",
    meaning:{ ru:"судиться", ar:"يتقاضي", en:"to litigate", fr:"plaider" },
    example:{ ru:"Они судятся за наследство.", ar:"بيتقاضوا على الميراث.", en:"They litigate over inheritance.", fr:"Ils plaident pour l'héritage." },
    root:"СУД", cat:"قانون"
  },
  {
    nsv:"заключать (договор)", sv:"заключить",
    imp:"заключай, заключайте / заключи, заключите",
    meaning:{ ru:"заключать (договор)", ar:"يبرم عقداً", en:"to conclude a contract", fr:"conclure un contrat" },
    example:{ ru:"Компании заключили договор о сотрудничестве.", ar:"الشركات أبرمت عقد تعاون.", en:"The companies concluded a cooperation agreement.", fr:"Les entreprises ont conclu un contrat de coopération." },
    root:"КЛЮЧ", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"подтягиваться", sv:"подтянуться",
    imp:"подтягивайся, подтягивайтесь / подтянись, подтянитесь",
    meaning:{ ru:"подтягиваться", ar:"يعمل عقلة", en:"to do pull‑ups", fr:"faire des tractions" },
    example:{ ru:"Я подтягиваюсь на турнике 10 раз.", ar:"بتمرن عقلة 10 مرات.", en:"I do 10 pull‑ups on the bar.", fr:"Je fais 10 tractions à la barre." },
    root:"ТЯГ", cat:"رياضة"
  },
  {
    nsv:"отжиматься (от пола)", sv:"отжаться",
    imp:"отжимайся, отжимайтесь / отожмись, отожмитесь",
    meaning:{ ru:"отжиматься (от пола)", ar:"يعمل تمرين ضغط", en:"to do push‑ups", fr:"faire des pompes" },
    example:{ ru:"Он отжимается 50 раз.", ar:"بيعمل 50 ضغط.", en:"He does 50 push‑ups.", fr:"Il fait 50 pompes." },
    root:"ЖИМ", cat:"رياضة"
  },
  {
    nsv:"играть в настольный теннис", sv:"сыграть",
    imp:"играй, играйте / сыграй, сыграйте",
    meaning:{ ru:"играть в настольный теннис", ar:"يلعب تنس طاولة", en:"to play table tennis", fr:"jouer au ping‑pong" },
    example:{ ru:"Мы играем в настольный теннис в офисе.", ar:"بنلعب تنس طاولة في المكتب.", en:"We play table tennis at the office.", fr:"Nous jouons au ping‑pong au bureau." },
    root:"ИГР", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"рисовать (акварелью)", sv:"нарисовать",
    imp:"рисуй, рисуйте / нарисуй, нарисуйте",
    meaning:{ ru:"рисовать (акварелью)", ar:"يرسم بألوان مائية", en:"to paint in watercolour", fr:"peindre à l'aquarelle" },
    example:{ ru:"Художник рисует пейзаж акварелью.", ar:"الرسام بيرسم منظر طبيعي بألوان مية.", en:"The artist paints a landscape in watercolour.", fr:"L'artiste peint un paysage à l'aquarelle." },
    root:"РИС", cat:"فن"
  },
  {
    nsv:"лепить (из глины)", sv:"слепить",
    imp:"лепи, лепите / слепи, слепите",
    meaning:{ ru:"лепить (из глины)", ar:"ينحت بالطين", en:"to sculpt in clay", fr:"modeler en argile" },
    example:{ ru:"Дети лепят фигурки животных.", ar:"الأطفال بينحتوا أشكال حيوانات.", en:"Children sculpt animal figures.", fr:"Les enfants modèlent des figurines d'animaux." },
    root:"ЛЕП", cat:"فن"
  },
  {
    nsv:"выступать (на концерте)", sv:"выступить",
    imp:"выступай, выступайте / выступи, выступите",
    meaning:{ ru:"выступать (на концерте)", ar:"يؤدي في حفلة", en:"to perform at a concert", fr:"se produire en concert" },
    example:{ ru:"Группа выступила на фестивале.", ar:"الفرقة قدمت عرض في المهرجان.", en:"The band performed at the festival.", fr:"Le groupe s'est produit au festival." },
    root:"СТУП", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"квартировать", sv:"расквартировать",
    imp:"квартируй, квартируйте / расквартируй, расквартируйте",
    meaning:{ ru:"квартировать (войска)", ar:"يُسكن الجنود", en:"to billet troops", fr:"cantonner des troupes" },
    example:{ ru:"Полк квартирует в деревне.", ar:"الفوج عسكر في القرية.", en:"The regiment is billeted in the village.", fr:"Le régiment cantonne dans le village." },
    root:"КВАРТИР", cat:"عسكرية"
  },
  {
    nsv:"патрулировать (границу)", sv:"отпатрулировать",
    imp:"патрулируй, патрулируйте / отпатрулируй, отпатрулируйте",
    meaning:{ ru:"патрулировать (границу)", ar:"يقوم بدورية حدود", en:"to patrol the border", fr:"patrouiller la frontière" },
    example:{ ru:"Пограничники патрулируют границу.", ar:"حرس الحدود بيدوروا على الحدود.", en:"Border guards patrol the border.", fr:"Les gardes-frontières patrouillent la frontière." },
    root:"ПАТРУЛ", cat:"عسكرية"
  },
  {
    nsv:"брать в плен", sv:"взять в плен",
    imp:"бери в плен, берите в плен / возьми в плен, возьмите в плен",
    meaning:{ ru:"брать в плен", ar:"يأسر", en:"to take prisoner", fr:"faire prisonnier" },
    example:{ ru:"Разведчиков взяли в плен.", ar:"الاستخبارات اتأسروا.", en:"The scouts were taken prisoner.", fr:"Les éclaireurs ont été faits prisonniers." },
    root:"БР", cat:"عسكرية"
  },
  // ============= ДВИЖЕНИЕ (Motion) =============
  {
    nsv:"перекатываться", sv:"перекатиться",
    imp:"перекатывайся, перекатывайтесь / перекатись, перекатитесь",
    meaning:{ ru:"перекатываться", ar:"يتدحرج إلى الجانب", en:"to roll over", fr:"se rouler sur le côté" },
    example:{ ru:"Мяч перекатился через линию.", ar:"الكورة اتدحرجت ورا الخط.", en:"The ball rolled over the line.", fr:"Le ballon a roulé derrière la ligne." },
    root:"КАТ", cat:"حركة"
  },
  {
    nsv:"спотыкаться", sv:"споткнуться",
    imp:"спотыкайся, спотыкайтесь / споткнись, споткнитесь",
    meaning:{ ru:"спотыкаться", ar:"يتعثر", en:"to stumble", fr:"trébucher" },
    example:{ ru:"Он споткнулся о камень.", ar:"اتعثر في حجر.", en:"He stumbled over a stone.", fr:"Il a trébuché sur une pierre." },
    root:"ТЫК", cat:"حركة"
  },
  {
    nsv:"подкрадываться", sv:"подкрасться",
    imp:"подкрадывайся, подкрадывайтесь / подкрадись, подкрадитесь",
    meaning:{ ru:"подкрадываться", ar:"يتسلل خلسة", en:"to sneak up", fr:"s'approcher furtivement" },
    example:{ ru:"Кот подкрался к птице.", ar:"القط اتسلل للعصفورة.", en:"The cat sneaked up on the bird.", fr:"Le chat s'est approché furtivement de l'oiseau." },
    root:"КРАД", cat:"حركة"
  },
  {
    nsv:"перепрыгивать", sv:"перепрыгнуть",
    imp:"перепрыгивай, перепрыгивайте / перепрыгни, перепрыгните",
    meaning:{ ru:"перепрыгивать", ar:"يقفز فوق", en:"to jump over", fr:"sauter par‑dessus" },
    example:{ ru:"Собака перепрыгнула через забор.", ar:"الكلب قفز فوق السور.", en:"The dog jumped over the fence.", fr:"Le chien a sauté par‑dessus la clôture." },
    root:"ПРЫГ", cat:"حركة"
  },

  // ============= ЧУВСТВА (Senses) =============
  {
    nsv:"всматриваться", sv:"всмотреться",
    imp:"всматривайся, всматривайтесь / всмотрись, всмотритесь",
    meaning:{ ru:"всматриваться", ar:"يحملق / يدقق", en:"to peer", fr:"scruter" },
    example:{ ru:"Он всматривался в темноту.", ar:"كان بيحملق في الضلمة.", en:"He peered into the darkness.", fr:"Il scrutait l'obscurité." },
    root:"СМОТР", cat:"حواس"
  },
  {
    nsv:"слышать (шёпот)", sv:"услышать",
    imp:"слышь, слышьте / услышь, услышьте",
    meaning:{ ru:"слышать (шёпот)", ar:"يسمع الهمس", en:"to hear a whisper", fr:"entendre un murmure" },
    example:{ ru:"Я услышал шёпот за дверью.", ar:"سمعت همس ورا الباب.", en:"I heard a whisper behind the door.", fr:"J'ai entendu un murmure derrière la porte." },
    root:"СЛЫШ", cat:"حواس"
  },

  // ============= ОБЩЕНИЕ (Communication) =============
  {
    nsv:"шептать", sv:"шепнуть",
    imp:"шепчи, шепчите / шепни, шепните",
    meaning:{ ru:"шептать", ar:"يهمس", en:"to whisper", fr:"chuchoter" },
    example:{ ru:"Она шепнула мне секрет.", ar:"همست لي السر.", en:"She whispered the secret to me.", fr:"Elle m'a chuchoté le secret." },
    root:"ШЕПТ", cat:"تواصل"
  },
  {
    nsv:"кричать", sv:"крикнуть",
    imp:"кричи, кричите / крикни, крикните",
    meaning:{ ru:"кричать", ar:"يصرخ", en:"to shout", fr:"crier" },
    example:{ ru:"Не кричи на меня.", ar:"لا تصرخ فيا.", en:"Don't shout at me.", fr:"Ne me crie pas dessus." },
    root:"КРИК", cat:"تواصل"
  },

  // ============= УМСТВЕННЫЕ (Mental) =============
  {
    nsv:"соображать", sv:"сообразить",
    imp:"соображай, соображайте / сообрази, сообразите",
    meaning:{ ru:"соображать", ar:"يدرك بسرعة", en:"to grasp quickly", fr:"comprendre vite" },
    example:{ ru:"Он быстро соображает.", ar:"هو بيفهم بسرعة.", en:"He grasps things quickly.", fr:"Il comprend vite." },
    root:"ОБРАЖ", cat:"ذهنية"
  },
  {
    nsv:"заучивать (наизусть)", sv:"заучить",
    imp:"заучивай, заучивайте / заучи, заучите",
    meaning:{ ru:"заучивать наизусть", ar:"يحفظ عن ظهر قلب", en:"to memorise", fr:"mémoriser" },
    example:{ ru:"Я заучил таблицу умножения.", ar:"حفظت جدول الضرب.", en:"I memorised the multiplication table.", fr:"J'ai mémorisé la table de multiplication." },
    root:"УЧ", cat:"ذهنية"
  },

  // ============= РАБОТА И БЫТ (Work & Life) =============
  {
    nsv:"заваривать (кофе)", sv:"заварить",
    imp:"заваривай, заваривайте / завари, заварите",
    meaning:{ ru:"заваривать (кофе)", ar:"يعمل قهوة", en:"to brew coffee", fr:"préparer du café" },
    example:{ ru:"Я завариваю кофе каждое утро.", ar:"بظبط القهوة كل صباح.", en:"I brew coffee every morning.", fr:"Je prépare du café chaque matin." },
    root:"ВАР", cat:"عمل"
  },
  {
    nsv:"заряжать (телефон)", sv:"зарядить",
    imp:"заряжай, заряжайте / заряди, зарядите",
    meaning:{ ru:"заряжать (телефон)", ar:"يشحن التليفون", en:"to charge a phone", fr:"charger un téléphone" },
    example:{ ru:"Не забудь зарядить телефон.", ar:"متنساش تشحن التليفون.", en:"Don't forget to charge your phone.", fr:"N'oublie pas de charger ton téléphone." },
    root:"РЯД", cat:"عمل"
  },

  // ============= ЭМОЦИИ (Emotions) =============
  {
    nsv:"злиться", sv:"разозлиться",
    imp:"злись, злитесь / разозлись, разозлитесь",
    meaning:{ ru:"злиться", ar:"يغضب", en:"to be angry", fr:"se fâcher" },
    example:{ ru:"Он злится из-за проигрыша.", ar:"هو غضبان بسبب الخسارة.", en:"He is angry about the loss.", fr:"Il est fâché à cause de la défaite." },
    root:"ЗЛ", cat:"عواطف"
  },
  {
    nsv:"влюбляться", sv:"влюбиться",
    imp:"влюбляйся, влюбляйтесь / влюбись, влюбитесь",
    meaning:{ ru:"влюбляться", ar:"يقع في الحب", en:"to fall in love", fr:"tomber amoureux" },
    example:{ ru:"Он влюбился в неё с первого взгляда.", ar:"وقع في حبها من أول نظرة.", en:"He fell in love with her at first sight.", fr:"Il est tombé amoureux d'elle au premier regard." },
    root:"ЛЮБ", cat:"عواطف"
  },

  // ============= ПРИРОДА И ПОГОДА (Nature & Weather) =============
  {
    nsv:"замерзать", sv:"замёрзнуть",
    imp:"замерзай, замерзайте / замёрзни, замёрзните",
    meaning:{ ru:"замерзать", ar:"يتجمد", en:"to freeze", fr:"geler" },
    example:{ ru:"Озеро замёрзло.", ar:"البحيرة اتجمدت.", en:"The lake froze.", fr:"Le lac a gelé." },
    root:"МЕРЗ", cat:"طبيعة"
  },
  {
    nsv:"таять", sv:"растаять",
    imp:"тай, тайте / растай, растайте",
    meaning:{ ru:"таять", ar:"يذوب", en:"to melt", fr:"fondre" },
    example:{ ru:"Снег растаял весной.", ar:"الثلج داب في الربيع.", en:"The snow melted in spring.", fr:"La neige a fondu au printemps." },
    root:"ТА", cat:"طبيعة"
  },

  // ============= ЗДОРОВЬЕ И ТЕЛО (Health & Body) =============
  {
    nsv:"обрабатывать (рану)", sv:"обработать",
    imp:"обрабатывай, обрабатывайте / обработай, обработайте",
    meaning:{ ru:"обрабатывать (рану)", ar:"يعالج جرحاً", en:"to treat a wound", fr:"désinfecter une plaie" },
    example:{ ru:"Медсестра обработала рану йодом.", ar:"الممرضة عالجت الجرح باليود.", en:"The nurse treated the wound with iodine.", fr:"L'infirmière a désinfecté la plaie avec de l'iode." },
    root:"РАБОТ", cat:"صحة"
  },
  {
    nsv:"перебинтовывать", sv:"перебинтовать",
    imp:"перебинтовывай, перебинтовывайте / перебинтуй, перебинтуйте",
    meaning:{ ru:"перебинтовывать", ar:"يعيد تضميد", en:"to rebandage", fr:"refaire un pansement" },
    example:{ ru:"Врач перебинтовал ногу.", ar:"الدكتور غيّر على رجله.", en:"The doctor rebandaged the leg.", fr:"Le médecin a refait le pansement de la jambe." },
    root:"БИНТ", cat:"صحة"
  },

  // ============= ОТНОШЕНИЯ (Relations) =============
  {
    nsv:"ухаживать (за девушкой)", sv:"поухаживать",
    imp:"ухаживай, ухаживайте / поухаживай, поухаживайте",
    meaning:{ ru:"ухаживать (за девушкой)", ar:"يتودد لفتاة", en:"to court a girl", fr:"courtiser une fille" },
    example:{ ru:"Он красиво ухаживает за ней.", ar:"بيتودد ليها بشكل جميل.", en:"He courts her beautifully.", fr:"Il la courtise joliment." },
    root:"ХАЖ", cat:"علاقات"
  },
  {
    nsv:"ревновать", sv:"приревновать",
    imp:"ревнуй, ревнуйте / приревнуй, приревнуйте",
    meaning:{ ru:"ревновать", ar:"يغار", en:"to be jealous", fr:"être jaloux" },
    example:{ ru:"Она ревнует его к подруге.", ar:"هي بتغار عليه من صاحبتها.", en:"She is jealous of him with her friend.", fr:"Elle est jalouse de lui avec son amie." },
    root:"РЕВН", cat:"علاقات"
  },

  // ============= ТЕХНИКА (Technology) =============
  {
    nsv:"компилировать", sv:"скомпилировать",
    imp:"компилируй, компилируйте / скомпилируй, скомпилируйте",
    meaning:{ ru:"компилировать", ar:"يترجم برمجياً", en:"to compile (code)", fr:"compiler" },
    example:{ ru:"Программист компилирует код.", ar:"المبرمج بيترجم الكود.", en:"The programmer compiles the code.", fr:"Le programmeur compile le code." },
    root:"КОМПИЛ", cat:"تقنية"
  },
  {
    nsv:"отлаживать", sv:"отладить",
    imp:"отлаживай, отлаживайте / отладь, отладьте",
    meaning:{ ru:"отлаживать (программу)", ar:"يُصحح أخطاء البرنامج", en:"to debug", fr:"déboguer" },
    example:{ ru:"Разработчик отладил приложение.", ar:"المطور صلح أخطاء التطبيق.", en:"The developer debugged the app.", fr:"Le développeur a débogué l'application." },
    root:"ЛАД", cat:"تقنية"
  },

  // ============= ОБРАЗОВАНИЕ (Education) =============
  {
    nsv:"обучаться (на курсах)", sv:"обучиться",
    imp:"обучайся, обучайтесь / обучись, обучитесь",
    meaning:{ ru:"обучаться (на курсах)", ar:"يتعلم في دورة", en:"to take a course", fr:"suivre une formation" },
    example:{ ru:"Она обучается веб-дизайну.", ar:"بتتعلم تصميم مواقع.", en:"She takes a web design course.", fr:"Elle suit une formation en web design." },
    root:"УЧ", cat:"تعليم"
  },
  {
    nsv:"сдавать (зачёт)", sv:"сдать",
    imp:"сдавай, сдавайте / сдай, сдайте",
    meaning:{ ru:"сдавать (зачёт)", ar:"يؤدي اختباراً", en:"to pass a test", fr:"réussir un contrôle" },
    example:{ ru:"Я сдал зачёт по истории.", ar:"نجحت في اختبار التاريخ.", en:"I passed the history test.", fr:"J'ai réussi le contrôle d'histoire." },
    root:"ДА", cat:"تعليم"
  },

  // ============= ЭКОНОМИКА (Economy) =============
  {
    nsv:"обналичивать (чек)", sv:"обналичить",
    imp:"обналичивай, обналичивайте / обналичь, обналичьте",
    meaning:{ ru:"обналичивать (чек)", ar:"يصرف شيكاً", en:"to cash a cheque", fr:"encaisser un chèque" },
    example:{ ru:"Я обналичил зарплатный чек.", ar:"صرفت شيك المرتب.", en:"I cashed my paycheque.", fr:"J'ai encaissé mon chèque de paie." },
    root:"ЛИЦ", cat:"اقتصاد"
  },
  {
    nsv:"закладывать (имущество)", sv:"заложить",
    imp:"закладывай, закладывайте / заложи, заложите",
    meaning:{ ru:"закладывать (имущество)", ar:"يرهن", en:"to mortgage", fr:"hypothéquer" },
    example:{ ru:"Они заложили дом в банке.", ar:"رهنوا البيت في البنك.", en:"They mortgaged the house at the bank.", fr:"Ils ont hypothéqué la maison à la banque." },
    root:"КЛАД", cat:"اقتصاد"
  },

  // ============= ПРАВО (Law) =============
  {
    nsv:"задерживать", sv:"задержать",
    imp:"задерживай, задерживайте / задержи, задержите",
    meaning:{ ru:"задерживать (преступника)", ar:"يحتجز مجرماً", en:"to detain", fr:"arrêter / détenir" },
    example:{ ru:"Полиция задержала вора.", ar:"البوليس أمسكت بالحرامي.", en:"The police detained the thief.", fr:"La police a arrêté le voleur." },
    root:"ДЕРЖ", cat:"قانون"
  },
  {
    nsv:"обыскивать (помещение)", sv:"обыскать",
    imp:"обыскивай, обыскивайте / обыщи, обыщите",
    meaning:{ ru:"обыскивать (помещение)", ar:"يفتش مكاناً", en:"to search a place", fr:"perquisitionner" },
    example:{ ru:"Полиция обыскала квартиру.", ar:"البوليس فتشت الشقة.", en:"The police searched the flat.", fr:"La police a perquisitionné l'appartement." },
    root:"ЫСК", cat:"قانون"
  },

  // ============= СПОРТ (Sports) =============
  {
    nsv:"качаться (в зале)", sv:"покачаться",
    imp:"качайся, качайтесь / покачайся, покачайтесь",
    meaning:{ ru:"качаться (в зале)", ar:"يتمرن بالأثقال", en:"to work out (gym)", fr:"s'entraîner (muscu)" },
    example:{ ru:"Я качаюсь три раза в неделю.", ar:"بتمرن حديد تلات مرات في الأسبوع.", en:"I work out three times a week.", fr:"Je m'entraîne trois fois par semaine." },
    root:"КАЧ", cat:"رياضة"
  },
  {
    nsv:"бегать (на дорожке)", sv:"пробежать",
    imp:"бегай, бегайте / пробеги, пробегите",
    meaning:{ ru:"бегать (на дорожке)", ar:"يجري على السير", en:"to run on a treadmill", fr:"courir sur un tapis" },
    example:{ ru:"Она бегает на дорожке полчаса.", ar:"بتجري على السير نص ساعة.", en:"She runs on the treadmill for half an hour.", fr:"Elle court sur le tapis une demi‑heure." },
    root:"БЕГ", cat:"رياضة"
  },

  // ============= ИСКУССТВО (Art) =============
  {
    nsv:"снимать (фильм)", sv:"снять",
    imp:"снимай, снимайте / сними, снимите",
    meaning:{ ru:"снимать (фильм)", ar:"يصور فيلماً", en:"to shoot a film", fr:"tourner un film" },
    example:{ ru:"Режиссёр снимает сцену в парке.", ar:"المخرج بيصور مشهد في الجنينة.", en:"The director shoots a scene in the park.", fr:"Le réalisateur tourne une scène dans le parc." },
    root:"НИМ", cat:"فن"
  },
  {
    nsv:"озвучивать (мультфильм)", sv:"озвучить",
    imp:"озвучивай, озвучивайте / озвучь, озвучьте",
    meaning:{ ru:"озвучивать (мультфильм)", ar:"يؤدي الصوت لكرتون", en:"to do voiceover for a cartoon", fr:"faire la voix d'un dessin animé" },
    example:{ ru:"Актёр озвучивает героя мультфильма.", ar:"الممثل بيؤدي صوت شخصية الكرتون.", en:"The actor does the voiceover for a cartoon character.", fr:"L'acteur fait la voix d'un personnage de dessin animé." },
    root:"ЗВУК", cat:"فن"
  },

  // ============= ВОЕННОЕ (Military) =============
  {
    nsv:"вести разведку", sv:"провести разведку",
    imp:"веди разведку, ведите разведку / проведи разведку, проведите разведку",
    meaning:{ ru:"вести разведку", ar:"يقوم بالاستطلاع", en:"to conduct reconnaissance", fr:"effectuer une reconnaissance" },
    example:{ ru:"Группа провела разведку местности.", ar:"المجموعة عملت استطلاع للمنطقة.", en:"The group conducted reconnaissance of the area.", fr:"Le groupe a effectué une reconnaissance du terrain." },
    root:"ВЕД", cat:"عسكرية"
  },
  {
    nsv:"штурмовать", sv:"штурмовать",
    imp:"штурмуй, штурмуйте",
    meaning:{ ru:"штурмовать", ar:"يقتحم", en:"to storm", fr:"donner l'assaut" },
    example:{ ru:"Солдаты штурмуют здание.", ar:"الجنود بيقتحموا المبنى.", en:"Soldiers storm the building.", fr:"Les soldats donnent l'assaut au bâtiment." },
    root:"ШТУРМ", cat:"عسكرية"
  }
  // Note: there are ~100 entries here, exactly as planned.
];