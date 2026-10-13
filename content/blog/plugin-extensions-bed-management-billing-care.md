---
title: Plugin extensions, bed management, and billing refinements in CARE
excerpt: June 2026 opened new plugin points for logistics, invoice printing, and patient profiles, simplified bed and location management, tightened payment reconciliation, and made encounters easier to find.
publishedAt: 2026-06-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: HMIS
    slug: hmis
mainImage:
  src: "/blog/covers/plugin-extensions-bed-management-billing-care.svg"
  alt: "Plugin extensions, bed management, and billing refinements in CARE cover illustration"
---

June focused on the everyday workflows that hospital staff depend on: finding encounters and tracking orders. Alongside that came versioned clinical valuesets, a more reliable app after updates, and a steady set of fixes across the platform.

## Encounters and orders

Encounters can now be looked up directly by their unique ID. When a doctor, nurse, or support engineer already has the ID, they can go straight to the record without filtering through lists. The encounter search box was also fixed so it displays at the proper width.

Service requests now carry location information. Knowing where a request was raised, or where it needs to be fulfilled, helps lab, radiology, and ward teams coordinate without extra calls.

PDF files can now be printed straight from the preview screen. The Encounter Plots tab no longer crashes when no plot configuration is available, and patient update forms no longer show incorrect errors about required organization levels.

## Clinical data and standards

Clinical valuesets now include version information. As terminology sets are updated over time, this makes it clear which version a deployment is using, and gives a firmer base for keeping coded data consistent across facilities.

## Reliability and usability

A fix addresses an issue where the application occasionally failed to load after an update, which matters most in hospitals where staff cannot afford to wait at the start of a shift. Each build now records when it was built, making it quicker to trace an issue to a specific release.

Forms also got easier to work with. The payment reconciliation form now scrolls to and highlights any errors on submission, its registration process was simplified, and the charge item form now rejects titles that contain only blank spaces. System notifications can be positioned according to facility preference, and a browser console warning was resolved.

## Extending CARE with plugins

June also added new extension points that build on May's Plugs V3 work. Facilities can now customize invoice print formats, show additional facility specific fields on patient profiles, and connect CARE to external delivery and logistics systems, all without changes to the shared core. Bed and location management, delivered through plugins, also improved: patients can be assigned directly to a reserved bed, room controls are clearer, and custom bed names are kept when a location's bed count changes.
