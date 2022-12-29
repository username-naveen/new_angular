import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    ) { }

  ngOnInit() {
    // var currentId = +this.activeRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(currentId);

    // this.activeRoute.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.server = data.server;        
      }
    )
    
  }

  onEdit() {
    this.route.navigate(['edit'], {relativeTo: this.activeRoute, queryParamsHandling: 'preserve'})
  }

}
