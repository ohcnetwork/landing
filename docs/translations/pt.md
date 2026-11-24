# Portuguese (pt-BR) glossary

Reference for the Brazilian Portuguese catalogs in `src/messages/pt/`. Use these
renderings consistently. If you change a term here, update every catalog that
uses it.

## Conventions

- **Variety.** Brazilian Portuguese (pt-BR): equipe, registro, usuário, arquivo,
  tela, aplicativo, cadastro, contato.
- **Register.** Institutional and factual. Address the reader as "você" or with
  impersonal constructions ("é possível", "pode ser implantado"). No slang, no
  hype words ("revolucionário", "incrível").
- **Buttons and links.** Imperative in the "você" form, short: "Conheça o CARE",
  "Apoie o bem comum", "Fale conosco", "Saiba mais".
- **Capitalization.** Sentence case in headings, buttons and menus. Month names
  and language names are lowercase ("março de 2026", "português").
- **Names stay in English.** CARE, CARE Core, CARE AI, CARE HMIS, CARE Clinic,
  CARE TeleICU, CARE Apps, Care Janwar, Palliative Care Grid (as a product name),
  10BedICU, Open Healthcare Network, OHC, OHC Foundation, standards and acronyms
  (FHIR, SNOMED CT, LOINC, ABDM, HL7, DICOM, API, HMIS, EMR, LMIS, MIT License,
  GitHub), organization and people's names.
- **Gender of names.** "a OHC" / "a Open Healthcare Network" / "a OHC
  Foundation" (a fundação, a rede); "o CARE", "o CARE Core", "o CARE Clinic",
  "o Care Janwar", "o Palliative Care Grid", "o 10BedICU" (o software, o
  programa, o projeto). Contractions follow: "do CARE", "no CARE", "da OHC".
- **Acronyms.** English acronyms stay (API, EMR, HMIS, ICU in names). Generic ICU
  in prose is "UTI". Generic AI is "IA" (but CARE AI stays). DPG stays as the
  acronym of the registry label ("DPG verificado").
- **Numbers.** Values never change. Plain quantities use Brazilian separators
  (1.200 leitos, 99,9%); version numbers, standards and codes stay as written
  (FHIR R5, v2.1, ISO 27001). Indian units like lakh/crore stay as in English
  when they are part of a cited figure.
- **Placeholders and tags.** Keep `{name}` and `<tag>…</tag>` exactly; move them
  where Portuguese grammar needs. ICU plurals: translate only the text inside
  `one {…}` / `other {…}`.
- **License.** "MIT License" is written "licença MIT" (badge: "Licença MIT"),
  the usual Portuguese form; "MIT" itself never changes.
- **Desktop app UI labels.** The CARE Clinic desktop app is English-only, so its
  button and tab names stay in English in running text: Save and apply, Install
  now, Later, Connect, "Connect phone or tablet", "Connect to an existing server
  on the local network", the Plugins and Updates tabs. Buttons on this website
  are referred to by their Portuguese labels ("Baixar o CARE Clinic").
- **"Direction" as a hedge.** English copy uses "X direction" for capabilities
  that are planned or partial ("triage direction", "claims direction"). Render
  it consistently as "direcionamento para X" so the hedge is not lost.
- **Indian legal and tax names.** Keep official names (Companies Act, Income Tax
  Act, Section 8/12A/80G, PAN, GST, FCRA, NGO Darpan, NITI Aayog, Ministry of
  Corporate Affairs) and add a short Portuguese gloss in parentheses at first
  mention where it helps.
