import './index.css';
// import PICHA from './assets/example.jpg'
// import { Link} from 'react-router-dom'
import Header from './Header';
import Card from './Card';
// import BodyCard from './BodyCard';


function Home(){
    

    return (
        <>
        <Header/>
        <div className="p-5 bg-jet-black">
            <Card/>
        </div>
        </>
    )

}

export default Home