import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SphereFooteComponent } from './sphere-foote.component';

describe('SphereFooteComponent', () => {
  let component: SphereFooteComponent;
  let fixture: ComponentFixture<SphereFooteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SphereFooteComponent]
    });
    fixture = TestBed.createComponent(SphereFooteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
