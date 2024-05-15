import React from 'react'
import '../styles/home.css'
const Home = () => {
  return (
    <>
    <div className='Landing-Page'>

      <div className='home'>

        <div>
          <div className='home-title'>
              <p>HIGHLY PROFESSIONAL CLEANING</p>
              <h1><span> EASY TO CLEAN</span> <br /> HOUSE AND OFFICE</h1>
              <p>Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. <br />
              Cupiditate autem hic delectus maxime. Eaque assumenda <br /> eligendi sunt officiis perferendis optio?</p>
              <button>Get A Quote</button>
          </div>
          <div className='home-title'>
            <h4>TRUSTED PARTNERS <br /> <span> BRANDS WHO TRUST US</span></h4>
          </div>
        </div>

        <div className='home_img'>
          <img src="/images/blog.jpg" alt="" />
        </div>

      </div>
      <div className='home__mobile'>
        <h4>TRUSTED PARTNERS <br /> <span> BRANDS WHO TRUST US</span></h4>
      </div>
      <div className='brands'>
        <div><h1>De Hugs</h1></div>
        <div><h1>Manififold.int</h1></div>
        <div><h1>LUTH,</h1></div>
        <div><h1>Tim's Collections</h1></div>
      </div>

    </div>
    </>
  )
}

export default Home