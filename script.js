// Image Container
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];



// Unsplash API
const count = 1;
const apiKey = 'dToaDNHf4n7To4bJ8tJucJD7Em6cbzfD_Qze0Np9WWo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count =${count}`;

// Create Elements for links and photos, Add to DOM
// function displayPhotos(){
//     // Run function to each object in PhotosArray
//     photosArray.forEach((photo) => {
//         // Create an anchor element to link to unsplash
//         const item = document.createElement('a');
//         item.setAttribute('href', photo.links.html);
//         item.setAttribute('target', '_blank');
//         // create image for photos
//         const img = document.createElement('img');
//         img.setAttribute('src', photo.urls.regular);
//         img.setAttribute('alt', photo.alt_description);
//         img.setAttribute('title', photo.alt_description);

//         // Put <img> inside <a>, then put both inside image container element
//         item.appendChild(img);
//         imageContainer.appendChild(item);
        
//     })
// }

// Get photos from unsplash API
async function getPhotos(){
    try{
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    }
    catch(error) {
        // catch error
    }
}

// window.addEventListener('scroll', ()=>{
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
//         getPhotos();
//         console.log('load more');
//     }
// });

// On load 
getPhotos();