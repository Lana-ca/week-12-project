// ========================================
// GRIMOIRE DATA - All Entries
// ========================================

const grimoireEntries = [
    // Entry 0: Table of Contents / Home
    {
        id: 0,
        type: 'home',
        title: 'Family Grimoire',
        subtitle: 'A Living Chronicle of Our Stories',
        leftContent: `
            <div class="home-intro">
                <p class="home-text">Welcome to our family grimoire, a sacred space where memories live and breathe. Here you'll find stories passed down through generations, recipes that carry the taste of home, and letters to those who guide us still.</p>
                <p class="home-text">Each page holds a piece of our legacy—the laughter, the lessons, the love that binds us across time and distance.</p>
                <p class="home-text vintage-quote">"Every family is a story waiting to be told."</p>
            </div>
        `,
        rightContent: `
            <h3 class="section-title">Contents</h3>
            <div class="toc-list">
                <div class="toc-item" data-page="1">
                    <span class="toc-icon">🌧️</span>
                    <span class="toc-title">A Rainy Day with Grandma Ruby</span>
                </div>
                <div class="toc-item" data-page="2">
                    <span class="toc-icon">🍰</span>
                    <span class="toc-title">Ruby's Peach Cobbler</span>
                </div>
                <div class="toc-item" data-page="3">
                    <span class="toc-icon">🎵</span>
                    <span class="toc-title">Sunday Mornings at Church</span>
                </div>
                <div class="toc-item" data-page="4">
                    <span class="toc-icon">💌</span>
                    <span class="toc-title">Letter to Grandma Ruby</span>
                </div>
                <div class="toc-item" data-page="5">
                    <span class="toc-icon">🌻</span>
                    <span class="toc-title">The Garden Lessons</span>
                </div>
            </div>
        `
    },

    // Entry 1: Memory - Rainy Day
    {
        id: 1,
        type: 'memory',
        title: 'A Rainy Day with Grandma Ruby',
        date: 'July 1985',
        leftContent: `
            I remember sitting on Grandma Ruby's porch on a rainy afternoon in July. The smell of wet earth mixed with the sweet scent of her peach cobbler cooling on the windowsill. She told me stories about her childhood, about how she and her best friend used to dance in the rain, their feet splashing in the puddles.
            <br><br>
            Ruby was like sunshine, even on the cloudiest days. Her laughter could fill a whole room, warm and golden like honey dripping from a spoon. She always wore yellow – said it reminded her of hope and new beginnings.
            <br><br>
            That day, she taught me how to listen to the rain. "Every drop has a story," she said, her eyes twinkling. And I believed her, because Ruby had a way of making the ordinary feel magical.
        `,
        rightContent: `
            <h3 class="section-title">Captured Moments</h3>
            <div class="photo-container">
                <div class="photo-frame">
                    <div class="photo-placeholder">
                        <span>Grandma Ruby on her porch</span>
                    </div>
                    <div class="photo-corner"></div>
                    <div class="tape tape-left"></div>
                    <div class="tape tape-right"></div>
                </div>
                <p class="photo-caption">Grandma Ruby on her porch</p>
            </div>
            <div class="essence-box">
                <p class="essence-text">
                    <span class="essence-label">Ruby's Essence:</span> Sunshine at noon, smells like fresh peaches and cinnamon, sounds like gentle laughter
                </p>
            </div>
        `,
        effect: 'rain'
    },

    // Entry 2: Recipe - Peach Cobbler
    {
        id: 2,
        type: 'recipe',
        title: "Ruby's Peach Cobbler",
        date: 'Family Recipe - Circa 1940s',
        leftContent: `
            <h3 class="recipe-section">Ingredients</h3>
            <div class="recipe-ingredients">
                <p><strong>For the filling:</strong></p>
                <ul>
                    <li>6 cups fresh peaches, sliced</li>
                    <li>1 cup sugar</li>
                    <li>2 tablespoons flour</li>
                    <li>1 teaspoon cinnamon</li>
                    <li>Pinch of nutmeg</li>
                    <li>2 tablespoons butter</li>
                </ul>
                <p><strong>For the topping:</strong></p>
                <ul>
                    <li>1 cup flour</li>
                    <li>1/2 cup sugar</li>
                    <li>1 teaspoon baking powder</li>
                    <li>1/2 cup milk</li>
                    <li>1/4 cup butter, melted</li>
                </ul>
            </div>
        `,
        rightContent: `
            <h3 class="recipe-section">Instructions</h3>
            <div class="recipe-steps">
                <p><strong>1.</strong> Preheat oven to 350°F.</p>
                <p><strong>2.</strong> Mix peaches with sugar, flour, and spices. Pour into buttered baking dish.</p>
                <p><strong>3.</strong> Combine topping ingredients until smooth.</p>
                <p><strong>4.</strong> Pour topping over peaches.</p>
                <p><strong>5.</strong> Bake 45-50 minutes until golden brown.</p>
            </div>
            <div class="recipe-notes">
                <p class="recipe-note-title">Ruby's Secret:</p>
                <p class="handwritten">"Always use peaches picked at sunrise. They're sweeter. And sing while you bake – the cobbler tastes better with love in it."</p>
            </div>
        `,
        effect: 'warmth'
    },

    // Entry 3: Memory - Sunday Mornings
    {
        id: 3,
        type: 'memory',
        title: 'Sunday Mornings at Church',
        date: 'Every Sunday, 1980s',
        leftContent: `
            Sunday mornings meant waking up to the smell of bacon and the sound of gospel music drifting from the kitchen radio. Mama would press our church clothes the night before, and we'd shine our shoes until we could see our faces in them.
            <br><br>
            The walk to Mount Zion Baptist Church was always filled with neighbors calling out greetings. Mrs. Johnson with her big purple hat, Deacon Williams always early to open the doors, and the Henderson kids racing to see who could get to Sunday school first.
            <br><br>
            Inside, the church would fill with voices – deep and high, old and young – all joining together in songs that seemed to shake the very walls. Sister Mary at the organ, her fingers flying across the keys. The choir swaying in their robes like a wave of purple and gold.
            <br><br>
            Those Sunday mornings taught me that church wasn't just a building. It was family. It was home.
        `,
        rightContent: `
            <h3 class="section-title">The Church Community</h3>
            <div class="community-list">
                <p class="community-member">
                    <strong>Reverend Thompson:</strong> <span class="handwritten">His sermons could make you laugh and cry in the same breath</span>
                </p>
                <p class="community-member">
                    <strong>Sister Mary:</strong> <span class="handwritten">Played organ for 40 years, never missed a Sunday</span>
                </p>
                <p class="community-member">
                    <strong>Deacon Williams:</strong> <span class="handwritten">First one there, last one to leave</span>
                </p>
                <p class="community-member">
                    <strong>The Henderson Family:</strong> <span class="handwritten">Six kids, all could sing like angels</span>
                </p>
            </div>
            <div class="essence-box" style="margin-top: 2rem;">
                <p class="essence-text">
                    <span class="essence-label">Sunday's Essence:</span> Smells like hairspray and perfume, sounds like "Amazing Grace" in four-part harmony, feels like belonging
                </p>
            </div>
        `,
        effect: 'music'
    },

    // Entry 4: Letter
    {
        id: 4,
        type: 'letter',
        title: 'Letter to Grandma Ruby',
        date: 'November 2024',
        leftContent: `
            <div class="letter-header">
                <p class="letter-to">Dear Grandma Ruby,</p>
            </div>
            <div class="letter-body">
                <p>It's been fifteen years since you left us, but I swear I can still hear your laugh echoing through the rooms of my memory. I wish you could see your great-grandchildren. They have your eyes, your smile, your way of making everyone feel special.</p>

                <p>I made your peach cobbler last Sunday. I followed the recipe exactly, even sang while I baked like you taught me. It tasted like summer, like home, like love. The kids said it was the best dessert they ever had, and I told them it was because their great-great-grandmother put magic in the recipe.</p>

                <p>Sometimes I sit on my porch when it rains, and I listen for the stories in each drop, just like you showed me. And I swear, Grandma, sometimes I hear your voice in the thunder, telling me to keep my head up, to keep dancing in the rain.</p>

                <p>Thank you for teaching me that family isn't just blood. It's the people who show up, who love you through the storms, who teach you to find sunshine even on the cloudiest days.</p>

                <p>I love you. I miss you. And I'm living the life you hoped for me.</p>
            </div>
        `,
        rightContent: `
            <div class="letter-body" style="padding-top: 3rem;">
                <p>Your peach trees are still growing in the backyard. Every summer they bloom, and I think of you. I've taught my daughter to pick them at sunrise, just like you taught me.</p>

                <p>The family grimoire is growing. I'm writing down all the stories you told me, all the recipes, all the lessons. Your legacy isn't just in what you left behind – it's in what we're building, generation after generation.</p>

                <p>Keep watching over us, Grandma. And save me a seat on that porch in heaven. We've got a lot of catching up to do.</p>

                <p class="letter-closing">
                    All my love,<br>
                    <span class="letter-signature">Your grandbaby</span>
                </p>
            </div>
            <div class="essence-box" style="margin-top: 2rem;">
                <p class="essence-text" style="font-size: 1rem;">
                    💛 Written with tears and gratitude
                </p>
            </div>
        `,
        effect: 'none'
    },

    // Entry 5: Memory - Garden
    {
        id: 5,
        type: 'memory',
        title: 'The Garden Lessons',
        date: 'Spring 1987',
        leftContent: `
            Grandpa Joe's garden was his pride and joy. Rows of tomatoes, green beans climbing up stakes, sunflowers taller than me. Every Saturday morning, he'd be out there at dawn, talking to his plants like they were old friends.
            <br><br>
            "A garden teaches you patience," he'd say, his weathered hands gentle as he pulled weeds. "You can't rush a seed. You give it good soil, water, sunlight, and time. Same with children. Same with dreams."
            <br><br>
            He taught me to read the sky for rain, to feel the soil to know when to water, to notice which plants grew well together and which ones needed space. But mostly, he taught me that growing things – whether vegetables or people – requires faith in what you cannot yet see.
            <br><br>
            The best lessons came with dirt under our fingernails and the sun on our backs. "This garden will feed us all summer," he'd say. "But what you learn here will feed your soul forever."
        `,
        rightContent: `
            <h3 class="section-title">Grandpa's Garden Wisdom</h3>
            <div class="wisdom-list">
                <div class="wisdom-item">
                    <p class="wisdom-quote">"Pull weeds when they're small. Same with problems in life."</p>
                </div>
                <div class="wisdom-item">
                    <p class="wisdom-quote">"Every plant has its season. Don't try to bloom in winter."</p>
                </div>
                <div class="wisdom-item">
                    <p class="wisdom-quote">"The best fertilizer is the gardener's shadow."</p>
                </div>
                <div class="wisdom-item">
                    <p class="wisdom-quote">"Share what you grow. A harvest is meant to feed the whole community."</p>
                </div>
            </div>
            <div class="essence-box" style="margin-top: 2rem;">
                <p class="essence-text">
                    <span class="essence-label">Grandpa Joe's Essence:</span> Smells like fresh earth and tomato vines, quiet as morning dew, patient as the seasons
                </p>
            </div>
        `,
        effect: 'sunshine'
    }
];

