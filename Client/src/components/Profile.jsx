import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ showAlert }) => {
  const host = 'http://localhost:5000';
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        showAlert('Please login to view your profile', 'warning');
        navigate('/login');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${host}/api/auth/getuser`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'auth-token': token,
          },
        });

        const json = await response.json();
        if (response.ok && json?._id) {
          setProfile(json);
        } else {
          const errorMessage = json?.error || 'Unable to load profile';
          showAlert(errorMessage, 'danger');
        }
      } catch (error) {
        console.error(error);
        showAlert('Unable to connect to server. Please try again.', 'danger');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [host, navigate, showAlert]);

  if (loading) {
    return (
      <div className="profile-wrapper">
        <div className="profile-card text-center">
          <h4 className="mb-2">Loading profile...</h4>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="profile-wrapper">
        <div className="profile-card text-center">
          <h4 className="mb-2">Profile unavailable</h4>
          <p className="mb-0 text-muted">Please try again after login.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-avatar">{profile.name.charAt(0).toUpperCase()}</div>
        <h2 className="profile-title">{profile.name}</h2>
        <p className="auth-subtitle">{profile.email}</p>
        <div className="profile-row">
          <span className="profile-label">Full Name</span>
          <span className="profile-value">{profile.name}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{profile.email}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Member Since</span>
          <span className="profile-value">{new Date(profile.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
