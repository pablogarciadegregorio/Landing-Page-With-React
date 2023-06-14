import React from "react";
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Footer from "./component/Footer.jsx";
import Card from "./component/Card.jsx";



const Home = () => {
	return (
        <>
        <Navbar/>
        <div class="p-4">
		    
            <Jumbotron/>
            <Card/>
            
       
        </div>
        <Footer/>
        </>
	);
};

export default Home;




