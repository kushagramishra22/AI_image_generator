const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "9b853486ea70c1ed45f3d0565190a8d77d414f3e7f6f4f216d4cd0d36244958b97a64893eb7d38b4a440d1d31d158305";


const updateImageCard = (imgDataArray) =>{
    imgDataArray.forEach((dataUrl, index)=> {
        const imgCard = imageGallery.querySelectorAll(".img-card")[index];
        const imgElement = imgCard.querySelector("img");
        const downloadBtn = imgCard.querySelector(".download-btn")
        // set the image source to the AI-generated image data 
         imgElement.src = dataUrl;

        // when the image is loaded remove the loading class
        imgElement.onload = () => {
            imgCard.classList.remove("loading");

            // Attach click handler to download button
            downloadBtn.onclick = () => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = `${new Date().getTime()}.jpeg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        };
    });
}

const generateAiImage = async (userPrompt, userImgQuantity) => {
    try {
        // Create a FormData object and append the prompt
        const formData = new FormData();
        formData.append('prompt', userPrompt);
        //formData.append('n', parseInt(userImgQuantity)); // corrected parameter name

        // Make a POST request using fetch
        const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': OPENAI_API_KEY
            },
            body: formData
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to generate images! Please try again.');
        }

        // Convert the response to a Blob
        const blob = await response.blob();

        // Create a data URL from the Blob
        const dataUrl = URL.createObjectURL(blob);

        // Update the image card with the generated image
        updateImageCard([dataUrl]);

    } catch (error) {
        alert(error.message);
    }
};

const handleFormSubmission = (e) => {
    e.preventDefault();

    // get user input and image quantity value from the form
    const userPrompt = e.srcElement[0].value;
    const userImgQuintity = e.srcElement[1].value;
    
    //creating HTML markup for image cards with loading state
    const imageCardMarkup = Array.from({length: userImgQuintity}, ()=>
       `<div class = "img-card loading">
        <img src="images/loader.svg" alt="image">
        <a href="#" class="download-btn">
        <img src="images/download.svg" alt="download icon">
        </a>
        </div>`
    ).join("");
    // console.log(imageCardMarkup);
    imageGallery.innerHTML = imageCardMarkup;
    generateAiImage(userPrompt, userImgQuintity);

}
generateForm.addEventListener("submit", handleFormSubmission);