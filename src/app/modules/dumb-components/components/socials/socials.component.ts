import { Component, OnInit } from '@angular/core';
import { Social } from '../social-icon/social-icon.component';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

    socials: Social[] = [
        {
            name: 'linkedin',
            ref: 'https://www.linkedin.com/in/domenic-o-neill-b15203167/'
        },
        {
            name: 'github',
            ref: 'https://github.com/DEmmett18'
        }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
