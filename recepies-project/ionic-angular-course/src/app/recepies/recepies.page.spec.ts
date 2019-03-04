import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesPage } from './recepies.page';

describe('RecepiesPage', () => {
  let component: RecepiesPage;
  let fixture: ComponentFixture<RecepiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
