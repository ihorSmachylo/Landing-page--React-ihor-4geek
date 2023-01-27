import React from "react";
import PropTypes from "prop-types";
const Cards = (props) => {
    return (

        <div className="container">

            <div className="card">
                <img src="https://picsum.photos/500/325?grayscale" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardsTitle}</h5>
                    <p className="card-text">{props.cardsText}</p>
                    <a href={props.cardsHref} className="btn btn-primary align-self-center">Go to Github</a>
                </div>
            </div>

        </div>

    )
};

Cards.PropTypes ={
    cardsSrc:PropTypes.string,
    cardName:PropTypes.string,
    cardsTitle:PropTypes.string,
    cardsText:PropTypes.string,
    cardsHref:PropTypes.string,
    
}

Cards.defaultProps={
    cardsSrc:"https://picsum.photos/500/325?grayscale",
    cardName:"Card 1",
    cardsTitle:"Card",
    cardsText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis earum delectus ipsam aliquid esse libero. Repellat, earum officiis quos molestiae nihil praesentium recusandae ipsam ratione, error a, tempore nostrum.",
    cardsHref:"https://github.com/ihorSmachylo",
}


export default Cards;

