import React, {useState} from 'react';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const [user,
    setdta] = useState(
    {
      name: "",
      email: "",
      msg: "",
    })

  let name,
  value;
  const getDta = (event)=> {
    name = event.target.name;
    value = event.target.value;


    setdta({
      ...user, [name]: value
    });
  }
  //firebase
  const submitDta = async (event)=> {
    event.preventDefault();
    const {
      name,
      email,
      msg
    } = user

    if (name && email && msg) {
      const res = await fetch("https://newsdta-default-rtdb.firebaseio.com/dtarecord.json", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          msg,
        })
      })
      if (res) {
        setdta({
          name: "",
          email: "",
          msg: "",
        })
        //alert("Send Successfully...");
        toast.dark('Submit Successfully...🙂🙂🙂', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } 
    }else {
        //alert("Please fill the all data")
      toast.error('Please fill the form ⚠️⚠️⚠️', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
      }
  };

  return (
    <> < form method = "POST" > < div className = "center" > < h1 > Contact Us < /h1> < input
    type = "text"
    placeholder = "Name"
    name = "name"
    value = {
      user.name
    }
    onChange = {
      getDta
    }
    required /> < input type = "email"
    placeholder = "Email"
    name = "email"
    value = {
      user.email
    }
    onChange = {
      getDta
    }
    required /> < textarea rows = "5" cols = "30"
    placeholder = "Message"
    name = "msg"
    value = {
      user.msg
    }
    onChange = {
      getDta
    }
    required
    ></textarea> < button type = "submit" onClick = {
      submitDta
    } > Submit
 < /button> 
 < /div> 
 < /form> 
 <ToastContainer bodyClassName="toastBody"
      /> 
      
 < />

  );
}


export default Form;