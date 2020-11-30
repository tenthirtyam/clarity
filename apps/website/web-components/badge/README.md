---
title: Overview
toc: true
---

::: compsummary

Badges are status modifiers to other elements which display the numerical value within an element either next to it or inside the element itself.

:::

::: complevelonetitle

## Usage

:::

:::complevelone

Badges have a colorful, bold, and filled style that makes them stand out when appearing within or next to another component.

:::

<DocPinbox>
<div>Use a badge to <b>highlight the count</b>.</div>
<div class="versus"><div class="versus-bubble">vs</div></div>
<div>Use a label to <b>show metadata</b>. It is usually text content. A label can contain a badge.</div>
</DocPinbox>

::: complevelonetitle

## Anatomy

:::

::: complevelthreetitle

### Container

:::

:::complevelthree

Badges have a more rounded border radius, similar to labels, to distinguish them from primary buttons.

:::

::: complevelthreetitle

### Content

:::

:::complevelthree

Use integers within badges.

:::

::: complevelonetitle

## Recommendations

:::

::: complevelthreetitle

### Over 99

:::

:::complevelthree

When a badge needs to display a number above 99, use “99+” instead of the number. Only show a number over 99 if it is essential to the user’s objectives and you are certain there is room in the design to accommodate it.

:::

<DocIndent>
<div cds-layout="horizontal gap:xs">
    <cds-tag readonly status="info">Info <cds-badge status="info">99+<span cds-layout="display:screen-reader-only">item.</span></cds-badge></cds-tag>
    <cds-tag readonly status="warning">Warning <cds-badge status="warning">99+<span cds-layout="display:screen-reader-only">items.</span></cds-badge></cds-tag>
</div>
</DocIndent>

::: complevelthreetitle

### Color

:::

:::complevelthree

Badges can contain a variety of colors. Use traffic-light colors to display a sense of urgency or indicate state.

:::

<DocIndent>
<div cds-layout="horizontal gap:xs">
    <cds-badge color="gray">1<span cds-layout="display:screen-reader-only">item.</span></cds-badge>
    <cds-badge color="purple">1<span cds-layout="display:screen-reader-only">item.</span></cds-badge>
    <cds-badge color="blue">15<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge color="orange">2<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge color="light-blue">3<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="info"><span cds-layout="display:screen-reader-only">Info</span>2<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="success"><span cds-layout="display:screen-reader-only">Success</span>3<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="warning"><span cds-layout="display:screen-reader-only">Warning</span>12<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="danger"><span cds-layout="display:screen-reader-only">Danger</span>15<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
</div>
</DocIndent>
