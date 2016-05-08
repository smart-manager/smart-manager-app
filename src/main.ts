import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PmsComponent, SmartManagerAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PmsComponent);
