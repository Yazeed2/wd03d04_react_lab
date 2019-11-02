import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import Fave from './Fave'
import TMDB from './TMDB'
var data =  TMDB



export default class App extends Component {
 
  state={
    films: data.films,
    faves:[],
    display:'all'
  }
isFave = (clas)=>{

this.setState({
  display:clas
})

console.log('done mate');

}
  
   
  
  render() {
   let handleFaveToggle=(item)=>{
      if(this.state.faves.indexOf(item) === -1){
       
    this.state.faves.push(item)
    
        
  console.log('added');
  console.log(this.state.faves);
  
      }else
       if(this.state.faves.indexOf(item) !== -1){
        var index = this.state.faves.indexOf(item)
      this.state.faves.splice(index,1)
  
      
  console.log('removed');
  console.log(this.state.faves);
  
  
      }
  }
    return (
      <div className="film-library">

       <div className="film-list">
         <div className="section-title">FILMS
      
      {console.log(this.state.faves) }
      {this.state.display === 'all' ? data.films.map(item=><FilmListing  isFave={this.isFave} films={this.state.films} like={this.state.faves} handleFaveToggle ={handleFaveToggle} data={item}/> ) : ''}
      {this.state.display === 'faves' ? this.state.faves.map(item=><FilmListing  isFave={this.isFave} films={this.state.films} like={this.state.faves} handleFaveToggle ={handleFaveToggle} data={item}/> ) : ''}
     
      </div>
  <FilmDetails data={data}/>
  </div> 
  </div>
    )
  }
}

//https://image.tmdb.org/t/p/w500/
