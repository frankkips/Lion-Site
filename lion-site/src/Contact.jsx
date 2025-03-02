import { useEffect, useState } from 'react';
import Header from './Header'

const Contact = () => {
    const [clickedImages, setClickedImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleImageClick = async (image) => {
        try {
            const response = await fetch(`http://localhost:8000/clicked-images/${image}`, {
                method: "DELETE",
            });
    
            const result = await response.json();
            console.log(result.message); // Logs "Deleted <image_name>"
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

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
            <div className="p-5 bg-jet-black ">
            <div className="columns-4 gap-2" >
            {clickedImages.length === 0 ? (
                <p className='text-white'>No images have been clicked yet.</p>
            ) : (<>
                    {clickedImages.map((item, index) => (
                        <>
                        <div className=''>
                        <div key={index} className='rounded-3xl text-center justify-between mb-2'>
                            <img 
                            className='rounded-3xl'
                            key={index} 
                            src={`http://localhost:8000/images/${item.image_name}`} 
                            alt={item.image_name} 
                            onClick={()=> handleImageClick(item.image_name)}
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
