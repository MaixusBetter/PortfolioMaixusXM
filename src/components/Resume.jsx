const Resume = () => {
  return (
    <section id="resume" className="container my-5">
      <a href="/Resume2024.pdf" className="btn btn-primary mb-3" download>Download Resume</a>
      
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src="/Resume2024.pdf"
          className="embed-responsive-item"
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="Resume"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
