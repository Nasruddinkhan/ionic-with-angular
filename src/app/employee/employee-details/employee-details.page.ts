import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {
  loadedEmployee: Employee;
  constructor(private activeRoute: ActivatedRoute,
              private empService: EmployeeService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('empID')) {
       return;
     }
     const empID = paramMap.get('empID');
     this.loadedEmployee = this.empService.getEmployee(empID);
    });
  }
  onDeleteEmployee() {
    this.alertCtrl.create({
      header: 'Are you sure ?', 
      message: 'Do you really want to delete the employee ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.empService.deleteEmployee(this.loadedEmployee.empID);
          this.router.navigate(['/employee']);
        }
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
