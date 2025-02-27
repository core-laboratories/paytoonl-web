import { useState, useEffect } from "react";
const useTypedText = (
  texts,
  typingSpeed = 120,
  deletingSpeed = 80,
  delay = 1000
) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    if (subIndex === texts[index].length + 1 && !isDeleting) {
      if (index === texts.length - 1) {
        setIsComplete(true);
        setSubIndex(texts[index].length);
        return;
      }
      setTimeout(() => setIsDeleting(true), delay);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts, typingSpeed, deletingSpeed, delay, isComplete]);
  useEffect(() => {
    setCurrentText(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);
  return currentText;
};
export default useTypedText;
