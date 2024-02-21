function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const game = gameObject();

//==================//

const numPointsScored = (playersName) => {
  for (let key in game) {
    if (game[key].players.hasOwnProperty(playersName)) {
      return game[key].players[playersName].points;
    }
  }
};
// console.log(numPointsScored("Alan Anderson"));

//==================//

const shoeSize = (playerName) => {
  for (let key in game) {
    if (game[key].players.hasOwnProperty(playerName)) {
      return game[key].players[playerName].shoe;
    }
  }
};
// console.log(shoeSize('DeSagna Diop'));

//==================//

const teamColors = (teamsName) => {
  for (key in game) {
    if (game[key].teamName === teamsName) {
      return game[key].colors;
    }
  }
  return "Team not found";
};
// console.log(teamColors('Charlotte Hornets'));

//==================//

const teamNames = () => {
  let teamNames = [];
  for (key in game) {
    teamNames.push(game[key]["teamName"]);
  }
  return teamNames;
};
// console.log(teamNames());

//==================//

const playerNumbers = (teamName) => {
  const numbers = [];
  for (let key in game) {
    if (teamName === game[key].teamName) {
      for (let player in game[key].players) {
        numbers.push(game[key].players[player].number);
      }
    }
  }
  return numbers;
};
// console.log(playerNumbers('Charlotte Hornets'));

//==================//

const playerStats = (playerName) => {
  for (let key in game) {
    if (game[key].players.hasOwnProperty(playerName)) {
      return game[key].players[playerName];
    }
  }
  return "Player not found";
};
// console.log(playerStats('Mason Plumlee'));

//==================//

const bigShoeRebounds = () => {
  let bigShoe = 0;
  for (let key in game) {
    for (player in game[key].players) {
      let biggestShoe = game[key].players[player].shoe;
      if (biggestShoe > bigShoe) {
        bigShoe = biggestShoe;
        shoeRebounds = game[key].players[player].rebounds;
      }
    }
  }
  return shoeRebounds;
};
// console.log(bigShoeRebounds());

//==================//

const bigShoes = () => {
  let bigShoe = 0;
  for (let key in game) {
    for (player in game[key].players) {
      let biggestShoe = game[key].players[player].shoe;
      if (biggestShoe > bigShoe) {
        bigShoe = biggestShoe;
      }
    }
  }
  return bigShoe;
};
// console.log(bigShoes());

//==================//

const mostPointsScored = () => {
  let topPoints = 0;
  for (let key in game) {
    for (let player in game[key].players) {
      if (game[key].players[player].points > topPoints) {
        topPoints = game[key].players[player].points;
        topPlayer = player;
      }
    }
  }
  return `${topPlayer} Scored ${topPoints}`;
};
// console.log(mostPointsScored());

//==================//

const winningTeam = () => {
  let homeScore = 0;
  let awayScore = 0;

  Object.values(game.home.players).map((player) => {
    homeScore += player.points;
  });

  Object.values(game.away.players).map((player) => {
    awayScore += player.points;
  });

  return homeScore > awayScore
    ? "Winnig Team is  " + game.home.teamName + " With " + homeScore + " Points"
    : "Winnig Team is  " +
        game.away.teamName +
        " With " +
        awayScore +
        " Points";
};
// console.log(winningTeam());

//==================//

function playerWithLongestName() {
  let longestName = "";
  for (let key in game) {
    for (let player in game[key].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}
// console.log(playerWithLongestName());

//==================//

function doesLongNameStealATon() {
  let longestName = "";
  let maxSteals = 0;

  for (let key in game) {
    for (let player in game[key].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  for (let key in game) {
    for (let player in game[key].players) {
      if (game[key].players[player].steals > maxSteals) {
        mostStealsPlayer = player;
        maxSteals = game[key].players[player].steals;
      }
    }
  }
  console.log(maxSteals);
  return longestName === mostStealsPlayer;
}

// console.log(doesLongNameStealATon());
