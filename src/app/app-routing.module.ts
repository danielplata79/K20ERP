import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    //{ path: "dashboard", component: dashb }.
    { path: 'dashboard', loadChildren: () => import('./shared/components/dashboard/dashboard.module').then(x => x.DashboardModule) },  // Lazy Load
    { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
