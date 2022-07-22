import React from 'react';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Main = () => {
  return (
   <div className='main'>

    <div className='main1'>
      <img className='icon1'  src= {icon1} alt="Declarative icon" />
      <h1>Declarative</h1>
      <p>React makes it <br></br> painless to create <br></br> interactive UIs.</p>
    </div>

    <div className='main2'>
      <img className='icon2'  src= {icon2} alt="Components icon" />
      <h1>Components</h1>
      <p>Build encapsulated<br></br>components that<br></br>manage their state.</p>
    </div>

    <div className='main3'>
      <img className='icon3'  src= {icon3} alt="Single way icon" />
      <h1>Single-Way</h1>
      <p>A set of immutable<br></br>values are passed to<br></br>the component's.</p> 
    </div>
    

    <div className='main4'>
      <img className='icon4'  src= {icon4} alt="Jsx icon" />
      <h1>JSX</h1>
      <p>Statically-typed, <br></br> designed to run on <br></br> modern browsers.</p>
    </div>
    
   </div>
       

  )
}

export default Main;