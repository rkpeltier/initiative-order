import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInitOrderComponent } from './new-init-order/new-init-order.component';

const routes: Routes = [
  {path: 'new-init', component: NewInitOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
