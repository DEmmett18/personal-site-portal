import { AfterViewInit, Component, HostListener } from '@angular/core';

const minSupportedWidth = 1139;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  supportedScreenWidth: boolean = false;
  title = 'personal-site-portal';
  test = new Array(400);
  appLoading = true;
  @HostListener('window:resize', ['$event'])
  onScreenSizeChange(event: any) {
      this.supportedScreenWidth = event.target.innerWidth >= minSupportedWidth; 
  }
  ngAfterViewInit() {
    this.supportedScreenWidth = window.innerWidth >= minSupportedWidth;
    setTimeout(() => {
        this.appLoading = false;
    }, 2100);
  }
}
