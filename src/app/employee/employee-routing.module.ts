import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePage } from './employee.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage
  },
  {
    path: 'employee-details',
    loadChildren: () => import('./employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}
