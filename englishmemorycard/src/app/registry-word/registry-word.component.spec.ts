import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryWordComponent } from './registry-word.component';

describe('RegistryWordComponent', () => {
  let component: RegistryWordComponent;
  let fixture: ComponentFixture<RegistryWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
