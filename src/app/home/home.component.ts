import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public icons = [faPlay, faPause, faStop];
  public countDownConfig = {
    leftTime: 1500,
    demand: true,
    format: 'mm:ss'
  };

  public action: string;

  @ViewChild('cd', {static: false})
  private countdown: CountdownComponent;

  @ViewChild('audioOption', {static: false}) private audioPlayerRef: ElementRef;


  constructor() {
  }

  ngOnInit(): void {
    this.action = '';
  }

  handleEvent(event) {
    console.log(`Evento => ${JSON.stringify(event)}`);
    this.action = event.action;

    if (this.action === 'restart') {
      this.countdown.begin();
    }

    if (this.action === 'done') {
      this.done();
      this.action = 'stop';
    }

  }

  done() {
    this.audioPlayerRef.nativeElement.play();
  }



}
