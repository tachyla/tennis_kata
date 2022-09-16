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
        player = this.player;
        points = this.points;

        if(player === 'playerOne'){
            p1_score.push(points);
        }
        else if(player === 'playerTwo'){
            p2_score.push(point);
        }
    }
}