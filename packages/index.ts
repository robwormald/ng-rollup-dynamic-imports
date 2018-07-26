import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import DemoApp from './demo-app';

enableProdMode();
platformBrowser().bootstrapModuleFactory(DemoApp, {ngZone: 'noop'})
