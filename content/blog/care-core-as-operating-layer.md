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
featured: true
---

CARE should not be understood only as a hospital application. The better frame is an operating layer for healthcare workflows.

At the core are reusable primitives: patients, providers, facilities, encounters, orders, medications, observations, questionnaires, tasks, care plans, reports, access control, audit trails, and APIs. Those primitives can then be assembled into workflows for hospitals, clinics, public health programs, critical care, palliative care, home visits, labs, pharmacy, billing, analytics, and care coordination.

That distinction matters.

## Core plus apps

Healthcare programs vary enormously. A hospital HMIS, a TeleICU network, a palliative care grid, a primary care clinic, and an ABDM-aligned workflow do not need the same screen sequence. But they do need many of the same underlying building blocks.

CARE Core provides the shared layer. CARE Apps and plugins extend it for specific workflows.

This lets implementers adapt to local clinical reality without turning every deployment into a separate software product.

## Standards-first architecture

The long-term value of CARE Core comes from its commitment to interoperability. FHIR-aligned modeling, SNOMED CT, LOINC, UCUM, ICD-10, ABDM patterns, open APIs, and configurable terminology are not decorative technical claims. They are what allow data, workflows, analytics, and integrations to remain portable.

That portability is essential for public-good infrastructure.

## Why this is foundation work

An operating layer needs governance. It needs a release model, documentation, implementation guides, contribution pathways, security practices, and an ecosystem of people who can deploy and improve it.

OHC Foundation's job is to make sure that shared layer becomes more reliable over time, not more fragmented.
