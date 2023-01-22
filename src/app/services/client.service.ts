import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {}
  //public getClient():Observable<Array<Client>>{
  public getClient():Observable<any>{
    return this.http.get("http://localhost:8080/CLIENT-SERVICE/clients");
    //return this.http.get<Array<Client>>("http://localhost:8080/CLIENT-SERVICE/clients");
  }
}
