import './App.css'
import PICHA from './assets/example.jpg'
import { Link } from 'react-router-dom'

function Home(){

    return (
        <>
        <div className="header">
            <h1>UZAWELD</h1>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <li>
                <ul><Link to='/'>Home</Link></ul>
                <ul><Link to='/'>About</Link></ul>
                <ul><Link to='/'>Contact Us</Link></ul>
                <ul><Link to='/product'>Products</Link></ul>
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