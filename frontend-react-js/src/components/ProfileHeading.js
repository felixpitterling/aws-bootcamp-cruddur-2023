import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';


export default function ProfileHeading(props) {

    const backgroundImage = ''
    styles = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
    backgroundPosition: 'center',
    }
    return (
        <div className='activity_feed_heading profile_heading'>
            <div className='title'>{props.profile.display_name}</div>
            <div className='cruds_count'>{props.profile.cruds_count} Cruds</div>
            <div className='banner' style=styles>

                <div className='avatar'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/09/DataTNG.jpg"></img>
                </div>
            </div>

            <div className='display_name'>{props.profile.display_name}</div>
            <div className='handle'>@{props.profile.handle}</div>
            <EditProfileButton setPopped={props.profile.setPopped} />
        </div>
    );
}