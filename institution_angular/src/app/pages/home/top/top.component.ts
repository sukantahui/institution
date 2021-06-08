import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {TopAnimation} from './top.animation';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [TopAnimation]
})
export class TopComponent implements OnInit {
  arc = 'false';
  constructor() {

  }

  ngOnInit(): void {

  }
  toggleBounce(){
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }

}
