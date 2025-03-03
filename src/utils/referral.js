(function () {
  // Get the current script element to access its data attributes
  const script = document.currentScript;

  // Fetch parameters from script attributes with default values
  const params = {
    placement: script.getAttribute("data-placement") || "right",
    text: script.getAttribute("data-text") || "Refer And Earn",
    textColor: script.getAttribute("data-text-color") || "#FFFFFF",
    iconSrc:
      script.getAttribute("data-icon-src") ||
      "https://dcdko16buub2z.cloudfront.net/widget/PjUYPiQFKI8Kxprt.png", // Replace with the appropriate icon URL
    bgColor: script.getAttribute("data-bg-color") || "#1d81d9", // Set to a new blue color
    borderRadius: script.getAttribute("data-border-radius") || "12px", // Adjust border radius for rounded corners
    redirectURL: script.getAttribute("data-redirect-url") || "#",
  };

  // Create the popup element
  const popup = document.createElement("div");
  popup.style.position = "fixed"; // CSS: Fixes the popup to the viewport
  popup.style.bottom = "30px"; // CSS: Sets distance from the bottom to 30px
  popup.style[params.placement] = "30px"; // CSS: Sets distance from the specified placement (e.g., right) to 30px
  popup.style.background = params.bgColor; // CSS: Sets the background color of the popup
  popup.style.color = params.textColor; // CSS: Sets the text color
  popup.style.padding = "0"; // CSS: Resets padding, child elements will handle padding
  popup.style.borderRadius = params.borderRadius; // CSS: Rounds the corners of the popup
  popup.style.display = "flex"; // CSS: Uses flexbox for layout
  popup.style.alignItems = "center"; // CSS: Centers items vertically in the flex container
  popup.style.cursor = "pointer"; // CSS: Changes cursor to indicate clickable element
  popup.style.boxShadow = "0 3px 12px 0 rgb(48 56 80 / 50%)"; // CSS: Adds a shadow effect
  popup.style.transition = "opacity 0.3s"; // CSS: Smooth opacity transition for animations
  popup.style.zIndex = "999999"; // CSS: Ensures the popup stays on top of other elements
  popup.style.opacity = "1"; // CSS: Sets full opacity for visibility
  popup.style.lineHeight = "1.53"; // CSS: Adjusts line height for text spacing

  // Create the icon container (circular element)
  if (params.iconSrc) {
    const iconContainer = document.createElement("span");
    iconContainer.style.minWidth = "50px"; // CSS: Ensures minimum width of 50px
    iconContainer.style.width = "50px"; // CSS: Sets fixed width of 50px
    iconContainer.style.height = "50px"; // CSS: Sets fixed height of 50px
    iconContainer.style.backgroundColor = params.bgColor; // CSS: Matches background color with popup
    iconContainer.style.borderRadius = "12px"; // CSS: Creates a circular shape
    iconContainer.style.display = "flex"; // CSS: Uses flexbox for layout
    iconContainer.style.alignItems = "center"; // CSS: Centers items vertically
    iconContainer.style.justifyContent = "center"; // CSS: Centers items horizontally
    iconContainer.style.color = "#080c13"; // CSS: Sets text color inside icon (optional, may not be needed)

    const icon = document.createElement("img");
    icon.src = params.iconSrc;
    icon.style.width = "35px"; // CSS: Sets icon image width
    icon.style.borderRadius = "50%"; // CSS: Ensures icon is circular
    iconContainer.appendChild(icon);

    popup.appendChild(iconContainer);
  }

  // Create the text element
  const textNode = document.createElement("span");
  textNode.textContent = params.text;
  textNode.style.whiteSpace = "nowrap"; // CSS: Prevents text from wrapping to new lines
  textNode.style.overflow = "hidden"; // CSS: Hides overflow text
  textNode.style.textOverflow = "ellipsis"; // CSS: Shows ellipsis (...) for overflow text
  textNode.style.display = "inline-block"; // CSS: Allows text to behave like an inline element with block properties
  textNode.style.fontFamily = "CarmenSans, 'Montserrat', sans-serif"; // CSS: Sets font to Montserrat or fallback sans-serif
  textNode.style.fontSize = "17px"; // CSS: Sets font size
  textNode.style.fontWeight = "700"; // CSS: Makes text bold
  textNode.style.letterSpacing = "0.46px"; // CSS: Adjusts spacing between letters
  textNode.style.color = params.textColor; // CSS: Sets text color (white)
  textNode.style.paddingLeft = "15px"; // CSS: Adds left padding
  textNode.style.paddingRight = "15px"; // CSS: Adds right padding
  textNode.style.textTransform = "none"; // CSS: Prevents text transformation (e.g., uppercase)

  popup.appendChild(textNode);

  // Add click event listener for redirecting to the specified URL
  popup.addEventListener("click", function () {
    window.location.href = params.redirectURL;
  });

  // Add the popup to the page (ensured DOM is ready via DOMContentLoaded in previous version)
  document.body.appendChild(popup);
})();
