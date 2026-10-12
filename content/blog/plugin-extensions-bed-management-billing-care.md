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

June's work centred on letting each facility adapt CARE to its own needs without changing the shared core. New plugin points arrived for external delivery systems, invoice print formats, and patient profiles, alongside improvements to bed and location management, payment reconciliation, encounter search, and the reliability of the app itself.

## More room for facility specific extensions

Three changes this month extend what a deployment can configure through plugins. Plugins can now integrate CARE with external delivery and logistics systems, giving facilities a way to connect the platform to services they already rely on. Invoice print formats can be customized through plugins, so a hospital can match its billing printouts to its own requirements without a change to the core. Patient profiles can also display additional custom information configured by the facility.

Patient notes now support plug devices as well, so device information can be added directly within a note.

## Encounters, orders, and documents

Encounters can now be found directly by their unique ID, and the encounter search box was fixed so it displays at the right width. Service requests now carry location information, which helps teams track and coordinate them. PDF files can be printed straight from the preview screen. The Encounter Plots tab no longer crashes when no plot configuration is available, and patient update forms no longer show incorrect errors about required organization levels.

## Clinical data and standards

Clinical valuesets now include version information, making it clearer which version of a terminology set is in use as those sets change over time.

## Under the hood

Each build of the app now records when it was built, which makes troubleshooting a specific deployment more straightforward. A fix addresses an issue where the application occasionally failed to load after an update. System notifications can now be positioned according to facility preference, and a React warning that appeared in the browser console was resolved.
