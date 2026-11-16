---
title: Community Call (16 September 2026)
excerpt: Sharing the schedule for today's community call.
publishedAt: 2026-09-16
author:
  name: Open Healthcare Network Foundation
categories:
  - title: Updates
    slug: updates
  - title: Community
    slug: community
mainImage:
  src: "/blog/covers/community-call.svg"
  alt: "Community Call cover"
featured: false
---

Sharing the schedule for today's community call.

## Core Updates

### Configurable limit for upsert delivery datapoints

[PR #16661](https://github.com/ohcnetwork/care_fe/pull/16661) - [ENG-887] Fix internal and external delivery batch failure and refine supply delivery limit UI

This update introduces a configurable limit for upsert delivery datapoints, improving the supply delivery workflow by allowing administrators to set delivery batch limits and better handle delivery failure scenarios.

## Apps/Plugins Update

### Complete dispense without invoice balancing

[PR #22](https://github.com/egovhealthcare/care_govt_hmis_fe/pull/22) - [ENG-991] Allow completing dispense order when total gross amt. is zero

Users can now complete dispense orders even when the total gross amount is zero, enabling more flexible pharmacy workflows.

### Loading animation in CARE

[PR #16787](https://github.com/ohcnetwork/care_fe/pull/16787) - [ENG-1000] Pixel-art SVG Heartbeat animation for loading animation

A new pixel-art SVG heartbeat animation has been added to provide visual feedback during loading states, enhancing the user experience.

### Optimize memory usage of dev server

[PR #16788](https://github.com/ohcnetwork/care_fe/pull/16788) - Remove vite-plugin-checker from the dev server

The development server has been optimized by removing the vite-plugin-checker, reducing memory consumption and improving dev server performance.

### Support for running vite-server using portless

[PR #16795](https://github.com/ohcnetwork/care_fe/pull/16795) - Adds support for running vite-server using `portless`

A new capability has been added to run the vite development server in portless mode, providing more flexibility for development environments.
