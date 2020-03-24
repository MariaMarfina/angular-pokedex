import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStateMessageComponent } from './page-state-message.component';

describe('PageStateMessageComponent', () => {
  let component: PageStateMessageComponent;
  let fixture: ComponentFixture<PageStateMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStateMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStateMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
