import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundofficerComponent } from './backgroundofficer.component';

describe('BackgroundofficerComponent', () => {
  let component: BackgroundofficerComponent;
  let fixture: ComponentFixture<BackgroundofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
