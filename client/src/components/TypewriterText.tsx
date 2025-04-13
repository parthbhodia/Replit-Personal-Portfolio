import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export default function TypewriterText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  className = '',
}: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    // Handle the typing and deleting animation
    const handleTyping = () => {
      // Get the current phrase being typed
      const currentPhrase = texts[currentIndex];
      
      // Calculate new text based on whether we're typing or deleting
      const newText = isDeleting
        ? currentPhrase.substring(0, currentText.length - 1)
        : currentPhrase.substring(0, currentText.length + 1);
      
      // Update current text
      setCurrentText(newText);
      
      // Determine what to do next
      if (!isDeleting && newText === currentPhrase) {
        // Finished typing a word, wait before deleting
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
      } else if (isDeleting && newText === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    };
    
    // Don't set timeouts if we're waiting
    if (isWaiting) return;
    
    // Set up the next character typing/deleting
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}