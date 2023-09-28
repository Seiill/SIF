import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'; 

import { PopupContainer, FormContainer, CloseButton } from './NewsElements';
import {newsItems } from '../../Util/es';
const NewsletterForm = () => {
  const { t } = useTranslation();
    const [showPopup, setShowPopup] = useState(true);
    const [email, setEmail] = useState('');

    useEffect(() => {
      const hasShownPopup = localStorage.getItem('newsletterPopupShown');
      if (hasShownPopup) {
        setShowPopup(false); 
      }
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Email submitted:', email);
      
      setShowPopup(false);
      localStorage.setItem('newsletterPopupShown', 'true');
    };
  
    return (
      <div>
        {showPopup && (
          <PopupContainer>
            <FormContainer>
              <CloseButton onClick={() => setShowPopup(false)}>×</CloseButton>
              <h2>{t(newsItems.subs)}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <button type="submit">{t(newsItems.action)}</button>
              </form>
            </FormContainer>
          </PopupContainer>
        )}
      </div>
    );
  };
  
  export default NewsletterForm;