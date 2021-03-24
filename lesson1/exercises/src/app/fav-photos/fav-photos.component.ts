import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://d3qdvvkm3r2z1i.cloudfront.net/media/catalog/product/cache/1/thumbnail/85e4522595efc69f496374d01ef2bf13/r/u/rumham_thumb.png';
  image2 = 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/bbee802696f464173f94f317008863c93feccf884d2645b09aef48cfe3a91520_1.jpg';
  image3 = 'https://i.imgur.com/SVfXuNd.jpg';

  constructor() { }

  ngOnInit() {
  }

}