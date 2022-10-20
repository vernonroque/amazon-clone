import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <img className="home-image" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51cRMD1ya-L._SX3000_.jpg"
            alt='home banner'
            />

            <div className = "home-row">
                <Product 
                  id="12345"
                  title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                  price={19.04}
                  image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
                  rating={5}
                />
                <Product
                id="54321"
                  title="Kindle Paperwhite Signature Edition Essentials Bundle including Kindle Paperwhite Signature Edition 
                          - Wifi, Without Ads, Amazon Fabric Cover, and Wireless charging dock"
                  price={229.97}    
                  image="https://m.media-amazon.com/images/G/01/kindle/journeys/5xlDnKG94P0ryVnD8MqFmnIhMKBXE2F2BxyzUQHa63Hhs3D/ZjBjZWUxMjIt._CB641064212_.jpg" 
                  rating={5}  
                 />
            </div>
            <div className = "home-row">
                <Product
                id="13524"
                title="Ultimate Rare Card Bundle 100 Cards + 5 foil Cards, 5 Rare Cards, 5 Holo Rare Cards, 2 Ultra Rare Cards, Plus a LCC Box That is Compatible with Pokemon Cards"
                price={29.99}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/A1mOqYA-G4S._AC_SX679_.jpg"
                rating={5}
                />
                <Product
                 id="12435"
                title="Xinlinke Tenor Saxophone Case Lightweight Soft Padded Bb Sax Gig Bag with Backpack Straps"
                price={69.99}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51PeIqoZoZL._AC_SX679_.jpg"
                rating={5}
                />
                <Product
                id="21345"
                title="2021 Apple 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray"
                price={799}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81MF389-9gS._AC_SX679_.jpg"
                rating={5}
                />
            </div>
            <div className = "home-row">
                <Product
                id="54312"
                title="BEIWO Puzzle-Starry Night by Vincent Van Gogh Jigsaw Puzzles, 1000 Piece Puzzles for Adults and Kids (Starry Night, Square-1000 Pieces)"
                price={16.95}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71bhc9a0L-L._AC_SX679_.jpg"
                rating={5}
                
                />
            </div>

        </div>
        
    </div>
    
  )
}

export default Home;