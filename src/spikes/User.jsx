import React, {Fragment, useEffect, useState} from 'react';
import {Promise} from 'bluebird';
import PropTypes from 'prop-types'

Promise.config({cancellation: true});

const fetchUser = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({id: 1, name: 'Adam'});
    }, 1000);
  });

  return () => {
    promise.cancel()
  }
}

const ShowHideUser = ({show}) => (show ? <User /> : null)

ShowHideUser.propTypes = {
  show: PropTypes.bool,
}

const User = () => {
  const [id, setId] = useState('loading...');
  const [name, setName] = useState('loading...');

  useEffect(() => {
    const promise = fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });

    return () => {
      promise.cancel();
    };
  });

  return (
    <Fragment>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </Fragment>
  );
}

const UserSpike = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide User' : 'Show User'}
      </button>
      <ShowHideUser show={show} />
    </Fragment>
  );
}

export default UserSpike
