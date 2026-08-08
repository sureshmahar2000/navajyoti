import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseGrid = () => {
  const navigate = useNavigate();

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
      duration: '3 Months',
      level: 'Intermediate',
      syllabus: ['Python Basics & OOP', 'Data Structures & Algorithms', 'Web Development with Django', 'Data Analysis with Pandas', 'Machine Learning with scikit-learn']
    },
    { 
      id: 2, 
      title: 'DevOps Engineering', 
      badge: 'Advanced', 
      desc: 'CI/CD pipelines, Docker, Kubernetes, AWS cloud, and infrastructure automation.',
      duration: '4 Months',
      level: 'Advanced',
      syllabus: ['Version Control with Git', 'CI/CD with Jenkins', 'Docker & Containerization', 'Kubernetes Orchestration', 'AWS & Terraform']
    },
    { 
      id: 3, 
      title: 'Cybersecurity', 
      badge: 'Expert', 
      desc: 'Ethical hacking, threat analysis, security compliance, and risk management.',
      duration: '4 Months',
      level: 'Expert',
      syllabus: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Compliance (GDPR/HIPAA)', 'Incident Response']
    },
    { 
      id: 4, 
      title: 'Cloud Architecture', 
      badge: 'Professional', 
      desc: 'Design and deploy scalable systems on AWS, Azure, and Google Cloud.',
      duration: '3 Months',
      level: 'Professional',
      syllabus: ['AWS EC2, S3, VPC', 'AWS Lambda & RDS', 'Azure Fundamentals', 'Google Cloud Platform', 'Cloud Security & Cost Optimization']
    },
    { 
      id: 5, 
      title: 'Data Analytics', 
      badge: 'Beginner+', 
      desc: 'SQL, Python (Pandas), Power BI, and data visualization techniques.',
      duration: '3 Months',
      level: 'Beginner+',
      syllabus: ['SQL for Data Analysis', 'Python with Pandas', 'Data Cleaning & Preparation', 'Power BI Dashboards', 'Data Visualization with Tableau']
    },
    { 
      id: 6, 
      title: 'Full Stack Web', 
      badge: 'Intermediate', 
      desc: 'React, Node.js, MongoDB, and modern full-stack web development.',
      duration: '4 Months',
      level: 'Intermediate',
      syllabus: ['HTML/CSS/JavaScript', 'React & Redux', 'Node.js & Express', 'MongoDB & Mongoose', 'REST API Design & Deployment']
    }
  ];

  const handleViewCourse = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <section id="courses">
      <h2 className="section-title">Our Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={course.id} className="course-card" onClick={() => handleViewCourse(course.id)}>
            <img 
              src={courseImages[index % courseImages.length]} 
              alt={course.title} 
            />
            <h3>{course.title}</h3>
            <span className={`badge ${course.id === 3 ? 'badge-cyber' : ''}`}>
              {course.level}
            </span>
            <p>{course.desc}</p>
            <button className="btn-view" onClick={(e) => {
              e.stopPropagation();
              handleViewCourse(course.id);
            }}>
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;