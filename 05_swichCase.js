var dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is thursday`);
    break;
  case 4:
    console.log(`Today is Wednesday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}




console.log(`------------------------------Assignment--------------------------------------`)

function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
          console.log(`January`);
          console.log(`The start day of the Year`);
          break;
        case 2:
          console.log(`February`);
          console.log(`This Month February`);
          break;
        case 3:
          console.log(`March`);
          console.log(`This Month is March`);
          break;
        case 4:
          console.log(`April`);
          console.log(`This Month is April`);
          break;
        case 5:
          console.log(`May`);
          console.log(`This Month is May`);
          break;
        case 6:
          console.log(`June`);
          console.log(`This Month is June`);
          break;
        case 7:
          console.log(`July`);
          console.log(`This Month is July`);
          break;
        case 8:
          console.log(`August`);
          console.log(`This Month is August`);
          break;
        case 9:
            console.log(`September`);
            console.log(`This Month Is September`);
            break;
        case 10:
            console.log(`October`);
            console.log(`This Month Is October`);
            break;
        case 11:
            console.log(`November`);
            console.log(`This Month Is November`);
            break;
        case 12:
            console.log(`December`);
            console.log(`This Month Is December`);
            break;
        default:
          console.log(`Not valid value provided`);
          break;
      }
    
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);