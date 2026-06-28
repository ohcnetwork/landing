---
title: CARE HMIS goes live in a multi-specialty hospital pilot
excerpt: September 2025 marked the launch of the CARE HMIS pilot at Sree Sudheendra Medical Mission Hospital, with reception, ENT, casualty, pharmacy, lab, billing, and scheduling workflows in live use.
publishedAt: 2025-09-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: HMIS
    slug: hmis
  - title: Deployment
    slug: deployment
mainImage:
  src: "/blog/covers/care-hmis-live-hospital-pilot.svg"
  alt: "CARE HMIS goes live in a multi-specialty hospital pilot cover illustration"
---

On 10 September 2025, CARE HMIS entered a live multi-specialty hospital environment at Sree Sudheendra Medical Mission Hospital in Kochi.

This was a different test from public health registration or module demonstrations. Sree Sudheendra brought the constraints of a real hospital: 200 beds, 26 clinical departments, 6,000 to 7,000 outpatient consultations per month, roughly 500 inpatient consultations per month, active legacy workflows, multiple staff categories, and limited training windows because care delivery could not stop for software onboarding.

The pilot was launched by Dr. M. I. Junaid Rahman, Medical Director of the hospital. For CARE, it became the first full-scale HMIS proving ground.

## Scheduling as the hospital entry point

September's engineering work sharpened the scheduling layer because appointments and queues are the first visible interface between patients and hospital operations.

CARE introduced a unified scheduling framework that could create appointments for doctors, nurses, diagnostic rooms, or service points from a single interface. The appointment page was restructured to show time slots, statuses, and patient details more clearly, with fewer steps to view, reschedule, or cancel appointments.

Real-time queue and check-in handling reduced duplicate or outdated queues. A command dialog gave front-desk operators keyboard-driven actions such as creating an appointment or opening a patient profile. Calendar rendering and scheduling performance were refactored so the system could handle thousands of appointments more efficiently.

This scheduling work was not isolated UI polish. It became the coordination layer for downstream clinical, billing, lab, and pharmacy workflows.

## Pharmacy, lab, billing, and patient context mature together

The September release improved several HMIS modules in parallel.

Pharmacy gained integrated medicine and consumable dispensing, stock return and adjustment flows, expiry-based lot selection, faster purchase-order-to-stock-receipt navigation, and a clearer dispensing drawer. These changes reduced the risk of dispensing errors and improved stock reconciliation.

Laboratory workflows gained barcode-enabled specimen tracking, QR code support for specimen labels, standardized diagnostic report templates, and tighter linkage between specimen collection, testing, billing, and clinical records. Observation interpretations were introduced so diagnostic tests could carry structured reference ranges and classify results as normal, low, or high based on parameters such as age and gender.

Billing and accounts improved through faster charge item creation, invoice validation, reconciliation checks, unified financial dashboard views, standardized charge definition selection, mobile-responsive billing, and conditional discount components.

Patient management also became richer. Registration forms could be extended with facility-level identifiers, patient profiles displayed active and completed tokens, search logic improved for large patient volumes, and patient home pages surfaced demographics, visit summaries, and outstanding invoices.

These changes mattered because hospital workflows rarely stay inside one module. Registration affects queues. Consultation creates service requests. Lab and pharmacy activity affect billing. Billing needs patient identifiers and auditability. CARE had to connect these flows coherently.

## Onboarding departments in a live hospital

The implementation team worked on-site across major hospital departments.

Hospital management and administrative teams were trained on CARE workflows for oversight, reporting, and approval management. The team audited IT infrastructure, evaluated on-premise deployment options, shared hosting specifications, and coordinated with IT vendors on server procurement.

Reception was a critical early focus. Eleven reception staff were trained on patient registration, appointment booking, queue management, and billing workflows. Multiple rounds of handholding were required because reception errors can quickly cascade into patient waiting, queue confusion, and downstream billing problems.

The ENT department became an early clinical pilot with one doctor and five nursing staff trained on outpatient workflows, service request creation, medicine prescription, and clinical data management.

The Casualty department added higher operational complexity: eight doctors and eighteen nursing staff across multiple shifts were onboarded for emergency registration, triage, and encounter management.

## Digitizing pharmacy and laboratory operations

Sree Sudheendra's pharmacy required complete inventory digitization. Medicines, consumables, and implants were structured into CARE as charge items and product knowledge. Twelve pharmacy staff were trained through practical sessions on dispensing, billing, and inventory workflows, with continuous on-site support during live operations.

The laboratory module required configuration of specimen definitions, observation definitions, and activity definitions for all tests. Thirteen laboratory staff were trained, and the team supported live test runs to validate data accuracy and process adherence.

This kind of configuration work is where an HMIS becomes real. A demo lab module is easy to show. A hospital's actual test catalog, specimen rules, report formats, billing links, and staff workflows are much harder to operationalize.

## Kerala CARE keeps scaling in the background

While the hospital pilot launched, the Kerala Palliative Care Grid continued operating at state scale. As of 30 September 2025, it had recorded 218,000 patient registrations and 649,000 home visits. A leadership brief in the report also referenced 2.25 lakh registrations and more than 7 lakh home visits, reflecting the fast-moving nature of the live program and the need for consistent definitions across dashboards.

The engineering team initiated facility-level dashboard development so local administrators could review patient load, visits, and service utilization, while district and state teams could monitor performance. NHM teams previewed improved encounter overviews, clinical history modules, and appointment workflows before statewide release.

"Santhwana Mithram - Your Palliative Care Friend" also emerged in this period as a proposed initiative to create a 30,000-member palliative care workforce, primarily women trained through PHCs, to provide optional paid home-care support. CARE's public dashboard and operational data became part of that planning conversation.

## A foundation begins to take legal shape

September was also significant institutionally. The Ministry of Corporate Affairs approved the name "Open Healthcare Network Foundation" for the new Section 8 company, and incorporation documentation was underway.

That step gave the open-source CARE ecosystem a more durable institutional path. As CARE moved into live hospitals, statewide public health, and partner deployments, it needed stewardship structures beyond project execution.

## The pilot's technical meaning

The Sree Sudheendra pilot validated CARE in the hardest environment it had faced so far: a functioning hospital with active patient flow and multiple departments moving at once.

The work exposed predictable frictions: limited staff availability for training, parallel use of legacy systems, resistance to changing familiar workflows, shared devices, and the need for continuous on-site support. But it also showed that CARE's modular architecture could carry a connected HMIS flow across reception, ENT, casualty, pharmacy, lab, billing, scheduling, and patient management.

September did not finish the hospital deployment. It created the first live operating proof that CARE could become an end-to-end HMIS, not only a collection of modules.
