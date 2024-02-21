

function gameObject() {
    return {
    home: {
        Name:'Brooklyn Nets',
        colors:['Black', 'White'],
        players:{
            'Alan Anderson':{
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assits:12,
            steals:3,
            blocks:1,
            slamDunks:1,
        },
        'Reggie Evans':{
            number:30,
            shoe:14,
            points:12,
            rebounds:12,
            assits:12,
            steals:12,
            blocks:12,
            slamDunks:7,
        },
        'Brook Lopez':{
            number:11,
            shoe:17,
            points:17,
            rebounds:19,
            assits:10,
            steals:3,
            blocks:1,
            slamDunks:15,
   
        },
        'Mason Plumlee' : {
            number:1,
            shoe:19,
            points:26,
            rebounds:12,
            assits:6,
            steals:3,
            blocks:8,
            slamDunks:5,
        },
        'Jason Terry': {
            number:31,
            shoe:15,
            points:19,
            rebounds:2,
            assits:2,
            steals:4,
            blocks:11,
            slamDunks:1,
        },
    },
}, 
away:{
    name:'Charlotte Hornets',
    colors:['Turquoise', 'Purple'],
    players:{
        'Jeff Adrien':{
            number:4,
            shoe:18,
            points:10,
            rebounds:1,
            assits:1,
            steals:2,
            blocks:7,
            slamDunks:2,
        },
        'Bismak Biyombo':{
            number:0,
            shoe:16,
            points:12,
            rebounds:4,
            assits:7,
            steals:7,
            blocks:15,
            slamDunks:10,
        },
        'DeSagna Diop':{
            number:2,
            shoe:14,
            points:24,
            rebounds:12,
            assits:12,
            steals:4,
            blocks:5,
            slamDunks:5,
        },
        'Ben Gordon':{
            number:8,
            shoe:15,
            points:33,
            rebounds:3,
            assits:2,
            steals:1,
            blocks:1,
            slamDunks:0,
        },
        'Brendan Haywood':{
            number:33,
            shoe:15,
            points:6,
            rebounds:12,
            assits:12,
            steals:22,
            blocks:5,
            slamDunks:12,
        },
    },
},
    };
}

// function players(){
//     return {...gameObject(player).home.players, ...gameObject().home.players};
// };

const numPointsScored=(playersName)=>{
    for(let team in game){
        let players = game[team].players;
        if (playersName in players) {
            return players[plaersname].points
        }else {
            return 'Invalid name!'
        }
    
    }
}

const shoeSize = (playersName)=>{
    for(let team in game) {
        let players = game[team].players;
        if(playersName in players) {
            return (players[playersName].shoe)
        } else {
            return 'Invalid Name !'
        }
    }
}

const bigShoeRebounds=()=>{
    let bigShoe = 0;
    for(let key in game) {
        for(player in game[key].players){
            let biggestShoe = game[key].players[player].shoe;
            if(biggestShoe > bigShoe) {
                bigShoe = biggestShoe
                shoeRebounds = game[key].players[player].rebounds;
            }
        }
    }
    return shoeRebounds;
}
const mostPointsScored=()=>{
    let topPoints = 0;
    for(let key in game) {
        for(let player in game[key].players) {
            if(game[key].players[player].points > topPoints){
                topPoints = game[key].players[player].points ;
                topPlayer = player;
            }
        }
    }
    return `${topPlayer} Scored ${topPoints}`
};