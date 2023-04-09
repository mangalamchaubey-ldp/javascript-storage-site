let localScore=document.getElementById('local-score');
let sessionScore=document.getElementById('session-score');
let localNnumber=document.getElementById('local-number');
let sessionNumber=document.getElementById('session-number');
let localClear=document.getElementById('local-clear');
let sessionClear=document.getElementById('session-clear');

// this checks whether the local storage score is null or not and assigns the score value accordingly
console.log(localNnumber);
if(localStorage.getItem('localScore')===null){
        localNnumber.innerText=0;
     }
     else{
    localNnumber.innerHTML=localStorage.getItem('localScore');
     }
if(sessionStorage.getItem('sessionScore')===null){
    sessionNumber.innerHTML=0;
}
else{
sessionNumber.innerHTML=sessionStorage.getItem('sessionScore');
}

let localScoreCount=0;
let sessionScoreCount=0;

// this is important check so that local score count should begin from previous score rather than resetting to 0 ;
if(localStorage.getItem('localScore')===null){
    localScoreCount=0;
 }
 else{
    localScoreCount=localStorage.getItem('localScore');
 }

 if(sessionStorage.getItem('sessionScore')===null){
    sessionScoreCount=0;
}
 else{
    sessionScoreCount=sessionStorage.getItem('sessionScore');
 }



// these are increment button for local storage and session storage
localScore.addEventListener("click",()=>{
        localScoreCount++;
        // localNnumber.innerHTML=12;
        localStorage.setItem('localScore',localScoreCount);
        localNnumber.innerHTML=localStorage.getItem('localScore');
});

sessionScore.addEventListener("click",()=>{
    sessionScoreCount++;
    sessionStorage.setItem('sessionScore',sessionScoreCount);
    sessionNumber.innerHTML=sessionStorage.getItem('sessionScore');
});


// the following button will contain the logic for clearing the local storage and session storage

localClear.addEventListener("click",()=>{

    localStorage.removeItem('localScore');
    localNnumber.innerHTML=0;
     location.reload(); //edge case where reload is necessary 

})
sessionClear.addEventListener('click',()=>{
    sessionStorage.removeItem('sessionScore');
    sessionNumber.innerHTML=0;
    location.reload();
})