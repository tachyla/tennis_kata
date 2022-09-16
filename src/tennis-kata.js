module.exports = class TennisPlayer {

    constructor(player){
      this.player = player;
    }

    get_tennisPlayer = (player) => {
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
}