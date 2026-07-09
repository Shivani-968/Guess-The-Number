const add1=document.getElementById('add1');
const add2=document.getElementById('add2');
let chlegakinhi=true;
function startnewgame(){
  const but = document.createElement("button");
  but.innerText = "Play Again";
  but.id="again";
  document.getElementById('mess2').appendChild(but);
  document.getElementById('again').addEventListener('click',function(){ 
     add1.innerHTML="";
     add2.innerHTML="10";
     n=0;
     arr=[];
     document.getElementById('mess2').innerHTML="";
     document.getElementById('input').value="";
     document.getElementById('mess').innerHTML="";
     chlegakinhi=true;
})
};
function clrtxt(arr){
  add2.innerHTML=`${10-arr.length}`;
};
function addingelement(e,arr){
   arr.push(e);
};
let finalnumber=Math.floor(Math.random()*100)+1;
console.log(finalnumber);
let n=0;
let arr=[];
if(chlegakinhi===true){
     document.getElementById('submit').addEventListener('click',function(){
       if(n===10){
         return;
  }
        const number=parseInt(document.getElementById('input').value);
       document.getElementById('input').value="";
       if(check(number)===true){
         n++;
        if(finalnumber===number){
            document.getElementById('mess1').innerHTML="Congratulations! You Won!!🎉🎉";
          document.getElementById('mess').innerHTML="";
            finalnumber=Math.floor(Math.random()*100)+1;
            document.getElementById('input').value="";
            startnewgame();
        }else{
           if(finalnumber>number){
               document.getElementById('mess').innerHTML="Number is Smaller";
               addingelement(number,arr);
               add1.innerHTML=arr;
               clrtxt(arr);
           }else{
            document.getElementById('mess').innerHTML="Number is Greater";
            addingelement(number,arr);
            add1.innerHTML=arr;
            clrtxt(arr);
           }
        }
       }else{
         document.getElementById('mess').innerHTML="Please Enter A Valid Number";
       }
                if(n===10){
                  add1.innerHTML="";
                 add2.innerHTML="10";
           finalnumber=Math.floor(Math.random()*100)+1;
           chlegakinhi=false;
            endgame();
         }
   })
  };
function endgame(){
  document.getElementById('mess').innerHTML="Your Chances Are Ended"; 
   startnewgame();
}
function check(number){
  if(number>100||number<1){
    return false;
  } 
  if(isNaN(number)===true){
    return false;
  }
  return true;
}