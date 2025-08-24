import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Track mouse movement for interactive elements
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };



  return (
    <motion.section 
      className={styles.banner}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {/* Floating Orbs */}
        <motion.div 
          className={styles.orb1}
          variants={floatingVariants}
          animate="animate"
          style={{
            x: useTransform(scrollY, [0, 1000], [0, -100]),
          }}
        />
        <motion.div 
          className={styles.orb2}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          style={{
            x: useTransform(scrollY, [0, 1000], [0, 100]),
          }}
        />
        <motion.div 
          className={styles.orb3}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Interactive Mouse Follower */}
        <motion.div
          className={styles.mouseFollower}
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Grid Pattern */}
        <div className={styles.gridPattern} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={16} />
            <span>New Cohort Starting Soon</span>
            <motion.div 
              className={styles.badgePulse}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className={styles.title}
            variants={itemVariants}
          >
            Master{' '}
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
              Future Skills
            </motion.span>
            {' '}Today
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            variants={itemVariants}
          >
            Transform your career with hands-on training in the most in-demand tech skills. 
            Join thousands of successful graduates at Yesly Training Center.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className={styles.buttonGroup}
            variants={itemVariants}
          >
            <motion.button 
              className={styles.primaryBtn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Learning</span>
              <ArrowRight size={20} />
              <motion.div 
                className={styles.btnShine}
                animate={{
                  x: [-100, 300]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
            
            <motion.button 
              className={styles.secondaryBtn}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={styles.playIconWrapper}
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Play size={18} fill="white" />
              </motion.div>
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Visual Elements Side */}
        <motion.div 
          className={styles.visualSection}
          style={{ y }}
        >
          {/* Main Visual Card */}
          <motion.div 
            className={styles.visualCard}
            initial={{ opacity: 0, scale: 0.8, rotateY: 25 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ 
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Card Header */}
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.cardTitle}>Live Coding Session</span>
            </div>

            {/* Code Animation */}
            <div className={styles.codeSection}>
              <motion.div 
                className={styles.codeLine}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
              />
              <motion.div 
                className={styles.codeLine}
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ delay: 1.5, duration: 1 }}
              />
              <motion.div 
                className={styles.codeLine}
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ delay: 2, duration: 1 }}
              />
            </div>

            {/* Floating Skills */}
            <div className={styles.floatingSkills}>
              {['React', 'Node.js', 'Python', 'Design'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className={styles.skillTag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 + (index * 0.2) }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Icons */}
          <div className={styles.floatingIcons}>
            <motion.div 
              className={styles.floatingIcon}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
            <motion.div 
              className={styles.floatingIcon}
              animate={{
                y: [10, -10, 10],
                rotate: [360, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🚀
            </motion.div>
            <motion.div 
              className={styles.floatingIcon}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, -360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div className={styles.scrollDot}></div>
        <span>Scroll to explore</span>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
