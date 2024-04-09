import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPassewordPageRoutingModule } from './reset-passeword-routing.module';

import { ResetPassewordPage } from './reset-passeword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPassewordPageRoutingModule
  ],
  declarations: [ResetPassewordPage]
})
export class ResetPassewordPageModule {}
