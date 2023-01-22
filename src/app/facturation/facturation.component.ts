import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit{
  constructor(private route: ActivatedRoute,private http:HttpClient) {}
  url:any;
  facture:any;
  erreurMessage! : object;

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    this.url=this.route.snapshot.params["id"];
    this.http.get("http://localhost:8080/FACTURE-SERVICE/factures/client/"+this.url).subscribe({
      next:(data)=>{
      console.log(data);
      this.facture=data;
      console.log(this.facture["dateFature"]);
      },error:(err)=>{
        this.erreurMessage=err;
        console.log(err);
      }
    })
  }



}
