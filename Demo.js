//strings


var a=10;
console.log(a);
var myStr="This is the start."+"This is the end"
console.log(myStr);

var ourStr="i am maheshwari";
ourStr+="i come mysore"
console.log(ourStr);

var myName="maheshwari";
var mystr="my name is "+myName+ourStr;
console.log(mystr);

var firstNameLength=0;
var firstName="Ada";
 firstNameLength=firstName.length;
 console.log(firstNameLength);

var FirstName="maheshwari"
 var firstLetterofFirstName=FirstName[2];
 console.log(firstLetterofFirstName);
 

 var lastName="lovelace";
 var lastLetterOfLastname=lastName[lastName.length-1];
 console.log(lastLetterOfLastname);
 
 function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    result += "The" +  myAdjective + " " + myNoun + " " + myVerb + " to the store" + myAdverb
    return result;
 }
console.log(wordBlanks("dog","big","ran","quickly"));

//ARRAY
var ourArray=["john",50];
console.log(ourArray[0]);

console.log(ourArray);
   var ourarray=[["the universe",42],["everything",101010]]
   console.log(ourarray);

   var ourData=[50,60,70];
   ourData[2]=90;
   console.log(ourData[1]);
   console.log(ourData);
   
   
    ourArray.push([50])
    console.log(ourArray);
    ourArray.shift();
    console.log(ourArray);
    ourArray.unshift(100);
    console.log(ourArray);

    //functions
    function name(){
        console.log("good mornng");
        
    }
    name();
    function calculation(a,b){
         console.log(a-b);
    
        
    }
    calculation(5,2);
    //global scope ..visibility of the variables

    var b="mahee";

    function My()
    {
        console.log(b);///global scope
        
        
    }
    My()

    //local scope
    function myLocalScope(){
        var myVar=10;
        console.log(myVar);
        
    }
    myLocalScope();
   // console.log(myVar);===local scope
    
    var outerWear="T-shirt";
    function myOutfit(){
        var outerWear="top"//local variable ourride the global variabls
        return outerWear
    }
    console.log(myOutfit());

    function minusSeven(num){
        return num-7
    }
    // console.log(minusSeven(10));
    
function testequal(val){
    if(val == 10){
        return "Equal";
    }
    return "not equal"
}
console.log( testequal(10));

3 == 3//equal
3 === 3//not equal

function compare(a,b){
    if(a ==  b ){
        return "equal";
    }
    return "not equal"
}
console.log(compare(10,'10'));


function order(val){
    if(val<5){
        return "less than 5";
    }else if(val<5){
        return "less than 10";
    }else{
        return "greather than or wual to 10"
    }
}
console.log(order(15));

function Demo(age){
    if(age == 10){
        return "true"
    }else {
        return "false"
    }
}
console.log(Demo(10));

function test(num){
    if(num<10){
        return "hello";
    }else if(num<15){
        return "gm";
    }else if(num<40){
        return "good afternoon";
    }else{
        return "gn";
    }
        
    }
console.log(test(10));


function caseInSwitch(val){
    var answer="";
    switch(val){
        case 1:
            answer ="mango";
    break;
    case 2:
        answer= "apple";
        break;
        case 3:
            answer="orange";
}
return "papaya";
}
console.log(caseInSwitch(1));


function age(age){
    var ans="";
    switch(age==10){
    case 1:
        ans="older";
        break;
        case 2:
            ans="younger";
            break;
    }

return "children";
}
console.log(age(10));



function isLess(a,b)
{
    return (a-b);
}
isLess(10,5)

//objects

var ourdog={    
    "name":"camper",
    "legs":4,   
    "name":"mahee",
    "age":90
};
ourdog.name="happy";
console.log(ourdog.name);



var mymusic=[
    {
        "artist":"Billy Joel",
        "title":"piano man",
        "release_year":1973, 

        "formats":["CD","8T","LP"],
        "gold":true
    },
    {
        "artist":"Beau Carnes",
        "title":"cerulean skies",
        "release_year":2003,
    }
]
console.log(mymusic);

//Accessing object properties with dot notation







    
   



