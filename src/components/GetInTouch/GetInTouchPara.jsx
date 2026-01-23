import React from 'react'
import paraImage from '../../assets/icons/getInPara.jpg'

const GetInTouchPara = () => {
  return (
    <div>{/* TOP WHITE TEXT BLOCK */}
      <div className="git-info-box" style={{ backgroundImage: `url(${paraImage})` }}>
        <p>
          We work closely with professional teams focused on marketing outcomes
          including social media teams, marketing and PR agencies, coaches,
          brands, startups, videographers and photographers.
          Our role is simple: provide production-ready spaces, dependable
          support and creative flexibility so your team can focus on creating
          effective, high-quality marketing outputs.
        </p>
          
        <p className="git-note">
          Please share your contact below for us to be in touch, cheers.
        </p>
      </div>
    </div>
  )
}

export default GetInTouchPara