---
title: Token management and hospital workflow groundwork
excerpt: August 2025 introduced token management, ERP integration planning, faster encounters, stronger scheduling, and the operational groundwork for the Sudheendra HMIS pilot.
publishedAt: 2025-08-31
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
  src: "/blog/covers/token-management-care-hmis-groundwork.svg"
  alt: "Token management and hospital workflow groundwork cover illustration"
---

August 2025 focused on hospital flow.

By this point, CARE HMIS had emerging modules for lab, pharmacy, billing, patient accounts, appointments, encounters, inventory, and identifiers. The next challenge was coordinating patient movement across a live facility. In hospitals, the patient journey is rarely linear. A person may register, wait for vitals, see a doctor, go to the lab, return for review, pay a bill, collect medicines, and move between service points that all operate at different speeds.

That made token management a core HMIS capability.

## Queues for real hospital operations

The Token Management module was fully designed and implemented in August.

Facilities can now manage orderly patient queues across practitioners, locations, and healthcare services. Doctors can manage their own queues and call the next patient in order. Location-based queues support service points such as pharmacy, billing, X-ray, diagnostics, and vitals. Healthcare service queues allow departments to operate independently while sharing a common platform.

Token categories make it possible to run parallel flows, such as regular outpatient and emergency outpatient queues. Sub-queues support multi-stage pathways such as vitals, consultation, billing, and pharmacy. CARE can model both a single shared queue feeding multiple service points and dedicated queues for separate stations.

The operational outcome is less confusion, fewer manual calls, and clearer patient movement.

## Faster care team actions

August also added productivity improvements around encounters and appointments.

Keyboard shortcuts allowed common actions to be completed faster. A new in-place action menu on the encounter screen reduced navigation and helped clinicians act without hunting through pages. The redesigned appointment page improved scheduling, status visibility, and appointment management.

Medication and supplies workflows became more practical with support for dispensing medicines or consumables without a formal e-prescription in inpatient and home-visit scenarios. That is an important example of CARE adapting to the real world. Systems should preserve accountability, but they also need to record care as it actually happens.

Billing and accounts improved on mobile, receipts became clearer, payment reconciliation validations became stronger, and charge item definitions gained MRP and purchase price fields. Product data, stock rendering, HSN code support, and service-flow charge definitions were improved.

The surface area was broad because hospital operations are broad. CARE was becoming less fragile across many small points of daily use.

## ERP and accounting integration begins

August also initiated accounting and ERP plugin work.

The goal was to connect CARE with hospital accounting systems so financial operations could be managed without duplicate entry. The planned integration included mapping CARE users to ERP agents, posting service and charge items to the right accounts, mirroring products such as medicines and diagnostics, posting invoices into ledgers, mapping patients to ERP customers, supporting double-entry accounting, and managing vendor purchase orders and payments.

This work required both technical and accounting expertise. The report explicitly noted that accounting integrations were challenging because they demanded multi-domain understanding, not just API development.

The direction was important: CARE would remain a healthcare operating layer while connecting to specialized financial systems where needed.

## Sudheendra implementation moves from idea to readiness

In August, preparatory work for HMIS deployment at Sree Sudheendra Medical Mission Hospital became more concrete.

The team made multiple site visits to engage with hospital staff, assess infrastructure, map departments, understand workflows, and plan upgrades for deployment. Product demonstrations were conducted with hospital management to explain CARE workflows and validate requirements.

Accounts and administration teams collaborated with the CARE team to map accounting and bookkeeping needs, which fed directly into the ERP integration work. This was the beginning of full-scale implementation planning for a real multi-specialty hospital environment.

The importance of this groundwork cannot be overstated. HMIS deployments fail when software assumptions collide with actual hospital process. August was about reducing that risk before go-live.

## Kerala CARE crosses 200K registrations

The Kerala Palliative Care Grid continued to grow.

As of 31 August 2025, Kerala CARE had recorded 203,000 patient registrations and 535,000 home visits. The team held a series of review meetings with key stakeholders:

- 9 August: joint review with NHM Kerala teams on Grid operations.
- 25 August: review with district coordinators to evaluate performance and address operational queries.
- 26 August: meeting with the Principal Directorate, LSGD, on progress and expansion.
- 30 August: strategic review with the Principal Secretary to the Chief Minister on operations and next steps.
- 8 September: technical review with Kerala Technical University, where the Grid was hosted.

The team also designed new questionnaires for Mid Level Service Providers and Janakeeya Arogya Kendram home care teams. ABDM integration steps were completed and the request for the benefit name was submitted, preparing Kerala CARE for alignment with national digital health infrastructure.

## Institutional sustainability comes into focus

August also included a significant institutional thread.

Following discussions with Srikanth Nadhamuni and Sandeep Singhal, consensus was reached to establish a Section 8 not-for-profit company to advance Digital Public Goods. A detailed letter formalizing this alignment was shared with ACT IC.

The team also reviewed governance and compliance matters, including FCRA guidelines, memorandum and articles considerations, and legal frameworks. This work reflected a growing recognition that CARE needed an institutional home strong enough to steward an open-source health platform beyond any single grant or deployment.

## From modules to choreography

August 2025 brought CARE closer to real hospital operation because it dealt with the choreography between modules.

Token management gave the platform a way to model patient flow across practitioners, departments, and service points. ERP plugin planning addressed the financial reality of hospitals. Sudheendra groundwork mapped CARE to an actual institutional environment. Kerala CARE continued scaling past 200,000 registrations. The sustainability conversation moved toward a dedicated foundation structure.

The central question was no longer whether lab, pharmacy, accounts, or appointments existed. It was whether they could work together inside the movement of a real hospital and a statewide public health program.
