import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProblemaComponent } from './tabla-problema.component';

describe('TablaProblemaComponent', () => {
  let component: TablaProblemaComponent;
  let fixture: ComponentFixture<TablaProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProblemaComponent ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
