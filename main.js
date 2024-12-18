let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true;

let runnerAge = 20;

if (runnerAge > 18 && isEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isEarly) {
  console.log(`Hi ${raceNumber}! Your race will begin at 09:30am`);
} else if (runnerAge > 18 && isEarly === false) {
  console.log(`Hi ${raceNumber}! Your race will begin at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Hi ${raceNumber}! Your race will begin at 12:30pm`);
} else {
  console.log("You must see the registration desk");
}
