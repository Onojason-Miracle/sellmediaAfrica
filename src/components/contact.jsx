import React  from 'react';
import { useNavigate } from 'react-router-dom';



function Contact(){

    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here

    // After form submission, navigate to the success page
    navigate('/success');
  };
    return(
<div id='contact'>
<img src="assets/Side Image.png" alt='contact-image' className='contact-iamge'/>

<form onSubmit={handleSubmit}>
   <div className='formInner'>
   <h1 className='form-h1'>
    We'd love to hear 
from you
    </h1>
   </div>

    <p> 
        <input type='text' placeholder='name*' className='form-input' required />
    </p>

    <p> 
        <input type='text' placeholder='email*'  className='form-input' required/>
    </p>

    <p> 
        <input type='text' placeholder='website URL*' className='form-input' required />
    </p>

    <p> 
        <textarea placeholder='project Details*' className='form-text' required></textarea>
       
    </p>

    <div className='submit'>
        <button type='submit' className='form-button'>Send Proposal</button>
    </div>
</form>


</div>
    

    )
}

export default Contact