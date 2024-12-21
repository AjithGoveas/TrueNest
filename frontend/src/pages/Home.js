import React from 'react';
import '../styles/Home.css';
import images from '../assets/images/images';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <section className="home">
            <div className="home-text">
                <h1>Your House Is Waiting For You!</h1>
                <p>
                At TrueNest, we believe a house is more than just walls—it's where dreams take shape and futures are built. With trust and quality at our core, we help you find the perfect space that resonates with your aspirations. Let us guide you to a home where comfort meets style.
                </p>

                <div className="h-search">
                    <form>
                        <input
                            type="search"
                            placeholder="Search by location..."
                            className="search-input"
                        />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className="home-img">
                <img src={images.homeMain} alt="home-img" />
            </div>
        </section>
        <section class="property">
            <div class="center-left">
                <h2>Popular Residence</h2>
            </div>
            <div class="prop-content">
                <div class="row">
                    <img src={images.oliviaPark} alt=""/>
                    <h5>Olivia Park</h5>
                    <p>1025 Oak estate, Downtown, USA</p>
                    <div class="list">
                        <a href="#" class="Residence-list">
                            <i class="fa-solid fa-bed" id='fa-icon'></i>
                            4 Bed
                        </a>
                        <a href="#" class="Residence-list">
                            <i class="fa-solid fa-bath" id='fa-icon'></i>
                            2 Bath
                        </a>
                        <a href="#" class="Residence-list">
                            <i class="fa-regular fa-square" id='fa-icon'></i>
                            1209 spft
                        </a>
                    </div>
                </div>
                <div class="row">
                    <img src={images.theSimpsons} alt=""/>
                    <h5>The Simpsons</h5>
                    <p>742 Evergreen Terrace, Springfield, USA</p>
                    <div class="list">
                        <a href="#" class="Residence-list">
                            <i class="fa-solid fa-bed" id='fa-icon'></i>
                            5 Bed
                        </a>
                        <a href="#" class="Residence-list">
                            <i class="fa-solid fa-bath" id='fa-icon'></i>
                            2 Bath
                        </a>
                        <a href="#" class="Residence-list">
                            <i class="fa-regular fa-square" id='fa-icon'></i>
                            1569 spft
                        </a>
                    </div>
                </div>
                <div class="row">
                    <img src={images.jurassicPark} alt=""/>
                    <h5>Jurassic Park</h5>
                    <p>1993 Isla Nublar, Costa Rica, USA</p>
                    <div class="list">
                        <a href="#" class="Residence-list">
                            <i class="fa-solid fa-bed" id='fa-icon'></i>
                            8 Bed
                        </a>
                        <a href="#" class="Residence-list">
                            <i class="fa-solid fa-bath" id='fa-icon'></i>
                            3 Bath
                        </a>
                        <a href="#" class="Residence-list">
                            <i class="fa-regular fa-square" id='fa-icon'></i>
                            12000 spft
                        </a>
                    </div>
                </div>
            </div>
            <div class="center-btn">
                <Link to="/buying" class="btn">View All Properties</Link>
            </div>
        </section>
        {/* about */}
        <section class="about">
            <div class="abt-img">
                <img src={images.abtImg} alt="about-img"/>
            </div>
            <div class="abt-text">
                <h2>We Help People To Find Their Dream Home</h2>
                <p>At TrueNest, we make finding your dream home simple and stress-free. With expert guidance and personalized support, we help you discover a place that truly feels like home.</p>
                <a href="#" class="btn">Get In Touch</a>
            </div>
        </section>
        {/* Subscribe */}
        <section class="subscribe">
            <div class="sub-content">
                <h2>Let's Simply Begin With A New Journey</h2>
                <p>Starting a new chapter in life begins with finding the perfect home. At TrueNest, we guide you through every step, ensuring that the journey is smooth and rewarding. Together, we’ll help you unlock the door to a new, exciting future.</p>
                <a href="#" class="btn">Get Started</a>
            </div>
        </section>
        </>
    );
};

export default Home;
