import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-loader',
  templateUrl: './logo-loader.component.html',
  styleUrls: ['./logo-loader.component.scss']
})
export class LogoLoaderComponent implements OnInit, OnDestroy {
    loadingMessage = 'Loading...';
    myInterval: any;

  constructor() { }

  ngOnInit(): void {
      setTimeout(() => {
          this.myInterval = setInterval(() => {
              if (this.loadingMessage.length === 10) {
                  this.loadingMessage = 'Loading.';
              } else {
                  this.loadingMessage += '.';
              }
          }, 667);
      }, 0)
  }
  ngOnDestroy() {
      try {
          if (this.myInterval !== null) {
              clearInterval(this.myInterval);
          }
      } catch(e) {
          console.error('Got an error while trying to clear the interval');
          console.error('Interval = ' ,this.myInterval)
          console.error('Error received is', e);
      }
  }

}
