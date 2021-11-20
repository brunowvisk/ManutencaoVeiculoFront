import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { icondutoresmodel } from 'src/app/data/model/iveiculos-model/icondutores-model';
import { APIService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-modal-driver',
  templateUrl: './modal-driver.component.html',
  styleUrls: ['./modal-driver.component.css']
})
export class ModalDriverComponent implements OnInit {

  public drivers: Array<icondutoresmodel> = new Array();

  displayedColumns: string[] = ['id', 'marca', 'modelo', 'placa', 'cor', 'chassi', 
  'quilometragem', 'anoFabricacao', 'status'];
dataSource = new MatTableDataSource<icondutoresmodel>(this.drivers);
selection = new SelectionModel<icondutoresmodel>(true, []);

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
checkboxLabel(row?: icondutoresmodel): string {
if (!row) {
return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
}
return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
}


constructor(public dialog: MatDialog, private apiService: APIService) { }


openDialog() {
const dialogRef = this.dialog.open(ModalDriverComponent);


dialogRef.afterClosed().subscribe(result => {
console.log(`Dialog result: ${result}`);
});
}


  ngOnInit(): void {
  }

}
