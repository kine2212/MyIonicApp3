import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RECTIFICATIONPage } from './rectification.page';

describe('RECTIFICATIONPage', () => {
  let component: RECTIFICATIONPage;
  let fixture: ComponentFixture<RECTIFICATIONPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RECTIFICATIONPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RECTIFICATIONPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
