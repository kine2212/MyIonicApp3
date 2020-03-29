import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HOMEPage } from './home.page';

describe('HOMEPage', () => {
  let component: HOMEPage;
  let fixture: ComponentFixture<HOMEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HOMEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HOMEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
