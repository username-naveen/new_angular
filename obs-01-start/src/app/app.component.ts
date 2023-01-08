import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isActivated: boolean = false;
  activateEvent: Subscription;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.activateEvent = this.userService.userActivated.subscribe(
      (data: boolean) => {
        this.isActivated = data
      }
    )
  }

  ngOnDestroy(): void {
    this.activateEvent.unsubscribe()
  }
}
