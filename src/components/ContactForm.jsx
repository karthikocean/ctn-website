import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [comment, setComment] = useState('');

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation helper functions (Name, Email, Phone are MANDATORY)
  const validateName = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter your name.';
    }
    if (!/^[A-Za-z\s]+$/.test(val)) {
      return 'Name can contain only letters and spaces.';
    }
    return '';
  };

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter a valid email address.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validatePhone = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter a valid 10-digit phone number.';
    }
    if (!/^\d+$/.test(val) || val.length !== 10) {
      return 'Please enter a valid 10-digit phone number.';
    }
    return '';
  };

  // Field change handlers
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow typing ONLY letters and spaces
    if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
      setName(value);
      if (touched.name) {
        setErrors((prev) => ({ ...prev, name: validateName(value) }));
      }
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow typing ONLY numbers (up to 10 digits)
    if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
      setPhone(value);
      if (touched.phone) {
        setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
      }
    }
  };

  const handleEnquiryTypeChange = (e) => {
    setEnquiryType(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Blur handlers
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') setErrors((prev) => ({ ...prev, name: validateName(name) }));
    if (field === 'email') setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
    if (field === 'phone') setErrors((prev) => ({ ...prev, phone: validatePhone(phone) }));
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, phone: true });

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phone);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
    };

    setErrors(newErrors);

    if (nameErr || emailErr || phoneErr) {
      return;
    }

    // Success state
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setEnquiryType('');
    setComment('');
    setTouched({});
    setErrors({});
  };

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Send Your Enquiry</h2>
      <p className={styles.formDesc}>
        Have a question? Send us a message and our team will get back to you.
      </p>

      {isSubmitted ? (
        <div className={styles.successBox}>
          <FiCheckCircle className={styles.successIcon} />
          <h3 className={styles.successTitle}>Thank you!</h3>
          <p className={styles.successText}>
            Your enquiry has been submitted successfully.
          </p>
          <button
            className={styles.resetBtn}
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Row 1: Name & Email side-by-side on desktop/tablet */}
          <div className={styles.formRow}>
            {/* Name Field (Mandatory) */}
            <div className={styles.formGroup}>
              <label htmlFor="contact-name" className={styles.label}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={() => handleBlur('name')}
                placeholder="Enter your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              />
              {errors.name && (
                <span id="name-error" className={styles.errorText}>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field (Mandatory) */}
            <div className={styles.formGroup}>
              <label htmlFor="contact-email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur('email')}
                placeholder="Enter your email address"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && (
                <span id="email-error" className={styles.errorText}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Enquiry Type side-by-side on desktop/tablet */}
          <div className={styles.formRow}>
            {/* Phone Field (Mandatory) */}
            <div className={styles.formGroup}>
              <label htmlFor="contact-phone" className={styles.label}>
                Phone <span className={styles.required}>*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={() => handleBlur('phone')}
                placeholder="Enter 10-digit phone number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              />
              {errors.phone && (
                <span id="phone-error" className={styles.errorText}>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Enquiry Type Field (Optional) */}
            <div className={styles.formGroup}>
              <label htmlFor="contact-enquiry-type" className={styles.label}>
                Enquiry Type
              </label>
              <select
                id="contact-enquiry-type"
                value={enquiryType}
                onChange={handleEnquiryTypeChange}
                className={styles.selectInput}
              >
                <option value="">Select an enquiry type</option>
                <option value="Membership">Membership</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>
          </div>

          {/* Row 3: Write a Comment (Full width) */}
          <div className={styles.formGroupFull}>
            <label htmlFor="contact-comment" className={styles.label}>
              Write a Comment
            </label>
            <textarea
              id="contact-comment"
              rows={4}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your message here..."
              className={styles.textarea}
            />
          </div>

          {/* Row 4: Compact Send Message Button */}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitBtn}>
              <span>Send Message</span>
              <FiSend className={styles.btnIcon} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
