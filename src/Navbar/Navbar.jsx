import React from 'react';
import img1 from '../Assert/Vector.png'
import '../Navbar/Navbar.css'

class Navbar extends React.Component {

    render() { 
      return (
       <div className='parentNav'>
           <div  className='childNav'>
               <img className='icon'  src={img1} alt="Error" /> 
                <h6>Housing</h6>
           </div>
              <div className="childText">
                <a className='anchor' href="https://www.instagram.com/webbrain_academy/">Home</a>
                <a className='anchor' href="https://www.instagram.com/webbrain_academy/">Properties</a>
                <a className='anchor' href="https://www.instagram.com/webbrain_academy/">Contacts</a>
              </div>
              <div className='parentbtn'>
                  <button className='btn'>LogIn</button>
              </div>
       </div>
       
      );
    }
  }

export default Navbar