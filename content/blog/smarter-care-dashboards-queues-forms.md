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

April 2026 was about making CARE more context-aware at the edges of care delivery.

After the launch and stabilization phases, the platform's pressure points became more specific: smarter clinical forms, payment traceability, mobile queue boards, multi-dosage prescriptions, inventory clarity, print quality, dashboards that surface operational problems, and retraining that helps new workflows actually land.

The work in April shows CARE moving from digitization toward adaptive infrastructure.

## FHIRPath inside clinical forms

The most technically significant product improvement was support for computed extension fields using FHIRPath expressions.

This allows form designers to calculate field values dynamically based on related data. Instead of asking clinicians to duplicate information or manually compute derived values, CARE can show context-aware fields inside clinical documentation.

The capability was being tested by the clinical team. Its importance goes beyond one form feature. FHIRPath-based computation creates a foundation for smarter forms that remain grounded in structured clinical data, rather than opaque automation.

That is the right kind of intelligence for healthcare software: transparent, reviewable, and embedded inside the workflow.

## Payment traceability without billing friction

April strengthened financial workflows without making routine work heavier.

Payments and balances could be transferred between patient accounts with validation to prevent reconciliation errors. Payment IDs became visible across the interface and printed receipts. Account identifiers were added to charge item printouts. Granular global discount configuration improved financial governance.

The reference number field was hidden for cash payments, removing an unnecessary input that had created confusion during bank reconciliation. The "Add charge item" action was hidden for billed and inactive accounts, preventing accidental charges on closed records. Charge notes became more visible during review.

These changes reflect a practical billing philosophy: make audit trails stronger while removing inputs that do not belong in the workflow.

## Prescriptions and queues become more realistic

Medication workflows gained support for multiple dosing schedules for a single medication. Clinicians could specify different doses at different times of day without creating awkward workaround entries.

The queue board became fully responsive on mobile and tablet devices. Patient-level filtering was added to token queues, making it easier to locate a patient in high-volume settings. Practitioner information loaded faster through caching, reducing wait time when managing queues.

Encounter date validation improved data quality by allowing future dates only when an encounter was in planned status. The primary doctor became visible in the encounter information card, giving staff better context at a glance.

These changes made CARE more faithful to daily hospital behavior. Prescriptions vary across the day. Queues need mobile access. Data-entry rules need to prevent common mistakes without slowing staff down.

## Inventory and supply chain visibility

Internal stock transfer workflows gained date range filters, making it easier to track pending deliveries over time. Inventory items displayed their base unit of measurement, reducing ambiguity in stock handling. Delivery orders linked back to originating requisition orders, improving traceability across supply movement.

Supply delivery forms reset related fields when products changed, preventing stale data from carrying into the wrong record.

These are supply-chain controls disguised as UI details. In hospital operations, an unclear unit, stale form value, or unlinked delivery order can become a reconciliation problem later.

## Better documents, cleaner prints

CARE improved appointment and encounter printouts with patient identifiers, payment information, and session titles. Form builders could insert questions at specific positions instead of only appending at the end. Questionnaire draft behavior became configurable per facility instance.

Print and report fixes covered multi-dosage prescription printing, true/false questionnaire formatting, mobile print preview rendering, and faster diagnostic report PDFs.

Good print quality still matters in healthcare. Even a mostly digital workflow often produces receipts, appointment slips, diagnostic reports, discharge documents, and forms that must be legible, complete, and trusted by staff and patients.

## Dashboards move closer to management action

The HMIS dashboard gained IP encounter tracking, bed occupancy views, open encounter monitoring, and a consolidated operational and revenue view across OP, IP, casualty, scans, X-rays, lab tests, and pharmacy.

Open encounter monitoring was especially useful. It surfaced inpatient encounters marked as discharged but left open beyond a day, and outpatient encounters left open beyond a day. That turns dashboards into data hygiene tools, not just performance displays.

Palliative dashboards also matured. A Schedule X medicine dashboard provided visibility into controlled medicine handling and patient status. User lists were refined to show only users with encounters in the selected date range. The state dashboard separated community, secondary, and MLSP visits. Facility listing by geo-organization improved navigation across the program hierarchy.

Dashboards were becoming instruments for action: close records, monitor beds, review revenue, track controlled medicines, and identify active users.

## Retraining as part of product rollout

At Sree Sudheendra, the team retrained OP staff and doctors on the improved queue management system. Mobile UI refinements were made from field feedback gathered during retraining. Structured feedback sessions captured open issues across clinical and operational workflows.

The team also supported stock reconciliation by manually importing additional stock after an internal stock audit. Demo videos covering major system flows were refreshed and shared, improving self-serve learning and reducing dependency on live support.

This is a crucial implementation lesson: a feature is not fully shipped when it is merged. It is fully shipped when the people doing the work understand it, trust it, and can use it under pressure.

## Kerala CARE at 3.26 lakh patients

By April 2026, the Kerala Palliative Care Grid had crossed 3.26 lakh registered patients and 15.45 lakh recorded encounters.

The team worked with NHM to define a structured hierarchy of roles across the palliative care grid, formalizing accountability and access boundaries across state, district, and ward levels. A review with Kerala Digital University and NHM examined the technical infrastructure supporting Kerala CARE and planned for the next phase of expansion.

At this scale, infrastructure review becomes governance work. Hosting, roles, dashboards, and data quality all shape whether the program can grow without losing control.

## Context over feature count

April's improvements are best understood through one word: context.

FHIRPath gives forms data context. Payment IDs and account identifiers give finance teams audit context. Mobile queues give frontline teams operational context. Bed occupancy and open encounters give management review context. Role hierarchies give the statewide program accountability context.

The technical work is valuable because it helps the right person see the right information at the right point in the care process.
