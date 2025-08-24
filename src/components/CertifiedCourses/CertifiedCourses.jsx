import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Star, Trophy, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import styles from './CertifiedCourses.module.css';

const CertifiedCourses = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'State Approved',
      description: 'Official government recognition for all our certifications',
      color: '#667eea'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Industry Recognized',
      description: 'Valued by top employers across all industries',
      color: '#f093fb'
    },
    {
      icon: <Star size={24} />,
      title: 'Career Boost',
      description: 'Average 40% salary increase after certification',
      color: '#4facfe'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Lifetime Valid',
      description: 'Your certificates never expire and remain valid forever',
      color: '#a8edea'
    }
  ];



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

  return (
    <section className={styles.certifiedCourses}>
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
            duration: 15,
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
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Certificate Icons Floating */}
        <div className={styles.floatingIcons}>
          {[Award, Shield, Trophy, Star, CheckCircle].map((Icon, index) => (
            <motion.div
              key={index}
              className={styles.floatingIcon}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + (index * 18)}%`,
                top: `${15 + (index % 2) * 60}%`
              }}
            >
              <Icon size={20} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
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
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              🏆
            </motion.span>
            <span>State Approved Certifications</span>
          </motion.div>

          {/* Main Content */}
          <motion.h2 className={styles.title} variants={itemVariants}>
            Earn{' '}
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
              Official Certificates
            </motion.span>
            {' '}That Matter
          </motion.h2>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Transform your career with state-approved certifications that are recognized 
            nationwide. Our official credentials open doors to new opportunities and 
            validate your expertise in the eyes of employers.
          </motion.p>

          <motion.div className={styles.motivationalText} variants={itemVariants}>
            <h3>Why Choose State-Approved Certifications?</h3>
            <p>
              In today's competitive job market, having official recognition isn't just an 
              advantage—it's essential. Our state-approved certifications provide the 
              credibility and trust that employers demand, ensuring your skills are 
              acknowledged and valued across industries.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div className={styles.featuresGrid} variants={itemVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: `0 20px 40px ${feature.color}20`
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                <motion.div 
                  className={styles.featureIcon}
                  style={{ color: feature.color }}
                  animate={{
                    scale: hoveredFeature === index ? 1.2 : 1,
                    rotate: hoveredFeature === index ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          

          {/* Call to Action */}
          <motion.div className={styles.ctaSection} variants={itemVariants}>
            <motion.button 
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap size={24} />
              <span>Get Certified Now</span>
              <ArrowRight size={20} />
              <motion.div 
                className={styles.btnShine}
                animate={{
                  x: [-100, 400]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            <motion.p 
              className={styles.ctaSubtext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Join thousands of professionals who have elevated their careers with our 
              state-approved certifications. Your future starts today!
            </motion.p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div className={styles.trustSection} variants={itemVariants}>
            <div className={styles.trustBadges}>
              <motion.div 
                className={styles.trustBadge}
                whileHover={{ scale: 1.05 }}
              >
                <Shield size={18} />
                <span>Government Approved</span>
              </motion.div>
              <motion.div 
                className={styles.trustBadge}
                whileHover={{ scale: 1.05 }}
              >
                <Award size={18} />
                <span>Industry Recognized</span>
              </motion.div>
              <motion.div 
                className={styles.trustBadge}
                whileHover={{ scale: 1.05 }}
              >
                <Star size={18} />
                <span>Quality Assured</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertifiedCourses;
