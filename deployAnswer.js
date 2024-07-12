var deployed = false;
let arrow = document.querySelectorAll(".arrow");
let answer = document.querySelectorAll(".answer");
let question = document.querySelectorAll(".question");
let estado = [
{clicked : false},
{clicked : false},
{clicked : false},
{clicked : false},
{clicked : false}
]
function deploy(btn){
    if (estado[btn-1].clicked == false){
        arrow[btn-1].style.transform = "rotate(0.5turn)";
        answer[btn-1].style.display = "flex";
        question[btn-1].style.color = "hsl(238, 29%, 16%)";
        estado[btn-1].clicked = true
        for(i=0; i<=estado.length; i++){
            if(i==btn-1){
                continue
            }
            arrow[i].style.transform = "rotate(0.0turn)";
            console.log(arrow[i])
            answer[i].style.display = "none";
            question[i].style.color = "hsl(238, 29%, 16%)";
            estado[i].clicked = false

        }
    } else if (estado[btn-1].clicked == true){
        arrow[btn-1].style.transform = "rotate(0.0turn)";
        answer[btn-1].style.display = "none";
        question[btn-1].style.color = "hsl(240, 6%, 50%)";
        estado[btn-1].clicked = false
        
    }
}
