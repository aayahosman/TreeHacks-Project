import fs from 'fs/promises';

// Helper function to read a JSON file
const readJsonFile = async (filePath) => {
    try {
        const data = await fs.readFile(`./json/${filePath}`, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return [];
    }
};

// Helper function to write data to a JSON file
const writeJsonFile = async (filePath, data) => {
    try {
        await fs.writeFile(`./json/${filePath}`, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error);
    }
};

// Function to find mutual matches based on interest
const findMatches = async () => {
    const users = await readJsonFile('users.json');
    const swipes = await readJsonFile('swipes.json');
    let matches = await readJsonFile('matches.json');

    const rightSwipes = {}; // { userId: [profileId, profileId] }

    // Store all right swipes
    swipes.forEach(swipe => {
        if (swipe.direction === "right") {
            if (!rightSwipes[swipe.userId]) {
                rightSwipes[swipe.userId] = [];
            }
            rightSwipes[swipe.userId].push(swipe.profileId);
        }
    });

    const newMatches = [];

    // Check for mutual swipes with matching interests
    for (const swipe of swipes) {
        if (
            swipe.direction === "right" &&
            rightSwipes[swipe.profileId]?.includes(swipe.userId) // Mutual right swipe
        ) {
            const userA = users.find(u => u.id === swipe.userId);
            const userB = users.find(u => u.id === swipe.profileId);

            if (userA && userB && userA.preference === userB.preference) { // Interest match
                const matchExists = matches.some(
                    match => (match.userId === userA.id && match.profileId === userB.id) ||
                             (match.userId === userB.id && match.profileId === userA.id)
                );

                if (!matchExists) {
                    const newMatch = {
                        userId: userA.id,
                        profileId: userB.id,
                        preference: userA.preference,
                        createdAt: new Date().toISOString()
                    };
                    newMatches.push(newMatch);
                }
            }
        }
    }

    // Save new matches if found
    if (newMatches.length > 0) {
        matches = [...matches, ...newMatches];
        await writeJsonFile('matches.json', matches);
        console.log("New matches found and saved:", newMatches);
    } else {
        console.log("No new matches found.");
    }
};

// Run the function
findMatches();
