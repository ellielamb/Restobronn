import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegSuccessPage } from './reg-success.page';

describe('RegSuccessPage', () => {
  let component: RegSuccessPage;
  let fixture: ComponentFixture<RegSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
