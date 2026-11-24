/** Tamil — town pages, part 1. */
const CALL = 'அழைக்க: +91 94432 82312 அல்லது +91 94436 92711, வாட்ஸ்அப்: +91 94432 82312, மின்னஞ்சல்: henelkkla@gmail.com, அல்லது தொடர்பு படிவத்தைப் பயன்படுத்தி';
const dict: Record<string, string> = {
  "An ESE arrester such as the TOPBAS SIRIUS can cover up to 107 m from one mast (Level IV, 5 m mast), which suits large campuses. For single points or smaller buildings, our copper bonded conventional arrester (100 kA, 5 m radius) can be enough.":
    "TOPBAS SIRIUS போன்ற ESE தடுப்பான் ஒரே கம்பத்திலிருந்து 107 மீ வரை பாதுகாக்கும் (Level IV, 5 மீ கம்பம்); இது பெரிய வளாகங்களுக்கு ஏற்றது. தனிப் புள்ளிகள் அல்லது சிறிய கட்டடங்களுக்கு எங்கள் காப்பர் பாண்டட் சாதாரண தடுப்பான் (100 kA, 5 மீ ஆரம்) போதுமானதாக இருக்கலாம்.",
  "An ESE lightning arrester can protect a large roof or a whole campus from one mast. The TOPBAS SIRIUS covers up to 107 m and follows NF C 17-102, and the UMBRAECO covers up to 51 m (Level IV, 5 m mast).":
    "ESE மின்னல் தடுப்பான் ஒரே கம்பத்திலிருந்து பெரிய கூரையையோ முழு வளாகத்தையோ பாதுகாக்கும். TOPBAS SIRIUS 107 மீ வரை பாதுகாக்கும், NF C 17-102 தரநிலையைப் பின்பற்றுகிறது; UMBRAECO 51 மீ வரை பாதுகாக்கும் (Level IV, 5 மீ கம்பம்).",
  "As the tallest objects for kilometres, wind turbines are frequently struck by lightning. Strikes can damage blade tips, bearings and the turbine’s control electronics. We repair lightning-damaged blades and PCBs and check the turbine’s earthing so that future strikes are carried safely to ground.":
    "பல கிலோமீட்டர் சுற்றளவில் மிக உயரமானவை என்பதால் காற்றாலைகள் அடிக்கடி மின்னலால் தாக்கப்படுகின்றன. இது பிளேடு முனைகள், பேரிங்குகள் மற்றும் கட்டுப்பாட்டு மின்னணுவியலைச் சேதப்படுத்தலாம். மின்னலால் சேதமடைந்த பிளேடுகள் மற்றும் PCB-களை நாங்கள் சரிசெய்கிறோம்; எதிர்கால மின்னல் பாதுகாப்பாக நிலத்துக்குச் செல்ல காற்றாலையின் எர்த்திங்கையும் சோதிக்கிறோம்.",
  "Buildings on high or exposed ground are struck more often. Hilltop temples around Palani, resorts and towers in Kodaikanal, and tall mills and hospitals on the plains all benefit from a complete lightning protection system: an air terminal, down conductors, earthing and surge protection.":
    "உயரமான அல்லது திறந்த நிலத்தில் உள்ள கட்டடங்கள் அடிக்கடி மின்னலால் தாக்கப்படுகின்றன. பழனி சுற்றியுள்ள மலைக் கோயில்கள், கொடைக்கானல் ரிசார்ட்டுகள் மற்றும் கோபுரங்கள், சமவெளியில் உள்ள உயரமான ஆலைகள் மற்றும் மருத்துவமனைகள் — அனைத்துக்கும் முழுமையான மின்னல் பாதுகாப்பு அமைப்பு பயனளிக்கும்: ஏர் டெர்மினல், டவுன் கண்டக்டர்கள், எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு.",
  "CARBOMAXX earthing compound in 10 kg and 25 kg bags": "10 கிலோ மற்றும் 25 கிலோ பைகளில் CARBOMAXX எர்த்திங் காம்பவுண்ட்",
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Chennai.": `${CALL}, உங்கள் தளம் சென்னையில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Coimbatore.": `${CALL}, உங்கள் தளம் கோயம்புத்தூரில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Dindigul District.": `${CALL}, உங்கள் தளம் திண்டுக்கல் மாவட்டத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Kanyakumari District.": `${CALL}, உங்கள் தளம் கன்னியாகுமரி மாவட்டத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Madurai.": `${CALL}, உங்கள் தளம் மதுரையில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tenkasi District.": `${CALL}, உங்கள் தளம் தென்காசி மாவட்டத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Thiruvananthapuram.": `${CALL}, உங்கள் தளம் திருவனந்தபுரத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Thoothukudi District.": `${CALL}, உங்கள் தளம் தூத்துக்குடி மாவட்டத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tiruchirappalli.": `${CALL}, உங்கள் தளம் திருச்சிராப்பள்ளியில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tirunelveli.": `${CALL}, உங்கள் தளம் திருநெல்வேலியில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Tiruppur District.": `${CALL}, உங்கள் தளம் திருப்பூர் மாவட்டத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention that your site is in Virudhunagar District.": `${CALL}, உங்கள் தளம் விருதுநகர் மாவட்டத்தில் உள்ளது எனக் குறிப்பிடுங்கள்.`,
  "Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention your city and state.": `${CALL}, உங்கள் நகரம் மற்றும் மாநிலத்தைக் குறிப்பிடுங்கள்.`,
  "Can you get good earthing on rocky hill sites?": "பாறை நிறைந்த மலைத் தளங்களில் நல்ல எர்த்திங் பெற முடியுமா?",
  "Can you protect a temple tower from lightning?": "கோயில் கோபுரத்தை மின்னலிலிருந்து பாதுகாக்க முடியுமா?",
  "Can you provide lightning protection for fireworks and match units?": "பட்டாசு மற்றும் தீப்பெட்டி ஆலைகளுக்கு மின்னல் பாதுகாப்பு வழங்க முடியுமா?",
  "Can you repair a wind turbine blade damaged by lightning?": "மின்னலால் சேதமடைந்த காற்றாலை பிளேடை சரிசெய்ய முடியுமா?",
  "Can you repair a wind turbine gearbox in Coimbatore?": "கோயம்புத்தூரில் காற்றாலை கியர்பாக்ஸை சரிசெய்ய முடியுமா?",
  "Can you repair wind turbine gearboxes and generators in Tenkasi?": "தென்காசியில் காற்றாலை கியர்பாக்ஸ் மற்றும் ஜெனரேட்டர்களை சரிசெய்ய முடியுமா?",
  "Can you supply lightning arresters and earthing products to any state in India?": "இந்தியாவின் எந்த மாநிலத்துக்கும் மின்னல் தடுப்பான்கள் மற்றும் எர்த்திங் தயாரிப்புகளை வழங்க முடியுமா?",
  "Chemical earth electrodes and earth pits": "கெமிக்கல் எர்த் எலக்ட்ரோடுகள் மற்றும் எர்த் பிட்டுகள்",
  "Chemical earth electrodes and earth pits with polyplastic or FRP covers": "பாலிபிளாஸ்டிக் அல்லது FRP மூடிகளுடன் கெமிக்கல் எர்த் எலக்ட்ரோடுகள் மற்றும் எர்த் பிட்டுகள்",
  "Chemical earthing with copper bonded or GI rods": "காப்பர் பாண்டட் அல்லது GI கம்பிகளுடன் கெமிக்கல் எர்த்திங்",
  "Chennai’s apartment towers, IT parks, hospitals and industrial estates are among the tallest and most equipment-heavy buildings in Tamil Nadu. Henel Engineers has carried out lightning arrester work in Chennai and supplies and installs complete lightning protection, earthing and surge protection across the city.":
    "சென்னையின் அடுக்குமாடிக் கோபுரங்கள், IT பூங்காக்கள், மருத்துவமனைகள் மற்றும் தொழிற்பேட்டைகள் தமிழ்நாட்டின் மிக உயரமான, அதிக உபகரணங்கள் கொண்ட கட்டடங்களில் அடங்கும். ஹெனல் இன்ஜினியர்ஸ் சென்னையில் மின்னல் தடுப்பான் பணிகளை மேற்கொண்டுள்ளது; நகரம் முழுவதும் முழுமையான மின்னல் பாதுகாப்பு, எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பை வழங்கி நிறுவுகிறது.",
  "Class B GI pipe earth rods — 48 mm, 1 m / 2 m / 3 m": "Class B GI பைப் எர்த் கம்பிகள் — 48 மிமீ, 1 மீ / 2 மீ / 3 மீ",
  "Coastal salt air and saline soil corrode earthing quickly. Copper bonded earth rods with conductive backfill compound and corrosion-resistant FRP earth pit covers usually last much longer than plain GI electrodes in these conditions.":
    "கடலோர உப்புக் காற்றும் உவர் மண்ணும் எர்த்திங்கை விரைவில் அரிக்கின்றன. இத்தகைய சூழலில், கடத்தும் பேக்ஃபில் காம்பவுண்டுடன் கூடிய காப்பர் பாண்டட் எர்த் கம்பிகளும் அரிப்பை எதிர்க்கும் FRP எர்த் பிட் மூடிகளும் சாதாரண GI எலக்ட்ரோடுகளை விட நீண்ட காலம் நீடிக்கும்.",
  "Coimbatore sits at the mouth of the Palakkad Gap, the break in the Western Ghats that drives one of India’s strongest wind belts, and is one of South India’s biggest engineering and manufacturing hubs. Henel Engineers serves wind farms around Pollachi and Kinathukadavu and industries across the city.":
    "இந்தியாவின் வலிமையான காற்றுப் பட்டைகளில் ஒன்றை உருவாக்கும் மேற்குத் தொடர்ச்சி மலையின் இடைவெளியான பாலக்காட்டுக் கணவாயின் வாயிலில் கோயம்புத்தூர் அமைந்துள்ளது; இது தென் இந்தியாவின் மிகப்பெரிய பொறியியல் மற்றும் உற்பத்தி மையங்களில் ஒன்று. பொள்ளாச்சி, கிணத்துக்கடவு சுற்றியுள்ள காற்றாலைப் பண்ணைகளுக்கும் நகரம் முழுவதுமுள்ள தொழிற்சாலைகளுக்கும் ஹெனல் இன்ஜினியர்ஸ் சேவை செய்கிறது.",
  "Coimbatore’s pump, motor, foundry, textile and precision-engineering units depend on CNC machines, drives and PLCs that are sensitive to surges and poor earthing. We design and install chemical earthing systems and Type 1 + 2 surge protection devices so fault and lightning currents are safely diverted away from equipment.":
    "கோயம்புத்தூரின் பம்ப், மோட்டார், ஃபவுண்டரி, ஜவுளி மற்றும் துல்லியப் பொறியியல் நிறுவனங்கள் சர்ஜ் மற்றும் மோசமான எர்த்திங்கால் பாதிக்கப்படக்கூடிய CNC இயந்திரங்கள், டிரைவ்கள் மற்றும் PLC-களைச் சார்ந்துள்ளன. பழுது மற்றும் மின்னல் மின்னோட்டங்கள் உபகரணங்களிலிருந்து பாதுகாப்பாகத் திசைதிருப்பப்பட, கெமிக்கல் எர்த்திங் அமைப்புகளையும் Type 1 + 2 சர்ஜ் பாதுகாப்புச் சாதனங்களையும் வடிவமைத்து நிறுவுகிறோம்.",
  "Common questions from clients in and around {name}.": "{name} மற்றும் சுற்றுவட்டார வாடிக்கையாளர்களின் பொதுவான கேள்விகள்.",
  "Copper bonded and Class B GI earth rods": "காப்பர் பாண்டட் மற்றும் Class B GI எர்த் கம்பிகள்",
  "Copper bonded and GI earth rods, CARBOMAXX compound": "காப்பர் பாண்டட் மற்றும் GI எர்த் கம்பிகள், CARBOMAXX காம்பவுண்ட்",
  "Copper bonded conventional lightning arrester — 100 kA": "காப்பர் பாண்டட் சாதாரண மின்னல் தடுப்பான் — 100 kA",
  "Copper bonded earth rods — 17.2 mm, 1 m / 2 m / 3 m": "காப்பர் பாண்டட் எர்த் கம்பிகள் — 17.2 மிமீ, 1 மீ / 2 மீ / 3 மீ",
  "Dense commercial, industrial and residential development across the north creates steady demand for lightning protection, earthing, surge protection and rooftop solar.":
    "வட இந்தியா முழுவதும் அடர்த்தியான வணிக, தொழில் மற்றும் குடியிருப்பு வளர்ச்சி மின்னல் பாதுகாப்பு, எர்த்திங், சர்ஜ் பாதுகாப்பு மற்றும் கூரை சோலாருக்கு நிலையான தேவையை உருவாக்குகிறது.",
  "Dindigul District runs from the plains around Dindigul town up to the Palani Hills and Kodaikanal, with spinning mills, hospitals, temples, colleges and wind turbine sites in between. Henel Engineers serves the whole district with lightning protection, earthing, surge protection and windmill services.":
    "திண்டுக்கல் மாவட்டம் திண்டுக்கல் நகரைச் சுற்றியுள்ள சமவெளியிலிருந்து பழனி மலைகள் மற்றும் கொடைக்கானல் வரை பரவியுள்ளது; இடையில் நூற்பாலைகள், மருத்துவமனைகள், கோயில்கள், கல்லூரிகள் மற்றும் காற்றாலைத் தளங்கள் உள்ளன. ஹெனல் இன்ஜினியர்ஸ் மாவட்டம் முழுவதும் மின்னல் பாதுகாப்பு, எர்த்திங், சர்ஜ் பாதுகாப்பு மற்றும் காற்றாலை சேவைகளை வழங்குகிறது.",
  "Do you install earthing and surge protection for factories in Coimbatore?": "கோயம்புத்தூரில் தொழிற்சாலைகளுக்கு எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு நிறுவுகிறீர்களா?",
  "Do you install lightning arresters for factories at SIPCOT Gangaikondan?": "SIPCOT கங்கைகொண்டானில் உள்ள தொழிற்சாலைகளுக்கு மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Chennai?": "சென்னையில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Dindigul and Kodaikanal?": "திண்டுக்கல் மற்றும் கொடைக்கானலில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Madurai?": "மதுரையில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Nagercoil?": "நாகர்கோவிலில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Sivakasi and Virudhunagar?": "சிவகாசி மற்றும் விருதுநகரில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Tenkasi?": "தென்காசியில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Thiruvananthapuram?": "திருவனந்தபுரத்தில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning arresters in Trichy?": "திருச்சியில் மின்னல் தடுப்பான் நிறுவுகிறீர்களா?",
  "Do you install lightning protection for industries in Thoothukudi?": "தூத்துக்குடியில் தொழிற்சாலைகளுக்கு மின்னல் பாதுகாப்பு நிறுவுகிறீர்களா?",
  "Do you install lightning protection for textile mills?": "ஜவுளி ஆலைகளுக்கு மின்னல் பாதுகாப்பு நிறுவுகிறீர்களா?",
  "Do you install surge protection for offices and IT companies?": "அலுவலகங்கள் மற்றும் IT நிறுவனங்களுக்கு சர்ஜ் பாதுகாப்பு நிறுவுகிறீர்களா?",
  "Do you maintain windmills in Dindigul District?": "திண்டுக்கல் மாவட்டத்தில் காற்றாலைகளைப் பராமரிக்கிறீர்களா?",
  "Do you maintain windmills in Gujarat, Maharashtra, Rajasthan and other wind states?": "குஜராத், மகாராஷ்டிரா, ராஜஸ்தான் மற்றும் பிற காற்றாலை மாநிலங்களில் காற்றாலைகளைப் பராமரிக்கிறீர்களா?",
  "Do you maintain windmills in Muppandal and Aralvaimozhi?": "முப்பந்தல் மற்றும் ஆரல்வாய்மொழியில் காற்றாலைகளைப் பராமரிக்கிறீர்களா?",
  "Do you maintain windmills in Palladam and Udumalpet?": "பல்லடம் மற்றும் உடுமலைப்பேட்டையில் காற்றாலைகளைப் பராமரிக்கிறீர்களா?",
  "Do you maintain windmills in Tenkasi District?": "தென்காசி மாவட்டத்தில் காற்றாலைகளைப் பராமரிக்கிறீர்களா?",
  "Do you maintain windmills in Theni District?": "தேனி மாவட்டத்தில் காற்றாலைகளைப் பராமரிக்கிறீர்களா?",
  "Do you provide earthing for fabrication units in Thiruverumbur?": "திருவெறும்பூரில் ஃபேப்ரிகேஷன் நிறுவனங்களுக்கு எர்த்திங் வழங்குகிறீர்களா?",
  "Do you provide earthing for factories in Kappalur?": "கப்பலூரில் தொழிற்சாலைகளுக்கு எர்த்திங் வழங்குகிறீர்களா?",
  "Do you provide earthing for spinning mills in Rajapalayam?": "ராஜபாளையத்தில் நூற்பாலைகளுக்கு எர்த்திங் வழங்குகிறீர்களா?",
  "Do you provide windmill CMC in Tirunelveli District?": "திருநெல்வேலி மாவட்டத்தில் காற்றாலை CMC வழங்குகிறீர்களா?",
  "Do you provide windmill maintenance around Pollachi and Coimbatore?": "பொள்ளாச்சி மற்றும் கோயம்புத்தூர் சுற்றுவட்டாரத்தில் காற்றாலை பராமரிப்பு வழங்குகிறீர்களா?",
  "Do you service windmills in Kayathar and Ottapidaram?": "கயத்தாறு மற்றும் ஓட்டப்பிடாரத்தில் காற்றாலைகளுக்குச் சர்வீஸ் செய்கிறீர்களா?",
  "Do you supply earthing materials in Coimbatore?": "கோயம்புத்தூரில் எர்த்திங் பொருட்களை வழங்குகிறீர்களா?",
  "Do you take over windmill maintenance contracts from other service providers?": "பிற சேவை வழங்குநர்களிடமிருந்து காற்றாலை பராமரிப்பு ஒப்பந்தங்களை ஏற்றுக்கொள்கிறீர்களா?",
  "Does Henel Engineers provide services outside Tamil Nadu?": "ஹெனல் இன்ஜினியர்ஸ் தமிழ்நாட்டுக்கு வெளியேயும் சேவை வழங்குகிறதா?",
  "Does my house in Kerala need a lightning arrester?": "கேரளாவில் உள்ள என் வீட்டுக்கு மின்னல் தடுப்பான் தேவையா?",
  "ESE & conventional lightning arresters": "ESE & சாதாரண மின்னல் தடுப்பான்கள்",
  "ESE and conventional lightning arresters": "ESE மற்றும் சாதாரண மின்னல் தடுப்பான்கள்",
  "ESE and conventional lightning arresters, chemical earthing and surge protection in Chennai for high-rise buildings, offices and factories. Est. 1999.":
    "சென்னையில் உயரமான கட்டடங்கள், அலுவலகங்கள் மற்றும் தொழிற்சாலைகளுக்கு ESE மற்றும் சாதாரண மின்னல் தடுப்பான்கள், கெமிக்கல் எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு. 1999 முதல்.",
  "ESE lightning arresters — TOPBAS SIRIUS and UMBRAECO": "ESE மின்னல் தடுப்பான்கள் — TOPBAS SIRIUS மற்றும் UMBRAECO",
  "Earth pits with polyplastic or FRP covers": "பாலிபிளாஸ்டிக் அல்லது FRP மூடிகளுடன் எர்த் பிட்டுகள்",
  "Earthing and surge protection for Coimbatore industry": "கோயம்புத்தூர் தொழில்துறைக்கு எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு",
  "Earthing and surge protection for Trichy’s industries": "திருச்சி தொழிற்சாலைகளுக்கு எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு",
  "Earthing and surge protection for industry": "தொழிற்சாலைகளுக்கு எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு",
  "Earthing and surge protection for mills and institutions": "ஆலைகள் மற்றும் நிறுவனங்களுக்கு எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு",
  "Earthing in coastal and laterite soils": "கடலோர மற்றும் செம்புறை மண்ணில் எர்த்திங்",
  "Earthing in dry, rocky ground": "வறண்ட, பாறை நிலத்தில் எர்த்திங்",
  "Earthing in laterite and high-rainfall soil": "செம்புறை மற்றும் அதிக மழை பெய்யும் மண்ணில் எர்த்திங்",
  "Earthing system design, installation and earth pits": "எர்த்திங் அமைப்பு வடிவமைப்பு, நிறுவல் மற்றும் எர்த் பிட்டுகள்",
  "Earthing systems & earth pits": "எர்த்திங் அமைப்புகள் & எர்த் பிட்டுகள்",
  "Earthing that survives salt air": "உப்புக் காற்றைத் தாங்கும் எர்த்திங்",
  "Every Service, Anywhere in India": "எல்லாச் சேவைகளும், இந்தியாவில் எங்கும்",
  "Fabrication and engineering units around Thiruverumbur and Thuvakudi run welding sets, drives, cranes and control panels that need a reliable earthing system. We design and install chemical earthing with copper bonded or GI electrodes, earth pits, and Type 1 + 2 surge protection devices at the main incomer.":
    "திருவெறும்பூர் மற்றும் துவாக்குடி சுற்றியுள்ள ஃபேப்ரிகேஷன் மற்றும் பொறியியல் நிறுவனங்கள் வெல்டிங் செட்கள், டிரைவ்கள், கிரேன்கள் மற்றும் கட்டுப்பாட்டுப் பேனல்களை இயக்குகின்றன; இவற்றுக்கு நம்பகமான எர்த்திங் அமைப்பு தேவை. காப்பர் பாண்டட் அல்லது GI எலக்ட்ரோடுகளுடன் கெமிக்கல் எர்த்திங், எர்த் பிட்டுகள், மற்றும் மெயின் இன்கமரில் Type 1 + 2 சர்ஜ் பாதுகாப்புச் சாதனங்களை வடிவமைத்து நிறுவுகிறோம்.",
  "Factories at Kappalur and the industrial belts towards Virudhunagar and Sivakasi run motors, drives and control electronics that are easily damaged by surges. We install chemical earthing with copper bonded or GI electrodes and Type 1 + 2 surge protection devices at the main incomer, so both lightning and switching surges are safely diverted.":
    "கப்பலூர் மற்றும் விருதுநகர், சிவகாசி நோக்கிய தொழில் பகுதிகளில் உள்ள தொழிற்சாலைகள் சர்ஜால் எளிதில் சேதமடையும் மோட்டார்கள், டிரைவ்கள் மற்றும் கட்டுப்பாட்டு மின்னணுவியலை இயக்குகின்றன. மின்னல் மற்றும் ஸ்விட்சிங் சர்ஜ் இரண்டும் பாதுகாப்பாகத் திசைதிருப்பப்பட, காப்பர் பாண்டட் அல்லது GI எலக்ட்ரோடுகளுடன் கெமிக்கல் எர்த்திங்கையும் மெயின் இன்கமரில் Type 1 + 2 சர்ஜ் பாதுகாப்புச் சாதனங்களையும் நிறுவுகிறோம்.",
  "Fireworks and match units handle materials where a lightning strike can be especially dangerous, and printing presses and spinning mills run machines and electronics that surges can damage. Each site should be designed to the applicable standards and to any licensing conditions that apply to it.":
    "பட்டாசு மற்றும் தீப்பெட்டி ஆலைகள் மின்னல் தாக்குதல் குறிப்பாக ஆபத்தாக இருக்கக்கூடிய பொருட்களைக் கையாளுகின்றன; அச்சகங்கள் மற்றும் நூற்பாலைகள் சர்ஜால் சேதமடையக்கூடிய இயந்திரங்கள் மற்றும் மின்னணுவியலை இயக்குகின்றன. ஒவ்வொரு தளமும் பொருந்தும் தரநிலைகள் மற்றும் அதற்குரிய உரிம நிபந்தனைகளுக்கேற்ப வடிவமைக்கப்பட வேண்டும்.",
  "For factories, schools, hospitals, temples and homes in Tenkasi, we supply and install ESE and conventional lightning arresters with complete earthing and surge protection.":
    "தென்காசியில் உள்ள தொழிற்சாலைகள், பள்ளிகள், மருத்துவமனைகள், கோயில்கள் மற்றும் வீடுகளுக்கு, முழுமையான எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்புடன் ESE மற்றும் சாதாரண மின்னல் தடுப்பான்களை வழங்கி நிறுவுகிறோம்.",
  "For large roofs and campuses, an ESE lightning arrester can cover a wide radius from a single mast: the TOPBAS SIRIUS covers up to 107 m and the UMBRAECO up to 51 m (Level IV, 5 m mast). For smaller buildings, copper bonded conventional arresters remain a cost-effective option.":
    "பெரிய கூரைகள் மற்றும் வளாகங்களுக்கு, ESE மின்னல் தடுப்பான் ஒரே கம்பத்திலிருந்து பரந்த ஆரத்தைப் பாதுகாக்கும்: TOPBAS SIRIUS 107 மீ வரை, UMBRAECO 51 மீ வரை (Level IV, 5 மீ கம்பம்). சிறிய கட்டடங்களுக்கு காப்பர் பாண்டட் சாதாரண தடுப்பான்கள் செலவு குறைந்த தேர்வாகவே உள்ளன.",
  "For rooftop and commercial solar plants, we earth the array, structures and inverters and add lightning protection that does not shade the panels.":
    "கூரை மற்றும் வணிக சோலார் ஆலைகளுக்கு, பேனல் வரிசை, கட்டமைப்புகள் மற்றும் இன்வெர்ட்டர்களை எர்த் செய்து, பேனல்களுக்கு நிழல் விழாத மின்னல் பாதுகாப்பைச் சேர்க்கிறோம்.",
  "For turbine owners here we provide operation & maintenance, CMC / AMC contracts, gearbox repair, blade patching and lightning damage repair, generator rewinding and bearing replacement, hydraulic and PCB servicing, spare parts and 24x7 breakdown support.":
    "இங்குள்ள காற்றாலை உரிமையாளர்களுக்கு இயக்கம் & பராமரிப்பு, CMC / AMC ஒப்பந்தங்கள், கியர்பாக்ஸ் பழுதுநீக்கம், பிளேடு பேட்சிங் மற்றும் மின்னல் சேத பழுதுநீக்கம், ஜெனரேட்டர் ரீவைண்டிங் மற்றும் பேரிங் மாற்றம், ஹைட்ராலிக் மற்றும் PCB சர்வீஸ், உதிரிபாகங்கள் மற்றும் 24x7 பழுது உதவி வழங்குகிறோம்.",
  "From our base in Kanyakumari District, Tamil Nadu, Henel Engineers Pvt. Ltd. delivers lightning protection, earthing, surge protection, solar energy and windmill services anywhere in India — {n}+ states and regions, from Kanyakumari to Kashmir.":
    "தமிழ்நாட்டின் கன்னியாகுமரி மாவட்டத்தில் உள்ள எங்கள் தளத்திலிருந்து, ஹெனல் இன்ஜினியர்ஸ் பிரைவேட் லிமிடெட் இந்தியாவில் எங்கும் மின்னல் பாதுகாப்பு, எர்த்திங், சர்ஜ் பாதுகாப்பு, சோலார் மற்றும் காற்றாலை சேவைகளை வழங்குகிறது — கன்னியாகுமரி முதல் காஷ்மீர் வரை {n}+ மாநிலங்கள் மற்றும் பிராந்தியங்கள்.",
  "Gearbox, blade & generator repair": "கியர்பாக்ஸ், பிளேடு & ஜெனரேட்டர் பழுதுநீக்கம்",
  "Generator rewinding and slip ring repair": "ஜெனரேட்டர் ரீவைண்டிங் மற்றும் ஸ்லிப் ரிங் பழுதுநீக்கம்",
  "Gujarat, Maharashtra and Rajasthan are among India’s largest wind and solar markets, with major industrial clusters that need lightning protection and earthing.":
    "குஜராத், மகாராஷ்டிரா மற்றும் ராஜஸ்தான் இந்தியாவின் மிகப்பெரிய காற்றாலை மற்றும் சோலார் சந்தைகளில் அடங்கும்; மின்னல் பாதுகாப்பும் எர்த்திங்கும் தேவைப்படும் பெரிய தொழில் தொகுப்புகள் இங்கு உள்ளன.",
  "Henel Engineers Pvt. Ltd. was incorporated on 17 August 1999 in Aralvaimozhi, Kanyakumari District, and operates from a registered office in Aralvaimozhi and a branch office in Marthandam. Our teams already travel through Tirunelveli and the Kayathar wind belt to reach Tenkasi District.":
    "ஹெனல் இன்ஜினியர்ஸ் பிரைவேட் லிமிடெட் 17 ஆகஸ்ட் 1999 அன்று கன்னியாகுமரி மாவட்டம் ஆரல்வாய்மொழியில் பதிவு செய்யப்பட்டது; ஆரல்வாய்மொழியில் பதிவு அலுவலகமும் மார்த்தாண்டத்தில் கிளை அலுவலகமும் உள்ளன. தென்காசி மாவட்டத்தை அடைய எங்கள் குழுக்கள் ஏற்கனவே திருநெல்வேலி மற்றும் கயத்தாறு காற்றுப் பகுதி வழியாகப் பயணிக்கின்றன.",
  "Henel Engineers Service Areas Across India": "இந்தியா முழுவதும் ஹெனல் இன்ஜினியர்ஸ் சேவைப் பகுதிகள்",
  "Henel Engineers has carried out lightning arrester work in Chennai. Apartment towers, office blocks and hospitals are usually the tallest points in their area, so they need a complete system: an air terminal above the highest point, dedicated down conductors, a low-resistance earthing system and surge protection at the main panel.":
    "ஹெனல் இன்ஜினியர்ஸ் சென்னையில் மின்னல் தடுப்பான் பணிகளை மேற்கொண்டுள்ளது. அடுக்குமாடிக் கோபுரங்கள், அலுவலகக் கட்டடங்கள் மற்றும் மருத்துவமனைகள் பொதுவாக அவற்றின் பகுதியில் மிக உயரமானவை; எனவே அவற்றுக்கு முழுமையான அமைப்பு தேவை: மிக உயரமான புள்ளிக்கு மேல் ஏர் டெர்மினல், தனி டவுன் கண்டக்டர்கள், குறைந்த மின்தடை எர்த்திங் அமைப்பு மற்றும் மெயின் பேனலில் சர்ஜ் பாதுகாப்பு.",
  "Henel Engineers has carried out lightning arrester work in Virudhunagar District. We design the whole system rather than fixing a single rod: the air terminal, down conductors, test joints, earthing and surge protection at the electrical panel.":
    "ஹெனல் இன்ஜினியர்ஸ் விருதுநகர் மாவட்டத்தில் மின்னல் தடுப்பான் பணிகளை மேற்கொண்டுள்ளது. ஒரே ஒரு கம்பியைப் பொருத்துவதற்குப் பதிலாக முழு அமைப்பையும் வடிவமைக்கிறோம்: ஏர் டெர்மினல், டவுன் கண்டக்டர்கள், டெஸ்ட் ஜாயிண்டுகள், எர்த்திங் மற்றும் மின் பேனலில் சர்ஜ் பாதுகாப்பு.",
  "Henel Engineers has carried out windmill work in Tenkasi District. We provide operation and maintenance, repairs, spare parts and 24x7 breakdown support for wind turbines across the district, from the Shencottah gap side to the Sankarankovil area.":
    "ஹெனல் இன்ஜினியர்ஸ் தென்காசி மாவட்டத்தில் காற்றாலைப் பணிகளை மேற்கொண்டுள்ளது. செங்கோட்டைக் கணவாய்ப் பகுதி முதல் சங்கரன்கோவில் பகுதி வரை மாவட்டம் முழுவதும் உள்ள காற்றாலைகளுக்கு இயக்கம் மற்றும் பராமரிப்பு, பழுதுநீக்கம், உதிரிபாகங்கள் மற்றும் 24x7 பழுது உதவி வழங்குகிறோம்.",
  "High-rise buildings often use an ESE lightning arrester on a mast above the roof, because one unit protects a large radius. The final choice depends on a site-specific risk assessment and zone-of-protection calculation.":
    "ஒரே அலகு பெரிய ஆரத்தைப் பாதுகாப்பதால், உயரமான கட்டடங்கள் பெரும்பாலும் கூரைக்கு மேல் கம்பத்தில் ESE மின்னல் தடுப்பானைப் பயன்படுத்துகின்றன. இறுதித் தேர்வு தளத்துக்குரிய இடர் மதிப்பீடு மற்றும் பாதுகாப்பு மண்டலக் கணக்கீட்டைப் பொறுத்தது.",
  "Hospitals, colleges, temples, commercial complexes and factories in Tirunelveli and Palayamkottai, and plants at SIPCOT Gangaikondan, need lightning protection designed for the structure — not just a rod on the roof. We design the system, supply ESE or conventional air terminals, down conductors and earthing, and add surge protection devices at the main panel.":
    "திருநெல்வேலி மற்றும் பாளையங்கோட்டையில் உள்ள மருத்துவமனைகள், கல்லூரிகள், கோயில்கள், வணிக வளாகங்கள் மற்றும் தொழிற்சாலைகள், SIPCOT கங்கைகொண்டானில் உள்ள ஆலைகள் — இவற்றுக்குக் கூரையில் ஒரு கம்பி மட்டுமல்ல, கட்டமைப்புக்கேற்ப வடிவமைக்கப்பட்ட மின்னல் பாதுகாப்பு தேவை. நாங்கள் அமைப்பை வடிவமைத்து, ESE அல்லது சாதாரண ஏர் டெர்மினல்கள், டவுன் கண்டக்டர்கள் மற்றும் எர்த்திங்கை வழங்கி, மெயின் பேனலில் சர்ஜ் பாதுகாப்புச் சாதனங்களைச் சேர்க்கிறோம்.",
  "Houses on high ground, tall or isolated homes and homes with rooftop solar are at higher risk. A lightning arrester with proper earthing, plus a surge protection device at the main board, protects both the structure and the appliances. We can assess your house and recommend the right system.":
    "உயரமான நிலத்தில் உள்ள, உயரமான அல்லது தனித்திருக்கும் வீடுகள் மற்றும் கூரை சோலார் உள்ள வீடுகள் அதிக அபாயத்தில் உள்ளன. சரியான எர்த்திங்குடன் மின்னல் தடுப்பானும் மெயின் போர்டில் சர்ஜ் பாதுகாப்புச் சாதனமும் கட்டடத்தையும் உபகரணங்களையும் பாதுகாக்கும். உங்கள் வீட்டை மதிப்பீடு செய்து சரியான அமைப்பைப் பரிந்துரைக்கிறோம்.",
  "How do I get a quote for my city?": "என் நகரத்துக்கான விலைப்பட்டியலை எப்படிப் பெறுவது?",
};
export default dict;
