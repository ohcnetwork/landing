---
title: Refining CARE HMIS across hospital departments
excerpt: October 2025 expanded CARE HMIS across pediatric OP, inpatient workflows, pharmacy, lab, inventory, accounting, and the Kerala Palliative Care Grid's volunteer and dashboard capabilities.
publishedAt: 2025-10-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: HMIS
    slug: hmis
  - title: Operations
    slug: operations
mainImage:
  src: "/blog/covers/refining-care-hmis-across-departments.svg"
  alt: "Refining CARE HMIS across hospital departments cover illustration"
---

October 2025 was about deepening adoption. After the September HMIS pilot launch, CARE moved further into day-to-day hospital operations at Sree Sudheendra Medical Mission Hospital. The work expanded across departments, improved core operational modules, and continued strengthening the Kerala Palliative Care Grid.

This phase was less about announcing a go-live and more about doing the slower work that makes go-live meaningful: workflow correction, staff training, data standardization, and repeated iteration.

## Expanding hospital coverage

The pediatric outpatient unit was activated on CARE, with doctors and nursing station teams trained on OP workflows, patient documentation, and service request handling. Existing pediatric questionnaires and assessment formats were digitized so clinical data could be captured in structured form.

User onboarding expanded across hospital staff. Accounts were created, departments assigned, and role-based permissions configured across nursing stations, OP desks, and support units.

Inpatient workflows also began. Nurses across designated IP floors were trained on admissions, vitals capture, order entry, medication administration, and handover documentation. This was a major step because inpatient care is documentation-heavy and shift-based. It requires continuity, not just one-time encounter capture.

## Inventory, pharmacy, lab, and accounting

The inventory system was rebuilt to improve stock visibility and operational workflows for medicines, consumables, and equipment. Stock lists were validated and imported into CARE. Pharmacy and casualty workflows were reviewed and optimized based on early pilot usage.

The lab module continued to mature. Activity definitions and observation definitions were updated with SNOMED CT coding. Observation interpretations were mapped so results could be classified more consistently.

Accounting integration also advanced. Multiple discussions and demonstrations with accounting and administrative teams helped refine the CARE-ERP plugin. Doctor consultation fees were configured as charge items, ensuring financial workflows reflected the hospital's actual operating model.

## Platform improvements for live environments

October engineering work improved payments, inventory, bed management, queue operations, patient workflows, localization, access control, and testing.

Notable improvements included:

- Interactive bed layout visualization.
- Role cloning for faster access setup.
- Better patient tag display.
- Improved clinical history and questionnaire print outputs.
- Primary queue support in token workflows.
- Animated queue counters.
- Clearer deceased status in appointments.
- Expanded translations.
- Stronger two-factor authentication flows.
- Introduction of Playwright end-to-end testing.

These changes strengthened CARE as a live system, not just a feature roadmap.

## Kerala CARE volunteer and dashboard work

The Kerala Palliative Care Grid received a new version of CARE with simplified nursing workflows, faster access to past encounters, and smoother documentation. State and district teams were trained on the updated release.

The volunteer module was implemented, allowing nurses to assign patients to volunteers and record volunteer visit details. Requirements were also captured for facility-level dashboards that would help monitor operations, performance indicators, and program metrics.

October showed how CARE's two major deployment environments reinforced each other. Hospital workflows pushed the platform toward depth. The palliative care grid pushed it toward scale, governance, and community coordination. Together, they made CARE more complete.
