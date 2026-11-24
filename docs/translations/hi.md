# Hindi (हिन्दी, `hi`) translation glossary

Glossary and conventions for `src/messages/hi/`. Use these renderings in every
namespace. If a term changes, update it here and in every file that uses it.

## Conventions

- **Register.** Standard Hindi as used in Indian government health
  communications (MoHFW, NHM, ABDM) and quality Hindi news media. Plain and
  factual. Prefer a widely used English loanword in Devanagari over a rare
  Sanskritized coinage (वर्कफ़्लो, not कार्यप्रवाह; डेटा, not आँकड़ा-संग्रह).
- **Address.** The reader is always "आप" (आप देख सकते हैं, संपर्क करें).
- **Full stop.** Sentences end with the Devanagari danda "।". Question marks
  and exclamation marks stay "?" and "!". Labels, buttons and list items that
  have no full stop in English get none in Hindi. A "." stays inside numbers,
  versions and URLs (R5, 2.0, ohc.network).
- **Nukta.** Use nukta for English loan sounds f and z: फ़ाउंडेशन, सॉफ़्टवेयर,
  फ़ॉर्म, फ़ील्ड, ज़रूरत, दस्तावेज़. Other nukta letters (क़, ख़, ग़) are not used.
- **Nasalization.** Chandrabindu where there is no matra above the line
  (बनाएँ, जाएँ, सुविधाएँ, कहाँ), anusvara otherwise (में, हैं, करें).
- **Names stay in Latin script.** CARE, CARE Core, CARE AI, CARE HMIS,
  CARE Clinic, CARE TeleICU, CARE Apps, Care Janwar, 10BedICU, Open Healthcare
  Network, OHC, OHC Foundation, people, organizations, standards and acronyms
  (FHIR, SNOMED CT, LOINC, UCUM, ICD-10, ABDM, HL7, DICOM, API, HMIS, EMR,
  LMIS, AI, ICU, OPD, IP, DPG, ISO, MIT License, GitHub). Hindi postpositions
  attach after them with a space: "CARE का", "FHIR के अनुरूप", "OHC में".
- **Places.** Indian states and cities use standard Hindi spelling: केरल,
  कर्नाटक, महाराष्ट्र, नागालैंड, मणिपुर, बेंगलुरु, कोच्चि.
- **Numbers.** Arabic numerals exactly as in English (24/7, 100+, 2026).
- **Gender.** CARE, OHC, फ़ाउंडेशन, प्लेटफ़ॉर्म, सिस्टम are masculine
  ("CARE देता है", "फ़ाउंडेशन करता है"). सरकारें, टीमें, सुविधाएँ are feminine.
- **Buttons and menus.** Short imperative with "करें / देखें / पढ़ें / जुड़ें".
  Navbar labels are one to three words.
- **Markup.** Keep every `{placeholder}` and `<tag>` exactly. Move them to
  wherever Hindi word order (subject–object–verb) needs them.

## Glossary

