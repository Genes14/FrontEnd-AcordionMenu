var deployed = false;
function deploy(btn){
    let arrow = document.querySelectorAll(".arrow");
    let answer = document.querySelectorAll(".answer");
    let question = document.querySelectorAll(".question");
    if (deployed){
        arrow[btn-1].style.transform = "rotate(0.0turn)";
        answer[btn-1].style.display = "none";
        question[btn-1].style.color = "hsl(240, 6%, 50%)";
        deployed = false;
    } else {
        arrow[btn-1].style.transform = "rotate(0.5turn)";
        answer[btn-1].style.display = "flex";
        question[btn-1].style.color = "hsl(238, 29%, 16%)";
        deployed = true;
    }
}
