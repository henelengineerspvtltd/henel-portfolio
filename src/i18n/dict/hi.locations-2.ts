/** Hindi — town pages, part 2. */
const Q = (place: string) => `${place} में कोटेशन कैसे पाएँ?`;
const dict: Record<string, string> = {
  "How do I get a quote in Chennai?": Q("चेन्नई"),
  "How do I get a quote in Coimbatore?": Q("कोयंबटूर"),
  "How do I get a quote in Dindigul?": Q("डिंडीगुल"),
  "How do I get a quote in Kanyakumari District?": Q("कन्याकुमारी ज़िले"),
  "How do I get a quote in Madurai?": Q("मदुरै"),
  "How do I get a quote in Tenkasi?": Q("तेनकासी"),
  "How do I get a quote in Thiruvananthapuram?": Q("तिरुवनंतपुरम"),
  "How do I get a quote in Thoothukudi?": Q("थूथुकुडी"),
  "How do I get a quote in Tirunelveli?": Q("तिरुनेलवेली"),
  "How do I get a quote in Tiruppur?": Q("तिरुप्पुर"),
  "How do I get a quote in Trichy?": Q("त्रिची"),
  "How do I get a quote in Virudhunagar District?": Q("विरुधुनगर ज़िले"),
  "How do you handle projects far from Kanyakumari?": "कन्याकुमारी से दूर की परियोजनाएँ आप कैसे संभालते हैं?",
  "How far is Henel Engineers from Thoothukudi?": "हेनेल इंजीनियर्स थूथुकुडी से कितनी दूर है?",
  "How far is Henel Engineers from Tirunelveli?": "हेनेल इंजीनियर्स तिरुनेलवेली से कितनी दूर है?",
  "How far is your office from Trivandrum?": "आपका कार्यालय तिरुवनंतपुरम से कितनी दूर है?",
  "In dry or rocky soil, chemical earthing with a conductive backfill compound usually gives a lower and more stable earth resistance than a plain electrode. We check the site and recommend the electrode, compound and number of pits.":
    "सूखी या पथरीली मिट्टी में कंडक्टिव बैकफ़िल कंपाउंड के साथ केमिकल अर्थिंग आमतौर पर साधारण इलेक्ट्रोड से कम और अधिक स्थिर अर्थ प्रतिरोध देती है। हम साइट जाँचकर इलेक्ट्रोड, कंपाउंड और पिट की संख्या की सलाह देते हैं।",
  "Industrial roofs across Coimbatore are well suited to commercial solar. We install and maintain rooftop and commercial solar plants with proper array earthing and lightning protection.":
    "कोयंबटूर की औद्योगिक छतें व्यावसायिक सोलर के लिए बहुत उपयुक्त हैं। हम सही ऐरे अर्थिंग और लाइटनिंग प्रोटेक्शन के साथ रूफ़टॉप और व्यावसायिक सोलर प्लांट लगाते और उनका रखरखाव करते हैं।",
  "Kanyakumari District is home. Henel Engineers was founded in Aralvaimozhi in 1999, next to the Muppandal wind belt, and has a branch office in Marthandam — so sites across Nagercoil, Thuckalay, Kuzhithurai, Colachel and Kanyakumari town are close to our teams.":
    "कन्याकुमारी ज़िला हमारा घर है। हेनेल इंजीनियर्स की स्थापना 1999 में मुप्पंडल पवन पट्टी के पास आरलवाइमोझी में हुई, और मार्तंडम में शाखा कार्यालय है — इसलिए नागरकोइल, तक्कलई, कुझितुरई, कोलाचेल और कन्याकुमारी शहर की साइटें हमारी टीमों के पास हैं।",
  "Kanyakumari District receives rain from both the south-west and north-east monsoons, and thunderstorms are common before and during both seasons. Tall buildings, churches and temples, hospitals, schools, factories and telecom towers here all benefit from a properly designed lightning protection system.":
    "कन्याकुमारी ज़िले में दक्षिण-पश्चिम और उत्तर-पूर्व दोनों मानसून से बारिश होती है, और दोनों मौसमों से पहले और उनके दौरान आँधी-तूफ़ान आम हैं। यहाँ की ऊँची इमारतें, चर्च और मंदिर, अस्पताल, स्कूल, फ़ैक्ट्रियाँ और टेलीकॉम टावर — सभी को सही ढंग से डिज़ाइन किए गए लाइटनिंग प्रोटेक्शन सिस्टम से लाभ होता है।",
  "Kerala experiences frequent and severe thunderstorms, particularly from March to May and during the north-east monsoon (thulavarsham) in October and November. Homes on high ground, apartment towers, churches, temples, hospitals, schools and IT campuses are all exposed.":
    "केरल में अक्सर तेज़ आँधी-तूफ़ान आते हैं, ख़ासकर मार्च से मई और अक्टूबर–नवंबर के उत्तर-पूर्व मानसून (तुलावर्षम) के दौरान। ऊँची ज़मीन पर बने घर, अपार्टमेंट टावर, चर्च, मंदिर, अस्पताल, स्कूल और IT परिसर — सभी जोखिम में हैं।",
  "Kerala sees some of the most intense lightning in India, especially in the pre-monsoon months and the October–November thunderstorm season. Our Marthandam branch is about 45 km from Thiruvananthapuram, so Henel Engineers can reach sites across Trivandrum, Neyyattinkara, Kazhakkoottam and Vizhinjam easily.":
    "केरल में भारत की सबसे तीव्र बिजली गिरती है, ख़ासकर मानसून-पूर्व महीनों और अक्टूबर–नवंबर के तूफ़ानी मौसम में। हमारी मार्तंडम शाखा तिरुवनंतपुरम से लगभग 45 किमी दूर है, इसलिए हेनेल इंजीनियर्स तिरुवनंतपुरम, नेय्याट्टिनकरा, कझाकूट्टम और विझिंजम की साइटों तक आसानी से पहुँच सकता है।",
  "Large factory roofs and sheds are often best covered by an ESE lightning arrester on a mast. The TOPBAS SIRIUS protects up to 107 m and the UMBRAECO up to 51 m (Level IV, 5 m mast). For smaller buildings, copper bonded conventional arresters remain a cost-effective option.":
    "बड़ी फ़ैक्ट्री छतों और शेड के लिए मस्तूल पर लगा ESE लाइटनिंग अरेस्टर अक्सर सबसे अच्छा होता है। TOPBAS SIRIUS 107 मीटर तक और UMBRAECO 51 मीटर तक सुरक्षा देता है (Level IV, 5 मीटर मस्तूल)। छोटी इमारतों के लिए कॉपर बॉन्डेड साधारण अरेस्टर किफ़ायती विकल्प बने रहते हैं।",
  "Large mill roofs in Tiruppur suit commercial solar. We install and maintain rooftop and commercial solar plants with array earthing and lightning protection included.":
    "तिरुप्पुर की बड़ी मिल छतें व्यावसायिक सोलर के लिए उपयुक्त हैं। हम ऐरे अर्थिंग और लाइटनिंग प्रोटेक्शन सहित रूफ़टॉप और व्यावसायिक सोलर प्लांट लगाते और उनका रखरखाव करते हैं।",
  "Lightning Arrester & Earthing, Chennai": "लाइटनिंग अरेस्टर और अर्थिंग, चेन्नई",
  "Lightning Arrester & Earthing, Madurai": "लाइटनिंग अरेस्टर और अर्थिंग, मदुरै",
  "Lightning Arrester & Earthing, Trichy": "लाइटनिंग अरेस्टर और अर्थिंग, त्रिची",
  "Lightning Arrester & Windmill, Coimbatore": "लाइटनिंग अरेस्टर और पवनचक्की, कोयंबटूर",
  "Lightning Arrester & Windmill, Dindigul": "लाइटनिंग अरेस्टर और पवनचक्की, डिंडीगुल",
  "Lightning Arrester & Windmill, Nagercoil": "लाइटनिंग अरेस्टर और पवनचक्की, नागरकोइल",
  "Lightning Arrester & Windmill, Thoothukudi": "लाइटनिंग अरेस्टर और पवनचक्की, थूथुकुडी",
  "Lightning Arrester & Windmill, Tirunelveli": "लाइटनिंग अरेस्टर और पवनचक्की, तिरुनेलवेली",
  "Lightning Arrester, Earthing & Solar in Thiruvananthapuram": "तिरुवनंतपुरम में लाइटनिंग अरेस्टर, अर्थिंग और सोलर",
  "Lightning Arrester, Earthing & Surge Protection in Chennai": "चेन्नई में लाइटनिंग अरेस्टर, अर्थिंग और सर्ज प्रोटेक्शन",
  "Lightning Arrester, Earthing & Surge Protection in Tiruchirappalli": "तिरुचिरापल्ली में लाइटनिंग अरेस्टर, अर्थिंग और सर्ज प्रोटेक्शन",
  "Lightning Arrester, Earthing & Surge Protection in Virudhunagar": "विरुधुनगर में लाइटनिंग अरेस्टर, अर्थिंग और सर्ज प्रोटेक्शन",
  "Lightning Arrester, Earthing & Windmill Services in Dindigul": "डिंडीगुल में लाइटनिंग अरेस्टर, अर्थिंग और पवनचक्की सेवाएँ",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Coimbatore": "कोयंबटूर में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Kanyakumari": "कन्याकुमारी में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Madurai": "मदुरै में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Thoothukudi": "थूथुकुडी में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Tirunelveli": "तिरुनेलवेली में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning Protection, Earthing, Solar & Windmill Services Across India": "पूरे भारत में लाइटनिंग प्रोटेक्शन, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning Protection, Earthing, Solar & Windmill Services in {name}": "{name} में लाइटनिंग प्रोटेक्शन, अर्थिंग, सोलर और पवनचक्की सेवाएँ",
  "Lightning and surge protection for industry": "उद्योगों के लिए लाइटनिंग और सर्ज प्रोटेक्शन",
  "Lightning arrester work in Virudhunagar District": "विरुधुनगर ज़िले में लाइटनिंग अरेस्टर का काम",
  "Lightning arresters for Chennai’s high-rise buildings": "चेन्नई की ऊँची इमारतों के लिए लाइटनिंग अरेस्टर",
  "Lightning arresters, chemical earthing and surge protection in Trichy, Srirangam and Thiruverumbur for factories, temples and institutions. Est. 1999.":
    "त्रिची, श्रीरंगम और तिरुवेरुंबूर में फ़ैक्ट्रियों, मंदिरों और संस्थानों के लिए लाइटनिंग अरेस्टर, केमिकल अर्थिंग और सर्ज प्रोटेक्शन। स्थापना 1999।",
  "Lightning arresters, chemical earthing, surge protection and rooftop solar in Thiruvananthapuram (Trivandrum), about 45 km from our Marthandam branch.":
    "हमारी मार्तंडम शाखा से लगभग 45 किमी दूर तिरुवनंतपुरम में लाइटनिंग अरेस्टर, केमिकल अर्थिंग, सर्ज प्रोटेक्शन और रूफ़टॉप सोलर।",
  "Lightning arresters, chemical earthing, surge protection, solar and windmill services in Madurai, Theni, Dindigul and Virudhunagar. Est. 1999.":
    "मदुरै, थेनी, डिंडीगुल और विरुधुनगर में लाइटनिंग अरेस्टर, केमिकल अर्थिंग, सर्ज प्रोटेक्शन, सोलर और पवनचक्की सेवाएँ। स्थापना 1999।",
  "Lightning arresters, earthing & SPD": "लाइटनिंग अरेस्टर, अर्थिंग और SPD",
  "Lightning arresters, earthing and surge protection in Virudhunagar, Sivakasi, Rajapalayam and Sattur, for factories, mills and buildings. Est. 1999.":
    "विरुधुनगर, शिवकाशी, राजपालयम और सात्तूर में फ़ैक्ट्रियों, मिलों और इमारतों के लिए लाइटनिंग अरेस्टर, अर्थिंग और सर्ज प्रोटेक्शन। स्थापना 1999।",
  "Lightning arresters, earthing, SPD, solar and windmill services in {name}": "{name} में लाइटनिंग अरेस्टर, अर्थिंग, SPD, सोलर और पवनचक्की सेवाएँ",
  "Lightning arresters, earthing, solar and windmill maintenance in Kanyakumari District: Nagercoil, Aralvaimozhi, Muppandal, Marthandam. Since 1999.":
    "कन्याकुमारी ज़िले में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की रखरखाव: नागरकोइल, आरलवाइमोझी, मुप्पंडल, मार्तंडम। 1999 से।",
  "Lightning arresters, earthing, solar and windmill maintenance in Tirunelveli: Palayamkottai, Radhapuram, Panagudi, Valliyoor. Est. 1999.":
    "तिरुनेलवेली में लाइटनिंग अरेस्टर, अर्थिंग, सोलर और पवनचक्की रखरखाव: पलयमकोट्टई, राधापुरम, पणगुडी, वल्लियूर। स्थापना 1999।",
  "Lightning arresters, earthing, surge protection and windmill maintenance in Dindigul, Palani, Oddanchatram and Kodaikanal. Est. 1999.":
    "डिंडीगुल, पलनी, ओड्डनछत्रम और कोडाइकनाल में लाइटनिंग अरेस्टर, अर्थिंग, सर्ज प्रोटेक्शन और पवनचक्की रखरखाव। स्थापना 1999।",
  "Lightning arresters, earthing, surge protection, solar and windmill services anywhere in India, including Tamil Nadu, Kerala, Karnataka and Gujarat.":
    "तमिलनाडु, केरल, कर्नाटक और गुजरात सहित भारत में कहीं भी लाइटनिंग अरेस्टर, अर्थिंग, सर्ज प्रोटेक्शन, सोलर और पवनचक्की सेवाएँ।",
  "Lightning damage on wind turbines": "पवन टर्बाइनों पर बिजली से नुकसान",
  "Lightning protection and earthing for mills": "मिलों के लिए लाइटनिंग प्रोटेक्शन और अर्थिंग",
  "Lightning protection for Madurai’s tall buildings and institutions": "मदुरै की ऊँची इमारतों और संस्थानों के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection for Sivakasi’s industries": "शिवकाशी के उद्योगों के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection for Tirunelveli buildings and industries": "तिरुनेलवेली की इमारतों और उद्योगों के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection for a coastal, two-monsoon district": "दो मानसून वाले तटीय ज़िले के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection for factories, campuses and high-rises": "फ़ैक्ट्रियों, परिसरों और ऊँची इमारतों के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection for temples, colleges and hospitals": "मंदिरों, कॉलेजों और अस्पतालों के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection for turbines and buildings": "टर्बाइनों और इमारतों के लिए लाइटनिंग प्रोटेक्शन",
  "Lightning protection in the hills and on the plains": "पहाड़ों और मैदानों में लाइटनिंग प्रोटेक्शन",
  "Lightning protection, corrosion-resistant earthing, solar and windmill maintenance in Thoothukudi (Tuticorin): Kayathar, Ottapidaram, Kovilpatti.":
    "थूथुकुडी (तूतीकोरिन) में लाइटनिंग प्रोटेक्शन, जंग-रोधी अर्थिंग, सोलर और पवनचक्की रखरखाव: कयत्तार, ओट्टापिडारम, कोविलपट्टी।",
  "Lightning risk assessment and system design": "लाइटनिंग जोखिम आकलन और सिस्टम डिज़ाइन",
  "Local service areas near our offices": "हमारे कार्यालयों के पास स्थानीय सेवा क्षेत्र",
  "Madhya Pradesh is a growing wind and solar state, and Central India sees some of the country’s highest lightning activity during the monsoon.":
    "मध्य प्रदेश एक बढ़ता हुआ पवन और सौर राज्य है, और मानसून के दौरान मध्य भारत में देश की सबसे अधिक बिजली गतिविधि होती है।",
  "Madurai is southern Tamil Nadu’s largest city, with hospitals, colleges, temples, high-rise buildings and industrial estates such as Kappalur that all need sound lightning protection and earthing. Henel Engineers has carried out lightning arrester work in Madurai and serves the city and the surrounding Theni, Dindigul and Virudhunagar districts.":
    "मदुरै दक्षिणी तमिलनाडु का सबसे बड़ा शहर है, जहाँ अस्पताल, कॉलेज, मंदिर, ऊँची इमारतें और कप्पलूर जैसे औद्योगिक एस्टेट हैं जिन्हें मज़बूत लाइटनिंग प्रोटेक्शन और अर्थिंग चाहिए। हेनेल इंजीनियर्स ने मदुरै में लाइटनिंग अरेस्टर का काम किया है और शहर तथा आसपास के थेनी, डिंडीगुल और विरुधुनगर ज़िलों को सेवा देता है।",
  "Madurai’s strong sunshine suits rooftop solar for homes, hospitals, schools and businesses. We install, maintain and clean solar systems and include array earthing and lightning protection in every design.":
    "मदुरै की तेज़ धूप घरों, अस्पतालों, स्कूलों और व्यवसायों के लिए रूफ़टॉप सोलर के अनुकूल है। हम सोलर सिस्टम लगाते, उनका रखरखाव और सफ़ाई करते हैं, और हर डिज़ाइन में ऐरे अर्थिंग और लाइटनिंग प्रोटेक्शन शामिल करते हैं।",
  "Maintenance contracts (CMC / AMC)": "रखरखाव अनुबंध (CMC / AMC)",
  "Many mills and factories in the district now run rooftop solar. We earth the array, structures and inverters and add lightning protection that does not shade the panels, using earth rods, CARBOMAXX earthing compound and earth pit covers.":
    "ज़िले की कई मिलें और फ़ैक्ट्रियाँ अब रूफ़टॉप सोलर चलाती हैं। हम अर्थ रॉड, CARBOMAXX अर्थिंग कंपाउंड और अर्थ पिट कवर से ऐरे, स्ट्रक्चर और इन्वर्टर की अर्थिंग करते हैं और ऐसा लाइटनिंग प्रोटेक्शन जोड़ते हैं जो पैनलों पर छाया न डाले।",
  "Most lightning damage in a city is caused not by direct strikes but by surges entering through power and data lines. Offices and IT campuses around Kazhakkoottam and Technopark, hospitals and homes with inverters and solar systems all benefit from a Type 1 + 2 SPD at the main distribution board, backed by good earthing.":
    "शहर में ज़्यादातर बिजली का नुकसान सीधे गिरने से नहीं, बल्कि बिजली और डेटा लाइनों से आने वाले सर्ज से होता है। कझाकूट्टम और टेक्नोपार्क के आसपास के दफ़्तर और IT परिसर, अस्पताल, और इन्वर्टर व सोलर वाले घर — सभी को अच्छी अर्थिंग के साथ मेन डिस्ट्रीब्यूशन बोर्ड पर Type 1 + 2 SPD से लाभ होता है।",
  "Much of Tirunelveli District has hard, dry or rocky soil, where a plain electrode often cannot reach a low earth resistance. Chemical earthing — an electrode surrounded by conductive backfill such as CARBOMAXX compound, inside an inspectable earth pit — helps achieve and hold a low, stable resistance through the dry months.":
    "तिरुनेलवेली ज़िले के अधिकांश हिस्से में सख़्त, सूखी या पथरीली मिट्टी है, जहाँ साधारण इलेक्ट्रोड अक्सर कम अर्थ प्रतिरोध तक नहीं पहुँच पाता। केमिकल अर्थिंग — जाँच योग्य अर्थ पिट के अंदर CARBOMAXX जैसे कंडक्टिव बैकफ़िल से घिरा इलेक्ट्रोड — सूखे महीनों में भी कम और स्थिर प्रतिरोध पाने और बनाए रखने में मदद करती है।",
  "Near the coast at Colachel, Kanyakumari town and the fishing villages in between, salt-laden air and moist soil speed up corrosion of earth electrodes and connections; inland, laterite and rocky ground can make low earth resistance hard to achieve. We choose the electrode (copper bonded or GI), backfill compound and pit design to suit the soil at your site.":
    "कोलाचेल, कन्याकुमारी शहर और बीच के मछुआरा गाँवों के तट के पास नमकीन हवा और नम मिट्टी अर्थ इलेक्ट्रोड और कनेक्शन में जंग तेज़ करती है; अंदरूनी इलाक़ों में लैटेराइट और पथरीली ज़मीन कम अर्थ प्रतिरोध पाना कठिन बना सकती है। हम आपकी साइट की मिट्टी के अनुसार इलेक्ट्रोड (कॉपर बॉन्डेड या GI), बैकफ़िल कंपाउंड और पिट डिज़ाइन चुनते हैं।",
  "Near the port, the salt pans and the coast from Thoothukudi to Tiruchendur, salt-laden air and saline soil corrode GI electrodes, clamps and pit covers much faster than inland. For these sites we usually recommend copper bonded earth rods, a conductive backfill compound such as CARBOMAXX, and corrosion-resistant FRP earth pit covers, with periodic earth resistance testing.":
    "बंदरगाह, नमक के खेतों और थूथुकुडी से तिरुचेंदूर तक के तट के पास नमकीन हवा और खारी मिट्टी GI इलेक्ट्रोड, क्लैंप और पिट कवर को अंदरूनी इलाक़ों से कहीं तेज़ी से जंग लगाती है। ऐसी साइटों के लिए हम आमतौर पर कॉपर बॉन्डेड अर्थ रॉड, CARBOMAXX जैसा कंडक्टिव बैकफ़िल कंपाउंड, जंग-रोधी FRP अर्थ पिट कवर और समय-समय पर अर्थ प्रतिरोध परीक्षण की सलाह देते हैं।",
  "Odisha, Jharkhand, West Bengal and Bihar are among the states most affected by lightning in India, making proper lightning protection and earthing essential.":
    "ओडिशा, झारखंड, पश्चिम बंगाल और बिहार भारत में बिजली से सबसे अधिक प्रभावित राज्यों में हैं, इसलिए सही लाइटनिंग प्रोटेक्शन और अर्थिंग ज़रूरी है।",
  "Offices in Aralvaimozhi and Marthandam, Kanyakumari District. Engineering since 1999.": "कन्याकुमारी ज़िले के आरलवाइमोझी और मार्तंडम में कार्यालय। 1999 से इंजीनियरिंग।",
  "Open-ground and rooftop solar plants in the district are exposed to lightning and coastal corrosion. We install solar systems and provide solar earthing, lightning protection, cleaning and maintenance for existing plants.":
    "ज़िले के खुले मैदान और रूफ़टॉप सोलर प्लांट बिजली और तटीय जंग के संपर्क में रहते हैं। हम सोलर सिस्टम लगाते हैं और मौजूदा प्लांट के लिए सोलर अर्थिंग, लाइटनिंग प्रोटेक्शन, सफ़ाई और रखरखाव देते हैं।",
  "Our 24x7 breakdown support helps keep downtime short during the high-wind season, when every lost day of generation costs the most.":
    "हमारी 24x7 ब्रेकडाउन सहायता तेज़ हवा के मौसम में डाउनटाइम कम रखने में मदद करती है, जब उत्पादन का हर खोया दिन सबसे महँगा पड़ता है।",
  "Our branch office on Kalluthotti - Marthandam Road, Marthandam, Tamil Nadu, is about 45 km from Thiruvananthapuram city along the NH 66 corridor, close to Parassala and Neyyattinkara.":
    "कल्लुत्तोट्टी - मार्तंडम रोड, मार्तंडम, तमिलनाडु पर हमारा शाखा कार्यालय NH 66 मार्ग पर तिरुवनंतपुरम शहर से लगभग 45 किमी दूर, पारस्साला और नेय्याट्टिनकरा के पास है।",
  "Our home region around Aralvaimozhi and Marthandam, the Muppandal, Kayathar, Shencottah and Palakkad Gap wind belts, and the cities where we work across Tamil Nadu and Kerala.":
    "आरलवाइमोझी और मार्तंडम के आसपास हमारा गृह क्षेत्र, मुप्पंडल, कयत्तार, शेनकोट्टा और पालक्काड दर्रे की पवन पट्टियाँ, और तमिलनाडु व केरल के वे शहर जहाँ हम काम करते हैं।",
  "Our home region. Kanyakumari District sits in one of India’s most active wind energy belts, and South India combines strong wind and solar resources with heavy monsoon lightning.":
    "हमारा गृह क्षेत्र। कन्याकुमारी ज़िला भारत की सबसे सक्रिय पवन ऊर्जा पट्टियों में से एक में है, और दक्षिण भारत में तेज़ हवा और धूप के साथ भारी मानसूनी बिजली भी है।",
  "Our registered office in Aralvaimozhi is roughly 60 km from Tirunelveli city along NH 44, and closer still to the Panagudi, Valliyoor and Radhapuram wind sites.":
    "आरलवाइमोझी में हमारा पंजीकृत कार्यालय NH 44 पर तिरुनेलवेली शहर से लगभग 60 किमी दूर है, और पणगुडी, वल्लियूर व राधापुरम की पवन साइटों के और भी पास है।",
  "Our registered office in Aralvaimozhi, Kanyakumari District, is roughly 110 km from Thoothukudi city by road via Tirunelveli.":
    "कन्याकुमारी ज़िले के आरलवाइमोझी में हमारा पंजीकृत कार्यालय तिरुनेलवेली होते हुए सड़क मार्ग से थूथुकुडी शहर से लगभग 110 किमी दूर है।",
  "Our registered office is at No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi — 629 301, and our branch office is on Kalluthotti - Marthandam Road, Unnamalaikadai, Marthandam — 629 165.":
    "हमारा पंजीकृत कार्यालय: No.8, 1104 J/64, कामराज नगर, आरलवाइमोझी — 629 301; शाखा कार्यालय: कल्लुत्तोट्टी - मार्तंडम रोड, उन्नामलैकडै, मार्तंडम — 629 165।",
  "Our wind team covers the whole turbine: gearbox repair, overhaul and replacement, including in-tower service where the fault allows; generator rewinding, slip ring repair and bearing replacement; blade patching and lightning damage repair; and hydraulic and PCB servicing.":
    "हमारी पवन टीम पूरे टर्बाइन का काम करती है: गियरबॉक्स मरम्मत, ओवरहॉल और बदलना, जहाँ ख़राबी अनुमति दे वहाँ टावर के अंदर ही सर्विस सहित; जनरेटर रीवाइंडिंग, स्लिप रिंग मरम्मत और बेयरिंग बदलना; ब्लेड पैचिंग और बिजली क्षति मरम्मत; तथा हाइड्रोलिक और PCB सर्विसिंग।",
  "Parts of Dindigul District have wind turbine sites. We provide windmill maintenance contracts, gearbox and generator repair, blade repair, spare parts and 24x7 breakdown support for turbine owners there.":
    "डिंडीगुल ज़िले के कुछ हिस्सों में पवन टर्बाइन साइटें हैं। वहाँ के टर्बाइन मालिकों के लिए हम पवनचक्की रखरखाव अनुबंध, गियरबॉक्स और जनरेटर मरम्मत, ब्लेड मरम्मत, स्पेयर पार्ट्स और 24x7 ब्रेकडाउन सहायता देते हैं।",
  "Port facilities, warehouses, chemical and process plants, and tall structures across Thoothukudi need lightning protection and surge protection designed to the risk. We design the system and supply and install ESE lightning arresters, down conductors, earthing and Type 1 + 2 surge protection devices.":
    "थूथुकुडी भर के बंदरगाह, गोदाम, रासायनिक और प्रोसेस प्लांट और ऊँची संरचनाओं को जोखिम के अनुसार डिज़ाइन किया गया लाइटनिंग और सर्ज प्रोटेक्शन चाहिए। हम सिस्टम डिज़ाइन करते हैं और ESE लाइटनिंग अरेस्टर, डाउन कंडक्टर, अर्थिंग और Type 1 + 2 सर्ज प्रोटेक्शन डिवाइस की आपूर्ति और इंस्टॉलेशन करते हैं।",
  "Rocky ground makes low earth resistance harder to reach, so we design the earthing for the site, using chemical earth electrodes and earthing compound, and test the result.":
    "पथरीली ज़मीन में कम अर्थ प्रतिरोध पाना कठिन होता है, इसलिए हम केमिकल अर्थ इलेक्ट्रोड और अर्थिंग कंपाउंड से साइट के अनुसार अर्थिंग डिज़ाइन करते हैं और परिणाम का परीक्षण करते हैं।",
  "Rooftop solar for mills and factories": "मिलों और फ़ैक्ट्रियों के लिए रूफ़टॉप सोलर",
  "Rooftop solar is growing fast across Kerala. We install rooftop solar for homes and businesses and make sure the array, inverter and wiring are properly earthed and protected against lightning and surges.":
    "पूरे केरल में रूफ़टॉप सोलर तेज़ी से बढ़ रहा है। हम घरों और व्यवसायों के लिए रूफ़टॉप सोलर लगाते हैं और सुनिश्चित करते हैं कि ऐरे, इन्वर्टर और वायरिंग की सही अर्थिंग हो और वे बिजली व सर्ज से सुरक्षित रहें।",
  "Rooftop solar with proper protection": "सही सुरक्षा के साथ रूफ़टॉप सोलर",
  "Salt air and moist coastal soil corrode earthing faster, so copper bonded earth rods with a good backfill compound and a corrosion-resistant FRP earth pit cover are usually preferred. We recommend the electrode after checking your site and soil.":
    "नमकीन हवा और नम तटीय मिट्टी अर्थिंग में जंग तेज़ी से लगाती है, इसलिए अच्छे बैकफ़िल कंपाउंड के साथ कॉपर बॉन्डेड अर्थ रॉड और जंग-रोधी FRP अर्थ पिट कवर आमतौर पर पसंद किए जाते हैं। हम आपकी साइट और मिट्टी जाँचने के बाद इलेक्ट्रोड की सलाह देते हैं।",
  "Salt in the air and soil near the coast speeds up corrosion. For coastal sites we often recommend copper bonded earth rods and FRP earth pit covers, with regular earth resistance testing during the north-east monsoon season.":
    "तट के पास हवा और मिट्टी में नमक जंग को तेज़ करता है। तटीय साइटों के लिए हम अक्सर कॉपर बॉन्डेड अर्थ रॉड और FRP अर्थ पिट कवर, और उत्तर-पूर्व मानसून के दौरान नियमित अर्थ प्रतिरोध परीक्षण की सलाह देते हैं।",
  "Servers, lifts, drives and building management systems are easily damaged by lightning and switching surges. We install Type 1 + 2 surge protection devices at the main incomer and earthing that keeps those surges away from sensitive equipment, for offices along OMR and factories in Ambattur, Guindy, Sriperumbudur and Oragadam.":
    "सर्वर, लिफ़्ट, ड्राइव और बिल्डिंग मैनेजमेंट सिस्टम बिजली और स्विचिंग सर्ज से आसानी से खराब हो जाते हैं। OMR के दफ़्तरों और अंबत्तूर, गिंडी, श्रीपेरंबदूर व ओरगडम की फ़ैक्ट्रियों के लिए हम मेन इनकमर पर Type 1 + 2 सर्ज प्रोटेक्शन डिवाइस और ऐसी अर्थिंग लगाते हैं जो इन सर्ज को संवेदनशील उपकरणों से दूर रखे।",
  "Service Areas Across India | Henel Engineers": "पूरे भारत में सेवा क्षेत्र | हेनेल इंजीनियर्स",
  "Service Areas: Lightning, Solar & Windmill": "सेवा क्षेत्र: लाइटनिंग, सोलर और पवनचक्की",
  "Share your project location and requirement with us. We plan the site visit, design, material supply and installation or maintenance work for your location and confirm the schedule with you.":
    "अपनी परियोजना का स्थान और ज़रूरत हमसे साझा करें। हम आपके स्थान के लिए साइट विज़िट, डिज़ाइन, सामग्री आपूर्ति और इंस्टॉलेशन या रखरखाव कार्य की योजना बनाते हैं और समय-सारणी आपके साथ तय करते हैं।",
  "Solar for homes, businesses and wind-farm owners": "घरों, व्यवसायों और विंड-फ़ार्म मालिकों के लिए सोलर",
  "Solar plant protection and maintenance": "सोलर प्लांट सुरक्षा और रखरखाव",
  "Solar plants with proper protection": "सही सुरक्षा के साथ सोलर प्लांट",
};
export default dict;
