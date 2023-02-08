const datepicker = require('js-datepicker');
const moment = require("moment");
require('moment/locale/ru');
const Chart = require ('chart.js/auto');



const dat=(moment().format('LL'));
const day=(moment().format('dddd'));
document.addEventListener("DOMContentLoaded", Today(dat, day));


function Today(dat, weekday) {
    document.getElementById('today').innerHTML=dat;
    document.getElementById('weekday').innerHTML=weekday;
    
        }



const picker = datepicker('#dateinput', {
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    dateSelected: new Date() 
})


//const date = (moment.locale('ru'));

const weekDay = moment().day();

const monthDay = moment().date();

const monthName = moment().format('MMMM');

const month = moment().month();





class Task {
  constructor(date, count) {
      this.date = date;
      this.count = count;
  
  }}
  const listOfTasks = [];
listOfTasks.push(new Task('2023-02-08', 5));
listOfTasks.push(new Task('2023-02-06', 6));
listOfTasks.push(new Task('2023-02-07', 2));
listOfTasks.push(new Task('2023-02-09', 1));

const ChartLebels=[];
listOfTasks.forEach(element => { 
  ChartLebels.push(element.date);
  
});

const datay=[];

listOfTasks.forEach(element => { 
 datay.push(element.count);
  
});


let ctx=document.getElementById('myChart').getContext('2d');



const stackedLine = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ChartLebels,
    datasets: [{
      label: `Активность на текущей неделе ${monthName}`,
      data: datay,
      fill: false,
      borderColor:  'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 3,
      tension: 0.2
    }]
  }
 }
 
  
) 









