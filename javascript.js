

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
console.log(autochoice())