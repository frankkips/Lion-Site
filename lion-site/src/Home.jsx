import './App.css'
import PICHA from './assets/example.jpg'

function Home(){

    return (
        <>
        <div className="header">
            <h1>UZAWELD</h1>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <li>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Contact Us</ul>
                <ul>Products</ul>
            </li>
        </div>
        <div className="body">
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={PICHA} alt="" />
                    </div>
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
            </div>
            
        </div>
        </>
    )

}

export default Home