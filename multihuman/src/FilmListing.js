// import React from 'react'
import Fave from './Fave'

import React, { Component } from 'react'

export default class FilmListing extends Component {
    state={
        filter: 'all'
            }
            handleFilterClick = (filter)=>{
                this.setState({
                    filter: filter
                })

            
            this.props.isFave(filter) 
        
           }
        
            handleDetailsClick = (film)=>{
                console.log('booooooiii ');
                
                    }
                    
    render() {
      
   


                return (
                    <div>
                     <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : 'all'}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}
                        </span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                  FAVES
                        <span className="section-count" >{this.props.like.length}</span>
                    </div>
                </div>
            
                <div>
                <div className="film-row" onClick= {()=>this.handleDetailsClick('')} >
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} />
                
                <div className="film-summary">
                <h1 style={{'color':"#000"}}>{this.props.data.title}</h1>
                <p style={{'color':"#000"}}>{this.props.data.release_date}</p>
                    <Fave handleFaveToggle={this.props.handleFaveToggle} item={this.props.data }/>
               
            </div>
                </div>
              
                </div>
            </div>
              
              </div>
                
              
            
                  
                )
            }
        }
