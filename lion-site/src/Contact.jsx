import { useEffect, useState } from 'react';
import Header from './Header'

const Contact = () => {
    const [clickedImages, setClickedImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClickedImages = async () => {
            try {
                const response = await fetch('http://localhost:8000/clicked-images');
                if (!response.ok) {
                    throw new Error('Failed to fetch clicked images');
                }
                const data = await response.json();
                setClickedImages(data.clicked_images);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClickedImages();
    }, []);

    if (loading) {
        return <div>Loading clicked images...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Header/>
            <div className="body">
            <div className="card-container" >
            {clickedImages.length === 0 ? (
                <p>No images have been clicked yet.</p>
            ) : (<>
                    {clickedImages.map((item, index) => (
                        <>
                        <div className='card'>
                        <div key={index} className='card-image'>
                            <img 
                            key={index} 
                            src={`http://localhost:8000/images/${item.image_name}`} 
                            alt={item.image_name} 
                        />
                        </div>
                        </div></>
                    ))}</>
                
            )}
        </div>
            </div>
            

        
        </>
        
    );
};

export default Contact;
