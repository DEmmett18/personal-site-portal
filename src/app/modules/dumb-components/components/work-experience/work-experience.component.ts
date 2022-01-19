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
            startDate: new Date('2018-12-17'),
            endDate: new Date(),
            bulletPoints: [
                "Led an agile team of developers on a high-impact, externally facing application using MEAN stack and microservices.",
                "Developed and maintained a robust Angular component library, resulting in a 40% reduction in development overhead on front-end work, and a consistent look and feel across all externally facing applications.",
                "Mentored several junior developers and interns, helping to breed passion for their role and grow their knowledge.",
                "Designed and implemented an expedited payment system to offer as a premium option to end users resulting in $2 million in company savings, and counting.",
                "Led and coordinated frequent production deployments with dependencies on various teams.",
                "Analyzed and refactored MongoDB collection schemas to optimize for read and write performance.",
                "Collaborated with designers, SMEs and power users to design and develop end to end solutions which address complex ","use-cases.",
                "Led the team through stressful production defects by performing swift RCA and brainstorming solutions",
                "Received multiple promotions, entering at a Junior-level being promoted twice, once to regular and once to Senior"
            ]
        },
        {
            title: 'Application Architect',
            company: 'Guide Dog',
            currentlyEmployed: false,
            startDate: new Date('2016-09-11'),
            endDate: new Date('2017-05-20'),
            bulletPoints: [
                'Worked with one other developer and a product owner to design a mobile application to help blind students navigate the various facilities available to the students at butler',
                'Designed several MongoDB Schemas that would allow for performant read/write speeds.',
                'Researched and determined a stack that would provide cross platform mobile app support using C# .NET and xamarin.'
            ]
        }
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
      return;
  }
}
