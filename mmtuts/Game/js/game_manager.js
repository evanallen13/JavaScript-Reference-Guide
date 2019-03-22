let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight(classType);
    },
    resetPlayer: function(classType){
        switch (classType) {
            case 'Warrior':
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case 'Rouge':
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case 'Mage':
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case 'Demon':
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        }
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<img src="imgs/avatars/'+classType.toLowerCase()+'.jpg" alt="Demon"><div><h3>'+ classType + '</h3><p class="health-player">Health ' + player.health + '</p><p>Mana ' + player.mana + '</p><p>Strength ' + player.strength + '</p><p>Agilaty ' + player.agility + '</p><p>Speed ' + player.speed + '</p></div>';
    },
    setPreFight: function(classType){
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getArena = document.querySelector('.arena');

        getHeader.innerHTML = '<p>Task: Find an enemy!!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!!</a>';
        getArena.style.visibility = 'visable';
    }, 
    setFight: function(){
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getEnemy = document.querySelector('.enemy');
        // create enemy 
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy('Troll', 200, 0, 150, 80, 150);  
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task Choose your move.</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" ">ATTACK!!</a>';//onclick="PlayerMoves.calcAttack()
        getEnemy.innerHTML = '<img src="imgs/enemies/' + enemy.classType.toLowerCase()+'.jpg"><div><h3>' + enemy.classType + '</h3><p>Health: ' + enemy.health  + '</p><p>Mana: ' + enemy.mana  + '</p><p>Strength: ' + enemy.strength  + '</p><p>Agility: ' + enemy.agility  + '</p><p>Speed: ' + enemy.speed  + '</p></div>';
    }
}