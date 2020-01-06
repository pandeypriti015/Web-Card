import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as action from "./store/actions/action";

class App extends Component {
  deleteItem = id => {
    const updatedList = this.props.user.filter(item => item.id !== id);
    this.props.updateUserData(updatedList);
  };

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    console.log("app.js", this.props.user);
    return (
      <div className="App">
        {this.props.user
          ? this.props.user.map((items, index) => (
              <div className="card-details" key={index}>
                <div className="card-body">
                  <img className="img-fluid"
                    src={items._links.avatar.href}/>
                </div>
                <h2>User Details</h2>
                <div className="displayText">
                  <label>First Name: {items.first_name}</label>
                  <label>Last Name: {items.last_name}</label>
                  <label>Gender: {items.gender}</label>
                  <label>DOB:{items.dob}</label>
                  <lable>ID:{items.id}</lable>
                
                </div>
                <button onClick={() => this.deleteItem(items.id)}>
                  Delete
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(action.getUserData()),
    updateUserData: updatedUserDetails =>
      dispatch(action.deleteItem(updatedUserDetails))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);