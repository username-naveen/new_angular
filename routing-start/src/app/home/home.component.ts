import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private routes: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    this.routes.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'})
  }

  onLogIn() {
    this.authService.logIn();
  }
  
  onLogOut() {
    this.authService.logOut();
  }
}
