import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SincronoComponent } from './sincrono.component';

describe('SincronoComponent', () => {
  let component: SincronoComponent;
  let fixture: ComponentFixture<SincronoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SincronoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
