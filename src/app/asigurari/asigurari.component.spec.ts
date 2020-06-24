import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigurariComponent } from './asigurari.component';

describe('AsigurariComponent', () => {
  let component: AsigurariComponent;
  let fixture: ComponentFixture<AsigurariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigurariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigurariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
