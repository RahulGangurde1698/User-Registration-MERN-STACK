import React, { useEffect, useRef, useState } from 'react'
import './Style.css';
import Welcome from './Welcome';

function Buisness() {
    // const name = useRef();
    // const last = useRef();
    // const email = useRef();
    // const mob = useRef();
    // const pass = useRef();

    const defaultvalue = {
        name: "",
        last: "",
        email: "",
        mob: "",
        pass: ""
    }





    const [show, setShow] = useState(false);
    const [showlogin, setShowlogin] = useState(false);

    const localsignup = localStorage.getItem("signup :")
    const localEmail = localStorage.getItem("Email :")
    const localname = localStorage.getItem("First :")
    const localPass = localStorage.getItem("Password :")

    const [error, seterror] = useState(false);
    const [user, SetUser] = useState(defaultvalue);




    useEffect(() => {
        if (localsignup) {
            setShow(true)
        }
        if (localEmail) {
            setShowlogin(true)
        }
    })
    const { name, last, email, pass, mob } = user;


    const onvalChange = (e) => {
        SetUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const submithandle = async (e) => {
        if (name && last && email && mob && pass)
            //   console.log(name.current.value, last.current.value, email.current.value, mob.current.value, pass.current.value)
            localStorage.setItem("First :", name)
        localStorage.setItem("LastName :", last)
        localStorage.setItem("Email :", email)
        localStorage.setItem("Mobile :", mob)
        localStorage.setItem("Password :", pass)
        localStorage.setItem("signup :", email)

        // e.preventDefault();
        const res = await fetch("/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, last, email, pass, mob

            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid registration");

        } else {
            window.alert(" Registration Succesfull");
            console.log("Succesfull registration");
        }









        // alert("Account Created succesfully!!")
        window.location.reload();
    }

    const loginhandle = (e) => {

        if (email == localEmail && pass == localPass) {
            localStorage.setItem("signup :", email)
            window.location.reload();
        } else {
            alert("Plaese Enter Valid Credential")
        }
        if (email.current.value.length === 0 || pass.current.value.length === 0) {
            seterror(true);
        }

    }

    const Forgot = () => {
        alert(`Your password is ' ${localPass} '`)

    }


    return (
        <div>
            {show ? <Welcome /> :
                (showlogin ?
                    <section class="h-100 gradient-form" >
                        <div class="container py-5 h-100">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-xl-10">
                                    <div class="card rounded-3 text-black">
                                        <div class="row g-0">
                                            <div class="col-lg-6">
                                                <div class="card-body p-md-5 mx-md-4">

                                                    <div class="text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className='imgwall'
                                                            alt="logo" />
                                                        <h4 class="mt-1 mb-5 pb-1">User Login </h4>
                                                    </div>

                                                    <form>
                                                        <h2>Welcome  {localname}</h2>
                                                        <div class=" mb-4">
                                                            <input type="email" name="email" class="form-control"
                                                                placeholder="Email" required onChange={(e) => onvalChange(e)} id='email' />

                                                        </div>

                                                        <div class=" mb-4">
                                                            <input type="create password" class="form-control" placeholder="Password" required onChange={(e) => onvalChange(e)} name="pass" id='pass' />
                                                        </div>

                                                        <div class="text-center pt-1 mb-5 pb-1">
                                                            <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={loginhandle}>Log
                                                                in</button>
                                                            <a class="text-muted" href="#" onClick={Forgot}>Forgot password?</a>
                                                        </div>



                                                    </form>

                                                </div>
                                            </div>
                                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                                    <h4 class="mb-4">We are more than just a company</h4>
                                                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    :
                    <section class="h-100 gradient-form" >
                        <div class="container py-5 h-100">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-xl-10">
                                    <div class="card rounded-3 text-black">
                                        <div class="row g-0">
                                            <div class="col-lg-6">
                                                <div class="card-body p-md-5 mx-md-4">

                                                    <div class="text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className='imgwall'
                                                            alt="logo" />
                                                        <h4 class="mt-1 mb-5 pb-1">User Registration</h4>
                                                    </div>

                                                    <form>
                                                        <p>Please Create  your account</p>

                                                        <div class=" mb-4">
                                                            <input type="fistName" class="form-control"
                                                                placeholder="Fisrt Name" required onChange={(e) => onvalChange(e)} name="name" id='name' />

                                                        </div>
                                                        <div class=" mb-4">
                                                            <input type="LastName" class="form-control"
                                                                placeholder="Last Name" required onChange={(e) => onvalChange(e)} name="last" id='last' />

                                                        </div>
                                                        <div class=" mb-4">
                                                            <input type="email" class="form-control"
                                                                placeholder="Email" required onChange={(e) => onvalChange(e)} name="email" id='email' />

                                                        </div>
                                                        <div class=" mb-4">
                                                            <input type="email" class="form-control"
                                                                placeholder="Mobile" required onChange={(e) => onvalChange(e)} name="mob" id='mob' />

                                                        </div>

                                                        <div class=" mb-4">
                                                            <input type="create password" class="form-control" placeholder="Create Password" required onChange={(e) => onvalChange(e)} name="pass" id='pass' />

                                                        </div>

                                                        <div class="text-center pt-1 mb-5 pb-1">
                                                            <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={submithandle}>Submit
                                                            </button>
                                                            <a class="text-muted" href="#!">Forgot password?</a>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                                    <h4 class="mb-4">We are more than just a company</h4>
                                                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
            }
        </div>






    )
}

export default Buisness