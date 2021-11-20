import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { ireturnDefaultVeiculo } from '../data/model/ireturnDefaultVeiculo';
import { iveiculosmodel } from '../data/model/iveiculos-model/iveiculos-model';

@Injectable({
  providedIn: 'root'
})

export class APIService{
  
  veiculosUrl = "http://localhost:5001/api/Veiculo"

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<ireturnDefaultVeiculo> {
    return this.http.get<ireturnDefaultVeiculo>(`${API_PATH}api/veiculo`);
      }


}