// ========================================
// EFFECTS SYSTEM
// ========================================

function clearEffects() {
    // Clear rain
    const rainContainer = document.getElementById('rainContainer');
    if (rainContainer) {
        rainContainer.innerHTML = '';
    }

    // Remove all effect classes
    const pageRight = document.querySelector('.page-right');
    if (pageRight) {
        pageRight.classList.remove('warmth-effect', 'music-effect', 'sunshine-effect');
    }
}

function createRainEffect() {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer) return;

    for (let i = 0; i < 30; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;
        raindrop.style.animationDuration = `${1.5 + Math.random() * 1}s`;
        rainContainer.appendChild(raindrop);
    }
}

function createWarmthEffect() {
    const pageRight = document.querySelector('.page-right');
    if (pageRight) {
        pageRight.classList.add('warmth-effect');
    }
}

function createMusicEffect() {
    const pageRight = document.querySelector('.page-right');
    if (pageRight) {
        pageRight.classList.add('music-effect');
    }
}

function createSunshineEffect() {
    const pageRight = document.querySelector('.page-right');
    if (pageRight) {
        pageRight.classList.add('sunshine-effect');
    }
}

function applyEffect(effectType) {
    clearEffects();

    switch(effectType) {
        case 'rain':
            createRainEffect();
            break;
        case 'warmth':
            createWarmthEffect();
            break;
        case 'music':
            createMusicEffect();
            break;
        case 'sunshine':
            createSunshineEffect();
            break;
    }
}

