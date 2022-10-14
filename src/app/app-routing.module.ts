import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { PatovaGuard } from './patova.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"admin", component: AdminComponent},
  {path:"contacto", component: ContactoComponent, canActivate:[PatovaGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
