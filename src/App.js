import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const text ='당신은 어썸한가요?';
      const condition = true;
      const style = {
          background : 'gray',
          border: '1px solid black',
          height: Math.round(Math.random() *300) + 50,
          width: Math.round(Math.random()*300)+ 50,
          WebkitTransition : 'all',
          MozTransition : 'all',
          msTransition :'all'
      };
    return(
        <div className="my-div">
            <h1>리액트 안녕!!!</h1>
            <h2>{text}</h2>
            { condition ? '참' : '거짓' }
            <div style={style}></div>
            <div className="gray-background">
                <img src={logo} />
                <h2>Let's develop management system!</h2>

            </div>
        </div>



    );
  }
}

export default App;
