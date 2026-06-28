---
title: Stabilizing CARE after statewide launch
excerpt: April 2025 was about turning launch momentum into daily use, with 80,000 new registrations, home-based care workflows, RBAC, 2FA, dynamic forms, and CARE 3.0 upgrades.
publishedAt: 2025-04-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Product
    slug: product
  - title: Deployment
    slug: deployment
mainImage:
  src: "/blog/covers/stabilizing-care-after-statewide-launch.svg"
  alt: "Stabilizing CARE after statewide launch cover illustration"
---

April 2025 was the first full month after the statewide launch of the Kerala Palliative Care Grid. The focus shifted from launch readiness to operational stability.

That shift changed the nature of the work. CARE now had to support daily use across districts, respond to live feedback, keep frontline teams confident, and continue improving while real patients, nurses, doctors, administrators, and local bodies depended on the system.

By the end of April, around 80,000 new patients had been registered and more than 84,000 home care visits had been recorded through Kerala CARE. The launch had become a live operating system.

## CARE 3.0 becomes field-ready

The engineering work in April delivered a broad CARE 3.0 upgrade. It improved user interface consistency, clinical workflows, security, performance, and release reliability.

The patient registration flow was simplified to reduce time and errors in high-volume settings such as district hospitals and primary health centers. For a statewide public health workflow, registration speed is not cosmetic. It affects queues, staff confidence, and the completeness of patient records.

The new Home-Based Care module allowed field nurses to log vitals, symptoms, diagnoses, medications, and follow-up information for patients receiving care at home. This strengthened continuity of records. Instead of home visits becoming isolated notes in a paper register, they became part of the patient's longitudinal record.

The UI moved to ShadCN components, improving spacing, contrast, responsiveness, and interaction consistency. React 19 and Tailwind CSS v4 upgrades reduced bundle size by roughly 8 percent, which mattered for users on slower rural connections and older mobile devices.

## Security and governance for PHI

April also strengthened the platform's security posture.

Role-based access control was introduced with instance-specific roles. This allowed different deployments to define who could view, create, update, and configure workflows according to local responsibility structures.

Two-factor authentication using TOTP was added at login to protect personal health information even when passwords are compromised. OTP and password setup emails improved onboarding by allowing first-time staff to verify their email and create a password through a single flow.

Consent management was moved into patient records, making procedure and data-sharing consent more visible where it is needed. These changes reflect a broader principle: healthcare software must treat privacy, authorization, and auditability as core product features, not administrative afterthoughts.

## More complete clinical workflows

The April release expanded CARE's clinical surface area.

Device Management introduced structured handling for equipment such as monitors, ventilators, and wearables, including dedicated pages for creating, editing, assigning, and tracking service history. Location Management allowed facilities to define buildings, blocks, floors, rooms, and beds, and link locations to departments. Bulk bed creation and improved facility navigation made it easier to work with large operational datasets.

Printable treatment and discharge summaries were added. A structured death-record workflow improved death reporting by recording death time and marking the patient profile appropriately. Clinicians could pull past medicines, symptoms, and diagnoses from previous encounters, reducing repeated data entry for chronic and long-term cases.

CARE also added in-record drawing tools through Excalidraw, allowing clinicians to sketch family trees, wound diagrams, or equipment layouts directly in the chart instead of scanning separate paper drawings.

## Dynamic forms and smarter documentation

Dynamic forms became more powerful in April.

Questionnaire import and export with value-set bindings allowed administrators to move a question set from one instance to another without losing standardized terminology. Automated workflow logic, stronger inline validation, and expanded test coverage improved reliability for complex forms.

The platform also introduced voice-to-text autofill, allowing healthcare workers to dictate patient conditions and map that information into EMR fields. In a field setting where typing can be slow and documentation burden can reduce time with patients, this pointed toward a more assistive future for clinical data capture.

The goal was not to make CARE flashy. It was to make documentation faster, more structured, and less burdensome.

## Operational stabilization across Kerala

The implementation work was as important as the engineering.

A state-level refresher training was conducted in Trivandrum on 16 April with stakeholders from NHM, LSGD, IKM, eHealth, and technical partner teams. The session reinforced user workflows, clarified role-based responsibilities, and addressed concerns that had emerged after launch.

The team held multiple review meetings with NHM and LSGD to evaluate the operational health of the Grid, track district-specific bottlenecks, and prioritize improvements. Collaboration also began for NGO, CBO, and volunteer onboarding, including engagement with Samoohya Sannadhaan Sena.

Real-time technical and operational support continued throughout the month. The product team consolidated feedback from nurses, LSGD secretaries, and Medical Officers, then prioritized quick UI, workflow, and access-control changes that could reduce friction.

## The reality of adoption

April also made the scale challenge clear.

The absence of a dedicated implementation and support team forced the core product team to manage training, onboarding, and daily troubleshooting while continuing development. Many field staff preferred phone-based support even for minor questions. Paper-based habits required repeated retraining and persuasion. Digital literacy varied widely across districts. Slow connectivity and outdated smartphones affected performance.

These challenges are not signs of failure. They are signs that CARE had entered real public health work. Stabilization depends on patient explanation, repeated training, product responsiveness, and the willingness to improve the system in the presence of imperfect infrastructure.

## Stability became the product

April 2025 turned launch momentum into daily usage.

The visible metrics were large: around 80,000 new patients and more than 84,000 home care visits recorded through Kerala CARE in one month. The less visible work was the set of changes that made that usage sustainable: RBAC, 2FA, home-based care workflows, mobile performance improvements, printable summaries, consent management, location and bed management, and repeated refresher training.

In this phase, stability was not a maintenance concern after the product. Stability was the product. Every support call, performance fix, role correction, and workflow refinement made the statewide Grid more capable of carrying routine care without returning to paper.

That is the harder achievement after a launch: not excitement, but dependable use.
