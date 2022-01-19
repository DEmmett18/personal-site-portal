import { Component, HostListener, Input, OnInit } from '@angular/core';

export const NavBarHeight = 100;
export interface Section {
    description: string;
    href: string;
    id: string;
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
            id: 'about-me-section',
            active: false
        },
        {
            description: 'Experience',
            href: '/#experience',
            id: 'work-experience-section',
            active: false
        },
        {
            description: 'Contact',
            href: '/#contact',
            id: 'contact-me-section',
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
            let scrollingUp = document.body.scrollTop < this.previousWindowTop; // todo: refactor below logic to make it more intuitive and easy to read
            if (scrollingUp) {
                this.showHideClass = 'showing';
            } if (!scrollingUp && document.body.scrollTop > 100) {
                this.showHideClass = 'hiding';
            }
            if (document.body.scrollTop < 30 && this.sizeClass === 'header-compact') {
                this.sizeClass = 'header-full';
            } else if (document.body.scrollTop > 100 && this.sizeClass === 'header-full') {
                this.sizeClass= "header-compact"
            }
            this.previousWindowTop = document.body.scrollTop;
          })
      }

      
    }
    focusSection(section: any) {
        let element = document.getElementById(section.id);
        console.log('FOCUS ELEMENT IS', element);
        console.log(JSON.stringify(element));
    }

}
