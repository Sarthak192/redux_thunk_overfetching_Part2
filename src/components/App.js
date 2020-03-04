import React, { Component } from 'react';
import PostsList from './PostsList';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "ui container">
                <PostsList/>
            </div>
         );
    }
}
 
export default App;