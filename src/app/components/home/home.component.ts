import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/apiservice.service';

import { ModalCarComponent } from '../modal-car/modal-car.component';
import { ModalDriverComponent } from '../modal-driver/modal-driver.component';
import { ModalMaintenanceComponent } from '../modal-maintenance/modal-maintenance.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog, private apiService: APIService) { }

  openModalCar() {
    const dialogRef = this.dialog.open(ModalCarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openModalDriver() {
    const dialogRef = this.dialog.open(ModalDriverComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openModalMaintenance() {
    const dialogRef = this.dialog.open(ModalMaintenanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() { }

}
