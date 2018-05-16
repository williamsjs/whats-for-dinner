import React from 'react';
import LoginForm from '../shared/LoginForm/LoginForm';
import DropdownMenu from '../shared/DropdownMenu/DropdownMenu';
import DropdownBtn from '../shared/DropdownBtn/DropdownBtn';
import IoIosContact from 'react-icons/lib/io/ios-contact';

const ProfileDropdown = ({toggleDropdown, dropdownActive}) => {
  return (
    <div className="position-relative">
      <DropdownBtn onClick={toggleDropdown}>
        <IoIosContact />&nbsp;
        <span className="profile-text">My Profile</span>
      </DropdownBtn>
      <DropdownMenu active={dropdownActive} style={{right: '0'}} >
        <LoginForm />
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;