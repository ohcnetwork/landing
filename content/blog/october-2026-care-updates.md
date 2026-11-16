---
title: Getting ready for CARE 3.1 with referrals, immunisation and a visual questionnaire studio
excerpt: October's work on CARE was about getting ready for CARE 3.1. Highlights include referral workflows, immunisation policies, a redesigned questionnaire experience and customisable encounter workspaces, alongside improvements across diagnostic reports, pharmacy, inventory, billing, navigation and administration.
publishedAt: 2026-10-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Product
    slug: product
mainImage:
  src: '/blog/covers/october-2026-care-updates.svg'
  alt: 'Getting ready for CARE 3.1 with referrals, immunisation and a visual questionnaire studio cover illustration'
---

October was a month of building toward CARE 3.1. The team focused on adding capabilities that hospitals and health programmes need as they grow: immunisation, procedures, a redesigned questionnaire experience, a new workspace for encounters, better pharmacy and inventory flows, and referrals, which sit at the heart of how care moves between facilities.

Several of these changes are part of the CARE 3.1 work, so they will reach deployments as that release goes out.

## Referrals that carry the full picture

A patient's care rarely stays inside one building. Someone seen at a smaller facility may need a specialist elsewhere, and the receiving team needs to know why they are coming and what has already been done. Referrals in CARE 3.1 are built around that handover.

Staff can create a referral, choose where the patient is going, follow its details and respond to it. Each referral is linked to the patient's visit and to the clinical records that matter for the handover. Both patient and facility views list the referrals that concern them, so nothing waits unseen.

Around each referral sit assignments, conversations, shared records and questionnaire responses, giving the receiving team real context instead of a bare request. Permissions decide who can see and act on what. Where a structured clinical question cannot be represented safely in a referral response, CARE rejects it rather than passing on something incomplete.

## Immunisation policies and schedules

Vaccination follows clear rules, which makes it work that software should carry. Administrators can now define immunisation policies for the whole instance or for an individual facility, choosing the vaccines and the recommendation templates under each one.

A clinician applies a policy to a patient and gets a recommended vaccination schedule in one step. The dates and dose details they previewed are carried through to what is saved, and all dose recommendations are created together, so a schedule is never left half written. For now, a policy that would need more than 20 requests in one batch is stopped before anything is saved.

## A redesigned questionnaire experience

Questionnaires are how CARE captures most clinical information, so they saw the biggest share of October's work, from how forms are built to how they are filled.

A visual studio for building forms. The new questionnaire studio replaces the older management screens. Administrators build forms with an outline, a canvas and an inspector, set up question types, choices, visibility rules and validation, and preview the result as they go. Existing questionnaires can be cloned, imported or exported, and every form keeps a history of its revisions.

Plugins for specialised inputs. Questionnaires can now be extended through plugins, so they can support specialised clinical inputs such as a vision prescription, a dental chart or a pain score.

Actions that respond to answers. Authors can attach actions that apply when certain conditions are met. Reusable action configurations are managed in one place instead of being set up again for every form, and staff see the outcome of these actions as notifications.

Filling forms without losing work. Staff can work through several forms in one session, with progress saved on the device so unfinished work can be recovered. Encounter drafts can be saved to the server and picked up later, and the flow is designed to keep drafts safe even when a session expires. Drafts stay separate for each user who signs in, and when a submission fails, the errors point back to the questions that need attention.

Forms beyond the patient. Facilities, locations and devices now have their own place to pick a questionnaire, submit a response and review earlier ones.

Value sets at the right level. The lists of choices a question offers can now be managed at instance and facility level. A facility can override or build on a parent list, users can set preferences for the sets they use, and older questionnaires keep working as before.

## Encounter workspaces you can design

No two clinicians look at an encounter in quite the same way. Workspaces let users design their own view of what an encounter page should show, so the layout can differ by doctor and by type of encounter.

Each workspace is built from chosen sections and widgets for things like form responses, service requests and vitals. Workspaces can be edited visually or as JSON, can include widgets provided by plugins, and can be shown or hidden depending on the encounter's status.

The pages around them were tidied up too. Navigation across facility, service, location, organisation and patient areas now follows one consistent pattern, with pinning, hover previews and a mobile layout. Encounter pages use compact headers, appointment actions sit in the workspace header, and the selected encounter stays in place as users move between sections.

## Diagnostic reports that match lab work

A single lab order often produces several results, reviewed by different people at different times. A service request can now hold multiple diagnostic reports, and each one can be created, edited, reviewed and printed on its own.

Each report keeps its own draft and review state, so finishing one never holds up another. Reports can include additional observations drawn from the facility's own definitions, and conclusions can be written with formatting. Staff can print a single report or a combined view, and a report can no longer be edited once it is final.

## Pharmacy, inventory and billing

Billing selected prescriptions now issues the invoice and opens payment collection straight away, cutting out steps between billing and payment. If issuing the invoice fails, CARE recovers the saved draft so nothing is dispensed or invoiced twice. When confirmed payments, after credits, exactly match the total, the invoice is balanced automatically, and a failed balance update can be retried.

When dispensing during an encounter, CARE now picks the stock that expires earliest, following a first expiry, first out approach, so older lots are used before newer ones.

Supply deliveries are easier to handle as well. Staff can tick checkboxes to select items from a request order, or select everything shown at once. A draft delivery item can be corrected directly instead of being cancelled and entered again. The original stays active until the edit is saved, a failed draft stays available to retry, and prices and expiry dates that were not touched are kept as they were.

Locations can now be marked with their inventory purpose, such as storage, supply, consumption or adjustment, and that choice can be applied when creating beds in bulk. For organisations using extensions, extra fields in the delivery table can now sit next to the column they relate to instead of piling up at the end.

## Other improvements

Encounter responses and patient history can now be filtered by the role of the person who recorded them, and response widgets can remember a named role selection. In location navigation, sublocations and beds are now told apart, which makes it simpler to pick a location that holds only beds.

Users can search the facility's list of healthcare services by name. Administrators also get a new interface backed by the CARE App Store for discovering and configuring CARE apps, with app icons and updated plugin configuration screens. Plugin configurations set when CARE is built are shown as read only.

## Looking ahead

Taken together, October's work lays much of the groundwork for CARE 3.1: care that moves between facilities, schedules that follow clear rules, forms that fit each speciality and encounter pages that fit each team. We will share more as CARE 3.1 reaches deployments.
