import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraffikljusComponent } from './traffikljus.component';

describe('TraffikljusComponent', () => {
  let component: TraffikljusComponent;
  let fixture: ComponentFixture<TraffikljusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraffikljusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraffikljusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
