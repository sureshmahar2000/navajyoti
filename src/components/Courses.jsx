import React from 'react';

const Courses = () => {
  // High-quality online images for courses
  const courseImages = [
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
  ];

  const courses = [
    { 
      id: 1, 
      title: 'Python Mastery', 
      badge: 'Intermediate', 
      desc: 'From fundamentals to data science, automation, and AI. Build real-world projects.',
      badgeClass: ''
    },
    { 
      id: 2, 
      title: 'DevOps Engineering', 
      badge: 'Advanced', 
      desc: 'CI/CD pipelines, Docker, Kubernetes, AWS cloud, and infrastructure automation.',
      badgeClass: ''
    },
    { 
      id: 3, 
      title: 'Cybersecurity', 
      badge: 'Expert', 
      desc: 'Ethical hacking, threat analysis, security compliance, and risk management.',
      badgeClass: 'badge-cyber'
    },
    { 
      id: 4, 
      title: 'Cloud Architecture', 
      badge: 'Professional', 
      desc: 'Design and deploy scalable systems on AWS, Azure, and Google Cloud.',
      badgeClass: ''
    },
    { 
      id: 5, 
      title: 'Data Analytics', 
      badge: 'Beginner+', 
      desc: 'SQL, Python (Pandas), Power BI, and data visualization techniques.',
      badgeClass: ''
    },
    { 
      id: 6, 
      title: 'Full Stack Web', 
      badge: 'Intermediate', 
      desc: 'React, Node.js, MongoDB, and modern full-stack web development.',
      badgeClass: ''
    }
  ];

  return (
    <section id="courses">
      <h2 className="section-title">Our Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={course.id} className="course-card">
            <img 
              src={courseImages[index % courseImages.length]} 
              alt={course.title} 
            />
            <h3>{course.title}</h3>
            <span className={`badge ${course.badgeClass}`}>{course.badge}</span>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;