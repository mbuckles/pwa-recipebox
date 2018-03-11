import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemService } from './services/items.service';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
