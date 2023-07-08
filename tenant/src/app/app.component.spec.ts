import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have menu labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(5);
    expect(menuItems[0].textContent).toContain('申請管理');
    expect(menuItems[1].textContent).toContain('施設管理');
    expect(menuItems[2].textContent).toContain('団体管理');
    expect(menuItems[3].textContent).toContain('レポート');
    expect(menuItems[4].textContent).toContain('設定');
  });

  it('should have urls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(5);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual(
      '/reservation'
    );
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual(
      '/place'
    );
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual(
      '/group'
    );
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual(
      '/report'
    );
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual(
      '/setting'
    );
  });
});
