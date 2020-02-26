import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtycheckComponent } from './dirtycheck.component';

describe('DirtycheckComponent', () => {
  let component: DirtycheckComponent;
  let fixture: ComponentFixture<DirtycheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtycheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
