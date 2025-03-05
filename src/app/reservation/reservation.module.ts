import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ReservationFormComponent, ReservationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Used to perform validations
    RouterModule,
    HomeModule // Used to show navigation menu in all the components
  ],
})
export class ReservationModule {}
