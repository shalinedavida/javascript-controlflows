// Control Flow Assignment


// Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.

function deliveryType(days){
    days.forEach(day=> {

switch (day) {
    case"monday":
        console.log('food delivery');
        break;
        case"tuesday":
        console.log('clothes delivery');
        break;
        case"wednesday":
        console.log('furniture delivery');
        break;
        case"thursday":
        console.log('machinery delivery');
        break;
        case"friday":
        console.log('kitchen appliances delivery');
    default:
        console.log('no delivery services');
        break;
} });
}
const days = ['monday','tuesday','wednesday','thursday','friday'];
deliveryType(days);




// Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed"

function bookStatuses(books){
    books.forEach(book=>{
      switch (book) {
        case "available":
            console.log('Ready to lend');
            break;
            case"borrowed":
            console.log('Checked out');
            break;
         default:
              break;
      } });
}
const books = ['available','borrowed','available'];
 bookStatuses(books);


// Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

 function checkAge(ages) {
    for(let i=0;i<ages.length;i++){
        if(ages[i]>18){
            console.log('Adult');
        }
        else{
            console.log('Minor');
            
        }
    };
    
 }
 let ages=[18,20,16,15,40,30];
 checkAge(ages);

// Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

 function gameLives() {
    let lives =5;
while (lives >=0) {
    console.log(`You have ${lives} lives left`);
    lives--;
}};
 gameLives();


// Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
function userFeedback(comments) {
    comment =0
      do {
        console.log(`The comment is ${comments[comment]}`);
        comment++
      }
      while(comment<comments.length)
    }
const comments=['nice','awful','not bad','splendid'];
 userFeedback(comments);



    // Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

function loginStatus(statuses) {
    statuses.forEach(status => {
        switch (status) {
            case "logged in":
                console.log('Welcome back');
                break;
        
            default:
                console.log('Please log in');
                break;
        }});
    
}
const statuses=['logged in','shaline','logged in','logged in','nothing'];
 loginStatus(statuses);

// Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function priorityAddress(tickets) {
    tickets.forEach(ticket => {
         switch (ticket) {
          case'Help':
          console.log('high priority'); 
           break;
           case 'Sad':
         console.log('medium priority');
           break;
            case 'Heey':
            console.log('low priority');
            break;
            case'In fear':
            console.log('medium priority');
            break;
            default:
             break;
}});

}
const tickets=['Help','Sad','Heey'];
 priorityAddress(tickets);


// Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.

function quizCountdown() {
    let seconds = 10;
    while(seconds >=0){
        console.log(`You have ${seconds} seconds left`)
        seconds--;  
    };
    
}
quizCountdown();

