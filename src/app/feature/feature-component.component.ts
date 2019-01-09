import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-component',
  template: `
    <h1>Hi!  I am a Feature Component, declared by FeatureModule.</h1>
    <p>I need Access to Shared Component from SharedModule</p>
    <app-shared-component></app-shared-component>
  `
})

export class FeatureComponent {
  constructor() {}
}
