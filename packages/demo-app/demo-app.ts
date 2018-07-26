import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, LoadChildrenCallback} from '@angular/router';

export const loadHomepage = () => import('./home-page').then(mod => mod.default);
export const loadListpage = () => import('./list-page').then(mod => mod.default);


@Component({
  selector: 'demo-app',
  template: `<router-outlet></router-outlet>`
})
export class DemoApp {}

@NgModule({
  declarations: [DemoApp],
  bootstrap: [DemoApp],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', loadChildren: loadHomepage as any },
      { path: 'list', loadChildren: loadListpage as any },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ]
})
export class DemoAppModule {

}
