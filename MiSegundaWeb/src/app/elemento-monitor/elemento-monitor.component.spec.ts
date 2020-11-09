import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoMonitorComponent } from './elemento-monitor.component';

describe('ElementoMonitorComponent', () => {
  let component: ElementoMonitorComponent;
  let fixture: ComponentFixture<ElementoMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
