import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen3Page } from './screen3.page';

describe('Screen3Page', () => {
  let component: Screen3Page;
  let fixture: ComponentFixture<Screen3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
