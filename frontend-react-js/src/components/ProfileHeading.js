import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';


export default function ProfileHeading(props) {

    // const backgroundImage = 'url("https://pbs.twimg.com/media/D-jnKUPU4AE3hVR.jpg")'
    const backgroundImage = 'url("https://assets.felix-cloudcamp.com/banners/banner.jpg")'
    const styles = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className='activity_feed_heading profile_heading'>
            <div className='title'>{props.profile.display_name}</div>
            <div className='cruds_count'>{props.profile.cruds_count} Cruds</div>
            <div className='banner' style={styles}>

                <div className='avatar'>
                    <img src="https://assets.felix-cloudcamp.com/avatars/data.jpg"></img>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/en/0/09/DataTNG.jpg"></img> */}
                </div>
            </div>
            <div className='info'>
                <div className='id'>
                    <div className='display_name'>{props.profile.display_name}</div>
                    <div className='handle'>@{props.profile.handle}</div>
                </div>
                <EditProfileButton setPopped={props.setPopped} />
            </div>
            <div class="bio">{props.profile.bio}</div>
        </div>
    );
}