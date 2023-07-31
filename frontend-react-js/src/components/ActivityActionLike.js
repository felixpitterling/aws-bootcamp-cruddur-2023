import { ReactComponent as HeartIcon } from './svg/heart.svg';
import { post } from "lib/Requests";
import { useState, useEffect } from 'react';

export default function ActivityActionLike(props) {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  const onclick = (event) => {
    event.preventDefault()

    setCount((prevCount) => prevCount + 1);

    const url = `${process.env.REACT_APP_BACKEND_URL}/api/activities/upvote`;
    const payload_data = {
      activity_uuid: props.activity_uuid
    };
    post(url, payload_data, {
      auth: true,
      success: function (data) {
      },
      error: function (error) {
        setCount((prevCount) => prevCount - 1);
      },
    });

    return false;
  }

  let counter;
  if (count > 0) {
    counter = <div className="counter">{count}</div>;
  }

  return (
    <div onClick={onclick} className="action activity_action_heart">
      <HeartIcon className='icon' />
      {counter}
    </div>
  )
}