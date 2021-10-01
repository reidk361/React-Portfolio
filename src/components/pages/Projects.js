import React from "react";

function Projects() {
  return (
    <div id="example-pages">
      <h3>
        Here you will find links to several pages I have made featuring
        different skills I have garnered.
      </h3>
      <br />
      <section>
        <div
          id="carouselCaptionsPages"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselCaptionsPages"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptionsPages"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptionsPages"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptionsPages"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptionsPages"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="./assets/Activity28-Monitor.png"
                class="d-block w-100"
                alt="Preview of webpage."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>CSS Cheatsheet</h5>
                <p>
                  <a
                    href="https://reidk361.github.io/Activity28/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://reidk361.github.io/Activity28/
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./assets/Homework11.png"
                class="d-block w-100"
                alt="Preview of webpage."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Mock Javascript Quiz</h5>
                <p>
                  <a
                    href="https://homework-week-11.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://homework-week-11.herokuapp.com/
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./assets/Project1.png"
                class="d-block w-100"
                alt="Preview of webpage."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Pokemon Team Project</h5>
                <p>
                  <a
                    href="https://marcus-pi4.github.io/pokemonTeamProject/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://marcus-pi4.github.io/pokemonTeamProject/
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./assets/Homework6.png"
                class="d-block w-100"
                alt="Preview of webpage."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Weather Forecast by City</h5>
                <p>
                  <a
                    href="https://reidk361.github.io/5-Day-Forecast-Homework-Week-6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://reidk361.github.io/5-Day-Forecast-Homework-Week-6/
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./assets/Project2.png"
                class="d-block w-100"
                alt="Preview of application."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>The Long Oregon Hike</h5>
                <p>
                  <a
                    href="https://github.com/reidk361/Project-2-RPG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/reidk361/Project-2-RPG
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCaptionsPages"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselCaptionsPages"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Projects;
