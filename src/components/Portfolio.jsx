const Portfolio = () => {
  return (
    <section id="portfolio" className="container my-5">
      <div className="row">
        {/* Example projects */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/assets/images/Screenshot 2024-08-09 141323.png" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Sonic The Hedgehog Reverse Engineering</h5>
              <a href="https://youtu.be/cM3V0UJb7OM?si=Z5v4jlTpg805-MqA" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Latest Video</a>
              <a href="https://youtu.be/CKxC97WO5_Y?si=ZlvzeFtH2d-AxsCF" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Intital Trailer</a>
            </div>
          </div>
        </div>
        {/* Repeat for more projects */}
      </div>
    </section>
  );
};

export default Portfolio;
