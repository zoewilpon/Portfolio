import "./Home.css"
import homeImage from "../assets/main.jpg"
import { Link } from 'react-router-dom';



const Home = () => {

    return(
        <>
            <h1>Welcome to the Burnch Cafe Website </h1>
            <img src={homeImage} alt="home" />
            <h3>Our Cafe serves simply the best food you will taste. We guarantee it! </h3>
            <p> The Brunch Cafe was established in 2001 with one dgal in mind: to serve our customers the finest breakfast food in the world. It is out profound belief that food should be delicious and good for you.</p>
            <p>You want eggs? <b> We got it. </b> You want coffee? <b>We got it!</b> We promise that we will never cut corners or comprimise on quality. We are also extreamly proud of our wide selection of pastries. Our chef wakes up <br /> every morning at 2AM to make our baked goods from scratch. <i> He literally sleeps only 3-4 hours a night!</i> With every bite into our croissants and muffins, you'll taste a diffrence that sets us apart from <br /> our competitors. Trust us you'll never go anywhere else! </p>
            <p> If your'e not complete satisfied with our food, you don't have to pay! (Just don't leave us a negative review on Yelp. We'll sue.) </p>
            <p> If you would like to see the menu, click <Link to="/Menu"> here </Link> </p> 
            <p> Making an order togo? If so, please click <Link to="/Catering"> here </Link> </p>
        </>
    )
}


export default Home;


// we have to use <Link> (note the capital L) instead of <a> in React because using an <a> tag will refresh the page and we don't want that. We want to stay on the same page and just change the content.