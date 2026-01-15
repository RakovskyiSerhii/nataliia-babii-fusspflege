// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
  
  // Language System
  const translations = {
    de: {
      // Navigation
      'nav.home': 'Startseite',
      'nav.services': 'Leistungen',
      'nav.about': 'Über mich',
      'nav.contact': 'Kontakt',
      // Hero
      'hero.title': 'Professionelle Fußpflege',
      'hero.subtitle': 'für Ihre Fußgesundheit und Schönheit',
      'hero.text': 'Mit über 15 Jahren Erfahrung sorge ich für gesunde, gepflegte Füße und schöne Nägel. Individuell auf Ihre Bedürfnisse abgestimmt.',
      'hero.cta': 'Termin vereinbaren',
      'hero.badge.years': '15+',
      'hero.badge.text': 'Jahre Erfahrung',
      // Services Preview
      'services.title': 'Unsere Dienstleistungen',
      'services.medical.title': 'Medizinische Fußpflege',
      'services.medical.desc': 'Professionelle präventive Behandlung für gesunde Füße',
      'services.hygienic.title': 'Hygienische Fußpflege',
      'services.hygienic.desc': 'Grundlegende Pflege für gepflegte, gesunde Füße',
      'services.mobile.title': 'Mobile Fußpflege',
      'services.mobile.desc': 'Professionelle Behandlung bei Ihnen zu Hause',
      'services.manicure.title': 'Maniküre',
      'services.manicure.desc': 'Hygienische Maniküre für gepflegte Hände',
      'services.cta': 'Alle Leistungen ansehen',
      // About Preview
      'about.title': 'Über mich',
      'about.lead': 'Mein Name ist Nataliia Babii und ich bin seit über 15 Jahren als Fußpflege-Spezialistin tätig.',
      'about.text': 'Ursprünglich komme ich aus der Ukraine, wo ich meine Fähigkeiten und Erfahrungen im Bereich Fußpflege erworben habe. Im Jahr 2023 habe ich erfolgreich einen Fortbildungskurs an der INKOFA dr. Leibbrand Akademie in Hamburg absolviert.',
      'about.cta': 'Mehr erfahren',
      // Contact CTA
      'cta.title': 'Bereit für gepflegte Füße?',
      'cta.text': 'Vereinbaren Sie jetzt Ihren Termin für eine individuelle Behandlung',
      'cta.button': 'Kontakt aufnehmen',
      'cta.interest': 'Interesse an einer Behandlung?',
      'cta.book': 'Vereinbaren Sie jetzt Ihren Termin',
      'cta.appointment': 'Möchten Sie einen Termin vereinbaren?',
      'cta.message': 'Ich freue mich auf Ihre Nachricht',
      // Footer
      'footer.nav': 'Navigation',
      'footer.contact': 'Kontakt',
      'footer.copyright': '© 2026 Fußpflege Studio von Nataliia Babii. Alle Rechte vorbehalten.',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.tagline': 'Professionelle Fußpflege für Ihre Gesundheit und Schönheit.',
      // Prices
      'price.from': 'ab',
      'price.per': 'pro Behandlung',
      'price.title': 'Preisliste',
      'price.house': 'Hausbesuch',
      'price.lacquer': '+5 € mit Lack',
      'price.hygienic.lacquer': 'Hygienische Fußpflege + Lack',
      'price.hygienic.gel': 'Hygienische Fußpflege + Gel-Lack',
      'price.mobile': 'Mobile Fußpflege (Hausbesuch)',
      // Services Page
      'page.services.title': 'Unsere Leistungen',
      'page.services.subtitle': 'Professionelle Fußpflege für Ihre Fußgesundheit und Schönheit',
      'service.includes': 'Die Behandlung umfasst:',
      // Medical
      'service.medical.title': 'Medizinische Fußpflege',
      'service.medical.lead': 'Präventive Fußpflege für gesunde Haut und Nägel',
      'service.medical.desc1': 'Die medizinische Fußpflege ist eine professionelle Behandlung der Füße mit dem Fokus auf Prävention, Pflege und Erhalt gesunder Haut und Nägel. Die Behandlung hilft, Beschwerden zu lindern, Problemen vorzubeugen und die Füße dauerhaft gepflegt und gesund zu halten.',
      'service.medical.desc2': 'Die Behandlung wird hygienisch, sicher und schonend mit professionellen Instrumenten und hochwertigen Pflegeprodukten durchgeführt.',
      'service.medical.item1': 'Schonende Entfernung von Hornhaut und Druckstellen',
      'service.medical.item2': 'Fachgerechte Behandlung von Schrunden (Rissen) mit anschließender Pflege',
      'service.medical.item3': 'Sichere Behandlung von Hühneraugen',
      'service.medical.item4': 'Professionelle Behandlung und Korrektur eingewachsener Nägel',
      'service.medical.item5': 'Sorgfältige Bearbeitung der Nägel und Nagelränder',
      'service.medical.item6': 'Individuelle Empfehlungen für die häusliche Fußpflege',
      // Hygienic
      'service.hygienic.title': 'Hygienische Fußpflege',
      'service.hygienic.lead': 'Grundlegende Behandlung zur Pflege und Gesunderhaltung der Füße',
      'service.hygienic.desc': 'Die hygienische Fußpflege ist eine grundlegende Behandlung zur Pflege und Gesunderhaltung der Füße. Sie beinhaltet das fachgerechte Kürzen der Nägel, die schonende Behandlung der Nagelhaut sowie eine pflegende Versorgung der Füße für ein sauberes, gepflegtes Erscheinungsbild und ein angenehmes Wohlgefühl.',
      // Lacquer
      'service.lacquer.title': 'Hygienische Fußpflege mit Lackierung',
      'service.lacquer.lead': 'Pflege plus ästhetisches Finish',
      'service.lacquer.desc1': 'Die hygienische Fußpflege umfasst das fachgerechte Kürzen und Formen der Nägel, die schonende Behandlung der Nagelhaut sowie eine pflegende Versorgung der Füße.',
      'service.lacquer.desc2': 'Abgerundet wird die Behandlung durch eine saubere und gleichmäßige Lackierung der Nägel, die den Füßen ein gepflegtes, ästhetisches Erscheinungsbild verleiht und für ein angenehmes Wohlgefühl sorgt.',
      // Gel
      'service.gel.title': 'Fußpflege mit Gel-Lack',
      'service.gel.lead': 'Langlebiges, gepflegtes Ergebnis',
      'service.gel.desc': 'Die Fußpflege mit Gel-Lack ist eine pflegende Behandlung für Nägel und Füße. Sie umfasst die Vorbereitung der Nägel, die schonende Behandlung der Nagelhaut sowie das Auftragen von Gel-Lack für ein langlebiges, gepflegtes und ästhetisches Ergebnis.',
      // Mobile
      'service.mobile.title': 'Mobile Fußpflege für Senioren',
      'service.mobile.lead': 'Professionelle Behandlung bei Ihnen zu Hause',
      'service.mobile.desc1': 'Mobile Fußpflege ist eine professionelle Behandlung der Füße in der vertrauten und sicheren Umgebung Ihres Zuhauses. Die Behandlung umfasst Nagel- und Nagelhautpflege sowie Fußhautbehandlung unter Verwendung steriler Instrumente und professioneller Pflegeprodukte, die Hygiene und Sicherheit garantieren.',
      'service.mobile.desc2': 'Dieser Service ist speziell für Menschen gedacht, die Komfort, Sicherheit und individuelle Betreuung schätzen. Mobile Fußpflege hilft, die Fußgesundheit zu erhalten, Beschwerden vorzubeugen und gepflegte, schöne Füße zu genießen – ohne das Haus verlassen zu müssen.',
      // Manicure
      'service.manicure.title': 'Hygienische Maniküre',
      'service.manicure.lead': 'Professioneller Handpflege',
      'service.manicure.desc1': 'Die hygienische Maniküre ist ein professioneller Pflege für Hände, Nägel und Nagelhaut, der hilft, sie gesund und gepflegt zu halten. Die Behandlung umfasst das Schneiden und Formen der Nägel, die Nagelhautbehandlung sowie die Befeuchtung und Pflege der Haut der Hände.',
      'service.manicure.desc2': 'Die hygienische Maniküre erhält nicht nur ein ästhetisches Erscheinungsbild, sondern hilft auch, Beschwerden vorzubeugen und die Nägel zu stärken. Ideal für alle, die Wert auf gepflegte und komfortable Hände im Alltag legen.',
      // About Page
      'page.about.subtitle': 'Erfahren Sie mehr über meine Geschichte und Qualifikationen',
      'about.story.title': 'Meine Geschichte',
      'about.story.text': 'Ursprünglich komme ich aus der Ukraine, wo ich meine Fähigkeiten und Erfahrungen im Bereich Fußpflege erworben habe. In meiner langjährigen Tätigkeit habe ich unzähligen Menschen zu gesunden, gepflegten Füßen verholfen und dabei wertvolle Erfahrungen gesammelt.',
      'about.qualification.title': 'Qualifikation in Deutschland',
      'about.qualification.text': 'Im Jahr 2023 habe ich erfolgreich einen Fortbildungskurs in Fußpflege an der INKOFA dr. Leibbrand Akademie in Hamburg absolviert. Seitdem bin ich qualifizierte Fachfußpflegerin in Deutschland und arbeite nach den höchsten Standards der Branche.',
      'about.credentials.title': 'Meine Qualifikationen',
      'about.credentials.item1': 'Über 15 Jahre Berufserfahrung in der Fußpflege',
      'about.credentials.item2': 'Zertifizierte Fachfußpflegerin (INKOFA dr. Leibbrand Akademie, Hamburg, 2023)',
      'about.credentials.item3': 'Spezialisierung auf hygienische und medizinische Fußpflege',
      'about.credentials.item4': 'Erfahrung in der mobilen Fußpflege für Senioren',
      'about.passion.title': 'Meine Leidenschaft',
      'about.passion.text1': 'Meine Leidenschaft ist es, meinen Kundinnen und Kunden gesunde, gepflegte Füße und schöne Nägel zu ermöglichen. Mit Fachwissen, Erfahrung und Liebe zum Detail sorge ich dafür, dass jede Behandlung individuell auf Ihre Bedürfnisse abgestimmt wird.',
      'about.passion.text2': 'Ich verstehe, dass jeder Fuß einzigartig ist und besondere Aufmerksamkeit verdient. Deshalb nehme ich mir für jede Behandlung ausreichend Zeit und arbeite mit hochwertigen Produkten und sterilen Instrumenten.',
      'about.features.title': 'Was mich auszeichnet',
      'about.features.exp': 'Erfahrung:',
      'about.features.exp.text': 'Über 15 Jahre praktische Erfahrung in der Fußpflege',
      'about.features.prof': 'Professionalität:',
      'about.features.prof.text': 'Zertifizierte Ausbildung nach deutschen Standards',
      'about.features.hyg': 'Hygiene:',
      'about.features.hyg.text': 'Strenge Hygienestandards bei jeder Behandlung',
      'about.features.ind': 'Individualität:',
      'about.features.ind.text': 'Jede Behandlung wird auf Ihre Bedürfnisse abgestimmt',
      'about.features.flex': 'Flexibilität:',
      'about.features.flex.text': 'Auch Hausbesuche für Senioren möglich',
      'about.welcome': 'Ich freue mich darauf, Sie bald bei mir begrüßen zu dürfen!',
      // Contact Page
      'page.contact.subtitle': 'Vereinbaren Sie Ihren Termin oder stellen Sie Ihre Fragen',
      'contact.reach': 'So erreichen Sie mich',
      'contact.intro': 'Ich freue mich auf Ihre Nachricht und beantworte gerne alle Ihre Fragen rund um meine Leistungen.',
      'contact.location': 'Standort',
      'contact.phone': 'Telefon',
      'contact.email': 'E-Mail',
      'contact.mobile.title': 'Mobile Fußpflege',
      'contact.mobile.text': 'Für Senioren und Personen mit eingeschränkter Mobilität biete ich auch Hausbesuche an. Kontaktieren Sie mich für weitere Informationen.',
      'contact.form.title': 'Nachricht senden',
      'contact.form.name': 'Name *',
      'contact.form.email': 'E-Mail *',
      'contact.form.phone': 'Telefon',
      'contact.form.service': 'Gewünschte Leistung',
      'contact.form.select': 'Bitte auswählen...',
      'contact.form.message': 'Nachricht *',
      'contact.form.placeholder': 'Ihre Nachricht oder bevorzugter Terminwunsch...',
      'contact.form.submit': 'Nachricht senden',
    },
    uk: {
      // Navigation
      'nav.home': 'Головна',
      'nav.services': 'Послуги',
      'nav.about': 'Про мене',
      'nav.contact': 'Контакт',
      // Hero
      'hero.title': 'Професійний педикюр',
      'hero.subtitle': 'для здоров\'я та краси ваших стоп',
      'hero.text': 'Понад 15 років досвіду. Я забезпечую здорові, доглянуті стопи та красиві нігті. Індивідуальний підхід до ваших потреб.',
      'hero.cta': 'Записатися',
      'hero.badge.years': '15+',
      'hero.badge.text': 'років досвіду',
      // Services Preview
      'services.title': 'Наші послуги',
      'services.medical.title': 'Медичний педикюр',
      'services.medical.desc': 'Професійна профілактична процедура для здорових стоп',
      'services.hygienic.title': 'Гігієнічний педикюр',
      'services.hygienic.desc': 'Базовий догляд для доглянутих, здорових стоп',
      'services.mobile.title': 'Педикюр на дому',
      'services.mobile.desc': 'Професійна процедура у вас вдома',
      'services.manicure.title': 'Манікюр',
      'services.manicure.desc': 'Гігієнічний манікюр для доглянутих рук',
      'services.cta': 'Всі послуги',
      // About Preview
      'about.title': 'Про мене',
      'about.lead': 'Мене звати Наталія Бабій, і я працюю спеціалістом з педикюру понад 15 років.',
      'about.text': 'Родом я з України, де здобула свої навички та досвід у сфері догляду за стопами. У 2023 році я успішно закінчила курс підвищення кваліфікації в академії INKOFA dr. Leibbrand у Гамбурзі.',
      'about.cta': 'Дізнатися більше',
      // Contact CTA
      'cta.title': 'Готові до доглянутих стоп?',
      'cta.text': 'Запишіться зараз на індивідуальну процедуру',
      'cta.button': 'Зв\'язатися',
      'cta.interest': 'Зацікавлені в процедурі?',
      'cta.book': 'Запишіться зараз',
      'cta.appointment': 'Бажаєте записатися?',
      'cta.message': 'Чекаю на ваше повідомлення',
      // Footer
      'footer.nav': 'Навігація',
      'footer.contact': 'Контакт',
      'footer.copyright': '© 2026 Fußpflege Studio von Nataliia Babii. Всі права захищені.',
      'footer.imprint': 'Імпресум',
      'footer.privacy': 'Конфіденційність',
      'footer.tagline': 'Професійний педикюр для вашого здоров\'я та краси.',
      // Prices
      'price.from': 'від',
      'price.per': 'за процедуру',
      'price.title': 'Прайс-лист',
      'price.house': 'Виїзд додому',
      'price.lacquer': '+5 € з лаком',
      'price.hygienic.lacquer': 'Гігієнічний педикюр + лак',
      'price.hygienic.gel': 'Гігієнічний педикюр + гель-лак',
      'price.mobile': 'Педикюр на дому (виїзд)',
      // Services Page
      'page.services.title': 'Наші послуги',
      'page.services.subtitle': 'Професійний педикюр для здоров\'я та краси ваших стоп',
      'service.includes': 'Процедура включає:',
      // Medical
      'service.medical.title': 'Медичний педикюр',
      'service.medical.lead': 'Профілактичний догляд для здорової шкіри та нігтів',
      'service.medical.desc1': 'Медичний педикюр — це професійний догляд за стопами, спрямований на профілактику проблем та підтримання здоров\'я шкіри й нігтів. Процедура допомагає зняти дискомфорт, запобігти ускладненням і зберегти стопи доглянутими та здоровими.',
      'service.medical.desc2': 'Процедура виконується гігієнічно, безпечно та безболісно, з використанням професійних інструментів і засобів.',
      'service.medical.item1': 'Делікатна обробка натоптишів та огрубілої шкіри',
      'service.medical.item2': 'Усунення тріщин із подальшим доглядом',
      'service.medical.item3': 'Безпечна обробка мозолів',
      'service.medical.item4': 'Професійна обробка врослих нігтів',
      'service.medical.item5': 'Професійна обробка нігтьової пластини та кутикули',
      'service.medical.item6': 'Рекомендації з домашнього догляду для підтримки результату',
      // Hygienic
      'service.hygienic.title': 'Гігієнічний педикюр',
      'service.hygienic.lead': 'Базова процедура для догляду та підтримання здоров\'я стоп',
      'service.hygienic.desc': 'Гігієнічний педикюр — це базова процедура для догляду та підтримання здоров\'я стоп. Вона включає професійне підстригання нігтів, делікатну обробку кутикули та догляд за шкірою стоп, що забезпечує охайний, доглянутий вигляд і приємне відчуття комфорту.',
      // Lacquer
      'service.lacquer.title': 'Гігієнічний педикюр з покриттям лаком',
      'service.lacquer.lead': 'Догляд плюс естетичне завершення',
      'service.lacquer.desc1': 'Гігієнічний педикюр включає професійне підстригання та надання форми нігтям, делікатну обробку кутикули та догляд за шкірою стоп.',
      'service.lacquer.desc2': 'Завершальним етапом є акуратне та рівномірне покриття нігтів лаком, яке надає стопам доглянутого, естетичного вигляду та забезпечує відчуття комфорту.',
      // Gel
      'service.gel.title': 'Педикюр з гель-лаковим покриттям',
      'service.gel.lead': 'Стійкий, доглянутий результат',
      'service.gel.desc': 'Педикюр з гель-лаковим покриттям — це комплексна процедура догляду за стопами та нігтями, яка включає обробку нігтів і кутикули та нанесення гель-лаку для стійкого, охайного й естетичного вигляду.',
      // Mobile
      'service.mobile.title': 'Педикюр на дому для літніх людей',
      'service.mobile.lead': 'Професійна процедура у вас вдома',
      'service.mobile.desc1': 'Педикюр на дому — це професійний догляд за стопами у зручній та безпечній обстановці вашого дому. Процедура включає обробку нігтів, кутикули та шкіри стоп з використанням стерильних інструментів і професійних засобів, що гарантує гігієну та безпеку.',
      'service.mobile.desc2': 'Ця послуга створена для тих, хто цінує комфорт, безпеку та індивідуальний підхід. Педикюр на дому допомагає підтримувати здоров\'я стоп, запобігати дискомфорту та отримати доглянуті, акуратні ноги без необхідності виходити з дому.',
      // Manicure
      'service.manicure.title': 'Гігієнічний манікюр',
      'service.manicure.lead': 'Професійний догляд за руками',
      'service.manicure.desc1': 'Гігієнічний манікюр — це професійний догляд за руками, нігтями та кутикулою, який допомагає зберегти їх здоровими та доглянутими. Процедура включає обрізання та формування нігтів, обробку кутикули, а також зволоження та живлення шкіри рук.',
      'service.manicure.desc2': 'Гігієнічний манікюр не лише підтримує естетичний вигляд, а й допомагає запобігти дискомфорту та зміцнити нігті. Ідеальний варіант для тих, хто цінує охайність, доглянутість та комфорт своїх рук щодня.',
      // About Page
      'page.about.subtitle': 'Дізнайтеся більше про мою історію та кваліфікацію',
      'about.story.title': 'Моя історія',
      'about.story.text': 'Родом я з України, де здобула свої навички та досвід у сфері догляду за стопами. За роки роботи я допомогла безлічі людей мати здорові, доглянуті ноги та набула цінного досвіду.',
      'about.qualification.title': 'Кваліфікація в Німеччині',
      'about.qualification.text': 'У 2023 році я успішно закінчила курс підвищення кваліфікації з педикюру в академії INKOFA dr. Leibbrand у Гамбурзі. Відтоді я є кваліфікованим спеціалістом з педикюру в Німеччині та працюю за найвищими стандартами галузі.',
      'about.credentials.title': 'Мої кваліфікації',
      'about.credentials.item1': 'Понад 15 років професійного досвіду в педикюрі',
      'about.credentials.item2': 'Сертифікований спеціаліст (INKOFA dr. Leibbrand Akademie, Гамбург, 2023)',
      'about.credentials.item3': 'Спеціалізація на гігієнічному та медичному педикюрі',
      'about.credentials.item4': 'Досвід мобільного педикюру для літніх людей',
      'about.passion.title': 'Моя пристрасть',
      'about.passion.text1': 'Моя пристрасть — забезпечувати своїм клієнтам здорові, доглянуті стопи та красиві нігті. Завдяки знанням, досвіду та увазі до деталей я гарантую, що кожна процедура індивідуально адаптована до ваших потреб.',
      'about.passion.text2': 'Я розумію, що кожна стопа унікальна і заслуговує особливої уваги. Тому я приділяю достатньо часу кожній процедурі та працюю з якісними продуктами та стерильними інструментами.',
      'about.features.title': 'Що мене вирізняє',
      'about.features.exp': 'Досвід:',
      'about.features.exp.text': 'Понад 15 років практичного досвіду в педикюрі',
      'about.features.prof': 'Професіоналізм:',
      'about.features.prof.text': 'Сертифікована освіта за німецькими стандартами',
      'about.features.hyg': 'Гігієна:',
      'about.features.hyg.text': 'Суворі стандарти гігієни при кожній процедурі',
      'about.features.ind': 'Індивідуальність:',
      'about.features.ind.text': 'Кожна процедура адаптована до ваших потреб',
      'about.features.flex': 'Гнучкість:',
      'about.features.flex.text': 'Можливі виїзди додому для літніх людей',
      'about.welcome': 'Буду рада бачити вас незабаром!',
      // Contact Page
      'page.contact.subtitle': 'Запишіться на прийом або задайте свої питання',
      'contact.reach': 'Як зв\'язатися зі мною',
      'contact.intro': 'Чекаю на ваше повідомлення та із задоволенням відповім на всі ваші питання щодо моїх послуг.',
      'contact.location': 'Місцезнаходження',
      'contact.phone': 'Телефон',
      'contact.email': 'Електронна пошта',
      'contact.mobile.title': 'Педикюр на дому',
      'contact.mobile.text': 'Для літніх людей та осіб з обмеженою мобільністю я також пропоную виїзди додому. Зв\'яжіться зі мною для отримання додаткової інформації.',
      'contact.form.title': 'Надіслати повідомлення',
      'contact.form.name': 'Ім\'я *',
      'contact.form.email': 'Електронна пошта *',
      'contact.form.phone': 'Телефон',
      'contact.form.service': 'Бажана послуга',
      'contact.form.select': 'Оберіть...',
      'contact.form.message': 'Повідомлення *',
      'contact.form.placeholder': 'Ваше повідомлення або бажаний час запису...',
      'contact.form.submit': 'Надіслати',
    }
  };

  // Get saved language or default to German
  function getSavedLanguage() {
    return localStorage.getItem('fusspflege-lang') || 'de';
  }

  // Save language preference
  function saveLanguage(lang) {
    localStorage.setItem('fusspflege-lang', lang);
  }

  // Apply translations to page
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) {
        el.placeholder = t[key];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'de';
  }

  // Language Selector
  const langButtons = document.querySelectorAll('.lang-btn');
  const currentLang = getSavedLanguage();

  // Set initial active state
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Apply saved language on load
  applyTranslations(currentLang);

  // Handle language switching
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      saveLanguage(lang);
      applyTranslations(lang);
    });
  });
  
  // Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Create mailto link with form data
      const subject = encodeURIComponent('Terminanfrage - Fußpflege Studio');
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `E-Mail: ${data.email}\n` +
        `Telefon: ${data.phone || 'Nicht angegeben'}\n` +
        `Gewünschte Leistung: ${data.service || 'Nicht angegeben'}\n\n` +
        `Nachricht:\n${data.message}`
      );
      
      window.location.href = `mailto:nata.if.ua@gmail.com?subject=${subject}&body=${body}`;
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 16px rgba(93, 78, 55, 0.12)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(93, 78, 55, 0.08)';
    }
    
    lastScroll = currentScroll;
  });
});
