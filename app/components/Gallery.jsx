"use client"
import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
return (
            <section className='App w-3/5'>
            <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames='grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center'
            >
            <a href="./Assets/Images/1.jpg">
                <img alt="img1" src="./Assets/Images/1.jpg"
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/2.jpg">
                <img alt="img1" src="./Assets/Images/2.jpg"
                 width={330}
                 height={262}  />
            </a>
            <a href="./Assets/Images/3.jpg">
                <img alt="img1" src="./Assets/Images/3.jpg" 
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/4.jpg">
                <img alt="img1" src="./Assets/Images/4.jpg" 
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/5.jpg">
                <img alt="img1" src="./Assets/Images/5.jpg" 
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/6.jpg">
                <img alt="img1" src="./Assets/Images/6.jpg" 
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/7.jpg">
                <img alt="img1" src="./Assets/Images/7.jpg" 
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/8.jpg">
                <img alt="img1" src="./Assets/Images/8.jpg" 
                 width={330}
                 height={262} />
            </a>
            <a href="./Assets/Images/9.jpg">
                <img alt="img1" src="./Assets/Images/9.jpg" 
                 width={330}
                 height={262} />
            </a>
            </LightGallery>
            </section>
);
}

export default Gallery;
