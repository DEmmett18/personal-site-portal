import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'personal-site-portal';
  test = new Array(400);
  appLoading = true;
ngAfterViewInit() {
    setTimeout(() => {
        this.appLoading = false;
    }, 3000);
}
}
