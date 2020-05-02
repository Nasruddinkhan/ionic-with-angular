import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    children: [
      {
        path: '',
        loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
      },
      {
        path: ':empID',
        loadChildren: () => import('./employee/employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
