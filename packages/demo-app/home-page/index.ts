import {NgModuleFactory} from '@angular/core';
import {HomePageModule} from './home-page';
import {HomePageModuleNgFactory} from './home-page.ngfactory';

export default HomePageModuleNgFactory as NgModuleFactory<HomePageModule>
export * from './home-page';
