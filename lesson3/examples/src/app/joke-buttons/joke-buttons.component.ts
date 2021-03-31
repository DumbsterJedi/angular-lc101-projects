import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-buttons',
  templateUrl: './joke-buttons.component.html',
  styleUrls: ['./joke-buttons.component.css']
})
export class JokeButtonsComponent implements OnInit {
  clickable: boolean = false;
  move: string = '500px'
  loopNum: number = 0
  
  constructor() { }

  ngOnInit() {
  }

  moveBtn(i){
    
    if(i===0){
      this.move = '10px'
    };
    if(i===1){
      this.move = '800px'
    };
    if(i===2){
      this.move = '300px'
    };
    this.loopNum++
    if(i===3){
      this.move = '600px';
      this.loopNum = 0
    };
  }
}
