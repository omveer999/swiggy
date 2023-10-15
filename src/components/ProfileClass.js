import React from 'react';

class ProfileClass extends React.Component{
    render(){
     return(
        <div>
        <h1>Profile Class Component</h1>
        <p>This is a class based component</p>
        <p>Name : {this.props.name}</p>
        <p>Name : {this.props.mobile}</p>
       </div>
     )  
    }
}

export default ProfileClass;
