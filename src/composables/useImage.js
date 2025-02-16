export default function useImage(imageName){
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}