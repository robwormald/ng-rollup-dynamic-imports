import {NgModuleFactory} from '@angular/core';

import {ListPageModule} from './list-page';
import {ListPageModuleNgFactory} from './list-page.ngfactory';

export default ListPageModuleNgFactory as NgModuleFactory<ListPageModule>;
export * from './list-page';
