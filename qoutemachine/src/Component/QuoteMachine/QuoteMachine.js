import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import  faTwitter  from "./twitter.svg";
import './QuoteMachine.css'

const variants = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const QuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-box">
      <motion.div
        id="text"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {quote}
      </motion.div>
      <motion.div
        id="author"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        - {author}
      </motion.div>
      <motion.button
        id="new-quote"
        variants={variants}
        initial="initial"
        animate="animate"
        onClick={getQuote}
      >
        New Quote
      </motion.button>
      <motion.a
        id="tweet-quote"
        variants={variants}
        initial="initial"
        animate="animate"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
      >
        <img alt='twitter-icon' src={faTwitter} />
      </motion.a>
    </div>
  );
};

export default QuoteMachine;
