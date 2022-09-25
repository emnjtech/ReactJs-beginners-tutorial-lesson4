import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserForm() {

  const navigate = useNavigate()
  const [inputs,setInputs] = useState({})
  const [userInfo,setUserInfo] = useState()

  function handleChanges(e) {
    const name = e.target.name
    const value = e.target.value

    setInputs(items => ({...items, [name]: value}))
  }


function handleSubmit(event) {
  event.preventDefault()

  if (inputs.userName.trim().length === 0 || inputs.userEmail.trim().length === 0 || inputs.myJob.trim().length === 0){
    alert("fill all inputs")
  }

  else{
    navigate(`/welcome/${inputs.userName}`, {state: {Name: inputs.userName, email: inputs.userEmail, position:inputs.myJob}})
   
  }


  


}

console.log(userInfo)
  return (
    <div className='wrapper'>
    <div className='container'>
        <div className='dataSide'>
            <div className='registerAndLogin'>
              <h1>Let's set up your account</h1>
              <p className='accountInstr'>Already have an account?<a href='link'> Sign In</a> </p>
            <form onSubmit={handleSubmit} >
              <div  className='InputTxt'>
                <label className='focusLabel'>Your name</label>
                <input type='text' name="userName" value={inputs.userName} onChange={handleChanges}/>
                
                </div>
                <div className='InputTxt'>
                <label className= 'focusLabel' >Email address</label>
                <input type='email' name="userEmail" value={inputs.userEmail} onChange={handleChanges}/>
             
                </div>

           
                

                <div className='SelectInput' >
                
                
                <select className="selectOptn" name="myJob" value={inputs.myJob} onChange={handleChanges}>
                <option hidden="hidden" >I would describe my user type as</option>
                <option value="Developer">Developer</option>
                <option value="Designer">UI/UX Designer</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Back-end Developer">Back-end Developer</option>




                </select>

                
                
                </div>
                <div className='submitBtn'><button>Submit</button> </div>
                <div className='terms'><p>By clicking the "Next" button, you agree to creating a free account, and the <a href="#link">Terms of Service</a> and <a href="#link">Privacy policy.</a></p></div>
            
            </form>
              </div>
            
        </div>
        <div className='dummySide'>
     

        </div>






    </div>

    </div>
  )
}



