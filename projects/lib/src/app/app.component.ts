import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template: `
    <dak-shell>
      <h1 slot="title">Library</h1>
      <p>Welcome to the library</p>
    </dak-shell>
  `,
  styles: [`
  :host {
    margin: 0;
    background-color: rgb(247, 247, 247);
  }
  `]
})
export class AppComponent {
  title = 'lib';
}
