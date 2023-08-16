import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LibModule } from './app/lib.module';


platformBrowserDynamic().bootstrapModule(LibModule)
  .catch(err => console.error(err));
