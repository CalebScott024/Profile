import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profile } = this.props;
    console.log("profileheader");
    console.log(profile);
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-info text-white mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  {isEmpty(profile.imgUrl) ? (
                    <img
                      className="rounded-circle"
                      src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="rounded-circle"
                      src={profile.imgUrl}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-center">{profile.handle}</h1>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
