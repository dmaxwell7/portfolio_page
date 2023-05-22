import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [from, setFrom] = useState({
    name: '',
    em
  })
  return (
    <div>Contact</div>
  )
}
// 2:13:14
export default SectionWrapper(Contact, "")