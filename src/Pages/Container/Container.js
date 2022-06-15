import React from 'react';
import {useState, useEffect} from "react"
import CommonCard from '../Card/CommonCard/CommonCard';
import './Container.css'
const Container = () => {
    // const cards = [
    //     {
    //         id:1,
    //         title: 'Form Skills',
    //         subtitle: 33,
    //         update: 23
    //     },
    //     {
    //         id:2,
    //         title: 'Skill Name',
    //         subtitle: 20,
    //         update: 23
    //     },
    //     {
    //         id:3,
    //         title: 'Form Skills',
    //         subtitle: 20,
    //         update: 23
    //     },
    //     {
    //         id:4,
    //         title: 'Skill Name',
    //         subtitle: 15,
    //         update: 23
    //     },
    //     {
    //         id:5,
    //         title: 'Form Skills',
    //         subtitle: 33,
    //         update: 23
    //     },
    //     {
    //         id:6,
    //         title: 'Skill Name',
    //         subtitle: 20,
    //         update: 23
    //     },
    //     {
    //         id:7,
    //         title: 'Form Skills',
    //         subtitle: 20,
    //         update: 23
    //     },
    //     {
    //         id:8,
    //         title: 'Skill Name',
    //         subtitle: 15,
    //         update: 23
    //     },
    //     {
    //         id:9,
    //         title: 'Form Skills',
    //         subtitle: 33,
    //         update: 23
    //     },
    //     {
    //         id:10,
    //         title: 'Skill Name',
    //         subtitle: 20,
    //         update: 23
    //     }
    // ]

    const [cards, setCards] = useState([]);
    const [displayCards, setDisplayCards] = useState([]);

    useEffect(() => {
      fetch('./skills.JSON')
      .then(res=> res.json())
      .then(data=> {
        setCards(data);
        setDisplayCards(data);
      })
    }, [])
    
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedCards = cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayCards(matchedCards);
    }

    return (
        <>
        <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
        <div className="card-container row mx-auto " >
            {
                displayCards.map(card=>(
                    <CommonCard
                    key={card.id}
                    cards = {card}
                    ></CommonCard>
                ))
            }
        </div>
        </>
    );
};

export default Container;