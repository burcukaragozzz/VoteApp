import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      languages: [
        {vote: 0, name: 'Php'},
        {vote: 0, name: 'Pyhton'},
        {vote: 0, name: 'Go'},
        {vote: 0, name: 'Java'},
      ],
    };
  }

  vote = (languages, action) => {
    const newLanguages = [...this.state.languages];
    newLanguages.map(( lang,i ) => {
      if (action === "inc"  && newLanguages[i].name === languages){
        newLanguages[i].vote++;
      } else if ( action === "dec" && newLanguages[i].name === languages && newLanguages[i].vote > 0) {
        newLanguages[i].vote--;
      }
      return lang;
    });
    this.setState({
      languages: newLanguages
    })
  };

  render(){
    return(
      <>
        <h1>Vote Your Language!</h1>
        <div className = "languages">
          {this.state.languages.map(( lang, i ) =>
            <div className="language" key={ lang.name }>
              <button onClick={() =>  this.vote( this.state.languages[i].name,"dec")}>
                Clicks Here
              </button>
              <div class="count_name">
              <div className="language__count">{this.state.languages[i].vote}</div>
              <div className="language__name">{this.state.languages[i].name}</div>
              </div>
              <button onClick={() =>  this.vote(this.state.languages[i].name,"inc")}>
                Clicks Here
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
