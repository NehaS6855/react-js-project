/** @format */

import React, { useState } from "react";
import "../Style/HomePage.css";
import logo from "../Images/logo1.png";
import profile1 from "../Images/profile1.png";
import exploreImage from "../Images/explore image.png";
import hobbyCommunityImage from "../Images/End Image.jpg.png";
import JoinInForm from "../Components/JoinInForm";
import SignInForm from "../Components/SignInForm";

const HomePage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search here..." />
            <button className="search-button">
              <span className="search-icon">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  <i className="fas fa-compass"></i> Explore
                </a>
                <div className="dropdown-content">
                  <a href="#">People-Community</a>
                  <a href="#">Places-Venues</a>
                  <a href="#">Programs-Events</a>
                  <a href="#">Products-Store</a>
                  <a href="#">Blogs</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  <i className="fas fa-star"></i> Hobbies
                </a>
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-bookmark"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
            <button className="sign-in-button">Sign In</button>
          </nav>
        </div>
      </header>
      <div className="home-screen">
        <div className="text-section">
          <h2 className="explore">
            Explore your <span className="highlight">hobby</span> or{" "}
            <span className="highlight1">passion</span>
          </h2>
          <p className="lead">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <p className="lead">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <img src={exploreImage} alt="Main" className="main-image" />{" "}
        </div>
        <div className="sign-in-section">
          <div className="tabs">
            <h3
              className={isSignIn ? "active" : ""}
              onClick={() => setIsSignIn(true)}
            >
              Sign In
            </h3>
            <h3
              className={!isSignIn ? "active" : ""}
              onClick={() => setIsSignIn(false)}
            >
              Join In
            </h3>
          </div>
          {isSignIn ? <SignInForm /> : <JoinInForm />}
        </div>
      </div>
      <div className="add-listing">
        <h2 className="add-listing-title">
          <i className="fa-solid fa-circle-plus"></i>Add Your Listing
        </h2>
        <div className="listing-container mt-3">
          <div className="listing-card">
            <div className="listing-header">
              <i className="fas fa-users listing-icon people"></i>
              <h3 className="listing-title">People</h3>
            </div>
            <p className="listing-description">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="listing-button">Connect</button>
          </div>
          <div className="listing-card">
            <div className="listing-header">
              <i className="fas fa-map-marker-alt listing-icon place"></i>
              <h3 className="listing-title">Place</h3>
            </div>
            <p className="listing-description">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <button className="listing-button">Meet Up</button>
          </div>
          <div className="listing-card">
            <div className="listing-header">
              <i className="fas fa-shopping-cart listing-icon product"></i>
              <h3 className="listing-title">Product</h3>
            </div>
            <p className="listing-description">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <button className="listing-button">Get It</button>
          </div>
          <div className="listing-card">
            <div className="listing-header">
              <i className="fas fa-calendar-check listing-icon program"></i>
              <h3 className="listing-title">Program</h3>
            </div>
            <p className="listing-description">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button className="listing-button">Attend</button>
          </div>
        </div>
      </div>
      <div className="add-your-own">
        <div className="add-your-own-content">
          <h2>
            <i className="fa-solid fa-circle-plus"></i> Add your own
          </h2>
          <p>
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button className="add-new-button">Add New</button>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonials-content">
          <h2 className="testimonials-title">
            <i className="fas fa-quote-left"></i> Testimonials
          </h2>
          <p className="testimonial-text">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="testimonial-row">
            <div className="audio-player">
              <button className="play-button">
                <i className="fas fa-play"></i>
              </button>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <span className="duration">0:00</span>
              <img src={profile1} alt="Profile" className="profile-image" />
            </div>
            <div className="testimonial-author">
              <img src={profile1} alt="Profile" className="author-image" />
              <div className="author-details">
                <span className="author-name">Shubha Nagarajan</span>
                <span className="author-role">Classical Dancer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hobby-community-section">
        <div className="hobby-community-text">
          <h2>
            Your <span className="highlight1">Hobby</span>, Your{" "}
            <span className="highlight">Community</span>...
          </h2>
          <button className="get-started-button">Get started</button>
        </div>
        <div className="hobby-community-images">
          <img src={hobbyCommunityImage} alt="Hobby Community" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section hobbycue">
            <h4>Hobbycue</h4>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section how-do-i">
            <h4>How Do I</h4>
            <ul>
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h4>Social Media</h4>
            <div className="social-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-telegram"></i>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="invite-friends mt-5">
              <h4>Invite Friends</h4>
              <div className="invite-bar">
                <input type="email" placeholder="Email ID" />
                <button>Invite</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Purple Cues Private Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
