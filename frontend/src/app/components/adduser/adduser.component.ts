import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MessagingService} from "../../services/messaging.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  add_user_form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  errorMessage!: string;
  successMessage!: string;
  message!: string;

  constructor(private http: HttpClient,
              private messageService: MessagingService) {
    this.messageService.message$.subscribe(
      message => {
        this.message = message;
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.add_user_form.valid) {
      const data = this.add_user_form.value;

      this.http.post('http://localhost:8080/api/adduser', data).subscribe(
        res => {
            this.successMessage = "Ai reusit!!!";
            this.message = this.successMessage;
          },
          err => {
            this.errorMessage = err.message;
            this.message = this.errorMessage;
          }
      )
    }
  }
}
