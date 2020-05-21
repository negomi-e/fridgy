import React from 'react';
import style from './index.module.css';
import GetYears from './GetYears';
import GetMonths from './GetMonths';
import GetDays from './GetDays';

const now = new Date();
const currentYear = now.getFullYear();
const threeYears = [currentYear, currentYear + 1, currentYear + 2];
const monthsInYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export default class extends React.Component {

  render() {
    return (
      <div className={style.selectDate}>
        <p>
          {threeYears.map(year => (
            <GetYears
              key={year}
              year={year}
              changeExpireYear={this.props.changeExpireYear}
            />
          ))}
        </p>
        <p>
          {monthsInYear.map(month => (
            <GetMonths
              key={month}
              month={month}
              changeExpireMonth={this.props.changeExpireMonth}
            />
          ))}
        </p>
        <p>
          {daysInMonth.map(day => (
            <GetDays
              key={day}
              day={day}
              changeExpireDay={this.props.changeExpireDay}
            />
          ))}
        </p>
      </div>
    );
  }
}
