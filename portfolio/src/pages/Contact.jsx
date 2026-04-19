import React from 'react'

const Contact = () => {
  return (
    <>
   <div className="container mt-5 mb-5 w-50">
      <h2 className="text-center mb-4">Contact Me</h2>

      <form className="p-4 border rounded">

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-primary w-100">
          Send
        </button>

      </form>
    </div>
 
</>
  )
}

export default Contact
