import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

// Actions
import * as actionCreators from "./store/actions";

const NavLogin = props => {
  return (
    <div className="fixed-bottom">
      <Link to="/login" className="btn btn-info m-2 float-left">
        Login
      </Link>
      <Link to="/signup" className="btn btn-success m-2 float-left">
        Signup
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLogin);
