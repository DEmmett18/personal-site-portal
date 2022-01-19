import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Job, WorkExperienceSegmentComponent } from '../work-experience-segment/work-experience-segment.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
    @Input() jobs: Job[] = [
        {
            title: 'Senior Full Stack Engineer',
            company: 'Hub Group',
            currentlyEmployed: true,
            startDate: new Date(),
            endDate: new Date(),
            bulletPoints: [
                'Did this',
                'And that',
                'And a lot more'
            ]
        },
        {
            title: 'Senior Full Stack Engineer',
            company: 'Hub Group',
            currentlyEmployed: true,
            startDate: new Date(),
            endDate: new Date(),
            bulletPoints: [
                'Did this',
                'And that',
                'And a lot more'
            ]
        },
        {
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
        },
        {
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
        },
        {
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
        },
    ];
    activeJobIndex = 0;
    workExperienceTabHeight = 42;
  constructor() { }

  ngOnInit(): void {
  }
  public updateActiveJob(index: number) {
      this.activeJobIndex = index;
      let elem = document.getElementById('job-highlighter');
        elem?.style.setProperty('--selected-work-experience-index', `${this.activeJobIndex}`);
    //   document.documentElement.style.setProperty('--selected-work-experience-index', `${this.activeJobIndex + 1}`);
      return;
  }
//   public getTransformStyle(): string {
//       return `transform: translateY(calc(${ this.activeJobIndex } * ${ this.workExperienceTabHeight }px))`;
//   }
}
