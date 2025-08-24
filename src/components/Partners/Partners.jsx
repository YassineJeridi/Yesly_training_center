import { motion } from 'framer-motion';
import styles from './Partners.module.css';

const Partners = () => {
  const partners = [
    {
      name: 'ESEN Microsoft Club',
      description: 'Technology Partnership',
      logo: '/assets/partners/esen-microsoft-club-logo.jpg'
    },
    {
      name: 'IMC',
      description: 'Industry Collaboration',
      logo: '/assets/partners/IMC_LOGO.png'
    },
    {
      name: 'Redix',
      description: 'Innovation Partner',
      logo: '/assets/partners/redix logo.png'
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
    <section className={styles.partners}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.orb1}
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 180, 360],
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
            y: [30, -30, 30],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Floating Particles */}
        <div className={styles.particles}>
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className={styles.particle}
              animate={{
                y: [-20, -40, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4 + (index * 0.3),
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + (index * 10)}%`,
                top: `${20 + (index % 3) * 25}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
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
              🤝
            </motion.span>
            <span>Trusted Partnerships</span>
          </motion.div>

          <motion.h2 className={styles.title} variants={itemVariants}>
            Our{' '}
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
              Partners
            </motion.span>
          </motion.h2>
          
          <motion.p className={styles.subtitle} variants={itemVariants}>
            We collaborate with industry leaders to provide you with the best training and career opportunities
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.partnersGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={styles.partnerCard}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(102, 126, 234, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Background Glow */}
              <motion.div 
                className={styles.cardGlow}
                animate={{
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />

              {/* Logo Container */}
              <motion.div 
                className={styles.logoContainer}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.5 + (index * 0.2),
                  type: "spring",
                  stiffness: 150
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className={styles.partnerLogo}
                />
              </motion.div>

              {/* Content */}
              <motion.div 
                className={styles.partnerContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
              >
                <h3 className={styles.partnerName}>{partner.name}</h3>
                <p className={styles.partnerDescription}>{partner.description}</p>
              </motion.div>

              {/* Animated Border */}
              <motion.div
                className={styles.animatedBorder}
                animate={{
                  background: [
                    'linear-gradient(0deg, #667eea, #764ba2)',
                    'linear-gradient(90deg, #764ba2, #f093fb)',
                    'linear-gradient(180deg, #f093fb, #f5576c)',
                    'linear-gradient(270deg, #f5576c, #667eea)',
                    'linear-gradient(360deg, #667eea, #764ba2)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5
                }}
              />

              {/* Floating Dots */}
              <motion.div
                className={styles.floatingDot1}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className={styles.floatingDot2}
                animate={{
                  y: [5, -5, 5],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
