---
title: Overview
toc: true
---

## Core Icon Overview

The Clarity Icons presents pixel-perfect, scalable SVG-based icons. The icon system gives you complete control over icon color, orientation, and size. Additionally, you can access and customize any SVG graphic elements inside the icon through standard CSS.

## Usage

To use the icon component import the component in your JavaScript.
To see all available icons check out the [Collections Demo](/foundation/icons).

### JavaScript

```javascript
import '@clr/core/icon/register.js';
import { ClarityIcons, userIcon } from '@clr/core/icon';

ClarityIcons.addIcons(userIcon);
```

```html
<cds-icon shape="user"></cds-icon>
```

### Angular

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import '@clr/core/icon/register.js';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

```html
<cds-icon status="user"></cds-icon>
```

### React (TypeScript)

```tsx
import React from 'react';
import { CdsIcon } from '@clr/react/button';
import { ClarityIcons, userIcon, userIconName } from '@clr/core/icon';

ClarityIcons.addIcons(userIcon);

export function() {

  return (
    <CdsIcon shape="{userIconName}" />
  )
}
```

### Vue

[See JavaScript](#javascript)

### Preact

[See JavaScript](#javascript)

### AngularJS

```javascript
import angular from 'angular';
import '@clr/core/icon/register.js';

angular.module('app', []);
angular.element(document).ready(() => angular.bootstrap(document, ['app']));

angular.module('app').component('appRoot', {
  template: `
    <cds-icon shape="user"></cds-icon>
  `,
});
```
