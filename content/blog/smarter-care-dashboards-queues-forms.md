---
title: Smarter dashboards, queues, and clinical forms in CARE
excerpt: April 2026 focused on clinical extensibility, FHIRPath form logic, mobile queue boards, payment traceability, HMIS dashboards, and continued scale for the Kerala Palliative Care Grid.
publishedAt: 2026-04-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Product
    slug: product
  - title: AI
    slug: ai
mainImage:
  src: "/blog/covers/smarter-care-dashboards-queues-forms.svg"
  alt: "Smarter dashboards, queues, and clinical forms in CARE cover illustration"
---

April 2026 focused on making CARE smarter at the edges of care delivery. The platform continued improving core workflows, but the emphasis was increasingly on context-aware forms, richer dashboards, better queue experiences, and clinical extensibility.

The work showed CARE moving toward a future where deployments can adapt the platform more deeply without fragmenting the core.

## Dynamic clinical forms with FHIRPath

One of the most important platform improvements was support for computed extension fields using FHIRPath expressions. This allowed form designers to calculate field values based on related data.

In practice, this means clinical forms can become more context-aware. Instead of asking clinicians to manually compute values or duplicate information, CARE can derive data where appropriate and show it in the workflow.

This is an important foundation for intelligent clinical documentation. The aim is not to replace clinical judgment, but to reduce repetitive work and make structured data capture less burdensome.

## Billing and payment traceability

April introduced payment transfers between patient accounts with validation to prevent reconciliation errors. Payment IDs became visible across the interface and printed receipts. Account identifiers were added to charge item printouts.

Discount configuration also became more granular, and cash payment entry was simplified by hiding unnecessary reference number fields.

These improvements strengthened financial workflows in practical ways. Hospital accounting teams need traceability, but they also need the system to avoid unnecessary inputs that slow down routine work.

## Prescriptions, queues, and mobile workflows

Medication workflows gained support for multi-dosage instructions, allowing providers to express real prescribing patterns such as different doses at different times of the day.

The patient queue board became fully responsive for mobile and tablet use. A patient-level filter was added to token queues, and queue performance improved through better caching of practitioner information.

These changes reflected ongoing feedback from live hospital use. Staff often work across desks, wards, counters, and mobile devices. CARE had to make queues usable wherever the work happened.

## Dashboards for hospital management

The HMIS dashboard expanded with inpatient encounter tracking, bed occupancy views, open encounter monitoring, and consolidated operational and revenue views across OP, IP, casualty, diagnostics, lab, pharmacy, scans, and X-rays.

These dashboards gave management a single view of operational activity and financial performance. They also surfaced data hygiene issues, such as encounters marked discharged but left open.

For palliative care, dashboards added Schedule X medicine tracking, active user list refinements, visit type breakdowns, and facility listings by geo-organization.

## Field reinforcement and scale

At Sree Sudheendra, the team conducted retraining sessions for OP staff and doctors on the improved queue system. Mobile UI refinements were made from direct field feedback. Stock reconciliation support was provided after internal audits. Demo videos were refreshed to strengthen self-serve learning.

The Kerala Palliative Care Grid crossed 326,000 registered patients and 1.545 million recorded encounters. Role hierarchy definition continued with NHM, and infrastructure review discussions were held for the next phase of expansion.

April made CARE more operationally aware. Dashboards improved decision-making, queues became more usable, billing became more traceable, and clinical forms began moving toward intelligent, standards-based extensibility.
