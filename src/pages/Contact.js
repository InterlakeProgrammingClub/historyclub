import React from 'react';
import {FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import headerimg from '../assets/headerimg.jpg';
import { FaShareNodes } from 'react-icons/fa6';

const Contact = () => {
  const images = [headerimg];
  const bgNum = Math.floor(Math.random() * 1);
  const bgImage = images[bgNum];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Club Website',
          text: 'Come to our meetings!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Doesnt work on this browser');
    }
  };

  return (
    <div className="text-center">
      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
          <h1 className="text-white text-4xl font-bold mb-4 mt-12 ">Contact Us</h1>
          <motion.div
            whileHover={{ scale: 1.1, translateZ: 50, perspective: 1000, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.4)', transition: { duration: 0.2 } }}
            className="inline-block mb-4"
          >
            <a href="mailto:club@gmail.com" className="bg-[#0C2340] text-white px-4 py-2 rounded font-bold">
              <span>email or action button</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 underline underline-offset-2">Contact Us:</h2>
        <div className="flex flex-col items-center space-y-4 mb-8">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaShareNodes className="text-[#0C2340]" style={{ verticalAlign: 'middle' }} />
            <a
              href="#"
              onClick={handleShare}
              className="bg-[#0C2340] text-white px-4 py-2 rounded font-bold flex items-center space-x-2"
              style={{ perspective: '500px' }}
            >
              Share our Website
            </a>
          </motion.div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-[#0C2340]" style={{ verticalAlign: 'middle' }} />
            <p className="text-lg font-bold">Thursdays, Room ____ from 3.30-4.00</p>
          </div>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaEnvelope className="text-[#0C2340]" style={{ verticalAlign: 'middle' }} />
            <a
              href="mailto:club@gmail.com"
              className="bg-[#0C2340] text-white px-4 py-2 rounded font-bold flex items-center space-x-2"
              style={{ perspective: '500px' }}
            >
              email
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-0">
          <h2 className="text-2xl font-bold underline underline-offset-2">xtra</h2>
          <p className="text-lg">Any other relevant contact info?</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
