import React, { useState, useEffect } from 'react';
import { FiX, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { createFranchiseApplication } from '../apis/franchiseApi';
import styles from '../styles/FranchiseFormModal.module.css';

const indianStates = [
  'Tamil Nadu',
  'Karnataka',
  'Maharashtra',
  'Telangana',
  'Kerala',
  'Andhra Pradesh',
  'Delhi',
  'Gujarat',
  'Haryana',
  'Punjab',
  'Rajasthan',
  'Uttar Pradesh',
  'West Bengal'
];

const stateCitiesMap = {
  'Tamil Nadu': [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Trichy',
    'Salem',
    'Tirunelveli',
    'Erode',
    'Tiruppur',
    'Vellore',
    'Thanjavur'
  ],
  Karnataka: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad'],
  Kerala: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'],
  Delhi: ['New Delhi', 'North Delhi', 'South Delhi'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  Haryana: ['Gurugram', 'Faridabad', 'Panipat'],
  Punjab: ['Ludhiana', 'Amritsar', 'Jalandhar'],
  Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur'],
  'Uttar Pradesh': ['Noida', 'Lucknow', 'Kanpur', 'Agra'],
  'West Bengal': ['Kolkata', 'Howrah', 'Siliguri']
};

const defaultCitiesList = [
  'Chennai',
  'Coimbatore',
  'Madurai',
  'Trichy',
  'Salem',
  'Tirunelveli',
  'Erode',
  'Tiruppur',
  'Vellore',
  'Thanjavur',
  'Bengaluru',
  'Mumbai',
  'Delhi',
  'Hyderabad',
  'Pune',
  'Kochi'
];

const FranchiseFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    state: '',
    city: '',
    companyName: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Background Scroll Lock (Lock HTML and Body scrolling cleanly)
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow letters and spaces only
    if (value === '' || /^[a-zA-Z\s]+$/.test(value)) {
      setFormData((prev) => ({ ...prev, fullName: value }));
      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Digits only, max 10 characters
    const cleanDigits = value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, mobileNumber: cleanDigits }));
    if (errors.mobileNumber) setErrors((prev) => ({ ...prev, mobileNumber: '' }));
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setFormData((prev) => ({
      ...prev,
      state: newState,
      city: '' // Reset city selection when state changes
    }));
    if (errors.state) setErrors((prev) => ({ ...prev, state: '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = 'Full Name must contain letters and spaces only.';
    }

    // Phone Number validation
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Phone Number is required.';
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'Phone Number must be exactly 10 digits.';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // State validation
    if (!formData.state) {
      newErrors.state = 'Please select a State.';
    }

    // City validation
    if (!formData.city) {
      newErrors.city = 'Please select a City.';
    }

    // Business Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Business / Company Name is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        fullName: formData.fullName,
        phoneNumber: formData.mobileNumber,
        email: formData.email,
        state: formData.state,
        city: formData.city,
        companyName: formData.companyName,
      };

      const result = await createFranchiseApplication(payload);

      if (result && result.status) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          mobileNumber: '',
          email: '',
          state: '',
          city: '',
          companyName: ''
        });
        setErrors({});
      } else {
        setApiError(result?.message || 'Failed to submit franchise application. Please try again.');
      }
    } catch (err) {
      console.error('Franchise application submission error:', err);
      setApiError(err.message || 'Failed to submit franchise application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setApiError('');
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      state: '',
      city: '',
      companyName: ''
    });
    setErrors({});
    onClose();
  };

  // Available cities dependent on selected State
  const availableCities = formData.state && stateCitiesMap[formData.state]
    ? stateCitiesMap[formData.state]
    : defaultCitiesList;

  return (
    <div className={styles.modalOverlay} onClick={handleResetAndClose}>
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close X Button */}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleResetAndClose}
          aria-label="Close Modal"
        >
          <FiX className={styles.closeIcon} />
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className={styles.successState}>
            <div className={styles.successIconBox}>
              <FiCheckCircle className={styles.successIcon} />
            </div>
            <h3 className={styles.successTitle}>Application Submitted!</h3>
            <p className={styles.successDesc}>
              Thank you for your interest in becoming a Trusted Network franchise partner. Our team will contact you shortly.
            </p>
            <button
              type="button"
              className={styles.doneBtn}
              onClick={handleResetAndClose}
            >
              Close
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <div className={styles.formContainer}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Apply for Franchise</h3>
              <p className={styles.modalSubtitle}>
                Take the first step towards becoming a Trusted Network franchise partner.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.formGrid} noValidate>
              {/* Row 1: Full Name | Phone Number */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  Full Name <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleNameChange}
                  placeholder="e.g. John Doe"
                  className={`${styles.inputField} ${errors.fullName ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <span className={styles.errorText}>{errors.fullName}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  Phone Number <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handlePhoneChange}
                  placeholder="10-digit phone number"
                  maxLength={10}
                  className={`${styles.inputField} ${errors.mobileNumber ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.mobileNumber && (
                  <span className={styles.errorText}>{errors.mobileNumber}</span>
                )}
              </div>

              {/* Row 2: Email | State */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  Email <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`${styles.inputField} ${errors.email ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  State <span className={styles.requiredStar}>*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleStateChange}
                  className={`${styles.selectField} ${errors.state ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select State</option>
                  {indianStates.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <span className={styles.errorText}>{errors.state}</span>
                )}
              </div>

              {/* Row 3: City | Business / Company Name */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  City <span className={styles.requiredStar}>*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${styles.selectField} ${errors.city ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select City</option>
                  {availableCities.map((ct) => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className={styles.errorText}>{errors.city}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  Business / Company Name <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Solutions Pvt Ltd"
                  className={`${styles.inputField} ${errors.companyName ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.companyName && (
                  <span className={styles.errorText}>{errors.companyName}</span>
                )}
              </div>

              {/* API Error Banner */}
              {apiError && (
                <div className={styles.apiErrorBox}>
                  {apiError}
                </div>
              )}

              {/* Compact Submit Button */}
              <div className={styles.submitWrapper}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                  <FiArrowRight className={styles.submitArrow} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FranchiseFormModal;
