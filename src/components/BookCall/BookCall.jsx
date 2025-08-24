import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, User, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import styles from './BookCall.module.css';

const BookCall = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setIsSubmitted(false);
      setIsPopupOpen(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <motion.section 
        className={styles.bookCall}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <motion.div 
            className={styles.orb1}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className={styles.orb2}
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className={styles.container}>
          <motion.div className={styles.content} variants={itemVariants}>
            {/* Badge */}
            <motion.div 
              className={styles.badge}
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(102, 126, 234, 0.3)',
                  '0 0 40px rgba(102, 126, 234, 0.6)',
                  '0 0 20px rgba(102, 126, 234, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <span>Free Consultation Available</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 className={styles.title} variants={itemVariants}>
              Ready to{' '}
              <motion.span 
                className={styles.gradientText}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Transform
              </motion.span>
              {' '}Your Career?
            </motion.h2>

            {/* Subtitle */}
            <motion.p className={styles.subtitle} variants={itemVariants}>
              Book a free consultation with our expert advisors and discover the perfect 
              learning path tailored just for you.
            </motion.p>

            {/* Action Buttons */}
            <motion.div className={styles.buttonGroup} variants={itemVariants}>
              <motion.a
                href="tel:+1234567890"
                className={styles.callBtn}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Phone size={20} />
                </motion.div>
                <span>Call Now</span>
                <motion.div 
                  className={styles.btnShine}
                  animate={{
                    x: [-100, 300]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>

              <motion.button
                className={styles.messageBtn}
                onClick={() => setIsPopupOpen(true)}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(245, 87, 108, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <MessageCircle size={20} />
                </motion.div>
                <span>Send a Message</span>
              </motion.button>
            </motion.div>

            {/* Features */}
          </motion.div>
        </div>
      </motion.section>

      {/* Popup Form */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              className={styles.popup}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.popupHeader}>
                <motion.h3 className={styles.popupTitle}>
                  Get in Touch
                </motion.h3>
                <motion.button
                  className={styles.closeBtn}
                  onClick={() => setIsPopupOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    className={styles.form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div 
                      className={styles.inputGroup}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className={styles.inputWrapper}>
                        <User className={styles.inputIcon} size={18} />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className={styles.inputGroup}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className={styles.inputWrapper}>
                        <Phone className={styles.inputIcon} size={18} />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className={styles.inputGroup}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className={styles.inputWrapper}>
                        <MessageCircle className={styles.inputIcon} size={18} />
                        <textarea
                          name="message"
                          placeholder="Tell us about your goals and interests..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className={styles.textarea}
                          rows="4"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className={styles.submitBtn}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Send size={18} />
                      <span>Send Message</span>
                      <motion.div 
                        className={styles.btnShine}
                        animate={{ x: [-100, 300] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className={styles.successMessage}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    <motion.div
                      className={styles.successIcon}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut"
                      }}
                    >
                      <CheckCircle size={50} />
                    </motion.div>
                    <h4>Message Sent Successfully!</h4>
                    <p>We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookCall;
