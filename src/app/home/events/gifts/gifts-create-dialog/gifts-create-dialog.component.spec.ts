import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsCreateDialogComponent } from './gifts-create-dialog.component';

describe('GiftsCreateDialogComponent', () => {
  let component: GiftsCreateDialogComponent;
  let fixture: ComponentFixture<GiftsCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
