import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindromComponent } from './mindrom.component';

describe('MindromComponent', () => {
  let component: MindromComponent;
  let fixture: ComponentFixture<MindromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
