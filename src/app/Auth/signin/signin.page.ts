import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(public _data: UserService) { }

  ngOnInit() {
  }


  
  login(UserData : NgForm){
    this._data.login(UserData.value.email,UserData.value.password);
 }

}
