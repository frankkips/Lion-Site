from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse
from pathlib import Path
import json
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://192.168.105.78:5173",
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

# Directory containing the .jpg files
IMAGES_DIR = Path("images")
CLICKED_IMAGES_FILE = Path("waba.json")


@app.get("/images/{image_name}")
async def get_image(image_name: str):
    image_path = IMAGES_DIR / image_name
    if image_path.exists() and image_path.suffix == ".JPG":
        return FileResponse(image_path)
    raise HTTPException(status_code=404, detail="Image not found")

@app.get("/images")
async def list_images():
    images = [img.name for img in IMAGES_DIR.glob("*.JPG")]
    return {"images": images}

# Endpoint to save clicked images
@app.post("/clicked-images")
async def save_clicked_image(request: Request):
    try:
        data = await request.json()
        image_name = data.get("image_name")
        timestamp = datetime.utcnow().isoformat()
        if not image_name:
            raise HTTPException(status_code=400, detail="Image name is required")

        # Read existing data
        if CLICKED_IMAGES_FILE.exists():
            with CLICKED_IMAGES_FILE.open("r") as f:
                clicked_images = json.load(f)
        else:
            clicked_images = []

        # Append new entry
        clicked_images.append({"image_name": image_name, "timestamp": timestamp})

        # Write back to file
        with CLICKED_IMAGES_FILE.open("w") as f:
            json.dump(clicked_images, f, indent=4)

        return {"status": "success", "image_name": image_name, "timestamp": timestamp}
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")

# Endpoint to retrieve clicked images
@app.get("/clicked-images")
async def get_clicked_images():
    if CLICKED_IMAGES_FILE.exists():
        with CLICKED_IMAGES_FILE.open("r") as f:
            clicked_images = json.load(f)
        return {"clicked_images": clicked_images}
    else:
        return {"clicked_images": []}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
