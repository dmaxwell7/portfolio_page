import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [from, setFrom] = useState({
    name: '',
    email: '',
    message: '',
  })

  const []
  return (
    <div>Contact</div>
  )
}
// 2:13:14
export default SectionWrapper(Contact, "")