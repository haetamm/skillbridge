export const logo = [
  "zapier",
  "spotify",
  "zoom",
  "amazon",
  "adobe",
  "notion",
  "netflix",
];

export const scrollTop = () => {
  window.scrollTo(0, 0);
};

export const isActive = (currentPath, targetPath) => {
  return currentPath.startsWith(targetPath);
};
