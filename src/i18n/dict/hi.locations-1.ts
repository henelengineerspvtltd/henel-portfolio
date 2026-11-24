/** Hindi — town pages, part 1. */
const CALL = '+91 94432 82312 या +91 94436 92711 पर कॉल करें, +91 94432 82312 पर व्हाट्सऐप करें, henelkkla@gmail.com पर ईमेल करें, या संपर्क फ़ॉर्म भरें और बताएँ कि';
const dict: Record<string, string> = {
  "An ESE arrester such as the TOPBAS SIRIUS can cover up to 107 m from one mast (Level IV, 5 m mast), which suits large campuses. For single points or smaller buildings, our copper bonded conventional arrester (100 kA, 5 m radius) can be enough.":
    "TOPBAS SIRIUS जैसा ESE अरेस्टर एक ही मस्तूल से 107 मीटर तक सुरक्षा दे सकता है (Level IV, 5 मीटर मस्तूल), जो बड़े परिसरों के लिए उपयुक्त है। एकल बिंदुओं या छोटी इमारतों के लिए हमारा कॉपर बॉन्डेड साधारण अरेस्टर (100 kA, 5 मीटर दायरा) पर्याप्त हो सकता है।",
  "An ESE lightning arrester can protect a large roof or a whole campus from one mast. The TOPBAS SIRIUS covers up to 107 m and follows NF C 17-102, and the UMBRAECO covers up to 51 m (Level IV, 5 m mast).":
    "ESE लाइटनिंग अरेस्टर एक ही मस्तूल से बड़ी छत या पूरे परिसर की सुरक्षा कर सकता है। TOPBAS SIRIUS 107 मीटर तक सुरक्षा देता है और NF C 17-102 का पालन करता है, और UMBRAECO 51 मीटर तक (Level IV, 5 मीटर मस्तूल)।",
  "As the tallest objects for kilometres, wind turbines are frequently struck by lightning. Strikes can damage blade tips, bearings and the turbine’s control electronics. We repair lightning-damaged blades and PCBs and check the turbine’s earthing so that future strikes are carried safely to ground.":
    "कई किलोमीटर तक सबसे ऊँची संरचना होने के कारण पवन टर्बाइनों पर अक्सर बिजली गिरती है। इससे ब्लेड के सिरे, बेयरिंग और टर्बाइन के कंट्रोल इलेक्ट्रॉनिक्स खराब हो सकते हैं। हम बिजली से क्षतिग्रस्त ब्लेड और PCB की मरम्मत करते हैं और टर्बाइन की अर्थिंग जाँचते हैं ताकि भविष्य में बिजली सुरक्षित रूप से ज़मीन में जाए।",
  "Buildings on high or exposed ground are struck more often. Hilltop temples around Palani, resorts and towers in Kodaikanal, and tall mills and hospitals on the plains all benefit from a complete lightning protection system: an air terminal, down conductors, earthing and surge protection.":
    "ऊँची या खुली ज़मीन पर बनी इमारतों पर बिजली ज़्यादा गिरती है। पलनी के आसपास पहाड़ी मंदिर, कोडाइकनाल के रिसॉर्ट और टावर, और मैदानों की ऊँची मिलें और अस्पताल — सभी को एक संपूर्ण लाइटनिंग प्रोटेक्शन सिस्टम से लाभ होता है: एयर टर्मिनल, डाउन कंडक्टर, अर्थिंग और सर्ज प्रोटेक्शन।",
  "CARBOMAXX earthing compound in 10 kg and 25 kg bags": "10 किलो और 25 किलो बैग में CARBOMAXX अर्थिंग कंपाउंड",
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Chennai.": `${CALL} आपकी साइट चेन्नई में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Coimbatore.": `${CALL} आपकी साइट कोयंबटूर में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Dindigul District.": `${CALL} आपकी साइट डिंडीगुल ज़िले में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Kanyakumari District.": `${CALL} आपकी साइट कन्याकुमारी ज़िले में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Madurai.": `${CALL} आपकी साइट मदुरै में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tenkasi District.": `${CALL} आपकी साइट तेनकासी ज़िले में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Thiruvananthapuram.": `${CALL} आपकी साइट तिरुवनंतपुरम में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Thoothukudi District.": `${CALL} आपकी साइट थूथुकुडी ज़िले में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tiruchirappalli.": `${CALL} आपकी साइट तिरुचिरापल्ली में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tirunelveli.": `${CALL} आपकी साइट तिरुनेलवेली में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tiruppur District.": `${CALL} आपकी साइट तिरुप्पुर ज़िले में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Virudhunagar District.": `${CALL} आपकी साइट विरुधुनगर ज़िले में है।`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention your city and state.": `${CALL} आपका शहर और राज्य कौन-सा है।`,
  "Can you get good earthing on rocky hill sites?": "क्या पथरीली पहाड़ी साइटों पर अच्छी अर्थिंग मिल सकती है?",
  "Can you protect a temple tower from lightning?": "क्या आप मंदिर के गोपुरम को बिजली से बचा सकते हैं?",
  "Can you provide lightning protection for fireworks and match units?": "क्या आप पटाखा और माचिस इकाइयों के लिए लाइटनिंग प्रोटेक्शन दे सकते हैं?",
  "Can you repair a wind turbine blade damaged by lightning?": "क्या आप बिजली से क्षतिग्रस्त पवन टर्बाइन ब्लेड की मरम्मत कर सकते हैं?",
  "Can you repair a wind turbine gearbox in Coimbatore?": "क्या आप कोयंबटूर में पवन टर्बाइन गियरबॉक्स की मरम्मत कर सकते हैं?",
  "Can you repair wind turbine gearboxes and generators in Tenkasi?": "क्या आप तेनकासी में पवन टर्बाइन गियरबॉक्स और जनरेटर की मरम्मत कर सकते हैं?",
  "Can you supply lightning arresters and earthing products to any state in India?": "क्या आप भारत के किसी भी राज्य में लाइटनिंग अरेस्टर और अर्थिंग उत्पाद भेज सकते हैं?",
  "Chemical earth electrodes and earth pits": "केमिकल अर्थ इलेक्ट्रोड और अर्थ पिट",
  "Chemical earth electrodes and earth pits with polyplastic or FRP covers": "पॉलीप्लास्टिक या FRP कवर के साथ केमिकल अर्थ इलेक्ट्रोड और अर्थ पिट",
  "Chemical earthing with copper bonded or GI rods": "कॉपर बॉन्डेड या GI रॉड के साथ केमिकल अर्थिंग",
  "Chennai’s apartment towers, IT parks, hospitals and industrial estates are among the tallest and most equipment-heavy buildings in Tamil Nadu. Henel Engineers has carried out lightning arrester work in Chennai and supplies and installs complete lightning protection, earthing and surge protection across the city.":
    "चेन्नई के अपार्टमेंट टावर, IT पार्क, अस्पताल और औद्योगिक एस्टेट तमिलनाडु की सबसे ऊँची और सबसे अधिक उपकरणों वाली इमारतों में हैं। हेनेल इंजीनियर्स ने चेन्नई में लाइटनिंग अरेस्टर का काम किया है और पूरे शहर में संपूर्ण लाइटनिंग प्रोटेक्शन, अर्थिंग और सर्ज प्रोटेक्शन की आपूर्ति और इंस्टॉलेशन करता है।",
  "Class B GI pipe earth rods — 48 mm, 1 m / 2 m / 3 m": "Class B GI पाइप अर्थ रॉड — 48 मिमी, 1 मी / 2 मी / 3 मी",
  "Coastal salt air and saline soil corrode earthing quickly. Copper bonded earth rods with conductive backfill compound and corrosion-resistant FRP earth pit covers usually last much longer than plain GI electrodes in these conditions.":
    "तटीय नमकीन हवा और खारी मिट्टी अर्थिंग को जल्दी जंग लगा देती है। ऐसी स्थितियों में कंडक्टिव बैकफ़िल कंपाउंड के साथ कॉपर बॉन्डेड अर्थ रॉड और जंग-रोधी FRP अर्थ पिट कवर, साधारण GI इलेक्ट्रोड से कहीं ज़्यादा टिकते हैं।",
  "Coimbatore sits at the mouth of the Palakkad Gap, the break in the Western Ghats that drives one of India’s strongest wind belts, and is one of South India’s biggest engineering and manufacturing hubs. Henel Engineers serves wind farms around Pollachi and Kinathukadavu and industries across the city.":
    "कोयंबटूर पालक्काड दर्रे के मुहाने पर है — पश्चिमी घाट का वह अंतराल जो भारत की सबसे तेज़ पवन पट्टियों में से एक बनाता है — और यह दक्षिण भारत के सबसे बड़े इंजीनियरिंग और विनिर्माण केंद्रों में से एक है। हेनेल इंजीनियर्स पोल्लाची और किनत्तुकडवु के आसपास के विंड फ़ार्म और पूरे शहर के उद्योगों को सेवा देता है।",
  "Coimbatore’s pump, motor, foundry, textile and precision-engineering units depend on CNC machines, drives and PLCs that are sensitive to surges and poor earthing. We design and install chemical earthing systems and Type 1 + 2 surge protection devices so fault and lightning currents are safely diverted away from equipment.":
    "कोयंबटूर की पंप, मोटर, फ़ाउंड्री, टेक्सटाइल और प्रिसिज़न-इंजीनियरिंग इकाइयाँ CNC मशीनों, ड्राइव और PLC पर निर्भर हैं, जो सर्ज और खराब अर्थिंग से प्रभावित होते हैं। हम केमिकल अर्थिंग सिस्टम और Type 1 + 2 सर्ज प्रोटेक्शन डिवाइस डिज़ाइन और इंस्टॉल करते हैं ताकि फ़ॉल्ट और बिजली की धारा उपकरणों से सुरक्षित रूप से दूर मोड़ी जाए।",
  "Common questions from clients in and around {name}.": "{name} और आसपास के ग्राहकों के आम सवाल।",
  "Copper bonded and Class B GI earth rods": "कॉपर बॉन्डेड और Class B GI अर्थ रॉड",
  "Copper bonded and GI earth rods, CARBOMAXX compound": "कॉपर बॉन्डेड और GI अर्थ रॉड, CARBOMAXX कंपाउंड",
  "Copper bonded conventional lightning arrester — 100 kA": "कॉपर बॉन्डेड साधारण लाइटनिंग अरेस्टर — 100 kA",
  "Copper bonded earth rods — 17.2 mm, 1 m / 2 m / 3 m": "कॉपर बॉन्डेड अर्थ रॉड — 17.2 मिमी, 1 मी / 2 मी / 3 मी",
  "Dense commercial, industrial and residential development across the north creates steady demand for lightning protection, earthing, surge protection and rooftop solar.":
    "उत्तर भारत में घने व्यावसायिक, औद्योगिक और आवासीय विकास से लाइटनिंग प्रोटेक्शन, अर्थिंग, सर्ज प्रोटेक्शन और रूफ़टॉप सोलर की लगातार माँग रहती है।",
  "Dindigul District runs from the plains around Dindigul town up to the Palani Hills and Kodaikanal, with spinning mills, hospitals, temples, colleges and wind turbine sites in between. Henel Engineers serves the whole district with lightning protection, earthing, surge protection and windmill services.":
    "डिंडीगुल ज़िला डिंडीगुल शहर के आसपास के मैदानों से पलनी पहाड़ियों और कोडाइकनाल तक फैला है, जिसके बीच स्पिनिंग मिलें, अस्पताल, मंदिर, कॉलेज और पवन टर्बाइन साइटें हैं। हेनेल इंजीनियर्स पूरे ज़िले में लाइटनिंग प्रोटेक्शन, अर्थिंग, सर्ज प्रोटेक्शन और पवनचक्की सेवाएँ देता है।",
  "Do you install earthing and surge protection for factories in Coimbatore?": "क्या आप कोयंबटूर में फ़ैक्ट्रियों के लिए अर्थिंग और सर्ज प्रोटेक्शन लगाते हैं?",
  "Do you install lightning arresters for factories at SIPCOT Gangaikondan?": "क्या आप SIPCOT गंगईकोंडान की फ़ैक्ट्रियों के लिए लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Chennai?": "क्या आप चेन्नई में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Dindigul and Kodaikanal?": "क्या आप डिंडीगुल और कोडाइकनाल में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Madurai?": "क्या आप मदुरै में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Nagercoil?": "क्या आप नागरकोइल में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Sivakasi and Virudhunagar?": "क्या आप शिवकाशी और विरुधुनगर में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Tenkasi?": "क्या आप तेनकासी में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Thiruvananthapuram?": "क्या आप तिरुवनंतपुरम में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning arresters in Trichy?": "क्या आप त्रिची में लाइटनिंग अरेस्टर लगाते हैं?",
  "Do you install lightning protection for industries in Thoothukudi?": "क्या आप थूथुकुडी में उद्योगों के लिए लाइटनिंग प्रोटेक्शन लगाते हैं?",
  "Do you install lightning protection for textile mills?": "क्या आप टेक्सटाइल मिलों के लिए लाइटनिंग प्रोटेक्शन लगाते हैं?",
  "Do you install surge protection for offices and IT companies?": "क्या आप दफ़्तरों और IT कंपनियों के लिए सर्ज प्रोटेक्शन लगाते हैं?",
  "Do you maintain windmills in Dindigul District?": "क्या आप डिंडीगुल ज़िले में पवनचक्कियों का रखरखाव करते हैं?",
  "Do you maintain windmills in Gujarat, Maharashtra, Rajasthan and other wind states?": "क्या आप गुजरात, महाराष्ट्र, राजस्थान और अन्य पवन राज्यों में पवनचक्कियों का रखरखाव करते हैं?",
  "Do you maintain windmills in Muppandal and Aralvaimozhi?": "क्या आप मुप्पंडल और आरलवाइमोझी में पवनचक्कियों का रखरखाव करते हैं?",
  "Do you maintain windmills in Palladam and Udumalpet?": "क्या आप पल्लडम और उडुमलपेट में पवनचक्कियों का रखरखाव करते हैं?",
  "Do you maintain windmills in Tenkasi District?": "क्या आप तेनकासी ज़िले में पवनचक्कियों का रखरखाव करते हैं?",
  "Do you maintain windmills in Theni District?": "क्या आप थेनी ज़िले में पवनचक्कियों का रखरखाव करते हैं?",
  "Do you provide earthing for fabrication units in Thiruverumbur?": "क्या आप तिरुवेरुंबूर में फ़ैब्रिकेशन इकाइयों के लिए अर्थिंग करते हैं?",
  "Do you provide earthing for factories in Kappalur?": "क्या आप कप्पलूर में फ़ैक्ट्रियों के लिए अर्थिंग करते हैं?",
  "Do you provide earthing for spinning mills in Rajapalayam?": "क्या आप राजपालयम में स्पिनिंग मिलों के लिए अर्थिंग करते हैं?",
  "Do you provide windmill CMC in Tirunelveli District?": "क्या आप तिरुनेलवेली ज़िले में पवनचक्की CMC देते हैं?",
  "Do you provide windmill maintenance around Pollachi and Coimbatore?": "क्या आप पोल्लाची और कोयंबटूर के आसपास पवनचक्की रखरखाव देते हैं?",
  "Do you service windmills in Kayathar and Ottapidaram?": "क्या आप कयत्तार और ओट्टापिडारम में पवनचक्कियों की सर्विस करते हैं?",
  "Do you supply earthing materials in Coimbatore?": "क्या आप कोयंबटूर में अर्थिंग सामग्री की आपूर्ति करते हैं?",
  "Do you take over windmill maintenance contracts from other service providers?": "क्या आप अन्य सेवा प्रदाताओं से पवनचक्की रखरखाव अनुबंध अपने हाथ में लेते हैं?",
  "Does Henel Engineers provide services outside Tamil Nadu?": "क्या हेनेल इंजीनियर्स तमिलनाडु के बाहर भी सेवाएँ देता है?",
  "Does my house in Kerala need a lightning arrester?": "क्या केरल में मेरे घर को लाइटनिंग अरेस्टर की ज़रूरत है?",
  "ESE & conventional lightning arresters": "ESE और साधारण लाइटनिंग अरेस्टर",
  "ESE and conventional lightning arresters": "ESE और साधारण लाइटनिंग अरेस्टर",
  "ESE and conventional lightning arresters, chemical earthing and surge protection in Chennai for high-rise buildings, offices and factories. Est. 1999.":
    "चेन्नई में ऊँची इमारतों, दफ़्तरों और फ़ैक्ट्रियों के लिए ESE और साधारण लाइटनिंग अरेस्टर, केमिकल अर्थिंग और सर्ज प्रोटेक्शन। स्थापना 1999।",
  "ESE lightning arresters — TOPBAS SIRIUS and UMBRAECO": "ESE लाइटनिंग अरेस्टर — TOPBAS SIRIUS और UMBRAECO",
  "Earth pits with polyplastic or FRP covers": "पॉलीप्लास्टिक या FRP कवर के साथ अर्थ पिट",
  "Earthing and surge protection for Coimbatore industry": "कोयंबटूर उद्योग के लिए अर्थिंग और सर्ज प्रोटेक्शन",
  "Earthing and surge protection for Trichy’s industries": "त्रिची के उद्योगों के लिए अर्थिंग और सर्ज प्रोटेक्शन",
  "Earthing and surge protection for industry": "उद्योगों के लिए अर्थिंग और सर्ज प्रोटेक्शन",
  "Earthing and surge protection for mills and institutions": "मिलों और संस्थानों के लिए अर्थिंग और सर्ज प्रोटेक्शन",
  "Earthing in coastal and laterite soils": "तटीय और लैटेराइट मिट्टी में अर्थिंग",
  "Earthing in dry, rocky ground": "सूखी, पथरीली ज़मीन में अर्थिंग",
  "Earthing in laterite and high-rainfall soil": "लैटेराइट और अधिक वर्षा वाली मिट्टी में अर्थिंग",
  "Earthing system design, installation and earth pits": "अर्थिंग सिस्टम डिज़ाइन, इंस्टॉलेशन और अर्थ पिट",
  "Earthing systems & earth pits": "अर्थिंग सिस्टम और अर्थ पिट",
  "Earthing that survives salt air": "नमकीन हवा में टिकने वाली अर्थिंग",
  "Every Service, Anywhere in India": "हर सेवा, भारत में कहीं भी",
  "Fabrication and engineering units around Thiruverumbur and Thuvakudi run welding sets, drives, cranes and control panels that need a reliable earthing system. We design and install chemical earthing with copper bonded or GI electrodes, earth pits, and Type 1 + 2 surge protection devices at the main incomer.":
    "तिरुवेरुंबूर और तुवाकुडी के आसपास की फ़ैब्रिकेशन और इंजीनियरिंग इकाइयाँ वेल्डिंग सेट, ड्राइव, क्रेन और कंट्रोल पैनल चलाती हैं, जिन्हें भरोसेमंद अर्थिंग सिस्टम चाहिए। हम कॉपर बॉन्डेड या GI इलेक्ट्रोड के साथ केमिकल अर्थिंग, अर्थ पिट, और मेन इनकमर पर Type 1 + 2 सर्ज प्रोटेक्शन डिवाइस डिज़ाइन और इंस्टॉल करते हैं।",
  "Factories at Kappalur and the industrial belts towards Virudhunagar and Sivakasi run motors, drives and control electronics that are easily damaged by surges. We install chemical earthing with copper bonded or GI electrodes and Type 1 + 2 surge protection devices at the main incomer, so both lightning and switching surges are safely diverted.":
    "कप्पलूर और विरुधुनगर व शिवकाशी की ओर के औद्योगिक क्षेत्रों की फ़ैक्ट्रियाँ मोटर, ड्राइव और कंट्रोल इलेक्ट्रॉनिक्स चलाती हैं, जो सर्ज से आसानी से खराब होते हैं। हम कॉपर बॉन्डेड या GI इलेक्ट्रोड के साथ केमिकल अर्थिंग और मेन इनकमर पर Type 1 + 2 सर्ज प्रोटेक्शन डिवाइस लगाते हैं, ताकि बिजली और स्विचिंग दोनों सर्ज सुरक्षित रूप से मोड़े जाएँ।",
  "Fireworks and match units handle materials where a lightning strike can be especially dangerous, and printing presses and spinning mills run machines and electronics that surges can damage. Each site should be designed to the applicable standards and to any licensing conditions that apply to it.":
    "पटाखा और माचिस इकाइयाँ ऐसी सामग्री संभालती हैं जहाँ बिजली गिरना विशेष रूप से ख़तरनाक हो सकता है, और प्रिंटिंग प्रेस व स्पिनिंग मिलें ऐसी मशीनें और इलेक्ट्रॉनिक्स चलाती हैं जिन्हें सर्ज नुकसान पहुँचा सकता है। हर साइट लागू मानकों और उस पर लागू लाइसेंस शर्तों के अनुसार डिज़ाइन होनी चाहिए।",
  "For factories, schools, hospitals, temples and homes in Tenkasi, we supply and install ESE and conventional lightning arresters with complete earthing and surge protection.":
    "तेनकासी में फ़ैक्ट्रियों, स्कूलों, अस्पतालों, मंदिरों और घरों के लिए हम संपूर्ण अर्थिंग और सर्ज प्रोटेक्शन के साथ ESE और साधारण लाइटनिंग अरेस्टर की आपूर्ति और इंस्टॉलेशन करते हैं।",
  "For large roofs and campuses, an ESE lightning arrester can cover a wide radius from a single mast: the TOPBAS SIRIUS covers up to 107 m and the UMBRAECO up to 51 m (Level IV, 5 m mast). For smaller buildings, copper bonded conventional arresters remain a cost-effective option.":
    "बड़ी छतों और परिसरों के लिए ESE लाइटनिंग अरेस्टर एक ही मस्तूल से बड़ा दायरा कवर कर सकता है: TOPBAS SIRIUS 107 मीटर तक और UMBRAECO 51 मीटर तक (Level IV, 5 मीटर मस्तूल)। छोटी इमारतों के लिए कॉपर बॉन्डेड साधारण अरेस्टर किफ़ायती विकल्प बने रहते हैं।",
  "For rooftop and commercial solar plants, we earth the array, structures and inverters and add lightning protection that does not shade the panels.":
    "रूफ़टॉप और व्यावसायिक सोलर प्लांट के लिए हम ऐरे, स्ट्रक्चर और इन्वर्टर की अर्थिंग करते हैं और ऐसा लाइटनिंग प्रोटेक्शन जोड़ते हैं जो पैनलों पर छाया न डाले।",
  "For turbine owners here we provide operation & maintenance, CMC / AMC contracts, gearbox repair, blade patching and lightning damage repair, generator rewinding and bearing replacement, hydraulic and PCB servicing, spare parts and 24x7 breakdown support.":
    "यहाँ के टर्बाइन मालिकों के लिए हम संचालन और रखरखाव, CMC / AMC अनुबंध, गियरबॉक्स मरम्मत, ब्लेड पैचिंग और बिजली क्षति मरम्मत, जनरेटर रीवाइंडिंग और बेयरिंग बदलना, हाइड्रोलिक और PCB सर्विसिंग, स्पेयर पार्ट्स और 24x7 ब्रेकडाउन सहायता देते हैं।",
  "From our base in Kanyakumari District, Tamil Nadu, Henel Engineers Pvt. Ltd. delivers lightning protection, earthing, surge protection, solar energy and windmill services anywhere in India — {n}+ states and regions, from Kanyakumari to Kashmir.":
    "तमिलनाडु के कन्याकुमारी ज़िले में अपने आधार से हेनेल इंजीनियर्स प्रा. लि. भारत में कहीं भी लाइटनिंग प्रोटेक्शन, अर्थिंग, सर्ज प्रोटेक्शन, सौर ऊर्जा और पवनचक्की सेवाएँ देता है — कन्याकुमारी से कश्मीर तक {n}+ राज्य और क्षेत्र।",
  "Gearbox, blade & generator repair": "गियरबॉक्स, ब्लेड और जनरेटर मरम्मत",
  "Generator rewinding and slip ring repair": "जनरेटर रीवाइंडिंग और स्लिप रिंग मरम्मत",
  "Gujarat, Maharashtra and Rajasthan are among India’s largest wind and solar markets, with major industrial clusters that need lightning protection and earthing.":
    "गुजरात, महाराष्ट्र और राजस्थान भारत के सबसे बड़े पवन और सौर बाज़ारों में हैं, जहाँ बड़े औद्योगिक क्लस्टर हैं जिन्हें लाइटनिंग प्रोटेक्शन और अर्थिंग चाहिए।",
  "Henel Engineers Pvt. Ltd. was incorporated on 17 August 1999 in Aralvaimozhi, Kanyakumari District, and operates from a registered office in Aralvaimozhi and a branch office in Marthandam. Our teams already travel through Tirunelveli and the Kayathar wind belt to reach Tenkasi District.":
    "हेनेल इंजीनियर्स प्रा. लि. 17 अगस्त 1999 को कन्याकुमारी ज़िले के आरलवाइमोझी में निगमित हुई और आरलवाइमोझी के पंजीकृत कार्यालय और मार्तंडम की शाखा से संचालित होती है। तेनकासी ज़िले तक पहुँचने के लिए हमारी टीमें पहले से ही तिरुनेलवेली और कयत्तार पवन पट्टी से होकर जाती हैं।",
  "Henel Engineers Service Areas Across India": "पूरे भारत में हेनेल इंजीनियर्स के सेवा क्षेत्र",
  "Henel Engineers has carried out lightning arrester work in Chennai. Apartment towers, office blocks and hospitals are usually the tallest points in their area, so they need a complete system: an air terminal above the highest point, dedicated down conductors, a low-resistance earthing system and surge protection at the main panel.":
    "हेनेल इंजीनियर्स ने चेन्नई में लाइटनिंग अरेस्टर का काम किया है। अपार्टमेंट टावर, ऑफ़िस ब्लॉक और अस्पताल आमतौर पर अपने क्षेत्र के सबसे ऊँचे बिंदु होते हैं, इसलिए उन्हें संपूर्ण सिस्टम चाहिए: सबसे ऊँचे बिंदु के ऊपर एयर टर्मिनल, समर्पित डाउन कंडक्टर, कम प्रतिरोध वाला अर्थिंग सिस्टम और मेन पैनल पर सर्ज प्रोटेक्शन।",
  "Henel Engineers has carried out lightning arrester work in Virudhunagar District. We design the whole system rather than fixing a single rod: the air terminal, down conductors, test joints, earthing and surge protection at the electrical panel.":
    "हेनेल इंजीनियर्स ने विरुधुनगर ज़िले में लाइटनिंग अरेस्टर का काम किया है। हम सिर्फ़ एक रॉड लगाने के बजाय पूरा सिस्टम डिज़ाइन करते हैं: एयर टर्मिनल, डाउन कंडक्टर, टेस्ट जॉइंट, अर्थिंग और इलेक्ट्रिकल पैनल पर सर्ज प्रोटेक्शन।",
  "Henel Engineers has carried out windmill work in Tenkasi District. We provide operation and maintenance, repairs, spare parts and 24x7 breakdown support for wind turbines across the district, from the Shencottah gap side to the Sankarankovil area.":
    "हेनेल इंजीनियर्स ने तेनकासी ज़िले में पवनचक्की का काम किया है। शेनकोट्टा दर्रे की ओर से शंकरनकोविल क्षेत्र तक, पूरे ज़िले की पवन टर्बाइनों के लिए हम संचालन और रखरखाव, मरम्मत, स्पेयर पार्ट्स और 24x7 ब्रेकडाउन सहायता देते हैं।",
  "High-rise buildings often use an ESE lightning arrester on a mast above the roof, because one unit protects a large radius. The final choice depends on a site-specific risk assessment and zone-of-protection calculation.":
    "ऊँची इमारतें अक्सर छत के ऊपर मस्तूल पर ESE लाइटनिंग अरेस्टर लगाती हैं, क्योंकि एक यूनिट बड़े दायरे की रक्षा करती है। अंतिम चुनाव साइट-विशिष्ट जोखिम आकलन और सुरक्षा-क्षेत्र गणना पर निर्भर करता है।",
  "Hospitals, colleges, temples, commercial complexes and factories in Tirunelveli and Palayamkottai, and plants at SIPCOT Gangaikondan, need lightning protection designed for the structure — not just a rod on the roof. We design the system, supply ESE or conventional air terminals, down conductors and earthing, and add surge protection devices at the main panel.":
    "तिरुनेलवेली और पलयमकोट्टई के अस्पताल, कॉलेज, मंदिर, व्यावसायिक परिसर और फ़ैक्ट्रियाँ, तथा SIPCOT गंगईकोंडान के प्लांट — इन्हें छत पर सिर्फ़ एक रॉड नहीं, बल्कि संरचना के अनुसार डिज़ाइन किया गया लाइटनिंग प्रोटेक्शन चाहिए। हम सिस्टम डिज़ाइन करते हैं, ESE या साधारण एयर टर्मिनल, डाउन कंडक्टर और अर्थिंग की आपूर्ति करते हैं, और मेन पैनल पर सर्ज प्रोटेक्शन डिवाइस जोड़ते हैं।",
  "Houses on high ground, tall or isolated homes and homes with rooftop solar are at higher risk. A lightning arrester with proper earthing, plus a surge protection device at the main board, protects both the structure and the appliances. We can assess your house and recommend the right system.":
    "ऊँची ज़मीन पर बने, ऊँचे या अकेले घर और रूफ़टॉप सोलर वाले घर ज़्यादा जोखिम में होते हैं। सही अर्थिंग के साथ लाइटनिंग अरेस्टर और मेन बोर्ड पर सर्ज प्रोटेक्शन डिवाइस, इमारत और उपकरण दोनों की रक्षा करते हैं। हम आपके घर का आकलन करके सही सिस्टम की सलाह दे सकते हैं।",
  "How do I get a quote for my city?": "अपने शहर के लिए कोटेशन कैसे पाएँ?",
};
export default dict;
