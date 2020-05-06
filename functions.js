function crit(x) {
    let crityc = Math.floor(Math.random() * 100)
    if (crityc > 90){
        return x * 2
    }
    else if (crityc > 70){
        return x * 1.5
    }
    else return x
}

function bossDamage() {
    let bossDamage = frenemies[i].damage;
    let evadeChance = Math.random() * 100;
    if (evadeChance > weaponClass[cw].evasion){
        health -= bossDamage;
        healthv.innerHTML = health;
        infoTab.innerHTML += frenemies[i].name + " did " + bossDamage + " damage to you.";
            if (health <= 0) {
            alert("Your lifeless corpse slowly tumbles down the hill coming to a rest against a rotting moss covered log.");
            location.reload()
            }
    } else {
        infoTab.innerHTML += frenemies[i].name + "'s attack missed!"
    }
}

function w1() {
    cw = 1;
    weaponv.innerHTML = weaponClass[cw].name;
}
function w2() {
    cw = 2;
    weaponv.innerHTML = weaponClass[cw].name;
}
function w3() {
    cw = 3;
    weaponv.innerHTML = weaponClass[cw].name;
}
function w4() {
    cw = 4;
    weaponv.innerHTML = weaponClass[cw].name;
}
function w5() {
    cw = 5;
    weaponv.innerHTML = weaponClass[cw].name;
}
function w6() {
    cw = 6;
    weaponv.innerHTML = weaponClass[cw].name;
}
function w7() {
    cw = 7;
    weaponv.innerHTML = weaponClass[cw].name;
}
