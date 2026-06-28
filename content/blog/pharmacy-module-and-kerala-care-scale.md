---
title: Pharmacy workflows and the scale of Kerala CARE
excerpt: June 2025 delivered a FHIR-aligned pharmacy module, questionnaire builder upgrades, rapid registration, a public launch milestone, and deep adoption across the Kerala Palliative Care Grid.
publishedAt: 2025-06-30
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: HMIS
    slug: hmis
  - title: Deployment
    slug: deployment
mainImage:
  src: "/blog/covers/pharmacy-module-and-kerala-care-scale.svg"
  alt: "Pharmacy workflows and the scale of Kerala CARE cover illustration"
---

June 2025 was a month of scale on two fronts.

On the product side, CARE delivered a full pharmacy management workflow, adding another major piece of the HMIS roadmap. On the public health side, the Kerala Palliative Care Grid reached a major public milestone with a formal launch event in Cochin and deep statewide adoption across government facilities, NGOs, and CBOs.

## Pharmacy as a complete workflow

Pharmacy work sits at the intersection of clinical care, supply chain, billing, and patient experience. A medicine order is not just a note from a doctor. It has to connect to product knowledge, stock, batch numbers, expiry dates, pricing, taxes, discounts, billing, payment, dispensing, and printed instructions.

The June pharmacy module was built to support that end-to-end flow.

Practitioners could raise medication requests through dynamic questionnaires embedded into clinical forms. Prescriptions could also be generated directly from the patient encounter page, linking prescribing to the clinical context where the decision was made.

The product and product knowledge layer allowed facility administrators to define medications, nutritional supplements, consumables, strengths, units, and forms. Charge item definitions supported pricing, Indian GST slabs, and discount rules configured by administrators.

Facilities could create multiple pharmacy locations. Each pharmacy location supported prescription queues filtered by encounter type and priority, helping staff handle requests in a more organized way.

## Inventory, stock, billing, and dispensing

The pharmacy module introduced a practical inventory layer.

Inventory items displayed current stock levels, batch numbers, and expiry dates. Internal transfers supported movement of stock between facility locations, with receive-stock and dispatch-stock workflows. External supply management allowed facilities to raise purchase orders to vendors, track incoming stock through inward purchase entries, record receiving status, and log item conditions.

An inventory dashboard and expiry logs helped teams identify product lots nearing expiry, reducing wastage and improving patient safety.

The billing and dispensing workflow closed the loop. Pharmacy staff could view active prescriptions, select batches or lots, generate bills, record payments, manage paid prescriptions, dispense medicines, and print formatted prescription slips for patients.

This gave CARE a strong operational base for hospital pharmacy. It also made pharmacy activity traceable back to clinical encounters and patient accounts, which would become essential during later HMIS deployment.

## Better form building and faster registration

June also improved the platform tools that make CARE adaptable.

The questionnaire builder gained more flexible choice handling, including radio buttons, dropdowns, choice reordering, cross-group question swapping, multi-select dropdowns with conditional logic, and JSON import/export. These improvements made it faster to build and adapt forms across deployments.

A built-in 16:9 image cropper improved medical document and image uploads. Department and team list views were redesigned for better navigation in multi-department facilities. Rapid Registration Mode introduced a configurable minimal-field registration flow that remained FHIR-compliant while allowing walk-in patients to be onboarded quickly and updated later.

Appointment slot picking also improved with real-time availability, ordering, and filtering. These platform refinements matter because hospital adoption is often won or lost in the small frictions: how quickly a patient can be registered, how easily a form can be changed, how many clicks a staff member has to repeat.

## The formal public launch of Kerala CARE

The operational highlight of June was the formal public launch of the Kerala Palliative Care Grid on 28 June 2025 in Cochin.

The event was presided over by the Chief Minister of Kerala and brought together more than 3,000 attendees from across the state, including healthcare stakeholders, palliative care units, NGOs, housing associations, and student volunteers.

In the weeks before the launch, the team worked closely with NHM Kerala on planning. This included participation in a high-level meeting convened by the Minister for Industries and collaboration with the state media team on the official launch video. The CARE team drafted the original script and supported several rounds of review and refinement.

At the event, the team presented CARE and demonstrated how it powers the Palliative Care Grid, including dynamic service routing, mobile encounter capture, patient visit tracking, and real-time dashboards.

The team also authored the Standard Operating Procedure document for the Grid. The SOP was released by the Health Minister and became the official user manual for Grid participants.

## Statewide adoption numbers

By 30 June 2025, Kerala CARE had reached substantial scale:

- 1,365 government healthcare facilities were onboarded.
- 1,105 NGO and CBO providers were onboarded.
- More than 1.6 lakh patients had been registered.
- Cumulative home visits had crossed 3 lakh.

Those figures show why the launch was not a symbolic event. CARE was already carrying daily operational load across a large public health network.

The Government of Kerala honored the Open Healthcare Network team with a memento for building the digital backbone of the state's palliative care system. The recognition reflected trust earned through months of product work, field support, training, and coordination.

## International recognition

June also included a global visibility moment. Bodhish Thomas was invited to UN Open Source Week in the United States as a mentor for the UN Tech Over Hackathon. During the event, he demonstrated CARE and its new architecture, highlighting the platform's role in powering large-scale public health systems.

The presentation placed CARE in a wider open-source public infrastructure conversation, beyond its immediate Kerala implementation.

## Product depth met public scale

The pharmacy module and the public launch tell the same story from different angles.

The pharmacy module expanded CARE's HMIS capability into a domain where clinical safety, inventory accuracy, and billing correctness are tightly linked. At the same time, the Kerala Palliative Care Grid showed live statewide adoption across thousands of facilities and providers.

CARE was not proving module depth in isolation or scale through a lightweight registry. It was doing both: building detailed operational workflows while carrying lakhs of patient records and home visits through the Grid.

That tension between detail and scale became one of the defining engineering constraints for the rest of the project.
