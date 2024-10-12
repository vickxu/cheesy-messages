const messages = [
    "Why did the cheese go to the gym? To get stronger!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Did you know? The world's oldest cheese was found in an Egyptian tomb and is over 3,000 years old!",
    "How do you get a mouse to smile? Say 'cheese'!",
    "The average American consumes about 40 pounds of cheese per year. That's a lot of cheddar!",
    "What kind of cheese is made backwards? Edam!",
    "The most expensive cheese in the world is made from donkey milk and costs over $600 per pound!",
    "Why couldn't the cheese get a loan? It had a bad credit score!",
    "There's a cheese bank in Italy that accepts cheese as collateral for loans. Now that's a gouda idea!",
    "What did the cheese say to itself in the mirror? Halloumi!",
    "The moon isn't made of cheese, but if it were, it would take about 10 billion cows to produce enough milk for it.",
    "What's a cheese's favorite Beatles song? Let it brie, let it brie, let it brie, let it brie!",
    "In 2020, U.S. cheese consumption hit an all-time high. Americans were really milking that quarantine!",
    "How do you disguise a horse as a zebra? Camembert!",
    "The strings on string cheese are actually one continuous piece of cheese. It's knot what you think!"
];

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function changeMessage() {
    const messageElement = document.getElementById('dynamicMessage');
    if (messageElement) {
        messageElement.textContent = getRandomMessage();
    }
}

function sendSMS() {
    const phoneNumberElement = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberElement.value;
    if (!phoneNumber) {
        alert('Please enter a phone number');
        return;
    }
    const messageElement = document.getElementById('dynamicMessage');
    if (messageElement) {
        const message = messageElement.textContent;
        window.location.href = `sms:${phoneNumber}&body=${encodeURIComponent(message || '')}`;
    }
}

function addCheese() {
    const cheese = document.createElement('div');
    cheese.textContent = '🧀';
    cheese.className = 'cheese';
    
    const size = Math.random() * 100 + 50; // Random size between 50px and 150px
    cheese.style.fontSize = `${size}px`;
    
    const startPosition = Math.random() * 100;
    cheese.style.left = `${startPosition}vw`;
    
    const fallDuration = Math.random() * 10 + 10; // Random duration between 10s and 20s
    cheese.style.animationDuration = `${fallDuration}s, ${fallDuration * 2}s`;
    
    document.body.appendChild(cheese);
    
    // Remove the cheese element when the animation ends
    cheese.addEventListener('animationiteration', () => {
        if (cheese.style.animationName.includes('fall')) {
            cheese.remove();
        }
    });
}

// Add initial set of cheese
for (let i = 0; i < 10; i++) {
    addCheese();
}

// Continue adding cheese at intervals
setInterval(addCheese, 2000);

// Set initial message
changeMessage();