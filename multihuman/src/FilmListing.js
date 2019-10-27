import React from 'react'
import Fave from './Fave'

const FilmListing = (props) => {

    var handleFilterClick = (filter)=>{
    

    console.log('etting filter to ');

   }


    var handleDetailsClick = (film)=>{
        console.log('booooooiii ');
        
            }
    return (
        <div>
         <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter" onClick= {()=>handleFilterClick('tttt')}>
            ALL
            <span className="section-count">
            </span>
        </div>
        <div className="film-list-filter" onClick= {()=>handleFilterClick('tttt')}>
      FAVES
            <span className="section-count" >0</span>
        </div>
    </div>

    <div>
    <div className="film-row" onClick= {()=>handleDetailsClick('tttt')} >
    <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
    
    <div className="film-summary">
    <h1 >{props.data.title}</h1>
    <p>{props.data.release_date}</p>
      <Fave/>
   
</div>
    </div>
  
    </div>
</div>
  
  </div>
    
  

      
    )
}

export default FilmListing
