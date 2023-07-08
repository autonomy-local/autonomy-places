import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: '申請管理', url: '/reservation', icon: 'calendar' },
    { title: '施設管理', url: '/place', icon: 'business' },
    { title: '団体管理', url: '/group', icon: 'people' },
    { title: 'レポート', url: '/report', icon: 'document' },
    { title: '設定', url: '/setting', icon: 'settings' },
  ];
  constructor() {}
}
