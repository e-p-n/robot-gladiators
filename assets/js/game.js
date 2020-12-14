//Declare functions
var fight = function() {
    window.alert("Welcome to Robot Gladiators!  " + enemyName +" has entered the ring!" );
    
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

//You can also log multiple values at once, like this:
console.log(playerName, playerAttack. playerHealth);

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

fight();