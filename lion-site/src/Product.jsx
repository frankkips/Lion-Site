import PICHA from './assets/example.jpg'
import Header from './Header'
import Card from './Card'

function Product (){
    
    return(
        <>
        <Header/>
        <div className="body-product">
            <div className="pic-card">
                <img src={PICHA} alt="" />
                <div className="info">
                    <h1>Foldable Table</h1>
                    <p>Cast Iron</p>
                </div>
            </div>
            <div className="other">
                <Card/>
            </div>
        </div>
        </>
    )
}
export default Product