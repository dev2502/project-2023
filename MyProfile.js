import React from 'react';

function MyProfile() {
  const profileInfo = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '555-555-5555',
    address: '123 Main St, Anytown USA',
  };

  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: {profileInfo.name}</p>
      <p>Email: {profileInfo.email}</p>
      <p>Phone: {profileInfo.phone}</p>
      <p>Address: {profileInfo.address}</p>
    </div>
  );
}

export default MyProfile;
