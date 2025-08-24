import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';
import { useState, useRef } from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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
    <motion.section 
      ref={sectionRef}
      className={styles.videoSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.orb1}
          style={{ y }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className={styles.orb2}
          style={{ y: useTransform(y, value => -value) }}
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Particles */}
        <div className={styles.particles}>
          {[...Array(12)].map((_, index) => (
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
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + (index * 7)}%`,
                top: `${20 + (index % 3) * 20}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Content Section - Centered */}
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
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              🎬
            </motion.span>
            <span>Virtual Tour Available</span>
          </motion.div>

          <motion.h2 className={styles.title} variants={itemVariants}>
            Discover Our{' '}
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
              Training Center
            </motion.span>
          </motion.h2>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Take a virtual tour of our state-of-the-art facilities and meet our expert 
            instructors who are passionate about helping you succeed in your tech journey.
          </motion.p>
        </motion.div>

        {/* Video Player Section - Centered */}
        <motion.div 
          className={styles.videoContainer}
          variants={itemVariants}
          style={{ opacity }}
        >
          <motion.div 
            className={styles.videoWrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className={styles.video}
              poster="/api/placeholder/800/450" // You can replace with actual poster
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            <motion.div 
              className={styles.videoOverlay}
              animate={{
                opacity: isPlaying && !isHovered ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Play Button */}
              <motion.button
                className={styles.playButton}
                onClick={handlePlayPause}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(102, 126, 234, 0.5)',
                    '0 0 50px rgba(102, 126, 234, 0.8)',
                    '0 0 30px rgba(102, 126, 234, 0.5)'
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
                  animate={{ scale: isPlaying ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play size={30} fill="white" />
                </motion.div>
                <motion.div
                  animate={{ scale: isPlaying ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'absolute' }}
                >
                  <Pause size={30} fill="white" />
                </motion.div>
              </motion.button>

              {/* Video Info */}
              <div className={styles.videoInfo}>
                <h3>Training Center Virtual Tour</h3>
                <p>Get an inside look at our facilities</p>
              </div>
            </motion.div>

            {/* Video Controls */}
            <motion.div 
              className={styles.videoControls}
              animate={{
                opacity: isHovered || !isPlaying ? 1 : 0,
                y: isHovered || !isPlaying ? 0 : 20
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.button 
                className={styles.controlBtn}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Volume2 size={18} />
              </motion.button>
              <motion.button 
                className={styles.controlBtn}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Maximize size={18} />
              </motion.button>
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
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Floating Stats */}
          <div className={styles.floatingStats}>
            <motion.div
              className={styles.statBubble}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ top: '10%', right: '-10%' }}
            >
              <span className={styles.statNumber}>2000+</span>
              <span className={styles.statLabel}>Students</span>
            </motion.div>

            <motion.div
              className={styles.statBubble}
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={{ bottom: '20%', left: '-15%' }}
            >
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Courses</span>
            </motion.div>

            <motion.div
              className={styles.statBubble}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 10, 0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              style={{ top: '60%', right: '-5%' }}
            >
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Success</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
