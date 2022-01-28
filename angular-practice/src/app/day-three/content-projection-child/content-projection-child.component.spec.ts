import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionChild } from './content-projection-child.ts.component';

describe('ContentProjectionChild.TsComponent', () => {
  let component: ContentProjectionChild;
  let fixture: ComponentFixture<ContentProjectionChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionChild ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
