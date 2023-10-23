import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestitoStoragePage } from './testito-storage.page';

const routes: Routes = [
  {
    path: '',
    component: TestitoStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestitoStoragePageRoutingModule {}
