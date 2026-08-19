---
title: Prescription, billing, and access improvements in CARE
excerpt: July 2026 spanned prescriptions and dosing, appointments and billing, observation and medication data aligned with FHIR, password reset by phone, and nutrition added to the administration workflow.
publishedAt: 2026-07-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Product
    slug: product
mainImage:
  src: "/blog/covers/prescription-billing-access-improvements-care.svg"
  alt: "Prescription, billing, and access improvements in CARE cover illustration"
featured: true
---

July's release spanned prescriptions, appointments and billing, clinical data alignment, and access security, along with a broadened administration workflow that now covers nutrition, and a steady round of platform work underneath.

## Nutrition and medication administration

The administration workflow now covers nutritional products, not just medications. The administration tab lets a user switch between medications and nutritional products, with the search, available actions, icons, labels, and empty states all adapting to the selected type. Alongside that, grouped medicine administration now shows the associated note next to the medicine name, any dosage other than a single unit is highlighted, everywhere except on printouts, to draw attention, and text that previously overflowed in the administration table now wraps correctly on mobile screens.

## Prescriptions

The prescription list within an encounter now loads through infinite scrolling rather than fixed pages. Medication requests can express dosing over a bounded date range or a relative day period, for example day 3 to day 5. The prescription printout was also enhanced.

## Appointments and billing

On the appointment view, the Print and Accounts quick actions are now shown for every appointment status except cancelled, instead of appearing only in certain states, and the token heading now appears only when a token has been or can be generated. The appointment printout shows both who created and who last updated the record, rather than only the last updater. Invoices can now be filtered by their created date. Two billing correctness fixes also landed: monetary components with an explicit value of zero, such as a tax-exempt line recorded as 0 rather than left blank, are no longer wrongly rejected, and charge items now attach correctly to invoices.

## Clinical data and standards

ObservationDefinition types were updated and brought into line with FHIR, including making the component unit optional and adding validation for the component code. Questionnaire responses can now be filtered by who created them.

## Files and uploads

Service requests can now take a photo directly from the camera, alongside the existing upload from device. The encounter and patient files tab can now be extended through plugins; as part of that change, the built-in freehand drawing feature was removed from core and moved to a separate Excalidraw plugin. Fixes restored file upload and PDF preview where they had stopped working.

## Access and security

Users can reset a password using a code sent to their phone, in addition to the existing email route, with the shared parts of the two flows unified into one component. A backend fix returns a clear error when no account is linked to the submitted phone number, instead of crashing. Signing out now purges the cached application state that previously persisted in the browser after logout, which matters on shared hospital devices. Authorization checks were also added across nested routing APIs, covering tokens, inventory, notes, device histories, and organization users.

## Usability

Patient age is now shown consistently across encounters, appointments, queues, billing, and patient information through a shared component, with an optional tooltip giving a years, months, and days breakdown. The automatic app update no longer interrupts work on pages other than the home route, showing an update prompt instead. Date and time input styling was unified, and two sidebar issues were fixed so selectors work when the sidebar is collapsed and clicking the current page no longer triggers a needless reload.

## Under the hood

Plugin UI components now register automatically through a Vite plugin rather than manual wiring. The frontend moved to Node.js 24 with a round of dependency upgrades. The month also added test coverage across billing and medication timing logic, hardened the shared request layer against pagination and response parsing edge cases, and introduced an automated pull request review workflow, alongside the usual continuous integration and tooling changes.

## Operations and ecosystem

Beyond the codebase, the month included a set of foundation and ecosystem tasks. The Digital Public Good renewal for CARE was initiated, and MSME Udyam registration was obtained for the foundation. ISO certification for CARE was completed against ISO/IEC 82304 for health software and ISO/IEC 27001:2022 for information security, and the CARE trademark application is in progress. The team closed the final report for a completed funder project, progressed grant applications, ran product demonstrations with external hospitals and groups, and reached mid-term evaluations in the Google Summer of Code programme. Support continued across the live deployments, and a dedicated support inbox was set up.
