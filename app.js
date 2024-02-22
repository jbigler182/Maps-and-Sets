//***Maps and Sets Exercise***//

//Question 1

    //What does the following code return?
        //new Set([1,1,2,2,3,4])
    //Will return
        //Set(4){1,2,3,4}

//Question 2

    //What does the following code return?
        //[...new Set("referee")].join("")      //...(spread operator) iterates through the Set string "referee". Set removes duplicates. And join takes individual characters created by spread operator and combines them into a single string
    //Will return
        //'ref'

//Question 3

    //What does the Map m look like after running the following code?

        let m = new Map();
        m.set([1,2,3], true);
        m.set([1,2,3], false);

    //Map m looks is now storing the key/value sets that have been set into its data structure using .set

//Question 4 

    //Write a function called hasDuplicate which accepts an 
    //array and returns true or false if that array contains a duplicate

    // hasDuplicate([1,3,2,1]) // true
    // hasDuplicate([1,5,-1,4]) // false

    //My solution
    function hasDuplicate (array) {
        return new Set(array).size !== array.lenght; //I always forget to return
        //Turn array into a set data structure that will not accept duplicates.
        //Then if the size of that is not equal to the orginals array index lenght we know that there were duplicates! muahahaha
    }

    //Springboards solution used arrow functions. Looks a lot nicer
    // const hasDuplicate = arr => new Set(arr).size !== arr.length


//Question 5

    //Write a function called vowelCount which accepts a string and 
    //returns a map where the keys are numbers and the values are the 
    //count of the vowels in the string.

    //vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
    //vowelCount('Colt') // Map { 'o' => 1 }

    function removeVowel (string) {
        // return string.replace(/[aeiou]/gi, ''); //LOL first time through I removed all the vowels and sent the rest through. Opps
         return "aeiou".includes(string);
    }
    

    function vowelCount(string){
        const vowelMap = new Map(); //create a Map data structure that will turn function string parameter into an object
        for(let letter of string){       //create a loop (which we can do because MAP data structures are iterable)
          let character = letter  //make letter lower case
          if(removeVowel(character)){            //check it see if new declared/lower cased variable is a vowel using isVowel method(is that called a method?)
            if (vowelMap.has(character)){     //and if it is a vowel (which we find out with .has) then...
              vowelMap.set(character, vowelMap.get(character) + 1); //send it to new set data structure and use it with .get to set associated key number! That's cleaver
            } else {          
              vowelMap.set(character, 1); //If its the first time through the loop then this
            }
          }
        }
        return vowelMap; 
      }

    //THIS WAS NOT EASY. NEED A LOT MORE PRACTICE. Wonder why SP code wanted to make everything lower cased?


















//*********Maps and Sets NOTES********//

    //ES2015 added two new data structures (Maps & Sets)
        //Data Structure are fomates for collecting and storing data
        //Prior to ES2015 JS only had two data structure options Arrays and Objects
        //So Maps Sets Arrays and Objects all have the same objective although they do it differently

            //Maps ('hash maps' in other languages)
                //Similar to Objects. They store key/value pairs
                    //BUT IN A MAP A KEY CAN BE ANY DATA TYPE AT ALL!!!
                        //With Objects all keys are turned into strings

                const myMap = new Map();        //Map() syntax requires new be in front of it
                myMap.set(7, 'seven');          //.set is a method placing the paramter list into the new Map() data structure
                myMap.set('7', 'seven string');
                        //key:  value pair

                const empty = [];
                myMap.set(empty, 'empty array!')
                        //key:    value pair

                myMap.get(7);                   //.get retrieves the value of the key from the data structure
                myMap.get(empty);
                        //can get key/value pairs

                //Functions as keys in a MAP
                    const add = (x,y) => x + y;
                    const multiply = (x,y) => x * y;

                    const funcCalls = new Map();
                    funcCalls.set(add, 0);
                    funcCalls.set(multiply, 0);
                    
                    funcCalls.set(add, 1); //We hard code 1 and 9 just to see how funcCalls.get() works
                    funcCalls.set(multiply, 9);
            //MAP functions include .set .get .has .delete .clear .keys .values .forEach .size and many more

            //Iterating with Maps
                const bandData = [ 
                    [ 3, '3 Doors Down'], 
                    [182, 'Blink-182'], 
                    ['nine', 'Nine Inch Nails'] 
                ];

                const bandMap = new Map(bandData);

                bandMap.set('three', 'Three Dog Night') //How to add a key/value pair
                bandMap.size //tells how many key/value pairs are in the data structure
                            
            //How to loop over a MAP  
                        //Have to REMEMBER val, key order in parameter list... It's backwards... For some reason... Stuipd.
                 bandMap.forEach((val, key) => {
                    console.log(key + '=>' + val);
                 })
            //Another way to loop over a MAP. WE CAN DO THIS BECAUSE MAPS (unlike objects) ARE ITERABLES
                        //Can destructure as seen below in for...of loop
                 for (let  [key, value] of bandMap) {
                    console.log(key, value);
                 }
            
    //SETS data structures basics - kind of like arrays. BUT they only store unique values. Ex. Could only have one number 7.
        //SET is super effiecent. They don't functionally replace or differ from arrays other then they do not allow duplicates. But they are useful because they are efficient

                const bandHasTag = new Set();

                const bandHasTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']); //Can pass a single array into a SET
                const bandHasTagss = new Set('hello', 'goodbye'); //returns 'h' 'e' 'l' 'o' - no dublicates 'l' and ignores second list item. SET can only take a single item

                //How to add to a set? .add
                bandHasTags.add('bestlife').add('selfie');

                //How to check is a value is in a set? .has
                bandHasTags.has('justsaying'); //.has is a boolean method

                //How to delete an element? .delete
                bandHasTags.delete('nofilter')

                
                function filterHasTags(tags) {
                    const bannedHashTags = new Set(['winning', 'nofilter']);
                    return tags.filter((tag) => !bannedHashTags.has(tag))
                }
                const susanTags = ['happy Monday', 'winning', 'sunset']

//When would you use sets? 
                        // Am i removing duplicate values?
                        // Is uniqueness required?
                        // Very efficient at checking if an item is in a collection (much better then arrays)
//When would you use maps(hash maps)?
                        // If you need to know the size of something, and need key/value pairs
                        // The keys can be any data type! (Unlike Objects)


                 

