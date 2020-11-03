import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'

class App extends Component{
render() {

return(

<div className="App">
<Greet name="app" heroname="bitman">
<p> this a children props</p>
    </Greet>
<Greet name="bruce" heroname="sperman">
    <button>action</button>
    
    </Greet>
<Greet name="diana"heroname="wonder woman"/>
 <Welcome  name="app" heroname="bitman"/>
 <Welcome name="bruce" heroname="sperman"/>
 <Welcome  name="diana"heroname="wonder woman"/>


 {/* <Hello/> */} 

</div>

)


}




}


export default App;
