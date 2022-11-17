export function generateURLPicture(gender) {
  const randomNumber = Math.floor(Math.random() * 100);
  let human = "";

  if (gender === "M") human = "men";
  if (gender === "F") human = "women";
  if (gender === "") human = "women";

  return `https://randomuser.me/portraits/${human}/${randomNumber}.jpg`;
}
