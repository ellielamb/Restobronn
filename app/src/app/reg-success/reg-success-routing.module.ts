import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegSuccessPage } from './reg-success.page';

const routes: Routes = [
  {
    path: '',
    component: RegSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegSuccessPageRoutingModule {}
