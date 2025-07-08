import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const BlogSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      title: "Going DEET-Free: How Our Herbal Mosquito Repellent Protects You",
      excerpt: "Learn about the natural ingredients in Mossant that provide safe, long-lasting mosquito protection without chemicals.",
      category: "Natural Solutions",
      date: "June 15, 2023"
    },
    {
      id: 2,
      title: "More Freely: How Herbal Pain Relief Oil Eases Aches",
      excerpt: "Discover how ingredients like arnica and eucalyptus in Activ-P Oil help reduce pain and inflammation naturally.",
      category: "Wellness",
      date: "May 28, 2023"
    },
    {
      id: 3,
      title: "Breathe Easy: Natural Solutions for Sinus Relief",
      excerpt: "Explore effective herbal remedies (like Zest) that clear congestion and support easy breathing during colds or allergies.",
      category: "Respiratory Health",
      date: "April 12, 2023"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="blog-section"
      style={styles.section}
    >
      {/* Section header */}
      <div style={styles.header}>
        <h2 style={styles.title}>
          From Our Blog
          <div 
            style={{
              ...styles.titleUnderline,
              width: inView ? '80px' : '0'
            }} 
          />
        </h2>
        <p style={styles.subtitle}>Latest insights and health tips</p>
      </div>

      {/* Blog grid - wider cards with no images */}
      <div style={styles.grid}>
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 15px 40px rgba(68, 194, 199, 0.15)'
            }}
          >
            <div style={styles.cardContent}>
              <div style={styles.category}>{post.category}</div>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.excerpt}>{post.excerpt}</p>
              <div style={styles.footer}>
                <div style={styles.date}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888" viewBox="0 0 16 16">
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  </svg>
                  {post.date}
                </div>
                <div 
                  style={styles.readMore}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('svg').style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('svg').style.transform = 'translateX(0)';
                  }}
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    fill="#44c2c7"
                    style={styles.readMoreIcon}
                  >
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA button */}
      <div style={styles.ctaContainer}>
        <motion.button
          style={styles.ctaButton}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(68, 194, 199, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          View All Blog Posts
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            fill="white"
            style={styles.ctaIcon}
          >
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

// CSS Styles separated from JSX
const styles = {
  section: {    
    margin: '2rem 1rem',
    padding: '0 0rem',
    position: 'relative'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#44c2c7',
    marginBottom: '1rem',
    position: 'relative',
    display: 'inline-block'
  },
  titleUnderline: {
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '4px',
    background: '#44c2c7',
    borderRadius: '2px',
    transition: 'width 0.6s ease 0.4s'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '2.5rem',
    fontWeight: '500'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(390px, 3fr))',
    gap: '1rem',
    marginTop: '2rem'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s ease', // Shorter height
    width: '400 px',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  category: {
    display: 'inline-block',
    backgroundColor: '#e6f9f9',
    color: '#44c2c7',
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1.2rem',
    alignSelf: 'flex-start'
  },
  postTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#2a2a2a',
    marginBottom: '1.2rem',
    lineHeight: '1.4'
  },
  excerpt: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '1.8rem',
    flexGrow: 1
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  },
  date: {
    fontSize: '0.95rem',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  readMore: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '1.05rem',
    color: '#44c2c7',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  readMoreIcon: {
    marginLeft: '8px',
    transition: 'transform 0.3s ease'
  },
  ctaContainer: {
    textAlign: 'center',
    marginTop: '4rem'
  },
  ctaButton: {
    background: '#44c2c7',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.8rem',
    boxShadow: '0 5px 20px rgba(68, 194, 199, 0.3)',
    transition: 'all 0.3s ease'
  },
  ctaIcon: {
    transition: 'transform 0.3s ease'
  },
  
  // Responsive styles
  '@media (max-width: 768px)': {
    grid: {
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    card: {
      height: 'auto',
      minHeight: '260px'
    }
  }
};

export default BlogSection;