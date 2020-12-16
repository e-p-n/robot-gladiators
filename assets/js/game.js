//Declare functions
var fight = function(enemyName) {
    window.confirm("Welcome to Robot Gladiators!  " + enemyName +" has entered the ring! Do you want to fight him? (It will cist you $10.) Ok for yes, cancel for no" );
    
    enemyHealth = enemyHealth - playerAttack;
    console.log(enemyName + " took " + playerAttack + " points of damage! " + enemyName + " has " + enemyHealth + " health left.");
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(playerName + " took " + enemyAttack + " points of damage! " + playerName + " has " + playerHealth + " health left.");
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}

//Run code
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
for (i=0; i<enemyNames.length; i++) {
    fight(enemyNames[i]);
}


//fight();