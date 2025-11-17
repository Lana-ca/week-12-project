// Rain Effect
function createRainEffect() {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer) return;

    // Create 30 raindrops
    for (let i = 0; i < 30; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';

        // Random horizontal position
        raindrop.style.left = `${Math.random() * 100}%`;

        // Random animation delay
        raindrop.style.animationDelay = `${Math.random() * 2}s`;

        // Random animation duration
        raindrop.style.animationDuration = `${1.5 + Math.random() * 1}s`;

        rainContainer.appendChild(raindrop);
    }
}

// Initialize rain effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    createRainEffect();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Log a welcome message
    console.log('Family Grimoire loaded successfully! ✨📖');
});

// Future: Add page navigation functionality
// const prevButton = document.querySelector('.nav-prev');
// const nextButton = document.querySelector('.nav-next');
//
// prevButton.addEventListener('click', () => {
//     // Navigate to previous page
// });
//
// nextButton.addEventListener('click', () => {
//     // Navigate to next page
// });
