import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeDetailsPage } from './employee-details.page';

describe('EmployeeDetailsPage', () => {
  let component: EmployeeDetailsPage;
  let fixture: ComponentFixture<EmployeeDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
