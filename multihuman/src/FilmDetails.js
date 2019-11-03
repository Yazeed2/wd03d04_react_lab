import React from 'react'
import Fave from './Fave'

const FilmDetails = (props) => {
    return (
        <div>
              <div className="film-details">
      <div className="section-title">DETAILS
      <div className="film-details">
              
              
               
            
                <div>

                
                <div className="film-summary">
                <h1 style={{'color':"#000"}}>{props.data.title}</h1>
                <p style={{'color':"#000"}}>{props.data.release_date}</p>
                    <Fave handleFaveToggle={props.handleFaveToggle} item={props.data }/>
               
  
                </div>
              
                </div>
            </div>
    </div>
    </div>
        </div>
    )
}

export default FilmDetails
