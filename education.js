// create RegExp
// RegExp -> patterns used to match character combinations in strings.
// Why we use RegExp -> validate the user’s inputted data, to validate URL formats, to replace words in paragraphs, etc ->
    // Search 
    // Replace particular items
    // Validate input. 
    // Coordinate actions. 
    // Reformat text.


// create RegExp

    const myFirstRegExp = /sa/; 
    console.log(myFirstRegExp); 

    const emailRegExp = new RegExp("sahar@gmail\n.com"); 
    console.log(emailRegExp); 


// Methods RegExp & string 
    // exec() 
        // exec()
        const subStringRegExp = myFirstRegExp.exec(emailRegExp); 
        console.log(subStringRegExp); 
        
    //test()
        const isrRegExpSubstring = myFirstRegExp.test(emailRegExp); 
        console.log(isrRegExpSubstring); 


    // string methods 

    // const mainFottballTeam = "Manchester United";
    // const footballTeamRegExp = /chester /g; 

      // match()
          // const matchedRegExp = mainFottballTeam.match(footballTeamRegExp); 
          // console.log(matchedRegExp);


      // matchAll() 
          // const substitutedFottballTeam = "Manchester United chester ";
          // const wholematchedRegExp = substitutedFottballTeam.matchAll(footballTeamRegExp); 

          // const converteddWholematchedRegExp = [...substitutedFottballTeam.matchAll(footballTeamRegExp)]; 


          // for(let element of converteddWholematchedRegExp){
          //   console.log(element[0])
          // }
          // for(let element of wholematchedRegExp){
          //   console.log(element[0])
          // }


          // console.log(wholematchedRegExp); 
          // console.log(converteddWholematchedRegExp); 


      // Replace() & replaceAll()
          // const fruit = "Apple";
          // const fruitRegExp = /PineApple/g; 

          // const replacetFruit = fruit.replace("Apple", fruitRegExp);

          // console.log(fruit, replacetFruit);


      //split() 

          // const country = "Germany";
          // const replacingCoutryLetter = /ger/i;

          // const convertedCountry = country.split(replacingCoutryLetter);
          // console.log(convertedCountry);



// Structure of RegExp

    // Character classes -> (\r, \n, \t)
      // const email = "sahar@yahoo\n.com";
      // console.log(email); 


    // Assertions -> ^, $, \b, \B -> ^
        // All terms that start with li and end with e but have no i or v on the inside: li[^v]e
        // Test RegExp from first part of string

        // const sentenceExample = "A developer lives like an olive oil, always adding good taste to what he does";
        // const regExp = /li[^v]e/; 
        
        // console.log(sentenceExample.replace(regExp, "Signnnnnn"));

      
    // Using groups and back references -> (x) [capturing group], *? (Non-capturing group), and flag (g)
        // const quote = `Single quote "'" and double quote '"'`;
        // const regexpQuotes = /(['"]).*?\1/g;
        // const totalQuote = quote.matchAll(regexpQuotes);

        // console.log(totalQuote);

        // ????

    // Quantifiers 
        // const str = "fee fii fol fum";
        // const re = /\w{3}\s/g;
        
        // console.log(re.exec(str)); 
        // console.log(re.exec(str)); 
        // console.log(re.exec(str)); 

  
        // Final example 
        const phoneNumberFormat = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;