- **Inclusive wording.** Prefer neutral forms where natural ("equipe de
  enfermagem", "pessoas", "especialista"); for named people, follow the person's
  known gender, otherwise use a neutral role label ("Direção de …").

## Terms

| English                              | Portuguese (pt-BR)                                           | Notes                                                                           |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Digital Public Good (DPG)            | Bem Público Digital (DPG)                                    | Plural: Bens Públicos Digitais. "Verified DPG" → "DPG verificado".              |
| Digital Public Goods registry        | registro de Bens Públicos Digitais                           | Digital Public Goods Alliance stays in English.                                 |
| digital public infrastructure (DPI)  | infraestrutura pública digital                               |                                                                                 |
| open source / open-source            | código aberto / de código aberto                             | "open-source software" → "software de código aberto".                           |
| open (infrastructure, standards)     | aberto(a)                                                    | "infraestrutura aberta", "padrões abertos".                                     |
| MIT licensed                         | sob licença MIT                                              | Badge: "Licença MIT".                                                           |
| self-hostable                        | auto-hospedável                                              | Prose: "que você pode hospedar na sua própria infraestrutura".                  |
| self-hosted                          | hospedado na própria infraestrutura                          |                                                                                 |
| vendor lock-in                       | dependência de fornecedor                                    | "license lock-in" → "dependência de licenças".                                  |
| steward (verb)                       | zelar por / ser guardiã de                                   | "OHC stewards CARE" → "a OHC é a guardiã do CARE".                              |
| stewardship                          | gestão responsável / guarda                                  | "long-term stewardship" → "gestão responsável de longo prazo".                  |
| steward (noun)                       | guardiã                                                      |                                                                                 |
| commons (the)                        | bem comum                                                    | "open healthcare commons" → "bem comum aberto da saúde".                        |
| shared core                          | núcleo compartilhado                                         |                                                                                 |
| open core                            | núcleo aberto                                                | Refers to CARE Core, not the business model.                                    |
| interoperability / interoperable     | interoperabilidade / interoperável                           |                                                                                 |
| longitudinal record                  | prontuário longitudinal                                      | "patient record" → "prontuário do paciente".                                    |
| clinician(s)                         | profissionais de saúde                                       | "clinical" → "clínico(a)".                                                      |
| funder                               | financiador                                                  |                                                                                 |
| governance                           | governança                                                   |                                                                                 |
| deployment / deploy                  | implantação / implantar                                      |                                                                                 |
| implementation                       | implementação                                                |                                                                                 |
| implementation partner               | parceiro de implementação                                    |                                                                                 |
| implementer                          | equipe de implementação / implementador                      |                                                                                 |
| rollout                              | expansão / implantação gradual                               |                                                                                 |
| onboarding                           | integração (de equipes, parceiros)                           | "patient onboarding" → "cadastro".                                              |
| go-live                              | entrada em operação                                          |                                                                                 |
| workflow                             | fluxo de trabalho / fluxo                                    | Clinical: "fluxo clínico", "fluxo assistencial".                                |
| TeleICU                              | TeleICU (name) / tele-UTI (generic)                          |                                                                                 |
| hub-and-spoke                        | modelo hub-and-spoke (central e unidades remotas)            | "hub" → "unidade central", "spoke" → "unidade remota".                          |
| ICU / critical care                  | UTI / terapia intensiva                                      |                                                                                 |
| bed (hospital)                       | leito                                                        |                                                                                 |
| rounds                               | visitas (rounds)                                             | "remote rounds" → "visitas remotas".                                            |
| handover                             | passagem de plantão                                          |                                                                                 |
| escalation                           | escalonamento                                                |                                                                                 |
| palliative care                      | cuidados paliativos                                          |                                                                                 |
| home-based care / home care          | cuidado domiciliar / atenção domiciliar                      |                                                                                 |
| caregiver                            | cuidador                                                     |                                                                                 |
| encounter                            | atendimento                                                  |                                                                                 |
| OP / IP                              | ambulatorial / internação                                    |                                                                                 |
| registration (patient)               | cadastro                                                     |                                                                                 |
| orders                               | solicitações (de exames, procedimentos)                      |                                                                                 |
| referral                             | encaminhamento                                               |                                                                                 |
| care plan                            | plano de cuidado                                             |                                                                                 |
| prescription                         | prescrição                                                   |                                                                                 |
| labs                                 | laboratório / exames laboratoriais                           |                                                                                 |
| billing                              | faturamento                                                  |                                                                                 |
| inventory                            | estoque                                                      |                                                                                 |
| facility (health)                    | unidade de saúde                                             |                                                                                 |
| district                             | distrito                                                     |                                                                                 |
| health ministry                      | ministério da saúde                                          |                                                                                 |
| public health                        | saúde pública                                                |                                                                                 |
| health system                        | sistema de saúde                                             |                                                                                 |
| plugin                               | plugin                                                       | Plural: plugins.                                                                |
| release (noun)                       | versão                                                       | "release process" → "processo de versões"; "release notes" → "notas de versão". |
| roadmap                              | roteiro                                                      | "technical roadmap" → "roteiro técnico".                                        |
| primitives                           | componentes fundamentais                                     |                                                                                 |
| audit trail                          | trilha de auditoria                                          |                                                                                 |
| role-based access                    | acesso baseado em perfis                                     |                                                                                 |
| terminology bindings                 | vinculações terminológicas                                   |                                                                                 |
| implementation guide                 | guia de implementação                                        |                                                                                 |
| FHIR-native / FHIR-aligned           | nativo em FHIR / alinhado ao FHIR                            |                                                                                 |
| standards-based                      | baseado em padrões                                           |                                                                                 |
| assistive AI                         | IA assistiva                                                 | "human-reviewed" → "revisado(a) por pessoas".                                   |
| data sovereignty / sovereign         | soberania de dados / soberano                                |                                                                                 |
| data residency                       | residência de dados                                          |                                                                                 |
| on-premise                           | local / em servidores próprios                               |                                                                                 |
| contributor                          | colaborador                                                  |                                                                                 |
| maintainer                           | mantenedor                                                   |                                                                                 |
| community                            | comunidade                                                   |                                                                                 |
| repository                           | repositório                                                  |                                                                                 |
| pull request / issue                 | pull request / issue                                         |                                                                                 |
| grant                                | doação (grant) / subsídio                                    | "grant funding" → "financiamento por doação".                                   |
| CSR                                  | responsabilidade social corporativa (CSR)                    | Indian CSR law context.                                                         |
| board / advisors                     | conselho / consultores                                       | "Board & Advisors" → "Conselho e consultores".                                  |
| nonprofit                            | organização sem fins lucrativos                              |                                                                                 |
| field (programs, workflows)          | de campo                                                     |                                                                                 |
| evidence                             | evidências                                                   |                                                                                 |
| press kit                            | kit de imprensa                                              |                                                                                 |
| dashboard                            | painel                                                       |                                                                                 |
| download                             | baixar                                                       | Noun: "download".                                                               |
| setup                                | configuração                                                 |                                                                                 |
| blueprint (solution)                 | modelo (de solução / de implantação)                         |                                                                                 |
| deployment pattern                   | modelo de implantação                                        |                                                                                 |
| playbook                             | manual de execução                                           | Short form: "manual".                                                           |
| human-in-the-loop                    | com revisão humana no processo                               | Short form: "com revisão humana".                                               |
| national rails                       | infraestruturas digitais nacionais                           | Eyebrow/label: "Infraestrutura nacional".                                       |
| claims (insurance)                   | reembolsos / solicitações de reembolso                       |                                                                                 |
| scheme (government health scheme)    | programa governamental de saúde                              |                                                                                 |
| token display (queue)                | painel de senhas                                             | "token" → "senha" (queue ticket).                                               |
| NCD                                  | DCNT (doenças crônicas não transmissíveis)                   |                                                                                 |
| One Health                           | Saúde Única                                                  |                                                                                 |
| animal owner / keeper                | tutor / responsável                                          |                                                                                 |
| host computer (CARE Clinic)          | computador principal                                         |                                                                                 |
| Home Care Grid / CARE Home Care Grid | Home Care Grid (name) / rede de atenção domiciliar (generic) | Keep the name when it labels the product.                                       |
| primary care center                  | unidade de atenção primária                                  |                                                                                 |
| local body (India)                   | governo local                                                |                                                                                 |
| union territories (India)            | territórios da união                                         |                                                                                 |
| AI scribe                            | escriba com IA / escriba médico com IA                       | Care Scribe stays.                                                              |
| voice fill                           | preenchimento por voz                                        | "voice-native forms" → "formulários com entrada por voz".                       |
| summarization                        | resumos / geração de resumos                                 |                                                                                 |
| mobile-first                         | pensado para o celular                                       |                                                                                 |
| cloud-agnostic                       | independente de provedor de nuvem                            |                                                                                 |
| Hospital Information System (HIS)    | sistema de informação hospitalar (HIS)                       | Acronyms HIS/HMIS stay.                                                         |
| OPD / IPD                            | ambulatório / internação                                     |                                                                                 |
| discharge summary                    | resumo de alta                                               |                                                                                 |
| handover chart                       | quadro de passagem de plantão                                |                                                                                 |
| score calculator                     | calculadora de escores                                       |                                                                                 |
| ISO standard                         | norma ISO                                                    | Generic "standards" stays "padrões".                                            |
