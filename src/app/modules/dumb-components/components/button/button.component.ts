import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
    public buttonClass: string = 'button-small';

    @Input() size: 'small' | 'large' = 'small';

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.calculateSizeClasses();
    }


    private calculateSizeClasses() {
        switch (this.size) {
            case 'small':
                this.buttonClass = 'button-small';
                break;
            case 'large':
                this.buttonClass = 'button-large';
                break;
        }
    }

}
