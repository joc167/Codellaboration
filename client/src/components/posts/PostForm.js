import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { getGithubRepos, getCurrentProfile } from '../../actions/profile';
import auth from '../../reducers/auth';

const PostForm = ({
  addPost,
  getGithubRepos,
  repos,
  username,
  getCurrentProfile,
  auth: { user },
  profile: { profile, githubusername }
}) => {
  const [text, setText] = useState('');
  useEffect(() => {
    getGithubRepos(profile.githubusername);
    getCurrentProfile();
  }, [
    getGithubRepos,
    username
    // getCurrentProfile
  ]);

  const onChange = (e) =>
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    {
      // this.setState({ repo_select: e.target.value });
    };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Find some developers!!</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        {/* <div className="profile-github">
          <h2 className="text-primary my-1">Github Repos</h2>
          {repos.map((repo) => (
            <div key={repo.id} className="repo bg-white p-1 my-1">
              <div>
                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">
                    Stars: {repo.stargazers_count}
                  </li>
                  <li className="badge badge-dark">
                    Watchers: {repo.watchers_count}
                  </li>
                  <li className="badge badge-light">
                    Forks: {repo.forks_count}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div> */}

        <div className="form-group">
          <select name="repo_select" value="" onChange={onChange}>
            <option>* Select a project from your github repository </option>
            {/* <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option> */}

            {repos &&
              repos.map((repo) => (
                <option value={repo.id}> {repo.name}</option>
              ))}
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
  // getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  addPost,
  getGithubRepos,
  getCurrentProfile
})(PostForm);
