---
title: Patient accounts and the next layer of CARE HMIS
excerpt: July 2025 added patient accounts, configurable identifiers, richer encounter views, appointment search, and the groundwork for deploying CARE HMIS in a real hospital environment.
publishedAt: 2025-07-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: HMIS
    slug: hmis
  - title: Product
    slug: product
mainImage:
  src: "/blog/covers/patient-accounts-care-hmis.svg"
  alt: "Patient accounts and the next layer of CARE HMIS cover illustration"
---

July 2025 added one of the most consequential layers in CARE HMIS: patient accounts.

Hospitals do not operate on clinical records alone. Every consultation, lab test, procedure, medicine, consumable, advance, invoice, payment, and outstanding balance has to be tracked accurately. If financial workflows are disconnected from care workflows, staff are forced into duplicate entry, reconciliation becomes fragile, and management loses visibility into day-to-day operations.

The Patient Accounts module was designed to connect billable activity to the encounter-level reality of care.

## Encounter-level financial tracking

CARE's Patient Accounts module supports end-to-end account management: capturing charges for billable services, generating invoices, recording and reconciling payments, tracking advances, and showing outstanding balances.

Charge item definitions allow facilities to configure billable services. When a service is prescribed, charges can auto-generate with the correct pricing, discounts, and applicable taxes. Each encounter creates its own account so charges can flow into the right clinical context rather than becoming a loose administrative entry.

The account overview gives staff a consolidated view of amount due, billed totals, payments received, advances, and outstanding balances. Quick actions let users review charges, create invoices, and record payments.

Invoice management allows staff to generate invoices by selecting unbilled charge items. Payments can be recorded as full or partial payments, and multiple payment methods are supported. Quick filters make it easier to search invoices, charge items, and payments.

This made CARE's HMIS story more complete. The platform could now begin to connect clinical orders, services, and financial settlement in a single patient-centered workflow.

## Configurable identity and tagging

July also improved patient and encounter identity.

Facilities can configure patient identifiers according to their local needs, whether official IDs such as PAN or Aadhaar, hospital-assigned numbers, or other instance-specific identifiers. Multiple identifiers can be linked to a single patient.

This flexibility is crucial in India, where healthcare institutions may use different legacy identifiers, government IDs, local hospital numbers, and program-specific IDs. A rigid identifier model would make adoption harder and data migration more painful.

Patient tags, encounter tags, and appointment tags were also added. Facilities can use tags to classify patients by economic background, illness type, care priority, visit type, program affiliation, or other local categories. Tags are simple, but they make workflows more adaptable to real institutional needs.

## A richer encounter overview

The redesigned Encounter Overview page gave clinicians a more complete view of the patient journey.

The new Clinical History tab consolidated encounters from the first visit to the present, making it easier to review prior care. Vitals comparison allowed users to compare current readings with previous values during consultation. Action buttons were streamlined so tasks such as assigning a location or department could be completed faster.

The platform also added support for assigning a treating doctor to inpatient records, with the treating doctor's name appearing in discharge and treatment summaries. This aligned CARE with government hospital protocols where inpatient files are formally under a responsible doctor.

These improvements made the encounter page less of a static record and more of a working clinical surface.

## Scheduling and front-desk improvements

July included several improvements that would later matter deeply for hospital pilot readiness.

Appointments could be searched by patient identifiers, making it easier to locate bookings in high-volume environments. Appointments could be grouped by practitioners so staff could coordinate schedules across multiple providers. A patient profile could be opened directly from the appointments list without requiring date-of-birth validation.

Appointments could also be rescheduled to another practitioner within the same facility, allowing flexible reallocation when availability changed.

The patient address field gained support for location links, so staff could open an exact location in maps. For home-based care and palliative follow-up, this small feature can reduce operational confusion.

## Better forms, uploads, and validation

The questionnaire editor was optimized for mobile view, with support for case-sensitive text, a sticky sidebar, and inline question insertion after each question. This reduced the friction of building and editing long clinical forms.

File upload gained support for selecting a preferred camera when multiple cameras were available. The validation layer was upgraded to Zod v4, improving type inference, error messaging, schema consistency, and the safety of form handling.

These changes may sound technical, but they make implementation easier. A platform that can be configured safely and quickly is more likely to adapt to different hospitals without becoming brittle.

## Kerala CARE continues scaling

While the HMIS financial layer advanced, the Kerala Palliative Care Grid continued to scale after its formal public launch.

The Government of Kerala began planning to expand the Grid to secondary and tertiary healthcare units and NGOs. Discussions with NHM focused on new roles, access rights, data collection for secondary and tertiary settings, NGO and volunteer integration, and dashboards for monitoring expanded operations.

By 31 July 2025, Kerala CARE had crossed 1.8 lakh patient registrations and more than 4 lakh cumulative home visits.

This continued growth reinforced a central product lesson: CARE needed to support both patient-level clinical workflows and program-level governance at the same time.

## Preparing for Sudheendra

July also began concrete groundwork for the Sree Sudheendra Medical Mission Hospital HMIS pilot.

The team conducted multiple hospital visits to understand the operational environment, map existing workflows, define questionnaire requirements, and document prerequisites for a staged go-live. This preparation covered clinical, administrative, and operational workflows and began turning CARE's modules into a deployment plan.

The team also welcomed Gauritejas A as Product Operations Manager, strengthening daily operations, deployment coordination, and implementation capacity. This was important because by July, CARE was no longer only a software effort. It was a multi-deployment operational program.

## Accounts changed CARE's center of gravity

Patient Accounts changed CARE's center of gravity because it connected clinical activity to institutional operations.

Before this layer, CARE could represent patients, encounters, orders, lab workflows, pharmacy requests, and forms. With accounts, each billable service could flow into charges, invoices, payments, advances, and balances at the encounter level. That made the system more usable for the people who actually keep a hospital running: reception, pharmacy, lab, billing, accounts, and management teams.

Configurable identifiers, tags, appointment search, richer encounter views, and Sudheendra groundwork made the same point from another direction. CARE was becoming a shared core that could carry local variation without losing the integrity of the record.
