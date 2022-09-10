/* When you declare a variable with the var keyword,
 it is declared globally, or locally if declared
  inside a function.

The let keyword behaves similarly, but with some extra features.
 When you declare a variable with the let keyword inside a block,
  statement, or expression, its scope is limited to that block,
   statement, or expression. */

   


   // Rest parameters

   /*In order to help us create more flexible functions,
    ES6 introduces the rest parameter for function parameters.
     With the rest parameter, you can create functions that
      take a variable number of arguments. These arguments 
      are stored in an array that can be accessed later
       from inside the function.*/
 
   function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));



  // Desestructuring from nested objects

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  
  // Desestructuring:

  const {today: {low: lowtoday}} = LOCAL_FORECAST;

  const {today: {high: highToday}} = LOCAL_FORECAST;

