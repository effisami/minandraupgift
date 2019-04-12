import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResechildComponent } from './resechild.component';

describe('ResechildComponent', () => {
  let component: ResechildComponent;
  let fixture: ComponentFixture<ResechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
