import React from 'react'
import "./signup.css"
const signup = () => {
  return (
    <section id="#register" className='register'>
        <div className='main-container'>

        <h5 className='heading'>REGISTER</h5>
        <div className='title-head'>
        <div className="title-individual">INDIVIDUAL</div>
        {/* <div className="title-team">Team</div> */}
        </div>
        <div className="form-container">
            <form action="#" className='individual'>
                <div >
                    <input type="text" placeholder='Name' required className='field'/>
                </div>
                <div >
                    <input type="text" placeholder='Contact Number' className='field' required/>
                </div>
                <div >
                    <input type="text" placeholder='Mail ID' className='field' required/>
                </div>
                <div >
                    <input type="text" placeholder='School/College' className='field' required/>
                </div>
                <div >
                    <input type="text" placeholder='City' className='field' required/>
                </div>
                <div >
                    <input type="text" placeholder='State' className='field' required/>
                </div>
                <div>
                    <input type="text" placeholder='Mode of stay' className='field' required/>
                </div>
                <div >
                    <input type="text" placeholder='Event details' className='field' required/>
                </div>
                <div className='button-container'>
                    <input type="submit" placeholder='Submit' className="button" required/>
                </div>
            </form>
            </div>        
            </div>
    </section>
  )
}

export default signup
