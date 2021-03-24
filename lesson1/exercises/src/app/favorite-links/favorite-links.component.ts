import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './favorite-links.component.html',
  styleUrls: ['./favorite-links.component.css']
})
export class FavoriteLinksComponent implements OnInit {
  favLinks = ['https://bigsandwich.co/','https://dunkeyscastle.com/'];
  constructor() { }

  ngOnInit() {
  }

}
