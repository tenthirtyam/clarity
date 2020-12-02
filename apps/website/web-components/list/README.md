---
title: Overview
toc: true
---

::: component-summary

Lists are for showing a set of items in sequence and can be nested to show hierarchy.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a list to group related items and organize them vertically for easy scanning.

:::

::: component-section-level-one-title

## Types

:::

:::component-section-level-one

Clarity has three types of lists: unordered, ordered, and unstyled.

:::

<div class="clr-row" cds-layout="m-b:xxl">
<div class="clr-col-sm-12 clr-col-lg-4" cds-layout="p-b@lg:none p-b:lg">
<DocInset height="240">
<div class="card-like" cds-text cds-layout="vertical gap:lg p:md align:stretch">
    <ul cds-list>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>
            List item 3
            <ul cds-list>
                <li>List item A</li>
                <li>List item B</li>
            </ul>
        </li>
        <li>List item 4</li>
    </ul>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md"><b>Unordered lists</b> have bullet points in front of each item.</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-4" cds-layout="p-b@lg:none p-b:lg">
<DocInset height="240">
<div class="card-like" cds-text cds-layout="vertical gap:lg p:md align:stretch">
    <ol cds-list>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>
            List item 3
            <ol cds-list>
                <li>List item A</li>
                <li>List item B</li>
            </ol>
        </li>
        <li>List item 4</li>
    </ol>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md"><b>Ordered list</b> items are numbered.</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset height="240">
<div class="card-like" cds-text cds-layout="vertical gap:lg p:md p-l:lg align:stretch">
    <ul cds-list="unstyled">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>
            List item 3
            <ul cds-list="unstyled">
                <li>List item A</li>
                <li>List item B</li>
            </ul>
        </li>
        <li>List item 4</li>
    </ul>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md"><b>Unstyled list</b> items have no indicators.</p>
</div>
</div>
