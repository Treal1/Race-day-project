let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistrationStatus = true;

let confirmationNumber = Math.floor(Math.random() * 2000);

let runnerAge = 19;


if (runnerAge > 18 && earlyRegistrationStatus === true){
  console.log(`Hello, runner ${raceNumber}, your race will start at 9:30 am.`);
}else if (runnerAge > 18 && earlyRegistrationStatus === false){
  console.log(`Hello, runner ${raceNumber}. Your race starts at 11:00 am.`)
}else if (runnerAge < 18){
  console.log( 'Youth registrants run at 12:30 pm.')
}else{
  console.log('Please go to the registration desk.')
}

/* Next steps for a biger project:

(1) Create a web page that is sectioned into two parts: New Registration and Check Registration Information.

(2) New Registration: User uses a form to enter name, email, and age.

(3) New Registration: The date on the form will then trigger the presence of a (1)confirmation code that is unique to registration forms (submitted 2 weeks before the race day versus after deadline) and (2) provide race information(name, age, registration status, and race time). Data collected from user stored in an array

(4) Check Registration Status: User prompted for confirmation number and after clicking button, the race information (name, age, registration status, and race time) apears on the screen.

(4) Alread Registered: If the user tries to enter their email into the new registration form again (they already registered once), then an alert will be triggered that says "It seems that this email has already been used to register, try checking your registration status."
*/