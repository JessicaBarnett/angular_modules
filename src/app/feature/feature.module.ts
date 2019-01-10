import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature-component.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    FeatureComponent,
  ],
  exports: [
    FeatureComponent,
  ]
})

export class FeatureModule {
}
