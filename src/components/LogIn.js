
import React, { useRef, useState } from "react";

let data=[
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]


const LogIn=()=>{
    
    let user={
        email:useRef(),
        pass:useRef()
    }
    let{email,pass}=user;
    function handleSubmit(e){
        e.preventDefault();
        let[checkE,setCheckE]=useState('');
        let[checkP,setCheckP]=useState('')
        if(!email.current.value || !pass.current.val)
        {
            return;
        }

        let dst=data.filter(da=> da.email==email.current.value);
        if(!dst)
        {
              setCheckE("User not found")
      
            return;
        }
        if(dst.password!=pass.current.value)
        {
           setCheckP("Password Incorrect")
            return;
        }
        else{
            console.log(dst);
        }

    }

    return(
        <div>
    <form onSubmit={handleSubmit}>
<input type="email" id="input-email" placeholder="Enter Email" ref={email}/>
<br/>
<input type="password" id="input-password" placeholder="Enter Password" ref={pass}/>
<br/>
<button type="submit" id="submit-form-btn">LogIn</button>

    </form>
    
    {
        checkE && <p id="user-error" style={{color:"red"}}>{checkE}</p>
    }

      {  checkP  && <p id="password-error" style={{color:"red"}}>{checkP}</p>  }


    


        </div>
    )
}

export default LogIn