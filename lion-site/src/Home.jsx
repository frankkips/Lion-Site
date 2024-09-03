import './App.css'
// import PICHA from './assets/example.jpg'
// import { Link} from 'react-router-dom'
import Header from './Header';
import Card from './Card';
// import BodyCard from './BodyCard';


function Home(){
    

    return (
        <>
        <Header/>
        <div className="body">
            <Card/>
        </div>
        </>
    )

}

export default Home