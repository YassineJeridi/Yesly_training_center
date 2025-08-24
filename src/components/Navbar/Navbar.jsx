import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Courses', 
      href: '#courses',
      dropdown: [
        { name: 'Digital Marketing', href: '#digital-marketing' },
        { name: 'Web Development', href: '#web-development' },
        { name: 'Mobile Development', href: '#mobile-development' },
        { name: 'Graphic Design', href: '#graphic-design' },
        { name: 'Video Production', href: '#video-production' }
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.container}>
        {/* Logo Section */}
        <motion.div 
          className={styles.logoSection}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/assets/yesly logo.png" 
            alt="Yesly Training Center" 
            className={styles.logo}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className={styles.navItem}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  className={styles.navLink}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} className={styles.dropdownIcon} />}
                </motion.a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <motion.div 
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: activeDropdown === index ? 1 : 0,
                      y: activeDropdown === index ? 0 : -10
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ 
                      pointerEvents: activeDropdown === index ? 'auto' : 'none'
                    }}
                  >
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <motion.a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={styles.dropdownLink}
                        whileHover={{ x: 5, backgroundColor: 'rgba(102, 126, 234, 0.1)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeDropdown === index ? 1 : 0 }}
                        transition={{ delay: dropIndex * 0.05 }}
                      >
                        {dropdownItem.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <motion.a 
              href="tel:+1234567890"
              className={styles.contactBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              <span>Call Us</span>
            </motion.a>
            
            <motion.button 
              className={styles.bookBtn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              <span>Book Now</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>

        {/* Mobile Navigation */}
        <motion.div 
          className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.mobileNavContent}>
            {navItems.map((item, index) => (
              <div key={item.name} className={styles.mobileNavItem}>
                <motion.a
                  href={item.href}
                  className={styles.mobileNavLink}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: isOpen ? 0 : -50,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
                
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className={styles.mobileDropdown}>
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <motion.a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={styles.mobileDropdownLink}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ 
                          x: isOpen ? 0 : -30,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ delay: (index * 0.1) + (dropIndex * 0.05) + 0.1 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className={styles.mobileCTA}>
              <motion.a 
                href="tel:+1234567890"
                className={styles.mobileContactBtn}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isOpen ? 0 : 20,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                <span>Call Us Now</span>
              </motion.a>
              
              <motion.button 
                className={styles.mobileBookBtn}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isOpen ? 0 : 20,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
              >
                <Mail size={18} />
                <span>Book Consultation</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
