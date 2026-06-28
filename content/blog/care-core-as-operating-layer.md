---
title: CARE Core as an operating layer for healthcare workflows
excerpt: CARE Core provides reusable primitives for patient records, encounters, orders, observations, tasks, care plans, reports, access control, audit trails, and APIs.
publishedAt: 2026-05-13
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Architecture
    slug: architecture
mainImage:
  src: "/blog/covers/care-core-as-operating-layer.svg"
  alt: "CARE Core as an operating layer for healthcare workflows cover illustration"
featured: true
---

CARE should not be understood only as a hospital application or a palliative care product. The more accurate frame is an operating layer for healthcare workflows.

That distinction matters because healthcare programs vary enormously. A statewide palliative care grid, a multi-specialty hospital, a palliative care institution, a primary care clinic, a TeleICU network, and a public health campaign do not need the same screen sequence. They do, however, need many of the same underlying primitives.

CARE Core is the shared layer that makes those primitives reusable.

## The primitives underneath care delivery

At the center of CARE are basic healthcare objects and workflows: patients, providers, facilities, organizations, locations, encounters, appointments, tokens, observations, service requests, medication requests, specimens, diagnostic reports, questionnaires, tasks, care teams, care plans, accounts, charge items, invoices, payments, inventory, roles, permissions, audit trails, dashboards, and APIs.

These are not abstract database nouns. They are the operating vocabulary of care.

A palliative nurse recording a home visit, a receptionist checking in an outpatient, a pharmacist dispensing medicines, a lab technician processing a specimen, a doctor reviewing past diagnoses, an accountant reconciling payments, and a state coordinator reviewing district performance are all touching different combinations of the same underlying primitives.

The strength of CARE Core is that it lets those workflows share a common base without forcing every deployment into the same interface.

## Core plus applications

The CARE ecosystem is better understood as Core plus applications and plugins.

CARE Core provides the standards-aligned engine. CARE Apps, deployment-specific workflows, and plugins compose that engine for different contexts: palliative care, HMIS, hospital dashboards, pharmacy, lab, billing, analytics, public health campaigns, or partner-specific reporting.

This is how CARE can support the Kerala Palliative Care Grid, Sree Sudheendra Medical Mission Hospital, Pallium India, Niram, Arike, and other deployments without becoming a separate product each time.

The architecture has steadily moved in this direction. The 2024 plugin architecture introduced the idea. CARE 3.0 made the platform more modular. Plugs V3 rebuilt the extension system with hot-reloading, environment-based configuration, and the ability to replace application surfaces with custom plugins.

The architectural goal is not customization for its own sake. It is controlled local adaptation without fragmenting the shared core.

## Standards as a portability strategy

CARE's standards work is central to the operating-layer model.

FHIR-inspired resources shaped the lab, pharmacy, patient account, and clinical workflow modules. SNOMED CT support enabled structured clinical terminology and value sets. LOINC mapping began for lab orders at Sree Sudheendra. ABDM alignment and national digital health infrastructure integration were part of the platform roadmap. UCUM, ICD-10, and open APIs are part of the broader interoperability direction.

Standards are often described as technical compliance. In CARE, they are a portability strategy.

If a diagnostic observation is mapped to standard terminology, it can be compared, reported, and exchanged more reliably. If service requests, specimens, observations, accounts, and invoices are modeled cleanly, dashboards can be built without reverse-engineering local forms. If questionnaires preserve value-set bindings, a clinical form can move across deployments without losing meaning.

That is the difference between digitizing a workflow and building reusable healthcare infrastructure.

## Extensibility without forking

Open healthcare infrastructure has to solve a difficult tension.

Hospitals and public health programs need local variation. They have different specialties, reporting structures, pricing rules, forms, print formats, language needs, and integration requirements. But if every implementation becomes a fork, the ecosystem loses shared maintenance, security updates, interoperability, and release discipline.

CARE's extension model exists to avoid that failure mode.

Plugs V3 is the clearest expression of this direction. A deployment can replace or extend parts of the application, configure plugins by environment, and integrate with external systems while remaining tied to the shared core.

This is especially important for implementation partners. A healthy ecosystem needs partners who can adapt CARE locally without becoming permanent maintainers of isolated branches.

## Clinical, operational, and governance workflows in one model

CARE Core is not only clinical.

The project history shows why that matters. The Kerala Palliative Care Grid needed patient registration, home visits, volunteer workflows, facility dashboards, ward-to-state governance, Malayalam localization, and NHM handover. Sree Sudheendra needed OP, IP, casualty, lab, pharmacy, reception, billing, inventory, accounting, dashboards, tokens, printers, scanners, and on-premise deployment. Pallium India needed inpatient, outpatient, home-care workflows, reporting, and care-protocol questionnaires.

If CARE had been only an EMR, it would have missed finance and operations. If it had been only an HMIS, it would have missed public health governance. If it had been only a reporting system, it would have missed care delivery.

The operating-layer idea keeps these together. CARE Core supports the record, the workflow, and the review mechanism.

## The foundation around the core

An operating layer needs more than code.

It needs release discipline, documentation, security practices, implementation guides, contributor pathways, test coverage, standards governance, and a neutral institutional home. That is why Open Healthcare Network Foundation exists around CARE.

The foundation's job is to protect the shared core while enabling a wider ecosystem of hospitals, governments, NGOs, clinicians, developers, and implementation partners to use and improve it.

CARE Core is therefore both technical architecture and stewardship problem. The primitives are reusable only if the community around them keeps them coherent.

That is the real promise of CARE: not one application that solves every healthcare workflow, but a shared operating layer that lets many healthcare workflows become safer, more interoperable, and easier to govern.
