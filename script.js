// Educational content for each day
const dailyContent = {
    1: {
        title: "🌟 Welcome to December!",
        content: `
            <h3>The History of Advent Calendars</h3>
            <p>Advent calendars originated in 19th century Germany. The first known advent calendar was handmade in 1851!</p>
            <p>Today, advent calendars help us count down the days until Christmas, often with treats or surprises behind each door.</p>
            <h3>Fun Fact:</h3>
            <p>The word "advent" comes from the Latin word "adventus," meaning "coming" or "arrival."</p>
        `
    },
    2: {
        title: "❄️ Science of Snowflakes",
        content: `
            <h3>Why Are Snowflakes Unique?</h3>
            <p>Every snowflake has six sides due to the molecular structure of ice crystals. They form hexagonal patterns!</p>
            <h3>Amazing Facts:</h3>
            <ul>
                <li>Snowflakes fall at speeds of 1-4 mph</li>
                <li>The largest snowflake ever recorded was 15 inches wide</li>
                <li>It's extremely rare for two snowflakes to look identical due to varying atmospheric conditions</li>
            </ul>
        `
    },
    3: {
        title: "🎅 Santa Around the World",
        content: `
            <h3>Different Names for Santa Claus</h3>
            <ul>
                <li><strong>France:</strong> Père Noël</li>
                <li><strong>Italy:</strong> Babbo Natale</li>
                <li><strong>Russia:</strong> Ded Moroz (Grandfather Frost)</li>
                <li><strong>Netherlands:</strong> Sinterklaas</li>
                <li><strong>Iceland:</strong> Jólasveinar (13 Yule Lads)</li>
            </ul>
            <p>Each culture has its own unique Christmas traditions and gift-bringing figures!</p>
        `
    },
    4: {
        title: "🌲 Christmas Tree Facts",
        content: `
            <h3>The Tradition of Christmas Trees</h3>
            <p>The tradition of decorating evergreen trees during winter dates back thousands of years!</p>
            <h3>Interesting Facts:</h3>
            <ul>
                <li>The first decorated Christmas tree appeared in Germany in the 16th century</li>
                <li>It takes about 7 years to grow an average Christmas tree</li>
                <li>The tallest Christmas tree ever was 221 feet tall in Washington, 1950</li>
            </ul>
        `
    },
    5: {
        title: "⭐ Star Science",
        content: `
            <h3>The Star of Bethlehem</h3>
            <p>Scientists have proposed several astronomical explanations for the Star of Bethlehem:</p>
            <ul>
                <li>A conjunction of Jupiter and Saturn</li>
                <li>A comet or supernova</li>
                <li>A rare planetary alignment</li>
            </ul>
            <h3>Fun Fact:</h3>
            <p>The light from distant stars takes years to reach Earth. When you look at the night sky, you're seeing into the past!</p>
        `
    },
    6: {
        title: "🎵 Music of Christmas",
        content: `
            <h3>Famous Christmas Carols</h3>
            <p>"Silent Night" was composed in 1818 in Austria and has been translated into over 300 languages!</p>
            <h3>Did You Know?</h3>
            <ul>
                <li>"Jingle Bells" was originally written for Thanksgiving</li>
                <li>"The Twelve Days of Christmas" represents the period from Christmas to Epiphany</li>
                <li>Christmas caroling dates back to medieval times</li>
            </ul>
        `
    },
    7: {
        title: "🦌 Reindeer Biology",
        content: `
            <h3>Real Reindeer Facts</h3>
            <p>Reindeer (also called caribou in North America) are fascinating animals adapted to Arctic life!</p>
            <ul>
                <li>Both male and female reindeer grow antlers</li>
                <li>Their noses actually warm the air before it enters their lungs</li>
                <li>They can see ultraviolet light</li>
                <li>Reindeer can run up to 50 mph</li>
            </ul>
        `
    },
    8: {
        title: "🌍 Christmas Around the Globe",
        content: `
            <h3>Unique Christmas Traditions</h3>
            <ul>
                <li><strong>Japan:</strong> KFC on Christmas Eve is a major tradition</li>
                <li><strong>Norway:</strong> People hide their brooms to prevent witches from stealing them</li>
                <li><strong>Ukraine:</strong> Christmas trees are decorated with spider web ornaments for good luck</li>
                <li><strong>Venezuela:</strong> People roller skate to Christmas mass</li>
            </ul>
        `
    },
    9: {
        title: "🍪 Gingerbread History",
        content: `
            <h3>The Story of Gingerbread</h3>
            <p>Gingerbread has been around since ancient times, but became associated with Christmas in Europe!</p>
            <h3>Fun Facts:</h3>
            <ul>
                <li>The first gingerbread man is credited to Queen Elizabeth I</li>
                <li>The largest gingerbread house was 60 feet long</li>
                <li>Medieval monks baked and sold gingerbread at Christmas markets</li>
            </ul>
        `
    },
    10: {
        title: "🎁 Gift-Giving History",
        content: `
            <h3>The Tradition of Gifts</h3>
            <p>Gift-giving during Christmas is inspired by the Biblical story of the Three Wise Men bringing gifts to baby Jesus.</p>
            <h3>Interesting Facts:</h3>
            <ul>
                <li>The tradition of wrapping gifts in decorative paper began in the early 1900s</li>
                <li>Americans spend over $1 trillion on Christmas gifts annually</li>
                <li>The most popular gift in history is thought to be the Teddy Bear</li>
            </ul>
        `
    },
    11: {
        title: "☃️ Snowman History",
        content: `
            <h3>The First Snowmen</h3>
            <p>The earliest documented snowman was made in 1380, illustrated in a medieval book!</p>
            <h3>Cool Facts:</h3>
            <ul>
                <li>The tallest snowman ever built was 122 feet tall in Maine, 2008</li>
                <li>Snowmen were sometimes used to scare enemies in medieval times</li>
                <li>The traditional carrot nose became popular in the 1800s</li>
            </ul>
        `
    },
    12: {
        title: "🕯️ Candles & Light",
        content: `
            <h3>Light During Winter</h3>
            <p>Many winter celebrations involve candles and lights, symbolizing hope during the darkest days of the year.</p>
            <h3>Traditions:</h3>
            <ul>
                <li>Advent candles count down the weeks until Christmas</li>
                <li>Christmas lights became popular after Edison's invention</li>
                <li>The winter solstice (shortest day) occurs around December 21-22</li>
            </ul>
        `
    },
    13: {
        title: "📚 Christmas Stories",
        content: `
            <h3>Classic Christmas Tales</h3>
            <ul>
                <li><strong>"A Christmas Carol"</strong> by Charles Dickens (1843) - Created many modern Christmas traditions</li>
                <li><strong>"The Night Before Christmas"</strong> (1823) - Established Santa's modern image</li>
                <li><strong>"The Nutcracker"</strong> - Originally a story before becoming a ballet</li>
            </ul>
            <p>These stories have shaped how we celebrate Christmas today!</p>
        `
    },
    14: {
        title: "🌟 Winter Solstice",
        content: `
            <h3>The Shortest Day</h3>
            <p>The winter solstice marks the shortest day and longest night of the year in the Northern Hemisphere.</p>
            <h3>Science:</h3>
            <ul>
                <li>Occurs around December 21-22</li>
                <li>After this date, days gradually get longer</li>
                <li>Ancient cultures celebrated this as the "return of the sun"</li>
                <li>Stonehenge aligns with the winter solstice sunset</li>
            </ul>
        `
    },
    15: {
        title: "🎨 Christmas Colors",
        content: `
            <h3>Why Red and Green?</h3>
            <p>Red and green became Christmas colors due to several factors:</p>
            <ul>
                <li><strong>Red:</strong> Holly berries, Santa's suit, represents love and blood of Christ</li>
                <li><strong>Green:</strong> Evergreen trees, represents eternal life and hope</li>
                <li><strong>Gold:</strong> Represents royalty and the gifts of the Wise Men</li>
            </ul>
            <p>These colors have been associated with winter celebrations for centuries!</p>
        `
    },
    16: {
        title: "🌨️ Winter Weather",
        content: `
            <h3>The Science of Winter</h3>
            <p>Winter occurs when the Earth's axis tilts away from the sun, resulting in less direct sunlight.</p>
            <h3>Fascinating Facts:</h3>
            <ul>
                <li>Snow is actually colorless and translucent</li>
                <li>Antarctica is technically a desert (very little precipitation)</li>
                <li>You lose most body heat through your head - a common myth! You lose heat evenly</li>
            </ul>
        `
    },
    17: {
        title: "🔔 Jingle Bells Story",
        content: `
            <h3>The History of Jingle Bells</h3>
            <p>James Lord Pierpont wrote "Jingle Bells" in 1857, originally titled "One Horse Open Sleigh."</p>
            <h3>Surprising Facts:</h3>
            <ul>
                <li>It was written for Thanksgiving, not Christmas!</li>
                <li>It was the first song broadcast from space in 1965</li>
                <li>It's one of the most recorded songs in history</li>
            </ul>
        `
    },
    18: {
        title: "🎄 Evergreen Symbolism",
        content: `
            <h3>Why Evergreens in Winter?</h3>
            <p>Ancient peoples revered evergreens as symbols of eternal life because they stayed green year-round.</p>
            <h3>Cultural Significance:</h3>
            <ul>
                <li>Romans decorated with evergreen branches during Saturnalia</li>
                <li>Druids used evergreens to symbolize everlasting life</li>
                <li>Christians adopted evergreens to represent eternal life through Christ</li>
            </ul>
        `
    },
    19: {
        title: "🌠 Northern Lights",
        content: `
            <h3>Aurora Borealis Magic</h3>
            <p>The Northern Lights are caused by solar particles colliding with Earth's atmosphere!</p>
            <h3>Amazing Facts:</h3>
            <ul>
                <li>Colors depend on which gas particles are hit: oxygen creates green/red, nitrogen creates blue/purple</li>
                <li>They're more visible during winter due to longer nights</li>
                <li>The auroras make sounds - a crackling or whooshing noise</li>
                <li>They occur in the Southern Hemisphere too (Aurora Australis)</li>
            </ul>
        `
    },
    20: {
        title: "🍫 Hot Chocolate History",
        content: `
            <h3>The Story of Hot Chocolate</h3>
            <p>Hot chocolate originated with the ancient Mayans and Aztecs over 2,500 years ago!</p>
            <h3>Sweet Facts:</h3>
            <ul>
                <li>The original recipe was spicy, not sweet</li>
                <li>Europeans added sugar in the 16th century</li>
                <li>Marshmallows were added in the early 1900s</li>
                <li>Americans consume over 65% of the world's hot chocolate</li>
            </ul>
        `
    },
    21: {
        title: "🎭 The Nutcracker",
        content: `
            <h3>Ballet Tradition</h3>
            <p>"The Nutcracker" ballet premiered in 1892 in St. Petersburg, Russia, with music by Tchaikovsky.</p>
            <h3>Fun Facts:</h3>
            <ul>
                <li>It wasn't popular until the 1960s in America</li>
                <li>The ballet is performed thousands of times each December</li>
                <li>It tells the story of a girl's magical Christmas Eve adventure</li>
            </ul>
        `
    },
    22: {
        title: "⛄ Ice & Snow Science",
        content: `
            <h3>The Physics of Ice</h3>
            <p>Ice is less dense than water, which is why it floats - unusual for most substances!</p>
            <h3>Cool Science:</h3>
            <ul>
                <li>This property allows fish to survive winter in frozen lakes</li>
                <li>Pure ice is actually transparent, not white</li>
                <li>Ice can take many different crystalline forms</li>
                <li>Glaciers contain 69% of the world's fresh water</li>
            </ul>
        `
    },
    23: {
        title: "🌙 Christmas Eve Traditions",
        content: `
            <h3>The Night Before Christmas</h3>
            <p>Christmas Eve has special significance in many cultures around the world!</p>
            <h3>Global Traditions:</h3>
            <ul>
                <li><strong>Poland:</strong> A 12-course meatless dinner</li>
                <li><strong>Mexico:</strong> Las Posadas - reenacting Mary and Joseph's journey</li>
                <li><strong>Philippines:</strong> Attending midnight mass (Simbang Gabi)</li>
                <li><strong>Italy:</strong> Feast of the Seven Fishes</li>
            </ul>
        `
    },
    24: {
        title: "🎄 Merry Christmas!",
        content: `
            <h3>You Made It! 🎉</h3>
            <p>Congratulations on completing the Christmas Educational Calendar!</p>
            <h3>What We've Learned:</h3>
            <p>Over the past 24 days, we've explored the history, science, and cultural traditions of Christmas from around the world. We've discovered:</p>
            <ul>
                <li>The origins of beloved Christmas traditions</li>
                <li>Fascinating scientific facts about winter</li>
                <li>Cultural celebrations from different countries</li>
                <li>The stories behind Christmas songs and tales</li>
            </ul>
            <h3>Thank You!</h3>
            <p>Thank you for joining us on this educational journey through December. May your holidays be filled with joy, learning, and wonder!</p>
            <p><strong>🎄 Merry Christmas! 🎄</strong></p>
        `
    }
};

