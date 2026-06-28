---
title: Building CARE as open healthcare infrastructure
excerpt: "The first phase of the CARE expansion focused on the foundations: technical stewardship, FHIR and SNOMED CT alignment, palliative care workflows, and the early HMIS roadmap."
publishedAt: 2024-12-31
author:
  name: Open Healthcare Network Foundation
categories:
  - title: CARE
    slug: care
  - title: Architecture
    slug: architecture
  - title: Digital Public Infrastructure
    slug: digital-public-infrastructure
mainImage:
  src: "/blog/covers/building-care-open-healthcare-foundation.svg"
  alt: "Building CARE as open healthcare infrastructure cover illustration"
---

The second half of 2024 was a foundation-building period for CARE. The project goal was ambitious: expand CARE into two major use cases, the Kerala Palliative Care Grid in partnership with the National Health Mission, and an end-to-end Hospital Management Information System.

That kind of expansion cannot be done by adding screens alone. Healthcare infrastructure needs teams, security practices, release discipline, standards alignment, deployment pipelines, documentation, stakeholder trust, and a way to keep product decisions close to clinical reality. From July to December 2024, the work focused on that base.

## Building the operating capacity

The first layer was organizational infrastructure. The team set up custom email accounts for the Open Healthcare Network, created a dedicated hosting inbox, and began centralizing documentation in Notion so knowledge would not remain scattered across chat threads and individual contributors.

Development coordination also became more structured. Sprints were set up in GitHub Projects, creating a shared place for roadmap execution, engineering work, and product visibility. Digital Ocean approved a sponsored cloud credit of $3,000 per year, and the team created a CARE staging deployment at `care.do.ohc.network` for testing and demonstrations.

This may sound mundane, but it is the hidden work behind reliable public infrastructure. A health system cannot depend on heroics and memory. It needs repeatable environments, documentation, and shared operating practices.

The team also expanded its technical capacity by bringing in Vignesh, the core engineer who had written most of the CARE backend, to lead backend engineering for OHC. Renjith Balaji joined as Head of Partnerships, strengthening the bridge between product development, institutions, and implementation opportunities.

## Strengthening CARE Core

The CARE platform itself went through a deeper technical review. The team audited the existing codebases to identify technical debt, review the security posture, and clarify the development priorities needed for the next phase.

Several standards and architecture efforts moved forward together:

- A review of ABDM implementation, including future data archival needs and 10-year data retention expectations.
- Early integration work for HL7 FHIR, the standard used for interoperable electronic medical records.
- Support for SNOMED CT, enabling clinical data capture with standard terminology and value sets.
- A plugin architecture, with Scribe as the first plugin release.
- Custom forms for palliative-care-specific clinical data.

The strategic direction was clear: CARE was being shaped less as a single application and more as a standards-aligned operating layer. The platform needed to support different care contexts while keeping the underlying patient, encounter, observation, order, form, role, and audit primitives coherent.

## Designing the HMIS path

The HMIS work began with humility. Instead of assuming CARE already knew how hospitals should work, the team reviewed HMIS systems used at Amrita Hospital and Aster Hospital and engaged with the Indian Medical Association Kochi chapter to understand the desired capabilities of a practical hospital system.

The team wrote CARE Enhancement Proposals for scheduling, pharmacy, and laboratory workflows. A physical meeting with expert doctors helped guide product decisions, and clinicians were onboarded into Slack, GitHub, and Notion so they could participate directly in roadmap discussions.

This early engagement mattered because a hospital management system is not one workflow. It is a dense web of reception, scheduling, outpatient care, inpatient care, lab, pharmacy, stores, billing, consent, devices, beds, reporting, and governance. The 2024 work established the product questions that would later become CARE's lab, pharmacy, patient accounts, token, and inventory modules.

## Preparing the Palliative Care Grid

The palliative care work was even more operationally demanding. CARE was deployed for the Indian Association of Palliative Care at `care.iapckerala.in`, and the team mapped the additional features needed for home care, including a nurse log update feature.

The team also studied Arike's NGO-based deployment model, because Kerala's palliative ecosystem includes government facilities, NGOs, community-based organizations, nurses, doctors, local bodies, and volunteers. CARE had to support that distributed model rather than forcing everything into a hospital-centered workflow.

One major challenge was hosting. The team spent three to six months coordinating with the Kerala State Data Center to evaluate deployment possibilities for the Palliative Care Grid. State cloud procurement constraints prolonged the process, so after a review with Rajan N. Khobragade, Additional Chief Secretary of Health, on 22 October 2024, the decision was made to host CARE on Digital University Kerala's cloud server.

That decision unlocked momentum.

## Government alignment and dry runs

Between October and December, the team held a sequence of high-level reviews and implementation meetings. These included discussions with Calicut Corporation, K. M. Abraham, Chief Principal Secretary to the Chief Minister of Kerala, Thomas Isaac, former Finance Minister of Kerala, Seeram Sambasiva Rao, Principal Director of LSGD, Vinay Goyal, State Mission Director of NHM, and other officials.

On 18 December, the team conducted a full end-to-end dry run of the Palliative Care Grid features. On 20 December, the LSGD Principal Director conducted an in-depth review and suggested additional changes. By 30 December, after another joint review with LSGD and NHM leadership, the required features were considered ready and the decision was made to launch the Grid.

Alongside these reviews, the team created the `kerala.care` portal, completed Malayalam internationalization for the website, built CI/CD and Terraform automation for deployment, and deployed the palliative care instance on Digital University Kerala's cloud.

## A public-good foundation, not just a project setup

The same period also included the launch of the GDC AI Workforce program through AICTE, designed to train students in advanced coding and AI-assisted software development for Digital Public Goods. By 23 September 2024, more than 19,000 students from 28 states had expressed interest, more than 6,000 had joined, and 157 high-performing students had advanced from beginner to intermediate coursework.

While this skilling initiative was distinct from the two core healthcare deliverables, it reflected the same philosophy: CARE would need an ecosystem of contributors, implementers, clinicians, and public-good builders around it.

## The launch surface was built before launch

By the end of December 2024, CARE had a stronger engineering base, a clearer HMIS roadmap, a cloud deployment path for Kerala, Malayalam-enabled public interfaces, palliative care workflows ready for launch, and a growing network of government and clinical stakeholders.

That launch surface was technical and institutional at the same time. It included CI/CD, Terraform, staging infrastructure, FHIR and SNOMED CT direction, plugin architecture, clinician input, government review loops, and a hosted Kerala CARE instance that could be exercised before public rollout.

The first phase of the CARE expansion therefore reads less like a preface and more like the architecture of trust. The later statewide rollout could move quickly because the groundwork had already absorbed months of product, hosting, policy, and clinical coordination.
