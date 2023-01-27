import React from "react";
//include images into your bundle
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div>
		<NavBar />
			<div className="container">

				<Jumbotron />
				<div className="row">
					<div className="row row-cols-1 row-cols-md-4 row-cols-sm-6 mb-3">
						<Cards cardsTitle="Card1"cardsText="Texto de Card1 pasado por Prop"/>
						<Cards cardsTitle="Card2"cardsText="Texto de Card2 pasado por Prop"/>
						<Cards cardsTitle="Card3"cardsText="Texto de Card3 pasado por Prop"/>
						<Cards cardsTitle="Card4"cardsText="Texto de Card4 pasado por Prop"/>

					</div>


				</div>

			</div>
		<Footer/>
		</div>

			);
};

			export default Home;
