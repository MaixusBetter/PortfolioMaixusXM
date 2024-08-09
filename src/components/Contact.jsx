import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: regex.test(value) ? '' : 'Invalid email address',
    }));
  };

  return (
    <section id="contact" className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" value={email} onChange={validateEmail} required />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
};

export default Contact;
