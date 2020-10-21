import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteUserComponent } from './cliente-user.component';

describe('ClienteUserComponent', () => {
  let component: ClienteUserComponent;
  let fixture: ComponentFixture<ClienteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
