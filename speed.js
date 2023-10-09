
function CalculateSpeed(){
    let currentSpeed =parseInt(prompt("What is your speed?"));
    
    let maxSpeed = 70;
     if (currentSpeed <= maxSpeed){
        alert ("Ok")
     }
     let excessSpeed = (currentSpeed - maxSpeed)
     let points =(excessSpeed/5)

     if (points>=12){
       alert("Licence Suspended")
     }
     else{
        alert(`${points}`)
     }

}
let speedButton = document.querySelector("button")
speedButton.addEventListener("click",CalculateSpeed)