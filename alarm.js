
//first try 

// const prompt=require('prompt-sync')();

// const userHour=prompt("How many hours later do you want the alarm to ring?  ");
// const userMinute=prompt("How many minutes later do you want the alarm to ring?  ");

// const currentHour=new Date().getHours();
// const currentMinute=new Date().getMinutes();

// let userAlarmHour=parseInt(currentHour)+parseInt(userHour);
// let userAlarmMinute=parseInt(currentMinute)+parseInt(userMinute);


// if (userAlarmMinute >= 60) {
//   userAlarmHour += Math.floor(userAlarmMinute / 60);
//   userAlarmMinute = userAlarmMinute % 60;
// }

// if (userAlarmHour >= 24) {
//   userAlarmHour = userAlarmHour % 24;
// }

// console.log(currentHour,currentMinute);
// console.log(userHour,userMinute);
// console.log("alarm ringing time : ",userAlarmHour);


// const timer=setInterval(() => {

//     if (new Date().getHours()===userAlarmHour && new Date().getMinutes()===userAlarmMinute) {
//         console.log("hello dear ");
//         clearInterval(timer);
//     }

    
// }, 1000);





// final code
const prompt = require('prompt-sync')();
function setAlarm(hour, minute) {
    const now = new Date();
    const alarmDate = new Date();
    alarmDate.setHours(hour);
    alarmDate.setMinutes(minute);

    const difference = alarmDate - now;
    if(difference < 0) {
        console.log("Please provide future time");
        return;
    }

    setTimeout(() => {
        console.log("Time is up! Alarm Alarm Alarm");
    }, difference);

    console.log(now, alarmDate, difference);
}
let hour = acceptInputFromUser("What hour should the alarm go off?: ", 23, "Please enter a valid value for hour. Hour should be a positive integer between 0 and 23");
let minute = acceptInputFromUser("What minute should the alarm go off?: ", 59, "Please enter a valid value for minute. Minute should be a positive integer between 0 and 59");


setAlarm(hour, minute);


function acceptInputFromUser(promptMessage, maxValue, invalidValueMessage) {
    let result = null
    while(result === null) {
        result = prompt(promptMessage);
        result = parseInt(result);
        if(!Number.isInteger(result) || result < 0 || result > maxValue) {
            console.log(invalidValueMessage)
            result = null;
        }
    }

    return result;
}