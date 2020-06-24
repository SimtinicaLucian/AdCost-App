import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenitComponent } from './venit.component';

describe('VenitComponent', () => {
  let component: VenitComponent;
  let fixture: ComponentFixture<VenitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
