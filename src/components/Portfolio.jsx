const Portfolio = () => {
    return (
      <section id="portfolio" className="container my-5">
        <div className="row">
          {/* Example projects */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/path-to-project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <a href="https://project1.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Deployed</a>
                <a href="https://github.com/developer/project1" className="btn btn-secondary ms-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
          {/* Repeat for more projects */}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  