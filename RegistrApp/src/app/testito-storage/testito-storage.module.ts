import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestitoStoragePageRoutingModule } from './testito-storage-routing.module';

import { TestitoStoragePage } from './testito-storage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestitoStoragePageRoutingModule
  ],
  declarations: [TestitoStoragePage]
})
export class TestitoStoragePageModule {}
