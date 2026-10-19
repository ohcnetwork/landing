---
title: Quicker queues, a sharper pharmacy and clearer billing in CARE
excerpt: September 2026 brings quicker queue handling, pharmacy medicine mapping, inventory expiry tracking, clearer billing, facility level patient identifiers and a round of mobile fixes.
publishedAt: 2026-09-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Product
    slug: product
---

September's work on CARE focused on the parts of a hospital day that keep patients moving: calling the next person in line, dispensing medicines, catching stock before it expires and closing out bills. Facilities also gained more control over how they identify patients and organise their locations, and a long list of fixes made CARE more dependable on phones and tablets, iPhones in particular.

## Queues and patient flow

Staff managing a queue can now look up a patient in the queue and move straight to serving the next person waiting, instead of scanning the board and picking a token by hand. On a busy outpatient day, the seconds saved on every patient add up across a counter. The queue board also received another round of polish after its redesign, with better handling of sub queues and a layout that works properly on mobile, so a staff member running a service point from a phone sees the same picture as someone at a desk.

The resource referral flow was updated this month, along with the encounter properties connected to it.

## Pharmacy and inventory

Medicines can now be mapped in the new pharmacy, and the main pharmacy flow has keyboard shortcuts. Pharmacists who work through a long line of prescriptions can move from one step to the next without reaching for the mouse each time. Two shortcuts inside encounters, mark as completed and dispense, had stopped working and are now fixed.

Inventory items can be filtered by expiry date, which makes it easier to find stock that needs to be used, moved or written off before it lapses. Expiry dates now also appear in the supply delivery table, and the display of delivery limits was refined. When the location on a delivery or request order changes, its origin and destination now stay in sync, so orders no longer point at the wrong place after an edit.

## Billing and accounts

Invoices can now be filtered by date, which helps billing teams with daily closing and monthly reconciliation. Account pages explain amount due and gross billed through tooltips, so staff who are new to the billing screens can tell the two apart without asking. Account balances are also rounded, making them easier to read out and quote to patients at the counter.

## Patient records and clinical data

A patient's blood group is now shown on the patient profile, where clinicians can see it at a glance. Facilities can configure and view their own patient identifiers, which helps hospitals that already run their own registration numbers carry them into CARE rather than maintaining them on the side.

Encounter end dates are now handled correctly according to the status of the encounter. Body height can be configured in chart plots. Prescription printouts were improved, and printing an appointment now shows a loading indicator while the document is being prepared, so staff know the system is working.

## Organising facilities, locations and requests

Locations can now be tagged, giving facilities a simple way to group wards, rooms and other spaces in whatever way suits them. Users who work across many facilities can search from the facility switcher and the dashboard instead of scrolling through a long list. Tags can also be assigned directly on a service request's details page, and tag colours now appear consistently everywhere tags are shown, so a colour means the same thing on every screen.

## Usability across devices

Forms and the patient hover card now adapt better to every screen size, and filters with multiple selections work better on small screens. A set of iPhone and iOS issues was fixed: selecting multiple options, drawers jumping back to the top while scrolling, and the keyboard repeatedly popping up. Clicking the arrow on a dropdown now opens it, as users expect. CARE also has a new heartbeat loading animation.

## Under the hood

Plugins can now add their own sections to a user's profile page. This extends the places where extensions can plug into CARE, so deployments and partners can surface their own settings or information alongside the core profile without changing CARE itself.
