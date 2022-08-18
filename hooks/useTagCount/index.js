import { useState } from 'react';

const useTagCount = () => {
  const [tags, setTags] = useState([]);

  const onPressTag = (newTag) => {
    setTags((prevTags) =>
      prevTags.includes(newTag)
        ? prevTags.filter((oldTag) => oldTag !== newTag)
        : [...prevTags, newTag],
    );
  };

  return [tags, onPressTag];
};
export default useTagCount;
