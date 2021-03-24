import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';
  name:string = 'Lucas Reehle';
  itemList: string[] = ['Tape Leg','Burnt rubber','Sblounshcked','Milksteak'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
 }
}