// Initialize calendar
function initializeCalendar() {
    const calendarGrid = document.getElementById('calendar');
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // 0-indexed, December = 11
    
    // For testing purposes, you can unlock all doors by uncommenting the line below
    // const currentDay = 25;
    
    for (let day = 1; day <= 24; day++) {
        const door = createDoor(day, currentDay, currentMonth);
        calendarGrid.appendChild(door);
    }
}

// Create individual calendar door
function createDoor(day, currentDay, currentMonth) {
    const door = document.createElement('div');
    door.className = 'calendar-door';
    
    // Check if door should be unlocked
    // Door is unlocked if: it's December AND the day has arrived (or passed)
    const isUnlocked = currentMonth === 11 && day <= currentDay;
    
    // Check if door has been opened (stored in localStorage)
    const isOpened = localStorage.getItem(`day-${day}-opened`) === 'true';
    
    if (!isUnlocked) {
        door.classList.add('locked');
    }
    
    if (isOpened) {
        door.classList.add('opened');
    }
    
    // Door number
    const doorNumber = document.createElement('div');
    doorNumber.className = 'door-number';
    doorNumber.textContent = day;
    door.appendChild(doorNumber);
    
    // Door icon
    const doorIcon = document.createElement('div');
    doorIcon.className = 'door-icon';
    doorIcon.textContent = isOpened ? '✓' : '🎁';
    door.appendChild(doorIcon);
    
    // Status indicator
    const statusIcon = document.createElement('div');
    statusIcon.className = 'door-status';
    if (!isUnlocked) {
        statusIcon.textContent = '🔒';
    } else if (isOpened) {
        statusIcon.textContent = '✨';
    } else {
        statusIcon.textContent = '🔓';
    }
    door.appendChild(statusIcon);
    
    // Add click event
    if (isUnlocked) {
        door.addEventListener('click', () => openDoor(day, door));
    } else {
        door.addEventListener('click', () => {
            alert(`This door will unlock on December ${day}! Come back then to discover what's inside. 🎄`);
        });
    }
    
    return door;
}

// Open door and show content
function openDoor(day, doorElement) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Get content for the day
    const content = dailyContent[day];
    
    if (content) {
        modalTitle.textContent = `Day ${day}: ${content.title}`;
        modalBody.innerHTML = content.content;
        
        // Mark as opened
        localStorage.setItem(`day-${day}-opened`, 'true');
        doorElement.classList.add('opened');
        
        // Update door icon
        const doorIcon = doorElement.querySelector('.door-icon');
        doorIcon.textContent = '✓';
        
        const statusIcon = doorElement.querySelector('.door-status');
        statusIcon.textContent = '✨';
        
        // Show modal
        modal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeCalendar();
    
    // Close modal when clicking X
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    const modal = document.getElementById('modal');
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
