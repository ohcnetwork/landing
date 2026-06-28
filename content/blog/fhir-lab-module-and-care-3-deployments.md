---
title: Building the FHIR-aligned lab module for CARE
excerpt: May 2025 advanced CARE HMIS with a FHIR-aligned lab module, Arike's CARE 3.0 migration, palliative care scale-out, and deeper hospital workflow discovery.
publishedAt: 2025-05-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: HMIS
    slug: hmis
  - title: Standards
    slug: standards
mainImage:
  src: "/blog/covers/fhir-lab-module-and-care-3-deployments.svg"
  alt: "Building the FHIR-aligned lab module for CARE cover illustration"
---

May 2025 brought one of the most important HMIS building blocks into focus: laboratory management.

Laboratory workflows are easy to underestimate. A test is not just a result printed on paper. It begins with an order, depends on specimen requirements, moves through collection and processing, produces observations, needs verification, and must return to the patient record in a form that clinicians can trust. It also connects to billing, storage rules, rejection criteria, and reporting.

CARE's lab module was designed around that full workflow rather than a shallow "enter result, print report" feature.

## A standards-aligned lab foundation

The May engineering focus was the first phase of a FHIR-aligned Laboratory Management Module.

The module allowed practitioners to order lab tests through structured questionnaires that could be embedded into clinical forms. This meant the request could originate naturally inside an encounter instead of forcing users into a separate disconnected process.

Administrators could define specimen types, collection methods, storage guidelines, preparation protocols, and rejection criteria for each test. Observation definitions could be configured and mapped to LOINC codes, giving each result a structured meaning rather than leaving it as free text. Charge definitions supported pricing, Indian GST slabs, and configurable discount rules such as student, women, or senior citizen discounts.

Activity definitions tied these pieces together. A lab or imaging activity could bundle specimen requirements, observation definitions, charges, report-generation settings, and the location where the activity should be performed.

This approach matters because a lab module is also a data-quality module. If service requests, specimens, observations, and reports are structured from the beginning, downstream clinical review, dashboards, and interoperability become much stronger.

## From request to verified report

The lab workflow covered the full path from order to report.

Role-based queues allowed lab areas such as microbiology, biochemistry, and radiology to view, filter, and prioritize service requests by status, priority, and patient details. Staff could collect specimen details including date, quantity, fasting status, collection site, and notes. Patient-UHID QR codes could be generated for specimen labeling.

Processing steps, such as centrifugation, could be configured and recorded. Observations could be created against patient profiles based on the configured observation definitions. Final diagnostic reports could then be produced, verified, and automatically attached to the patient encounter for clinician access.

This closed loop is what makes the module useful in a hospital context. The result is not an isolated document; it becomes part of the clinical record.

## Arike moves to CARE 3.0

May also included a major deployment milestone with Arike NGO.

Arike had been using CARE 2.0, and the team rolled out CARE 3.0 with hands-on training for staff across the new UI flows, dynamic forms, and core module improvements. Existing patient and encounter data were migrated into CARE 3.0, verified with the Arike team, and reconciled where discrepancies remained.

The migration was important because it tested CARE's ability to improve without abandoning live care data. A platform used in healthcare cannot treat upgrades as clean slates. Records must move safely, teams must be trained, and new workflows must be adopted with minimal downtime.

Arike also gave the team field feedback from nurses, doctors, and administrators. That feedback fed into UI and workflow improvements across modules.

## Kerala CARE expands beyond government facilities

The Kerala Palliative Care Grid continued scaling in May. The first phase of onboarding all primary-level government healthcare facilities and hospitals was completed. The second phase began, focused on registering palliative-care NGOs, CBOs, and secondary palliative care units so provider coverage could become more comprehensive.

Live online training sessions were delivered for NGO and secondary-unit registration workflows. New step-by-step demo videos were developed and shared. The team continued field support and review calls with NHM Kerala and held feedback workshops with doctors and community nurses.

By 31 May 2025, 226 NGOs had been registered on Kerala CARE and had started delivering care to patients. This was a crucial scale signal. The Grid was not only a government-facility system; it was beginning to represent the broader palliative care ecosystem.

## Sudheendra HMIS discovery deepens

On 28 May 2025, the team visited Sree Sudheendra Medical Mission Hospital to demonstrate prototype HMIS workflows and capture detailed requirements.

The demonstration covered the flow from reception check-in through final bill generation across reception, accounts, pharmacy, stores, laboratory, and administration. The team gathered feedback from hospital leadership, including the General Manager and Chief Medical Officer, especially on day-to-day accounting needs.

This visit sharpened the immediate roadmap for deployment. The lab module had reached its first phase, while pharmacy and billing were moving toward alpha. Discussions were also initiated with Odoo and Zoho to explore accounting integration options, because hospitals needed not only clinical workflows but also bookkeeping and financial reconciliation.

The lesson was clear: an end-to-end HMIS has to meet the hospital where it is. Clinical care, inventory, billing, and accounts are tightly connected in daily operations.

## Building credibility beyond one deployment

May included broader ecosystem work as well. A concise CARE pitch deck and demo video were prepared at `deck.ohc.network`, giving the team a clearer way to introduce CARE to partners. Dr. Athul Joseph Manuel from the clinical team co-authored OpenAI's HealthBench paper, contributing to the emerging standards conversation around safe AI use in healthcare.

The team also met representatives from ACT, eGov, and the Gates Foundation in Bangalore on 22 and 23 May to discuss the CARE roadmap and show development progress.

These activities strengthened CARE's identity as more than a single implementation project. It was becoming a health infrastructure platform with technical, clinical, and institutional credibility.

## A laboratory module that changed the HMIS trajectory

The May lab work changed the HMIS trajectory because it forced CARE to model a complete diagnostic pathway instead of a simple result-entry surface.

ServiceRequest, SpecimenDefinition, ObservationDefinition, ChargeDefinition, ActivityDefinition, queues, QR labels, report verification, and encounter attachment became part of one operating flow. That design made the later hospital deployment more credible because diagnostics could connect to clinical records, billing, reporting, and interoperability from the start.

Arike's CARE 3.0 migration and Kerala's NGO/CBO scale-out added another layer of proof: CARE could upgrade live deployments and expand provider networks while continuing to absorb field feedback. May did not just add a module. It tightened the relationship between standards, implementation, and continuity of care.
