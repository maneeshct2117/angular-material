import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeExampleTwoComponent } from './subscribe-example-two.component';

describe('SubscribeExampleTwoComponent', () => {
  let component: SubscribeExampleTwoComponent;
  let fixture: ComponentFixture<SubscribeExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeExampleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
