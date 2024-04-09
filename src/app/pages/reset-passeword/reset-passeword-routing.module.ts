import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPassewordPage } from './reset-passeword.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPassewordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPassewordPageRoutingModule {}
