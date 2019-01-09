import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './shared-component.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SharedComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    SharedComponent,
  ]
})

export class SharedModule {
}
