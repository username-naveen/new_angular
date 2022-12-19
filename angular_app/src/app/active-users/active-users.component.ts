import { Component } from '@angular/core';
import { UsersService } from '../services/usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private UsersService: UsersService) {}

  ngOnInit() {
    this.users = this.UsersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.UsersService.onSetToInactive(id);
  }
}
