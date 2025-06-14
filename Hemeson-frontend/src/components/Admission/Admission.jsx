import React from 'react'
import './Admission.css'

const Admission = () => {
  return (
    <div id='Admission' className='admissions'>
        <div className='admission'>
            <img src="basics.jpg" alt="Nursery classes" />
            <div className="caption">
                <h2>Admission Ongoing</h2>
                <h3>Nursery & Lower Basic</h3>
                <p>Start your childs journey with a solid academic foundation in a caring enviroment</p>
            </div>
        </div>
        <div className='admission'>
            <img src="higher-basic.jpg" alt="basic classes" />
            <div className="caption">
                <h2>Admission Now Open</h2>
                <h3>Higher Basic</h3>
                <p>Quality education for confident, capable learners in junior secondary</p>
            
            </div>
        </div>
        <div className='admission'>
            <img src="seniors.jpg" alt="senior classes" />
            <div className="caption">
                <h2>Admission in Progress</h2>
                <h3>Senior Secondary</h3>
                <p>Prepare for WAEC, NECO and a succesful future with strong academic support</p>
            </div>    
        </div>
    </div>
  )
}

export default Admission