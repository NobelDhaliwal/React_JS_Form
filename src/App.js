import React, { useState } from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        pass: "",
    });


    const inputEvent = (event) => {
        console.log(event.target.value); // method for accesing input values typed by user
        console.log(event.target.name);
        // console.log(event.target.placeholder);
        //const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;

        setFullName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name]: value,
            }
        });
};


    function onsubmits() {
         alert("form submitted");
         setFullName("");
        };


    return (
        <>
            <div className="div_style">
                <form onSubmit={onsubmits} id="mySubmit" >
                    <h1>Hello  </h1>
                 <h1>{fullName.fname} {fullName.lname}</h1>
                  <input type="text" placeholder="Enter your FirstName"
                        id="fname"
                        name="fname"
                        onChange={inputEvent}
                        value={fullName.fname}
                        autoComplete="off"
                    />
                    <br />
                    <input type="text" placeholder="Enter your LastName"
                        id="lname"
                        name="lname"
                        onChange={inputEvent}
                        value={fullName.lname}
                    />
                    <br />
                    <input type="email" placeholder="Enter your EMAIL"
                        id="email"
                        name="email"
                        onChange={inputEvent}
                        value={fullName.email}
                        autoComplete='off'
                          />
                    <br />

                    <input type="number" placeholder="Enter your Mobile"
                        id="phone"
                        name="phone"
                        onChange={inputEvent}
                        value={fullName.phone}
                            />
                    <br />

                    <input type="password" placeholder="Enter your Password"
                        id="pass"
                        name="pass"
                        onChange={inputEvent}
                        value={fullName.pass}
                        />
                    <br />

<button type="submit"  id="mySubmit">Click me!</button>

                </form>
            </div></>
    );
};
export default App;
