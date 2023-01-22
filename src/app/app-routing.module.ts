import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {FacturationComponent} from "./facturation/facturation.component";

const routes: Routes = [
  {
    path:"client",component:ClientComponent
  },
  {
    path:"facturation/:id",component: FacturationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
