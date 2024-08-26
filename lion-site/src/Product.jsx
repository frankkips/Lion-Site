import PICHA from './assets/example.jpg'
import { Link } from 'react-router-dom'


function Product (){

    return(
        <>
        <div className="header">
            <h1>UZAWELD</h1>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li><Link to='/product'>Products</Link></li>
            </ul>
        </div>
        <div className="body-product">
            <div className="pic-card">
                <img src={PICHA} alt="" />
                <div className="info">
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
            </div>
            <div className="other">
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
                </div>
                
                </div>
        </div>
        </>
    )
}
export default Product