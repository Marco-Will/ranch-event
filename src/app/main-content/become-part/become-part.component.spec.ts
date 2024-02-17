import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomePartComponent } from './become-part.component';

describe('BecomePartComponent', () => {
  let component: BecomePartComponent;
  let fixture: ComponentFixture<BecomePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomePartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
