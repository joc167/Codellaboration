import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    frontframeworks,
    backframeworks,
    user: { name }
  }
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div className="line" />
      </Fragment>
    )}
    <h2 className="text-primary">Skill Set</h2>
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="p-1">
          <i className="fas fa-check" /> {skill}
        </div>
      ))}
    </div>
    <h2 className="text-primary">Familiar Frontend Framworks</h2>
    <div className="frontframework">
      {frontframeworks.map((frontframework, index) => (
        <div key={index} className="p-1">
          <i className="fas fa-check" /> {frontframework}
        </div>
      ))}
    </div>
    <h2 className="text-primary">Familiar Backend Frameworks</h2>
    <div className="backframework">
      {backframeworks.map((backframework, index) => (
        <div key={index} className="p-1">
          <i className="fas fa-check" /> {backframework}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
