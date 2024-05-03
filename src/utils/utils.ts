export const getRandomMemeImage = () => {
  const imageIndex = Math.floor(Math.random() * 100);
  return `/memes/imagen_${imageIndex}.jpg`;
};
