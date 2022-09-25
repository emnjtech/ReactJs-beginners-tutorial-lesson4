import Nav from './Nav.js';
import UserForm from './UserForm.js'
import Home from './Home.js';
import {Routes, Route} from 'react-router-dom'
import Contact from './Contact.js';
import Testimonials from './Testimonials.js';
import Welcome from './Welcome.js';


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={
        <>
        <Nav/>
        <Home/>
        </>
        
        } />


<Route path="/UserRegister" element={<><Nav/> <UserForm/> </> } />
<Route path="/testimonials" element={<><Nav/> <Testimonials/> </> } />
<Route path="/contact-us" element={<><Nav/> <Contact/> </> } />
<Route path="/welcome/:id" element={<><Nav/> <Welcome/> </> } />







        
      </Routes>
     
 
    </div>
  );
}

export default App;
