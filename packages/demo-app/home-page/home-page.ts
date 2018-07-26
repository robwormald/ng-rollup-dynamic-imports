import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'home-page',
  template: 'home page!'
})
export class HomePage {}

@NgModule({
  declarations: [HomePage],
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePage }
    ])
  ]
})
export class HomePageModule {

}
