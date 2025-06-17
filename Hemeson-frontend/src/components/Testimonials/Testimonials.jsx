import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  function slideForward() {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  function slideBackward() {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div id='Testimonial' className='testimonial'>
      <div className="prev-btn" onClick={slideBackward}>
        {/* Left Arrow */}
        <svg width="24" height="24" fill="blue" viewBox="0 0 24 24">
          <path
            d="M16 5L9 12L16 19"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="nxt-btn" onClick={slideForward}>
        {/* Right Arrow */}
        <svg width="24" height="24" fill="blue" viewBox="0 0 24 24">
          <path
            d="M8 5L15 12L8 19"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="parent1.jpg" alt="" />
                <div>
                  <h3>Mr. Micheal Eze</h3>
                </div>
              </div>
              <p>
                At just four years old, my daughter can read short sentences and solve basic math problems.
                The dedication of early years' teachers in Hemeson Academy is beyond words.
                We are satisfied with the learning enviroment.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src="parent2.jpg" alt="" />
                <div>
                  <h3>Mrs. Johnson Uzor</h3>
                </div>
              </div>
              <p>
                From Nursery to Secondary school, this institution has shaped my child into a confident,
                intelligent, and future-ready young adult. We're proud to say we made the right choice
                years ago.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src="parent3.jpg" alt="" />
                <div>
                  <h3>Mr. Frank Bassey</h3>
                </div>
              </div>
              <p>
                Since enrolling my daughter at this school, we've seen a remarkable improvement in her confidence
                and academic performance. The teachers are patient, passionate and truly care about each child's
                development. We feel blessed to be part of this school community.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src="parent4.jpg" alt="" />
                <div>
                  <h3>Mrs. Amaka Izuchukwu</h3>
                </div>
              </div>
              <p>
                What I love most is the school's focus on both academics and moral values. My son has become
                responsible, respectful and motivated. Hemeson Academy doesn't just teach, they nurture.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials;
