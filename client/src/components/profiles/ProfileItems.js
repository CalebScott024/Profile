import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItems extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            {isEmpty(profile.imgUrl) ? (
              <img
                className="rounded-circle"
                src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
                alt=""
              />
            ) : (
              <img className="rounded-circle" src={profile.imgUrl} alt="" />
            )}
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.handle}</h3>
            <p>              
              {isEmpty(profile.bio) ? null : (
                <span>{profile.bio}</span>
              )}
            </p>
            
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          
        </div>
      </div>
    );
  }
}

ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItems;
