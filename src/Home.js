import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <img className="home-image" src="../photos/Amazon-Banner.jpeg"
            alt='home banner'
            />

            <div className = "home-row">
                <Product 
                  id="12345"
                  title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                  price={19.04}
                  image="../photos/Lean-Startup-Book.jpeg"
                  rating={5}
                />
                <Product
                id="54321"
                  title="Kindle Paperwhite Signature Edition Essentials Bundle including Kindle Paperwhite Signature Edition 
                          - Wifi, Without Ads, Amazon Fabric Cover, and Wireless charging dock"
                  price={229.97}    
                  image="../photos/Kindle-Paperwhite.jpg" 
                  rating={5}  
                 />
            </div>
            <div className = "home-row">
                <Product
                id="13524"
                title="Ultimate Rare Card Bundle 100 Cards + 5 foil Cards, 5 Rare Cards, 5 Holo Rare Cards, 2 Ultra Rare Cards, Plus a LCC Box That is Compatible with Pokemon Cards"
                price={29.99}
                image="../photos/pokemon-cards.jpg"
                rating={5}
                />
                <Product
                 id="12435"
                title="Xinlinke Tenor Saxophone Case Lightweight Soft Padded Bb Sax Gig Bag with Backpack Straps"
                price={70.00}
                image="../photos/sax-case.jpg"
                rating={5}
                />
                <Product
                id="21345"
                title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray with AppleCare+ (2 Years)"
                price={348}
                image="../photos/Apple-Ipad.jpg"
                rating={5}
                />
            </div>
            <div className = "home-row">
                <Product
                id="54312"
                title="BEIWO Puzzle-Starry Night by Vincent Van Gogh Jigsaw Puzzles, 1000 Piece Puzzles for Adults and Kids (Starry Night, Square-1000 Pieces)"
                price={14.95}
                image="../photos/puzzles.jpg"
                rating={5}
                
                />
            </div>

        </div>
        
    </div>
    
  )
}

export default Home;