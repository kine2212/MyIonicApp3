import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RECTIFICATIONPageRoutingModule } from './rectification-routing.module';

import { RECTIFICATIONPage } from './rectification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RECTIFICATIONPageRoutingModule
  ],
  declarations: [RECTIFICATIONPage]
})
export class RECTIFICATIONPageModule {}
