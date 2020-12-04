---
title: Get started
toc: true
---

The Clarity Icons presents pixel-perfect, scalable SVG-based icons. The icon system gives you complete control over icon color, orientation, and size. Additionally, you can access and customize any SVG graphic elements inside the icon through standard CSS.

## Installation

Make sure you follow the instructions of [web components getting started page](/web-components/get-started.md) before continue further.

To use the icon component import the component in your JavaScript.
To see all available icons check out the [Collections Demo](/foundation/icons).

### JavaScript

<doc-code>

```javascript
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);
```

</doc-code>

<doc-code>

```html
<cds-icon shape="user"></cds-icon>
```

</doc-code>

### Angular

<doc-code>

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import '@cds/core/icon/register.js';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

</doc-code>

<doc-code>

```html
<cds-icon status="user"></cds-icon>
```

</doc-code>

### React (TypeScript)

<doc-code>

```tsx
import React from 'react';
import { CdsIcon } from '@cds/react/button';
import { ClarityIcons, userIcon, userIconName } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);

export function() {

  return (
    <CdsIcon shape="{userIconName}" />
  )
}
```

</doc-code>

### Vue

[See JavaScript](#javascript)

### Preact

[See JavaScript](#javascript)

### AngularJS

<doc-code>

```javascript
import angular from 'angular';
import '@cds/core/icon/register.js';

angular.module('app', []);
angular.element(document).ready(() => angular.bootstrap(document, ['app']));

angular.module('app').component('appRoot', {
  template: `
    <cds-icon shape="user"></cds-icon>
  `,
});
```

</doc-code>

## Usage

### Set icon size:

By default, the size for Clarity Icons is 16 by 16 pixels, and you have two ways of customizing this default value. One is through the use of the size attribute; the other is manually customizing the width and height values in your icon's style.

<doc-code>

```html
<!--A. SETTING THE SIZE THROUGH CDS-ICON SIZE ATTRIBUTE-->
<cds-icon shape="info-circle" size="12"></cds-icon>
<cds-icon shape="info-circle" size="16"></cds-icon>
<cds-icon shape="info-circle" size="36"></cds-icon>
<cds-icon shape="info-circle" size="48"></cds-icon>
<cds-icon shape="info-circle" size="64"></cds-icon>
<cds-icon shape="info-circle" size="72"></cds-icon>

<!--B. SETTING THE SIZE IN STYLE ATTRIBUTE-->
<cds-icon shape="info-circle" style="width: 12px; height: 12px;"></cds-icon>
<cds-icon shape="info-circle" style="width: 16px; height: 16px;"></cds-icon>
<cds-icon shape="info-circle" style="width: 36px; height: 36px;"></cds-icon>
<cds-icon shape="info-circle" style="width: 48px; height: 48px;"></cds-icon>
<cds-icon shape="info-circle" style="width: 64px; height: 64px;"></cds-icon>
<cds-icon shape="info-circle" style="width: 72px; height: 72px;"></cds-icon>
```

</doc-code>

_Both of the methods above will produce this result:_

### Rotate icons:

The default rotation for every shape in Clarity Icons is 0 degrees. With directional icons such as arrows and carets, 0 degrees means it points up. To rotate an icon to another direction, specify that either in the shape or dir attribute. Alternatively, you can set the rotation values in the icon's style attribute.

<doc-code>

```html
<!--A. SETTING THE ROTATION DIRECTION THROUGH CDS-ICON DIRECTION ATTRIBUTE-->
<cds-icon shape="caret" direction="up"></cds-icon>
<cds-icon shape="caret" direction="right"></ccds-icon>
<cds-icon shape="caret" direction="down"></cds-icon>
<cds-icon shape="caret" direction="left"></cds-icon>

<!--B. SETTING THE ROTATION DIRECTION IN STYLE ATTRIBUTE-->
<cds-icon shape="caret" style="transform: rotate(0deg);"></cds-icon>
<cds-icon shape="caret" style="transform: rotate(90deg);"></cds-icon>
<cds-icon shape="caret" style="transform: rotate(180deg);"></cds-icon>
<cds-icon shape="caret" style="transform: rotate(270deg);"></cds-icon>
```

</doc-code>

_All three methods above will produce this result:_

### Flip icons:

You can flip icons horizontally or vertically through the use of the flip attribute.

<doc-code>

```html
<cds-icon shape="floppy"></cds-icon>
<cds-icon shape="floppy" flip="horizontal"></cds-icon>
<cds-icon shape="floppy" flip="vertical"></cds-icon>
```

</doc-code>

### Predefined Clarity color classes for icons:

Clarity Icons also come with predefined colors using the `status` attribute.

<doc-code>

```html
<cds-icon shape="info-circle"></cds-icon>
<cds-icon shape="info-circle" status="highlight"></cds-icon>
<cds-icon shape="info-circle" status="danger"></cds-icon>
<cds-icon shape="info-circle" status="warning"></cds-icon>
<cds-icon shape="info-circle" status="success"></cds-icon>
<cds-icon shape="info-circle" status="info"></cds-icon>
```

</doc-code>

There is also `inverse` attribute, which is suitable for icons used on darker backgrounds.

<doc-code>

```html
<cds-icon shape="info-circle" inverse></cds-icon>
```

</doc-code>

### Display variant icons:

Clarity Icons come with variants of each icon where applicable. Variants may include:

- **Badged icons** have a small dot in the top right corner
- **Alerted icons** have a triangle in the top right corner
- **Solid icons** are filled in as opposed to the default outlined style
- **Combinations.** Such as: _solid + badged_ and _alerted badge_

Attribute name

What it does

`solid`

Replaces the default outlined style of the icon with a filled-in solid version for icons that have a solid version.

`badge`

Causes a small dot to appear in the top right corner of an icon that supports badging. By default, this dot is red.

`badge="triangle"`

Causes a small yellow triangle to appear in the top right corner of an icon that supports it.

`badge="success"`

Causes a small green dot to appear in the top right corner of an icon that supports badging.

`badge="error"`

Causes a small red dot to appear in the top right corner of an icon that supports badging.

`badge="info"`

Causes a small blue dot to appear in the top right corner of an icon that supports badging.

Displaying an icon variant only requires adding a CSS class to your `cds-icon` element. Applicable classes are listed below.

<doc-code>

```html
<cds-icon shape="user"></cds-icon>
<cds-icon shape="user" badge="triangle"></cds-icon>
<cds-icon shape="user" badge></cds-icon>
<cds-icon shape="user" solid></cds-icon>
<cds-icon shape="user" badge="triangle" solid></cds-icon>
<cds-icon shape="user" badge solid></cds-icon>
<cds-icon shape="user" badge="success" solid></cds-icon>
```

</doc-code>
