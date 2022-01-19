import { Component, HostListener, Input, OnInit } from '@angular/core';

export const NavBarHeight = 100;
export interface Section {
    description: string;
    href: string;
    active: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private previousWindowTop: number = 0;
    public showHideClass: string = '';
    public sizeClass: string = 'header-full';
    navBarHeight = NavBarHeight;

    @Input()
    sections: Section[] = [
        {
            description: 'About',
            href: '/#about',
            active: false
        },
        {
            description: 'Experience',
            href: '/#experience',
            active: false
        },
        {
            description: 'Contact',
            href: '/#contact',
            active: false
        }
    ]
    @HostListener('document:scroll', ['$event'])
    onScroll(event: any) {
        
    }
  constructor() { }

  ngOnInit(): void {
      let bodies = document.getElementsByTagName('body');
      if (bodies && bodies.length > 0) {
          let body = bodies.item(0);
          body?.addEventListener('scroll', (event) =>{
            let scrollingUp = document.body.scrollTop < this.previousWindowTop;
            if (scrollingUp) {
                this.showHideClass = 'showing';
            } if (!scrollingUp && document.body.scrollTop > 100) {
                this.showHideClass = 'hiding';
            }
            // }
            if (document.body.scrollTop < 30 && this.sizeClass === 'header-compact') {
                this.sizeClass = 'header-full';
            } else if (document.body.scrollTop > 100 && this.sizeClass === 'header-full') {
                this.sizeClass= "header-compact"
            }
            this.previousWindowTop = document.body.scrollTop;
          })
      }

  }

}
