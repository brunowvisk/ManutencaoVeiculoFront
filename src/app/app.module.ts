import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home/home.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatCardModule} from '@angular/material/card';
import { ModalCarComponent } from './components/modal-car/modal-car.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { APIService} from './services/apiservice.service';
import { ModalDriverComponent } from './components/modal-driver/modal-driver.component';
import { ModalMaintenanceComponent } from './components/modal-maintenance/modal-maintenance.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ModalCarComponent,
    ModalDriverComponent,
    ModalMaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule

  ],
  exports: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent

  ],
  providers: [HttpClientModule, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
