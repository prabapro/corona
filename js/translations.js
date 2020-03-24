var app = angular.module("at", ["pascalprecht.translate"]);

app.config(function ($translateProvider) {
  $translateProvider.translations("en", {
    TITLE:
      "Answer these questions and check your health status for coronavirus.",
    selectGender: "Select Gender",
    male: "Male",
    female: "Female",
    yes: "Yes",
    no: "No",
    notsure: "Not Sure",
    returnBack: "Return to previous question",
    guideTitle: "SELF-QUARANTINE GUIDE",
    guideH1: "Why am I being asked to self-isolate?",
    guideP1:
      "Self-isolation can help prevent the spread of infections, such as novel coronavirus (2019-nCoV). When you are exposed to an illness, there is a time between the exposure and when you start to feel sick. This is known as the incubation period (usually 2 to 10 days for 2019-nCoV, and up to a maximum of 14 days). There is a very small chance that you can spread the germs during this time (the few days before a feeling of sickness starts). More importantly, staying home means that if you do start to feel sick, you won’t run the risk of this happening while you are in a public place. Self-isolation is a cautious action used to lower the chance that the virus could spread to others. It is important to remember that not everyone who is exposed will get sick, and anyone who feels well for the full 14 days after an exposure of concern is not considered to be infectious. ",
    guideH2: "What does self-isolation mean?",
    guideP2:
      "Self-isolation means avoiding situations where you could infect other people. This means all situations where you may come in contact with others, such as social gatherings, work, school/university, child care, athletic events, faith-based gatherings, healthcare facilities, grocery stores, restaurants, shopping malls, and any public gatherings. You should, (where possible) not use public transportation including buses, taxis, or ride sharing. As much as possible, you should limit your contact with people and avoid having visitors to your home, but it is okay for friends, family or delivery drivers to drop off food or other things you may need. You can also use delivery or pick up services for errands such as grocery shopping. If you need to leave your home for an urgent errand, such as picking up essential medication, as a precaution to further reduce risk of spread, you can wear a surgical mask while you are out. ",
    guideH3: "What else can I do to stop the spread of infection?",
    guideL1:
      "Consider allocating a separate room with adequate ventilation at home if possible and  household members should stay in another room or to be separated from the returnee.",
    guideL2: "Maintain at least one meter distance from family members.",
    guideL3:
      " Preferably, household members should use a separate bathroom. But, if sharing the same bathroom, cleaning of taps, doorknobs and utensils with soap and water or disinfectant after each use are very important.",
    guideL4:
      "Need to minimize visitors to home and returnee should not face any visitors",
    guideL5:
      "Frequent hand washing with soap and water for at least 20 seconds at a time and maintain alcohol based hand hygiene in instances where hand washing facilities are inadequate",
   guideL6:"Avoid touching eyes, nose and mouth with unwashed hands.",
      guideL7:
      "Have adequate supplies for personal hygiene, food and drinks. Also have clear , undisrupted lines of communication.",
    guideL8:
      "Home quarantined person is expected to monitor body temperature using a thermometer twice a day. If gets fever , cough, difficulty in breathing, sore throat, body aches and pain, including flue like symptoms, immediately inform 1999 ,  MOH / PHI of the area immediately",
    guideL9:
      "The disposable facemasks and gloves after use should be properly discarded without reuse, preferably in a closed container",
    guideL10:
      "Assign separate dishes, drinking glasses, cups, eating utensils, towels, bedding, and other items for the quarantined person",
    guideL11:
      "Used utensils, bed linen and clothes should wash with soap and water",

    notTestTitle: "You don’t need to be tested",
    rec1H1:"Since you don’t have any symptoms for COVID-19 you do not need to be tested. But, you should Self-Quarantine.",
    rec1P1: " Testing is currently focused on individuals who have traveled outside Sri Lanka or had contact with someone diagnosed as having COVID-19, or have developed symptoms of COVID-19.",
    rec1P2: "However, there’s a chance you could get sick since you said you have been exposed",
    dontVisitHospital:"Please do not visit a hospital, physician’s office, lab or healthcare facility without consulting <a href='tel:1999'>1999</a> or your district MOH office.",
    dontGoPublic:"Don't go to any public places, stay at home, and don’t have any visitors.",
    dontSharePersonal:"Don’t share personal items like dishes, cups, or towels and wash your hands often.",
    ifYouDoDevelopFever:"If you do develop any Fever or Dry Cough or Difficulty in Breathing, take this self-assessment again or Call <a href='tel:1999'>1999</a> or your district MOH office immediately.",
    IfSymptomsWorsen: "If your symptoms worsen, or if you are concerned, please call <a href='tel:1999'>1999</a> or your district MOH office immediately.",
    startOver:"Start Over!",
    rec2H1:"You will need to Self-Quarantine",
    readGuide:"Read our easy Self - Quarantine Guide",
    BecauseYouHaveSymtoms:"Because you have some symptoms, you need to self-quarantine.",
    call1999:"Call 1999 Immediately",
    rec3P1:"Avoid using public transportation to reach medical assistance, avoid close contact with anyone, Wear a face mask or cover your mouth and nose with some form of thick fabric, wash your hands with soap every 30 minutes or use alcohol based sanitizer until medical assistance gets to you. Read our self-quarantine guide.",
    rec4h1: "But, you should Self-Quarantine because you have some symptoms",
    rec4P1:"There are many common viruses other than COVID-19 that can cause your symptoms. Based on your responses you do not need to be tested for COVID-19 at this time",
    rec4P2:"Testing is currently focused on individuals who have traveled outside Sri Lanka or had contact with someone diagnosed as having COVID-19, or have developed critical symptoms of COVID-19.",
    pleaseFollow:"Please follow the government's instructions.",
    stay14Days:"If you do develop any COVID-19 symptoms, you must self-isolate for 14 days",
    followGovertmentRules:"  Follow Government Regulations and Instructions Thoroughly, Avoid public places, and public transportation at all time, Wear a face mask, Wash your hands with soap every 30 minutes, wash your hands for at least 20 seconds, Avoid touching your face.",
    callNow:"Call Now",
   
   
   
   
    rec1P4: "If you are experiencing other symptoms like Tiredness, Aches and Pains, Nasal Congestion, Runny Nose, Sore Throat, Diarrhoea and want assessment contact: <a href='tel:1999'>1999</a> or your district MOH Office immediately",

  });
  $translateProvider.translations("lk", {
    TITLE:
      "කොරෝනා වෛරසයෙන් ඔබේ සෞඛ්‍ය තත්වය පරීක්ෂා කර ගැනීමට පහත සඳහන් ප්‍රශ්න වලට පිළිතුරු සපයන්න",
    selectGender: "ස්ත්‍රී පුරුෂභාවය",
    male: "පුරුෂ",
    female: "ස්ත්‍රී",
    yes: "ඔව්",
    no: "නෑ",
    notsure: "අවිනිශ්චිතයි",
    returnBack: "කලින් ප්‍රශ්නයට යන්න",
    guideTitle: "ස්වයං නිරෝධායනයට මග",
    guideH1: "මා ස්වයං නිරෝධනය විය යුත්තේ ඇයි?",
    guideP1:
      "ස්වයං නිරෝධනය නැතහොත් තමා විසින්ම හුදෙකලා වීම නව කොරෝනා වයිරසය(2019-nCoV) වැනි ආසාදනයන් පැතිර යෑම වැළැක්වීමට උපකාරීවේ. ඔබ යම් රෝගයකට නිරාවරණය වූ විට, එම රෝගයට නිරාවරණය වූ මොහොතේ සිට රෝග ලක්ෂණ පහළවීම දක්වා කිසියම් කාලයක් ගතවේ. මෙය 'බීජෞෂ්ණ කාලසීමාව'(Incubation period) ලෙස හැදින්වේ.(නව කොරෝනා වයිරසයේදී මෙම කාලසීමාව සාමාන්‍යයෙන් දින 2 සිට දින 10ක් දක්වාද, උපරිම වශයෙන් දින 14ක් දක්වාද පමණවේ.) මෙම කාලසීමාව තුලදීද  ආසදිතයකුට රෝගය පතුරවාහැරීමට යම් අවස්තාවක් තිබීමට හැකියාව තිබේ. <br>  මෙහිදී වඩාත්ම වැදගත් වන්නේ තම නිවෙස් තුළටම වී සිටීමෙන් තමා රෝගී තත්ත්වයට ගොදුරු වුවත් ජානාකීර්ණ පොදු ස්ථානයක මෙන් වයිරසය පැතිර යෑමේ අවධානම අඩු වීමයි.<br>  ස්වයං නිරෝධනය යනු වයිරසය පැතිරීම වැලැක්වීමට යොදාගැනෙන පූර්වෝපායකි. වයිරසයට නිරාවරණය වූ සියල්ලන් ආසදිතයන් නොවන අතර වයිරසයට නිරාවරණය වීමෙන් අනතුරුව දින 14ක් පුරා නිරෝගීව සිටින පුද්ගලයන් ආසදිතයන් ලෙස නොසැලකෙන බව අප විසින් තරයේ මතකතබා ගතයුතුය.",
    guideH2: "ස්වයං නිරෝධායනය යනු කුමක්ද?",
    guideP2: "ස්වයං නිරෝධායනය යනු අන්අයට ලෙඩ රෝග පැතිරවීමේ අවස්තා මගහැර ඒවායින් වැළකී සිටීමයි. මෙයින් අදහස් කෙරෙන්නේ ප්‍රියසම්භාෂණ,පාසල/විශ්වවිද්‍යාල ඇතුළු අනෙකුත් අධ්‍යාපන ආයතන,ක්‍රීඩා උත්සව,ආගමික උත්සව හා වතාවත්, රෝහල් ඇතුළු සෞඛ්‍ය මධ්‍යස්ථාන,වෙළෙසල්,ආපනශාලා ,සාප්පු සංකීර්ණ, ඇතුළු සියළුම මහජනයා රැස්වන අවස්තාවලින් වැලකී සීටීමයි. එමෙන්ම හැකි සෑම විටකම මගී ප්‍රවාහන බස් රථ, දුම්රිය , කුලීරථ , ඇතුළුව පොදු ප්‍රවාහන සේවා භාවිතය හැකිතාක් අවම කර ගැනීමට වගබලා ගත යුතුය.තවද ඔබට හැකිතාක් පුද්ගල ඇසුර අවම කරගැනීමට උත්සාහ කරන්න.ඔබට අවශ්‍ය අත්‍යවශ්‍ය භාණ්ඩ හා සේවා සපයා ගැනීමට හැකිතාක් ජංගම බෙදෑහැරීමේ සේවා යොදාගැනීමෙන්ද අනවශ්‍ය ලෙස බාහිර පරිසරයට නිරාවරණය වීම අවමවේ. නමුදු ඔබට නොවැළැක්විය හැකි අත්‍යවශ්‍ය ම කාරණයකට (උදාහරණයක් ලෙස අත්‍යවශ්‍ය ම ඖෂධයක් මිළ දී ගැනීමට වැනි)නිවසෙන් පිටවීමට සිදුවුවහොත් වයිරසයෙන් ආරක්ෂා වීමේඑ උපක්‍රමයක් ලෙස ශල්‍ය මුව ආවරණයක් (Surgical mask) පැළදීම අත්‍යවශ්‍යවේ.",
    guideH3: "වයිරසය පැතිරීම වැලැක්වීමට ඔබට ගතහැකි අනෙකුත් ක්‍රියාමාර්ග",
    guideL1:"පවුලේ අනෙකුත් සාමාජිකයන්ගෙන් වෙන්ව ප්‍රමාණවත් වාතාශ්‍රය සහිත කාමරයක සිට ස්වයං නිරෝධායනය වීම.",
    guideL2:" පවුලේ අනෙකුත් සාමාජිකයන් සමග හැකි සෑම විටම මීටරයක පරතරයක් තබාගැනීමට වගබලාගතයුතුය.",
    guideL3:" පවුලේ අනෙකුත් සාමාජිකයන්ගෙන් වෙන්ව වෙනමම නානකාමරයක් භාවිතා කිරීම වඩාත් සුදුසු වන අතර එසේ කළ නොහැකි නම්,භාවිතයෙන් අනතුරුව ජලකරාම,දොර හැඩලය හා අනෙකුත් උපකරණ සෑම විටකම ජලය හා සබන් යොදා හෝ විෂබීජ නාශක දියර යොදා විෂබීජානුහරණය කල යුතුය .",
    guideL4:"නිවසට පැමිණෙන අමුත්තන් ගණන හැකිතාක් සීමා කලයුතු අතර නිරෝධායනයට ලක්වන්නා හා සමග කිසිදු විටකත් සම්බන්ධ නොවිය යුතුය.",
    guideL5:"නිතරම සබන් යොදා ජලයෙන් අවම වශයෙන් තත්පර 20ක් වත් අත් සේදිය යුතු අතර එලෙස අත් සේදිමේ පහසුකම් නොමැති විට ඇල්කොහොල් පාදක අත් සේදිමේ දියරයක් යොදාගැනීම සුදුසුය.",
    guideL6:"හැකි සෑම විටකම ඇස්,නාසය,කට හා මුහුණ ඇල්ලීමෙන් වැළකිය යුතුය.",
    guideL7:"ප්‍රමාණවත් තරම් ආහාරපාන,සනීපාරක්ෂක ද්‍රව්‍ය මෙන්ම පැහැදිලි නොබිඳිය හැකි සන්නිවේදනය මාධ්‍යයක් තිබීමද අත්‍යවශ්‍යවේ.නිවසේ සිට ස්වයං නිරෝධායනය වන පුද්ගලයෙකු දිනකට දෙවරක් උෂ්ණත්වමානයක් මගින් තම උෂ්ණත්වය  මැන බලාගැනීඅ අපේක්ෂිතය. නමුත් උණ, කැස්ස,ශ්වසන අපහසුතා,උගුරේ අපහසුතා , ශරීරයේ වේදනාව, ඇතුළු සෙම්ප්‍රතිශ්‍යා-උණ ලක්ෂණ පහළ වුවහොත් වහාම 1990 හදිසි ඇමතුම් සේවය හෝ ප්‍රදේශයේ සෞඛ්‍ය වෛද්‍යනිලධාරී (MOH) හෝ මහජන සෞඛ්‍ය පරීක්ෂක (PHI) අමතා වහාම දැනුම්දිය යුතුය.",
    guideL8:" නිවසේ සිට ස්වයං නිරෝධායනය වන පුද්ගලයෙකු දිනකට දෙවරක් උෂ්ණත්වමානයක් මගින් තම උෂ්ණත්වය  මැන බලාගැනීඅ අපේක්ෂිතය. නමුත් උණ, කැස්ස,ශ්වසන අපහසුතා,උගුරේ අපහසුතා , ශරීරයේ වේදනාව, ඇතුළු සෙම්ප්‍රතිශ්‍යා-උණ ලක්ෂණ පහළ වුවහොත් වහාම 1990 හදිසි ඇමතුම් සේවය හෝ ප්‍රදේශයේ සෞඛ්‍ය වෛද්‍යනිලධාරී (MOH) හෝ මහජන සෞඛ්‍ය පරීක්ෂක (PHI) අමතා වහාම දැනුම්දිය යුතුය.",
    guideL9:"ඔබ විසින් වරක් භාවිතා කරන ලද ඉවතලිය හැකි මුඛ ආවරණ සහ  අත් ආවරණ නැවත භාවිතය නොගැනීමට වගබලාගතයුතුය. එමෙන්ම ඒවා ආවරණය කල හැකි කසළ බදුන් තුළටම පමණක් නිවැරැදිව බැහැරකරන්න.",
    guideL10:" නිරෝධායනයට ලක්වන පුද්ගලයෙකුට ඔහුටම වෙන්වූ පිඟන්,කෝප්ප,හැඳි,ගෑරුප්පු,තුවා,ඇඳ ඇතිරිලි ඇතුළුව අනෙකුත් අවශ්‍යතා සපයන්න.",
    guideL11:" නිරෝධායනයට ලක්වන පුද්ගලයා විසින් භාවිතා කරන ලද උපකරණ ,ඇඳ ඇතිරිලි හා ඇඳුම් පැළඳුම් සෑම විටකම ජලය සහ සබන් යොදා පිරිසිදු කළ යුතුය.",

    notTestTitle: "ඔබ පරික්ෂා විය යුතු නැත",
    rec1H1:"ඔබට කෝරෝනාවෛරස් රෝගයේ  ( කොවිඩ් 19 ) රෝග ලක්ෂණ නොමැති නිසා ඔබ කොවිඩ්-19 සඳහා පරීක්ෂා විය යුතු නැත. නමුත්, ඔබගේ සංචරණ හා සමාජ අන්තර්ක්‍රියා අවධානම් මට්ටමක පවතින බැවින් ඔබ දින 14 ක් ස්වයං නිරෝධායනය වීම අනිවාර්ය වේ",
    rec1P1: "දැනට කොවිඩ් 19 පරීක්ෂාවට ලක් කරනු ලබන්නේ ශ්‍රී ලංකාවෙන් පිටත සංචරණය කරනු ලැබූ හෝ කොරෝනාවෛරස වැළඳුනු පුද්ගලයෙකු ඇසුරු කල හෝ ඉතා බරපතල රෝග ලක්ෂණ සහිත පුද්ගලයන් වේ.",
    rec1P2: "ඔබගේ සංචරණ හා සමාජ අන්තර්ක්‍රියා අවධානම් මට්ටමක පවතින බැවින්, ඔබට මෙම රෝගය වැළඳීමේ අවධානමක් ඇත ",
    dontVisitHospital:"කරුණාකර <a href='tel:1999'>1999</a> අංකය හෝ ඔබගේ දිස්ත්‍රික්කයේ වෛද්‍ය නිලධාරී කාර්යාලය දැනුවත් කිරීමකින් තොරව රෝහලකට, වෛද්‍යවරයකු ගේ ලෙඩුන් බලන ස්ථානයකට යාමෙන් වලකින්න",
    dontGoPublic:"පොදු ස්ථාන වලට යාමෙන් වලකින්න , නිවසෙන් පිටතට නොයන්න , නිවසට අමුත්තන් ගෙන්වා ගැනීමෙන් වලකින්න ",
    dontSharePersonal:"ඔබගේ පිඟාන , කෝප්පය , තුවා වැනි පුද්ගලික ද්‍රව්‍ය වෙන්කර  තබන්න , සෑම විනාඩි 30 කට සැරයක් හෝ යම්කිසි කාර්යක් කිරීමට පෙර හෝ කිරීමෙන් අනතුරුව ඔබගේ අත් හොඳින් සබන් ගා අඩුම තප්පර 20ක් සෝදන්න, නැතිනම් මද්‍යසාර සහිත විෂබීජ නාශකයක් ආධාරයෙන් අත්වල ඇති විෂබීජ විනාශ කරන්න.",
    ifYouDoDevelopFever:"ඔබට කැස්ස, උණ, හුස්ම ගැනීමේ අපහසුතාවයක්, මහන්සි ගතිය, ඇඟේ පතේ රිදීමක්, නාසයේ සිරවුම් ගතියක්, හොටු දියර ගැලීම, උගුරේ අමාරුව, පාචනය වැනි තත්වයක් ඇති  වුවහොත් මෙම ස්වයං පරීක්ෂාව නැවත කර අදාල නිර්දේශ අනුගමනය කරන්න. ",
    IfSymptomsWorsen: "රෝග ලක්ෂණ බරපතල  මට්ටමක තිබේ නම් කරුණාකර <a href='tel:1999'>1999</a> සුව සැරිය ඒකකය අමතන්න.",
    startOver:"මුල සිට අරඹන්න!",
    rec2H1:"ඔබ දින 14 ක් ස්වයං නිරෝධායනය වීම අනිවාර්ය වේ",
    readGuide:"අපගේ ඉතා පහසු  ස්වයං නිරෝධායානය වීමේ මග පෙන්වීමේ සටහන මෙතනින් කියවන්න",
    BecauseYouHaveSymtoms:"ඔබට යම් රෝග ලක්ෂණ ඇති බැවින් ස්වයං නිරෝධායනය වීම අනිවාර්ය වේ",
    call1999:"ඔබ දැන්ම 1999 අමතන්න",
    rec3P1:"කරුණාකර පොදු ප්‍රවාහනය භාවිත කිරීමෙන් වලකින්න. ඔබගේ මුඛය හා නාසය ආවරණය වන පරිදි මුහුණු ආවරයක් පළඳින්න, කිසිම කෙනෙකු සමග සමීප සම්බන්ධතා පැවැත්වීමෙන් වලකින්න. හදිසි සේවාව ඔබ වෙත පැමිණෙන තෙක්, ආරක්ෂා කාරී පිළිවෙත් අනුගමනය කරන්න. ඔබගෙන් තවත් කෙනෙකු ආසාදනය නොවන ආකාරයෙන් කටයුතු කිරීම ඔබේ සමාජ වගකීම වේ. ",
    rec4h1: "නමුත්, ඔබට යම් රෝග ලක්ෂණ ඇති බැවින් ඔබ දින 14 ක් ස්වයං නිරෝධායනය වීම අනිවාර්ය වේ",
    rec4P1:"ඔබට ඇති රෝග ලක්ෂණ කොරෝනාවෛරසට අමතරව මිනිසුන් අතරේ සුලභව බෝවන වෛරස වලටද ඇති විය හැක, අප අසන ලද ප්‍රශ්න සඳහා ඔබ දුන් පිළිතුරු අනුව දැනට ඔබට කොවිඩ් 19 රෝගය සඳහා  පරීක්ෂා වීමට අවශ්‍ය නැත.",
    rec4P2:"දැනට කොවිඩ් 19 පරීක්ෂාවට ලක් කරනු ලබන්නේ ශ්‍රී ලංකාවෙන් පිටත සංචරණය කරනු ලැබූ හෝ කොරෝනාවෛරස වැළඳුනු පුද්ගලයෙකු ඇසුරු කල හෝ ඉතා බරපතල රෝග ලක්ෂණ සහිත පුද්ගලයන් වේ.",
    pleaseFollow:"රජයේ උපදෙස්, නීති වලට අනුව, සෞඛ්‍යාරක්ෂිත පිළිවෙත් අනුගමනය කරමින් තමන්ගේ දෛනික ජීවිතය පවත්වාගෙන යන්න.",
    stay14Days:"ඔබට කොවිඩ්-19 රෝග ලක්ෂණ මඳ අයුරින් හෝ ඇති වුවහොත් හෝ ඇති වීමට ඇති අවධානමක් ඇති නම් දින 14 ක් ස්වයං නිරෝධායනය වීම අනිවාර්ය වේ",
    followGovertmentRules:"ඔබගේ පිඟාන , කෝප්පය , තුවා වැනි පුද්ගලික ද්‍රව්‍ය වෙන්කර  තබන්න , සෑම විනාඩි 30 කට සැරයක් හෝ යම්කිසි කාර්යක් කිරීමට පෙර හෝ කිරීමෙන් අනතුරුව ඔබගේ අත් හොඳින් සබන් ගා අඩුම තප්පර 20ක් සෝදන්න, නැතිනම් මද්‍යසාර සහිත විෂබීජ නාශකයක් ආධාරයෙන් අත්වල ඇති විෂබීජ විනාශ කරන්න.",
    callNow:"දැන්ම අමතන්න",
    rec1P4:"ඔබට කැස්ස, උණ, හුස්ම ගැනීමේ අපහසුතාවයක්, මහන්සි ගතිය, ඇඟේ පතේ රිදීමක්, නාසයේ සිරවුම් ගතියක්, හොටු දියර ගැලීම, උගුරේ අමාරුව, පාචනය වැනි තත්වයක් ඇති  වුවහොත් මෙම ස්වයං පරීක්ෂාව නැවත කර අදාල නිර්දේශ අනුගමනය කරන්න. රෝග ලක්ෂණ බරපතල  මට්ටමක තිබේ නම් කරුණාකර <a href='tel:1999'>1999</a> සුව සැරිය ඒකකය අමතන්න."
  });
  $translateProvider.preferredLanguage("en");
});

app.controller("Ctrl", function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});
