import { motion } from 'framer-motion';
import { 
  Monitor, 
  Video, 
  Palette, 
  Code, 
  Layers, 
  Smartphone, 
  Brain,
  Play,
  Edit,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import styles from './Courses.module.css';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const courses = [
    {
      title: 'Digital Marketing',
      icon: <Monitor size={28} />,
      description: 'Master SEO, social media, and online advertising strategies',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea'
    },
    {
      title: 'Video Production',
      icon: <Video size={28} />,
      description: 'Learn professional video creation and storytelling techniques',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb'
    },
    {
      title: 'Graphic Design',
      icon: <Palette size={28} />,
      description: 'Create stunning visuals and brand identities',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      title: 'Web Development Native',
      icon: <Code size={28} />,
      description: 'Build websites with HTML, CSS, and JavaScript',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      color: '#a8edea'
    },
    {
      title: 'Web Development Full Stack',
      icon: <Layers size={28} />,
      description: 'Complete web development with frontend and backend',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      color: '#ffecd2'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={28} />,
      description: 'Create mobile apps for iOS and Android platforms',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      color: '#a18cd1'
    },
    {
      title: 'Algorithmic Basics',
      icon: <Brain size={28} />,
      description: 'Master programming fundamentals and problem-solving',
      gradient: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
      color: '#fad0c4'
    },
    {
      title: 'Python Basic',
      icon: <Zap size={28} />,
      description: 'Learn Python programming from scratch to advanced',
      gradient: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
      color: '#667eea'
    },
    {
      title: 'Video Editing',
      icon: <Edit size={28} />,
      description: 'Master video editing with professional tools and techniques',
      gradient: 'linear-gradient(135deg, #f5576c 0%, #4facfe 100%)',
      color: '#f5576c'
    }
  ];

  const handleRegister = (course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
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
    <>
      <section className={styles.courses} id="courses">
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
            {[...Array(15)].map((_, index) => (
              <motion.div
                key={index}
                className={styles.particle}
                animate={{
                  y: [-20, -60, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 5 + (index * 0.2),
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${5 + (index * 6)}%`,
                  top: `${10 + (index % 4) * 20}%`
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
                📚
              </motion.span>
              <span>9 Comprehensive Courses</span>
            </motion.div>

            <motion.h2 className={styles.title} variants={itemVariants}>
              The Courses We{' '}
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
                Provide
              </motion.span>
            </motion.h2>
            
            <motion.p className={styles.subtitle} variants={itemVariants}>
              Choose from our comprehensive range of tech courses designed to boost your career
            </motion.p>
          </motion.div>

          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className={styles.courseCard}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background */}
                <motion.div 
                  className={styles.cardBackground}
                  style={{ background: course.gradient }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />

                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <motion.div 
                    className={styles.iconWrapper}
                    style={{ 
                      background: course.gradient,
                      boxShadow: `0 8px 25px ${course.color}30`
                    }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {course.icon}
                  </motion.div>
                  
                  <motion.div 
                    className={styles.courseBadge}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.5 + (index * 0.1),
                      type: "spring",
                      stiffness: 150
                    }}
                  >
                    <Play size={12} fill="white" />
                  </motion.div>
                </div>
                
                <div className={styles.cardContent}>
                  <motion.h3 
                    className={styles.courseTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                  >
                    {course.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={styles.courseDescription}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.05) }}
                  >
                    {course.description}
                  </motion.p>
                  
                  <motion.button 
                    className={styles.registerBtn}
                    onClick={() => handleRegister(course)}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 8px 25px ${course.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.05) }}
                    style={{
                      background: course.gradient
                    }}
                  >
                    <span>Register Now</span>
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
                  </motion.button>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className={styles.floatingDot1}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
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
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        course={selectedCourse}
      />
    </>
  );
};

export default Courses;
