'use strict';
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.gallery');

images.forEach(({ url, alt }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');
  const images = document.createElement('img');
  images.src = url;
  images.alt = alt;
  images.classList.add('gallery-image');
  listItem.append(images);
  galleryList.append(listItem);
});

galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';
galleryList.style.gap = '20px';
galleryList.style.justifyContent = 'space-between';
galleryList.style.width = '1128px';
galleryList.style.margin = '0 auto';

const galleryItem = document.querySelectorAll('.gallery-item');
galleryItem.forEach(item => {
  item.style.width = 'calc((1128px - 40px) / 3)';
});

const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(img => {
  img.style.width = '100%';
  img.style.height = '300px';
  img.style.objectFit = 'cover';
});