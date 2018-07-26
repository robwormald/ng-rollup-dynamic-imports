import {NgModuleFactory} from '@angular/core';

import {HomePageModuleNgFactory} from './home-page.ngfactory';
import { HomePageModule } from './home-page';

export default HomePageModuleNgFactory as NgModuleFactory<HomePageModule>
export * from './home-page';
