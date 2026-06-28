---
title: Preparing CARE for statewide palliative care rollout
excerpt: February 2025 focused on scaling the palliative care pilots, Malayalam support, security certification, CARE 3.0 architecture, and new HMIS modules for real-world use.
publishedAt: 2025-02-28
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Deployment
    slug: deployment
  - title: Standards
    slug: standards
mainImage:
  src: "/blog/covers/preparing-care-statewide-palliative-rollout.svg"
  alt: "Preparing CARE for statewide palliative care rollout cover illustration"
---

February 2025 was a preparation month at scale. The palliative care pilots in Ayyampuzha and Calicut had shown that CARE could support digital home-care workflows. The next task was much harder: prepare the platform, people, documentation, and infrastructure for a statewide rollout.

The work moved across product, training, security, and architecture. Each stream had the same aim: make CARE reliable enough for a public health workflow that would involve many districts, many users, and continuous field usage.

## From hundreds to statewide readiness

Field testing continued in the pilot locations, with feedback collected from primary palliative care nurses. Patient onboarding grew rapidly, crossing 500 registered patients and 600 recorded home visits.

This was not just a usage milestone. It gave the team enough real interactions to identify repeating workflow patterns:

- Nurses needed faster ways to complete common actions.
- Patient status changes, including death reporting, needed structured handling.
- Mobile screens had to work for users with different devices and levels of digital comfort.
- Documentation and videos had to be clear enough for large-scale training.

CARE was updated accordingly. Quick action buttons were added for high-frequency tasks. Death reporting was simplified through a structured workflow. The Kerala CARE landing page was refined based on stakeholder feedback. Full Malayalam support also began, recognizing that language accessibility would be central to adoption.

## Security and trust before scale

The palliative care instance received CERT certification from Keltron. This was an important step for trust, especially because the platform would handle personal health information at scale.

Certification also reflected a broader product posture. CARE could not be treated as an experimental app once it entered government and hospital workflows. It needed auditability, security reviews, reliable deployment practices, and operational discipline.

That posture would continue to shape the platform through later work on role-based access, two-factor authentication, test automation, and governance dashboards.

## CARE 3.0 architecture

February also saw the release of the CARE 3.0 architecture direction. The platform was being reorganized around a scalable, modular core that could run across deployment contexts.

The new architecture emphasized:

- Faster cloud deployment.
- A FHIR-inspired core engine.
- A plugin ecosystem for specialized modules and integrations.
- Cleaner separation between core health records and deployment-specific workflows.
- Better documentation for onboarding, troubleshooting, and implementation.

This architecture mattered because CARE had to support both palliative care and HMIS without becoming two separate products. The plugin ecosystem gave the team a path to extend CARE for labs, pharmacy, billing, AI documentation, and local workflows while keeping the shared core coherent.

## HMIS modules take shape

In parallel, CARE HMIS development accelerated. New modules were added for location management, bed management, device management, and consent management. Pharmacy and lab work continued, informed by earlier hospital discovery and field conversations.

These modules were not isolated features. Together, they represented the operational spine of a hospital: where care happens, which devices are used, which beds are available, which consents are recorded, and how services move through departments.

By the end of February, CARE had moved from pilot validation to launch readiness. The product had been improved by field feedback, the security posture had strengthened, and the platform architecture had a clearer path toward both statewide public health and hospital operations.
