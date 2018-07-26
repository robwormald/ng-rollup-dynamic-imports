import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'list-page',
  template: 'list page!'
})
export class ListPage {}

@NgModule({
  declarations: [ListPage],
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ListPage }
    ])
  ]
})
export class ListPageModule {

}
