import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-message',
  templateUrl: './mobile-message.component.html',
  styleUrls: ['./mobile-message.component.scss']
})
export class MobileMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  openResume() {
    window.open('https://drive.google.com/file/d/1r4LA0IbYH_Ti2RAvxG8lLmCjCm5QX-W8/view?usp=sharing')
  }

  navigateToLinkedIn() {
    window.open('https://www.linkedin.com/in/domenic-o-neill-b15203167/')
  }

  navigateToGithub() {
    window.open('https://github.com/DEmmett18')
  }

}
