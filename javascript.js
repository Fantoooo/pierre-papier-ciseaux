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
        return "égalité"
    }else if (playerSelection=="papier" && computerSelection=="pierre"){
        return "tu a gagner"
    }else if (playerSelection=="pierre" && computerSelection=="ciseaux"){
        return "tu a gagner"
    }else if (playerSelection=="ciseaux" && computerSelection=="papier"){
        return "tu a gagner"
    }else {
        return "tu a perdu"
    }
};

function playerchoice(){
    let choix = prompt("entrer pierre/papier/ciseaux");
    return choix.toLocaleLowerCase()
}
console.log(playerchoice())