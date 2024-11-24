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
        <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
                <>
                <div className="bg-feldgrau rounded-3xl p-2 ">
                    <div className="flex flex-col rounded-3xl text-center justify-between">
                    <img
                        className="rounded-t-2xl h-80 object-cover"
                        key={index} 
                        src={`http://localhost:8000/images/${image}`} 
                        alt={image} 
                        onClick={() => handleImageClick(image)}
                    />
                    <h1 className="font-semibold mb-2 mt-2">{image}</h1>
                    <p className="text-sm text-white">{image}</p>
                    </div>
                </div>
                </>
            ))}
            </div>
        </>
    )
}

export default Card