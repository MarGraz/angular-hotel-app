import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  // Get from DI the reservation service
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    // The ngOnInit is executed after the service, where the reservations are retrieved from the browser memory
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string){
    // Call the service to delete a reservation
    this.reservationService.deleteReservation(id);
  }
}
