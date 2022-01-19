import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../components/work-experience-segment/work-experience-segment.component';
import * as moment from 'moment';

const abbreviatedMonthYearFormat = 'MMM, YYYY';

@Pipe({
  name: 'dateDuration'
})
export class DateDurationPipe implements PipeTransform {

  transform(job: Job): string {
    let startDate = moment(job.startDate).format(abbreviatedMonthYearFormat);
    let endDate = job.currentlyEmployed ? 'Present' : moment(job.endDate).format(abbreviatedMonthYearFormat);
    return `${startDate} - ${endDate}`;
  }

}
