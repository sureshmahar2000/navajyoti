import React, { useState } from 'react';

const CoursesPage = () => {
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
      fullDesc: 'This comprehensive course covers Python from basics to advanced topics including data structures, algorithms, web development with Django, data analysis with Pandas, and machine learning with scikit-learn. You\'ll work on 5+ real-world projects.',
      duration: '3 Months',
      level: 'Intermediate'
    },
    { 
      id: 2, 
      title: 'DevOps Engineering', 
      badge: 'Advanced', 
      desc: 'CI/CD pipelines, Docker, Kubernetes, AWS cloud, and infrastructure automation.',
      fullDesc: 'Master the DevOps lifecycle including version control with Git, continuous integration with Jenkins, containerization with Docker, orchestration with Kubernetes, and infrastructure as code with Terraform on AWS.',
      duration: '4 Months',
      level: 'Advanced'
    },
    { 
      id: 3, 
      title: 'Cybersecurity', 
      badge: 'Expert', 
      desc: 'Ethical hacking, threat analysis, security compliance, and risk management.',
      fullDesc: 'Learn ethical hacking, penetration testing, network security, cryptography, security compliance (GDPR, HIPAA), and incident response. Prepare for CEH and CISSP certifications.',
      duration: '4 Months',
      level: 'Expert'
    },
    { 
      id: 4, 
      title: 'Cloud Architecture', 
      badge: 'Professional', 
      desc: 'Design and deploy scalable systems on AWS, Azure, and Google Cloud.',
      fullDesc: 'Design highly available, cost-efficient, and secure cloud architectures. Hands-on experience with AWS EC2, S3, VPC, Lambda, RDS, and Azure/GCP equivalents.',
      duration: '3 Months',
      level: 'Professional'
    },
    { 
      id: 5, 
      title: 'Data Analytics', 
      badge: 'Beginner+', 
      desc: 'SQL, Python (Pandas), Power BI, and data visualization techniques.',
      fullDesc: 'Transform raw data into actionable insights. Learn SQL for data extraction, Python for data cleaning and analysis, and Power BI/Tableau for creating stunning dashboards.',
      duration: '3 Months',
      level: 'Beginner+'
    },
    { 
      id: 6, 
      title: 'Full Stack Web', 
      badge: 'Intermediate', 
      desc: 'React, Node.js, MongoDB, and modern full-stack web development.',
      fullDesc: 'Build complete web applications from scratch. Master frontend with React, backend with Node.js and Express, and database with MongoDB. Learn RESTful API design and deployment.',
      duration: '4 Months',
      level: 'Intermediate'
    }
  ];

  // State for enquiry form
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your enquiry, ${formData.name}! We will contact you shortly.`);
    setShowForm(null);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Choose from our industry-leading training programs and start your journey to becoming a tech professional.</p>
      </div>

      <div className="courses-grid-full">
        {courses.map((course, index) => (
          <div key={course.id} className="course-card-full">
            <img 
              src={courseImages[index % courseImages.length]} 
              alt={course.title} 
              className="course-image-full"
            />
            <div className="course-content-full">
              <h2>{course.title}</h2>
              <div className="course-meta">
                <span className="badge">{course.level}</span>
                <span className="duration"><i className="far fa-clock"></i> {course.duration}</span>
              </div>
              <p className="course-desc-full">{course.fullDesc}</p>
              <button 
                className="btn-enquire"
                onClick={() => setShowForm(showForm === course.id ? null : course.id)}
              >
                {showForm === course.id ? 'Close Enquiry' : 'Enquire Now'}
              </button>

              {showForm === course.id && (
                <div className="enquiry-form">
                  <h4>Enquire About {course.title}</h4>
                  <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Full Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <textarea 
                      name="message" 
                      placeholder="Your Message (optional)" 
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    <button type="submit" className="btn-submit">Submit Enquiry</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;