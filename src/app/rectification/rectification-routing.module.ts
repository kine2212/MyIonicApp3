import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RECTIFICATIONPage } from './rectification.page';

const routes: Routes = [
  {
    path: '',
    component: RECTIFICATIONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RECTIFICATIONPageRoutingModule {}
