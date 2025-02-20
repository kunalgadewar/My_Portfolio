import React, {useRef, useState}from 'react'
import Header from '../../Components/PageHeaderContent/Header';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    description:""
  });
  const{name,email,description} = data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  
  const form = useRef();

  const submitHandler = e => {
    e.preventDefault();
    console.log(data)
    emailjs
      .sendForm('service_gt7klho', 'template_mw06udl', form.current, {
        publicKey: 'TBa2-68cEypDwdUz4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Submited Succesfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
      };


  return (
    <section className="contact">
      <Header headerText="My Contact" icon={<BsInfoCircleFill size={40}/>} />

     

     <div className="contact-content">
     <Animate 
     play
     duration={1}
     delay={0}
     start={{
      transform:"translateX(-200px)",
     }}
     end={{
      transform:"translateX(0px)",
     }}
     >
      <h3 className='contact-header-text'>Let's Talk</h3>
     </Animate>


     <Animate 
     play
     duration={1}
     delay={0}
     start={{
      transform:"translateX(200px)",
     }}
     end={{
      transform:"translateX(0px)",
     }}
     >
      <form className="form" ref={form} onSubmit={submitHandler} >
        <div className="controlsWrapper">
             <div  className="Name">
              <input required name='name' value={name} className='inputName' type={'text'} onChange={changeHandler}/>
              <label htmlFor='name' className='nameLabel'>Name</label>
             </div>

             <div  className="Email">
             <input required name='email' value={email} className='inputEmail' type={'text'} onChange={changeHandler}/>
             <label htmlFor='email' className='emailLabel'>Email</label>
             </div>

             <div  className="Description">
             <textarea required name='description' value={description} className='inputDescription' type={'text'} rows={7} onChange={changeHandler}/>
             <label htmlFor='description' className='descriptionLabel'>Description</label>
             </div>

        </div>
           
               <button >Submit</button>

      </form>
     </Animate>
     </div>
   

    </section>
  )
}

export default Contact
