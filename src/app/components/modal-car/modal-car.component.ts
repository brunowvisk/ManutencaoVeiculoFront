import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/apiservice.service';
import { iveiculosmodel } from 'src/app/data/model/iveiculos-model/iveiculos-model';
import { ireturnDefaultVeiculo } from 'src/app/data/model/ireturnDefaultVeiculo';

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.css']
})
export class ModalCarComponent implements OnInit {
  
  public veiculos: Array<iveiculosmodel> = new Array();

  displayedColumns: string[] = ['id', 'marca', 'modelo', 'placa', 'cor', 'chassi', 
                                'quilometragem', 'anoFabricacao', 'status'];
  dataSource = new MatTableDataSource<iveiculosmodel>(this.veiculos);
  selection = new SelectionModel<iveiculosmodel>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: iveiculosmodel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }


  constructor(public dialog: MatDialog, private apiService: APIService) { }
 

  openDialog() {
    const dialogRef = this.dialog.open(ModalCarComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {

    this.getCars();

    };


  getCars() {
    this.apiService.getAllCars().subscribe((dados: ireturnDefaultVeiculo) => {
      this.veiculos = dados.dado;
      console.log(dados);
      console.log(this.veiculos);
      this.dataSource = new MatTableDataSource<iveiculosmodel>(this.veiculos);
    })
  }

}


