let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let msg = document.querySelector("#msg_container");
let player_choice;
let comp_choice;
let actualComp_choice;
player_score = 0;
comp_score = 0;
let winner;

random = () => {
    
    return Math.floor(Math.random() * 3)
}

findW = (n1, n2) => {
    if(n1==1 && n2 == 2 || n1 == 2 && n2 == 1) {
        return 2;
    } else if(n1==1 && n2==3 || n1==3 && n2==1) {
        return 1;
    }
    else if(n1==2 && n2==3 || n1==3 && n2==2) {
        return 3;
    } else {
        return 0;
    }
}

getCompActual_choice = (player_choice, comp_choice) => {
     if(comp_choice == 1) {
        return "rock";
    } else if(comp_choice == 2) {
        return "paper";
    } else if(comp_choice == 3) {
        return "scissor";
    } else {
        return player_choice;
    }
}

rock.addEventListener("click", () => {
    player_choice = 1;
    comp_choice = random() + 1;
    actualComp_choice = getCompActual_choice(player_choice, comp_choice);
    winner = findW(player_choice, comp_choice);

    if(winner == player_choice) {
        player_score++;
        msg.innerHTML = `You won. Comp chose ${actualComp_choice}.`;
        document.querySelector("#player_score").innerHTML = player_score;
    } else if(winner == comp_choice) {
        comp_score++;
        msg.innerHTML = `You lost. Comp chose ${actualComp_choice}.`;
        document.querySelector("#comp_score").innerHTML = comp_score;
    } else {
        msg.innerHTML = "It was Draw.";
    }
})

paper.addEventListener("click", () => {
    player_choice = 2;
    comp_choice = random() + 1;
    actualComp_choice = getCompActual_choice(player_choice, comp_choice);
    winner = findW(player_choice, comp_choice);

    if(winner == player_choice) {
        player_score++;
        msg.innerHTML = `You won. Comp chose ${actualComp_choice}.`;
        document.querySelector("#player_score").innerHTML = player_score;
    } else if(winner == comp_choice) {
        comp_score++;
        msg.innerHTML = `You lost. Comp chose ${actualComp_choice}.`;
        document.querySelector("#comp_score").innerHTML = comp_score;
    } else {
        msg.innerHTML = "It was Draw.";
    }
})

scissor.addEventListener("click", () => {
    player_choice = 3;
    comp_choice = random() + 1;
    actualComp_choice = getCompActual_choice(player_choice, comp_choice);
    winner = findW(player_choice, comp_choice);

    if(winner == player_choice) {
        player_score++;
        msg.innerHTML = `You won. Comp chose ${actualComp_choice}.`;
        document.querySelector("#player_score").innerHTML = player_score;
    } else if(winner == comp_choice) {
        comp_score++;
        msg.innerHTML = `You lost. Comp chose ${actualComp_choice}.`;
        document.querySelector("#comp_score").innerHTML = comp_score;
    } else {
        msg.innerHTML = "It was Draw.";
    }
})