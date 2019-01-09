import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature-component.component';
// import { SharedComponent } from '../shared/shared-component.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FeatureComponent,
    // SharedComponent,
  ],
  exports: [
    FeatureComponent
  ]
})

export class FeatureModule {
}
