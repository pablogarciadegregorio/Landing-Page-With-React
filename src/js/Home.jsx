import React from "react";
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Footer from "./component/Footer.jsx";
import Card from "./component/Card.jsx";



const Home = () => {
	return (
        <>
        <Navbar/>
        <div className="container flex justify-content-center p-5 ">
		    
            <Jumbotron/>
            <div className="row ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
       
        </div>
        <Footer/>
        </>
	);
};

export default Home;




