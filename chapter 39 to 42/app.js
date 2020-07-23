// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 



    // Question no 1
    function power(e,c){
        return Math.pow(e,c);
    }
    document.write(power(2,4));




// Question no 2
function isLeap(years){
    return (years % 100 === 0) ? (years % 400 === 0) : (years % 4 === 0);
}
document.write(isLeap(2020));





//      Question no 3
function area(a,b,c){
    function S(){
        return (a+b+c)/2;
    }
    return S()*(S()-a)*(S()-b)*(S()-c);
}
document.write(area(4,4,4));




// Question no 4
function result(sub1,sub2,sub3){
    total= 500;
    function average(){
        return (sub1+sub2+sub3)/3;
    }
    function percentage(){
        return (sub1+sub2+sub3)*100/total  +"%";
    }
    return "average:"+average()+"<br>Percentage:"+percentage();
}
document.write(result(200,199,60));




// // Question no 5
String.prototype.findindex,Array.prototype.findindex=function(a){
for(var i=0;i<this.length;i++ ){
    if(a==this[i]){
        return i;
        break
    }
}
}
document.write(["b","u","a","h"].findindex("a"));
document.write("hdgshajs".findindex("a"));





// Question no 6
function delVowel(str){
    if(str.length>25){
        document.write("string should not longer than 25 characters");
    }
    else{
        var newstr=[];
        for(var i=0;i<str.length;i++){
            if(str[i]!="a"&&str[i]!="e"&&str[i]!="i"&&str[i]!="o"&&str[i]!="u"){
                newstr.push(str[i]);
            }
        }
        return newstr.join("");
    }
}
document.write(delVowel("safiullah"));





// Question no 7


function findOccurrences() {
    var str = "safiugae";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());





// Question no 8
function convert(){
    va
 km_distance=+prompt("enter distance in km");
    function toMeter(){
        return km_distance*1000;
    }
    function toFeet(){
        return km_distance*3280.84;
    }
    function toInches(){
        return km_distance*39370.1;
    }
    function toCentiMeter(){
        return km_distance*100000;
    }
    document.write(km_distance+" km is equals to:"+toMeter()+" meters<br>");
    document.write(km_distance+" km is equals to:"+toInches()+" inches<br>");
    document.write(km_distance+" km is equals to:"+toFeet()+" feet<br>");
    document.write(km_distance+" km is equals to:"+toCentiMeter()+" centimeters<br>");

}
convert();





// Question no 9
function calcOvertime(){
    var workingHours=+prompt("enter your working hours");
    if(workingHours>40){
        return (workingHours-40)*12+" rupees.";
    }
    else{
        return 0;
    }

}
document.write(calcOvertime());





// Question no 10
var cash=+prompt("enter amount to withdraw");
var hundred=0;
var fifty=0;
var ten=0;
var a=cash;
while (cash>=10) {
    if(cash>=100){
        cash-=100;
        hundred++;
    }
    else if(cash>=50){
        cash-=50;
        fifty++;
    }
    else if(cash>=10){
        cash-=10;
        ten++;
    }

    
}
document.write("for amount of "+a+" rupees ,"+"you will have "+hundred+" hunderd notes ,"+fifty+" fifty notes & "+ten+" ten notes.");