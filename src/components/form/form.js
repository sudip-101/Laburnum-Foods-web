import React from "react";
import './form.css';


const Form = () => {
    return (
        <div className="form-container">
            <form className="form">
                <div className="name">
                    <h2>Name</h2>
                    <label htmlFor="name">
                    <input type="text"  name="name" id="name" placeholder="Name"/></label>
                </div>
                <div className="dob">
                    <h2>Birthdate</h2>
                    <label htmlFor="dob">
                    <input type="date" name="begin" id="dob"
            placeholder="dd-mm-yyyy" /></label>
                </div>
                <div className="gender">
                    <h2>Gender</h2>
                    <div className="gender-tick">
                        <label htmlFor="male">
                        <input type="radio" name="gender" id="male"/> Male</label>
                        <label htmlFor="female">
                        <input type="radio" name="gender" id="female"/> Female</label>
                        <label htmlFor="other">
                        <input type="radio" name="gender" id="other"/> Other</label>
                    </div>
                </div>
                <div className="address">
                    <h2>Address</h2>
                    <label htmlFor="address">
                        <input type="text" name="address" id="address" placeholder="Address"/>
                    </label>
                </div>
                <div className="email">
                    <h2>E-mail</h2>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" placeholder="e-mail"/>
                    </label>
                </div>
                <div className="phone">
                    <h2>Contact No</h2>
                    <label htmlFor="phone">
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
                    </label>
                </div>
                <input type="submit" className="btn btn-sign-up" value="sign up"/>
            </form>
        </div>
    );
};


export default Form;