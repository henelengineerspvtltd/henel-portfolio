/** Tamil — town pages, part 2. */
const Q = (place: string) => `${place} விலைப்பட்டியலை எப்படிப் பெறுவது?`;
const dict: Record<string, string> = {
  "How do I get a quote in Chennai?": Q("சென்னையில்"),
  "How do I get a quote in Coimbatore?": Q("கோயம்புத்தூரில்"),
  "How do I get a quote in Dindigul?": Q("திண்டுக்கல்லில்"),
  "How do I get a quote in Kanyakumari District?": Q("கன்னியாகுமரி மாவட்டத்தில்"),
  "How do I get a quote in Madurai?": Q("மதுரையில்"),
  "How do I get a quote in Tenkasi?": Q("தென்காசியில்"),
  "How do I get a quote in Thiruvananthapuram?": Q("திருவனந்தபுரத்தில்"),
  "How do I get a quote in Thoothukudi?": Q("தூத்துக்குடியில்"),
  "How do I get a quote in Tirunelveli?": Q("திருநெல்வேலியில்"),
  "How do I get a quote in Tiruppur?": Q("திருப்பூரில்"),
  "How do I get a quote in Trichy?": Q("திருச்சியில்"),
  "How do I get a quote in Virudhunagar District?": Q("விருதுநகர் மாவட்டத்தில்"),
  "How do you handle projects far from Kanyakumari?": "கன்னியாகுமரியிலிருந்து தொலைவில் உள்ள திட்டங்களை எப்படிக் கையாளுகிறீர்கள்?",
  "How far is Henel Engineers from Thoothukudi?": "ஹெனல் இன்ஜினியர்ஸ் தூத்துக்குடியிலிருந்து எவ்வளவு தூரம்?",
  "How far is Henel Engineers from Tirunelveli?": "ஹெனல் இன்ஜினியர்ஸ் திருநெல்வேலியிலிருந்து எவ்வளவு தூரம்?",
  "How far is your office from Trivandrum?": "உங்கள் அலுவலகம் திருவனந்தபுரத்திலிருந்து எவ்வளவு தூரம்?",
  "In dry or rocky soil, chemical earthing with a conductive backfill compound usually gives a lower and more stable earth resistance than a plain electrode. We check the site and recommend the electrode, compound and number of pits.":
    "வறண்ட அல்லது பாறை மண்ணில், கடத்தும் பேக்ஃபில் காம்பவுண்டுடன் கூடிய கெமிக்கல் எர்த்திங் சாதாரண எலக்ட்ரோடை விடக் குறைவான, நிலையான எர்த் மின்தடையைத் தரும். தளத்தைச் சோதித்து எலக்ட்ரோடு, காம்பவுண்ட் மற்றும் பிட்டுகளின் எண்ணிக்கையைப் பரிந்துரைக்கிறோம்.",
  "Industrial roofs across Coimbatore are well suited to commercial solar. We install and maintain rooftop and commercial solar plants with proper array earthing and lightning protection.":
    "கோயம்புத்தூர் முழுவதுமுள்ள தொழிற்சாலைக் கூரைகள் வணிக சோலாருக்கு மிகவும் ஏற்றவை. சரியான பேனல் எர்த்திங் மற்றும் மின்னல் பாதுகாப்புடன் கூரை மற்றும் வணிக சோலார் ஆலைகளை நிறுவிப் பராமரிக்கிறோம்.",
  "Kanyakumari District is home. Henel Engineers was founded in Aralvaimozhi in 1999, next to the Muppandal wind belt, and has a branch office in Marthandam — so sites across Nagercoil, Thuckalay, Kuzhithurai, Colachel and Kanyakumari town are close to our teams.":
    "கன்னியாகுமரி மாவட்டம் எங்கள் சொந்த ஊர். ஹெனல் இன்ஜினியர்ஸ் 1999-ல் முப்பந்தல் காற்றுப் பகுதிக்கு அருகில் ஆரல்வாய்மொழியில் தொடங்கப்பட்டது; மார்த்தாண்டத்தில் கிளை அலுவலகம் உள்ளது — எனவே நாகர்கோவில், தக்கலை, குழித்துறை, குளச்சல் மற்றும் கன்னியாகுமரி நகரத் தளங்கள் எங்கள் குழுக்களுக்கு அருகில் உள்ளன.",
  "Kanyakumari District receives rain from both the south-west and north-east monsoons, and thunderstorms are common before and during both seasons. Tall buildings, churches and temples, hospitals, schools, factories and telecom towers here all benefit from a properly designed lightning protection system.":
    "கன்னியாகுமரி மாவட்டம் தென்மேற்கு மற்றும் வடகிழக்கு இரு பருவமழைகளிலிருந்தும் மழை பெறுகிறது; இரு பருவங்களுக்கு முன்பும் அவற்றின்போதும் இடியுடன் கூடிய மழை சாதாரணம். இங்குள்ள உயரமான கட்டடங்கள், தேவாலயங்கள், கோயில்கள், மருத்துவமனைகள், பள்ளிகள், தொழிற்சாலைகள் மற்றும் தொலைத்தொடர்புக் கோபுரங்கள் அனைத்துக்கும் சரியாக வடிவமைக்கப்பட்ட மின்னல் பாதுகாப்பு அமைப்பு பயனளிக்கும்.",
  "Kerala experiences frequent and severe thunderstorms, particularly from March to May and during the north-east monsoon (thulavarsham) in October and November. Homes on high ground, apartment towers, churches, temples, hospitals, schools and IT campuses are all exposed.":
    "கேரளாவில் அடிக்கடி கடுமையான இடிமழை ஏற்படுகிறது, குறிப்பாக மார்ச் முதல் மே வரையிலும், அக்டோபர்–நவம்பர் வடகிழக்குப் பருவமழையின்போதும் (துலாவர்ஷம்). உயரமான நிலத்தில் உள்ள வீடுகள், அடுக்குமாடிக் கோபுரங்கள், தேவாலயங்கள், கோயில்கள், மருத்துவமனைகள், பள்ளிகள் மற்றும் IT வளாகங்கள் அனைத்தும் அபாயத்தில் உள்ளன.",
  "Kerala sees some of the most intense lightning in India, especially in the pre-monsoon months and the October–November thunderstorm season. Our Marthandam branch is about 45 km from Thiruvananthapuram, so Henel Engineers can reach sites across Trivandrum, Neyyattinkara, Kazhakkoottam and Vizhinjam easily.":
    "இந்தியாவில் மிகக் கடுமையான மின்னல் ஏற்படும் இடங்களில் கேரளாவும் ஒன்று, குறிப்பாகப் பருவமழைக்கு முந்தைய மாதங்களிலும் அக்டோபர்–நவம்பர் இடிமழைப் பருவத்திலும். எங்கள் மார்த்தாண்டம் கிளை திருவனந்தபுரத்திலிருந்து சுமார் 45 கி.மீ. தொலைவில் உள்ளதால், திருவனந்தபுரம், நெய்யாற்றின்கரை, கழக்கூட்டம் மற்றும் விழிஞ்ஞம் தளங்களை ஹெனல் இன்ஜினியர்ஸ் எளிதில் அடையலாம்.",
  "Large factory roofs and sheds are often best covered by an ESE lightning arrester on a mast. The TOPBAS SIRIUS protects up to 107 m and the UMBRAECO up to 51 m (Level IV, 5 m mast). For smaller buildings, copper bonded conventional arresters remain a cost-effective option.":
    "பெரிய தொழிற்சாலைக் கூரைகள் மற்றும் ஷெட்டுகளுக்குக் கம்பத்தில் பொருத்தப்பட்ட ESE மின்னல் தடுப்பான் சிறந்தது. TOPBAS SIRIUS 107 மீ வரை, UMBRAECO 51 மீ வரை பாதுகாக்கும் (Level IV, 5 மீ கம்பம்). சிறிய கட்டடங்களுக்கு காப்பர் பாண்டட் சாதாரண தடுப்பான்கள் செலவு குறைந்த தேர்வாகவே உள்ளன.",
  "Large mill roofs in Tiruppur suit commercial solar. We install and maintain rooftop and commercial solar plants with array earthing and lightning protection included.":
    "திருப்பூரின் பெரிய ஆலைக் கூரைகள் வணிக சோலாருக்கு ஏற்றவை. பேனல் எர்த்திங் மற்றும் மின்னல் பாதுகாப்பு உள்ளடக்கிய கூரை மற்றும் வணிக சோலார் ஆலைகளை நிறுவிப் பராமரிக்கிறோம்.",
  "Lightning Arrester & Earthing, Chennai": "மின்னல் தடுப்பான் & எர்த்திங், சென்னை",
  "Lightning Arrester & Earthing, Madurai": "மின்னல் தடுப்பான் & எர்த்திங், மதுரை",
  "Lightning Arrester & Earthing, Trichy": "மின்னல் தடுப்பான் & எர்த்திங், திருச்சி",
  "Lightning Arrester & Windmill, Coimbatore": "மின்னல் தடுப்பான் & காற்றாலை, கோயம்புத்தூர்",
  "Lightning Arrester & Windmill, Dindigul": "மின்னல் தடுப்பான் & காற்றாலை, திண்டுக்கல்",
  "Lightning Arrester & Windmill, Nagercoil": "மின்னல் தடுப்பான் & காற்றாலை, நாகர்கோவில்",
  "Lightning Arrester & Windmill, Thoothukudi": "மின்னல் தடுப்பான் & காற்றாலை, தூத்துக்குடி",
  "Lightning Arrester & Windmill, Tirunelveli": "மின்னல் தடுப்பான் & காற்றாலை, திருநெல்வேலி",
  "Lightning Arrester, Earthing & Solar in Thiruvananthapuram": "திருவனந்தபுரத்தில் மின்னல் தடுப்பான், எர்த்திங் & சோலார்",
  "Lightning Arrester, Earthing & Surge Protection in Chennai": "சென்னையில் மின்னல் தடுப்பான், எர்த்திங் & சர்ஜ் பாதுகாப்பு",
  "Lightning Arrester, Earthing & Surge Protection in Tiruchirappalli": "திருச்சிராப்பள்ளியில் மின்னல் தடுப்பான், எர்த்திங் & சர்ஜ் பாதுகாப்பு",
  "Lightning Arrester, Earthing & Surge Protection in Virudhunagar": "விருதுநகரில் மின்னல் தடுப்பான், எர்த்திங் & சர்ஜ் பாதுகாப்பு",
  "Lightning Arrester, Earthing & Windmill Services in Dindigul": "திண்டுக்கல்லில் மின்னல் தடுப்பான், எர்த்திங் & காற்றாலை சேவைகள்",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Coimbatore": "கோயம்புத்தூரில் மின்னல் தடுப்பான், எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Kanyakumari": "கன்னியாகுமரியில் மின்னல் தடுப்பான், எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Madurai": "மதுரையில் மின்னல் தடுப்பான், எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Thoothukudi": "தூத்துக்குடியில் மின்னல் தடுப்பான், எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning Arrester, Earthing, Solar & Windmill Services in Tirunelveli": "திருநெல்வேலியில் மின்னல் தடுப்பான், எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning Protection, Earthing, Solar & Windmill Services Across India": "இந்தியா முழுவதும் மின்னல் பாதுகாப்பு, எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning Protection, Earthing, Solar & Windmill Services in {name}": "{name}-இல் மின்னல் பாதுகாப்பு, எர்த்திங், சோலார் & காற்றாலை சேவைகள்",
  "Lightning and surge protection for industry": "தொழிற்சாலைகளுக்கு மின்னல் மற்றும் சர்ஜ் பாதுகாப்பு",
  "Lightning arrester work in Virudhunagar District": "விருதுநகர் மாவட்டத்தில் மின்னல் தடுப்பான் பணிகள்",
  "Lightning arresters for Chennai’s high-rise buildings": "சென்னையின் உயரமான கட்டடங்களுக்கு மின்னல் தடுப்பான்கள்",
  "Lightning arresters, chemical earthing and surge protection in Trichy, Srirangam and Thiruverumbur for factories, temples and institutions. Est. 1999.":
    "திருச்சி, ஸ்ரீரங்கம் மற்றும் திருவெறும்பூரில் தொழிற்சாலைகள், கோயில்கள் மற்றும் நிறுவனங்களுக்கு மின்னல் தடுப்பான்கள், கெமிக்கல் எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு. 1999 முதல்.",
  "Lightning arresters, chemical earthing, surge protection and rooftop solar in Thiruvananthapuram (Trivandrum), about 45 km from our Marthandam branch.":
    "எங்கள் மார்த்தாண்டம் கிளையிலிருந்து சுமார் 45 கி.மீ. தொலைவில் உள்ள திருவனந்தபுரத்தில் மின்னல் தடுப்பான்கள், கெமிக்கல் எர்த்திங், சர்ஜ் பாதுகாப்பு மற்றும் கூரை சோலார்.",
  "Lightning arresters, chemical earthing, surge protection, solar and windmill services in Madurai, Theni, Dindigul and Virudhunagar. Est. 1999.":
    "மதுரை, தேனி, திண்டுக்கல் மற்றும் விருதுநகரில் மின்னல் தடுப்பான்கள், கெமிக்கல் எர்த்திங், சர்ஜ் பாதுகாப்பு, சோலார் மற்றும் காற்றாலை சேவைகள். 1999 முதல்.",
  "Lightning arresters, earthing & SPD": "மின்னல் தடுப்பான்கள், எர்த்திங் & SPD",
  "Lightning arresters, earthing and surge protection in Virudhunagar, Sivakasi, Rajapalayam and Sattur, for factories, mills and buildings. Est. 1999.":
    "விருதுநகர், சிவகாசி, ராஜபாளையம் மற்றும் சாத்தூரில் தொழிற்சாலைகள், ஆலைகள் மற்றும் கட்டடங்களுக்கு மின்னல் தடுப்பான்கள், எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு. 1999 முதல்.",
  "Lightning arresters, earthing, SPD, solar and windmill services in {name}": "{name}-இல் மின்னல் தடுப்பான்கள், எர்த்திங், SPD, சோலார் மற்றும் காற்றாலை சேவைகள்",
  "Lightning arresters, earthing, solar and windmill maintenance in Kanyakumari District: Nagercoil, Aralvaimozhi, Muppandal, Marthandam. Since 1999.":
    "கன்னியாகுமரி மாவட்டத்தில் மின்னல் தடுப்பான்கள், எர்த்திங், சோலார் மற்றும் காற்றாலை பராமரிப்பு: நாகர்கோவில், ஆரல்வாய்மொழி, முப்பந்தல், மார்த்தாண்டம். 1999 முதல்.",
  "Lightning arresters, earthing, solar and windmill maintenance in Tirunelveli: Palayamkottai, Radhapuram, Panagudi, Valliyoor. Est. 1999.":
    "திருநெல்வேலியில் மின்னல் தடுப்பான்கள், எர்த்திங், சோலார் மற்றும் காற்றாலை பராமரிப்பு: பாளையங்கோட்டை, ராதாபுரம், பணகுடி, வள்ளியூர். 1999 முதல்.",
  "Lightning arresters, earthing, surge protection and windmill maintenance in Dindigul, Palani, Oddanchatram and Kodaikanal. Est. 1999.":
    "திண்டுக்கல், பழனி, ஒட்டன்சத்திரம் மற்றும் கொடைக்கானலில் மின்னல் தடுப்பான்கள், எர்த்திங், சர்ஜ் பாதுகாப்பு மற்றும் காற்றாலை பராமரிப்பு. 1999 முதல்.",
  "Lightning arresters, earthing, surge protection, solar and windmill services anywhere in India, including Tamil Nadu, Kerala, Karnataka and Gujarat.":
    "தமிழ்நாடு, கேரளா, கர்நாடகா மற்றும் குஜராத் உட்பட இந்தியாவில் எங்கும் மின்னல் தடுப்பான்கள், எர்த்திங், சர்ஜ் பாதுகாப்பு, சோலார் மற்றும் காற்றாலை சேவைகள்.",
  "Lightning damage on wind turbines": "காற்றாலைகளில் மின்னல் சேதம்",
  "Lightning protection and earthing for mills": "ஆலைகளுக்கு மின்னல் பாதுகாப்பு மற்றும் எர்த்திங்",
  "Lightning protection for Madurai’s tall buildings and institutions": "மதுரையின் உயரமான கட்டடங்கள் மற்றும் நிறுவனங்களுக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection for Sivakasi’s industries": "சிவகாசி தொழிற்சாலைகளுக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection for Tirunelveli buildings and industries": "திருநெல்வேலி கட்டடங்கள் மற்றும் தொழிற்சாலைகளுக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection for a coastal, two-monsoon district": "இரு பருவமழை பெறும் கடலோர மாவட்டத்துக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection for factories, campuses and high-rises": "தொழிற்சாலைகள், வளாகங்கள் மற்றும் உயரமான கட்டடங்களுக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection for temples, colleges and hospitals": "கோயில்கள், கல்லூரிகள் மற்றும் மருத்துவமனைகளுக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection for turbines and buildings": "காற்றாலைகள் மற்றும் கட்டடங்களுக்கு மின்னல் பாதுகாப்பு",
  "Lightning protection in the hills and on the plains": "மலைகளிலும் சமவெளியிலும் மின்னல் பாதுகாப்பு",
  "Lightning protection, corrosion-resistant earthing, solar and windmill maintenance in Thoothukudi (Tuticorin): Kayathar, Ottapidaram, Kovilpatti.":
    "தூத்துக்குடியில் மின்னல் பாதுகாப்பு, அரிப்பை எதிர்க்கும் எர்த்திங், சோலார் மற்றும் காற்றாலை பராமரிப்பு: கயத்தாறு, ஓட்டப்பிடாரம், கோவில்பட்டி.",
  "Lightning risk assessment and system design": "மின்னல் இடர் மதிப்பீடு மற்றும் அமைப்பு வடிவமைப்பு",
  "Local service areas near our offices": "எங்கள் அலுவலகங்களுக்கு அருகிலுள்ள உள்ளூர் சேவைப் பகுதிகள்",
  "Madhya Pradesh is a growing wind and solar state, and Central India sees some of the country’s highest lightning activity during the monsoon.":
    "மத்தியப் பிரதேசம் வளர்ந்து வரும் காற்றாலை மற்றும் சோலார் மாநிலம்; பருவமழைக் காலத்தில் நாட்டின் மிக அதிக மின்னல் செயல்பாடு மத்திய இந்தியாவில் காணப்படுகிறது.",
  "Madurai is southern Tamil Nadu’s largest city, with hospitals, colleges, temples, high-rise buildings and industrial estates such as Kappalur that all need sound lightning protection and earthing. Henel Engineers has carried out lightning arrester work in Madurai and serves the city and the surrounding Theni, Dindigul and Virudhunagar districts.":
    "மதுரை தென் தமிழ்நாட்டின் மிகப்பெரிய நகரம்; இங்குள்ள மருத்துவமனைகள், கல்லூரிகள், கோயில்கள், உயரமான கட்டடங்கள் மற்றும் கப்பலூர் போன்ற தொழிற்பேட்டைகள் அனைத்துக்கும் உறுதியான மின்னல் பாதுகாப்பும் எர்த்திங்கும் தேவை. ஹெனல் இன்ஜினியர்ஸ் மதுரையில் மின்னல் தடுப்பான் பணிகளை மேற்கொண்டுள்ளது; நகரத்துக்கும் சுற்றியுள்ள தேனி, திண்டுக்கல் மற்றும் விருதுநகர் மாவட்டங்களுக்கும் சேவை செய்கிறது.",
  "Madurai’s strong sunshine suits rooftop solar for homes, hospitals, schools and businesses. We install, maintain and clean solar systems and include array earthing and lightning protection in every design.":
    "மதுரையின் வலுவான வெயில் வீடுகள், மருத்துவமனைகள், பள்ளிகள் மற்றும் வணிகங்களுக்கான கூரை சோலாருக்கு ஏற்றது. சோலார் அமைப்புகளை நிறுவி, பராமரித்து, சுத்தம் செய்கிறோம்; ஒவ்வொரு வடிவமைப்பிலும் பேனல் எர்த்திங் மற்றும் மின்னல் பாதுகாப்பைச் சேர்க்கிறோம்.",
  "Maintenance contracts (CMC / AMC)": "பராமரிப்பு ஒப்பந்தங்கள் (CMC / AMC)",
  "Many mills and factories in the district now run rooftop solar. We earth the array, structures and inverters and add lightning protection that does not shade the panels, using earth rods, CARBOMAXX earthing compound and earth pit covers.":
    "மாவட்டத்தில் பல ஆலைகளும் தொழிற்சாலைகளும் இப்போது கூரை சோலாரை இயக்குகின்றன. எர்த் கம்பிகள், CARBOMAXX எர்த்திங் காம்பவுண்ட் மற்றும் எர்த் பிட் மூடிகளைப் பயன்படுத்தி பேனல் வரிசை, கட்டமைப்புகள் மற்றும் இன்வெர்ட்டர்களை எர்த் செய்து, பேனல்களுக்கு நிழல் விழாத மின்னல் பாதுகாப்பைச் சேர்க்கிறோம்.",
  "Most lightning damage in a city is caused not by direct strikes but by surges entering through power and data lines. Offices and IT campuses around Kazhakkoottam and Technopark, hospitals and homes with inverters and solar systems all benefit from a Type 1 + 2 SPD at the main distribution board, backed by good earthing.":
    "நகரத்தில் பெரும்பாலான மின்னல் சேதம் நேரடித் தாக்குதலால் அல்ல, மின் மற்றும் டேட்டா லைன்கள் வழியாக நுழையும் சர்ஜால் ஏற்படுகிறது. கழக்கூட்டம் மற்றும் டெக்னோபார்க் சுற்றியுள்ள அலுவலகங்கள், IT வளாகங்கள், மருத்துவமனைகள், இன்வெர்ட்டர் மற்றும் சோலார் உள்ள வீடுகள் — அனைத்துக்கும் நல்ல எர்த்திங்குடன் மெயின் விநியோகப் பலகையில் Type 1 + 2 SPD பயனளிக்கும்.",
  "Much of Tirunelveli District has hard, dry or rocky soil, where a plain electrode often cannot reach a low earth resistance. Chemical earthing — an electrode surrounded by conductive backfill such as CARBOMAXX compound, inside an inspectable earth pit — helps achieve and hold a low, stable resistance through the dry months.":
    "திருநெல்வேலி மாவட்டத்தின் பெரும்பகுதியில் கடினமான, வறண்ட அல்லது பாறை மண் உள்ளது; அங்கு சாதாரண எலக்ட்ரோடு குறைந்த எர்த் மின்தடையை அடைய முடியாது. கெமிக்கல் எர்த்திங் — ஆய்வு செய்யக்கூடிய எர்த் பிட்டுக்குள், CARBOMAXX காம்பவுண்ட் போன்ற கடத்தும் பேக்ஃபில்லால் சூழப்பட்ட எலக்ட்ரோடு — வறண்ட மாதங்களிலும் குறைந்த, நிலையான மின்தடையை அடையவும் தக்கவைக்கவும் உதவுகிறது.",
  "Near the coast at Colachel, Kanyakumari town and the fishing villages in between, salt-laden air and moist soil speed up corrosion of earth electrodes and connections; inland, laterite and rocky ground can make low earth resistance hard to achieve. We choose the electrode (copper bonded or GI), backfill compound and pit design to suit the soil at your site.":
    "குளச்சல், கன்னியாகுமரி நகரம் மற்றும் இடையிலுள்ள மீனவக் கிராமங்களின் கடற்கரைக்கு அருகில், உப்புக் காற்றும் ஈர மண்ணும் எர்த் எலக்ட்ரோடுகள் மற்றும் இணைப்புகளின் அரிப்பை விரைவுபடுத்துகின்றன; உள்நாட்டில், செம்புறை மற்றும் பாறை நிலம் குறைந்த எர்த் மின்தடையை அடைவதைக் கடினமாக்கும். உங்கள் தள மண்ணுக்கு ஏற்ப எலக்ட்ரோடு (காப்பர் பாண்டட் அல்லது GI), பேக்ஃபில் காம்பவுண்ட் மற்றும் பிட் வடிவமைப்பைத் தேர்வு செய்கிறோம்.",
  "Near the port, the salt pans and the coast from Thoothukudi to Tiruchendur, salt-laden air and saline soil corrode GI electrodes, clamps and pit covers much faster than inland. For these sites we usually recommend copper bonded earth rods, a conductive backfill compound such as CARBOMAXX, and corrosion-resistant FRP earth pit covers, with periodic earth resistance testing.":
    "துறைமுகம், உப்பளங்கள் மற்றும் தூத்துக்குடி முதல் திருச்செந்தூர் வரையிலான கடற்கரைக்கு அருகில், உப்புக் காற்றும் உவர் மண்ணும் GI எலக்ட்ரோடுகள், கிளாம்புகள் மற்றும் பிட் மூடிகளை உள்நாட்டை விட மிக வேகமாக அரிக்கின்றன. இத்தகைய தளங்களுக்கு காப்பர் பாண்டட் எர்த் கம்பிகள், CARBOMAXX போன்ற கடத்தும் பேக்ஃபில் காம்பவுண்ட், அரிப்பை எதிர்க்கும் FRP எர்த் பிட் மூடிகள் மற்றும் அவ்வப்போது எர்த் மின்தடைச் சோதனையைப் பரிந்துரைக்கிறோம்.",
  "Odisha, Jharkhand, West Bengal and Bihar are among the states most affected by lightning in India, making proper lightning protection and earthing essential.":
    "ஒடிசா, ஜார்க்கண்ட், மேற்கு வங்கம் மற்றும் பீகார் இந்தியாவில் மின்னலால் அதிகம் பாதிக்கப்படும் மாநிலங்களில் அடங்கும்; எனவே சரியான மின்னல் பாதுகாப்பும் எர்த்திங்கும் அவசியம்.",
  "Offices in Aralvaimozhi and Marthandam, Kanyakumari District. Engineering since 1999.": "கன்னியாகுமரி மாவட்டம் ஆரல்வாய்மொழி மற்றும் மார்த்தாண்டத்தில் அலுவலகங்கள். 1999 முதல் பொறியியல் சேவை.",
  "Open-ground and rooftop solar plants in the district are exposed to lightning and coastal corrosion. We install solar systems and provide solar earthing, lightning protection, cleaning and maintenance for existing plants.":
    "மாவட்டத்தில் உள்ள தரை மற்றும் கூரை சோலார் ஆலைகள் மின்னல் மற்றும் கடலோர அரிப்புக்கு உள்ளாகின்றன. சோலார் அமைப்புகளை நிறுவுவதுடன், ஏற்கனவே உள்ள ஆலைகளுக்கு சோலார் எர்த்திங், மின்னல் பாதுகாப்பு, சுத்தம் மற்றும் பராமரிப்பு வழங்குகிறோம்.",
  "Our 24x7 breakdown support helps keep downtime short during the high-wind season, when every lost day of generation costs the most.":
    "ஒவ்வொரு உற்பத்தி இழப்பு நாளும் அதிக செலவாகும் அதிக காற்றுப் பருவத்தில், எங்கள் 24x7 பழுது உதவி நிறுத்த நேரத்தைக் குறைக்க உதவுகிறது.",
  "Our branch office on Kalluthotti - Marthandam Road, Marthandam, Tamil Nadu, is about 45 km from Thiruvananthapuram city along the NH 66 corridor, close to Parassala and Neyyattinkara.":
    "தமிழ்நாடு, மார்த்தாண்டம், கல்லுத்தொட்டி - மார்த்தாண்டம் சாலையில் உள்ள எங்கள் கிளை அலுவலகம் NH 66 வழியில் திருவனந்தபுரம் நகரத்திலிருந்து சுமார் 45 கி.மீ. தொலைவில், பாறசாலை மற்றும் நெய்யாற்றின்கரைக்கு அருகில் உள்ளது.",
  "Our home region around Aralvaimozhi and Marthandam, the Muppandal, Kayathar, Shencottah and Palakkad Gap wind belts, and the cities where we work across Tamil Nadu and Kerala.":
    "ஆரல்வாய்மொழி மற்றும் மார்த்தாண்டம் சுற்றியுள்ள எங்கள் சொந்தப் பகுதி, முப்பந்தல், கயத்தாறு, செங்கோட்டை மற்றும் பாலக்காட்டுக் கணவாய் காற்றுப் பகுதிகள், மற்றும் தமிழ்நாடு, கேரளா முழுவதும் நாங்கள் பணியாற்றும் நகரங்கள்.",
  "Our home region. Kanyakumari District sits in one of India’s most active wind energy belts, and South India combines strong wind and solar resources with heavy monsoon lightning.":
    "எங்கள் சொந்தப் பகுதி. கன்னியாகுமரி மாவட்டம் இந்தியாவின் மிகச் சுறுசுறுப்பான காற்றாலை ஆற்றல் பகுதிகளில் ஒன்றில் அமைந்துள்ளது; தென் இந்தியாவில் வலுவான காற்று மற்றும் சூரிய வளங்களுடன் கடுமையான பருவமழை மின்னலும் உள்ளது.",
  "Our registered office in Aralvaimozhi is roughly 60 km from Tirunelveli city along NH 44, and closer still to the Panagudi, Valliyoor and Radhapuram wind sites.":
    "ஆரல்வாய்மொழியில் உள்ள எங்கள் பதிவு அலுவலகம் NH 44 வழியில் திருநெல்வேலி நகரத்திலிருந்து சுமார் 60 கி.மீ. தொலைவில் உள்ளது; பணகுடி, வள்ளியூர் மற்றும் ராதாபுரம் காற்றாலைத் தளங்களுக்கு இன்னும் அருகில் உள்ளது.",
  "Our registered office in Aralvaimozhi, Kanyakumari District, is roughly 110 km from Thoothukudi city by road via Tirunelveli.":
    "கன்னியாகுமரி மாவட்டம் ஆரல்வாய்மொழியில் உள்ள எங்கள் பதிவு அலுவலகம் திருநெல்வேலி வழியாகச் சாலை மார்க்கமாகத் தூத்துக்குடி நகரத்திலிருந்து சுமார் 110 கி.மீ. தொலைவில் உள்ளது.",
  "Our registered office is at No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi — 629 301, and our branch office is on Kalluthotti - Marthandam Road, Unnamalaikadai, Marthandam — 629 165.":
    "எங்கள் பதிவு அலுவலகம்: எண்.8, 1104 J/64, காமராஜ் நகர், ஆரல்வாய்மொழி — 629 301; கிளை அலுவலகம்: கல்லுத்தொட்டி - மார்த்தாண்டம் சாலை, உண்ணாமலைக்கடை, மார்த்தாண்டம் — 629 165.",
  "Our wind team covers the whole turbine: gearbox repair, overhaul and replacement, including in-tower service where the fault allows; generator rewinding, slip ring repair and bearing replacement; blade patching and lightning damage repair; and hydraulic and PCB servicing.":
    "எங்கள் காற்றாலைக் குழு முழு காற்றாலையையும் கவனிக்கிறது: பழுதின் தன்மை அனுமதிக்கும் இடங்களில் டவருக்குள்ளேயே சர்வீஸ் உட்பட கியர்பாக்ஸ் பழுதுநீக்கம், ஓவர்ஹால் மற்றும் மாற்றம்; ஜெனரேட்டர் ரீவைண்டிங், ஸ்லிப் ரிங் பழுதுநீக்கம் மற்றும் பேரிங் மாற்றம்; பிளேடு பேட்சிங் மற்றும் மின்னல் சேத பழுதுநீக்கம்; ஹைட்ராலிக் மற்றும் PCB சர்வீஸ்.",
  "Parts of Dindigul District have wind turbine sites. We provide windmill maintenance contracts, gearbox and generator repair, blade repair, spare parts and 24x7 breakdown support for turbine owners there.":
    "திண்டுக்கல் மாவட்டத்தின் சில பகுதிகளில் காற்றாலைத் தளங்கள் உள்ளன. அங்குள்ள காற்றாலை உரிமையாளர்களுக்கு காற்றாலை பராமரிப்பு ஒப்பந்தங்கள், கியர்பாக்ஸ் மற்றும் ஜெனரேட்டர் பழுதுநீக்கம், பிளேடு பழுதுநீக்கம், உதிரிபாகங்கள் மற்றும் 24x7 பழுது உதவி வழங்குகிறோம்.",
  "Port facilities, warehouses, chemical and process plants, and tall structures across Thoothukudi need lightning protection and surge protection designed to the risk. We design the system and supply and install ESE lightning arresters, down conductors, earthing and Type 1 + 2 surge protection devices.":
    "தூத்துக்குடி முழுவதுமுள்ள துறைமுக வசதிகள், கிடங்குகள், ரசாயன மற்றும் செயல்முறை ஆலைகள் மற்றும் உயரமான கட்டமைப்புகளுக்கு இடருக்கேற்ப வடிவமைக்கப்பட்ட மின்னல் மற்றும் சர்ஜ் பாதுகாப்பு தேவை. நாங்கள் அமைப்பை வடிவமைத்து, ESE மின்னல் தடுப்பான்கள், டவுன் கண்டக்டர்கள், எர்த்திங் மற்றும் Type 1 + 2 சர்ஜ் பாதுகாப்புச் சாதனங்களை வழங்கி நிறுவுகிறோம்.",
  "Rocky ground makes low earth resistance harder to reach, so we design the earthing for the site, using chemical earth electrodes and earthing compound, and test the result.":
    "பாறை நிலத்தில் குறைந்த எர்த் மின்தடையை அடைவது கடினம்; எனவே கெமிக்கல் எர்த் எலக்ட்ரோடுகள் மற்றும் எர்த்திங் காம்பவுண்டைப் பயன்படுத்தி தளத்துக்கேற்ப எர்த்திங்கை வடிவமைத்து, முடிவைச் சோதிக்கிறோம்.",
  "Rooftop solar for mills and factories": "ஆலைகள் மற்றும் தொழிற்சாலைகளுக்கு கூரை சோலார்",
  "Rooftop solar is growing fast across Kerala. We install rooftop solar for homes and businesses and make sure the array, inverter and wiring are properly earthed and protected against lightning and surges.":
    "கேரளா முழுவதும் கூரை சோலார் வேகமாக வளர்ந்து வருகிறது. வீடுகள் மற்றும் வணிகங்களுக்கு கூரை சோலார் நிறுவி, பேனல் வரிசை, இன்வெர்ட்டர் மற்றும் வயரிங் சரியாக எர்த் செய்யப்பட்டு மின்னல் மற்றும் சர்ஜிலிருந்து பாதுகாக்கப்படுவதை உறுதி செய்கிறோம்.",
  "Rooftop solar with proper protection": "சரியான பாதுகாப்புடன் கூரை சோலார்",
  "Salt air and moist coastal soil corrode earthing faster, so copper bonded earth rods with a good backfill compound and a corrosion-resistant FRP earth pit cover are usually preferred. We recommend the electrode after checking your site and soil.":
    "உப்புக் காற்றும் ஈரமான கடலோர மண்ணும் எர்த்திங்கை வேகமாக அரிக்கின்றன; எனவே நல்ல பேக்ஃபில் காம்பவுண்டுடன் காப்பர் பாண்டட் எர்த் கம்பிகளும் அரிப்பை எதிர்க்கும் FRP எர்த் பிட் மூடியும் பொதுவாக விரும்பப்படுகின்றன. உங்கள் தளத்தையும் மண்ணையும் சோதித்த பிறகு எலக்ட்ரோடைப் பரிந்துரைக்கிறோம்.",
  "Salt in the air and soil near the coast speeds up corrosion. For coastal sites we often recommend copper bonded earth rods and FRP earth pit covers, with regular earth resistance testing during the north-east monsoon season.":
    "கடற்கரைக்கு அருகில் காற்றிலும் மண்ணிலும் உள்ள உப்பு அரிப்பை விரைவுபடுத்துகிறது. கடலோரத் தளங்களுக்கு காப்பர் பாண்டட் எர்த் கம்பிகள் மற்றும் FRP எர்த் பிட் மூடிகளையும், வடகிழக்குப் பருவமழைக் காலத்தில் வழக்கமான எர்த் மின்தடைச் சோதனையையும் பரிந்துரைக்கிறோம்.",
  "Servers, lifts, drives and building management systems are easily damaged by lightning and switching surges. We install Type 1 + 2 surge protection devices at the main incomer and earthing that keeps those surges away from sensitive equipment, for offices along OMR and factories in Ambattur, Guindy, Sriperumbudur and Oragadam.":
    "சர்வர்கள், லிஃப்டுகள், டிரைவ்கள் மற்றும் கட்டட மேலாண்மை அமைப்புகள் மின்னல் மற்றும் ஸ்விட்சிங் சர்ஜால் எளிதில் சேதமடைகின்றன. OMR வழியிலுள்ள அலுவலகங்கள் மற்றும் அம்பத்தூர், கிண்டி, ஸ்ரீபெரும்புதூர், ஒரகடம் தொழிற்சாலைகளுக்கு, மெயின் இன்கமரில் Type 1 + 2 சர்ஜ் பாதுகாப்புச் சாதனங்களையும் அந்த சர்ஜை நுண்ணிய உபகரணங்களிலிருந்து விலக்கி வைக்கும் எர்த்திங்கையும் நிறுவுகிறோம்.",
  "Service Areas Across India | Henel Engineers": "இந்தியா முழுவதும் சேவைப் பகுதிகள் | ஹெனல் இன்ஜினியர்ஸ்",
  "Service Areas: Lightning, Solar & Windmill": "சேவைப் பகுதிகள்: மின்னல், சோலார் & காற்றாலை",
  "Share your project location and requirement with us. We plan the site visit, design, material supply and installation or maintenance work for your location and confirm the schedule with you.":
    "உங்கள் திட்ட இருப்பிடத்தையும் தேவையையும் எங்களுடன் பகிருங்கள். உங்கள் இடத்துக்கான தள ஆய்வு, வடிவமைப்பு, பொருள் விநியோகம் மற்றும் நிறுவல் அல்லது பராமரிப்புப் பணியைத் திட்டமிட்டு, அட்டவணையை உங்களுடன் உறுதி செய்கிறோம்.",
  "Solar for homes, businesses and wind-farm owners": "வீடுகள், வணிகங்கள் மற்றும் காற்றாலைப் பண்ணை உரிமையாளர்களுக்கு சோலார்",
  "Solar plant protection and maintenance": "சோலார் ஆலை பாதுகாப்பு மற்றும் பராமரிப்பு",
  "Solar plants with proper protection": "சரியான பாதுகாப்புடன் சோலார் ஆலைகள்",
};
export default dict;
