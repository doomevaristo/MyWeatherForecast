import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DaysOfWeek, mapNumberDayToDayOfWeek } from 'src/app/commons/enums/days-of-week';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {

  @Input() date: string;
  @Input() weatherState: string;
  @Input() minTemp: number;
  @Input() maxTemp: number;
  @Input() currentTemp: number;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {}

  get _day() {
    if (this.date) {
      const date = new Date(this.date);
      const currentDate = new Date();
      let dayOfWeek;
      if (date.getDate() === currentDate.getDate()) {
        dayOfWeek = DaysOfWeek.TODAY;
      } else if (date.getDate() === currentDate.getDate() + 1) {
        dayOfWeek = DaysOfWeek.TOMORROW;
      } else {
        dayOfWeek = mapNumberDayToDayOfWeek(date.getDay());
      }
      return `${dayOfWeek}, ${this.getFormattedDate(date)}`;
    }
    return '';
  }

  get iconUrl() {
    return this.icon ? `http://openweathermap.org/img/w/${this.icon}.png` : null;
  }

  private getFormattedDate(date: Date) {
    const dateStr = formatDate(date.toDateString(), 'longDate', 'pt');
    return dateStr.slice(0, dateStr.length - 8) + '.';
  }
}