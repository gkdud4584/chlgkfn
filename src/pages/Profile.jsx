import React from "react";

function Profile() {
  
  const email = localStorage.getItem('email')
  const user = localStorage.getItem('user')
  
  return (
    <>
      <h1>Profile</h1>
      <dt>Name</dt>
      <dd>{user}</dd>
      <dt>Email</dt>
      <dd>{email}</dd>

    </>
  );
}

export default Profile;