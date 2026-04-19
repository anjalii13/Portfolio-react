import React from 'react'
import projects from './projectList'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='container py-5' style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <h1 className='text-center text-white mb-5'>My Projects</h1>

      <div className='row g-4 justify-content-center'>
        {projects.map((p, i) => (
          <div className='col-12 col-sm-6 col-md-4' key={i}>
            <div
              className='card h-100 text-white border-0'
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '15px',
                border: '2px solid #0d6efd',
                boxShadow: '0 0 15px rgba(13,110,253,0.7)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 0 25px rgba(13,110,253,0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 0 10px rgba(13,110,253,0.5)'
              }}
            >
              <div className='card-body d-flex flex-column justify-content-between'>
                <div>
                  <h5 className='card-title'>{p.title}</h5>
                  <h6 className='card-subtitle mb-3 text-secondary'>{p.year}</h6>
                </div>

                <Link
                  to={`/projects/${p.id}`}
                  className='btn mt-auto'
                  style={{
                    borderRadius: '10px',
                    fontWeight: '500',
                    border: '1px solid #0d6efd',
                    color: '#0d6efd'
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
