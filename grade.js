// Student Grade Generator
function calcGrade (){

    let input= 
    prompt("Enter your marks between 0 and 100");
    const marks =parseFloat(input);

    if (marks < 0|| marks > 100){
        alert("Marks should be between 0 and 100");
        
    }
    else if (marks >= 79){
        alert("A")

    }
    else if (marks>=60 && marks<79){
        alert ("B")
    }

    else if (marks>=49&& marks<59){
        alert("C")
    }

    else if (marks>=40 && marks<49){
        alert ("D")
    }
    else if (marks<40){
        alert("E")
    }
    
}
let button = document.querySelector("button")
button.addEventListener("click",calcGrade);