| English                                   | Hindi                                          | Notes                                                                           |
| ----------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| Digital Public Good (DPG)                 | डिजिटल पब्लिक गुड (DPG)                        | Formal designation of the DPG Alliance registry; transliterated, not translated |
| digital public infrastructure (DPI)       | डिजिटल सार्वजनिक अवसंरचना (DPI)                | Term used by the Government of India                                            |
| public good (adj., "public-good funding") | सार्वजनिक हित                                  | "सार्वजनिक हित के लिए वित्तपोषण"                                                |
| open source / open-source                 | ओपन-सोर्स                                      | Always hyphenated                                                               |
| open (adj., general)                      | खुला / खुले / खुली                             | "खुले मानक", "खुला बुनियादी ढाँचा"; but "ओपन API", "ओपन-सोर्स"                  |
| open APIs                                 | ओपन API                                        |                                                                                 |
| self-hostable                             | स्वयं होस्ट करने योग्य                         | Badge: "स्वयं होस्ट करने योग्य"                                                 |
| self-host / self-hosting                  | स्वयं होस्ट करना / स्वयं होस्टिंग              |                                                                                 |
| vendor lock-in                            | वेंडर लॉक-इन                                   | "वेंडर लॉक-इन के बिना"                                                          |
| implementation partner                    | कार्यान्वयन साझेदार                            |                                                                                 |
| implementer                               | कार्यान्वयनकर्ता                               |                                                                                 |
| partner (noun / verb)                     | साझेदार / साझेदारी करना                        | "OHC के साथ साझेदारी करें"                                                      |
| steward (verb)                            | देखरेख करना                                    | "OHC Foundation, CARE की देखरेख करता है"                                        |
| steward (noun)                            | संरक्षक                                        |                                                                                 |
| stewardship                               | देखरेख / संरक्षण                               | "दीर्घकालिक देखरेख"                                                             |
| commons                                   | साझा संसाधन                                    | "Fund the commons" → "साझा संसाधनों को फ़ंड करें"                               |
| interoperability / interoperable          | इंटरऑपरेबिलिटी / इंटरऑपरेबल                    |                                                                                 |
| infrastructure                            | बुनियादी ढाँचा                                 | "स्वास्थ्य का खुला बुनियादी ढाँचा"                                              |
| longitudinal patient record               | मरीज़ का दीर्घकालिक रिकॉर्ड                    | Records across visits over time                                                 |
| patient                                   | मरीज़                                          | Not "रोगी", for consistency                                                     |
| clinician                                 | चिकित्सक                                       | Covers doctors and clinical staff; "चिकित्सक और नर्सें" where both are named    |
| clinical                                  | क्लिनिकल                                       | "क्लिनिकल नोट्स", "क्लिनिकल समीक्षा"                                            |
| funder / funding / fund (verb)            | वित्तपोषक / वित्तपोषण / फ़ंड करना              | CTA: "फ़ंड करें"                                                                |
| donor / donation                          | दानदाता / दान                                  |                                                                                 |
| governance                                | गवर्नेंस                                       | "गवर्नेंस चार्टर"                                                               |
| deploy (verb)                             | लागू करना; technical: डिप्लॉय करना             | "सरकारें CARE लागू कर सकती हैं"                                                 |
| deployment                                | डिप्लॉयमेंट                                    |                                                                                 |
| implementation                            | कार्यान्वयन                                    |                                                                                 |
| workflow                                  | वर्कफ़्लो                                      | Plural also "वर्कफ़्लो"                                                         |
| hub-and-spoke                             | हब-एंड-स्पोक                                   | "हब-एंड-स्पोक मॉडल"                                                             |
| TeleICU                                   | TeleICU                                        | Product/model name, kept in Latin script                                        |
| critical care                             | गहन चिकित्सा                                   | ICU context                                                                     |
| palliative care                           | पैलिएटिव केयर                                  | First mention on the page may add "(उपशामक देखभाल)"                             |
| home care / home visit                    | घर पर देखभाल / होम विज़िट                      |                                                                                 |
| caregiver                                 | देखभालकर्ता                                    |                                                                                 |
| plugin                                    | प्लगइन                                         |                                                                                 |
| release (noun / verb)                     | रिलीज़ / रिलीज़ करना                           |                                                                                 |
| encounter (clinical)                      | विज़िट                                         | Never "एनकाउंटर" (means a police killing in Hindi)                              |
| facility (health)                         | स्वास्थ्य केंद्र / केंद्र                      | Not "सुविधा", which reads as "feature"                                          |
| feature                                   | सुविधा / फ़ीचर                                 |                                                                                 |
| dashboard                                 | डैशबोर्ड                                       |                                                                                 |
| audit trail                               | ऑडिट ट्रेल                                     |                                                                                 |
| role-based access                         | भूमिका-आधारित एक्सेस                           |                                                                                 |
| access control                            | एक्सेस नियंत्रण                                |                                                                                 |
| terminology / terminology binding         | शब्दावली / शब्दावली बाइंडिंग                   | Clinical code systems                                                           |
| primitives (platform)                     | बुनियादी घटक                                   |                                                                                 |
| ecosystem                                 | इकोसिस्टम                                      |                                                                                 |
| maintainer                                | मेंटेनर                                        |                                                                                 |
| contributor                               | योगदानकर्ता                                    |                                                                                 |
| community                                 | समुदाय                                         |                                                                                 |
| assistive AI                              | सहायक AI                                       |                                                                                 |
| human-reviewed                            | मानवीय समीक्षा के साथ / इंसान द्वारा जाँचा गया |                                                                                 |
| scribe (AI)                               | स्क्राइब                                       | "AI स्क्राइब"                                                                   |
| documentation (software)                  | दस्तावेज़ीकरण                                  | "docs" → "दस्तावेज़"                                                            |
| documentation (clinical)                  | क्लिनिकल दस्तावेज़ीकरण                         |                                                                                 |
| public health                             | सार्वजनिक स्वास्थ्य                            |                                                                                 |
| health system                             | स्वास्थ्य प्रणाली                              |                                                                                 |
| healthcare                                | स्वास्थ्य सेवा                                 |                                                                                 |
| nonprofit                                 | गैर-लाभकारी                                    |                                                                                 |
| registry                                  | रजिस्ट्री                                      |                                                                                 |
| roadmap                                   | रोडमैप                                         |                                                                                 |
| referral                                  | रेफ़रल                                         |                                                                                 |
| care plan                                 | देखभाल योजना                                   |                                                                                 |
| inventory                                 | इन्वेंटरी                                      |                                                                                 |
| billing                                   | बिलिंग                                         |                                                                                 |
| pharmacy                                  | फ़ार्मेसी                                      |                                                                                 |
| lab / laboratory                          | लैब / प्रयोगशाला                               |                                                                                 |
| prescription                              | प्रिस्क्रिप्शन                                 |                                                                                 |
| admission / discharge                     | भर्ती / डिस्चार्ज                              |                                                                                 |
| bed / ward                                | बेड / वार्ड                                    |                                                                                 |
| triage                                    | ट्राइएज                                        |                                                                                 |
| veterinarian / veterinary                 | पशु चिकित्सक / पशु चिकित्सा                    |                                                                                 |
| volunteer                                 | स्वयंसेवक                                      |                                                                                 |
| procurement                               | खरीद                                           |                                                                                 |
| compliance                                | अनुपालन                                        |                                                                                 |
| certification                             | प्रमाणन                                        |                                                                                 |
| standards-based                           | मानक-आधारित                                    |                                                                                 |
| configurable                              | कॉन्फ़िगर करने योग्य                           |                                                                                 |
| form                                      | फ़ॉर्म                                         |                                                                                 |
| offline / online                          | ऑफ़लाइन / ऑनलाइन                               |                                                                                 |
| server / backup                           | सर्वर / बैकअप                                  |                                                                                 |
| field (programs, workers)                 | फ़ील्ड / ज़मीनी स्तर                           | "फ़ील्ड कार्यक्रम", "ज़मीनी अनुभव"                                              |
| foundation (OHC)                          | फ़ाउंडेशन                                      | "OHC Foundation" stays in Latin script as a name                                |
| mission                                   | मिशन                                           |                                                                                 |
| impact                                    | प्रभाव                                         |                                                                                 |
| solutions                                 | समाधान                                         |                                                                                 |
| resources                                 | संसाधन                                         |                                                                                 |
| FAQ                                       | सामान्य प्रश्न                                 | Navbar label                                                                    |
| Digital Public Goods (plural)             | डिजिटल पब्लिक गुड्स                            |                                                                                 |
| national rails                            | राष्ट्रीय डिजिटल प्रणालियाँ                    | ABDM-style national digital infrastructure                                      |
| sovereign hosting / deployment            | संप्रभु होस्टिंग / डिप्लॉयमेंट                 |                                                                                 |
| on-premise                                | ऑन-प्रिमाइसेस                                  |                                                                                 |
| cloud-agnostic                            | किसी खास क्लाउड पर निर्भर नहीं                 |                                                                                 |
| operating layer                           | संचालन परत                                     | "स्वास्थ्य सेवा की साझा संचालन परत"                                             |
| healthcare OS                             | स्वास्थ्य सेवा का ऑपरेटिंग सिस्टम / OS         |                                                                                 |
| structured (data, records)                | संरचित                                         |                                                                                 |
| auditability / auditable                  | ऑडिट-योग्यता / ऑडिट योग्य                      |                                                                                 |
| human-in-the-loop                         | ह्यूमन-इन-द-लूप                                |                                                                                 |
| user                                      | उपयोगकर्ता                                     |                                                                                 |
| questionnaire                             | प्रश्नावली                                     |                                                                                 |
| observation (clinical)                    | ऑब्ज़र्वेशन                                    |                                                                                 |
| vitals                                    | वाइटल्स                                        |                                                                                 |
| escalation                                | एस्केलेशन                                      |                                                                                 |
| handover                                  | हैंडओवर                                        |                                                                                 |
| dispense / dispensing                     | दवा वितरण                                      |                                                                                 |
| substitutions (drugs)                     | विकल्प दवाएँ                                   |                                                                                 |
| provider (care provider)                  | सेवा प्रदाता                                   |                                                                                 |
| Home Care Grid                            | होम केयर ग्रिड                                 | Solution name; "CARE होम केयर ग्रिड"                                            |
| Hospital Information System (HIS)         | हॉस्पिटल इन्फ़ॉर्मेशन सिस्टम (HIS)             |                                                                                 |
| blueprint / playbook                      | ब्लूप्रिंट / प्लेबुक                           |                                                                                 |
| copilot                                   | कोपायलट                                        |                                                                                 |
| South-to-South                            | दक्षिण-दक्षिण सहयोग                            |                                                                                 |
| system integrator (SI)                    | सिस्टम इंटीग्रेटर                              |                                                                                 |
| local body (panchayat, municipality)      | स्थानीय निकाय                                  |                                                                                 |
| NCD                                       | गैर-संचारी रोग (NCD)                           |                                                                                 |
| vaccination                               | टीकाकरण                                        |                                                                                 |
| Horizon 1/2/3 (roadmap)                   | चरण 1/2/3                                      |                                                                                 |
| Rogi Kalyan Samiti                        | रोगी कल्याण समिति                              | Established Hindi programme name                                                |

