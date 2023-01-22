import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ClientService} from "../services/client.service";
import {Client} from "../models/client.model";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  //client! : Observable<Array<Client>>;
  client! : Array<Client>;
  tab : any;
  searchFormGroup! : FormGroup;
  erreurMessage! : string ;

  constructor(private clientservice:ClientService,private fb :FormBuilder) {
  }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      Keyword : this.fb.control("null")
    })

    this.clientservice.getClient().subscribe({
      next:(data)=>{
        this.tab=data;
        console.log(this.tab["_embedded"]["clients"]);
        this.client=this.tab["_embedded"]["clients"];
      },error:(err)=>{
        this.erreurMessage=err.message;
        console.log(err);
      }
    })


  }

  handleSearchCustomers() {

  }
}
