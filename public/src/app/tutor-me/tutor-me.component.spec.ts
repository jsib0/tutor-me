import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMeComponent } from './tutor-me.component';

describe('TutorMeComponent', () => {
  let component: TutorMeComponent;
  let fixture: ComponentFixture<TutorMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
