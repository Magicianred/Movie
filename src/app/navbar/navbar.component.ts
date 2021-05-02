import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.name=this.userService.getName();
  }

}
