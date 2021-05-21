import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      {props.name} <br/>
      {props.bio} <br/>
      {props.profession}<br/>
      {props.children}<br/>
      <button onClick={() => props.show(props.name)}>Show the name</button>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  show: PropTypes.func,
};
Profile.defaultProps = {
    name:"5ou med amine",
    bio:"omorek",
    profession:"web developper"
}

export default Profile;
