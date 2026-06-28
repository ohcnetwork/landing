---
title: Building CARE as open healthcare infrastructure
excerpt: "The first phase of the CARE expansion focused on the foundations: technical stewardship, FHIR and SNOMED CT alignment, palliative care workflows, and the early HMIS roadmap."
publishedAt: 2024-12-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Architecture
    slug: architecture
  - title: Digital Public Infrastructure
    slug: digital-public-infrastructure
mainImage:
  src: "/blog/covers/building-care-open-healthcare-foundation.svg"
  alt: "Building CARE as open healthcare infrastructure cover illustration"
---

The second half of 2024 was a foundation-building period for CARE. The platform had already proven itself in critical care and public health settings, but the next challenge was broader: could CARE become a reusable digital health operating layer for palliative care, hospital management, and standards-aligned clinical workflows?

That question shaped the work from June to December. The team focused on strengthening the core platform, preparing real deployments, and setting up the operational practices needed for long-term stewardship.

## From application to operating layer

The most important shift was architectural. CARE was no longer being treated as a single application for a single deployment. It was being shaped as a core platform that could support multiple healthcare workflows through a shared set of building blocks.

Several pieces moved forward together:

- A complete review of the existing CARE codebases, including technical debt, security posture, and future development needs.
- Early work on HL7 FHIR alignment for electronic medical records.
- Support for SNOMED CT, enabling clinical data to use standard terminology.
- A plugin architecture, with Scribe emerging as an early example of how specialized capabilities could extend CARE without bloating the core.
- Custom clinical forms for palliative care, especially for home-based care and field documentation.

This mattered because healthcare workflows are diverse. A hospital, a palliative care network, and a public health program do not need the same screens. They do, however, need reliable primitives: patients, encounters, observations, orders, care teams, forms, roles, audit trails, reports, and APIs.

## Preparing the palliative care grid

The palliative care work in Kerala gave CARE a demanding real-world use case. Palliative care is not limited to facilities. It depends on home visits, continuity of records, nurse-led documentation, community participation, and coordination across local health systems.

During this phase, the team worked through implementation planning with state and local teams, studied existing community care practices, and prepared the Kerala CARE portal. A Malayalam version of the public-facing site was created so the system could be introduced in the local language. CI/CD pipelines and infrastructure automation were also prepared to make deployments repeatable rather than fragile.

By the end of December, the core palliative care features were ready for launch testing. The system had gone through dry runs, feature reviews, and field-readiness discussions. The platform was being prepared not just as software, but as a working digital backbone for coordinated home-based care.

## Designing the HMIS roadmap

In parallel, the team began mapping the requirements for a full Hospital Management Information System. This included visits, discussions, and workflow reviews with healthcare institutions and clinicians.

The early HMIS roadmap focused on modules that hospitals depend on every day:

- Scheduling and appointments.
- Pharmacy and inventory.
- Laboratory management.
- Billing and accounting workflows.
- Facility and location management.
- Role-based access across departments.

These discussions shaped CARE Enhancement Proposals for scheduling, pharmacy, and labs. They also clarified a key product principle: CARE HMIS should not be a generic administrative tool loosely attached to clinical records. It should connect clinical activity, operational workflows, inventory, billing, and reporting through a shared patient and encounter model.

## Building implementation capacity

The platform work was supported by collaboration infrastructure: shared documentation, project boards, staging environments, and team onboarding. CARE needed engineering discipline, but it also needed a way for clinicians, implementers, and contributors to participate in the product roadmap.

That operating rhythm became a quiet but important part of the CARE story. Documentation, review cycles, field feedback, and release discipline were not side tasks. They were the mechanisms that allowed CARE to keep moving across deployments without becoming a set of disconnected forks.

By the end of 2024, CARE had a clear path: palliative care would test its ability to support a statewide community health workflow, while the HMIS roadmap would test whether the same core could power hospital operations. The next phase would bring that hypothesis into the field.
