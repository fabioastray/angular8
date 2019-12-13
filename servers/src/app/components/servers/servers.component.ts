import { Component, OnInit } from '@angular/core';

import { Server } from '../../models/server';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit {

  servers: Array<Server> = [];
  noServersMessage = 'No servers found';

  constructor(private serversService: ServersService) {
    this.serversService.addEvent.subscribe(this.onServerAddEvent);
  }

  ngOnInit() {
    this.servers = this.serversService.getAll();
  }

  onServerAddEvent(status: string) {
    alert(status);
  }

  getServersLengthColor() {
    return this.servers.length >= 3 ? 'red' : '';
  }
}
