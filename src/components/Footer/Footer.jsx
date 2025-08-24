import { motion } from 'framer-motion';
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUp,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { 
      icon: <Facebook size={24} />, 
      href: '#', 
      color: '#1877f2',
      name: 'Facebook'
    },
    { 
      icon: <Linkedin size={24} />, 
      href: '#', 
      color: '#0a66c2',
      name: 'LinkedIn'
    },
    { 
      icon: <Instagram size={24} />, 
      href: '#', 
      color: '#e4405f',
      name: 'Instagram'
    },
    { 
      icon: <Mail size={24} />, 
      href: 'mailto:info@yesly.com', 
      color: '#667eea',
      name: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.orb1}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.orb2}
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Floating Social Icons */}
        <div className={styles.floatingSocials}>
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className={styles.floatingSocial}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: index * 1.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + (index * 20)}%`,
                top: `${20 + (index % 2) * 40}%`,
                color: social.color
              }}
            >
              {social.icon}
            </motion.div>
          ))}
        </div>

        {/* Grid Pattern */}
        <div className={styles.gridPattern} />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Footer Content */}
          <div className={styles.mainContent}>
            {/* Logo Section */}
            <motion.div className={styles.logoSection} variants={itemVariants}>
              <motion.div 
                className={styles.logoContainer}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/assets/yesly logo.png" 
                  alt="Yesly Training Center" 
                  className={styles.logo}
                />
              </motion.div>
              
              <motion.p 
                className={styles.logoDescription}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Empowering the next generation of tech professionals through 
                innovative training and industry partnerships.
              </motion.p>
            </motion.div>

            {/* Quick Info */}
            <motion.div className={styles.quickInfo} variants={itemVariants}>
              <h4 className={styles.sectionTitle}>Get In Touch</h4>
              
              <motion.div 
                className={styles.infoItem}
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} className={styles.infoIcon} />
                <span>Tunisia, Siliana</span>
              </motion.div>
              
              <motion.div 
                className={styles.infoItem}
                whileHover={{ x: 5 }}
              >
                <Phone size={16} className={styles.infoIcon} />
                <span>+216 XX XXX XXX</span>
              </motion.div>
              
              <motion.div 
                className={styles.infoItem}
                whileHover={{ x: 5 }}
              >
                <Clock size={16} className={styles.infoIcon} />
                <span>Mon - Fri: 8AM - 6PM</span>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            <motion.div className={styles.socialSection} variants={itemVariants}>
              <h4 className={styles.sectionTitle}>Follow Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      boxShadow: `0 10px 25px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      backgroundColor: hoveredSocial === index ? social.color : 'rgba(255, 255, 255, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredSocial === index ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className={styles.bottomSection}
            variants={itemVariants}
          >
            {/* Copyright */}
            <motion.div 
              className={styles.copyright}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className={styles.copyrightText}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                © 2024 All rights reserved by{' '}
                <motion.span 
                  className={styles.redixLink}
                  whileHover={{ scale: 1.05 }}
                >
                  Redix Digital Solutions
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Scroll to Top */}
            <motion.button 
              className={styles.scrollToTop}
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: '0 15px 30px rgba(102, 126, 234, 0.4)'
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(102, 126, 234, 0.3)',
                  '0 0 40px rgba(102, 126, 234, 0.6)',
                  '0 0 20px rgba(102, 126, 234, 0.3)'
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
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={20} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <div className={styles.decorativeElements}>
            <motion.div
              className={styles.decorativeLine}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className={styles.decorativeDot}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ 
                  delay: 1.5 + (index * 0.1),
                  type: "spring",
                  stiffness: 150
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2 + index,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + (index * 15)}%`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
