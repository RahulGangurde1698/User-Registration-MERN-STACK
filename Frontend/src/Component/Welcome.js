
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';



function Welcome() {


  const [detail, setdetail] = useState([{
    name: "",
    last: "",
    email: "",
    mob: "",
    pass: ""
  }]);

  const [name, setName] = useState("")
  const [allData, setAllData] = useState([])
  const [editIndex, setEditIndex] = useState()

  useEffect(() => {
    fetch("/data").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setdetail(jsonRes))
    // console.log(detail)
    
  })
  // const parse= JSON.stringify(detail);
  // console.log(parse)




  // const handleDelete = (index)=> {
  //   allData.splice(index,1)
  //   setAllData([...allData])
  // }

  const handleEdit = (i) => {
    setName(allData[i])
    setEditIndex(i)
  }


  const handleUpdate = () => {
    allData.splice(editIndex, 1, name)
    setAllData([...allData])
    setName("")
  }







  const outClick = () => {
    // alert('Click happened');
    localStorage.removeItem("signup :")
    window.location.reload();


  }

  const del = () => {
    localStorage.clear();
    window.location.reload();

  }

  return (
    <>
      <div>

        <h1>Welcome Users</h1>


        <nav class="navbar navbar-light bg-light justify-content-between">
          <h1 class="navbar-brand">Users</h1>
          <form class="form-inline">
          </form>
        </nav>
        <div className="list">
          <ul class="list-group ">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" >ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
            
              <tbody>
                {
                  detail.map((note,i) => (
                    <tr>
                      <th scope="row">{note._id}</th>
                      <td>{note.name}{note.last}</td>
                      <td>{note.email}</td>
                      <td>{note.mob}</td>
                      <td>{note.pass}</td>

                      <td> 
                <span class=" badge-primary"> 
                <Link to="/edit" className="btn btn-success" onClick={() => handleEdit(i)}>Edit</Link>


        <button className="btn btn-info" onClick={() =>handleUpdate()}>Update</button>
            <button className="btn btn-danger"  onClick={() => del()}>Delete</button></span></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </ul>
        </div>
      </div>



      <button class="btn btn-danger float-right card-footer " onClick={() => outClick()}>LogOut</button>
      <br />
      {/* <button class="btn btn-danger float-right card-footer " onClick={() => del()}>Delete</button> */}

    </>


  )
}

export default Welcome