import { Component} from '@angular/core';
import { UsersService } from '../services/usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
    this.users = this.UsersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.UsersService.onSetToActive(id);
  }
}
