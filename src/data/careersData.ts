import { Career } from '../types';

export const CAREERS_DATA: Career[] = [
  {
    id: 'solar-technician',
    title: 'Solar Microgrid & PV Technician',
    titleHi: 'सौर माइक्रोग्रिड एवं पीवी तकनीशियन',
    category: 'Clean Energy & Electrical',
    categoryHi: 'स्वच्छ ऊर्जा एवं इलेक्ट्रिकल',
    isVocational: true,
    shortDescription: 'Installs, tests, and maintains rooftop solar panels, village microgrids, and solar water pumps.',
    shortDescriptionHi: 'छत पर सौर पैनल, ग्रामीण माइक्रोग्रिड और सौर जल पंप स्थापित व रखरखाव करते हैं।',
    fullDescription: 'A vital green livelihood in rural transformation. Solar technicians diagnose wiring, position photovoltaic modules, connect battery storage inverters, and ensure reliable off-grid power for farms and rural homes.',
    fullDescriptionHi: 'ग्रामीण बदलाव में एक महत्वपूर्ण हरित आजीविका। सौर तकनीशियन वायरिंग की जांच करते हैं, सौर पैनल लगाते हैं और खेतों व घरों के लिए निर्बाध बिजली सुनिश्चित करते हैं।',
    icon: 'Sun',
    matchedInterests: ['machines', 'outdoors', 'repairing', 'science', 'technology', 'hands-on'],
    whatTheyDo: [
      { en: 'Assemble rooftop mounting structures and align panels towards optimal sunlight', hi: 'छत पर पैनल ढांचे असेंबल करना और धूप की सही दिशा में लगाना' },
      { en: 'Connect inverters, charge controllers, and lithium-ion or lead-acid batteries', hi: 'इन्वर्टर, चार्ज कंट्रोलर और बैटरी बैंक की वायरिंग व कनेक्शन करना' },
      { en: 'Perform preventive maintenance and solar water pump diagnostics', hi: 'नियमित रखरखाव और सौर कृषि पंपों की जांच करना' }
    ],
    requiredSkills: [
      { en: 'Basic electrical safety & circuit testing', hi: 'बुनियादी विद्युत सुरक्षा एवं परिपथ परीक्षण' },
      { en: 'Multimeter & inverter diagnosis', hi: 'मल्टीमीटर और इन्वर्टर फॉल्ट डायग्नोस्टिक्स' },
      { en: 'Roof mounting & structural assembly', hi: 'छत पर माउंटिंग और ढांचा तैयार करना' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 Pass with Science/Maths', descriptionHi: 'कक्षा 10 उत्तीर्ण (विज्ञान/गणित)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'ITI Electrician or Wireman Trade (1-2 years)', descriptionHi: 'आईटीआई इलेक्ट्रीशियन या वायरमैन ट्रेड (1-2 वर्ष)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Suryamitra Skill Development Program (Govt. NISE certified)', descriptionHi: 'सूर्यमित्र कौशल विकास कार्यक्रम (राष्ट्रीय सौर ऊर्जा संस्थान)' }
    ],
    coursesExams: [
      { en: 'National Trade Certificate (NTC) via NCVT ITI', hi: 'एनसीवीटी आईटीआई द्वारा राष्ट्रीय ट्रेड प्रमाणपत्र' },
      { en: 'Skill Council for Green Jobs (SCGJ) Certification', hi: 'स्किल काउंसिल फॉर ग्रीन जॉब्स (SCGJ) प्रमाणपत्र' }
    ],
    vocationalTraining: [
      { en: 'Suryamitra 3-month free residential training', hi: 'सूर्यमित्र 3 माह का निःशुल्क आवासीय प्रशिक्षण' },
      { en: 'PMKVY Solar PV Installer (Suryamitra)', hi: 'पीएमकेवीवाई सोलर पीवी इंस्टॉलर ट्रेड' }
    ],
    indicativeSalary: '₹18,000 - ₹35,000 / month (or independent contractor)',
    indicativeSalaryHi: '₹18,000 - ₹35,000 / माह (या स्वतंत्र ठेकेदार)',
    growthPotential: 'High — growing village mini-grids and PM-KUSUM solar agricultural pump schemes.',
    growthPotentialHi: 'अत्यधिक — गांव की मिनी-ग्रिड और पीएम-कुसुम सोलर पंप योजना के कारण भारी मांग।',
    pathwaySteps: [
      { step: 1, title: 'Understand Solar Systems', titleHi: 'सौर प्रणाली को समझें', description: 'Learn how sunlight converts to direct current (DC) and alternating current (AC).', descriptionHi: 'सूर्य की रोशनी से बिजली बनने के सिद्धांत सीखें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Learn Electrical Safety & Wiring', titleHi: 'विद्युत सुरक्षा व वायरिंग सीखें', description: 'Practice using multimeter, wire strippers, and personal protective equipment.', descriptionHi: 'मल्टीमीटर और सुरक्षा उपकरणों का व्यावहारिक अभ्यास करें।', duration: '2-4 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete Suryamitra / ITI Trade', titleHi: 'सूर्यमित्र या आईटीआई ट्रेड पूरा करें', description: 'Gain government-recognized certification in Solar PV installation.', descriptionHi: 'सोलर इंस्टॉलेशन में सरकार-मान्यता प्राप्त प्रमाणन प्राप्त करें।', duration: '3-12 months', milestoneType: 'qualification' },
      { step: 4, title: 'Apprenticeship with Solar EPC Company', titleHi: 'सौर कंपनी में अप्रेंटिसशिप', description: 'Join National Apprenticeship Promotion Scheme (NAPS) with a verified installer.', descriptionHi: 'NAPS के तहत सोलर कंपनी में मासिक वजीफे के साथ व्यावहारिक काम करें।', duration: '6-12 months', milestoneType: 'entry' }
    ]
  },
  {
    id: 'organic-farm-manager',
    title: 'Organic Farm Manager & Soil Specialist',
    titleHi: 'जैविक कृषि प्रबंधक एवं मृदा विशेषज्ञ',
    category: 'Agriculture & Environment',
    categoryHi: 'कृषि एवं पर्यावरण',
    isVocational: false,
    shortDescription: 'Guides farmers in organic composting, soil testing, bio-fertilizers, and high-value natural cultivation.',
    shortDescriptionHi: 'किसानों को जैविक खाद, मिट्टी जांच, बायो-फर्टिलाइजर और प्राकृतिक खेती में मार्गदर्शन करते हैं।',
    fullDescription: 'Empowers rural farming clusters to move away from expensive chemical fertilizers. Manages crop rotations, natural pest management (Jeevammrutham/Neemastra), soil carbon enrichment, and FPO organic certification.',
    fullDescriptionHi: 'रासायनिक खादों की लागत घटाकर प्राकृतिक खेती को बढ़ावा देना। फसल चक्र, जीवामृत, मिट्टी की गुणवत्ता सुधार और किसान उत्पादक संगठनों (FPO) का प्रमाणन संभालना।',
    icon: 'Sprout',
    matchedInterests: ['nature', 'outdoors', 'biology', 'helping-people', 'problem-solving'],
    whatTheyDo: [
      { en: 'Test soil samples for pH, organic carbon, nitrogen, and micronutrients', hi: 'मिट्टी के नमूनों का पीएच, जैविक कार्बन और पोषक तत्वों का परीक्षण करना' },
      { en: 'Formulate bio-pesticides and vermicompost for community Farmer Producer Orgs (FPOs)', hi: 'वर्मीकम्पोस्ट और प्राकृतिक कीटनाशक तैयार करवाना' },
      { en: 'Coordinate organic PGS-India or NPOP export certification for village produce', hi: 'गांव के उत्पाद के लिए पीजीएस-इंडिया जैविक प्रमाणन प्रक्रिया कराना' }
    ],
    requiredSkills: [
      { en: 'Soil testing & nutrient budgeting', hi: 'मृदा परीक्षण एवं पोषक तत्व प्रबंधन' },
      { en: 'Bio-fertilizer preparation (Jeevamrut, Ghanjeevamrut)', hi: 'जीवामृत व घनजीवामृत निर्माण' },
      { en: 'Farmer group coordination & record keeping', hi: 'किसान समूह समन्वय एवं रिकॉर्ड रखरखाव' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 with Agriculture / Science', descriptionHi: 'कक्षा 10 या 12 (कृषि या विज्ञान संकाय)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Diploma in Organic Agriculture / BSc Agriculture', descriptionHi: 'जैविक कृषि डिप्लोमा अथवा बीएससी कृषि' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Krishi Vigyan Kendra (KVK) certification', descriptionHi: 'कृषि विज्ञान केंद्र (KVK) से व्यावहारिक प्रशिक्षण' }
    ],
    coursesExams: [
      { en: 'ICAR AIEEA Entrance Exam for BSc Agriculture', hi: 'बीएससी कृषि हेतु आईसीएआर प्रवेश परीक्षा' },
      { en: 'Certificate in Organic Farming from IGNOU / State Agri University', hi: 'इग्नू या राज्य कृषि विश्वविद्यालय से जैविक खेती प्रमाणपत्र' }
    ],
    vocationalTraining: [
      { en: 'Paramparagat Krishi Vikas Yojana (PKVY) local facilitator training', hi: 'परंपरागत कृषि विकास योजना अंतर्गत फैसिलिटेटर ट्रेनिंग' },
      { en: 'National Centre for Organic and Natural Farming workshops', hi: 'राष्ट्रीय जैविक व प्राकृतिक खेती केंद्र कार्यशालाएं' }
    ],
    indicativeSalary: '₹22,000 - ₹45,000 / month (or own profitable organic acreage)',
    indicativeSalaryHi: '₹22,000 - ₹45,000 / माह (या स्वयं का लाभकारी जैविक फार्म)',
    growthPotential: 'Very High — surging national and global demand for certified chemical-free food.',
    growthPotentialHi: 'अति उत्तम — रसायन मुक्त भोजन और प्राकृतिक खेती की देश-विदेश में भारी मांग।',
    pathwaySteps: [
      { step: 1, title: 'Understand Soil Ecology', titleHi: 'मिट्टी की पारिस्थितिकी समझें', description: 'Study micro-organisms, earthworms, and crop nutrition balance.', descriptionHi: 'मिट्टी के सूक्ष्मजीवों और केंचुए खाद के महत्व को जानें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Master Vermicomposting & Bio-inputs', titleHi: 'वर्मीकम्पोस्ट व जैव-इनपुट सीखें', description: 'Setup small trial beds of vermicompost and liquid manure at home/school.', descriptionHi: 'घर या स्कूल में केंचुआ खाद और तरल खाद का प्रायोगिक निर्माण करें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Obtain KVK / Agri Diploma', titleHi: 'केवीके या कृषि डिप्लोमा प्रमाणपत्र', description: 'Complete formal training from Krishi Vigyan Kendra in soil management.', descriptionHi: 'कृषि विज्ञान केंद्र से औपचारिक मृदा प्रबंधन प्रशिक्षण पूरा करें।', duration: '6-12 months', milestoneType: 'qualification' },
      { step: 4, title: 'Work with Village FPO or Agri Enterprise', titleHi: 'एफपीओ या कृषि उद्यम से जुड़ें', description: 'Guide local clusters to produce and market premium organic harvest.', descriptionHi: 'स्थानीय किसान समूहों को जैविक उत्पाद के विपणन में सहायता करें।', duration: '12 months', milestoneType: 'entry' }
    ]
  },
  {
    id: 'drone-agri-operator',
    title: 'Agricultural Drone Operator & Pilot',
    titleHi: 'कृषि ड्रोन संचालक एवं पायलट',
    category: 'Modern Agriculture & Robotics',
    categoryHi: 'आधुनिक कृषि एवं रोबोटिक्स',
    isVocational: true,
    shortDescription: 'Flies DGCA-certified drones for precision spraying of nano-urea, micronutrients, and crop health surveys.',
    shortDescriptionHi: 'डीजीसीए प्रमाणित ड्रोन से नैनो-यूरिया का छिड़काव और फसलों की निगरानी करते हैं।',
    fullDescription: 'One of the fastest rising technical livelihoods in India under the "Kisan Drone" and "Drone Didi" initiatives. Operators save 70% water and 50% chemical wastage by spraying 1 acre of crop in under 10 minutes.',
    fullDescriptionHi: 'भारत में किसान ड्रोन और ड्रोन दीदी पहल के तहत तेजी से बढ़ती तकनीकी आजीविका। 10 मिनट में 1 एकड़ फसल पर छिड़काव कर पानी और लागत की भारी बचत करते हैं।',
    icon: 'Radio',
    matchedInterests: ['technology', 'machines', 'outdoors', 'hands-on', 'science'],
    whatTheyDo: [
      { en: 'Calibrate flight missions using GPS waypoints and terrain sensors', hi: 'जीपीएस और सेंसर की मदद से स्वचालित उड़ान योजना तैयार करना' },
      { en: 'Operate drone remote controller with safety checklists and battery management', hi: 'सुरक्षा मानकों के साथ ड्रोन उड़ाना और बैटरी का प्रबंधन करना' },
      { en: 'Mix recommended bio-nutrients and maintain nozzle flow rates', hi: 'अनुशंसित तरल खाद का मिश्रण बनाना और नोजल की जांच करना' }
    ],
    requiredSkills: [
      { en: 'Drone remote flight control & obstacle avoidance', hi: 'ड्रोन उड़ान नियंत्रण व बाधा निवारण' },
      { en: 'LiPo battery charging safety & maintenance', hi: 'लिपो बैटरी चार्जिंग सुरक्षा और रखरखाव' },
      { en: 'Basic crop canopy assessment', hi: 'फसल की स्थिति का बुनियादी आकलन' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 pass with valid Aadhaar/Passport', descriptionHi: 'कक्षा 10 उत्तीर्ण व पहचान पत्र' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Remote Pilot Certificate (RPC) from DGCA-approved Remote Pilot Training Org (RPTO)', descriptionHi: 'डीजीसीए द्वारा अनुमोदित संस्थान से रिमोट पायलट प्रमाणपत्र (RPC)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Subsidized training under Kisan Drone Scheme or IFFCO', descriptionHi: 'किसान ड्रोन योजना या इफ्को के तहत प्रायोजित प्रशिक्षण' }
    ],
    coursesExams: [
      { en: 'DGCA Remote Pilot License Examination', hi: 'डीजीसीए रिमोट पायलट लाइसेंस परीक्षा' },
      { en: 'Agriculture Sector Skill Council Drone Operator Module', hi: 'एग्रीकल्चर सेक्टर स्किल काउंसिल ड्रोन ऑपरेटर कोर्स' }
    ],
    vocationalTraining: [
      { en: '5-Day DGCA Certified Drone Pilot Training Course', hi: '5 दिवसीय डीजीसीए मान्यता प्राप्त पायलट प्रशिक्षण' },
      { en: 'Rural drone maintenance and assembly workshops', hi: 'ड्रोन मरम्मत और असेंबली कार्यशालाएं' }
    ],
    indicativeSalary: '₹25,000 - ₹50,000 / month (or service fee of ₹400-₹600 per acre)',
    indicativeSalaryHi: '₹25,000 - ₹50,000 / माह (या ₹400-₹600 प्रति एकड़ सेवा शुल्क)',
    growthPotential: 'Exponential — backed by central agricultural subsidies and Custom Hiring Centers (CHCs).',
    growthPotentialHi: 'अभूतपूर्व — केंद्र सरकार की ड्रोन सब्सिडी और कस्टम हायरिंग सेंटर्स का बड़ा सहयोग।',
    pathwaySteps: [
      { step: 1, title: 'Learn Flight Principles & Rules', titleHi: 'उड़ान के नियम और सिद्धांत जानें', description: 'Understand airspace categories (Green/Yellow/Red zones) and aerodynamics.', descriptionHi: 'एयरस्पेस वर्गीकरण और सुरक्षा नियमों की समझ बनाएं।', duration: '1 week', milestoneType: 'understand' },
      { step: 2, title: 'Drone Simulator Practice', titleHi: 'ड्रोन सिम्युलेटर पर अभ्यास', description: 'Practice virtual controls and hover maneuvers on flight simulator software.', descriptionHi: 'सॉफ्टवेयर सिम्युलेटर पर रिमोट कंट्रोल का अभ्यास करें।', duration: '2 weeks', milestoneType: 'foundation' },
      { step: 3, title: 'Clear DGCA RPTO Pilot Exam', titleHi: 'डीजीसीए पायलट परीक्षा उत्तीर्ण करें', description: 'Undergo hands-on 5-day flight school and receive official Pilot ID.', descriptionHi: 'मान्यता प्राप्त स्कूल से उड़ान प्रशिक्षण लेकर पायलट लाइसेंस पाएं।', duration: '1 month', milestoneType: 'qualification' },
      { step: 4, title: 'Partner with Local Custom Hiring Center', titleHi: 'कस्टम हायरिंग सेंटर या एफपीओ से अनुबंध', description: 'Deploy spray services for neighboring villages during sowing/growing seasons.', descriptionHi: 'गांव-गांव जाकर किसानों को ड्रोन छिड़काव सेवा उपलब्ध कराएं।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'community-health-officer',
    title: 'Community Health Worker / ANM / ASHA Lead',
    titleHi: 'सामुदायिक स्वास्थ्य कार्यकर्ता / एएनएम / आशा समन्वयक',
    category: 'Healthcare & Public Service',
    categoryHi: 'स्वास्थ्य सेवा एवं लोक सेवा',
    isVocational: false,
    shortDescription: 'Provides primary healthcare, immunization tracking, maternal care, and health education in village clinics.',
    shortDescriptionHi: 'गांव के प्राथमिक स्वास्थ्य केंद्रों में टीकाकरण, मातृ देखभाल और स्वास्थ्य परामर्श प्रदान करते हैं।',
    fullDescription: 'The frontline backbone of rural India’s health system at Ayushman Bharat Health & Wellness Centres. Conducts screening for non-communicable diseases (BP, diabetes), guides pregnant mothers, manages child immunizations, and operates telemedicine tablets.',
    fullDescriptionHi: 'आयुष्मान भारत आरोग्य मंदिरों में ग्रामीण स्वास्थ्य की रीढ़। रक्तचाप, मधुमेह की जांच, गर्भवती महिलाओं की देखभाल, टीकाकरण और टेलीमेडिसिन द्वारा बड़े डॉक्टरों से संपर्क कराना।',
    icon: 'HeartPulse',
    matchedInterests: ['helping-people', 'biology', 'people', 'science'],
    whatTheyDo: [
      { en: 'Administer routine childhood immunizations and record in U-WIN portal', hi: 'बच्चों का नियमित टीकाकरण करना और यू-विन पोर्टल पर दर्ज करना' },
      { en: 'Screen villagers for blood pressure, anemia, and blood glucose', hi: 'रक्तचाप, हीमोग्लोबिन और शुगर की मौके पर प्राथमिक जांच करना' },
      { en: 'Facilitate eSanjeevani tele-consultations between villagers and district specialists', hi: 'ई-संजीवनी के माध्यम से जिला अस्पताल के डॉक्टरों से ऑनलाइन परामर्श कराना' }
    ],
    requiredSkills: [
      { en: 'Maternal & infant care protocols', hi: 'मातृ एवं शिशु देखभाल प्रोटोकॉल' },
      { en: 'Diagnostic device operation (glucometer, BP cuff, pulse oximeter)', hi: 'ग्लूकोमीटर, बीपी मशीन आदि जांच उपकरणों का उपयोग' },
      { en: 'Empathetic communication & counselling', hi: 'संवेदनशील बातचीत और स्वास्थ्य परामर्श' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 with Biology or any stream (for ANM)', descriptionHi: 'कक्षा 12 (जीव विज्ञान या अन्य विषय)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: '2-Year Auxiliary Nurse Midwife (ANM) or 3-Year GNM Diploma', descriptionHi: '2 वर्षीय एएनएम (ANM) अथवा 3 वर्षीय जीएनएम डिप्लोमा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'BSc Nursing for Community Health Officer (CHO) role', descriptionHi: 'सीएचओ पद हेतु बीएससी नर्सिंग डिग्री' }
    ],
    coursesExams: [
      { en: 'State Nursing Council Entrance / Merit Admissions', hi: 'राज्य नर्सिंग काउंसिल प्रवेश व मेरिट चयन' },
      { en: 'National Health Mission (NHM) CHO Exam', hi: 'राष्ट्रीय स्वास्थ्य मिशन (NHM) सीएचओ भर्ती परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Govt. District Hospital ANM Training School', hi: 'जिला अस्पताल एएनएम ट्रेनिंग स्कूल' },
      { en: 'Certificate in Community Health (CCH) 6-month Bridge Course', hi: 'कम्युनिटी हेल्थ (CCH) 6-माह ब्रिज कोर्स' }
    ],
    indicativeSalary: '₹15,000 - ₹38,000 / month (plus performance incentives)',
    indicativeSalaryHi: '₹15,000 - ₹38,000 / माह (साथ में प्रोत्साहन राशि)',
    growthPotential: 'High — continuous hiring under National Health Mission and state health departments.',
    growthPotentialHi: 'स्थिर एवं उच्च — राष्ट्रीय स्वास्थ्य मिशन के अंतर्गत निरंतर नियुक्तियां।',
    pathwaySteps: [
      { step: 1, title: 'Study Human Biology & First Aid', titleHi: 'मानव शरीर विज्ञान व प्राथमिक उपचार', description: 'Build strong fundamentals in nutrition, hygiene, and emergency care.', descriptionHi: 'पोषण, स्वच्छता और प्राथमिक चिकित्सा के मूल सिद्धांत समझें।', duration: '1-2 months', milestoneType: 'understand' },
      { step: 2, title: 'Complete Class 12 with Good Marks', titleHi: 'कक्षा 12 अच्छे अंकों से उत्तीर्ण करें', description: 'Target 50%+ to qualify for government nursing school quotas.', descriptionHi: 'सरकारी नर्सिंग स्कूल में चयन हेतु न्यूनतम 50%+ अंक लाएं।', duration: '1 year', milestoneType: 'foundation' },
      { step: 3, title: 'Enroll in ANM / GNM Diploma', titleHi: 'एएनएम या जीएनएम डिप्लोमा में प्रवेश', description: 'Undergo clinical rotations in labor rooms, pediatrics, and community wards.', descriptionHi: 'जिला अस्पताल में व्यावहारिक प्रशिक्षण पूरा करें।', duration: '2-3 years', milestoneType: 'qualification' },
      { step: 4, title: 'Join State Sub-Center or Health Wellness Center', titleHi: 'स्वास्थ्य उपकेंद्र अथवा आरोग्य मंदिर में योगदान', description: 'Serve your rural block with pride and secure permanent state career scale.', descriptionHi: 'अपने क्षेत्र के प्राथमिक स्वास्थ्य केंद्र में सेवा शुरू करें।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'panchayat-egov-assistant',
    title: 'Panchayat e-Governance & CSC Operator',
    titleHi: 'पंचायत ई-गवर्नेंस एवं सीएससी ऑपरेटर',
    category: 'Digital Services & Public Admin',
    categoryHi: 'डिजिटल सेवाएं एवं लोक प्रशासन',
    isVocational: true,
    shortDescription: 'Delivers citizen services, Aadhaar updates, PM-Kisan KYC, land records, and welfare scheme enrollments.',
    shortDescriptionHi: 'नागरिक सेवाएं, आधार सुधार, पीएम-किसान ई-केवाईसी, खतौनी और सरकारी योजनाओं के आवेदन करते हैं।',
    fullDescription: 'The digital bridge for every village. Operates the Common Service Center (CSC) or Gram Panchayat Secretariat, ensuring elders, women, and farmers receive pension benefits, ration cards, digital certificates, and banking access without traveling 30km to the tehsil.',
    fullDescriptionHi: 'गांव की डिजिटल खिड़की। ग्राम पंचायत या सीएससी केंद्र चलाकर ग्रामीणों को पेंशन, राशन कार्ड, आय-जाति प्रमाण पत्र, खतौनी और बैंकिंग सेवाएं गांव में ही उपलब्ध कराना।',
    icon: 'Monitor',
    matchedInterests: ['technology', 'helping-people', 'business', 'people'],
    whatTheyDo: [
      { en: 'Process online applications for government welfare schemes and pensions', hi: 'सरकारी कल्याणकारी योजनाओं और वृद्धावस्था/विधवा पेंशन के ऑनलाइन आवेदन भरना' },
      { en: 'Issue caste, income, domicile certificates and Bhulekh land extracts', hi: 'जाति, आय, निवास प्रमाण पत्र और भूलेख खतौनी निकालना' },
      { en: 'Provide AePS micro-ATM cash withdrawals and DBT account updates', hi: 'आधार इनेबल्ड पेमेंट सिस्टम (AePS) से नकद निकासी व खाता सीडिंग करना' }
    ],
    requiredSkills: [
      { en: 'Fast computer typing (Hindi & English)', hi: 'कंप्यूटर टाइपिंग (हिंदी एवं अंग्रेजी)' },
      { en: 'State e-district portal and Aadhaar software navigation', hi: 'राज्य ई-डिस्ट्रिक्ट पोर्टल और आधार सॉफ्टवेयर की जानकारी' },
      { en: 'Document scanning, PDF formatting, and digital signatures', hi: 'दस्तावेज स्कैनिंग, पीडीएफ और डिजिटल हस्ताक्षर प्रबंधन' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 in any stream', descriptionHi: 'कक्षा 12 (किसी भी विषय में)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Certificate in Computer Concepts (CCC) or ITI COPA Trade', descriptionHi: 'सीसीसी (CCC) या आईटीआई कोपा (COPA) ट्रेड' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'CSC Village Level Entrepreneur (VLE) registration & exam', descriptionHi: 'सीएससी वीएलई (VLE) पंजीकरण एवं टेली-सेंटर उद्यमी परीक्षा' }
    ],
    coursesExams: [
      { en: 'NIELIT CCC (Course on Computer Concepts) Exam', hi: 'नाइलिट सीसीसी (CCC) परीक्षा' },
      { en: 'Telecentre Entrepreneur Course (TEC) Certification', hi: 'टेली-सेंटर एंटरप्रेन्योर कोर्स (TEC) प्रमाणन' },
      { en: 'UIDAI Aadhaar Operator / Supervisor Exam', hi: 'यूआईडीएआई आधार ऑपरेटर/सुपरवाइजर परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'ITI Computer Operator & Programming Assistant (COPA) 1-year course', hi: 'आईटीआई कोपा (1 वर्षीय ट्रेड)' },
      { en: 'Pradhan Mantri Gramin Digital Saksharta Abhiyan (PMGDISHA)', hi: 'पीएमजीदिशा डिजिटल साक्षरता प्रशिक्षण' }
    ],
    indicativeSalary: '₹18,000 - ₹35,000 / month (via service commissions & Panchayat stipend)',
    indicativeSalaryHi: '₹18,000 - ₹35,000 / माह (कमीशन और पंचायत मानदेय से)',
    growthPotential: 'High — growing digitization of all rural services, land surveys (SVAMITVA), and e-Shram.',
    growthPotentialHi: 'अति उत्तम — स्वामित्व योजना, ई-श्रम और सभी सरकारी सेवाओं के 100% ऑनलाइन होने से निरंतर काम।',
    pathwaySteps: [
      { step: 1, title: 'Learn Typing & Basic Computers', titleHi: 'कंप्यूटर टाइपिंग और बेसिक सीखें', description: 'Master MS Office, Google Docs, Hindi KrutiDev/Mangal typing, and internet browsing.', descriptionHi: 'एमएस ऑफिस और हिंदी/अंग्रेजी टाइपिंग में गति हासिल करें।', duration: '1-2 months', milestoneType: 'understand' },
      { step: 2, title: 'Clear NIELIT CCC Exam', titleHi: 'नाइलिट सीसीसी परीक्षा पास करें', description: 'Obtain the essential government eligibility certificate for computer jobs.', descriptionHi: 'सरकारी कंप्यूटर नौकरियों के लिए अनिवार्य सीसीसी प्रमाणपत्र प्राप्त करें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Get VLE / Panchayat Sahayak ID', titleHi: 'सीएससी वीएलई या पंचायत सहायक चयन', description: 'Register for Telecentre Entrepreneur certification or apply for Gram Panchayat Sahayak.', descriptionHi: 'सीएससी आईडी लें या पंचायत सहायक भर्ती में आवेदन करें।', duration: '2-3 months', milestoneType: 'qualification' },
      { step: 4, title: 'Set Up Rural Citizen Help Point', titleHi: 'ग्रामीण नागरिक सेवा केंद्र संचालित करें', description: 'Equip with laptop, biometric fingerprint scanner, and thermal printer.', descriptionHi: 'लैपटॉप, बायोमेट्रिक स्कैनर और प्रिंटर के साथ केंद्र चलाएं।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'automobile-two-wheeler-ev-tech',
    title: 'Two-Wheeler & EV Service Technician',
    titleHi: 'टू-व्हीलर एवं इलेक्ट्रिक वाहन (EV) मैकेनिक',
    category: 'Automotive & Mechanical',
    categoryHi: 'ऑटोमोटिव एवं मैकेनिकल',
    isVocational: true,
    shortDescription: 'Repairs motorcycles, tractors, scooters, and modern electric two-wheelers in local towns.',
    shortDescriptionHi: 'स्थानीय कस्बों में मोटरसाइकिल, ट्रैक्टर, स्कूटर और नए इलेक्ट्रिक दोपहिया वाहनों की मरम्मत करते हैं।',
    fullDescription: 'Two-wheelers and small tractors are the lifeblood of rural mobility. With electric scooters and e-rickshaws booming in semi-urban belts, technicians who understand both petrol engines and EV battery/motor controllers earn steady, respectable incomes or open their own workshops.',
    fullDescriptionHi: 'ग्रामीण भारत में दोपहिया वाहन और ट्रैक्टर रोजमर्रा के साधन हैं। अब ई-रिक्शा और इलेक्ट्रिक स्कूटर के आने से बीएलडीसी मोटर और बैटरी रिपेयर जानने वाले मैकेनिकों की भारी मांग है।',
    icon: 'Wrench',
    matchedInterests: ['machines', 'repairing', 'hands-on', 'technology'],
    whatTheyDo: [
      { en: 'Troubleshoot internal combustion engine, carburetors, and electronic fuel injectors', hi: 'इंजन, कार्बोरेटर और इलेक्ट्रॉनिक फ्यूल इंजेक्शन की खराबी ठीक करना' },
      { en: 'Diagnose EV BLDC hub motors, throttle controllers, and lithium battery packs', hi: 'इलेक्ट्रिक वाहनों के बीएलडीसी मोटर, कंट्रोलर और बैटरी पैक की जांच करना' },
      { en: 'Overhaul brakes, suspension forks, and wiring harnesses', hi: 'ब्रेक, सस्पेंशन और वायरिंग की संपूर्ण सर्विसिंग करना' }
    ],
    requiredSkills: [
      { en: 'Mechanical disassembly and precision torque tools', hi: 'मैकेनिकल उपकरण और टॉर्क रिंच का सही उपयोग' },
      { en: 'Automotive electrical schematics & sensor testing', hi: 'ऑटोमोटिव वायरिंग डायग्राम और सेंसर टेस्टिंग' },
      { en: 'EV safety & battery balance charging', hi: 'ईवी सुरक्षा और बैटरी बैलेंस चार्जिंग' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 8 or 10 pass', descriptionHi: 'कक्षा 8 या 10 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'ITI Mechanic Motor Vehicle (MMV) or Two-Wheeler Tech (1-2 years)', descriptionHi: 'आईटीआई मैकेनिक मोटर व्हीकल (MMV) ट्रेड' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Specialized 2-month Electric Vehicle Add-on Certificate (ASDC)', descriptionHi: 'ऑटोमोटिव स्किल काउंसिल (ASDC) से ईवी सर्टिफिकेशन' }
    ],
    coursesExams: [
      { en: 'NCVT National Apprenticeship Certificate (NAC)', hi: 'एनसीवीटी राष्ट्रीय अप्रेंटिसशिप प्रमाणपत्र' },
      { en: 'Automotive Skills Development Council (ASDC) EV Technician Exam', hi: 'एएसडीसी ईवी तकनीशियन परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Government ITI MMV trade', hi: 'सरकारी आईटीआई मोटर व्हीकल ट्रेड' },
      { en: 'Hero / Bajaj / TVS skill academy tie-up centers', hi: 'प्रमुख ऑटोमोबाइल कंपनियों के प्रशिक्षण केंद्र' }
    ],
    indicativeSalary: '₹20,000 - ₹40,000 / month (up to ₹60,000+ for independent garage owner)',
    indicativeSalaryHi: '₹20,000 - ₹40,000 / माह (स्वयं के गैरेज से ₹60,000+ तक)',
    growthPotential: 'Very High — surging adoption of e-rickshaws and EV two-wheelers across rural India.',
    growthPotentialHi: 'अति उत्तम — कस्बों और गांवों में ई-रिक्शा और इलेक्ट्रिक बाइक की तेज रफ्तार।',
    pathwaySteps: [
      { step: 1, title: 'Understand 2-Stroke & 4-Stroke Engines', titleHi: 'इंजन कार्यप्रणाली समझें', description: 'Learn how combustion, pistons, valves, and spark plugs operate together.', descriptionHi: 'पिस्टन, वाल्व, स्पार्क प्लग और गियरबॉक्स के सिद्धांत सीखें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Hands-on Garage Apprenticeship', titleHi: 'गैरेज में व्यावहारिक प्रशिक्षण', description: 'Work alongside a master mechanic doing oil changes, clutch plates, and brake liners.', descriptionHi: 'मास्टर मैकेनिक के साथ ऑयल चेंज, क्लच और ब्रेक सर्विसिंग का अभ्यास करें।', duration: '3-6 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete ITI or ASDC EV Course', titleHi: 'आईटीआई या एएसडीसी ईवी कोर्स पूरा करें', description: 'Gain formal qualifications to handle both IC engines and modern electric drivetrains.', descriptionHi: 'पेट्रोल और इलेक्ट्रिक दोनों प्रकार के वाहनों का अधिकृत प्रमाणन लें।', duration: '1 year', milestoneType: 'qualification' },
      { step: 4, title: 'Open Authorized Service Point or Workshop', titleHi: 'अधिकृत सर्विस पॉइंट या वर्कशॉप शुरू करें', description: 'Leverage PMEGP / Mudra loan scheme to purchase diagnostic equipment.', descriptionHi: 'मुद्रा योजना की सहायता से अपनी आधुनिक वर्कशॉप स्थापित करें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'primary-school-educator',
    title: 'Primary School Educator & Anganwadi Mentor',
    titleHi: 'प्राथमिक शिक्षक एवं आंगनवाड़ी मेंटर',
    category: 'Education & Child Development',
    categoryHi: 'शिक्षा एवं बाल विकास',
    isVocational: false,
    shortDescription: 'Builds foundational literacy and numeracy (FLN) for rural children under NIPUN Bharat.',
    shortDescriptionHi: 'निपुण भारत मिशन के तहत ग्रामीण बच्चों की बुनियादी भाषा और गणितीय समझ मजबूत करते हैं।',
    fullDescription: 'Nurtures the minds of the next generation in rural schools. Uses joyful, activity-based learning toys (TLMs), folk stories, and phonetics to make learning fun and keep dropouts at zero.',
    fullDescriptionHi: 'ग्रामीण प्राथमिक विद्यालयों में बच्चों का भविष्य संवारना। खेल-खेल में भाषा और गणित सिखाने के लिए शिक्षण सामग्री (TLM), बाल कविताओं और डिजिटल टूल्स का उपयोग।',
    icon: 'GraduationCap',
    matchedInterests: ['helping-people', 'people', 'art'],
    whatTheyDo: [
      { en: 'Design creative Teaching Learning Materials (TLMs) from low-cost local resources', hi: 'स्थानीय सामग्री से रुचिकर शिक्षण खिलौने और चार्ट तैयार करना' },
      { en: 'Conduct diagnostic reading and numeracy assessments (PRATHAM / ASER style)', hi: 'बच्चों के पठन और गिनती के स्तर का नियमित मूल्यांकन करना' },
      { en: 'Engage parents through School Management Committees (SMCs) to encourage girls education', hi: 'अभिभावक बैठकों के जरिए बालिकाओं की शिक्षा और नियमित उपस्थिति सुनिश्चित करना' }
    ],
    requiredSkills: [
      { en: 'Foundational literacy and numeracy pedagogy', hi: 'बुनियादी साक्षरता और संख्या ज्ञान शिक्षण विधि' },
      { en: 'Patience, storytelling, and classroom management', hi: 'धैर्य, कहानी सुनाना और बाल मनोविज्ञान' },
      { en: 'Basic digital reporting (DIKSHA / UDISE+ portals)', hi: 'दीक्षा और यू-डायस पोर्टल पर कार्य' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 pass with at least 50% marks', descriptionHi: 'कक्षा 12 (न्यूनतम 50% अंकों के साथ)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: '2-Year Diploma in Elementary Education (D.El.Ed / BTC)', descriptionHi: '2 वर्षीय डीएलएड (D.El.Ed / बीटीसी) डिप्लोमा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Qualify State TET or Central Teacher Eligibility Test (CTET)', descriptionHi: 'राज्य टीईटी या केंद्रीय शिक्षक पात्रता परीक्षा (CTET) उत्तीर्ण' }
    ],
    coursesExams: [
      { en: 'Central Teacher Eligibility Test (CTET Paper 1)', hi: 'सीटीईटी (CTET) पेपर 1' },
      { en: 'State D.El.Ed Joint Entrance Exam', hi: 'राज्य डीएलएड संयुक्त प्रवेश परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'District Institute of Education and Training (DIET)', hi: 'जिला शिक्षा एवं प्रशिक्षण संस्थान (DIET)' },
      { en: 'National Institute of Open Schooling (NIOS) D.El.Ed', hi: 'एनआईओएस डीएलएड प्रशिक्षण' }
    ],
    indicativeSalary: '₹22,000 - ₹48,000 / month (Govt. pay scale or private school teacher)',
    indicativeSalaryHi: '₹22,000 - ₹48,000 / माह (सरकारी वेतनमान या प्रतिष्ठित विद्यालय)',
    growthPotential: 'High — continuous requirement under National Education Policy (NEP 2020) and NIPUN Bharat.',
    growthPotentialHi: 'स्थिर और आदरणीय — राष्ट्रीय शिक्षा नीति 2020 के तहत शिक्षकों की निरंतर मांग।',
    pathwaySteps: [
      { step: 1, title: 'Understand Child Psychology', titleHi: 'बाल मनोविज्ञान समझें', description: 'Learn how young children learn best through play, music, and physical objects.', descriptionHi: 'खेल और गतिविधियों द्वारा बच्चों के सीखने के तरीकों को समझें।', duration: '1 month', milestoneType: 'understand' },
      { step: 2, title: 'Score Well in Class 12', titleHi: 'कक्षा 12 में उत्कृष्ट अंक प्राप्त करें', description: 'Focus on language proficiency and foundational mathematics.', descriptionHi: 'भाषा और गणित विषयों पर मजबूत पकड़ बनाएं।', duration: '1 year', milestoneType: 'foundation' },
      { step: 3, title: 'Complete D.El.Ed at DIET', titleHi: 'डीएलएड प्रशिक्षण पूरा करें', description: 'Complete practical school internships teaching real village classrooms.', descriptionHi: 'प्रशिक्षु शिक्षक के रूप में प्राथमिक स्कूल में वास्तविक कक्षाएं लें।', duration: '2 years', milestoneType: 'qualification' },
      { step: 4, title: 'Clear CTET / State TET & Join School', titleHi: 'टीईटी पास कर शिक्षक बनें', description: 'Clear eligibility exam and secure appointment as assistant primary teacher.', descriptionHi: 'पात्रता परीक्षा उत्तीर्ण कर सहायक अध्यापक के रूप में कार्यभार ग्रहण करें।', duration: '6 months', milestoneType: 'entry' }
    ]
  },
  {
    id: 'food-processing-dairy-specialist',
    title: 'Food Processing & Dairy Technician',
    titleHi: 'खाद्य प्रसंस्करण एवं दुग्ध तकनीशियन',
    category: 'Agri-Business & Food Technology',
    categoryHi: 'कृषि व्यवसाय एवं खाद्य तकनीक',
    isVocational: true,
    shortDescription: 'Operates milk chilling centers, pasteurizers, and processing plants for fruits, pickles, and spices.',
    shortDescriptionHi: 'दूध चिलिंग सेंटर, पाश्चराइजर और फल, अचार, मसालों के प्रसंस्करण संयंत्र चलाते हैं।',
    fullDescription: 'Adds value to farm products right at the village cluster level. Prevents crop rot by processing tomatoes into puree, mangoes into pulp, and milk into paneer, ghee, and curd for Amul, Mother Dairy, or state milk federations.',
    fullDescriptionHi: 'गांव के स्तर पर ही कृषि उत्पादों का मूल्य संवर्धन करना। टमाटर की प्यूरी, आम का पल्प और दूध से पनीर, घी, दही बनाकर अमूल या राज्य दुग्ध संघों में आपूर्ति करना।',
    icon: 'PackageCheck',
    matchedInterests: ['business', 'machines', 'science', 'nature'],
    whatTheyDo: [
      { en: 'Test milk fat and SNF percentages using automated milk analyzers', hi: 'स्वचालित मिल्क एनालाइजर से दूध का फैट और एसएनएफ जांचना' },
      { en: 'Operate pasteurization tanks, cream separators, and vacuum packaging machines', hi: 'पाश्चराइजेशन, क्रीम सेपरेटर और पैकेजिंग मशीनों का संचालन करना' },
      { en: 'Maintain food safety and hygiene protocols mandated by FSSAI', hi: 'एफएसएसएआई (FSSAI) स्वच्छता और गुणवत्ता मानकों का पालन सुनिश्चित करना' }
    ],
    requiredSkills: [
      { en: 'Milk testing & quality control (Gerber/Electronic)', hi: 'दुग्ध परीक्षण एवं गुणवत्ता नियंत्रण' },
      { en: 'Food safety standards (FSSAI norms)', hi: 'खाद्य सुरक्षा मानक' },
      { en: 'Cold chain equipment maintenance', hi: 'कोल्ड चेन उपकरणों का संचालन' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 with Science/Agriculture', descriptionHi: 'कक्षा 10 या 12 (विज्ञान/कृषि)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Diploma in Dairy Technology or Food Processing (1-2 years)', descriptionHi: 'डेयरी टेक्नोलॉजी या फूड प्रोसेसिंग में डिप्लोमा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'PM Formalisation of Micro food processing Enterprises (PMFME) certification', descriptionHi: 'पीएमएफएमई (PMFME) योजना अंतर्गत प्रमाणन' }
    ],
    coursesExams: [
      { en: 'Indian Dairy Association (IDA) Student Certification', hi: 'इंडियन डेयरी एसोसिएशन छात्र प्रमाणन' },
      { en: 'FSSAI Food Safety Supervisor Certification (FoSTaC)', hi: 'एफएसएसएआई फॉस्टैक (FoSTaC) सुपरवाइजर कोर्स' }
    ],
    vocationalTraining: [
      { en: 'National Dairy Research Institute (NDRI) short courses', hi: 'राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI) प्रशिक्षण' },
      { en: 'ITI Agro-Processing Trade', hi: 'आईटीआई एग्रो-प्रोसेसिंग ट्रेड' }
    ],
    indicativeSalary: '₹20,000 - ₹38,000 / month (or profitable local micro-dairy enterprise)',
    indicativeSalaryHi: '₹20,000 - ₹38,000 / माह (या स्वयं की सफल डेयरी यूनिट)',
    growthPotential: 'High — supported by PMFME subsidies offering 35% capital grant up to ₹10 Lakhs.',
    growthPotentialHi: 'अति उत्तम — पीएमएफएमई योजना के तहत 35% सरकारी सब्सिडी उपलब्ध।',
    pathwaySteps: [
      { step: 1, title: 'Learn Dairy & Food Preservation Basics', titleHi: 'खाद्य संरक्षण के मूल सिद्धांत', description: 'Understand pasteurization, fermentation, and microbial safety.', descriptionHi: 'पाश्चुरीकरण और जीवाणु नियंत्रण की विधि समझें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Get FoSTaC Food Safety Certified', titleHi: 'FSSAI सुरक्षा प्रमाणन प्राप्त करें', description: 'Complete online/offline Food Safety Supervisor course.', descriptionHi: 'एफएसएसएआई से मान्यता प्राप्त स्वच्छता सुपरवाइजर बनें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Complete Dairy Tech Diploma / ITI', titleHi: 'डेयरी टेक्नोलॉजी डिप्लोमा पूरा करें', description: 'Learn plant operations, cold chain logistics, and quality assurance.', descriptionHi: 'प्लांट संचालन और कोल्ड चेन प्रबंधन में दक्षता हासिल करें।', duration: '1 year', milestoneType: 'qualification' },
      { step: 4, title: 'Lead Dairy Cooperative or Micro-Unit', titleHi: 'सहकारी समिति या स्वयं की यूनिट शुरू करें', description: 'Operate local Bulk Milk Cooler (BMC) center or processed snack brand.', descriptionHi: 'गांव के बल्क मिल्क कूलर सेंटर का संचालन करें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'handloom-textile-designer',
    title: 'Handloom Weaver & Contemporary Textile Artisan',
    titleHi: 'हथकरघा बुनकर एवं आधुनिक वस्त्र शिल्पी',
    category: 'Crafts, Design & Livelihood',
    categoryHi: 'हस्तशिल्प, डिजाइन एवं आजीविका',
    isVocational: true,
    shortDescription: 'Weaves traditional fabrics (Khadi, Tussar, Ikat, Chanderi) with contemporary colors and designs for national brands.',
    shortDescriptionHi: 'खादी, तसर, इकत, चंदेरी जैसे पारंपरिक वस्त्रों को आधुनिक रंगों और डिजाइनों में तैयार करते हैं।',
    fullDescription: 'Brings traditional heritage weaving into premium eco-conscious fashion. Uses jacquard cards, natural herbal dyes, and digital mood boards to sell directly to FabIndia, craft e-commerce, or global exhibitions via weaver producer companies.',
    fullDescriptionHi: 'पारंपरिक विरासत को आधुनिक फैशन से जोड़ना। प्राकृतिक रंगों और जैकार्ड लूम के उपयोग से फैबइंडिया, ऑनलाइन प्लेटफॉर्म और अंतरराष्ट्रीय प्रदर्शनियों के लिए उच्च गुणवत्ता वस्त्र तैयार करना।',
    icon: 'Palette',
    matchedInterests: ['art', 'hands-on', 'creating', 'business'],
    whatTheyDo: [
      { en: 'Set up warp and weft counts on pit looms and frame looms', hi: 'लूम पर ताना-बाना सेट करना और धागों की गिनती करना' },
      { en: 'Dye cotton, silk, and wool with natural plant-based indigo and madder', hi: 'नील, मंजीठ और प्राकृतिक रंगों से धागों की रंगाई करना' },
      { en: 'Draft geometric patterns and calculate yardage and material costs', hi: 'डिजाइन ग्राफ तैयार करना और कपड़े की लागत का हिसाब लगाना' }
    ],
    requiredSkills: [
      { en: 'Loom operation & tension adjustment', hi: 'हथकरघा संचालन व तनाव संतुलन' },
      { en: 'Natural dyeing & color matching', hi: 'प्राकृतिक रंगाई और रंग मिलान' },
      { en: 'Textile costing & smartphone marketing', hi: 'कपड़े की लागत निर्धारण और ऑनलाइन बिक्री' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 8 or 10 pass', descriptionHi: 'कक्षा 8 या 10 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Diploma in Handloom & Textile Technology (DHTT) at Indian Institute of Handloom Technology (IIHT)', descriptionHi: 'भारतीय हथकरघा प्रौद्योगिकी संस्थान (IIHT) से 3-वर्षीय डिप्लोमा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'National Institute of Design / NIFT Craft Cluster workshops', descriptionHi: 'निफ्ट (NIFT) क्राफ्ट क्लस्टर कार्यशालाएं' }
    ],
    coursesExams: [
      { en: 'IIHT Joint Entrance Examination (DHTT)', hi: 'आईआईएचटी डिप्लोमा प्रवेश परीक्षा' },
      { en: 'Textile Sector Skill Council (TSC) Master Weaver Assessment', hi: 'टेक्सटाइल सेक्टर स्किल काउंसिल मास्टर वीवर परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Weavers Service Centre (WSC) skill upgradation training', hi: 'बुनकर सेवा केंद्र (WSC) कौशल उन्नयन कार्यक्रम' },
      { en: 'Samarth Scheme for Capacity Building in Textile Sector', hi: 'समर्थ योजना के तहत निःशुल्क कौशल प्रशिक्षण' }
    ],
    indicativeSalary: '₹18,000 - ₹42,000 / month (much higher for award-winning master artisans)',
    indicativeSalaryHi: '₹18,000 - ₹42,000 / माह (मास्टर कारीगरों के लिए इससे भी अधिक)',
    growthPotential: 'Strong — surging export demand for sustainable, zero-carbon, handmade luxury textiles.',
    growthPotentialHi: 'उत्तम — पर्यावरण अनुकूल और हस्तनिर्मित कपड़ों की अंतरराष्ट्रीय स्तर पर भारी मांग।',
    pathwaySteps: [
      { step: 1, title: 'Learn Fiber & Weave Basics', titleHi: 'धागे और बुनाई की पहचान', description: 'Study cotton counts, silk filaments, plain weave, and twill.', descriptionHi: 'सूत के नंबर, रेशम के प्रकार और बुनाई के तरीके सीखें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Apprentice at Local Loom Shed', titleHi: 'स्थानीय करघे पर अभ्यास', description: 'Practice shuttle throwing, pedaling rhythm, and bobbins winding.', descriptionHi: 'शटल चलाने और ताने-बाने के तालमेल का अभ्यास करें।', duration: '3 months', milestoneType: 'foundation' },
      { step: 3, title: 'DHTT Diploma or Samarth Certification', titleHi: 'आईआईएचटी डिप्लोमा या समर्थ प्रमाणपत्र', description: 'Master jacquard mechanics, computer-aided textile design (CATD).', descriptionHi: 'कंप्यूटर एडेड डिजाइन और जैकार्ड बुनाई में निपुणता हासिल करें।', duration: '1-3 years', milestoneType: 'qualification' },
      { step: 4, title: 'Register with India Handloom Brand', titleHi: 'इंडिया हैंडलूम ब्रांड में पंजीकरण', description: 'Sell authentic tagged craft products directly to fashion houses.', descriptionHi: 'इंडिया हैंडलूम ब्रांड टैग के साथ सीधे फैशन ब्रांड्स को उत्पाद बेचें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'veterinary-livestock-inspector',
    title: 'Veterinary Field Assistant & Livestock Inspector',
    titleHi: 'पशु चिकित्सा सहायक एवं पशुधन निरीक्षक',
    category: 'Animal Husbandry & Vet Care',
    categoryHi: 'पशुपालन एवं पशु चिकित्सा',
    isVocational: true,
    shortDescription: 'Assists village veterinarians in cattle vaccination, artificial insemination, and fodder management.',
    shortDescriptionHi: 'पशु चिकित्सकों के साथ मिलकर मवेशियों का टीकाकरण, कृत्रिम गर्भाधान और प्राथमिक उपचार करते हैं।',
    fullDescription: 'Essential for rural household economic resilience. In India, milch cows and buffaloes represent critical family assets. Livestock assistants provide doorstep animal deworming, detect mastitis early, perform artificial insemination (AI) for superior breeds, and register cattle on the INAPH portal.',
    fullDescriptionHi: 'ग्रामीण परिवारों की आर्थिक सुरक्षा का आधार। गाय, भैंस, बकरियों का घर-घर जाकर टीकाकरण, कृत्रिम गर्भाधान, पेट के कीड़े की दवा देना और ' +
      'बीमारियों का शुरुआती उपचार करना।',
    icon: 'Stethoscope',
    matchedInterests: ['nature', 'helping-people', 'biology', 'outdoors'],
    whatTheyDo: [
      { en: 'Administer Foot & Mouth Disease (FMD) and Brucellosis vaccines to cattle', hi: 'खुरपका-मुंहपका और ब्रुसलोसिस का टीकाकरण करना' },
      { en: 'Perform liquid nitrogen straw handling and Artificial Insemination (AI)', hi: 'लिक्विड नाइट्रोजन में सीमन सुरक्षित रखना और कृत्रिम गर्भाधान करना' },
      { en: 'Tag livestock with 12-digit ear tags and update the national Pashu Aadhaar database', hi: 'पशुओं के कानों में 12 अंकों का टैग लगाना और पशु आधार पर दर्ज करना' }
    ],
    requiredSkills: [
      { en: 'Cattle restraint and safe handling', hi: 'पशुओं को सुरक्षित तरीके से संभालना' },
      { en: 'Subcutaneous and intramuscular injections', hi: 'टीकाकरण और इंजेक्शन लगाने की सही तकनीक' },
      { en: 'Semen cryopreservation handling', hi: 'सीमन स्ट्रॉ का सही तापमान पर रखरखाव' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 with Biology / Agriculture / Science', descriptionHi: 'कक्षा 12 (जीव विज्ञान / कृषि / विज्ञान)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: '2-Year Diploma in Animal Husbandry / Veterinary Pharmacy (DAHVP)', descriptionHi: '2 वर्षीय पशुपालन डिप्लोमा (DAH) या वेटरनरी फार्मासिस्ट' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'State Animal Husbandry Department competitive exam', descriptionHi: 'राज्य पशुपालन विभाग की प्रतियोगी परीक्षा' }
    ],
    coursesExams: [
      { en: 'State Veterinary University Diploma Entrance Test (RPVT / DAHET)', hi: 'राज्य पशु चिकित्सा विश्वविद्यालय डिप्लोमा प्रवेश परीक्षा' },
      { en: 'National Dairy Development Board (NDDB) Maitri Training Certificate', hi: 'एनडीडीबी मैत्री (MAITRI) कृत्रिम गर्भाधान प्रमाणपत्र' }
    ],
    vocationalTraining: [
      { en: 'Multi-purpose AI Technician in Rural India (MAITRI) 3-month course', hi: 'मैत्री (MAITRI) 3-माह का निःशुल्क आवासीय कोर्स' },
      { en: 'State Veterinary Training Institutes', hi: 'राज्य पशु चिकित्सा प्रशिक्षण संस्थान' }
    ],
    indicativeSalary: '₹18,000 - ₹34,000 / month (plus doorstep insemination service fees)',
    indicativeSalaryHi: '₹18,000 - ₹34,000 / माह (साथ में घर-घर सेवा शुल्क)',
    growthPotential: 'High — Rashtriya Gokul Mission is funding thousands of MAITRI technicians across all blocks.',
    growthPotentialHi: 'अति उत्तम — राष्ट्रीय गोकुल मिशन के तहत हर ब्लॉक में मैत्री कार्यकर्ताओं की भारी मांग।',
    pathwaySteps: [
      { step: 1, title: 'Learn Basic Livestock Biology', titleHi: 'पशु शरीर विज्ञान व आहार जानें', description: 'Study cattle digestion, reproductive cycles, and milk yield factors.', descriptionHi: 'गाय-भैंस के प्रजनन चक्र और संतुलित पोषण के बारे में समझें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Observe Local Vet Hospital Operations', titleHi: 'पशु चिकित्सालय में अभ्यास', description: 'Volunteer at nearby veterinary dispensary to understand common ailments.', descriptionHi: 'स्थानीय पशु अस्पताल में डॉक्टरों के साथ व्यावहारिक काम देखें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Complete MAITRI or DAH Diploma', titleHi: 'मैत्री या पशुपालन डिप्लोमा पूरा करें', description: 'Get certified in artificial insemination and cryogenic flask maintenance.', descriptionHi: 'कृत्रिम गर्भाधान और लिक्विड नाइट्रोजन हैंडलिंग का अधिकृत लाइसेंस लें।', duration: '3-12 months', milestoneType: 'qualification' },
      { step: 4, title: 'Operate Block Animal Health Route', titleHi: 'ब्लॉक में पशु स्वास्थ्य सेवा शुरू करें', description: 'Provide doorstep AI, ear-tagging, and emergency first aid across 5-8 villages.', descriptionHi: '5-8 गांवों के समूह में पशुपालकों को घर पर सेवाएं उपलब्ध कराएं।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'forest-guard-wildlife-watcher',
    title: 'Forest Guard & Conservation Ranger',
    titleHi: 'वन रक्षक एवं वन्यजीव संरक्षक',
    category: 'Environment, Forestry & Defense',
    categoryHi: 'पर्यावरण, वानिकी एवं सुरक्षा',
    isVocational: false,
    shortDescription: 'Protects reserved forests, monitors wildlife trails, prevents illegal timber cutting and forest fires.',
    shortDescriptionHi: 'आरक्षित वनों की सुरक्षा, वन्यजीवों की निगरानी, अवैध कटाई और दावानल (जंगल की आग) की रोकथाम करते हैं।',
    fullDescription: 'Guardians of India’s biodiversity. Forest guards patrol beats on foot, use camera traps, manage village eco-development committees (EDCs), and rescue stranded wild animals with bravery and deep love for nature.',
    fullDescriptionHi: 'भारत की प्राकृतिक धरोहर के रक्षक। पैदल गश्त करना, कैमरा ट्रैप लगाना, जंगल की आग पर नियंत्रण, वन अधिकार समितियों के साथ मिलकर काम करना और वन्यजीवों की सुरक्षा।',
    icon: 'Trees',
    matchedInterests: ['nature', 'outdoors', 'helping-people'],
    whatTheyDo: [
      { en: 'Patrol assigned forest beats using GPS handheld trackers and compasses', hi: 'जीपीएस और कंपास से जंगल की सीमाओं पर नियमित गश्त करना' },
      { en: 'Install camera traps and record pugmarks for tiger, elephant, and leopard censuses', hi: 'कैमरा ट्रैप लगाना और वन्यजीवों के पगमार्क दर्ज करना' },
      { en: 'Create fire lines and combat seasonal forest blazes with blowers and beaters', hi: 'दावानल से बचाव के लिए फायर लाइन बनाना और आग बुझाना' }
    ],
    requiredSkills: [
      { en: 'High physical stamina & outdoor survival', hi: 'शारीरिक सहनशक्ति और जंगल में जीवित रहने के कौशल' },
      { en: 'Wildlife track identification & GPS mapping', hi: 'वन्यजीवों के पदचिह्न पहचान और जीपीएस मैपिंग' },
      { en: 'Forest law (Wildlife Protection Act) fundamentals', hi: 'वन्यजीव संरक्षण अधिनियम के बुनियादी नियम' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 pass from a recognized board', descriptionHi: 'कक्षा 10 या 12 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Physical fitness training (25km walk in 4 hours for men, 14km for women)', descriptionHi: 'शारीरिक दक्षता परीक्षा (पैदल चाल और दौड़)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'State Subordinate Staff Selection Commission Forest Guard Exam', descriptionHi: 'राज्य कर्मचारी चयन आयोग वन रक्षक सीधी भर्ती परीक्षा' }
    ],
    coursesExams: [
      { en: 'State Forest Department Recruitment Examination', hi: 'राज्य वन विभाग भर्ती परीक्षा' },
      { en: 'Physical Efficiency Test (PET) & Medical Standard Test', hi: 'शारीरिक दक्षता एवं मेडिकल परीक्षण' }
    ],
    vocationalTraining: [
      { en: 'State Foresters Training Academy (6-month residential training)', hi: 'राज्य वानिकी प्रशिक्षण संस्थान (6 माह आवासीय प्रशिक्षण)' },
      { en: 'Wildlife Institute of India (WII) field modules', hi: 'भारतीय वन्यजीव संस्थान (WII) फील्ड प्रशिक्षण' }
    ],
    indicativeSalary: '₹21,700 - ₹44,000 / month (Level-3 / Level-4 Govt. Pay Scale + Uniform Allowance)',
    indicativeSalaryHi: '₹21,700 - ₹44,000 / माह (सरकारी वेतनमान + वर्दी भत्ता)',
    growthPotential: 'Stable Government Service — promotion to Forester and Deputy Ranger.',
    growthPotentialHi: 'स्थिर एवं प्रतिष्ठित — वन दरोगा और डिप्टी रेंजर पद पर पदोन्नति के स्पष्ट अवसर।',
    pathwaySteps: [
      { step: 1, title: 'Build Physical Endurance', titleHi: 'शारीरिक फिटनेस तैयार करें', description: 'Practice daily long-distance walking, running, and bodyweight exercises.', descriptionHi: 'दैनिक दौड़ और लंबी पैदल चाल का अभ्यास करें।', duration: '3-6 months', milestoneType: 'understand' },
      { step: 2, title: 'Study General Knowledge & Science', titleHi: 'सामान्य ज्ञान व विज्ञान की तैयारी', description: 'Prepare for written exam: Indian geography, environment, math, and reasoning.', descriptionHi: 'भूगोल, पर्यावरण, सामान्य विज्ञान और गणित की लिखित परीक्षा की तैयारी करें।', duration: '6 months', milestoneType: 'foundation' },
      { step: 3, title: 'Pass Written & Physical Tests', titleHi: 'लिखित व शारीरिक परीक्षा उत्तीर्ण करें', description: 'Clear cutoff and complete the endurance walk within time.', descriptionHi: 'कट-ऑफ अंक प्राप्त कर 4 घंटे की शारीरिक चाल परीक्षा पास करें।', duration: '3 months', milestoneType: 'qualification' },
      { step: 4, title: 'Complete Forest Academy Training', titleHi: 'वानिकी अकादमी प्रशिक्षण', description: 'Undergo weapon handling, fire fighting, and wildlife law training before beat posting.', descriptionHi: 'अकादमी में 6 माह का प्रशिक्षण पूरा कर वन बीट पर पदभार संभालें।', duration: '6 months', milestoneType: 'entry' }
    ]
  },
  {
    id: 'mobile-hardware-repair-tech',
    title: 'Smartphone & Tablet Hardware Technician',
    titleHi: 'स्मार्टफोन एवं टैबलेट हार्डवेयर तकनीशियन',
    category: 'Electronics & Digital Hardware',
    categoryHi: 'इलेक्ट्रॉनिक्स एवं डिजिटल हार्डवेयर',
    isVocational: true,
    shortDescription: 'Diagnoses SMD circuits, replaces cracked screens, solders charging ICs, and unlocks firmware.',
    shortDescriptionHi: 'सर्किट जांचना, टूटी स्क्रीन बदलना, चार्जिंग आईसी सोल्डरिंग और सॉफ्टवेयर फ्लैशिंग करते हैं।',
    fullDescription: 'Every Indian village has hundreds of smartphones. When a phone drops in water, stops charging, or has a shattered glass, villagers need a trustworthy neighborhood technician rather than traveling to the city and waiting for weeks. High margin, high dignity technical trade.',
    fullDescriptionHi: 'हर गांव और कस्बे में सैकड़ों स्मार्टफोन हैं। स्क्रीन टूटने, चार्जिंग न होने या पानी में गिरने पर तुरंत ठीक करने वाले कुशल कारीगर की रोज जरूरत होती है। कम निवेश में अधिक कमाई वाली आत्मनिर्भर आजीविका।',
    icon: 'Smartphone',
    matchedInterests: ['machines', 'repairing', 'technology', 'hands-on'],
    whatTheyDo: [
      { en: 'Desolder and replace micro-USB / Type-C charging ports with hot air rework stations', hi: 'हॉट एयर गन से चार्जिंग पोर्ट और छोटे पार्ट्स को सुरक्षित बदलना' },
      { en: 'Delaminate broken glass and paste new AMOLED/LCD touch displays using OCA machines', hi: 'ओसीए मशीन से स्क्रीन की ग्लास और डिस्प्ले बदलना' },
      { en: 'Trace short circuits on smartphone motherboards using digital multimeters and schematics', hi: 'मल्टीमीटर से मदरबोर्ड पर शॉर्ट सर्किट और कंपोनेंट की खराबी पकड़ना' }
    ],
    requiredSkills: [
      { en: 'Micro-soldering & hot air gun control', hi: 'बारीक सोल्डरिंग और हॉट एयर गन का नियंत्रण' },
      { en: 'Mobile circuit tracing & schematics reading', hi: 'मोबाइल सर्किट डायग्राम पढ़ना' },
      { en: 'Firmware flashing & bootloader recovery', hi: 'सॉफ्टवेयर फ्लैशिंग और डेटा बैकअप' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 8 or 10 pass', descriptionHi: 'कक्षा 8 या 10 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: '3-Month Intensive Chip-Level Mobile Repair Course', descriptionHi: '3-माह का चिप-लेवल मोबाइल रिपेयरिंग कोर्स' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Electronics Sector Skills Council of India (ESSCI) Certification', descriptionHi: 'इलेक्ट्रॉनिक्स सेक्टर स्किल काउंसिल (ESSCI) प्रमाणन' }
    ],
    coursesExams: [
      { en: 'ESSCI Mobile Phone Hardware Repair Technician (NSQF Level 4)', hi: 'ईएसएससीआई मोबाइल फोन हार्डवेयर तकनीशियन परीक्षा' },
      { en: 'ITI Electronic Mechanic Trade Examination', hi: 'आईटीआई इलेक्ट्रॉनिक मैकेनिक ट्रेड परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Pradhan Mantri Kaushal Kendra (PMKK) free mobile repair batches', hi: 'प्रधानमंत्री कौशल केंद्र (PMKK) निःशुल्क मोबाइल रिपेयर बैच' },
      { en: 'RSETI (Rural Self Employment Training Institute) Mobile Repairing', hi: 'आरसेटी (RSETI) ग्रामीण स्वरोजगार प्रशिक्षण' }
    ],
    indicativeSalary: '₹20,000 - ₹45,000 / month (or independent shop profit ₹35,000 - ₹70,000)',
    indicativeSalaryHi: '₹20,000 - ₹45,000 / माह (स्वयं की दुकान पर ₹35,000 - ₹70,000+)',
    growthPotential: 'Very High — smartphone density in rural India continues to expand rapidly.',
    growthPotentialHi: 'अति उत्तम — 5G फोन और बजट स्मार्टफोन की संख्या गांव-गांव तेजी से बढ़ रही है।',
    pathwaySteps: [
      { step: 1, title: 'Learn Basic Electronics Components', titleHi: 'इलेक्ट्रॉनिक्स कंपोनेंट्स की पहचान', description: 'Understand resistors, capacitors, diodes, transistors, and Ohm’s Law.', descriptionHi: 'रेजिस्टेंस, कैपेसिटर, डायोड और वोल्टेज के नियम समझें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Practice Soldering on Scrap Boards', titleHi: 'सोल्डरिंग और डी-सोल्डरिंग का अभ्यास', description: 'Remove and place small SMDs without overheating delicate PCB traces.', descriptionHi: 'खराब मदरबोर्ड पर सोल्डरिंग आयरन और हॉट एयर गन से अभ्यास करें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Complete RSETI or PMKVY Certification', titleHi: 'आरसेटी या कौशल केंद्र प्रमाणपत्र', description: 'Learn diagnostic power supply behavior and screen separator machines.', descriptionHi: 'डीसी पावर सप्लाई से फॉल्ट पकड़ना और स्क्रीन मशीन चलाना सीखें।', duration: '3 months', milestoneType: 'qualification' },
      { step: 4, title: 'Open Local Repair & Accessory Counter', titleHi: 'स्थानीय रिपेयर एवं एक्सेसरीज काउंटर शुरू करें', description: 'Pair hardware repair with tempered glass, charging cables, and SIM services.', descriptionHi: 'रिपेयर के साथ मोबाइल एक्सेसरीज रखकर अपनी दुकान शुरू करें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'plumbing-micro-irrigation-technician',
    title: 'Plumbing & Micro-Irrigation Technician',
    titleHi: 'प्लंबिंग एवं सूक्ष्म-सिंचाई तकनीशियन',
    category: 'Water Infrastructure & Construction',
    categoryHi: 'जल अवसंरचना एवं निर्माण',
    isVocational: true,
    shortDescription: 'Installs drip irrigation, sprinkler networks, domestic tap pipelines under Jal Jeevan Mission.',
    shortDescriptionHi: 'ड्रिप सिंचाई, फव्वारा प्रणाली और जल जीवन मिशन के तहत हर घर नल की पाइपलाइन लगाते हैं।',
    fullDescription: 'Water is life for agriculture and homes. Micro-irrigation technicians save 60% water for farmers through automated drip lines and fertigation venturi systems. Under Har Ghar Jal (Jal Jeevan Mission), thousands of village technicians maintain pump motors, PVC joints, and water pressure valves.',
    fullDescriptionHi: 'जल जीवन मिशन और ड्रिप सिंचाई के कारण भारी मांग। खेतों में ड्रिप लाइन, फिल्टर और गांवों में पाइपलाइन बिछाने तथा मोटर मरम्मत का कार्य।',
    icon: 'Droplets',
    matchedInterests: ['machines', 'repairing', 'outdoors', 'hands-on'],
    whatTheyDo: [
      { en: 'Lay and solvent-weld CPVC, UPVC, and HDPE underground water pipelines', hi: 'भूमिगत एचडीपीई और पीवीसी पाइपलाइन बिछाना और जोड़ना' },
      { en: 'Install sand media filters, disc filters, and venturi injectors for drip irrigation', hi: 'ड्रिप सिंचाई के फिल्टर, वेंचुरी और ड्रिपर की सही फिटिंग करना' },
      { en: 'Troubleshoot submersible pump pressure loss and non-return valves', hi: 'सबमर्सिबल पंप और प्रेशर वॉल्व की खराबी दूर करना' }
    ],
    requiredSkills: [
      { en: 'Pipe threading, cutting, and electrofusion joining', hi: 'पाइप थ्रेडिंग, कटिंग और फ्यूजन जॉइंट' },
      { en: 'Drip system pressure calculation and emitter spacing', hi: 'ड्रिप सिस्टम में पानी के दबाव का हिसाब' },
      { en: 'Sanitary fittings and water conservation', hi: 'सेनेटरी फिटिंग और जल संरक्षण तकनीक' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 8 or 10 pass', descriptionHi: 'कक्षा 8 या 10 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'ITI Plumber Trade (1 year)', descriptionHi: 'आईटीआई प्लंबर ट्रेड (1 वर्ष)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) micro-irrigation training', descriptionHi: 'पीएमकेएसवाई सूक्ष्म सिंचाई कार्यशाला' }
    ],
    coursesExams: [
      { en: 'Indian Plumbing Skills Council (IPSC) Plumber General NSQF Level 4', hi: 'भारतीय प्लंबिंग स्किल्स काउंसिल प्रमाणन' },
      { en: 'NCVT All India Trade Test (AITT) Plumber', hi: 'एनसीवीटी ऑल इंडिया ट्रेड टेस्ट' }
    ],
    vocationalTraining: [
      { en: 'Government ITI Plumber Course', hi: 'सरकारी आईटीआई प्लंबर कोर्स' },
      { en: 'Jain Irrigation / Netafim company certified applicator workshops', hi: 'ड्रिप सिंचाई कंपनियों के प्रमाणित प्रशिक्षण' }
    ],
    indicativeSalary: '₹18,000 - ₹36,000 / month (high seasonal contract earnings during farm setup)',
    indicativeSalaryHi: '₹18,000 - ₹36,000 / माह (सिंचाई सीजन में अधिक ठेका आय)',
    growthPotential: 'High — supported by Jal Jeevan Mission maintenance and government drip subsidies (up to 80%).',
    growthPotentialHi: 'अति उत्तम — 80% तक ड्रिप सब्सिडी और जल जीवन मिशन के कारण गांवों में नियमित काम।',
    pathwaySteps: [
      { step: 1, title: 'Learn Water Dynamics & Pipe Types', titleHi: 'पाइप प्रकार और जल प्रवाह समझें', description: 'Study differences between PVC, UPVC, CPVC, and GI pipes.', descriptionHi: 'विभिन्न प्रकार के पाइपों और पानी के दबाव को समझें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Master Cutting, Bending & Jointing', titleHi: 'कटिंग और फिटिंग का अभ्यास', description: 'Practice leak-proof joints with Teflon tape, solvent cement, and compression fittings.', descriptionHi: 'लीकेज-रहित जोड़ और वाल्व फिटिंग का अभ्यास करें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Complete ITI or IPSC Certification', titleHi: 'आईटीआई या प्लंबिंग काउंसिल प्रमाणपत्र', description: 'Learn commercial plumbing blueprints and automatic irrigation timers.', descriptionHi: 'प्लंबिंग ब्लूप्रिंट पढ़ना और स्वचालित सिंचाई टाइमर लगाना सीखें।', duration: '6-12 months', milestoneType: 'qualification' },
      { step: 4, title: 'Join Pani Samiti or Farm Contractor', titleHi: 'पानी समिति या सिंचाई ठेकेदार से जुड़ें', description: 'Maintain village drinking water tanks or install drip networks for orchards.', descriptionHi: 'गांव की पानी समिति से जुड़ें या बागवानी किसानों के लिए काम करें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'civil-surveyor-land-records',
    title: 'Civil Surveyor & GIS Land Mapper',
    titleHi: 'सिविल सर्वेयर एवं जीआईएस भूमि मानचित्रक',
    category: 'Engineering & Construction',
    categoryHi: 'इंजीनियरिंग एवं निर्माण',
    isVocational: true,
    shortDescription: 'Uses Total Station, DGPS, and QGIS mapping software for rural roads, canals, and SVAMITVA drone surveys.',
    shortDescriptionHi: 'टोटल स्टेशन, डीजीपीएस और क्यू-जीआईएस से ग्रामीण सड़कों, नहरों और स्वामित्व योजना में नापजोख करते हैं।',
    fullDescription: 'Transforms rural infrastructure. Civil surveyors establish exact boundaries for Pradhan Mantri Gram Sadak Yojana (PMGSY) rural roads, irrigation canals, and land demarcation under the digital SVAMITVA scheme, preventing village land disputes.',
    fullDescriptionHi: 'प्रधानमंत्री ग्राम सड़क योजना, नहरों और स्वामित्व योजना में डिजिटल जमीन नापने का महत्वपूर्ण कार्य। टोटल स्टेशन और जीपीएस से सटीक पैमाइश कर गांव के विवाद खत्म करना।',
    icon: 'Compass',
    matchedInterests: ['machines', 'outdoors', 'technology', 'science'],
    whatTheyDo: [
      { en: 'Operate Electronic Total Station (ETS) and Differential GPS (DGPS) receivers', hi: 'इलेक्ट्रॉनिक टोटल स्टेशन और डीजीपीएस मशीनों का संचालन' },
      { en: 'Plot contour surveys and longitudinal cross-sections in AutoCAD Civil', hi: 'ऑटोकेड में जमीन का नक्शा, ढलान और कंटूर तैयार करना' },
      { en: 'Verify ground control points (GCPs) for Survey of India drone mapping', hi: 'सर्वे ऑफ इंडिया के ड्रोन नक्शों के लिए ग्राउंड कंट्रोल पॉइंट्स सत्यापित करना' }
    ],
    requiredSkills: [
      { en: 'Total Station & Theodolite calibration', hi: 'टोटल स्टेशन और थियोडोलाइट का उपयोग' },
      { en: 'Basic AutoCAD / QGIS software mapping', hi: 'ऑटोकेड या क्यू-जीआईएस में नक्शा बनाना' },
      { en: 'Leveling calculations and bench marks', hi: 'समतलीकरण और बेंचमार्क की गणना' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 with Mathematics and Science', descriptionHi: 'कक्षा 10 (गणित व विज्ञान विषय सहित)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'ITI Surveyor Trade (2 years) or Polytechnic Diploma in Civil Engineering (3 years)', descriptionHi: 'आईटीआई सर्वेयर ट्रेड (2 वर्ष) या सिविल इंजीनियरिंग पॉलिटेक्निक डिप्लोमा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'DGPS & GIS specialized short course', descriptionHi: 'डीजीपीएस और जीआईएस का विशेष व्यावहारिक कोर्स' }
    ],
    coursesExams: [
      { en: 'All India Trade Test (AITT) ITI Surveyor', hi: 'ऑल इंडिया ट्रेड टेस्ट (सर्वेयर)' },
      { en: 'State Subordinate Staff Selection Commission Junior Engineer / Surveyor Exam', hi: 'राज्य कर्मचारी चयन आयोग कनिष्ठ अभियंता/सर्वेयर भर्ती' }
    ],
    vocationalTraining: [
      { en: 'Government ITI Surveyor Trade', hi: 'सरकारी आईटीआई सर्वेयर ट्रेड' },
      { en: 'Survey of India training programs', hi: 'भारतीय सर्वेक्षण विभाग प्रशिक्षण' }
    ],
    indicativeSalary: '₹22,000 - ₹45,000 / month (or independent daily survey rate ₹1,500 - ₹3,000)',
    indicativeSalaryHi: '₹22,000 - ₹45,000 / माह (या ₹1,500 - ₹3,000 दैनिक सर्वे शुल्क)',
    growthPotential: 'High — continuous highway, railway, canal, and digital property card expansion.',
    growthPotentialHi: 'अति उत्तम — भारतमाला, रेलवे और ग्रामीण संपत्ति कार्ड बनाने के कारण भारी अवसर।',
    pathwaySteps: [
      { step: 1, title: 'Understand Trigonometry & Elevation', titleHi: 'त्रिकोणमिति और ढलान की समझ', description: 'Review angles, coordinates, sine/cosine, and scale ratios.', descriptionHi: 'कोण, अक्षांश-देशांतर और पैमाना अनुपात समझें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Learn Chain & Auto Level Surveying', titleHi: 'ऑटो लेवल और चेन सर्वे सीखें', description: 'Practice measuring benchmarks and recording survey field books.', descriptionHi: 'फील्ड बुक भरने और ऑटो लेवल से ऊंचाई नापने का अभ्यास करें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete ITI Surveyor Course', titleHi: 'आईटीआई सर्वेयर ट्रेड पूरा करें', description: 'Master Electronic Total Station (ETS) prism alignment and digital data download.', descriptionHi: 'टोटल स्टेशन मशीन चलाना और कंप्यूटर में डेटा ट्रांसफर सीखें।', duration: '1-2 years', milestoneType: 'qualification' },
      { step: 4, title: 'Work with Construction EPC or State Revenue Dept', titleHi: 'सड़क निर्माण कंपनी या राजस्व विभाग से जुड़ें', description: 'Execute road layout staking or village boundary demarcation.', descriptionHi: 'सड़क या नहर निर्माण साइट पर ले-आउट मार्किंग करें।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'rural-banking-correspondent',
    title: 'Bank Mitra & Rural Financial Advisor',
    titleHi: 'बैंक मित्र एवं ग्रामीण वित्तीय सलाहकार',
    category: 'Finance, Banking & Micro-Credit',
    categoryHi: 'वित्त, बैंकिंग एवं माइक्रो-क्रेडिट',
    isVocational: true,
    shortDescription: 'Provides doorstep savings, PM Jan Dhan accounts, micro-insurance, and KCC crop loan assistance.',
    shortDescriptionHi: 'डोरस्टेप बचत खाता, जन धन, अटल पेंशन, पीएम जीवन ज्योति बीमा और किसान क्रेडिट कार्ड सहायता।',
    fullDescription: 'Brings formal financial dignity to remote villages. Representing public sector banks (SBI, PNB, Baroda) or regional rural banks (Gramin Banks), Bank Mitras help villagers open accounts, deposit farm proceeds safely, and escape predatory village moneylenders.',
    fullDescriptionHi: 'गांव के अंतिम व्यक्ति तक बैंकिंग पहुंचाना। सरकारी व ग्रामीण बैंकों के अधिकृत प्रतिनिधि के रूप में खाता खोलना, किसान क्रेडिट कार्ड फॉर्म भरवाना और साहूकारों से मुक्ति दिलाना।',
    icon: 'Landmark',
    matchedInterests: ['business', 'helping-people', 'people'],
    whatTheyDo: [
      { en: 'Open Zero-Balance Jan Dhan savings accounts with biometric eKYC', hi: 'बायोमेट्रिक ई-केवाईसी से शून्य-बैलेंस जन धन खाता खोलना' },
      { en: 'Facilitate PM Suraksha Bima Yojana (PMSBY) and Atal Pension Yojana enrollments', hi: 'प्रधानमंत्री सुरक्षा बीमा और अटल पेंशन योजना से ग्रामीणों को जोड़ना' },
      { en: 'Help Self Help Groups (SHGs) and farmers prepare Kisan Credit Card (KCC) loan files', hi: 'स्वयं सहायता समूहों और किसानों के केसीसी ऋण आवेदन तैयार कराना' }
    ],
    requiredSkills: [
      { en: 'Basic financial accounting & honesty', hi: 'बुनियादी बहीखाता और ईमानदारी' },
      { en: 'Biometric Micro-ATM device operation', hi: 'माइक्रो-एटीएम और बायोमेट्रिक डिवाइस का उपयोग' },
      { en: 'Financial literacy counselling', hi: 'ग्रामीणों को बचत और बीमा के लाभ समझाना' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 pass in any stream (Commerce or Arts preferred)', descriptionHi: 'कक्षा 10 या 12 (कॉमर्स या अन्य संकाय)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Indian Institute of Banking & Finance (IIBF) BC/BF Certification', descriptionHi: 'आईआईबीएफ (IIBF) बिजनेस कॉरेस्पोंडेंट परीक्षा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Tie-up with Lead Bank or Regional Rural Bank (Gramin Bank)', descriptionHi: 'स्थानीय ग्रामीण बैंक या राष्ट्रीयकृत बैंक से अनुबंध' }
    ],
    coursesExams: [
      { en: 'IIBF Certificate Examination for Business Correspondents / Facilitators', hi: 'आईआईबीएफ बिजनेस कॉरेस्पोंडेंट परीक्षा' },
      { en: 'National Institute of Securities Markets (NISM) Mutual Fund Distributor (optional)', hi: 'एनआईएसएम म्यूचुअल फंड वितरक परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'NABARD Financial Inclusion Literacy programs', hi: 'नाबार्ड वित्तीय समावेशन कार्यक्रम' },
      { en: 'State Rural Livelihood Mission (SRLM) Bank Sakhi training', hi: 'राज्य आजीविका मिशन बैंक सखी प्रशिक्षण' }
    ],
    indicativeSalary: '₹15,000 - ₹32,000 / month (bank retainer + transaction commissions)',
    indicativeSalaryHi: '₹15,000 - ₹32,000 / माह (मानदेय + प्रत्येक लेनदेन पर कमीशन)',
    growthPotential: 'High — expansion of direct benefit transfer (DBT) and micro-credit for rural women SHGs.',
    growthPotentialHi: 'स्थिर एवं सम्मानजनक — सरकारी सब्सिडी और महिला स्वयं सहायता समूहों के विस्तार से निरंतर आय।',
    pathwaySteps: [
      { step: 1, title: 'Understand Banking & DBT Basics', titleHi: 'बैंकिंग और डीबीटी की समझ', description: 'Learn how savings, fixed deposits, interest, and Aadhaar transfers work.', descriptionHi: 'बचत खाता, ब्याज दर और डीबीटी ट्रांसफर की कार्यप्रणाली समझें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Prepare for IIBF BC Exam', titleHi: 'आईआईबीएफ परीक्षा की तैयारी', description: 'Study rural credit norms, AML (Anti-Money Laundering), and customer rights.', descriptionHi: 'ऋण नियम और ग्राहक सुरक्षा से जुड़ी गाइडलाइन पढ़ें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Pass IIBF BC Certification', titleHi: 'आईआईबीएफ प्रमाणपत्र प्राप्त करें', description: 'Take online exam at district center and receive certified BC code.', descriptionHi: 'जिला केंद्र पर ऑनलाइन परीक्षा देकर अधिकृत बीसी कोड पाएं।', duration: '1 month', milestoneType: 'qualification' },
      { step: 4, title: 'Partner with Bank Branch as Bank Mitra', titleHi: 'बैंक शाखा से जुड़कर कार्य शुरू करें', description: 'Receive micro-ATM terminal and start daily service at Gram Panchayat or village shop.', descriptionHi: 'माइक्रो-एटीएम टर्मिनल लेकर गांव में लेनदेन सेवा शुरू करें।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'graphic-designer-dtp-operator',
    title: 'Local Graphic Designer & DTP Specialist',
    titleHi: 'स्थानीय ग्राफिक डिजाइनर एवं डीटीपी ऑपरेटर',
    category: 'Creative, Media & Digital',
    categoryHi: 'क्रिएटिव, मीडिया एवं डिजिटल',
    isVocational: true,
    shortDescription: 'Creates wedding invitations, banners, local business social media posts, and government scheme hoardings.',
    shortDescriptionHi: 'शादी के कार्ड, दुकान के बैनर, सोशल मीडिया पोस्टर और सरकारी योजनाओं के प्रचार बोर्ड बनाते हैं।',
    fullDescription: 'Every small town has flex printers, wedding card shops, and local enterprises needing eye-catching visual communication in Hindi and regional languages. DTP designers master Photoshop, CorelDraw, and Canva to turn ideas into polished local print and digital marketing.',
    fullDescriptionHi: 'हर कस्बे में फ्लेक्स प्रिंटिंग, शादी कार्ड और दुकानों के प्रचार के लिए हिंदी व क्षेत्रीय भाषाओं में सुंदर डिजाइन बनाने वाले कुशल युवाओं की भारी जरूरत होती है।',
    icon: 'Image',
    matchedInterests: ['art', 'creating', 'technology'],
    whatTheyDo: [
      { en: 'Design Hindi wedding cards with traditional motifs and typography', hi: 'पारंपरिक डिजाइनों और सुंदर फॉन्ट के साथ विवाह निमंत्रण पत्र तैयार करना' },
      { en: 'Format shop flex boards, hoardings, and school prospectus brochures', hi: 'दुकानों के फ्लेक्स बोर्ड, पोस्टर और स्कूल ब्रोशर डिजाइन करना' },
      { en: 'Create WhatsApp promo banners and YouTube thumbnails for rural influencers and shops', hi: 'व्हाट्सएप विज्ञापन और यूट्यूब थंबनेल बनाना' }
    ],
    requiredSkills: [
      { en: 'CorelDraw & Adobe Photoshop proficiency', hi: 'कोरल ड्रा और फोटोशॉप में दक्षता' },
      { en: 'Hindi font typesetting (Chanakya, KrutiDev, Unicode)', hi: 'हिंदी फॉन्ट टाइपसेटिंग' },
      { en: 'Color separation & print prepress (CMYK, resolutions)', hi: 'प्रिंटिंग के लिए सीएमवाईके और रेजोल्यूशन सेट करना' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 pass in any stream', descriptionHi: 'कक्षा 10 या 12 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Diploma in Desktop Publishing (DTP) or Graphic Design (6 months)', descriptionHi: 'डीटीपी (DTP) या ग्राफिक डिजाइनिंग में 6 माह का डिप्लोमा' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Media & Entertainment Skills Council (MESC) Certification', descriptionHi: 'मीडिया एवं एंटरटेनमेंट स्किल्स काउंसिल प्रमाणन' }
    ],
    coursesExams: [
      { en: 'NIELIT DTP (Desk Top Publishing) Certificate', hi: 'नाइलिट डीटीपी प्रमाणपत्र परीक्षा' },
      { en: 'MESC Graphic Designer Assessment (NSQF Level 4)', hi: 'एमईएससी ग्राफिक डिजाइनर परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Pradhan Mantri Kaushal Kendra (PMKK) Graphic Design courses', hi: 'पीएमकेके ग्राफिक डिजाइन प्रशिक्षण' },
      { en: 'Local printing press on-the-job apprenticeship', hi: 'स्थानीय प्रिंटिंग प्रेस में व्यावहारिक कार्य' }
    ],
    indicativeSalary: '₹16,000 - ₹35,000 / month (or freelance design fee ₹300-₹1,500 per job)',
    indicativeSalaryHi: '₹16,000 - ₹35,000 / माह (या ₹300-₹1,500 प्रति डिजाइन फ्रीलांस)',
    growthPotential: 'High — growth of regional digital content, local brands, and wedding season surges.',
    growthPotentialHi: 'उत्तम — डिजिटल मीडिया, स्थानीय विज्ञापनों और शादी सीजन में भरपूर कमाई।',
    pathwaySteps: [
      { step: 1, title: 'Learn Visual Composition & Colors', titleHi: 'रंग संयोजन और डिजाइन के सिद्धांत', description: 'Study typography hierarchy, contrast, margins, and Indian aesthetics.', descriptionHi: 'फॉन्ट का चयन, मार्जिन और रंगों का सही तालमेल समझें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Master CorelDraw & Photoshop', titleHi: 'सॉफ्टवेयर टूल्स में निपुणता', description: 'Practice pen tool, vector tracing, Hindi typing, and clipping masks.', descriptionHi: 'पेन टूल, वेक्टर ट्रेसिंग और हिंदी टाइपिंग का दैनिक अभ्यास करें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete DTP Portfolio & Certification', titleHi: 'पोर्टफोलियो और प्रमाणपत्र तैयार करें', description: 'Compile 15 real-world design samples (invitations, menus, flex banners).', descriptionHi: 'विवाह कार्ड, विज्ञापन बैनर आदि के 15 उत्कृष्ट सैंपल तैयार करें।', duration: '3 months', milestoneType: 'qualification' },
      { step: 4, title: 'Work with Press or Start Online Studio', titleHi: 'प्रिंटिंग प्रेस या अपना स्टूडियो शुरू करें', description: 'Provide design services for local businesses and institutions.', descriptionHi: 'स्थानीय व्यापारियों और स्कूलों के लिए डिजाइन सेवाएं दें।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'telemedicine-operator',
    title: 'Telemedicine Facilitator & Digital Health Tech',
    titleHi: 'टेलीमेडिसिन संचालक एवं डिजिटल स्वास्थ्य सहायक',
    category: 'Healthcare & Digital Technology',
    categoryHi: 'स्वास्थ्य सेवा एवं डिजिटल तकनीक',
    isVocational: true,
    shortDescription: 'Connects village patients to city doctors through digital video consults and medical test devices.',
    shortDescriptionHi: 'डिजिटल वीडियो परामर्श और जांच उपकरणों द्वारा गांव के मरीजों को शहर के डॉक्टरों से जोड़ते हैं।',
    fullDescription: 'Bridges the urban-rural medical divide. Operates eSanjeevani kiosks or digital clinics, recording patient medical histories, uploading ECGs and digital stethoscope sounds, and explaining the doctor’s prescription in simple local dialect.',
    fullDescriptionHi: 'गांव और बड़े शहरों के अस्पतालों की दूरी मिटाना। ई-संजीवनी केंद्र चलाकर मरीज की समस्या सुनना, ईसीजी व जांच रिपोर्ट अपलोड करना और डॉक्टर की सलाह को आसान भाषा में समझाना।',
    icon: 'Video',
    matchedInterests: ['helping-people', 'technology', 'people'],
    whatTheyDo: [
      { en: 'Record patient symptoms, vital signs, and past medical prescriptions', hi: 'मरीज के लक्षण, बुखार, बीपी और पुरानी दवाओं की पर्ची दर्ज करना' },
      { en: 'Connect live tele-consultation with MD specialists via govt eSanjeevani portal', hi: 'सरकारी ई-संजीवनी पोर्टल पर विशेषज्ञ डॉक्टरों से वीडियो कॉल जोड़ना' },
      { en: 'Print and counsel patients on medicine dosage and lifestyle instructions', hi: 'दवाइयों की खुराक और जरूरी सावधानियों को मरीज को विस्तार से समझाना' }
    ],
    requiredSkills: [
      { en: 'Basic clinical triage & vital signs measuring', hi: 'बुनियादी जांच और लक्षण पहचान' },
      { en: 'Video-conferencing and medical record entry', hi: 'वीडियो कॉन्फ्रेंसिंग और मेडिकल रिकॉर्ड एंट्री' },
      { en: 'Patient empathy and local dialect translation', hi: 'मरीजों से आत्मीय संवाद और स्थानीय बोली में समझाना' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 with Science (Biology preferred)', descriptionHi: 'कक्षा 12 (विज्ञान संकाय)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Diploma in Medical Laboratory Technology (DMLT) or General Duty Assistant (GDA)', descriptionHi: 'डीएमएलटी (DMLT) या जनरल ड्यूटी असिस्टेंट (GDA) कोर्स' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Ministry of Health eSanjeevani operator certification', descriptionHi: 'स्वास्थ्य मंत्रालय का ई-संजीवनी ऑपरेटर प्रशिक्षण' }
    ],
    coursesExams: [
      { en: 'Healthcare Sector Skill Council (HSSC) GDA Examination', hi: 'हेल्थकेयर स्किल काउंसिल जीडीए परीक्षा' },
      { en: 'State Para-Medical Council Entrance Test', hi: 'राज्य पैरा-मेडिकल काउंसिल परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'PMKVY General Duty Assistant (GDA) 4-month course', hi: 'पीएमकेवीवाई जनरल ड्यूटी असिस्टेंट कोर्स' },
      { en: 'District Hospital Telemedicine Wing on-site internship', hi: 'जिला अस्पताल टेलीमेडिसिन विंग में इंटर्नशिप' }
    ],
    indicativeSalary: '₹17,000 - ₹32,000 / month',
    indicativeSalaryHi: '₹17,000 - ₹32,000 / माह',
    growthPotential: 'High — Ayushman Bharat has mandated tele-consultation across all 1,60,000+ Health Wellness Centers.',
    growthPotentialHi: 'अति उत्तम — देश के सभी आयुष्मान आरोग्य मंदिरों में टेली-कंसल्टेशन अनिवार्य किया गया है।',
    pathwaySteps: [
      { step: 1, title: 'Learn Basic Medical Terminology', titleHi: 'चिकित्सा शब्दावली व जांच सीखें', description: 'Understand BP ranges, pulse rate, oxygen saturation, and common ailments.', descriptionHi: 'बीपी, नाड़ी गति, ऑक्सीजन स्तर और सामान्य बीमारियों की समझ बनाएं।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Complete GDA or DMLT Training', titleHi: 'जीडीए या डीएमएलटी कोर्स पूरा करें', description: 'Practice sterile handling, patient positioning, and diagnostic testing.', descriptionHi: 'प्राथमिक उपचार और जांच उपकरण संचालन का व्यावहारिक ज्ञान लें।', duration: '4-6 months', milestoneType: 'foundation' },
      { step: 3, title: 'Master eSanjeevani Software', titleHi: 'ई-संजीवनी पोर्टल पर प्रशिक्षण', description: 'Learn appointment booking, slot management, and digital prescriptions.', descriptionHi: 'सरकारी टेलीमेडिसिन पोर्टल पर डॉक्टर से समय लेने और रिपोर्ट अपलोड करने में महारत पाएं।', duration: '1 month', milestoneType: 'qualification' },
      { step: 4, title: 'Deploy at Village Wellness Center or CSC', titleHi: 'स्वास्थ्य केंद्र या सीएससी पर सेवा शुरू', description: 'Bridge hundreds of villagers each month to super-specialist doctors.', descriptionHi: 'प्रतिमाह सैकड़ों ग्रामीणों को घर बैठे बड़े डॉक्टरों का इलाज दिलाएं।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'carpenter-modular-furniture-maker',
    title: 'Modular Furniture & Woodcraft Artisan',
    titleHi: 'मॉड्यूलर फर्नीचर एवं काष्ठशिल्प कारीगर',
    category: 'Interior Design & Construction',
    categoryHi: 'इंटीरियर डिजाइन एवं निर्माण',
    isVocational: true,
    shortDescription: 'Builds modular kitchen cabinets, durable school desks, doors, and modern woodcraft using power tools.',
    shortDescriptionHi: 'मॉड्यूलर किचन, मजबूत स्कूल डेस्क, दरवाजे और आधुनिक बिजली के औजारों से फर्नीचर बनाते हैं।',
    fullDescription: 'Modern carpentry has moved far beyond traditional hand saws. Using circular saws, laminate trimmers, and edge-banding machines, skilled woodworkers cater to booming rural house constructions, schools, and Panchayat offices wanting modern, sleek interiors.',
    fullDescriptionHi: 'पारंपरिक बढ़ईगीरी अब आधुनिक मशीनों से होती है। लैमिनेट कटर, ट्रिमर और एज-बेंडिंग से मॉड्यूलर किचन, वार्डरोब और स्कूल-ऑफिस का सुंदर फर्नीचर तैयार करना।',
    icon: 'Hammer',
    matchedInterests: ['hands-on', 'creating', 'machines'],
    whatTheyDo: [
      { en: 'Read interior architectural drawings and calculate plywood sheet yields', hi: 'फर्नीचर के नक्शे पढ़ना और प्लाईवुड की नापजोख करना' },
      { en: 'Operate precision power tools (plunge router, biscuit joiner, table saw)', hi: 'बिजली के आधुनिक कटर, राउटर और ग्राइंडर सुरक्षित चलाना' },
      { en: 'Apply decorative mica/laminates, hydraulic soft-close hinges, and PU polish', hi: 'सनमाइका, हाइड्रोलिक कब्जे और पीयू पॉलिश का फिनिशिंग कार्य' }
    ],
    requiredSkills: [
      { en: 'Precision measurement & wood joinery', hi: 'सटीक नाप और जोड़ (जॉइनरी) बनाना' },
      { en: 'Power tool safety & blade maintenance', hi: 'पावर टूल्स की सुरक्षा और रखरखाव' },
      { en: 'Modular hardware fitting (sliders, hinges, channels)', hi: 'दराज के चैनल और आधुनिक कब्जों की फिटिंग' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 8 or 10 pass', descriptionHi: 'कक्षा 8 या 10 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'ITI Carpenter Trade (1 year)', descriptionHi: 'आईटीआई कारपेंटर ट्रेड (1 वर्ष)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Furniture & Fittings Skill Council (FFSC) Modular Specialist', descriptionHi: 'फर्नीचर स्किल काउंसिल से मॉड्यूलर विशेषज्ञता' }
    ],
    coursesExams: [
      { en: 'NCVT ITI Carpenter All India Trade Test', hi: 'एनसीवीटी आईटीआई कारपेंटर परीक्षा' },
      { en: 'FFSC Assistant Carpenter Wooden Furniture NSQF Level 3/4', hi: 'एफएफएससी प्रमाणन परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Government ITI Carpentry workshops', hi: 'सरकारी आईटीआई वर्कशॉप' },
      { en: 'Fevicol Champion Club modular woodworking clinics', hi: 'प्रमुख फेविकोल व प्लाईवुड कंपनियों की कार्यशालाएं' }
    ],
    indicativeSalary: '₹22,000 - ₹45,000 / month (independent master carpenters earn ₹50,000 - ₹90,000 on house contracts)',
    indicativeSalaryHi: '₹22,000 - ₹45,000 / माह (मकानों के ठेके पर ₹50,000 - ₹90,000+)',
    growthPotential: 'Very High — surging house construction (Pradhan Mantri Awas Yojana) and modern renovation demand.',
    growthPotentialHi: 'अति उत्तम — पक्के मकानों के निर्माण और आधुनिक फर्नीचर की हर कस्बे में जबरदस्त मांग।',
    pathwaySteps: [
      { step: 1, title: 'Master Hand Tools & Safety', titleHi: 'हाथ के औजार और सुरक्षा नियम', description: 'Practice chisels, planes, try-squares, and accurate pencil markings.', descriptionHi: 'रंदा, छेनी, गुनिया और सटीक मार्किंग का अभ्यास करें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Learn Wood Joints & Laminates', titleHi: 'जोड़ और सनमाइका पेस्टिंग सीखें', description: 'Create mortise & tenon, lap joints, and bubble-free mica pasting.', descriptionHi: 'मजबूत जोड़ बनाना और फेविकोल से सनमाइका चिपकाना सीखें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete ITI or FFSC Course', titleHi: 'आईटीआई या एफएफएससी कोर्स पूरा करें', description: 'Operate power routers, panel saws, and master hardware catalogs.', descriptionHi: 'बिजली के औजार और आधुनिक फिटिंग्स का प्रशिक्षण पूरा करें।', duration: '6-12 months', milestoneType: 'qualification' },
      { step: 4, title: 'Take Residential & School Contracts', titleHi: 'मकानों व स्कूलों के फर्नीचर के ठेके लें', description: 'Deliver custom wardrobes, modular kitchens, and sturdy school desks.', descriptionHi: 'मॉड्यूलर किचन और अलमारी के ऑर्डर लेकर स्वतंत्र कार्य करें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'tourism-heritage-local-guide',
    title: 'Rural Tourism & Cultural Heritage Guide',
    titleHi: 'ग्रामीण पर्यटन एवं सांस्कृतिक धरोहर गाइड',
    category: 'Hospitality, Culture & Tourism',
    categoryHi: 'आतिथ्य, संस्कृति एवं पर्यटन',
    isVocational: false,
    shortDescription: 'Guides domestic and international travelers through local historical forts, folk temples, crafts, and nature trails.',
    shortDescriptionHi: 'ऐतिहासिक किलों, मंदिरों, स्थानीय हस्तशिल्प और प्राकृतिक ट्रेक पर पर्यटकों का मार्गदर्शन करते हैं।',
    fullDescription: 'Turns local culture, folklore, and wildlife into sustainable income. India’s Dekho Apna Desh and rural homestay policies empower local youths who know their district’s legends, monuments, bird sanctuaries, and organic cuisines to host travelers authentically.',
    fullDescriptionHi: 'अपनी स्थानीय संस्कृति, इतिहास और प्राकृतिक सौंदर्य को आजीविका बनाना। देखो अपना देश अभियान और ग्रामीण होमस्टे के जरिए पर्यटकों को अपनी धरोहर से परिचित कराना।',
    icon: 'MapPin',
    matchedInterests: ['people', 'helping-people', 'art', 'outdoors'],
    whatTheyDo: [
      { en: 'Narrate authentic local historical stories and architectural details to visitor groups', hi: 'पर्यटकों को स्मारकों का इतिहास, वास्तुकला और लोककथाएं सुनाना' },
      { en: 'Organize village craft immersion tours (pottery, weaving, organic farming)', hi: 'हस्तशिल्प और ग्रामीण जीवन के अनुभव दौरे आयोजित करना' },
      { en: 'Coordinate clean homestay bookings and traditional culinary experiences', hi: 'स्वच्छ होमस्टे आवास और पारंपरिक भोजन की व्यवस्था करना' }
    ],
    requiredSkills: [
      { en: 'Articulate storytelling in Hindi and conversational English', hi: 'हिंदी और बुनियादी अंग्रेजी में स्पष्ट बातचीत' },
      { en: 'Knowledge of local monuments, flora, and bird species', hi: 'स्थानीय स्मारकों, पक्षियों और वनस्पतियों की जानकारी' },
      { en: 'Hospitality, tourist safety, and first aid', hi: 'पर्यटक सुरक्षा, प्राथमिक चिकित्सा और स्वागत सत्कार' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 pass with good communication', descriptionHi: 'कक्षा 10 या 12 (अच्छी संवाद क्षमता के साथ)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Incredible India Tourist Facilitator (IITF) Basic Certification (Online by Ministry of Tourism)', descriptionHi: 'पर्यटन मंत्रालय का अतुल्य भारत टूरिस्ट फैसिलिटेटर (IITF) ऑनलाइन कोर्स' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'State Tourism Development Corporation Guide License', descriptionHi: 'राज्य पर्यटन विकास निगम का अधिकृत गाइड लाइसेंस' }
    ],
    coursesExams: [
      { en: 'IITFC (Incredible India Tourist Facilitator Certification) Online Exam', hi: 'आईआईटीएफसी (IITFC) ऑनलाइन परीक्षा' },
      { en: 'Archaeological Survey of India (ASI) Monument Guide Test', hi: 'भारतीय पुरातत्व सर्वेक्षण (ASI) स्मारक गाइड परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'Indian Institute of Tourism and Travel Management (IITTM) modules', hi: 'भारतीय पर्यटन एवं यात्रा प्रबंधन संस्थान (IITTM) कोर्स' },
      { en: 'State Eco-Tourism Board nature guide workshops', hi: 'राज्य इको-टूरिज्म बोर्ड कार्यशालाएं' }
    ],
    indicativeSalary: '₹18,000 - ₹40,000 / month (or daily fee of ₹1,500 - ₹3,500 during tourist season)',
    indicativeSalaryHi: '₹18,000 - ₹40,000 / माह (सीजन में ₹1,500 - ₹3,500 प्रतिदिन)',
    growthPotential: 'High — growing interest in heritage trails, rural agro-tourism, and birdwatching circuits.',
    growthPotentialHi: 'उत्तम — ग्रामीण पर्यटन, ऐतिहासिक धरोहरों और पक्षी प्रेमियों के दौरों में भारी वृद्धि।',
    pathwaySteps: [
      { step: 1, title: 'Learn Your District Heritage', titleHi: 'अपने जिले के इतिहास का अध्ययन करें', description: 'Document local myths, architecture, flora, and historical records.', descriptionHi: 'स्थानीय किलों, मंदिरों और लोक गाथाओं की गहरी जानकारी जुटाएं।', duration: '1 month', milestoneType: 'understand' },
      { step: 2, title: 'Practice Spoken English & Storytelling', titleHi: 'संवाद और अंग्रेजी का अभ्यास', description: 'Practice presenting clear 5-minute heritage walkthroughs confidently.', descriptionHi: 'पर्यटकों के सामने आत्मविश्वास से बोलने का अभ्यास करें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete IITF Online Certification', titleHi: 'आईआईटीएफ (IITF) ऑनलाइन कोर्स', description: 'Register on Ministry of Tourism portal and clear the certification exam.', descriptionHi: 'पर्यटन मंत्रालय के पोर्टल पर ऑनलाइन परीक्षा पास कर बैज प्राप्त करें।', duration: '2-3 months', milestoneType: 'qualification' },
      { step: 4, title: 'Partner with Homestays & Travel Platforms', titleHi: 'होमस्टे और ट्रैवल कंपनियों से अनुबंध', description: 'List curated heritage walks and village experiences on travel websites.', descriptionHi: 'ट्रेवल कंपनियों और होमस्टे के साथ मिलकर गाइडिंग सेवाएं दें।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'accounts-executive-tally-gst',
    title: 'Rural Accounts Assistant (Tally, GST & e-Way)',
    titleHi: 'ग्रामीण लेखा सहायक (टैली, जीएसटी एवं ई-वे बिल)',
    category: 'Commerce, Taxation & Business',
    categoryHi: 'वाणिज्य, कराधान एवं व्यवसाय',
    isVocational: true,
    shortDescription: 'Maintains double-entry accounts, files GST returns, and generates e-Way bills for local traders and FPOs.',
    shortDescriptionHi: 'स्थानीय व्यापारियों और किसान उत्पादक संगठनों के लिए बहीखाता, जीएसटी रिटर्न और ई-वे बिल बनाते हैं।',
    fullDescription: 'Every Mandi trader, fertilizer distributor, grain wholesaler, and rural cooperative needs compliant accounting. With the national GST portal, accountants who can operate Tally Prime, reconcile invoices, and file timely returns earn steady income across every rural market town.',
    fullDescriptionHi: 'मंडी के आढ़तियों, खाद-बीज व्यापारियों और ग्रामीण कंपनियों को अपने बहीखाते और जीएसटी के लिए कुशल मुनीम/अकाउंटेंट की जरूरत होती है। टैली और ई-वे बिल में निपुण युवाओं की हर कस्बे में निरंतर मांग।',
    icon: 'Calculator',
    matchedInterests: ['business', 'technology', 'problem-solving'],
    whatTheyDo: [
      { en: 'Record daily purchases, sales invoices, and bank statements in Tally Prime', hi: 'टैली प्राइम में दैनिक खरीद, बिक्री और बैंक लेनदेन दर्ज करना' },
      { en: 'Generate e-Way bills for agricultural produce and commercial transport trucks', hi: 'माल परिवहन के लिए जीएसटी पोर्टल से ई-वे बिल जनरेट करना' },
      { en: 'Reconcile GSTR-2B input tax credit and assist CAs in filing GSTR-3B and GSTR-1', hi: 'जीएसटी रिटर्न (GSTR-1, 3B) दाखिल करने में सीए की मदद करना' }
    ],
    requiredSkills: [
      { en: 'Tally Prime with GST accounting', hi: 'टैली प्राइम में जीएसटी एकाउंटिंग' },
      { en: 'MS Excel formulas (VLOOKUP, Pivot tables)', hi: 'एमएस एक्सेल (फॉर्मूले और पिवट टेबल)' },
      { en: 'Bank reconciliation and ledger scrutiny', hi: 'बैंक समाधान और खाता बही की जांच' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 in Commerce or Mathematics', descriptionHi: 'कक्षा 12 (कॉमर्स अथवा गणित विषय)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Certificate in Financial Accounting (Tally Certified Professional)', descriptionHi: 'टैली प्रमाणित पेशेवर (TCP) कोर्स' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'B.Com Degree (Regular or Distance via IGNOU)', descriptionHi: 'बी.कॉम डिग्री (नियमित या इग्नू से दूरस्थ शिक्षा)' }
    ],
    coursesExams: [
      { en: 'Tally Certified Professional (TCP) Exam', hi: 'टैली सर्टिफाइड प्रोफेशनल परीक्षा' },
      { en: 'BFSI Sector Skill Council Accounts Executive Examination', hi: 'बीएफएसआई सेक्टर स्किल काउंसिल परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'ITI Computer Operator & Programming Assistant (COPA) accounts module', hi: 'आईटीआई कोपा एकाउंट्स मॉड्यूल' },
      { en: 'RSETI Tally and Accounting Free Training', hi: 'आरसेटी निःशुल्क टैली प्रशिक्षण' }
    ],
    indicativeSalary: '₹18,000 - ₹38,000 / month (or handling 5-8 trader books at ₹3,000/month each)',
    indicativeSalaryHi: '₹18,000 - ₹38,000 / माह (या 5-8 दुकानों के बहीखाते संभालकर ₹25,000 - ₹40,000)',
    growthPotential: 'High — every business from small agro-dealers to large cold stores requires GST compliance.',
    growthPotentialHi: 'स्थिर एवं उच्च — जीएसटी अनिवार्य होने से हर व्यापारी को एकाउंटेंट की आवश्यकता है।',
    pathwaySteps: [
      { step: 1, title: 'Understand Debit, Credit & Ledgers', titleHi: 'डेबिट, क्रेडिट और बहीखाता समझें', description: 'Master Golden Rules of Accounting and balance sheets.', descriptionHi: 'एकाउंटिंग के सुनहरे नियम और लाभ-हानि खाता समझें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Learn Tally Prime with GST', titleHi: 'टैली प्राइम पर व्यावहारिक अभ्यास', description: 'Practice voucher creation, inventory master, and GST tax ledgers.', descriptionHi: 'टैली में बिल बनाना, इन्वेंट्री और टैक्स लेजर का अभ्यास करें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Pass Tally Professional Exam', titleHi: 'टैली अधिकृत परीक्षा पास करें', description: 'Obtain recognized certification from Tally Education.', descriptionHi: 'टैली एजुकेशन से आधिकारिक प्रमाणपत्र प्राप्त करें।', duration: '1 month', milestoneType: 'qualification' },
      { step: 4, title: 'Manage Mandi Traders or FPO Accounts', titleHi: 'मंडी व्यापारियों या एफपीओ के खाते संभालें', description: 'Handle monthly invoicing, TDS, and GST compliance with local businesses.', descriptionHi: 'स्थानीय फर्मों के मासिक बिल, टीडीएस और रिटर्न संभालना शुरू करें।', duration: 'Career', milestoneType: 'entry' }
    ]
  },
  {
    id: 'warehouse-logistics-coordinator',
    title: 'Rural Logistics & Cold Storage Coordinator',
    titleHi: 'ग्रामीण लॉजिस्टिक्स एवं कोल्ड स्टोरेज समन्वयक',
    category: 'Logistics & Supply Chain',
    categoryHi: 'लॉजिस्टिक्स एवं आपूर्ति श्रृंखला',
    isVocational: true,
    shortDescription: 'Manages grain godowns, cold room temperatures, inventory barcodes, and dispatch trucks.',
    shortDescriptionHi: 'अनाज गोदामों, कोल्ड स्टोरेज का तापमान, बारकोड इन्वेंट्री और ट्रकों के परिवहन का प्रबंधन करते हैं।',
    fullDescription: 'Crucial for reducing agricultural post-harvest wastage. Works at Central Warehousing Corporation (CWC), state godowns, e-NAM mandi logistics hubs, or private cold stores ensuring potato, onion, and grain produce is safely stacked, moisture-controlled, and digitally tracked.',
    fullDescriptionHi: 'फसल कटाई के बाद बर्बादी रोकने का महत्वपूर्ण दायित्व। सेंट्रल वेयरहाउसिंग, राज्य गोदामों और कोल्ड स्टोरेज में तापमान नियंत्रण, बारकोड स्कैनिंग और ट्रकों की रवानगी संभालना।',
    icon: 'Truck',
    matchedInterests: ['business', 'machines', 'problem-solving'],
    whatTheyDo: [
      { en: 'Monitor temperature, relative humidity, and ethylene levels in cold storage chambers', hi: 'कोल्ड स्टोरेज में तापमान, नमी और गैस स्तर की निगरानी करना' },
      { en: 'Operate warehouse inventory software with handheld barcode scanners', hi: 'बारकोड स्कैनर से माल की आवक-जावक कंप्यूटर में दर्ज करना' },
      { en: 'Inspect grain moisture levels using digital moisture meters before bag stacking', hi: 'बोरी लगाने से पहले अनाज की नमी की डिजिटल मीटर से जांच करना' }
    ],
    requiredSkills: [
      { en: 'Inventory management and FIFO (First In First Out)', hi: 'इन्वेंट्री प्रबंधन और पहले आया माल पहले निकालना' },
      { en: 'Cold room refrigeration basics', hi: 'कोल्ड स्टोरेज रेफ्रिजरेशन की बुनियादी समझ' },
      { en: 'Truck dispatch paperwork and e-Way matching', hi: 'डिस्पैच दस्तावेज और माल बिल मिलान' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 10 or 12 pass in any stream', descriptionHi: 'कक्षा 10 या 12 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'Logistics Sector Skill Council (LSSC) Warehouse Executive certification', descriptionHi: 'लॉजिस्टिक्स सेक्टर स्किल काउंसिल वेयरहाउस कोर्स' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Apprenticeship under Central Warehousing Corporation (CWC)', descriptionHi: 'सेंट्रल वेयरहाउसिंग कॉर्पोरेशन में अप्रेंटिसशिप' }
    ],
    coursesExams: [
      { en: 'LSSC Warehouse Supervisor NSQF Level 4 Assessment', hi: 'एलएसएससी वेयरहाउस सुपरवाइजर परीक्षा' },
      { en: 'WDRA (Warehousing Development and Regulatory Authority) Assessor Course', hi: 'डब्ल्यूडीआरए गोदाम प्रबंधक प्रमाणपत्र' }
    ],
    vocationalTraining: [
      { en: 'National Institute of Agricultural Extension Management (MANAGE) courses', hi: 'कृषि विस्तार प्रबंधन संस्थान (MANAGE) प्रशिक्षण' },
      { en: 'PMKVY Warehouse Associate training', hi: 'पीएमकेवीवाई वेयरहाउस एसोसिएट कोर्स' }
    ],
    indicativeSalary: '₹20,000 - ₹38,000 / month',
    indicativeSalaryHi: '₹20,000 - ₹38,000 / माह',
    growthPotential: 'High — huge expansion of food parks, PM-Kisan SAMPADA cold chains, and e-commerce delivery hubs.',
    growthPotentialHi: 'अति उत्तम — पीएम किसान संपदा योजना और ई-कॉमर्स आपूर्ति केंद्रों का भारी विस्तार।',
    pathwaySteps: [
      { step: 1, title: 'Understand Storage & Supply Chains', titleHi: 'भंडारण और आपूर्ति श्रृंखला समझें', description: 'Learn how spoilage occurs and how temperature extends shelf life.', descriptionHi: 'अनाज और सब्जियों को सड़ने से बचाने के वैज्ञानिक उपाय समझें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Learn Inventory Scanning & Excel', titleHi: 'इन्वेंट्री सॉफ्टवेयर व एक्सेल सीखें', description: 'Practice stock register entry, barcode reading, and damaged goods segregation.', descriptionHi: 'स्टॉक रजिस्टर, बारकोड और एक्सेल में माल का हिसाब रखना सीखें।', duration: '1 month', milestoneType: 'foundation' },
      { step: 3, title: 'Complete Logistics Skill Certification', titleHi: 'लॉजिस्टिक्स काउंसिल प्रमाणपत्र लें', description: 'Gain certified qualification in warehousing safety and material handling.', descriptionHi: 'गोदाम सुरक्षा और माल प्रबंधन में मान्यता प्राप्त प्रमाणपत्र पाएं।', duration: '3-6 months', milestoneType: 'qualification' }
    ]
  },
  {
    id: 'tailoring-apparel-enterprise',
    title: 'Self-Employed Tailor & Apparel Designer',
    titleHi: 'स्वरोजगार दर्जी एवं परिधान उद्यमी',
    category: 'Crafts, Fashion & Micro-Enterprise',
    categoryHi: 'शिल्प, फैशन एवं सूक्ष्म उद्यम',
    isVocational: true,
    shortDescription: 'Stitches school uniforms, festive ethnic suits, blouses, and operates boutique stitching centers.',
    shortDescriptionHi: 'स्कूल यूनिफॉर्म, त्योहारी पोशाकें, कुर्तियां सिलते हैं और अपनी बुटीक सिलाई यूनिट चलाते हैं।',
    fullDescription: 'One of the most empowering livelihoods for rural young women and men. From stitching thousands of school uniforms under state government free uniform schemes to creating fashionable designer blouses and kurtas for weddings, master tailors build prosperous home businesses.',
    fullDescriptionHi: 'ग्रामीण युवाओं और महिलाओं के लिए अत्यंत सशक्त स्वरोजगार। सरकारी स्कूल यूनिफॉर्म के बड़े ऑर्डर सिलने से लेकर शादी-विवाह की डिजाइनर पोशाकें तैयार कर अपनी स्वतंत्र बुटीक स्थापित करना।',
    icon: 'Scissors',
    matchedInterests: ['art', 'creating', 'hands-on', 'business'],
    whatTheyDo: [
      { en: 'Take exact body measurements and draft custom paper patterns', hi: 'सटीक नाप लेना और पेपर पैटर्न तैयार करना' },
      { en: 'Operate motorized industrial lockstitch sewing machines and overlock sergers', hi: 'आधुनिक मोटर वाली सिलाई और इंटरलॉक मशीनों का संचालन' },
      { en: 'Apply decorative piping, zippers, embroidery borders, and buttonholes', hi: 'पाइपिंग, जिप, कढ़ाई बॉर्डर और काज-बटन की फिनिशिंग' }
    ],
    requiredSkills: [
      { en: 'Pattern cutting & fabric grain alignment', hi: 'कपड़े की कटाई और पैटर्न बनाना' },
      { en: 'Motorized sewing machine control & tension adjustment', hi: 'मोटर सिलाई मशीन का नियंत्रण व धागे का तनाव' },
      { en: 'Costing, fabric estimation, and client management', hi: 'कपड़े का अनुमान, सिलाई दर और ग्राहक संबंध' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 8 or 10 pass', descriptionHi: 'कक्षा 8 या 10 उत्तीर्ण' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'ITI Sewing Technology / Dress Making Trade (1 year)', descriptionHi: 'आईटीआई सिलाई तकनीक / ड्रेस मेकिंग (1 वर्ष)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'Apparel Made-Ups & Home Furnishing Sector Skill Council (AMHSSC) Certification', descriptionHi: 'अपेरल सेक्टर स्किल काउंसिल प्रमाणन' }
    ],
    coursesExams: [
      { en: 'NCVT National Trade Certificate in Sewing Technology', hi: 'एनसीवीटी सिलाई तकनीक राष्ट्रीय ट्रेड परीक्षा' },
      { en: 'AMHSSC Self Employed Tailor Assessment', hi: 'स्वरोजगार दर्जी परीक्षा (NSQF लेवल 4)' }
    ],
    vocationalTraining: [
      { en: 'Usha Silai School / Singer sewing masterclasses', hi: 'उषा सिलाई स्कूल / सिंगर मास्टरक्लास' },
      { en: 'RSETI Women Tailoring & Boutique free training', hi: 'आरसेटी महिला सिलाई एवं बुटीक प्रशिक्षण' }
    ],
    indicativeSalary: '₹18,000 - ₹40,000 / month (much higher during festival and school re-opening seasons)',
    indicativeSalaryHi: '₹18,000 - ₹40,000 / माह (त्योहारों व स्कूल सत्र में ₹50,000+ तक)',
    growthPotential: 'High — high demand for readymade garment alterations, school uniforms, and ethnic fashion.',
    growthPotentialHi: 'उत्तम — स्कूल यूनिफॉर्म और त्योहारी सीजन में निरंतर भरपूर काम।',
    pathwaySteps: [
      { step: 1, title: 'Learn Sewing Machine Mechanics', titleHi: 'सिलाई मशीन की संरचना समझें', description: 'Practice threading, bobbin winding, and pedal speed control.', descriptionHi: 'बॉबिन भरना, धागा डालना और मशीन की गति पर नियंत्रण सीखें।', duration: '2 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Master Cutting & Basic Garments', titleHi: 'कटाई और बुनियादी सिलाई सीखें', description: 'Draft and stitch handkerchiefs, pillow covers, and simple petticoats/kurtas.', descriptionHi: 'सरल कपड़ों की कटाई और सीधी सिलाई का अभ्यास करें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Complete ITI or AMHSSC Course', titleHi: 'आईटीआई या अपेरल काउंसिल कोर्स', description: 'Learn complex blouses, collars, trouser pleats, and industrial speed.', descriptionHi: 'जटिल डिजाइनों, कॉलर और पैंट-सूट की सिलाई में दक्षता लाएं।', duration: '6-12 months', milestoneType: 'qualification' },
      { step: 4, title: 'Establish Boutique or Uniform Center', titleHi: 'अपनी बुटीक या सिलाई केंद्र स्थापित करें', description: 'Procure motorized machines under PMEGP loan and take school bulk orders.', descriptionHi: 'सरकारी ऋण सहायता से आधुनिक मशीनें लगाकर केंद्र शुरू करें।', duration: 'Ongoing', milestoneType: 'entry' }
    ]
  },
  {
    id: 'water-quality-analyst',
    title: 'Drinking Water Quality Analyst & Lab Tech',
    titleHi: 'पेयजल गुणवत्ता विश्लेषक एवं लैब तकनीशियन',
    category: 'Water Science & Public Health',
    categoryHi: 'जल विज्ञान एवं लोक स्वास्थ्य',
    isVocational: false,
    shortDescription: 'Tests village handpump and piped water for arsenic, fluoride, iron, and bacterial contamination.',
    shortDescriptionHi: 'गांव के हैंडपंप और नलों के पानी में आर्सेनिक, फ्लोराइड, आयरन और बैक्टीरिया की जांच करते हैं।',
    fullDescription: 'Protects entire communities from crippling water-borne illnesses like fluorosis and diarrhea. Operates sub-divisional water testing labs under the Jal Jeevan Mission and distributes Field Test Kits (FTKs) to village women self-help groups.',
    fullDescriptionHi: 'ग्रामीण आबादी को फ्लोरोसिस और जलजनित बीमारियों से बचाना। जल जीवन मिशन के तहत उप-विभागीय प्रयोगशालाओं में पानी के नमूनों की रासायनिक व जैविक जांच करना और फील्ड टेस्ट किट का प्रशिक्षण देना।',
    icon: 'TestTube',
    matchedInterests: ['science', 'biology', 'helping-people', 'problem-solving'],
    whatTheyDo: [
      { en: 'Test water samples for 12 essential parameters (pH, TDS, Turbidity, Fluoride, Arsenic, Nitrate, Coliform)', hi: 'पानी के 12 अनिवार्य मानकों (पीएच, टीडीएस, फ्लोराइड, आर्सेनिक, बैक्टीरिया) का परीक्षण करना' },
      { en: 'Upload water test results onto the National Jal Jeevan Mission WQMIS portal', hi: 'राष्ट्रीय पेयजल गुणवत्ता पोर्टल (WQMIS) पर परीक्षण रिपोर्ट अपलोड करना' },
      { en: 'Train village Pani Samitis on using 5-parameter Field Test Kits (FTKs)', hi: 'गांव की पानी समितियों को फील्ड टेस्ट किट द्वारा जांच का प्रशिक्षण देना' }
    ],
    requiredSkills: [
      { en: 'Spectrophotometer & chemical titration methods', hi: 'स्पेक्ट्रोफोटोमीटर और रासायनिक टाइट्रेशन' },
      { en: 'Microbiological H2S strip testing', hi: 'जीवाणु जांच हेतु H2S स्ट्रिप टेस्ट' },
      { en: 'Lab data record keeping on WQMIS portal', hi: 'पोर्टल पर लैब डेटा दर्ज करना' }
    ],
    studyRoutes: [
      { stage: 'Stage 1', stageHi: 'चरण 1', description: 'Class 12 with Chemistry / Biology / Science', descriptionHi: 'कक्षा 12 (रसायन/जीव विज्ञान संकाय)' },
      { stage: 'Stage 2', stageHi: 'चरण 2', description: 'BSc in Chemistry / Environmental Science / Biotechnology', descriptionHi: 'बीएससी (रसायन विज्ञान / पर्यावरण विज्ञान / बायोटेक)' },
      { stage: 'Stage 3', stageHi: 'चरण 3', description: 'National Jal Jeevan Mission Laboratory Analyst Training', descriptionHi: 'राष्ट्रीय जल जीवन मिशन लैब तकनीशियन प्रशिक्षण' }
    ],
    coursesExams: [
      { en: 'National Test House (NTH) Water Testing Training', hi: 'नेशनल टेस्ट हाउस जल परीक्षण प्रशिक्षण' },
      { en: 'State Water & Sanitation Mission (SWSM) Lab Assistant Exam', hi: 'राज्य जल एवं स्वच्छता मिशन लैब भर्ती परीक्षा' }
    ],
    vocationalTraining: [
      { en: 'NABL accredited laboratory internship', hi: 'एनबीएल मान्यता प्राप्त लैब में इंटर्नशिप' },
      { en: 'Central Ground Water Board (CGWB) water monitoring clinics', hi: 'केंद्रीय भूजल बोर्ड कार्यशालाएं' }
    ],
    indicativeSalary: '₹20,000 - ₹38,000 / month (contractual/permanent lab chemist)',
    indicativeSalaryHi: '₹20,000 - ₹38,000 / माह (सरकारी प्रयोगशाला रसायनज्ञ)',
    growthPotential: 'High — mandatory bi-annual testing of all rural school and anganwadi drinking water sources.',
    growthPotentialHi: 'स्थिर एवं महत्वपूर्ण — हर स्कूल और आंगनवाड़ी के पानी की नियमित अनिवार्य जांच का नियम।',
    pathwaySteps: [
      { step: 1, title: 'Understand Water Contaminants', titleHi: 'पानी के प्रदूषक तत्वों को समझें', description: 'Learn health hazards of fluoride, heavy metals, and coliform bacteria.', descriptionHi: 'फ्लोराइड, आर्सेनिक और दूषित जल के स्वास्थ्य दुष्प्रभावों को समझें।', duration: '3 weeks', milestoneType: 'understand' },
      { step: 2, title: 'Practice Chemical Titration & Meters', titleHi: 'टाइट्रेशन और डिजिटल मीटर चलाना सीखें', description: 'Master pH meter calibration, turbidity tubes, and chemical indicator solutions.', descriptionHi: 'डिजिटल मीटर कैलिब्रेशन और रासायनिक अभिकर्मकों का सही उपयोग सीखें।', duration: '2 months', milestoneType: 'foundation' },
      { step: 3, title: 'Obtain BSc Degree & WQMIS Training', titleHi: 'बीएससी डिग्री और जल परीक्षण प्रशिक्षण', description: 'Get certified on testing protocols per Bureau of Indian Standards (IS 10500).', descriptionHi: 'भारतीय मानक ब्यूरो (IS 10500) के अनुसार जांच का प्रमाणन लें।', duration: '1-3 years', milestoneType: 'qualification' },
      { step: 4, title: 'Manage Sub-Divisional Water Lab', titleHi: 'उप-संभागीय जल प्रयोगशाला का संचालन', description: 'Test hundreds of drinking water sources every month and keep rural families safe.', descriptionHi: 'प्रयोगशाला में पानी के नमूनों की जांच कर पूरे ब्लॉक को सुरक्षित रखें।', duration: 'Career', milestoneType: 'entry' }
    ]
  }
];
