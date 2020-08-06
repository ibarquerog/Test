import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasNewComponent } from './obras-new.component';

describe('ObrasNewComponent', () => {
  let component: ObrasNewComponent;
  let fixture: ComponentFixture<ObrasNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
