import { Component, Input, OnInit } from '@angular/core';
export interface Social {
    name: 'linkedin' | 'github',
    ref: string;
}
@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {

    @Input() public social: Social | undefined;
    
  constructor() { }

  ngOnInit(): void {
  }

}
