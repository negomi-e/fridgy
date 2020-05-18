import React from 'react';
import style from './index.module.css';
import GetYears from './GetYears';
import GetMonths from './GetMonths';
import GetDays from './GetDays';
import ChangeButton from './ChangeButton';

const now = new Date();
const currentYear = now.getFullYear();
const threeYears = [currentYear, currentYear + 1, currentYear + 2];
const monthsInYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let currYear = String(now.getFullYear());
let currMonth = String(now.getMonth() + 1);
let currDay = String(now.getDate());

export default class extends React.Component {
  state = {
    year: currYear,
    month: currMonth,
    day: currDay,
  };

  changeExpireDate = () => {
    console.log(new Date(this.state.year, this.state.month - 1, this.state.day))
  };

  changeExpireYear = event => {
    this.setState({ year: event.target.value });
  };

  changeExpireMonth = event => {
    this.setState({ month: event.target.value });
  };

  changeExpireDay = event => {
    this.setState({ day: event.target.value });
  };

  render() {
    return (
      <div className={style.selectDate}>
        <h1>
          {this.props.expiryDate}
          {this.state.year} . {this.state.month} . {this.state.day}
        </h1>
        <p>
          {threeYears.map(year => (
            <GetYears
              key={year}
              year={year}
              changeExpireYear={this.changeExpireYear}
            />
          ))}
        </p>
        <p>
          {monthsInYear.map(month => (
            <GetMonths
              key={month}
              month={month}
              changeExpireMonth={this.changeExpireMonth}
            />
          ))}
        </p>
        <p>
          {daysInMonth.map(day => (
            <GetDays
              key={day}
              day={day}
              changeExpireDay={this.changeExpireDay}
            />
          ))}
        </p>
        <p>
          <ChangeButton changeExpireDate={this.changeExpireDate} />
        </p>
      </div>
    );
  }
}
