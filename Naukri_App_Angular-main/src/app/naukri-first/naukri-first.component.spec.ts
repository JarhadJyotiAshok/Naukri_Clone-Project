import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriFirstComponent } from './naukri-first.component';

describe('NaukriFirstComponent', () => {
  let component: NaukriFirstComponent;
  let fixture: ComponentFixture<NaukriFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaukriFirstComponent]
    });
    fixture = TestBed.createComponent(NaukriFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
