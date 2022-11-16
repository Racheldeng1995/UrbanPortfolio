import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-content-container">
          <div className="profile-img-container">
            <div className="profile-img">
              <img src="https://picsum.photos/200/300"></img>
            </div>
          </div>
          <div className="profile-details">
            <h3>Username</h3>
            <p>
              Paper cut survivor. Recommended by 4 out of 5 people. My puns are
              always intended. We can only be as strong as our WiFi signal.
              Waste your time wisely. I pause my anime just to post here.
              Probably talking about the Patriots. The IG account about nothing.
            </p>
          </div>
        </div>
        <div className="profile-publish-container">
          <div className="profile-publish">
            <div className="profile-card-container">
              <div className="profile-card-title">
                <h1>Title</h1>
              </div>
              <div className="profile-card-img">
                <img src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg&_gl=1*byhjgc*_ga*MjEwNDQ3NzgzOC4xNjY4NTUzODM3*_ga_8JE65Q40S6*MTY2ODU1MzgzOS4xLjAuMTY2ODU1MzgzOS4wLjAuMA.."></img>
              </div>
              <div className="profile-card-actions">
                <div className="profile-card-actions-like">
                  <Link to="/">
                    <i class="fa-regular fa-heart"></i>
                  </Link>
                </div>
                <div className="card-actions-comment">
                  <Link to="/">
                    {" "}
                    <i class="fa-regular fa-comment"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="profile-card-container">
              <div className="profile-card-title">
                <h1>Title</h1>
              </div>
              <div className="profile-card-img">
                <img src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg&_gl=1*byhjgc*_ga*MjEwNDQ3NzgzOC4xNjY4NTUzODM3*_ga_8JE65Q40S6*MTY2ODU1MzgzOS4xLjAuMTY2ODU1MzgzOS4wLjAuMA.."></img>
              </div>
              <div className="profile-card-actions">
                <div className="profile-card-actions-like">
                  <Link to="/">
                    <i class="fa-regular fa-heart"></i>
                  </Link>
                </div>
                <div className="card-actions-comment">
                  <Link to="/">
                    {" "}
                    <i class="fa-regular fa-comment"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
