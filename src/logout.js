import React from "react";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

const Logout = props => {
  return (
    <div className="fixed-bottom">
      <button className="btn btn-danger" onClick={props.logout}>
        Logout {props.user.username}
      </button>
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
)(Logout);
