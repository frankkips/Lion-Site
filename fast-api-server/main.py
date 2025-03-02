from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse
from pathlib import Path
import json
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import random


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://192.168.179.222:5173",
    "http://localhost:5173"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

# Directory containing the .txt files
IMAGES_DIR = Path("images")
CLICKED_IMAGES_FILE = Path("jora.json")


@app.get("/images/{image_name}")
async def get_image(image_name: str):
    image_path = IMAGES_DIR / image_name
    if image_path.exists() and image_path.suffix == ".png":
        return FileResponse(image_path)
    raise HTTPException(status_code=404, detail="Image not found")

@app.get("/images")
async def list_images():
    images = [img.name for img in IMAGES_DIR.glob("*.png")]
    random.shuffle(images)
    return {"images": images}

# Function to read clicked images
def read_clicked_images():
    if CLICKED_IMAGES_FILE.exists():
        with CLICKED_IMAGES_FILE.open("r") as f:
            return json.load(f)
    return []

# Function to save clicked images
def save_clicked_images(images):
    with CLICKED_IMAGES_FILE.open("w") as f:
        json.dump(images, f, indent=4)

# Endpoint to save clicked images (avoiding duplicates)
@app.post("/clicked-images")
async def save_clicked_image(request: Request):
    try:
        data = await request.json()
        image_name = data.get("image_name")
        timestamp = datetime.utcnow().isoformat()

        if not image_name:
            raise HTTPException(status_code=400, detail="Image name is required")

        # Load existing images
        clicked_images = read_clicked_images()

        # Check if image already exists
        if any(img["image_name"] == image_name for img in clicked_images):
            return {"status": "exists", "message": "Image already saved", "image_name": image_name}

        # Append new image with timestamp
        clicked_images.append({"image_name": image_name, "timestamp": timestamp})
        save_clicked_images(clicked_images)

        return {"status": "success", "image_name": image_name, "timestamp": timestamp}

    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")

# Endpoint to retrieve clicked images
@app.get("/clicked-images")
async def get_clicked_images():
    return {"clicked_images": read_clicked_images()}

@app.delete("/clicked-images/{image_name}")
async def delete_clicked_image(image_name: str):
    clicked_images = read_clicked_images()
    
    # Filter out the image to delete
    updated_images = [img for img in clicked_images if img["image_name"] != image_name]

    if len(updated_images) == len(clicked_images):  # If no change, image was not found
        raise HTTPException(status_code=404, detail="Image not found")

    save_clicked_images(updated_images)  # Save updated list

    return {"status": "deleted", "message": f"Deleted {image_name}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
