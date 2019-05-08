import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateDialogComponent } from './events-create-dialog.component';

describe('EventsCreateDialogComponent', () => {
  let component: EventsCreateDialogComponent;
  let fixture: ComponentFixture<EventsCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
