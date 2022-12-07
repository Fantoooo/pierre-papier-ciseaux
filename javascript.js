function autochoice(){
    const Number = Math.floor(Math.random()*3)
    if (Number===1){
        return "pierre"
    }else if (Number===0){
        return "papier"
    }else {
        return "ciseaux"
    };
};
function check(playerSelection, computerSelection){
    if (playerSelection===computerSelection){
        return 0
    }else if (playerSelection=="papier" && computerSelection=="pierre"){
        return 1
    }else if (playerSelection=="pierre" && computerSelection=="ciseaux"){
        return 1
    }else if (playerSelection=="ciseaux" && computerSelection=="papier"){
        return 1
    }else {
        return -1
    }
};

function playerchoice(){
    let choix = prompt("entrer pierre/papier/ciseaux");
    return choix.toLocaleLowerCase()
}
function game(){
    let tour = 0;
    let ordi = 0;
    let joueur = 0;
    let action;
    let score;
    while(tour<5){
        action = check(playerchoice(),autochoice())
        if (action==-1){
            alert("Vous avez perdu")
            ordi++;
            tour++;
        }else if (action==0){
            alert("égalité, on la refait")
        }
        else{
            alert("Vous avez gagner")
            joueur++;
            tour++;
        }
        alert(`vous ${joueur} : ${ordi} ordinateur`)
    };
}
game()