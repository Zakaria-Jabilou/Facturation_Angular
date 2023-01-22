import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private route: ActivatedRoute,private http:HttpClient) { }

  public getFacture():Observable<any>{
  let x =this.route.snapshot.params["id"];
  console.log(this.route.snapshot.params["id"]);
  return this.http.get("http://localhost:8080/FACTURE-SERVICE/factures/client/"+x);
}
}
