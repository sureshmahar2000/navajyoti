import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const courseImages = [
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
  ];

  const courses = [
    { 
      id: 1, 
      title: 'Python Mastery', 
      badge: 'Intermediate', 
      desc: 'From fundamentals to data science, automation, and AI. Build real-world projects.',
      fullDesc: 'This comprehensive course covers Python from basics to advanced topics including data structures, algorithms, web development with Django, data analysis with Pandas, and machine learning with scikit-learn. You\'ll work on 5+ real-world projects.',
      duration: '3 Months',
      level: 'Intermediate',
      price: 'NPR 45,000',
      syllabus: ['Python Basics & OOP', 'Data Structures & Algorithms', 'Web Development with Django', 'Data Analysis with Pandas', 'Machine Learning with scikit-learn', 'Final Capstone Project']
    },
    { 
      id: 2, 
      title: 'DevOps Engineering', 
      badge: 'Advanced', 
      desc: 'CI/CD pipelines, Docker, Kubernetes, AWS cloud, and infrastructure automation.',
      fullDesc: 'Master the DevOps lifecycle including version control with Git, continuous integration with Jenkins, containerization with Docker, orchestration with Kubernetes, and infrastructure as code with Terraform on AWS.',
      duration: '4 Months',
      level: 'Advanced',
      price: 'NPR 55,000',
      syllabus: ['Version Control with Git', 'CI/CD with Jenkins', 'Docker & Containerization', 'Kubernetes Orchestration', 'AWS & Terraform', 'Monitoring with Prometheus']
    },
    { 
      id: 3, 
      title: 'Cybersecurity', 
      badge: 'Expert', 
      desc: 'Ethical hacking, threat analysis, security compliance, and risk management.',
      fullDesc: 'Learn ethical hacking, penetration testing, network security, cryptography, security compliance (GDPR, HIPAA), and incident response. Prepare for CEH and CISSP certifications.',
      duration: '4 Months',
      level: 'Expert',
      price: 'NPR 50,000',
      syllabus: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Compliance (GDPR/HIPAA)', 'Incident Response', 'Cryptography & Risk Management']
    },
    { 
      id: 4, 
      title: 'Cloud Architecture', 
      badge: 'Professional', 
      desc: 'Design and deploy scalable systems on AWS, Azure, and Google Cloud.',
      fullDesc: 'Design highly available, cost-efficient, and secure cloud architectures. Hands-on experience with AWS EC2, S3, VPC, Lambda, RDS, and Azure/GCP equivalents.',
      duration: '3 Months',
      level: 'Professional',
      price: 'NPR 48,000',
      syllabus: ['AWS EC2, S3, VPC', 'AWS Lambda & RDS', 'Azure Fundamentals', 'Google Cloud Platform', 'Cloud Security & Cost Optimization', 'Multi-Cloud Architecture']
    },
    { 
      id: 5, 
      title: 'Data Analytics', 
      badge: 'Beginner+', 
      desc: 'SQL, Python (Pandas), Power BI, and data visualization techniques.',
      fullDesc: 'Transform raw data into actionable insights. Learn SQL for data extraction, Python for data cleaning and analysis, and Power BI/Tableau for creating stunning dashboards.',
      duration: '3 Months',
      level: 'Beginner+',
      price: 'NPR 40,000',
      syllabus: ['SQL for Data Analysis', 'Python with Pandas', 'Data Cleaning & Preparation', 'Power BI Dashboards', 'Data Visualization with Tableau', 'Real-World Case Studies']
    },
    { 
      id: 6, 
      title: 'Full Stack Web', 
      badge: 'Intermediate', 
      desc: 'React, Node.js, MongoDB, and modern full-stack web development.',
      fullDesc: 'Build complete web applications from scratch. Master frontend with React, backend with Node.js and Express, and database with MongoDB. Learn RESTful API design and deployment.',
      duration: '4 Months',
      level: 'Intermediate',
      price: 'NPR 52,000',
      syllabus: ['HTML/CSS/JavaScript', 'React & Redux', 'Node.js & Express', 'MongoDB & Mongoose', 'REST API Design & Deployment', 'Final Full-Stack Project']
    }
  ];

  const course = courses.find(c => c.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    course: course?.title || ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your enquiry for ${course?.title} has been submitted. We'll contact you within 24 hours.`);
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        course: course?.title || ''
      });
    }, 500);
  };

  if (!course) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Course not found</h2>
        <button onClick={() => navigate('/')} className="course-detail-back">
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>
      </div>
    );
  }

  const imageIndex = (course.id - 1) % courseImages.length;

  return (
    <div className="course-detail-page">
      <button onClick={() => navigate('/')} className="course-detail-back">
        <i className="fas fa-arrow-left"></i> Back to Courses
      </button>

      <div className="course-detail-container">
        <div className="course-detail-image">
          <img src={courseImages[imageIndex]} alt={course.title} />
        </div>

        <div className="course-detail-info">
          <h1>{course.title}</h1>
          <div className="course-detail-meta">
            <span><i className="fas fa-layer-group"></i> {course.level}</span>
            <span><i className="far fa-clock"></i> {course.duration}</span>
            <span><i className="fas fa-tag"></i> {course.price}</span>
          </div>

          <p className="description">{course.fullDesc}</p>

          <div className="syllabus">
            <h4><i className="fas fa-list-check"></i> Course Syllabus</h4>
            <ul>
              {course.syllabus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Enquiry Form */}
          <div className="enquiry-section">
            <h3><i className="fas fa-pen-to-square"></i> Enquire About This Course</h3>
            <p>Fill in your details and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name *" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number *" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input 
                type="text" 
                name="course" 
                placeholder="Course Interested In" 
                value={formData.course}
                onChange={handleChange}
                style={{ background: '#f5f5f5' }}
                readOnly
              />
              <textarea 
                name="message" 
                placeholder="Your Message (e.g., Preferred batch time, questions about the course...)" 
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
              <button type="submit" className="btn-submit" disabled={formSubmitted}>
                {formSubmitted ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;