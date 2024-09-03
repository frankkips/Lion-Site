import { useEffect , useState} from "react";

function Card (){
    const [images, setImages] = useState([]);

    const handleImageClick = async (imageName) => {
        try {
            const response = await fetch('http://localhost:8000/clicked-images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image_name: imageName }),
            });

            if (!response.ok) {
                throw new Error('Failed to save clicked image');
            }

            const data = await response.json();
            console.log('Image clicked:', data);
            // Optionally, provide user feedback here (e.g., toast notification)
        } catch (error) {
            console.error(error);
            // Optionally, handle errors here (e.g., display error message)
        }
    };

    useEffect(() => {
        fetch('http://localhost:8000/images')
            .then(response => response.json())
            .then(data => setImages(data.images));
    }, []);

    return (
        <>
        <div className="card-container">
            {images.map((image, index) => (
                <>
                <div className="card">
                    <div className="card-image">
                    <img 
                        key={index} 
                        src={`http://localhost:8000/images/${image}`} 
                        alt={image} 
                        onClick={() => handleImageClick(image)}
                    />
                    <h1>{image}</h1>
                    <p>{image}</p>
                    </div>
                </div>
                </>
            ))}
            </div>
        </>
    )
}

export default Card