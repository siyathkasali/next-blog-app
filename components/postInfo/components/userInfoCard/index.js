import React from 'react'
import PropTypes from 'prop-types';

import styles from './UserInfo.module.scss'

const UserInfo = ({ userDetails }) => {
  const { name, username, email, address, phone, company, website } = userDetails[0];
  const { suite, street, city, zipcode } = address;

  return (
    <div className={styles.userInfo}>
      <div className={styles.userName}>
        {name}
        <span className={styles.userShortName}>@{username}</span>
      </div>
      <div>
        <p className={`${styles.contactInformation}`}><strong>Contact Information</strong></p>
      </div>
      <div className={`${styles.userCompany} ${styles.my1}`}>
        <p className={styles.paragraph}><strong>Company:</strong></p>
        <span className={`${styles.userCompanyDetails} ${styles.mL1}`}>{company.name}</span>
      </div>
      <div className={`${styles.userPhone} ${styles.my1}`}>
        <p className={styles.paragraph}><strong>Phone:</strong></p>
        <span className={`${styles.userPhoneDetails} ${styles.mL1}`}>{phone}</span>
      </div>
      <div className={`${styles.userEmail} ${styles.my1}`}>
        <p className={styles.paragraph}><strong>Email:</strong></p>
        <span className={`${styles.userEmailDetails} ${styles.mL1}`}>{email}</span>
      </div>
      <div className={`${styles.userWebsite} ${styles.my1}`}>
        <p className={styles.paragraph}><strong>website:</strong></p>
        <span className={`${styles.userWebsiteDetails} ${styles.mL1}`}>{email}</span>
      </div>
      <div className={`${styles.userAddress} ${styles.my1}`}>
        <p className={styles.paragraph}><strong>Address:</strong></p>
        <span className={`${styles.userAddressDetails} ${styles.mL1}`}>{suite}, {street}, {city}, {zipcode}</span>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  userDetails: PropTypes.array,
};

export default UserInfo;