## Notes on specific choices

- **CARE Clinic desktop UI labels** (Save and apply, Install now, Later,
  Connect, Plugins tab, Updates tab, "Connect phone or tablet", "Connect to an
  existing server on the local network", Get started) stay in English inside
  Hindi sentences, because the app itself shows them in English. Update them
  if the app is localized.
- **GitHub label** `'good first issue'` stays in English; it is the literal
  label name.
- **Feature names with the Care brand** (Care Scribe, Care Ask,
  Care Form Builder Skill, Care Form Enhancer, CARE Onboarding) stay in Latin
  script. Generic feature names are translated (Doctor Summary → डॉक्टर सारांश,
  Realtime Voice Scribe → रियलटाइम वॉइस स्क्राइब).
- **Indian legal terms** use the official Hindi names: संगम ज्ञापन (MOA),
  संगम अनुच्छेद (AOA), धारा 8 कंपनी, कंपनी अधिनियम, 2013, आयकर अधिनियम, 1961,
  कॉर्पोरेट कार्य मंत्रालय. Brand-like government names (Aadhaar, NITI Aayog,
  NGO Darpan, Spree) stay in Latin script per the naming rule.
- **Testimonial quotes** are translated for meaning; names, roles' organization
  names and the @10BedICU handle stay as in English.
