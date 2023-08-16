import { Component } from '@angular/core';

@Component({
  selector: 'dak-shell',
  template: `
    <header>
      <ng-content select="[slot='title']"/>
    </header>
    <main>
      <ng-content/>
    </main>
  `,
  styles: [`
    header {
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        height: 46px;
        background-color: rgb(0, 83, 159);
    }
    ::ng-deep [slot=title] {
        margin: 0;
        padding-left: 10px;
        font-weight: 500;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.87);
    }
    main {
        margin: 82px 80px;
    }
  `]
})
export class ShellComponent {

}
