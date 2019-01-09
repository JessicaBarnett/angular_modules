import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-component',
  template: '<h1>I am a Shared Component, imported by AppModule via SharedModule</h1>'
})

export class SharedComponent {
  constructor() {}
}
