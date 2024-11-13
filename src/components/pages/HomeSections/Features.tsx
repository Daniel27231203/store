import React from 'react';
import scss from './Features.module.scss'
import { FaHandHoldingUsd, FaTruck } from 'react-icons/fa';
import { SlEarphonesAlt } from 'react-icons/sl';
const Features = () => {
    return (
    <section className={scss.features}>
      <div className={scss.container}>
<div className={scss.content}>
<div className={scss.featuresContainer}>
        <div className={scss.feature}>
          <div className={scss.featureIcon}><FaTruck /></div>
          <div className={scss.featureTitle}>FREE AND FAST DELIVERY</div>
          <div className={scss.featureDescription}>Free delivery for all orders over $140</div>
        </div>
        <div className={scss.feature}>
          <div className={scss.featureIcon}><SlEarphonesAlt /> </div>
          <div className={scss.featureTitle}>24/7 CUSTOMER SERVICE</div>
          <div className={scss.featureDescription}>Friendly 24/7 customer support</div>
        </div>
        <div className={scss.feature}>
          <div className={scss.featureIcon}><FaHandHoldingUsd /></div>
          <div className={scss.featureTitle}>MONEY BACK GUARANTEE</div>
          <div className={scss.featureDescription}>We return money within 30 days</div>
        </div>
      </div>
</div>
      </div>

    </section>
  
    );
};

export default Features;