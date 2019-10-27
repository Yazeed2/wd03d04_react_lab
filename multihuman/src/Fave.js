import React, { Component } from 'react'

export default class Fave extends Component {
    handleClick= (e)=> {
        console.log('handiling this');
        e.stopPropagation()
    }
    render() {

       
        return (
            <div>
                <div className="film-row-fave add_to_queue">
  <p className="material-icons" onClick= {() => this.handleClick('eee')} >add_to_queue</p>
</div>
            </div>
        )
    }
}

