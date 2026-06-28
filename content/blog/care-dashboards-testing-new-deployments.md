---
title: Dashboards, testing discipline, and new CARE deployments
excerpt: November 2025 strengthened CARE through facility dashboards, Playwright testing, billing safeguards, new palliative care deployments, and deeper readiness at Sudheendra Hospital.
publishedAt: 2025-11-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Deployment
    slug: deployment
  - title: Operations
    slug: operations
mainImage:
  src: "/blog/covers/care-dashboards-testing-new-deployments.svg"
  alt: "Dashboards, testing discipline, and new CARE deployments cover illustration"
---

November 2025 strengthened CARE in three directions: production reliability, operational visibility, and deployment expansion.

By this stage, CARE was no longer a platform preparing for one launch. It was supporting a live hospital pilot, a statewide palliative care grid, and new partner deployments moving toward production. The engineering and operations work had to become more disciplined because the consequences of defects were no longer abstract.

## Billing safeguards for live finance teams

The patient account and billing layer received focused reliability improvements.

Medication billing and invoice forms gained stronger validation to prevent invalid quantities, duplicate submissions, and inconsistent billing data. Navigation between invoices, payment history, and receipts was refined so administrative teams could reconcile accounts with less friction. Monetary calculation logic for taxes, discounts, and charge items was improved to reduce rounding errors.

Sensitive financial actions such as payment reconciliation and account deletion gained confirmation dialogs and restricted access. These controls may seem minor, but they are essential in a live hospital. Financial workflows need speed, but they also need guardrails that protect against irreversible mistakes.

Inventory and dispensing also improved. The inventory UI was redesigned for large medicine and consumable catalogs, quantity-based stock sorting was added, supplier pagination was fixed, and dispensing gained clearer loading states, automatic lot selection, and better feedback. Dispense-to-invoice automation tightened the link between pharmacy activity and revenue capture.

## Playwright becomes the test backbone

November completed the migration from Cypress to Playwright.

This removed legacy Cypress infrastructure and consolidated end-to-end testing on one modern stack. Automated coverage expanded across facilities, users, encounters, questionnaires, devices, billing, tokens, and permissions.

The significance was structural. CARE's deployment surface had become too wide for ad hoc manual regression checks: palliative care, hospital workflows, accounting integrations, inventory, lab, pharmacy, dashboards, token systems, and role management were all active. A reliable automated test layer became part of the platform's operational safety.

Test reporting, execution stability, and cleanup of legacy hooks were improved, reducing CI noise and helping teams catch regressions before they reached live users.

## Sudheendra prepares for full-scale rollout

At Sree Sudheendra Medical Mission Hospital, November focused on workflow optimization, cross-department testing, and launch readiness.

The team conducted multiple rounds of testing across outpatient, inpatient, and casualty departments. Mock drills simulated real-world scenarios from registration to billing, discharge, and pharmacy operations, validating whether CARE could handle concurrent hospital cases.

The accounting plugin was customized for hospital-specific fields and processes, including GRN numbers in vendor bills, updated voucher and invoice series, and cash denomination tracking across counters. Modules were also developed for insurance claims, payouts, discount management, governance reports, and compliance needs.

Token display testing began so patient queues could be visible across service points. New questionnaires were introduced for operation theatre and ICU documentation, extending CARE into more critical hospital workflows. Department-wide staff training continued to familiarize teams with optimized workflows and new modules.

November was the bridge between pilot usage and full HMIS launch planning.

## Facility dashboards for Kerala CARE

The Kerala Palliative Care Grid gained a major governance layer through facility-level dashboards.

The new dashboard gave individual facilities visibility into care activities, patient visits, workload distribution, and operational metrics. NHM Kerala reviewed dashboard indicators and layouts through multiple sessions, and the dashboard was refined to align with state reporting and monitoring needs.

On 7 November 2025, the facility dashboard was launched statewide after feedback cycles with NHM. Later in the month, district coordinators were trained on district-level access features, roles, permissions, and facility management.

CARE also introduced enhanced access controls for state coordinators so they could manage facility-level administrative functions directly, including user assignment and department cleanup. This reduced dependency on central technical teams and pushed routine governance closer to the program operators.

## New deployments: Niram and Pallium India

November also expanded CARE's deployment footprint.

Niram Palliative Care in Tumkur, Karnataka, a 75-bed NGO-managed palliative care center with outpatient and home-visit services, began onboarding to CARE HMIS. The team set up a dedicated instance, configured facility structures, migrated patient data, imported stock lists, created custom questionnaires, configured user roles, and trained staff. Niram entered pilot phase with go-live expected after stabilization.

Pallium India in Trivandrum prepared for official CARE HMIS launch on 5 December 2025. Pallium's operating model included an 18-bed inpatient facility, 17 outpatient departments, 138 full-time staff, and 16 home-care teams. Clinical operations included more than 15 doctors, 31 nurses, and 16 non-medical clinical staff.

CARE support for Pallium included facility setup, location and department mapping, patient data migration, structured questionnaires aligned with care protocols, analytics dashboards, inventory digitization, charge item configuration, staff training, and on-site handholding.

These deployments demonstrated that CARE could adapt to different institutional models: a multi-specialty hospital, an NGO palliative center, a national palliative care institution, and a statewide public health grid.

## Governance as a scaling mechanism

November's most important theme was not any single feature. It was governance.

Billing safeguards governed financial correctness. Playwright governed release reliability. Facility dashboards governed public health visibility. Access controls governed administrative delegation. Mock drills governed hospital readiness. Partner onboarding governed repeatable deployment practice.

CARE was becoming a platform whose quality depended not only on code, but on review loops, permissions, dashboards, tests, training, and operational handover.

That is how open healthcare infrastructure begins to scale without becoming chaotic.
