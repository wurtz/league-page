/*   STEP 1   */
export const leagueID = "1092949297970176000"; // your league ID
export const leagueName = "Corey & Groovy <3 Best Ball"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The years 2012, David Wurtzburg a miserable football fan who's given up on football gets invited to play fantasy football. With no idea wtf he's doing he manually autodrafts. He wins it all, 1 year and 1 championship. David wouldn't win a championship again for 10 years.</p>
  <p>The commish of that league never collected the buy in from the other managers. He never gets paid. This spawns the most competitive 12 man league the worlds ever known.</p>
  <p>Year number two of the new league, David attempts to draft Peyton Manning fresh into his Denver career. He drafts Eli on accident. His dad drafts Peyton. Week 1 he plays his dad. Peyton throws 462 yards and 7 TDs.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
     // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "65679984471457792",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Brad",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
     // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "65679984471457792",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Brad",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    ]


  //   {
  //     "managerID": "65679984471457792",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Brad",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Ft. Myers", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "CMeCry", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "69832460615434240",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "David",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "920025685782069248",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Corey",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //     {
  //     "managerID": "927664600265379840",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Johnny",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Ft. Myers", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "CMeCry", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "1110698238664998912",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Zach",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "1093027571282915328",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Austin",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //     {
  //     "managerID": "1093032218567581696",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Ryne",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Ft. Myers", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "CMeCry", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "1110287263902134272",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Dan",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "1110304954088148992",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Anthony",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //     {
  //     "managerID": "1110698238664998912",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Zach",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Ft. Myers", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "CMeCry", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "rmanagerID": "1093024439459045376",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Devin",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "managerID": "948334626433630208",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "name": "Casey",
  //     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Brooklyn", // (optional)
  //     "bio": "Lorem ipsum...",
  //     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Rival", // Can be anything (usually your rival's name)
  //       link: 6, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "Your fantasy team's philosophy",
  //     "tradingScale": 10, // 1 - 10
  //     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   }
  // ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
