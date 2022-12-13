import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users!: any;
  displayedColumns = ["userid", "username", "password"];

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(response => {this.users = response})
  }
}
