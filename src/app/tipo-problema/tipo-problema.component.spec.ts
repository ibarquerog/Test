import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProblemaComponent } from './tipo-problema.component';

describe('TipoProblemaComponent', () => {
  let component: TipoProblemaComponent;
  let fixture: ComponentFixture<TipoProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
