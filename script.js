function selectOption(option) {
  if (option === "yes") {
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none";
      displayCatHeart();
    });
  } else if (option === "no") {
    // Change text on the "No" button to "You sure?"
    document.getElementById("no-button").innerText = "You sure?";
    // Increase font size of "Yes" button
    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
    yesButton.style.fontSize = newSize + "px";
  } else {
    // If neither "Yes" nor "No" was clicked, show an alert message
    alert("Invalid option!");
  }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
  var colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  var i = 0;
  var interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200); // Change color every 200 milliseconds
  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = ""; // Reset background color
    if (callback) {
      callback();
    }
  }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
  // Get the container where the image will be displayed
  var imageContainer = document.getElementById("image-container");
  // Create a new Image element for the cat
  var catImage = new Image();
  // Set the source (file path) for the cat image
  catImage.src = "IMG_9731.jpg"; // Assuming the cat image is named "cat.gif"
  // Set alternative text for the image (for accessibility)
  catImage.alt = "Cat";
  // When the cat image is fully loaded, add it to the image container
  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
  document.getElementById("image-container").innerHTML = "";
  var imageContainer = document.getElementById("image-container");

  var catHeartImage = new Image();
  catHeartImage.src = "cat-heart.gif";
  catHeartImage.alt = "Cat Heart";

  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);

    // Add text under the gif
    // Text container
    var textContainer = document.createElement("div");
    textContainer.style.marginTop = "20px";
    textContainer.style.textAlign = "center";
    textContainer.style.maxWidth = "700px";

    // Title text
    var title = document.createElement("p");
    title.innerText = "Yay! 💖";
    title.style.fontFamily = "Comic Sans MS, cursive";
    title.style.color = "#ff4d6d";
    title.style.fontSize = "36px";
    title.style.marginBottom = "15px";

    // Message text
    var message = document.createElement("p");
    message.innerText =
      "Dear Abby,\n\n" +
      "Thank you for being my first Valentine ever. I just want to say that I appreciate you so much and that you make me very happy.\n\n" +
      "I know we have had our ups and downs, but you have always been here. Every moment with you is a blessing for me, and I'm grateful for everything.\n\n" +
      "I know I'm slow and dense sometimes, but I will always try my best to make you happy and always be here for you, no matter what.\n\n" +
      "I love you, Abby Hall, and forever will. Thank you for being in my life.";

    message.style.fontFamily = "Comic Sans MS, cursive";
    message.style.color = "#ff4d6d";
    message.style.fontSize = "22px";
    message.style.whiteSpace = "pre-line"; // 👈 keeps line breaks

    // Append everything
    textContainer.appendChild(title);
    textContainer.appendChild(message);
    imageContainer.appendChild(textContainer);

    document.getElementById("options").style.display = "none";
  };
}

// Display the cat.gif initially
displayCat();
