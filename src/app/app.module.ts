import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { WarrantyEquipmentsComponent } from './components/warranty-equipments/warranty-equipments.component';
import { WarrantyEquipmentComponent } from './components/warranty-equipment/warranty-equipment.component';
import { AddWarrantyEquipmentComponent } from './components/add-warranty-equipment/add-warranty-equipment.component';
import { EditWarrantyEquipmentComponent } from './components/edit-warranty-equipment/edit-warranty-equipment.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: WarrantyEquipmentsComponent },
  { path: 'warranty-equipment/:id', component: WarrantyEquipmentComponent },
  { path: 'add-warranty-equipment/', component: AddWarrantyEquipmentComponent },
  { path: 'edit-warranty-equipment/:id', component: EditWarrantyEquipmentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WarrantyEquipmentsComponent,
    WarrantyEquipmentComponent,
    AddWarrantyEquipmentComponent,
    EditWarrantyEquipmentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
