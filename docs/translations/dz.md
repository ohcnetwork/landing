# Dzongkha (རྫོང་ཁ, `dz`) glossary and style notes

Machine-assisted translation of the Open Healthcare Network website. **A fluent
Dzongkha reviewer must check this before release.** Terms marked _low_ are the
first ones to review.

Type: **E** = established Dzongkha term (DDC / Royal Government usage),
**C** = coinage or descriptive phrase, **T** = transliteration,
**L** = kept in Latin script.

Confidence: _high_ / _medium_ / _low_.

## Style notes

- Standard written Dzongkha (DDC), not Chöke or Lhasa Tibetan. Use Dzongkha
  grammar words: plural `ཚུ`, dative/locative `ལུ`, `ནང་` (in), `གུ` (on),
  `ལས་` (from), copula `ཨིན`, existential `ཡོད`/`ཡོདཔ་ཨིན`, `འབད` (do),
  `ཚུགས` (can), `དགོ` (need), `ག་ར` (all), `ལེ་ཤ` (many), `རྐྱངམ་ཅིག` (only),
  `ལཱ` (work), `ང་བཅས` (we/us), conditional `-བ་ཅིན`/`-པ་ཅིན`, relative `-མི`.
- Sentences end with a shad `།`. Short labels, buttons, badges, menu items and
  headings that have no full stop in English get no shad.
- A syllable ending in `ག` is followed by a space instead of a shad inside a
  sentence or list (`འགེངས་ཤོག ཐ་སྙད།`); `ང` keeps its tsheg before a shad (`ང་།`).
- No spaces between Tibetan words. A space is used only after a shad
  (`། `), after a `ག` that ends a phrase, and around Latin-script words
  (`CARE གིས་`, `ཁ་ཕྱེ་བའི་ API ཚུ`).
- Lists of three or more items are separated with `། ` (shad + space); two
  items are joined with `དང་`.
- Questions use Dzongkha question forms (`…ག་ཅི་ཨིན་ན།`, `…ཨིན་ན།`,
  `…འབད་ཚུགས་ག།`) and end with a shad, not `?`.
- Buttons are short. Requests to the reader use the polite `གནང་`
  (`ང་བཅས་དང་འབྲེལ་བ་འཐབ་གནང་།`); "view/explore" uses honorific `གཟིགས`.
