import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import vr4 from '../src/Images/earthi.png'
import p1 from '../src/Images/about-us-product-team-01.png'
import p2 from '../src/Images/about-us-product-team-02.png'
import p3 from '../src/Images/about-us-product-team-03.png'
import p4 from '../src/Images/about-us-social-media-team-01.png'
import p5 from '../src/Images/about-us-social-media-team-02.png'
import p6 from '../src/Images/about-us-founding-team-01.png'
import p7 from '../src/Images/about-us-founding-team-02.png'
import './AboutUs.css'
function AboutUs() {
    const teamMembers = [
        { name: 'Abhishekh', position: 'Founder', des:'A Product Leader with experience in building Product teams.Co-founder at Ecoyaan, building a sustainable e-commerce platform.', imageUrl:p6 },
        { name: 'Sarwan', position: 'Founder', des:'An MBA from the Indian School of Business, specializing in Finance.Co-founder at Ecoyaan, building a sustainable e-commerce platform. ', imageUrl:p7 },
        { name: 'Sruthi', position: 'Social Media', des:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability.', imageUrl:p4 },
        { name: 'Urmil', position: 'Social Media', des:'Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion.', imageUrl: p5 },
        { name: 'Divya', position: 'UX-Design', des:'Divya creates user-friendly and engaging interfaces for our platform.', imageUrl: p1 },
        { name: 'Prashanith', position: 'Engineering',des:'Prashanith is our front-end engineer, who brings the UX designs to life', imageUrl: p2},
        { name: 'Sai Abhilash', position: 'Engineering', des:'Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform',imageUrl: p3 },
        
      ];
  return (
    <div>
        <Navbar/>
        <div className={`content-with-media`}>
            <div className="text">
                <h1>About Ecoyaan</h1>
                <p>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
                <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
                <ul>
                    <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                    <li>Videos, posts, and quizzes on climate change and sustainability</li>
                    <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                </ul>
            </div>
            <div className="media">
                <img src={vr4} alt="impact"></img>
            </div>
        </div>

        <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-cards">
            {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
                <img src={member.imageUrl} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.des}</p>
            </div>
            ))}
        </div>
        </div>



        <Footer/>
      
    </div>
  )
}

export default AboutUs
