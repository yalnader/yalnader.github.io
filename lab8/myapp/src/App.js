import React from 'react';
import Navigator from './components/Navigator'
import {BrowserRouter, Route} from 'react-router-dom' ;
import ViewCourses from './components/ViewCourses';
import Home from './components/Home';
import Forum from './components/Forum';
import Register from './components/Register';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigator />
          <Route path="/home" component={Home}></Route>
          <Route path="/viewCamps" component={ViewCourses}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/forum" component={Forum}></Route>
        </div>
      </BrowserRouter>
      
    );
  }
}


export default App;
