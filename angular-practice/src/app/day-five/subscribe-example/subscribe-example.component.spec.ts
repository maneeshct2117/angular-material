import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeExampleComponent } from './subscribe-example.component';

describe('SubscribeExampleComponent', () => {
  let component: SubscribeExampleComponent;
  let fixture: ComponentFixture<SubscribeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
