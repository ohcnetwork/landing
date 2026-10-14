---
title: Questionnaire builder and workflow improvements in CARE
excerpt: August 2026 brought a redesigned questionnaire builder and smoother pharmacy billing, alongside clearer encounter controls and reliability fixes across everyday clinical workflows.
publishedAt: 2026-08-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Product
    slug: product
mainImage:
  src: "/blog/covers/questionnaire-builder-and-workflow-improvements-care.svg"
  alt: "Questionnaire builder and workflow improvements in CARE cover illustration"
featured: true
---

August's CARE updates focused on making common clinical workflows easier to create, navigate, and trust. A redesigned questionnaire system gives teams a more direct way to build and complete forms, while improvements to pharmacy billing, encounter controls, and reliability address friction across day-to-day work.

## A more visual questionnaire experience

The new Questionnaire Builder and Forms System (v2) introduces a visual builder with live preview and drag-and-drop editing. Clinical staff also get an improved form-filling experience. Together, these changes make questionnaire creation and completion feel more direct, while keeping the form itself visible as it takes shape.

Tags now use color coding throughout the application, making different categories easier to distinguish at a glance.

## Smoother medication workflows

Pharmacy billing now has a streamlined workflow for processing patient medication charges. Medication dispense history is paginated, making its records easier to navigate, and dosage fields are disabled when staff view historical medication requests.

Medication requests created from templates no longer display a dispense status before dispensing takes place. These changes help keep billing, history, and request status aligned with the work being done.

## Clearer encounters and access

Encounter controls were simplified by removing the class-change option that had caused confusion. The discharge button is now hidden for encounters that are not hospitalizations, and the completed status is no longer offered as an encounter status choice. The Create Encounter button appears only for users with permission to create encounters.

Organization selectors now use the new picker interface. Patient registration updates also redirect correctly, helping users return to the expected part of the workflow.

## Reliability across everyday work

Several fixes make routine tasks more dependable: diagnostic reports can be printed at the organization level, and appointment calendar caching no longer leads to incorrect availability. Error handling is clearer when multiple actions fail, and encounter action buttons no longer overflow on small screens.

Other refinements address smaller but visible points of friction, including the clickable area for the Show on Map link, patient names in avatar components, text formatting across forms, and the spelling of “Dairy free” in diet preferences.

## Work behind the scenes

Alongside these user-facing updates, 18 internal changes covered testing, CI/CD, code quality, and documentation.

The month's work makes CARE's questionnaires more adaptable and its everyday clinical and pharmacy workflows clearer. Small reliability improvements across forms, encounters, appointments, and medication records also help keep routine care work consistent.
