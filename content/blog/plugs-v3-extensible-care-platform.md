---
title: Plugs V3 and the extensible future of CARE
excerpt: May 2026 rebuilt CARE's plugin architecture, improved clinical documentation speed, expanded HMIS reporting, strengthened inventory and billing workflows, and matured analytics across palliative deployments.
publishedAt: 2026-05-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Architecture
    slug: architecture
  - title: HMIS
    slug: hmis
mainImage:
  src: "/blog/covers/plugs-v3-extensible-care-platform.svg"
  alt: "Plugs V3 and the extensible future of CARE cover illustration"
---

May 2026 delivered one of CARE's most important architectural upgrades: Plugs V3, a ground-up rebuild of the platform's plugin and extension system.

This was not only a developer-experience improvement. It was a response to the shape CARE had taken by mid-2026. The platform was supporting Sree Sudheendra Medical Mission Hospital, Pallium India, Niram, Arike, Kerala CARE, and other deployment conversations. Each environment had its own reporting needs, clinical forms, print formats, integrations, dashboards, and operational preferences.

The question was how to support that variation without turning CARE into a pile of forks.

## Plugs V3: customization without fragmentation

Plugs V3 introduced hot-reloading for faster development cycles, environment-based configuration, and the ability to replace any part of the application with custom plugins.

That changes the extension model. A hospital can adapt specific screens, workflows, integrations, or UI surfaces without permanently diverging from the shared core. External system integrations become easier. Deployment-specific requirements can be isolated instead of patched into the platform in ways that make future upgrades harder.

For open healthcare infrastructure, this balance is essential. The core must remain coherent, secure, and maintainable. Deployments must still be able to adapt to local clinical practice, institutional reporting, finance systems, and regulatory requirements.

Plugs V3 gives CARE a cleaner answer to that tension.

## Clinical intelligence through better search and context

May also improved clinical documentation and search behavior.

Custom fields can now appear only in relevant contexts. For example, emergency contact information can be shown exclusively inside emergency department screens. This reduces information overload and helps staff see the right data in the right workflow.

Diagnosis search became more forgiving by recognizing common names alongside formal medical terminology. A search for "Tennis Elbow" can surface "Lateral epicondylitis." This matters because clinical staff do not always search using formal coded terminology, especially during busy care delivery.

Service requests gained automatic unit selection where standard units are available. That reduces repetitive data entry and decreases the chance of unit-related mistakes when ordering tests or procedures.

These are small examples of clinical intelligence that do not require hype. They make structured systems easier for humans to use.

## Faster encounter closure and keyboard-driven care

CARE streamlined encounter completion for appointments and tokens. An encounter linked to an appointment or queue token can now be closed in one click, simultaneously marking the encounter, appointment, and token complete.

This removes a multi-step administrative process at the end of patient interactions. In a hospital or high-volume clinic, reducing closure friction helps keep queues accurate and records cleaner.

Medical staff also gained keyboard shortcuts to add service requests, add medications, and update encounter details. Surgical procedures and counselling service requests can be marked complete without recording results when that reflects the nature of the workflow.

Automatic token cancellation now happens when an appointment is cancelled, rescheduled, or marked entered-in-error. This keeps queues aligned with scheduling changes without relying on manual cleanup.

## Billing and inventory adapt to real corrections

May strengthened financial flexibility.

Billing staff can edit invoice issue dates, payment terms, and notes. Staff can navigate directly to payment sheets from account and invoice screens. Pharmacy staff can cancel medication delivery orders even after completion when an error needs to be corrected cleanly. External purchase workflows allow staff to continue adding items to delivery orders until the order is finalized.

These features reflect the reality of healthcare operations. Mistakes happen. Vendor deliveries change. Administrative entries need correction. A good HMIS should provide controlled correction paths instead of forcing workarounds outside the system.

Inventory gained a dedicated internal store view for managing stock across storage locations within a facility. Quantities in inventory management now display as whole numbers for easier review.

## Clinical documentation that survives paper handoffs

May improved print and documentation quality across clinical workflows.

Medication administration charts for long-term treatment can be printed week by week in landscape format, making extended schedules easier to review and document. Patient custom fields now appear on appointment slips and tokens, so printed documentation can reflect local identifiers or special notes. Facility logos are better placed across print materials.

Line breaks are preserved in form descriptions, which improves readability for multi-line instructions. Empty states became more contextual across pages such as token categories, activity definitions, and billing items.

The system also fixed several form-printing issues, including missing sub-question responses and missing section titles in print previews. Discharge timestamp accuracy improved so the actual discharge date and time from medical records is shown, not merely the time the status was changed.

These details are part of professional healthcare software. If printed outputs are unclear or incomplete, trust in the digital system weakens.

## Reports become deployment-specific intelligence

The HMIS dashboard work became more precise.

Operational reports were refined so casualty encounters were excluded from doctor-wise OP counts, and OT and casualty beds were removed from IP encounter and bed occupancy reports. Open encounter reports gave teams a facility-wide view of unresolved encounters. Service request and diagnostic volume cards tracked average service requests per patient and revenue from X-rays, lab tests, and scans.

Total stock value reporting gave pharmacy and operations teams a consolidated view of inventory worth. Medication dispense and purchase reports were updated to better match operational needs. Billed and paid charge item reports were updated for current financial tracking requirements.

Appointment tracking shifted to practitioner-level filtering across booked, checked-in, in-consultation, and fulfilled statuses, producing a more accurate view of workload than filtering by the person who booked the appointment.

Dashboard planning also continued with Kerala CARE and Arike. Requirements were gathered for the next phase, and existing queries for comfort devices and patient care requests were updated.

This is where Plugs V3 and reporting maturity meet. Deployments need dashboards that answer their own management questions without corrupting the shared product.

## Field readiness is a governance decision

May also showed that technically complete features still need operational readiness.

QR-based specimen tracking was supported in CARE, but rollout at Sree Sudheendra was held at hospital management's discretion until staff confidence was high enough. That is a healthy implementation posture. A feature should not be activated just because it exists; it should be introduced when the institution can use it safely.

The team also provided network improvement recommendations, supported token display optimization, captured open issues from palliative deployments, updated user documentation, and created demo videos for staff onboarding.

## The platform after the project rush

By May 2026, CARE had moved beyond the first-order question of whether it could support palliative care and hospital operations. It could.

The harder question became whether it could keep adapting across multiple deployments without losing the integrity of the core. Plugs V3, context-aware fields, better clinical search, controlled billing corrections, internal store views, deployment-specific reports, and improved documentation all point to that next platform stage.

CARE's extensibility is not about letting every deployment become different for its own sake. It is about allowing difference where healthcare practice genuinely differs, while preserving shared infrastructure for records, workflows, standards, governance, and trust.
