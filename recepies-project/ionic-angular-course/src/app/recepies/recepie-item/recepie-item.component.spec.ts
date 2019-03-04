import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemPage } from './recepie-item.page';

describe('RecepieItemPage', () => {
  let component: RecepieItemPage;
  let fixture: ComponentFixture<RecepieItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
