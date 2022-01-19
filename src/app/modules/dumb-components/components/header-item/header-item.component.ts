import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

    @Input() public item: { index: number; description: string; } = { index: 0, description: 'Test' };

  constructor() { }

  ngOnInit(): void {
  }

}
