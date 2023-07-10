import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '.././styles/sass/index.module.scss'
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';

const Index = ({ message }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0); // Reset the progress on each slide change
    }, 5000); // Change the interval time (in milliseconds) to adjust the duration of each slide

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10); // Increment progress by 10% every second
    }, 500);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
      clearInterval(progressInterval); // Clean up the progress interval when the component unmounts
    };
  }, []);

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className={styles.slideshow}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={index === currentIndex ? styles.slideVisible : styles.slideHidden}
            style={{ animationDelay: `${index * 5}s` }} // Delay animation for each slide
          >
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
            {index === currentIndex && (
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link href="shop/product">
        <a> Shop By Online</a>
      </Link>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/test');
  const data = await res.json();
  console.log(data);
  return {
    props: { message: data.message },
  };
}

export default Index;
