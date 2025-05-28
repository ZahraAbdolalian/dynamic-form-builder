import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledSettingsComponent } from './filed-settings.component';

describe('FiledSettingsComponent', () => {
  let component: FiledSettingsComponent;
  let fixture: ComponentFixture<FiledSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiledSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiledSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
