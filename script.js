// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add click event listeners to each item
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Toggle the content's visibility
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

//rec................

const icon = document.getElementById("icon");
const recommendation = document.getElementById("recommendation");

icon.addEventListener("click", function () {
    if (recommendation.style.display === "block") {
        recommendation.style.display = "none";
    } else {
        recommendation.style.display = "block";
    }
});

// Close the recommendation if the user clicks outside the icon container
window.addEventListener("click", function (event) {
    if (event.target !== icon) {
        recommendation.style.display = "none";
    }
});