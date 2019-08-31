import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SubitemComponent } from './components/subitem/subitem.component';
import { SubitemService } from './services/subitem/subitem.service';
import { DialogComponent } from './components/subitem/subitem.component';
import { DialogEditarSubitem } from './components/subitem/subitem.component';
import { DialogDeletarSubitem } from './components/subitem/subitem.component';
import { FormsModule }   from '@angular/forms';
import { ItemComponent, DialogCadastrarItem, DialogEditarItem, DialogDeletarItem } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    SubitemComponent,
    DialogComponent,
    DialogEditarSubitem,
    DialogDeletarSubitem,
    ItemComponent,
    DialogCadastrarItem,
    DialogEditarItem,
    DialogDeletarItem,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [SubitemService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent,
    DialogEditarSubitem,
    DialogDeletarSubitem,
    DialogCadastrarItem,
    DialogEditarItem,
    DialogDeletarItem,
  ]
})
export class AppModule { }
