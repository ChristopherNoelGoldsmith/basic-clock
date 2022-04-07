const getTime = (date) => {
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  return {
    hours,
    mins,
    secs,
  };
};

const getDay = (date) => {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let today = date.getDay();

  return {
    day,
    month,
    year,
    today,
  };
};

const dayOfWeek = (el) => {
  switch (el) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
    default:
      return 'Sunday?';
      break;
  }
};

const getMonth = (el) => {
  switch (el) {
    case 1:
      return 'Janurary';
      break;
    case 2:
      return 'Feburary';
      break;
    case 3:
      return 'March';
      break;
    case 4:
      return 'April';
      break;
    case 5:
      return 'May';
      break;
    case 6:
      return 'June';
      break;
    case 7:
      return 'July';
      break;
    case 8:
      return 'August';
      break;
    case 9:
      return 'September';
      break;
    case 10:
      return 'October';
      break;
    case 11:
      return 'November';
      break;
    default:
      return 'December';
      break;
  }
};

const postDate = () => {
  const now = new Date();
  const date = getDay(now);
  let { today, day, month, year } = date;
  today = dayOfWeek(today);
  month = getMonth(month);
  $('#today').text(today);
  $('#month').text(month);
  $('#day').text(day);
  $('#year').text(year);
};

const postTime = () => {
  const now = new Date();

  const time = getTime(now);

  let { hours, mins, secs } = time;
  if (hours < 10) hours = `0${hours}`;
  if (mins < 10) mins = `0${mins}`;
  if (secs < 10) secs = `0${secs}`;
  if (hours == 0 && mins == 0 && secs == 0) postDate();
  $('#hours').text(hours);
  $('#mins').text(mins);
  $('#secs').text(secs);
  $('#blip').toggleClass('not-vis');
};

setTimeout(() => {
  postDate();
  postTime();
}, 10);

setInterval(() => {
  postTime();
}, 1000);
