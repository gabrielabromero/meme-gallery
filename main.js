const imageUrls = [
  'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F281%2F891%2Ff5c.gif',
  'https://64.media.tumblr.com/d5863d59fa04fb08510019c526e906b5/a886b14b3d261ea2-63/s1280x1920/5291f2db001c4d7e36330b947ad892f09e153a9f.png',
  'https://ichef.bbci.co.uk/news/1024/branded_news/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg',
  'https://www.meme-arsenal.com/memes/14fb8f382323099bf69717ec856c532c.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/009/471/Screen_Shot_2021-04-29_at_11.20.47_AM.png',
  'https://i.kym-cdn.com/photos/images/original/001/618/886/0d8.jpg'
];
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
