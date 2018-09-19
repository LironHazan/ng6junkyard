import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFiltersComponent } from './users-filters.component';

describe('UsersFiltersComponent', () => {
  let component: UsersFiltersComponent;
  let fixture: ComponentFixture<UsersFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
