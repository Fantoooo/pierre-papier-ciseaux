/*choix automatique et aléatoire de l'ordinateur */
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

/*vérifie les résultats, et change  affiche ce qui c'est passer  */
function check(playerSelection, computerSelection){
    const child = document.querySelector('#resultat')
    if (playerSelection===computerSelection){
        child.textContent = "égalité"
        return 0
    }else if (playerSelection=="papier" && computerSelection=="pierre"){
        child.textContent = "victoire"
        return 1
    }else if (playerSelection=="pierre" && computerSelection=="ciseaux"){
        child.textContent = "victoire"
        return 1
    }else if (playerSelection=="ciseaux" && computerSelection=="papier"){
        child.textContent = "victoire"
        return 1
    }else {
        child.textContent = "défaite"
        return -1
    }
};
let scoredata = {ordinateur:0,utilisateur:0}

/* actualisation des scores */
function score(winorloose){
    const score = document.querySelector('#score')
    if (winorloose==0){
        return 
    }else if (winorloose==1){
        scoredata.utilisateur=1 + scoredata.utilisateur
        score.textContent=`Ordi ${scoredata.ordinateur} : ${scoredata.utilisateur} vous`
    }else{
        scoredata.ordinateur=1+ scoredata.ordinateur
        score.textContent=`Ordi ${scoredata.ordinateur} : ${scoredata.utilisateur} vous`
    }
    if (scoredata.ordinateur == 5){document.location.href="./perdu.html"}
    if (scoredata.utilisateur == 5){document.location.href="./victoire.html"}
};
/*verifie si bouton cliquer */
const pierre = document.querySelector("#pierre")
const papier = document.querySelector("#papier")
const ciseaux = document.querySelector("#ciseaux")
pierre.addEventListener('click', ()=>{
    score(check(pierre.id,autochoice()))
})
papier.addEventListener('click', () =>{
    score(check(papier.id,autochoice()))
});
ciseaux.addEventListener('click', () =>{
    score(check(ciseaux.id,autochoice()))
});