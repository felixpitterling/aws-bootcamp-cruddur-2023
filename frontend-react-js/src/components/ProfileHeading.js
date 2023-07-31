import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';

import ProfileAvatar from 'components/ProfileAvatar'

export default function ProfileHeading(props) {
  const backgroundImage = 'url("https://assets.felix-cloudcamp.com/banners/banner.jpg")';
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const premium_url = `${process.env.REACT_APP_FRONTEND_URL}/payment`

  return (
    <div className='activity_feed_heading profile_heading'>
      <div className='title'>{props.profile.display_name}</div>
      <div className="cruds_count">{props.profile.cruds_count} Cruds</div>
      <div className="banner" style={styles} >
        <ProfileAvatar id={props.profile.cognito_user_uuid} />
      </div>
      <div className="info">
        <div className='id'>
          <div className="display_name">{props.profile.display_name}</div>
          <div className="handle">@{props.profile.handle}</div>
        </div>
        <EditProfileButton setPopped={props.setPopped} />
      </div>
      <div className="bio">{props.profile.bio}</div>
      <div className="premium">
        <p className="status">Account Status: {props.profile.premium_status == true ? "Premium Account" : "Free Account"}</p>
        {props.profile.premium_status == true ? null : <a href={premium_url}><button className="premiumButton">Get Premium</button></a>}
      </div>
    </div>
  );
}