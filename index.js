document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("paidUsers");

  // Retrieves current counter, or default to 100
  let paidUsersCount = localStorage.getItem("paidUsersCount");

  if (!paidUsersCount) {
    paidUsersCount = 84512; // Initial fake count
  } else {
    paidUsersCount = parseInt(paidUsersCount);
  }

  const updateCounter = () => {
    counterElement.textContent = paidUsersCount;
    localStorage.setItem("paidUsersCount", paidUsersCount);
  };

  updateCounter();

  const incrementCounter = () => {
    paidUsersCount += Math.floor(Math.random()) + 1;
    updateCounter();

    // Get a random interval between 1 and 5 seconds
    const randomInterval = Math.floor(Math.random() * 4000) + 1000; //->ms

    setTimeout(incrementCounter, randomInterval);
  };

  incrementCounter();
});
