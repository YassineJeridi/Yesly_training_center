import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    timeline: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courseQuestions = {
    'Digital Marketing': [
      {
        key: 'experience',
        question: 'What is your current experience level with digital marketing?',
        options: ['Complete Beginner', 'Some Experience', 'Intermediate', 'Advanced']
      },
      {
        key: 'goals',
        question: 'What are your main goals with digital marketing?',
        options: ['Start a Career', 'Grow My Business', 'Freelancing', 'Skill Enhancement']
      },
      {
        key: 'timeline',
        question: 'When would you like to start the course?',
        options: ['Immediately', 'Within 1 Month', 'Within 3 Months', 'Flexible']
      }
    ],
    'Video Production': [
      {
        key: 'experience',
        question: 'Do you have any video production experience?',
        options: ['No Experience', 'Basic Editing', 'Some Production', 'Professional Level']
      },
      {
        key: 'goals',
        question: 'What type of videos do you want to create?',
        options: ['YouTube Content', 'Marketing Videos', 'Documentaries', 'Personal Projects']
      },
      {
        key: 'timeline',
        question: 'How quickly do you want to start creating videos?',
        options: ['Start Immediately', '1-2 Weeks', '1 Month', 'No Rush']
      }
    ],
    'Graphic Design': [
      {
        key: 'experience',
        question: 'What is your design background?',
        options: ['Complete Beginner', 'Hobbyist', 'Some Training', 'Professional']
      },
      {
        key: 'goals',
        question: 'What type of design work interests you most?',
        options: ['Logo Design', 'Web Design', 'Print Design', 'Brand Identity']
      },
      {
        key: 'timeline',
        question: 'When do you plan to start your design journey?',
        options: ['Right Away', 'Next Month', 'Within 3 Months', 'Just Exploring']
      }
    ],
    'Web Development Native': [
      {
        key: 'experience',
        question: 'What is your programming experience?',
        options: ['Never Coded', 'Basic HTML/CSS', 'Some JavaScript', 'Other Languages']
      },
      {
        key: 'goals',
        question: 'What type of websites do you want to build?',
        options: ['Personal Portfolio', 'Business Websites', 'E-commerce', 'Web Apps']
      },
      {
        key: 'timeline',
        question: 'When do you want to start coding?',
        options: ['Immediately', 'Within 2 Weeks', 'Next Month', 'Flexible']
      }
    ],
    'Web Development Full Stack': [
      {
        key: 'experience',
        question: 'Do you have any web development experience?',
        options: ['Complete Beginner', 'Frontend Only', 'Backend Only', 'Some Full Stack']
      },
      {
        key: 'goals',
        question: 'What is your career goal?',
        options: ['Get First Dev Job', 'Career Change', 'Freelancing', 'Build Own Startup']
      },
      {
        key: 'timeline',
        question: 'How committed are you to learning?',
        options: ['Full-time Study', 'Part-time (Evenings)', 'Weekends Only', 'Flexible']
      }
    ],
    'Mobile Development': [
      {
        key: 'experience',
        question: 'Do you have mobile development experience?',
        options: ['No Experience', 'Web Development', 'Native Development', 'Cross-platform']
      },
      {
        key: 'goals',
        question: 'Which platform are you most interested in?',
        options: ['iOS (iPhone)', 'Android', 'Cross-platform', 'Both Native']
      },
      {
        key: 'timeline',
        question: 'When do you want to publish your first app?',
        options: ['Within 3 Months', 'Within 6 Months', 'Within 1 Year', 'No Timeline']
      }
    ],
    'Algorithmic Basics': [
      {
        key: 'experience',
        question: 'What is your programming background?',
        options: ['Never Programmed', 'Basic Syntax', 'Some Projects', 'Professional']
      },
      {
        key: 'goals',
        question: 'Why do you want to learn algorithms?',
        options: ['Job Interviews', 'Problem Solving', 'Academic Purposes', 'General Interest']
      },
      {
        key: 'timeline',
        question: 'How much time can you dedicate daily?',
        options: ['1 Hour', '2-3 Hours', '4+ Hours', 'Weekends Only']
      }
    ],
    'Python Basic': [
      {
        key: 'experience',
        question: 'Have you programmed before?',
        options: ['Complete Beginner', 'Other Languages', 'Some Python', 'Advanced']
      },
      {
        key: 'goals',
        question: 'What do you want to use Python for?',
        options: ['Data Science', 'Web Development', 'Automation', 'General Programming']
      },
      {
        key: 'timeline',
        question: 'When do you want to start building projects?',
        options: ['Immediately', '1 Month', '3 Months', 'Take My Time']
      }
    ],
    'Video Editing': [
      {
        key: 'experience',
        question: 'What is your video editing experience?',
        options: ['Never Edited', 'Basic Phone Apps', 'Some Software', 'Professional Tools']
      },
      {
        key: 'goals',
        question: 'What type of content do you want to edit?',
        options: ['Social Media', 'YouTube Videos', 'Professional Work', 'Personal Projects']
      },
      {
        key: 'timeline',
        question: 'How quickly do you need these skills?',
        options: ['Urgent (1 Week)', 'Soon (1 Month)', 'Moderate (3 Months)', 'No Rush']
      }
    ]
  };

  const questions = course ? courseQuestions[course.title] || [] : [];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuestionSelect = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { course: course?.title, ...formData });
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        goals: '',
        timeline: '',
        message: ''
      });
      onClose();
    }, 3000);
  };

  const isStep1Valid = formData.name && formData.email && formData.phone;
  const isStep2Valid = questions.every(q => formData[q.key]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.courseInfo}>
                {course && (
                  <div className={styles.courseIcon} style={{ background: course.gradient }}>
                    {course.icon}
                  </div>
                )}
                <div>
                  <h3 className={styles.modalTitle}>Register for {course?.title}</h3>
                  <p className={styles.modalSubtitle}>Step {currentStep} of 2</p>
                </div>
              </div>
              
              <motion.button
                className={styles.closeBtn}
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Progress Bar */}
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progress}
                initial={{ width: '50%' }}
                animate={{ width: currentStep === 1 ? '50%' : '100%' }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key={`step-${currentStep}`}
                  className={styles.form}
                  onSubmit={currentStep === 2 ? handleSubmit : (e) => e.preventDefault()}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && (
                    <div className={styles.step}>
                      <h4 className={styles.stepTitle}>Personal Information</h4>
                      
                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <User className={styles.inputIcon} size={18} />
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <Mail className={styles.inputIcon} size={18} />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <Phone className={styles.inputIcon} size={18} />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                          />
                        </div>
                      </div>

                      <motion.button
                        type="button"
                        className={styles.nextBtn}
                        onClick={handleNext}
                        disabled={!isStep1Valid}
                        whileHover={{ scale: isStep1Valid ? 1.02 : 1 }}
                        whileTap={{ scale: isStep1Valid ? 0.98 : 1 }}
                      >
                        Next Step
                      </motion.button>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className={styles.step}>
                      <h4 className={styles.stepTitle}>Course-Specific Questions</h4>
                      
                      {questions.map((question, index) => (
                        <div key={question.key} className={styles.questionGroup}>
                          <label className={styles.questionLabel}>
                            {question.question}
                          </label>
                          <div className={styles.optionsGrid}>
                            {question.options.map((option, optionIndex) => (
                              <motion.button
                                key={option}
                                type="button"
                                className={`${styles.optionBtn} ${
                                  formData[question.key] === option ? styles.selected : ''
                                }`}
                                onClick={() => handleQuestionSelect(question.key, option)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + optionIndex * 0.05 }}
                              >
                                {option}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <MessageCircle className={styles.inputIcon} size={18} />
                          <textarea
                            name="message"
                            placeholder="Any additional questions or comments? (Optional)"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={styles.textarea}
                            rows="3"
                          />
                        </div>
                      </div>

                      <div className={styles.buttonGroup}>
                        <motion.button
                          type="button"
                          className={styles.backBtn}
                          onClick={handleBack}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        
                        <motion.button
                          type="submit"
                          className={styles.submitBtn}
                          disabled={!isStep2Valid}
                          whileHover={{ scale: isStep2Valid ? 1.02 : 1 }}
                          whileTap={{ scale: isStep2Valid ? 0.98 : 1 }}
                        >
                          <Send size={18} />
                          <span>Submit Registration</span>
                        </motion.button>
                      </div>
                    </div>
                  )}
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
                    <CheckCircle size={60} />
                  </motion.div>
                  <h4>Registration Successful!</h4>
                  <p>Thank you for your interest in {course?.title}. We'll contact you within 24 hours to discuss the next steps.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationForm;
