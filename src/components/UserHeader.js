import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserHeader extends Component {
    
    render() { 
        
    //Instead of having logic here we provide logic in mapStateToProps to make reusable
    // const user = this.props.user.find((user)=> user.id === this.props.userid)

        if(!this.props.user){
            return null;
        }

        return ( 
            <div>{this.props.user.name}</div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        user: state.user.find((user)=> user.id === ownProps.userid)
    }
}
 
export default connect(mapStateToProps)(UserHeader);