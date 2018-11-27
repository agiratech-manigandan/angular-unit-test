import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLogin = true;
  constructor() { }

  ngOnInit() {
    this.user = {name: 'mani'} ;
  }

}
