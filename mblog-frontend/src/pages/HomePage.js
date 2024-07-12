import { Link } from 'react-router-dom';
const HomePage = () => (
    <>
    <h1>Welcome to mBlog with bk</h1>
    <h3>Your Gateway to Insightful and Engaging Content</h3>
    <p>
    Welcome to Janith_BK, where we bring you the best in programming Consepts. Dive into a world of knowledge and inspiration with our expertly crafted articles and engaging stories.
    </p>
    <div>
        <h3>Discover Our Latest Articles</h3>
        <p>Stay up-to-date with the most recent and trending topics. From expert advice to in-depth analysis, explore our wide range of articles designed to inform and inspire.</p>
        <p>Explore Our Articles → <Link to="/articles">Articles</Link></p>
   </div>

   <div>
    <h3>Why mBlog with BK</h3>
    <div>
    <p>We believe in the power of words to transform ideas and inspire change. Our mission is to provide our readers with high-quality, insightful content that makes a difference.
        </p>
        <p>
            <b>Expert Writers:</b> Our team consists of experienced writers who are passionate about Programming Consepts' topics.<br/><br/>
            <b>Diverse Topics:</b> From HTML.CSS to BlockChain programming Concepts, we cover a wide range of subjects to cater to all interests.<br/><br/>
            <b>Engaging Content:</b> Our articles are not only informative but also engaging, ensuring an enjoyable read every time.
        </p>
        <p>Learn More About Us → <Link to="/about">About</Link></p>
    </div>
    <div>
    <h3>Join Our Community</h3>
        <p>Subscribe to Our Newsletter
            <br/><br/>
            Don't miss out on the latest updates, exclusive content, and more. Sign up for our newsletter to get all this delivered straight to your inbox.
        </p>
    </div>
    </div>
    
   

   
    </>
);

export default HomePage;