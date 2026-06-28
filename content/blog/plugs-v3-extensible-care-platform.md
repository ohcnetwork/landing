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

This work was not just a developer convenience. It marked a shift in how CARE can support diverse healthcare deployments while protecting the shared core.

## A new plugin architecture

CARE deployments vary widely. A palliative care organization, a multi-specialty hospital, a public health program, and a specialized clinic may all need different workflows, integrations, dashboards, forms, and user interfaces.

Plugs V3 was designed to make that customization safer and more scalable. The rebuilt architecture introduced:

- Hot-reloading for faster development.
- Environment-based plugin configuration.
- The ability to replace parts of the application with custom plugins.
- A cleaner foundation for external integrations.
- A lower barrier for adapting CARE to local workflows without forking the platform.

This matters because open healthcare infrastructure has to balance two competing needs. The core must stay coherent, secure, and maintainable. Deployments must still be able to adapt CARE to their clinical, operational, and regulatory realities. Plugs V3 gives CARE a stronger way to do both.

## Faster clinical documentation

May also improved clinical documentation speed and accuracy. Keyboard shortcuts allowed medical staff to add service requests, add medications, and update encounters faster during busy clinic hours.

Encounters linked to appointments or tokens could be completed in a single action, marking the encounter, appointment, and token complete together. This removed a multi-step administrative process at the end of patient interactions.

Weekly medication charts could be printed in landscape format, making long-term treatment documentation easier to review. Facility logos and patient custom fields were improved on printed documents, helping patient-facing outputs feel more complete and professional.

## More practical billing and inventory workflows

Billing staff gained the ability to edit invoice dates, payment terms, and notes. Staff could navigate directly to payment sheets from accounts and invoices. Pharmacy teams could cancel completed medication deliveries when corrections were needed.

Inventory work also improved through an internal store management view, rounded inventory quantities, and reports on total stock value.

These updates were rooted in live deployment feedback. Hospitals need clean workflows for ordinary cases, but they also need correction paths for real operational exceptions.

## HMIS dashboards become more precise

The Sree Sudheendra dashboard set was refined further. Casualty encounters were excluded from doctor-wise OP count reports where they distorted reporting. OT and casualty beds were removed from IP and bed occupancy metrics. Open encounter reports gave teams an actionable view of unresolved records.

New cards tracked average service requests per patient and diagnostic volumes and revenue for X-rays, lab tests, and scans. Practitioner-level appointment filtering improved visibility into actual workload rather than who booked an appointment.

These dashboard refinements show a maturing analytics layer. The question was no longer "can we show data?" It became "does this data match the decision the user is trying to make?"

## Palliative deployments mature together

Dashboard work also advanced across Pallium India, Niram, Arike, and Kerala CARE. Reports were updated for medication dispensing, purchases, practitioner appointment filtering, comfort devices, patient care requests, and data quality needs.

Operational support continued across multiple deployments. Open issues and requirements were tracked, documentation was updated, and demo videos were created to support onboarding and self-serve learning.

By May 2026, CARE had reached a new stage. The platform was not only running in large deployments. It was becoming easier to extend, easier to govern, easier to report from, and easier to adapt without losing the integrity of the shared core.
