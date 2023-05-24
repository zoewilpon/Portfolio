import breakfast1 from '../assets/breakfast1.jpg';
import breakfast2 from '../assets/breakfast2.jpg';
import breakfast3 from '../assets/breakfast3.jpg';
import breakfast4 from '../assets/breakfast4.jpg';
import "./Menu.css"
import { Link } from 'react-router-dom';




const Menu = () => {



    return (
        <>
            <h1>The Menu</h1>

            <table border="3px">
                <thead>
                    <tr>
                        <th>Entree</th>
                        <th>Description</th>
                        <th>Picture</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Croissant and Jam</td>
                        <td>One bite onto this buttery magical dish will have you addicted for life </td>
                        <td> <img src={breakfast1} alt="Croissant" /> </td>
                        <td>$1.99 </td>
                    </tr>

                    <tr>
                        <td>Rasberry Pancakes</td>
                        <td>One bite onto this buttery magical dish will have you addicted for life </td>
                        <td><img src={breakfast2} alt="food" /> </td>
                        <td>$5.99</td>
                    </tr>

                    <tr>
                        <td>Plain and Simple Waffles</td>
                        <td>One bite onto this buttery magical dish will have you addicted for life</td>
                        <td> <img src={breakfast3} alt="food" /> </td>
                        <td> $53.76 </td>
                    </tr>

                    <tr>
                        <td>Eggs on Toast</td>
                        <td>One bite onto this buttery magical dish will have you addicted for life </td>
                        <td><img src={breakfast4} alt="food" /> </td>
                        <td>$3.99 </td>
                    </tr>
                </tbody>
            </table>

            <p> To go back to the main page, click <Link to="/"> here </Link> </p>

            <p> Ready to make your togo order? If so, please click <Link to="/Catering"> here </Link> </p>
        </>
    )
}


export default Menu;

// Line 56 this will link us back home. We use / to indicate the home page as the path as defined in the <Route> 
// tag in App.js





