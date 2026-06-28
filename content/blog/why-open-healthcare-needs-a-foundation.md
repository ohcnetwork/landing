---
title: Why open healthcare infrastructure needs a foundation
excerpt: Code is necessary, but not sufficient. Health systems need stewardship, release discipline, documentation, security, and an ecosystem that can outlast any one deployment.
publishedAt: 2026-05-27
author:
  name: Open Healthcare Network Foundation
categories:
  - title: Foundation
    slug: foundation
  - title: Digital Public Infrastructure
    slug: digital-public-infrastructure
mainImage:
  src: "/blog/covers/why-open-healthcare-needs-a-foundation.svg"
  alt: "Why open healthcare infrastructure needs a foundation cover illustration"
featured: true
---

Open healthcare infrastructure has a different job from ordinary software.

It has to be trusted by governments, hospitals, clinicians, NGOs, implementation partners, system integrators, funders, and contributors who may never sit in the same room. It has to support local ownership without fragmenting into one-off custom systems. It has to keep improving after the first deployment is announced. It has to survive staff changes, funding cycles, policy shifts, and the everyday pressure of live care delivery.

That is why Open Healthcare Network Foundation exists.

CARE is the flagship platform, but the foundation's role is larger than one product surface. The foundation is the neutral home for CARE Core, CARE Apps, documentation, security practices, release management, contributor pathways, standards alignment, implementation guidance, and ecosystem building.

## Open source is not the same as public infrastructure

Open-source code can be copied. Public infrastructure has to be stewarded.

In healthcare, stewardship means answering questions that are easy to postpone during early software success:

- Who maintains the shared core?
- How are releases tested and documented?
- How do hospitals and governments know upgrades will not break active workflows?
- How do implementation partners extend CARE without permanently forking it?
- How are security issues reported, fixed, and communicated?
- How do clinicians influence product direction?
- How are standards such as FHIR, SNOMED CT, LOINC, ABDM, and ICD-10 kept coherent across modules?
- How does the ecosystem keep building after one grant or deployment ends?

Those are foundation questions, not repository questions.

## CARE's deployment history created the need

The need for a foundation became clearer as CARE's deployment footprint expanded.

Kerala CARE moved from pilots in Ayyampuzha and Calicut to statewide palliative care operation, handover to NHM, 1,365 government healthcare facilities, 1,105 NGOs/CBOs, and more than 3.26 lakh registered patients with 15.45 lakh recorded encounters by April 2026.

Sree Sudheendra Medical Mission Hospital moved from workflow discovery to pilot launch and then full go-live on 18 January 2026, with CARE running across OP, IP, pharmacy, laboratory, reception, billing, accounts, token systems, inventory, and management dashboards.

Pallium India launched CARE HMIS in December 2025 and moved to full-scale outpatient and inpatient usage in January 2026. Niram and Arike added further deployment contexts. Kerala's KARE and Vibe 4 Wellness work showed that CARE infrastructure could also support preventive and public health workflows.

This variety is exactly why neutral stewardship matters. A single deployment owner cannot be the permanent center of gravity for an open healthcare platform used across many institutional contexts.

## The foundation protects the shared core

CARE's value depends on a shared core that remains coherent.

The platform includes patient records, encounters, orders, observations, lab workflows, pharmacy, billing, accounts, inventory, forms, dashboards, roles, permissions, audit trails, APIs, and plugins. It also includes standards work: FHIR-inspired modeling, SNOMED CT, LOINC, ABDM alignment, and terminology/value-set governance.

As deployments customize CARE, the risk of fragmentation grows. A hospital may need a custom dashboard. A palliative care organization may need a different form set. A government program may need a new hierarchy. An implementation partner may need an accounting integration.

The foundation's job is to make those adaptations possible without losing shared maintainability. That means defining extension patterns, reviewing contributions, documenting APIs, strengthening test coverage, publishing implementation guides, and keeping standards alignment visible.

## Neutrality enables trust

A neutral institutional home helps different actors collaborate.

Governments need confidence that CARE will not become locked to one vendor. Hospitals need confidence that they can adopt and extend the platform without losing continuity. Implementation partners need confidence that their work can connect to the shared ecosystem. Contributors need clear pathways for improving the platform. Funders need confidence that support builds public value rather than isolated assets.

Neutrality does not mean lack of direction. It means the direction is oriented around the public-good infrastructure, not the incentives of a single deployment or company.

That is especially important in healthcare, where the cost of fragmentation is borne by patients, clinicians, and public systems.

## Release discipline is care quality

In ordinary software, release discipline is often discussed as engineering hygiene. In healthcare, it is part of care quality.

A broken billing flow can disrupt patient movement. A lab report formatting issue can confuse review. A role permission mistake can expose sensitive data. A queue bug can create operational delays. A bad migration can damage continuity of records.

The foundation must therefore support practices that make releases safer: automated testing, Playwright coverage, code review, security processes, versioned documentation, migration guidance, deployment checklists, and feedback loops from live implementations.

This is the invisible infrastructure around the visible product.

## The implementation ecosystem is part of the product

CARE cannot scale through the core team alone.

The reports repeatedly show the same constraint: live healthcare deployments require training, field support, workflow mapping, data migration, stock validation, hardware setup, documentation, dashboard design, and repeated handholding. A platform can be open source and still fail if there are not enough trained implementers to deploy it responsibly.

The foundation can cultivate that ecosystem. It can create implementation playbooks, certification pathways, partner guidelines, demo libraries, standard operating procedures, and contributor onboarding. It can help hospitals and governments find capable support while keeping the shared platform open.

In digital public infrastructure, ecosystem capacity is not separate from product quality. It is how the product reaches real users.

## Sustainability has to be institutional

CARE's project history included a formal move toward a Section 8 not-for-profit company. The Ministry of Corporate Affairs approved the name "Open Healthcare Network Foundation" in September 2025, with incorporation documentation underway at that time.

The reason is straightforward: public-good software needs a durable institutional home. Grants can accelerate development. Deployments can validate use cases. Contributors can improve modules. But long-term stewardship requires governance, funding strategy, legal clarity, and accountability.

The foundation exists to hold that long-term responsibility.

## Stewardship is part of the product

Open healthcare infrastructure is never finished. CARE will keep needing better interoperability, stronger security, more reliable releases, deeper documentation, improved implementation tooling, better analytics, clearer contribution pathways, and more capable extension systems.

It will also need judgment: when to standardize, when to customize, when to accept a contribution, when to push back on a local workaround, when to add a plugin, when to protect the core, and when to change the model because the field has taught us something new.

That judgment cannot live only in code. It has to live in an institution trusted to steward the public good.

That is the foundation's work: to make CARE not only available, but dependable, governable, and worthy of the health systems that choose to build on it.
