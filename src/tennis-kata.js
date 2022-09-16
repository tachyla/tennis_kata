module.exports = class Tennis {

    constructor(value){
        let player = this.value;
    }

    tennis_player = (player) => {
        if(player === 'playerOne'){
            let p1_score = [];
            return p1_score;
        }

        if(player === 'playerTwo'){
            let p2_score = [];
            return p2_score;
        }

        else{
            return ('Player not found');
        }
    }

    addPoints = (player, points) => {
        this.player = player;
         this.points = points;

        let currentPlayerScore = this.tennis_player(player);        
        currentPlayerScore.push(points);
        
        console.log(currentPlayerScore);


        //call tennis_player method; passes player to modify 
        //pass points to player indicated 
    }
}