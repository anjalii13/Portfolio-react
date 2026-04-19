import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh' }}>

      {/* HERO SECTION */}
      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-md-6">
            <h1 className="fw-bold display-5">Hi, I'm Anjali 👋</h1>
            <h4 className="text-primary mt-2">React Developer</h4>

            <p className="text-secondary mt-3">
              I build clean, responsive and user-friendly web interfaces using modern technologies.
            </p>

            <div className="mt-4">
              <Link to="/projects" className="btn btn-primary me-3 px-4">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline-light px-4">
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <div style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #0d6efd, #000)',
              boxShadow: '0 0 60px rgba(13,110,253,0.5)'
            }}></div>
          </div>

        </div>
      </div>

      {/* SKILLS */}
      <div className="container mb-5">
        <h3 className="text-center mb-4">My Skills</h3>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          {['HTML','CSS','JavaScript','Bootstrap','React'].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-2"
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '20px',
                border: '1px solid #0d6efd',
                boxShadow: '0 0 10px rgba(13,110,253,0.5)',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(13,110,253,0.9)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 10px rgba(13,110,253,0.5)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS PREVIEW */}
     <div className="container mb-5">
  <h3 className="text-center mb-4">Featured Projects</h3>

  <div className="row g-4">
    {[{
      title: 'Portfolio Website',
      desc: 'Personal portfolio using React & Bootstrap'
    }, {
      title: 'Weather App',
      desc: 'Weather app using API integration'
    }, {
      title: 'Ice-cream Website',
      desc: 'Static website using HTML & CSS'
    }].map((p, i) => (
      <div className="col-md-4" key={i}>
        <div
          className="p-4 h-100"
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '15px',
            border: '1px solid #0d6efd',
            boxShadow: '0 0 10px rgba(13,110,253,0.5)',
            transition: '0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.boxShadow = '0 0 25px rgba(13,110,253,0.9)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 10px rgba(13,110,253,0.5)'
          }}
        >
          <h5>{p.title}</h5>
          <p className="text-secondary">{p.desc}</p>

          <Link 
            to="/projects" 
            className="btn btn-sm mt-2"
            style={{
              border: '1px solid #0d6efd',
              color: '#0d6efd'
            }}
          >
            View
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* ABOUT PREVIEW */}
      <div className="container text-center mb-5">
        <h3>About Me</h3>
        <p className="text-secondary">
          I am a developer focused on building practical projects and improving my skills every day.
        </p>
        <Link to="/about" className="btn btn-outline-primary px-4">
          Read More
        </Link>
      </div>

      {/* CTA */}
      <div className="container text-center pb-5">
        <h4>Let’s Build Something 🚀</h4>
        <Link to="/contact" className="btn btn-primary mt-3 px-4">
          Contact Me
        </Link>
      </div>

    </div>
  )
}

export default Home