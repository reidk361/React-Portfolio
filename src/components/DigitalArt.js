import React from "react";

function DigitalArt() {
  return (
    <div id="digital-art">
      <h3>
        Here you will find examples of fractal art I've done over the span of a
        few years.
      </h3>
      <h4>(Aspect ratios change to maintain integrity of the images.)</h4>
      <br />
      <div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./art/Retro-Glass.png"
              class="d-block w-100"
              alt="Retro Glass"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Retro Glass</h5>
              <p>Made in 2016</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./art/Diamondized-Evil.png"
              class="d-block w-100"
              alt="Diamondized Evil"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Diamondized Evil</h5>
              <p>Made in 2016</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./art/Ruffles.png" class="d-block w-100" alt="Ruffles" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ruffles</h5>
              <p>Made in 2017</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./art/Palace.png" class="d-block w-100" alt="Palace" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Palace</h5>
              <p>Made in 2018</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default DigitalArt;
