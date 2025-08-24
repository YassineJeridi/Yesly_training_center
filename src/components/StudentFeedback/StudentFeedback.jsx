import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, Star, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import feedbackData from '../../data/feedback.json';
import styles from './StudentFeedback.module.css';

const StudentFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % feedbackData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % feedbackData.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className={styles.studentFeedback}>
      {/* Simple Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.orb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.orb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Simple Badge */}
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Quote size={16} />
            <span>Student Reviews</span>
          </motion.div>

          <motion.h2 className={styles.title} variants={itemVariants}>
            What Our{' '}
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
              Students Say
            </motion.span>
          </motion.h2>
          
          <motion.p className={styles.subtitle} variants={itemVariants}>
            Real feedback from real students who transformed their careers
          </motion.p>
        </motion.div>

        {/* Simple Testimonial Slider */}
        <motion.div 
          className={styles.testimonialContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Navigation Buttons */}
          <motion.button 
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={goToPrevious}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button 
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={goToNext}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonial Card */}
          <div className={styles.cardContainer}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.testimonialCard}
              >
                {/* Student Image */}
                <motion.div 
                  className={styles.imageContainer}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <img 
                    src={feedbackData[currentIndex].image} 
                    alt={feedbackData[currentIndex].name}
                    className={styles.studentImage}
                  />
                  <motion.div 
                    className={styles.imageRing}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Student Name */}
                <motion.h3 
                  className={styles.studentName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {feedbackData[currentIndex].name}
                </motion.h3>

                {/* Rating Stars */}
                <motion.div 
                  className={styles.rating}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.6 + (i * 0.1),
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <Star size={16} fill="#f093fb" color="#f093fb" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.div 
                  className={styles.quoteContainer}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Quote className={styles.quoteIcon} size={24} />
                  <p className={styles.comment} dir="rtl">
                    {feedbackData[currentIndex].comment}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simple Dots Indicator */}
          <div className={styles.indicators}>
            {feedbackData.map((_, index) => (
              <motion.div
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                  opacity: index === currentIndex ? 1 : 0.5
                }}
                whileHover={{ scale: 1.3 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Simple Call to Action */}
        <motion.div 
          className={styles.cta}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className={styles.ctaTitle}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to Join Them?
          </motion.h3>
          
          <motion.button 
            className={styles.callButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(102, 126, 234, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 5px 15px rgba(102, 126, 234, 0.2)',
                '0 8px 25px rgba(102, 126, 234, 0.4)',
                '0 5px 15px rgba(102, 126, 234, 0.2)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Phone size={20} />
            <span>Call Us Now</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentFeedback;
