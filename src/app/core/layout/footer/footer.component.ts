import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsStoreService } from '../../../notifications/notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public notes$: Observable<any[]>;

  constructor(private notificationsStore: NotificationsStoreService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.notes$ = this.notificationsStore.select$();
  }
}
