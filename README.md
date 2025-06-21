# AI Image Generator Tool (JavaScript)

Turn your text prompts into stunning images in seconds with this JavaScript-powered AI Image Generator!  
This project uses the ClipDrop API (text-to-image) to generate images from user input, providing a simple web interface to create, view, and download AI-generated images.

## ✨ Features

- **Text-to-Image Generation:** Enter any description and get a custom AI-generated image.
- **Responsive Web UI:** Clean, mobile-friendly interface built with HTML, CSS, and vanilla JavaScript.
- **Multiple Image Support:** Choose how many images to generate (easily extendable).
- **Instant Download:** Download generated images directly from the gallery.
- **Loading Indicators:** See when images are being generated with a visual loader.

## 🚀 Demo

![AI Image Generator Screenshot]![image](https://github.com/user-attachments/assets/ed4d2074-c4f5-4c8e-ae5b-e60f30c0204b)
_Example of the AI Image Generator interface._

## 🛠️ Installation & Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/kushagramishra22/AI_image_generator.git
    cd AI_image_generator
    ```

2. **API Key Required**
    - This project uses [ClipDrop's text-to-image API](https://clipdrop.co/apis/text-to-image).
    - Get your API key from [ClipDrop](https://clipdrop.co/apis/text-to-image).
    - Replace the placeholder in `script.js`:
      ```js
      const OPENAI_API_KEY = "YOUR_CLIPDROP_API_KEY_HERE";
      ```

3. **Run Locally**
    - Open `index.html` in your browser.

## 📦 Project Structure

```
AI_image_generator/
├── images/
│   ├── img-1.jpg
│   ├── img-2.jpg
│   ├── img-3.jpg
│   ├── img-4.jpg
│   ├── loader.svg
│   └── download.svg
├── index.html
├── style.css
└── script.js
```

- `index.html`: The main web page.
- `style.css`: Styles for the interface.
- `script.js`: All JavaScript logic for API calls, UI updates, and downloads.
- `images/`: Example images, icons, and loader graphics.

## 🖥️ Usage

1. **Enter a prompt** describing the image you want (e.g., "A futuristic city at night").
2. **Select the number of images** to generate (default is 1, easily extendable).
3. **Click 'Generate'** – the AI will create your image(s) in seconds.
4. **Download** any image by clicking the download button.

## ⚙️ Configuration & Customization

- **API Provider:**  
  By default, this uses ClipDrop's API. You can swap in another text-to-image API by editing the `generateAiImage` function in `script.js`.

- **Image Quantity:**  
  To allow generating more than 1 image at a time, uncomment the additional `<option>` tags in the HTML and update the code to handle multiple images.

- **Styling:**  
  Customize `style.css` to change the look and feel.

## 🔒 Security

- **API Key:**  
  Never commit your real API key to a public repository. Use environment variables or a secure method in production.

## 📝 License

This project is for educational and demonstration purposes.

---

**Made with ❤️ by [kushagramishra22](https://github.com/kushagramishra22)**
