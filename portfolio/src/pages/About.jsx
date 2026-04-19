import React from 'react'

const About = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'React', level: 75 }
  ]

  const education = [
    {
      title: "Bachelor’s Degree 🎓",
      subtitle: "Computer Science & Engineering",
      inst: "RajaramBapu Institute of Technology, Ishwarpur",
      CGPA:9.14,
      year: "2023 - 2026"
    },
    {
      title: "Diploma",
      subtitle: "Computer Science & Engineering",
      inst: "Nanasaheb Mahadik Polytechnic Institute, Peth",
      Percentage : 89.80,
      year: "2021 - 2023"
    },
    {
      title: "12th Grade",
      subtitle: "Science",
      inst: "Abhinav Gyan Mandir, Karjat",
      Percentage : 83,
      year: "2020 - 2021"
    }
  ]

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <div className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Me</h1>
          <p className="text-secondary">Passionate developer crafting clean and modern web experiences</p>
        </div>

        {/* Timeline Education */}
        <div className="mb-5">
          <h4 className="mb-4">🎓 Education</h4>

          <div className="border-start ps-4" style={{ borderColor: '#444' }}>
            {education.map((edu, i) => (
              <div key={i} className="mb-4 position-relative">

                {/* Dot */}
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#0d6efd',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '-30px',
                  top: '5px'
                }}></div>

                <div className="p-3 rounded" style={{ backgroundColor: '#1a1a1a' }}>
                  <h5 className="mb-1">{edu.title}</h5>
                  {edu.subtitle && <p className="mb-1 text-light">{edu.subtitle}</p>}
                  <p className="mb-1 text-secondary">🏫 {edu.inst}</p>
                  <p className="mb-1 text-primary">
                    {edu.CGPA ? `CGPA: ${edu.CGPA}` : `Percentage: ${edu.Percentage}%`}
                  </p>
                  <small className="text-secondary">{edu.year}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills + Info */}
        <div className="row g-4">

          {/* Skills with Progress */}
          <div className="col-md-6">
            <div className="p-4 rounded h-100" style={{ backgroundColor: '#1a1a1a' }}>
              <h5 className="mb-4">💻 Technical Skills</h5>

              {skills.map((skill, i) => (
                <div key={i} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <div className="progress" style={{ height: '6px', backgroundColor: '#333' }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages + Soft Skills */}
          <div className="col-md-6">
            <div className="p-4 rounded mb-4" style={{ backgroundColor: '#1a1a1a' }}>
              <h5 className="mb-3">🌐 Languages</h5>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-light text-dark">English</span>
                <span className="badge bg-light text-dark">Hindi</span>
                <span className="badge bg-light text-dark">Marathi</span>
              </div>
            </div>

            <div className="p-4 rounded" style={{ backgroundColor: '#1a1a1a' }}>
              <h5 className="mb-3">🤝 Soft Skills</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-secondary">Communication</span>
                <span className="badge bg-secondary">Teamwork</span>
                <span className="badge bg-secondary">Problem Solving</span>
                <span className="badge bg-secondary">Time Management</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About    