// ========================================
// PAGE NAVIGATION
// ========================================

let currentPageIndex = 0;

function renderPage(pageIndex) {
    const entry = grimoireEntries[pageIndex];
    if (!entry) return;

    const pageLeft = document.querySelector('.page-left');
    const pageRight = document.querySelector('.page-right');

    // Update page numbers
    const pageNumLeft = pageLeft.querySelector('.page-number');
    const pageNumRight = pageRight.querySelector('.page-number');

    if (entry.type === 'home') {
        pageNumLeft.textContent = '';
        pageNumRight.textContent = '';
    } else {
        pageNumLeft.textContent = `Page ${pageIndex * 2 - 1}`;
        pageNumRight.textContent = `Page ${pageIndex * 2}`;
    }

    // Update content based on entry type
    if (entry.type === 'home') {
        pageLeft.innerHTML = `
            <div class="page-content">
                <h2 class="entry-title" style="text-align: center; margin-top: 2rem;">${entry.title}</h2>
                <p class="entry-date" style="text-align: center; margin-bottom: 2rem;">${entry.subtitle}</p>
                ${entry.leftContent}
            </div>
            <div class="page-curl"></div>
        `;

        pageRight.innerHTML = `
            <div class="page-content">
                ${entry.rightContent}
            </div>
            <div class="page-curl"></div>
        `;

        // Add click handlers to TOC items
        setTimeout(() => {
            document.querySelectorAll('.toc-item').forEach(item => {
                item.addEventListener('click', () => {
                    const page = parseInt(item.dataset.page);
                    goToPage(page);
                });
            });
        }, 0);

    } else if (entry.type === 'letter') {
        pageLeft.innerHTML = `
            <div class="page-number">${pageNumLeft.textContent}</div>
            <div class="page-content letter-page">
                <h2 class="entry-title">${entry.title}</h2>
                <p class="entry-date">${entry.date}</p>
                ${entry.leftContent}
            </div>
            <div class="page-curl"></div>
        `;

        pageRight.innerHTML = `
            <div class="page-number page-number-right">${pageNumRight.textContent}</div>
            <div class="page-content letter-page">
                ${entry.rightContent}
            </div>
            <div class="rain-container" id="rainContainer"></div>
            <div class="page-curl"></div>
        `;
    } else {
        pageLeft.innerHTML = `
            <div class="page-number">${pageNumLeft.textContent}</div>
            <div class="page-content">
                <h2 class="entry-title">${entry.title}</h2>
                <p class="entry-date">${entry.date}</p>
                <div class="entry-text">${entry.leftContent}</div>
            </div>
            <div class="page-curl"></div>
        `;

        pageRight.innerHTML = `
            <div class="page-number page-number-right">${pageNumRight.textContent}</div>
            <div class="page-content">
                ${entry.rightContent}
            </div>
            <div class="rain-container" id="rainContainer"></div>
            <div class="page-curl"></div>
        `;
    }

    // Apply visual effects
    if (entry.effect) {
        applyEffect(entry.effect);
    }

    // Update navigation buttons
    updateNavButtons();
}

function updateNavButtons() {
    const prevButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');

    prevButton.disabled = currentPageIndex === 0;
    nextButton.disabled = currentPageIndex === grimoireEntries.length - 1;
}

function goToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < grimoireEntries.length) {
        currentPageIndex = pageIndex;
        renderPage(currentPageIndex);
    }
}

function nextPage() {
    if (currentPageIndex < grimoireEntries.length - 1) {
        currentPageIndex++;
        renderPage(currentPageIndex);
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        renderPage(currentPageIndex);
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Render first page
    renderPage(0);

    // Set up navigation buttons
    const prevButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');

    if (prevButton) prevButton.addEventListener('click', prevPage);
    if (nextButton) nextButton.addEventListener('click', nextPage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevPage();
        if (e.key === 'ArrowRight') nextPage();
    });

    console.log('Family Grimoire loaded successfully! ✨📖');
    console.log(`${grimoireEntries.length} entries available`);
});
