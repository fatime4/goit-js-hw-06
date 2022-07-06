const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgItem = document.querySelector('.gallery');

const makeGalleryItem = ({ url, alt, width = 400 } = {}) => {
  const galleryItem = document.createElement('li');
  const galleryImg = document.createElement('img');

  galleryImg.src = url;
  galleryImg.alt = alt;
  galleryImg.width = width;

  galleryItem.append(galleryImg);
  return galleryItem;
};

const imagesArr = images.map(el => {
  return makeGalleryItem(el);
});

imgItem.append(...imagesArr);

imgItem.style.display = 'flex';
imgItem.style.justifyContent = 'space-around';
