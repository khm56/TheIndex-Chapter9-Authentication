import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";

//buttons
import NavLogin from "./NavLogin";
import Logout from "./logout";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        {this.props.user ? <Logout /> : <NavLogin />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps)(Sidebar);
