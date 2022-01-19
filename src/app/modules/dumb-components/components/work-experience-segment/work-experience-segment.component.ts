import { Component, Input, OnInit } from '@angular/core';

export interface Job {
    title: string;
    company: string;
    currentlyEmployed: boolean;
    startDate: Date;
    endDate: Date | null;
    bulletPoints: string[];
}

@Component({
    selector: 'app-work-experience-segment',
    templateUrl: './work-experience-segment.component.html',
    styleUrls: ['./work-experience-segment.component.scss']
})
export class WorkExperienceSegmentComponent implements OnInit {

    @Input() job: Job = {
        title: 'Senior Full Stack Engineer',
        company: 'Hub Group',
        currentlyEmployed: true,
        startDate: new Date(),
        endDate: null,
        bulletPoints: [
            'Did this',
            'And that',
            'And a lot more'
        ]
    };
    constructor() { }

    ngOnInit(): void {
    }

}
