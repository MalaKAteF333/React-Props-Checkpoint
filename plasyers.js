// players.js
const players = [
    {
        name: "Loinel Messi"
        team: "Paris Saint-Germain"
        nationality: "Aargentine"
        jersetNumber: 30
        age: 34
        imageUrl: "https://example.com/messi.jpg"

    }
    {
        name: "Cristiano Ronaldo"
        team: "Manchester United"
        nationality: "Portuguese"
        jerseyNumber: 7
        age: 37
        imageUrl: "https://example.com/ronaldo.jpg"
    }
    {
        name: "Neymar Jr"
        team: "Paris Saint-Germain"
        nationality: "Braziliian"
        jersetNumber:10
        age:30
        imageUrl: "https://example.com/neymar.jpg"
    }
];

export default players;


// players.js
import React from "react";
import Card from "react-bootstrap/Card";

const players =({name, team, nationality, 
jersetNumber, age, imageUrl }) =>{
    return (
        <Card.Img variant="top"
        src={imageUrl} />

    )
},

export default players,



// playersList.js

import React from "react";
import player from "./player";
import players from "./players";

const PlayersList = () => {
    return (
    <div>'
        {players.map((player,index) => (
            <player key={index} {...player} />
        )
        )}
    </div>
    );
};

export default PlayersList;

// App.js
import React from "react";
import PlayerList from "./PlayersList";

function App() {
    return (
        <div className="App">
            <PlayersList />
        </div>
    );
}

export default App;