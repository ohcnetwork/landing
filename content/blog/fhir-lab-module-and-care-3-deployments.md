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

May 2025 brought one of the most important HMIS building blocks into focus: laboratory management. CARE's lab module was designed around standards, configurability, and complete workflow coverage from test ordering to diagnostic report generation.

This was a significant step in CARE's evolution from a palliative care grid into a broader hospital management platform.

## A lab module built around FHIR concepts

Laboratory workflows are deceptively complex. A test is not just a line item. It involves a service request, specimen definition, collection protocol, processing step, observation definition, report template, billing item, and final clinical interpretation.

CARE's lab module was built to represent that complexity in a structured way.

The module introduced:

- Service requests through configurable questionnaires.
- Specimen definitions for collection method, storage, preparation, and rejection criteria.
- Observation definitions mapped to LOINC codes.
- Charge definitions for pricing, taxes, and discounts.
- Activity definitions that bundle specimen requirements, observations, charges, and report settings.
- Healthcare service grouping by location.
- Role-based work queues for lab areas such as microbiology, biochemistry, and radiology.
- Specimen collection, QR-coded labelling, processing, report generation, and verification.

The goal was to avoid a shallow lab feature that only prints results. CARE needed to support the operational reality of laboratories while preserving structured clinical data for the patient record.

## Arike moves to CARE 3.0

May also included the deployment of CARE 3.0 at Arike, an NGO-based palliative care implementation that had previously been using CARE 2.0.

The migration included training staff on the new interface, moving patient and encounter data, verifying migrated records, and reconciling discrepancies. Nurses, doctors, and administrators gave usability feedback that shaped improvements across the platform.

This was an important deployment because it tested whether CARE 3.0 could support an existing care program without breaking continuity. Migration is rarely glamorous, but it is one of the clearest tests of whether a health platform can mature responsibly.

## Palliative care scale-out continues

By the end of May, all primary-level government healthcare facilities and hospitals had been onboarded onto the Kerala Palliative Care Grid. The next phase began with NGOs, community-based organizations, and secondary palliative care units.

Training materials and demo videos were updated. Live online sessions were conducted for registration workflows. Field support continued, and feedback workshops with doctors and community nurses helped identify workflow improvements.

By 31 May, 226 NGOs were registered in Kerala CARE and had begun delivering care through the platform.

## HMIS readiness through hospital discovery

The HMIS track also progressed through a deep-dive visit to Sudheendra Mission Hospital. The team demonstrated workflows from reception check-in to billing and gathered requirements from departments including reception, accounts, pharmacy, stores, laboratory, and administration.

This visit clarified an important product boundary. CARE could handle clinical and operational HMIS modules, but hospitals also needed day-to-day accounting and bookkeeping. That insight led to exploration of integrations with dedicated ERP and accounting systems.

May strengthened CARE in three directions at once: standards-aligned lab workflows, successful CARE 3.0 migration for a live palliative deployment, and deeper readiness for hospital HMIS pilots. Each direction pushed the platform toward a more complete, interoperable digital health infrastructure.
