import React, { useEffect, useState } from "react";

export const App = () => {
    const [cardData, setCardData] = useState([]);
    const [deckId, setDeckId] = useState("");
    const CARD_API_URL =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    // executes once at the beginning of each render
    useEffect(() => {
    getDeck();
    }, []);

    // making API call using fetch to get deck id
    const getDeck = () => {
        fetch(CARD_API_URL)
            .then((response) => response.json())
            .then((data) => {
                setDeckId(data.deck_id);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    // making API call using fetch to get a card
    const getCards = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
            .then((response) => response.json())
            .then((data) => {
                setCardData([data.cards[0].image, data.cards[1].image]);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="App">
            <h1> Get a deck of cards from <a href="https://deckofcardsapi.com/"> this API</a></h1>
            <h2>click a button to display two drawn cards</h2>
            <button onClick={getCards}>Draw 2 cards</button>
            {cardData.length > 0 && (
                <div>
                    <img src={cardData[0]} alt="card 1"></img>
                    <img src={cardData[1]} alt="card 2"></img>
                </div>
            )}
        </div>
    );
}
