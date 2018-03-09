$(document).ready(function(){
var time=30;
var total=0;
intervalId="";
var answers=["Amazon","Wakanda","32","Kingston","66"];


$("#timer").html(time);

function run(){
    clearInterval();
    intervalId=setInterval(countDown,1000);
    


}
//function that will allow to countdown

function countDown(){
time--;
$("#timer").html(time);

if(time===0){
    stop();
    alert("Time is up");
    
}

    
}
//stop function
function stop () {
    clearInterval(intervalId);
    
}

//variable that will store palyer answers
var $dat =$("input[name=optradio]:checked").val();



// that will match the arrays
function check(answers, $dat){
    
for(var i =0; i<answers.length;i++ ){
        if($dta.indexOf(answers[i])===-1){
total++;
Alert("you got"+ total + "questions right out of 5");
console.log($dat)
    }
    
}
}
if(time>0){
$(".btn btn-primary btn-lg ").on("click", function(){
    
    run();})}

})