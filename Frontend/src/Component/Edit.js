import React, {  useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'



const Edit = () => {

  


    // const history = useNavigate("");

    const [inpval, setINP] = useState({
        name: "",
        last: "",
        email: "",
        pass: "",
    })

    function setdata(e) {
       setINP({...inpval, [e.target.name]:e.target.value})
            };
       

    







    const getdata = async () => {

        const res = await fetch("/datauser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            // console.log("get data");

        }


    }

        useEffect(() => {
            getdata();
        }, []);


        const updateuser = async (e) => {
            e.preventDefault();
            const editinputval={name:inpval.name,last:inpval.last, email:inpval.email,pass:inpval.pass,}
            console.log(editinputval);

            // const {name,email,last,pass} = inpval;

            // const res2 = await fetch('/updatedatause',{
            //     method: "patch",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body:JSON.stringify(editinputval)
    
            // });

            // const data2 = await res2.json();
            // console.log(data2);

            // if(res2.status === 422 || !data2){
            //     alert("fill the data");
            // }else{
            //     history("/")
            //     setINP(data2);
            //     console.log(data2)
            // }

        }

        return (
            <div className="container">
                <NavLink to="/">Users</NavLink>
                
                <form className="mt-4">
              
                    <div className="row">
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" value={inpval.name} name="name"onChange={setdata}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">LastName</label>
                            <input type="text" value={inpval.last}name="last" onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">email</label>
                            <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="text" value={inpval.pass} onChange={setdata} name="pass" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                    </div>
                    
          
                </form>
            </div>
        )
    }

    export default Edit;



