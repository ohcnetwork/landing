---
title: One million encounters and paperless governance
excerpt: December 2025 crossed a major Kerala CARE scale milestone, launched CARE at Pallium India, moved Sudheendra HMIS toward go-live, and built dashboards for paperless governance.
publishedAt: 2025-12-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Deployment
    slug: deployment
  - title: Digital Public Infrastructure
    slug: digital-public-infrastructure
mainImage:
  src: "/blog/covers/one-million-encounters-paperless-governance.svg"
  alt: "One million encounters and paperless governance cover illustration"
---

December 2025 marked a scale threshold for Kerala CARE: more than one million encounters and more than 2.7 lakh patient registrations were recorded by the end of the month.

The number is important, but the more interesting story is what the platform had to become to support it. At this scale, CARE could not remain a digital register. It needed governance dashboards, statutory registers, permissioned views, production-grade billing workflows, partner deployments, and launch readiness for a full hospital HMIS.

December was the month those threads converged.

## From records to governance

Kerala CARE moved toward paperless operations by building facility-level digital registers and governance dashboards across ward, facility, district, and state levels.

Facility-level registers allowed staff to view and download statutory and operational records such as patient registers and procedure registers. Governance dashboards were permission-based, giving each level of the system access to the views needed for review and monitoring without exposing everything to everyone.

This matters in a statewide program because scale creates review burden. A state team needs program visibility. District teams need local accountability. Facilities need operational workload data. Ward-level users need actionable lists. A single dashboard cannot serve all of these layers.

The December dashboard work required repeated review cycles with NHM because initial demographic and operational data visibility was limited. The team refined indicators, registers, and dashboard structures until they matched actual reporting needs.

## Sudheendra reaches launch readiness

Sree Sudheendra Medical Mission Hospital moved into final launch-readiness during December. A January 2026 go-live date was agreed with hospital leadership.

The work shifted from first-time onboarding to confidence-building and validation. Doctors, nurses, and administrative staff were onboarded with role-based access controls. Department-specific training continued across OP nursing, IP nursing, laboratory, pharmacy, reception, inpatient billing, and accounting.

The training focus became practical: queue management, vitals recording, nursing station operations, consumable dispensing, service order review, medication administration, lab report formats, purchase order handling, stock workflows, dispensing, peak-hour reception scenarios, appointment coordination, billing handoffs, and correction of common errors.

The team also imported a fresh medicine and consumable stock export into CARE for testing and validation. Activity definitions, charge items, and observation definitions were cleaned up so service requests and billing would align correctly.

Infrastructure planning continued with vendors for servers, display units, laptops, and related IT equipment required for launch. The team worked extensively from the hospital location so training and validation could happen in the same environment where CARE would be used.

## Production-grade HMIS improvements

The December engineering work focused on reliability in live healthcare settings.

Patient accounts and billing gained QR-based invoice and payment lookup, improved invoice filtering, official patient identifiers on invoice views and printouts, clearer print layouts, account lifecycle flexibility, and payment reconciliation layouts that better matched accounting workflows.

Appointments, queues, and encounters gained improved slot behavior, filter caching, restart encounter support, configurable default encounter statuses, clearer handling of discharged encounters, and more reliable navigation from beds and tabs.

Inventory and stock management improved through a simplified inventory builder, quantity validation, decimal pricing for purchase deliveries, lot-number tooltips, delivery order tagging, and better delivery payload handling.

Patient identity and clinical context improved through patient ID cards, specimen retrieval by accession identifier, redesigned past symptoms, diagnoses, and medication history tabs, and more reliable questionnaire search and editing.

Development-level multitenancy support was also introduced, allowing simulation and testing of multiple organizations in one codebase. That was an important step toward supporting a broader deployment ecosystem.

## Pallium India enters production

On 5 December 2025, Pallium India officially launched CARE HMIS.

This was a significant adoption milestone because Pallium India is one of India's most influential palliative care institutions. CARE supported inpatient, outpatient, and home-care operations across the organization.

During December, the team conducted continuous training sessions, supported patient data migration, resolved inconsistencies from the previous system, held review meetings, finalized dashboard requirements, set up trackers aligned with regulatory and reporting needs, customized questionnaires to match care protocols, and incorporated improvements based on live feedback.

Pallium India moved into production use of CARE HMIS across its facility and home-care units.

## A public health tool beyond palliative care

NHM Kerala also requested the CARE team to design and support a Health Risk Assessment Tool for the Government of Kerala's Vibe 4 Wellness Campaign, hosted at `health.kerala.care`.

The statewide public health portal was launched by the Chief Minister on 1 January 2026. It enabled citizens to access self-assessment tools, receive evidence-based health guidance, and connect with government health services.

This extended CARE's role beyond palliative care operations into preventive and promotive health infrastructure.

## Scale changed the engineering standard

Crossing one million encounters changes the engineering bar.

At that point, improvements to billing validation, print quality, queue behavior, dashboard permissions, role access, and data extraction are not incremental polish. They are the difference between a system that records activity and a system that can be governed.

December showed CARE operating at that threshold: Kerala CARE at population scale, Pallium India in production, Sree Sudheendra ready for full hospital go-live, and the platform itself becoming more reliable, more auditable, and more deployment-ready.
