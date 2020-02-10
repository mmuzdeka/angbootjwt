import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../token.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage) { }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['login']);
  }

}
