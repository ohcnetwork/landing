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

February 2025 was a preparation month at statewide scale. The January pilots in Ayyampuzha and Calicut had shown that CARE could support digital home-care workflows. The next question was whether the platform, training model, security posture, and implementation process could withstand a much larger public health rollout.

The answer required work on several fronts at once: field usability, Malayalam localization, security certification, statewide training, CARE 3.0 architecture, and the early HMIS modules that would later support hospital deployments.

## From pilot learning to rollout readiness

Field testing continued in Ayyampuzha and Calicut Corporation, with multiple rounds of feedback from primary palliative care nurses. Usage grew quickly: more than 500 patients were onboarded and more than 600 home visits were recorded during the pilot phase.

Those numbers were useful not only as adoption metrics but as evidence of repeated workflow patterns. Nurses needed faster ways to complete common actions. Patient status changes had to be captured cleanly. Mobile interactions had to work for people with different devices and varying levels of digital comfort. Documentation and videos had to be practical enough for large-scale training.

CARE was updated accordingly. Quick action buttons reduced the time required for frequent tasks. The death-reporting workflow was improved so a patient's death could be marked in a structured way, with time recorded and the profile updated appropriately. The Kerala CARE landing page was refined based on feedback from NHM and state teams.

## Malayalam as an adoption requirement

Full Malayalam support began in February because language accessibility was central to adoption.

In community-based palliative care, the primary users are not a narrow group of software-trained operators. Nurses, doctors, local body staff, district coordinators, and support teams all need to understand the interface well enough to act confidently. For many frontline healthcare workers in Kerala, Malayalam is the natural working language.

Localization therefore was not a cosmetic layer. It was part of the safety and usability model. A user who understands the interface is less likely to make a data-entry mistake, abandon the workflow, or fall back to paper during pressure.

## Security before scale

February also brought an important trust milestone: the palliative care instance received CERT certification from Keltron.

For a system handling personal health information at statewide scale, trust cannot be based only on enthusiasm. The platform needed security audits, compliance review, and performance testing. Certification gave government agencies and healthcare providers more confidence that CARE could be adopted in a public health setting without being treated as an experimental app.

This became part of CARE's broader operating posture. The platform was being prepared for PHI, auditability, role-based access, and production-grade governance, not merely for pilot usage.

## Statewide launch planning

The statewide launch of the Kerala Palliative Care Grid was confirmed for 3 March 2025, to be inaugurated by the Chief Minister of Kerala.

The team held multiple discussions with NHM and state teams to finalize the implementation plan. State-level training was planned for nurses and doctors on 6 and 7 March. Reviews were held with senior officials, including the Additional Chief Secretary of Health, the Principal Secretary of LSGD Kerala, and NHM teams.

Demo videos and training instructions were created so users would have reference material after live sessions. This was vital because a statewide launch would produce too many questions for the core team to answer one by one in real time.

## HMIS work continues under pressure

Even as the palliative launch became the immediate priority, HMIS development continued.

The team held additional discussions with doctors from IMA Kochi and added four important modules to CARE:

- Location Management, to manage physical and operational spaces across a hospital.
- Bed Management, to track bed availability, occupancy, and patient allocation.
- Device Management, to monitor and maintain hospital equipment.
- Consent Management, to collect and verify digital consent for procedures.

These modules may sound administrative, but they are part of the skeleton of an HMIS. Hospitals need to know where a patient is, which bed is assigned, which device is associated with care, and whether the right consent exists. Without these primitives, clinical and financial workflows remain fragmented.

## CARE 3.0 and the plugin ecosystem

February also marked the release of the CARE 3.0 architecture and a structured plugin ecosystem plan.

CARE 3.0 introduced a more scalable and modular framework, including an AWS cluster architecture that could auto-deploy a functional CARE 3.0 environment in about 15 minutes. The plugin plan positioned CARE Core as a FHIR-inspired engine that could support multiple plugins and integrations across deployments and use cases.

This was a major architectural step. The palliative grid, hospital workflows, and future integrations would not all need identical product surfaces. But they did need a shared core that could support patients, encounters, observations, roles, forms, and integrations without creating disconnected forks.

## Documentation as infrastructure

The team expanded product documentation with user guides, access workflows, and demo videos. This work often sits in the background, but it is one of the conditions for scale.

When a platform moves from a pilot to a statewide deployment, live support alone is not enough. Users need clear materials. Trainers need repeatable explanations. Administrators need workflows they can share. Documentation reduces dependency on the core team and turns field knowledge into reusable infrastructure.

## Readiness was a product state

By the end of February, readiness was not a vague management claim. It had concrete artifacts: 500+ pilot patients, 600+ home visits, Malayalam support underway, CERT certification from Keltron, confirmed launch plans, training materials, CARE 3.0 architecture, and new HMIS primitives for locations, beds, devices, and consent.

Those artifacts gave the March rollout a stronger base. CARE was being prepared as a system that could be trained, trusted, localized, secured, and operated by a public health network rather than merely demonstrated to one.

The technical work and the operational work converged here. February turned the pilots into a launchable public system.
