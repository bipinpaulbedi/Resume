const moment = require('moment');

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY'),
  DIFF: (startDate, endDate) => {
    //let suffix = endDate == "Current" ? "+" : "";
    endDate = endDate == "Current" ? new Date(Date.now()).toISOString().split('T')[0] : endDate;
    let sDate = moment(startDate.toString(), ['YYYY-MM-DD']);
    let eDate = moment(endDate.toString(), ['YYYY-MM-DD']);
    let years = eDate.diff(sDate, 'years');
    sDate.add(years, 'years');
    let months = eDate.diff(sDate, 'months');
    if (months == 10) {
      years = years + 1;
      months = 0
    } else if (months == 11) {
      years = years + 1;
      months = 12 - months;
    }
    else if (months == 0) {
      months = 1;
    }
    else
      months = months + 2;
    //sDate.add(months, 'months');
    //let days = eDate.diff(sDate, 'days');
    const y = years == 1 ? " yr " : " yrs ";
    const m = months == 1 ? " mo " : " mos ";
    return months > 0 ? years + y + months + m : years + suffix + y;
  },
};

module.exports = { dateHelpers };
