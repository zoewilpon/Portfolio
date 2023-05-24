import { Link } from "react-router-dom"; // we import the Link component from react-router-dom so that we can use it to create links to other "pages" aka our other components without having to refresh the page
import React, { useRef } from "react";


const Catering = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const orderRef = useRef();
    const sideOfFriesYesRef = useRef();
    const sideOfFriesNoRef = useRef();
    const sideOfFriesSupriseMeRef = useRef();
    
    const handleSubmit = (event) => { // we create a function that will handle the form submission so that we can prevent the default behavior of the page refreshing when the sumbmit button is clicked
        event.preventDefault();

        const getSelectedSideOfFries = () => {
            if (sideOfFriesYesRef.current.checked) {
                return sideOfFriesYesRef.current.value;
            }if (sideOfFriesNoRef.current.checked) {
                return sideOfFriesNoRef.current.value;
            }if (sideOfFriesSupriseMeRef.current.checked) {
                return sideOfFriesSupriseMeRef.current.value;
            } else {
                return null;
            }
        }
        
        const formData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            order: orderRef.current.value,
            sideOfFries:getSelectedSideOfFries(),
        }

        console.log(formData);

        event.target.reset(); // this will reset the form after the user submits it
    }

    return (
        <>
            <p> Please use this form to make online orders. Be sure to include your address, and we will deliver to you within 53 hours!</p>

            <form onSubmit={handleSubmit}>
                <p>First Name:</p>
                <input type="text" name="name" placeholder="First Name" ref={firstNameRef}/>
                <p>Last Name:</p>
                <input type="text" name="name" placeholder="Last Name" ref={lastNameRef}/>
                <p>Email:</p>
                <input type="text" name="email" placeholder="Email Address" ref={emailRef}/>
                <p>Mobile Phone Number:</p>
                <input type="text" name="phone" placeholder="XXX-XXX-XXXX" ref={phoneRef}/>
                <br/><br/>
                <textarea cols="25" rows="20" defaultValue={`What would you like to order?`} ref={orderRef}> 
                </textarea>

                <p>Would you like a side of fries?</p>
                <input type="radio" name="response" value="Yes" ref={sideOfFriesYesRef} /> Yes
                <br/>
                <input type="radio" name="response" value="No" ref={sideOfFriesNoRef}/> No
                <br/>
                <input type="radio" name="response" value="Suprise Me" ref={sideOfFriesSupriseMeRef}/> Suprise Me!
                <br/><br/>
                <input type="submit" value="Submit"/>

            </form>

            <p> To go back to the main page, click <Link to="/"> here </Link> </p>

            <p> Need to look at the Menu again? If so, please click <Link to="/Menu"> here </Link> </p>
        </>
    )
}

export default Catering;