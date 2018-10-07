import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyOnUserActionsComponent } from './spy-on-user-actions.component';

describe('SpyOnUserActionsComponent', () => {
  let component: SpyOnUserActionsComponent;
  let fixture: ComponentFixture<SpyOnUserActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyOnUserActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyOnUserActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