- "You/your" is avoided where possible (impersonal phrasing, `རང་སོའི་` "one's
  own"); where needed, `ཁྱོད་` is used with polite verbs.
- Product, standard and organization names, acronyms, URLs and people's names
  stay in Latin script (CARE, CARE Core, FHIR, ABDM, GitHub, OHC Foundation…).
  Indian place names are transliterated (`རྒྱ་གར་`, `ཀེ་ར་ལ་`).
- Numbers stay as Arabic numerals, exactly as in English.

## Glossary

| English                             | Dzongkha                                     | Type  | Confidence / notes                                                                           |
| ----------------------------------- | -------------------------------------------- | ----- | -------------------------------------------------------------------------------------------- |
| health                              | འཕྲོད་བསྟེན་                                 | E     | high (Ministry of Health = འཕྲོད་བསྟེན་ལྷན་ཁག)                                               |
| healthcare, health services         | འཕྲོད་བསྟེན་ཞབས་ཏོག་                         | E     | high                                                                                         |
| public health                       | མི་མང་འཕྲོད་བསྟེན་                           | E     | high                                                                                         |
| health system                       | འཕྲོད་བསྟེན་རིམ་ལུགས་                        | E     | high                                                                                         |
| hospital                            | སྨན་ཁང་                                      | E     | high                                                                                         |
| clinic                              | སྨན་བཅོས་ཁང་                                 | C     | medium                                                                                       |
| health facility                     | འཕྲོད་བསྟེན་ལས་ཁང་                           | C     | medium                                                                                       |
| patient                             | ནད་པ་                                        | E     | high                                                                                         |
| doctor                              | སྨན་པ་                                       | E     | high                                                                                         |
| nurse                               | ནད་གཡོག་པ་                                   | E     | high                                                                                         |
| clinician                           | སྨན་བཅོས་པ་                                  | C     | **low** — "one who gives medical treatment"; covers doctors, nurses and other clinical staff |
| clinical                            | སྨན་བཅོས་ཀྱི་                                | C     | medium                                                                                       |
| patient record                      | ནད་པའི་ཐོ་ཡིག་                               | C     | medium                                                                                       |
| registration                        | ཐོ་བཀོད་                                     | E     | high                                                                                         |
| critical care                       | ནད་གཞི་ཚབས་ཆེན་གྱི་སྨན་བཅོས་                 | C     | medium                                                                                       |
| ICU                                 | ICU                                          | L     | kept; commonly used in Bhutanese hospitals                                                   |
| palliative care                     | ན་ཟུག་སེལ་ཐབས་ཀྱི་ལྟ་རྟོག་                   | C     | **low** — "care to relieve suffering/pain"                                                   |
| care (looking after patients)       | ལྟ་རྟོག་                                     | E     | medium in this sense                                                                         |
| home-based care                     | ཁྱིམ་ནང་ལྟ་རྟོག་                             | C     | medium                                                                                       |
| emergency                           | ཛ་དྲག་                                       | E     | high                                                                                         |
| laboratory                          | བརྟག་དཔྱད་ཁང་                                | E     | high                                                                                         |
| pharmacy                            | སྨན་མཛོད་                                    | C     | medium                                                                                       |
| prescription                        | སྨན་ཐོ་                                      | E     | medium                                                                                       |
| referral                            | ནད་པ་གཏང་བསྐྱལ་                              | C     | **low**                                                                                      |
| billing                             | དངུལ་རྩིས་                                   | C     | medium                                                                                       |
| animal health                       | སེམས་ཅན་འཕྲོད་བསྟེན་                         | C     | medium                                                                                       |
| veterinary                          | ཕྱུགས་སྨན་                                   | E     | high                                                                                         |
| software                            | མཉེན་ཆས་                                     | E     | medium-high (DDC ICT glossary)                                                               |
| computer                            | གློག་རིག་                                    | E     | high                                                                                         |
| open source                         | འབྱུང་ཁུངས་ཁ་ཕྱེ་བའི་                        | C     | medium — calque "source opened"                                                              |
| source code                         | འབྱུང་ཁུངས་ཀོཌ་                              | C+T   | medium                                                                                       |
| digital                             | ཌི་ཇི་ཊལ་                                    | T     | high (as in ཌི་ཇི་ཊལ་འབྲུག་ཡུལ)                                                              |
| Digital Public Good (DPG)           | ཌི་ཇི་ཊལ་མི་མང་རྒྱུ་དངོས་                    | C     | **low** — "digital public property"; acronym DPG kept                                        |
| infrastructure                      | གཞི་བཀོད་                                    | E     | high (Ministry of Infrastructure and Transport)                                              |
| digital public infrastructure       | ཌི་ཇི་ཊལ་མི་མང་གཞི་བཀོད་                     | C     | medium                                                                                       |
| system                              | རིམ་ལུགས་                                    | E     | high                                                                                         |
| operating system (OS)               | བཀོལ་སྤྱོད་རིམ་ལུགས་                         | C     | medium                                                                                       |
| platform                            | སྟེགས་བུ་                                    | C     | **low**                                                                                      |
| core (shared core)                  | སྙིང་པོ་ / མཉམ་སྤྱོད་སྙིང་པོ་                | C     | medium                                                                                       |
| self-hostable                       | རང་སོར་བཙུགས་ཚུགས་པ་                         | C     | **low** — "can be set up on one's own"                                                       |
| vendor lock-in                      | ཚོང་སྡེ་གཅིག་ལུ་བརྟེན་དགོཔ་                  | C     | medium — "without vendor lock-in" = ཚོང་སྡེ་གཅིག་ལུ་བརྟེན་མ་དགོ་པར་                          |
| implementation                      | ལག་ལེན་                                      | E     | high                                                                                         |
| implementation partner              | ལག་ལེན་མཉམ་འབྲེལ་པ་                          | C     | medium                                                                                       |
| partner / partnership               | མཉམ་འབྲེལ་པ་ / མཉམ་འབྲེལ་                    | E     | high                                                                                         |
| foundation (the organization)       | གཞི་རྩ་ཚོགས་པ་                               | C     | **low**; the names "OHC Foundation" and "Open Healthcare Network Foundation" stay in Latin   |
| non-profit                          | ཁེ་ཕན་མ་འཚོལ་བའི་ (ལས་སྡེ་)                  | C     | medium                                                                                       |
| organization, institution           | ལས་སྡེ་                                      | E     | high                                                                                         |
| NGO / civil society                 | གཞུང་མིན་ལས་སྡེ་                             | C     | medium                                                                                       |
| steward / stewardship               | བདག་འཛིན་འཐབ་ / བདག་འཛིན་                    | E     | medium in this sense                                                                         |
| commons                             | མཉམ་སྤྱོད་རྒྱུ་དངོས་                         | C     | **low** — "jointly used property"                                                            |
| interoperability / interoperable    | ཕན་ཚུན་མཉམ་ལས་ / ཕན་ཚུན་མཉམ་ལས་འབད་ཚུགས་པའི་ | C     | medium                                                                                       |
| standard(s)                         | ཚད་གཞི་                                      | E     | high                                                                                         |
| standards-based                     | ཚད་གཞི་ལུ་གཞི་བཞག་པའི་                       | C     | high                                                                                         |
| governance                          | གཞུང་སྐྱོང་                                  | E     | high                                                                                         |
| board                               | ཚོགས་ཆུང་                                    | E     | high                                                                                         |
| advisor                             | བློ་སྟོན་པ་                                  | C     | medium                                                                                       |
| mission (of the organization)       | ལས་འགན་                                      | E     | medium                                                                                       |
| government                          | གཞུང་                                        | E     | high                                                                                         |
| ministry                            | ལྷན་ཁག་                                      | E     | high                                                                                         |
| funder                              | མ་དངུལ་རྒྱབ་སྐྱོར་པ་                         | C     | medium                                                                                       |
| funding / funds                     | མ་དངུལ་                                      | E     | high                                                                                         |
| donor / donation                    | ཞལ་འདེབས་པ་ / ཞལ་འདེབས་                      | E     | high                                                                                         |
| deploy / deployment                 | བཙུགས་ / བཙུགས་སྦྱོར་                        | C     | medium                                                                                       |
| workflow                            | ལཱ་གི་བྱ་རིམ་                                | C     | medium                                                                                       |
| programme                           | ལས་རིམ་                                      | E     | high                                                                                         |
| app                                 | app                                          | L     | kept; "CARE Apps" stays as a name                                                            |
| plugin                              | ཁ་སྐོང་ཆ་ཤས་                                 | C     | **low** — "add-on component"                                                                 |
| integration                         | མཐུད་སྦྲེལ་                                  | C     | medium                                                                                       |
| module, component                   | ཆ་ཤས་                                        | E     | high                                                                                         |
| release / version                   | ཐོན་རིམ་                                     | C     | medium                                                                                       |
| data                                | གནས་སྡུད་                                    | E     | high                                                                                         |
| security                            | ཉེན་སྲུང་                                    | E     | high                                                                                         |
| privacy                             | སྒེར་གྱི་གསང་དོན་                            | C     | **low**                                                                                      |
| compliance                          | ཁྲིམས་མཐུན་                                  | C     | **low** — "in line with law and regulation"                                                  |
| audit / audit trail                 | རྩིས་ཞིབ་ / རྩིས་ཞིབ་རྗེས་ཤུལ་               | E / C | medium                                                                                       |
| access control                      | འཛུལ་སྤྱོད་ཚད་འཛིན་                          | C     | medium                                                                                       |
| form (data entry)                   | འགེངས་ཤོག་                                   | E     | high                                                                                         |
| report                              | སྙན་ཞུ་                                      | E     | high                                                                                         |
| documentation (docs)                | ཡིག་ཆ་                                       | E     | high                                                                                         |
| clinical documentation              | སྨན་བཅོས་ཡིག་ཐོ་                             | C     | medium                                                                                       |
| terminology                         | ཐ་སྙད་                                       | E     | high                                                                                         |
| community                           | མི་སྡེ་                                      | E     | high                                                                                         |
| contributor / contribution          | ཕན་འདེབས་པ་ / ཕན་འདེབས་                      | E     | high                                                                                         |
| developer                           | མཉེན་ཆས་བཟོ་མི་                              | C     | medium                                                                                       |
| engineer                            | བཟོ་རིག་པ་                                   | E     | high                                                                                         |
| technology                          | འཕྲུལ་རིག་                                   | E     | high                                                                                         |
| user                                | བཀོལ་སྤྱོད་པ་                                | C     | medium                                                                                       |
| license                             | ཆོག་ཐམ་                                      | E     | high; "MIT License" itself stays in Latin                                                    |
| training                            | སྦྱོང་བརྡར་                                  | E     | high                                                                                         |
| network (computer)                  | ཡོངས་འབྲེལ་                                  | C     | medium                                                                                       |
| network (of people / organizations) | མཉམ་འབྲེལ་དྲ་བ་                              | C     | **low**                                                                                      |
| internet / online                   | ཨིན་ཊར་ནེཊ་ / ཨིན་ཊར་ནེཊ་ཐོག་                | T     | medium                                                                                       |
| ecosystem                           | མཉམ་འབྲེལ་ཁོར་ཡུག་                           | C     | **low**                                                                                      |
| impact                              | ཤུགས་རྐྱེན་                                  | E     | high                                                                                         |
| evidence, proof                     | བདེན་དཔང་                                    | E     | high                                                                                         |
| verified                            | ར་སྤྲོད་འབད་ཡོད་པའི་                         | E     | medium                                                                                       |
| quality                             | སྤུས་ཚད་                                     | E     | high                                                                                         |
| transparency                        | དྭངས་གསལ་                                    | E     | high                                                                                         |
| accountability                      | འགན་འཁྲི་                                    | E     | high                                                                                         |
| sustainable                         | ཡུན་བརྟན་                                    | E     | high                                                                                         |
| AI                                  | AI                                           | L     | kept                                                                                         |
| cloud, server, API, dashboard       | cloud, server, API, dashboard                | L     | kept in Latin                                                                                |
| email                               | གློག་འཕྲིན་                                  | E     | high                                                                                         |
| update                              | དུས་མཐུན་                                    | E     | high                                                                                         |
| download                            | ཕབ་ལེན་                                      | E     | medium-high                                                                                  |
| free (of charge)                    | རིན་མེད་                                     | E     | high                                                                                         |
| telemedicine / remote               | ཐག་རིང་སྨན་བཅོས་ / ཐག་རིང་ལས་                | C     | medium                                                                                       |
| state (India) / district            | མངའ་སྡེ་ / རྫོང་ཁག་                          | E     | medium                                                                                       |
| blog                                | བློག་                                        | T     | high                                                                                         |
| FAQ                                 | རྒྱུན་འདྲིའི་དྲི་བ་                          | C     | medium                                                                                       |
| Home (navigation)                   | མ་ཤོག་                                       | E     | medium                                                                                       |
| careers                             | ལཱ་གི་གོ་སྐབས་                               | E     | high                                                                                         |

## Additional terms settled during translation

| English                           | Dzongkha                                          | Type  | Confidence / notes                                                                                 |
| --------------------------------- | ------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------- |
| Hospital Information System (HIS) | སྨན་ཁང་བརྡ་དོན་རིམ་ལུགས་                          | C     | medium; acronyms HIS / HMIS kept                                                                   |
| OPD / IPD                         | OPD / IPD                                         | L     | kept; outpatient / inpatient = ཕྱི་ནད་པ་ / ནང་ནད་པ་ (medium)                                       |
| encounter (patient visit)         | ནད་པ་བལྟ་ཞིབ་                                     | C     | medium                                                                                             |
| discharge                         | སྨན་ཁང་ལས་ཐོན་ནི་                                 | C     | medium                                                                                             |
| handover                          | ལཱ་འགན་རྩིས་སྤྲོད་                                | C     | medium                                                                                             |
| ward                              | ནད་པ་ཉལ་སའི་ཁང་མིག་                               | C     | **low**; palliative pages use སྤྱི་འོག་ (Bhutanese chiwog) for an Indian local-body ward — **low** |
| vital signs                       | གསོན་རྟགས་                                        | C     | **low**                                                                                            |
| insurance / claims                | ཉེན་བཅོལ་ / ཉེན་བཅོལ་དངུལ་ཞུ་                     | E / C | high / medium                                                                                      |
| scribe (AI documentation)         | ཡིག་འབྲི་པ་                                       | C     | medium; product name "Care Scribe" stays in Latin                                                  |
| AI model                          | model (Latin)                                     | L     | kept in Latin                                                                                      |
| interface                         | མཐུད་ངོས་                                         | C     | **low**                                                                                            |
| screen / button                   | གསལ་གཞི་ / ཨེབ་རྟ་                                | E     | medium                                                                                             |
| backup / restore                  | རྒྱབ་འཇོག་ / སླར་གསོ་                             | C     | **low** / medium                                                                                   |
| encrypt                           | གསང་སྡོམ་                                         | C     | **low**                                                                                            |
| database                          | གནས་སྡུད་མཛོད་                                    | C     | medium                                                                                             |
| password                          | གསང་ཡིག་                                          | E     | medium-high                                                                                        |
| administrator                     | འཛིན་སྐྱོང་པ་                                     | E     | medium                                                                                             |
| volunteer                         | རང་སེམས་ཞབས་ཏོག་པ་                                | C     | medium                                                                                             |
| caregiver                         | ལྟ་རྟོག་པ་                                        | C     | medium                                                                                             |
| vulnerable (groups)               | ཉམ་ཆུང་                                           | E     | medium                                                                                             |
| primary care                      | གཞི་རིམ་འཕྲོད་བསྟེན་                              | C     | medium                                                                                             |
| follow-up                         | རྗེས་འདེད་བལྟ་ཞིབ་                                | C     | medium                                                                                             |
| escalation                        | ཡར་སྙན་ཞུ་                                        | C     | **low**                                                                                            |
| roadmap                           | འཆར་གཞིའི་ལམ་སྟོན་                                | C     | medium                                                                                             |
| (roadmap) horizon                 | རིམ་པ་                                            | C     | medium                                                                                             |
| website                           | ཝེབ་སཱའིཊ་                                        | T     | medium                                                                                             |
| cancer                            | འབྲས་ནད་                                          | E     | high                                                                                               |
| elderly                           | རྒན་འཁྲོགས་                                       | E     | high                                                                                               |
| Indian states                     | ཀེ་ར་ལ་ / ཀར་ན་ཊ་ཀ་ / ཇར་ཁཎཌ་ / ཨ་སམ་ / མ་ཎི་པུར་ | T     | medium; check spelling                                                                             |
