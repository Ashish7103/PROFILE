const follow = document.getElementById("btn__follow");
const subscriber = document.getElementById("subscriber");

let isFollowing=true;


 
follow.addEventListener("click", function () {
  console.log("ashish");
 
  if(isFollowing){
    follow.textContent="Following"
    subscriber.textContent = `${Number(subscriber.textContent) + 1}`;
    follow.style.backgroundColor="#fff"
    isFollowing=false;

  }
  else{
    follow.textContent="Follow"
    subscriber.textContent = `${Number(subscriber.textContent) - 1}`;
    follow.style.backgroundColor="#1976D2"
    isFollowing=true;


  }
  
    
  



  
});
