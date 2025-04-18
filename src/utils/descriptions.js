export const getAvatarDescription = (avatarName) => {
    const descriptions = {
        "Dog": "A Royal Corgi who gets along well with cats.",
        
        "Crocodile": "Green and yellow, yellow and green.",
        
        "Duck": "All ducks look like this.",
        
        "Cat": "An orange cat with a red collar.",
        
        "Otter": "The otter doesn't know what’s next, for he simply lives in the present.",
        
        "Tiger": "In me the tiger sniffs the rose.",
        
        "Dinosaur": "A green dinosaur with a beige body and sleepy eyes.",

        "Moose": "What you lookin' at? i ain't pullin' no sleigh.",

        "Gorilla": "He has a tender heart and muscles of steel.",
    };
    
    return descriptions[avatarName] || "A mysterious creature with extraordinary abilities and unknown origins.";
};

// Map avatar images to their names
export const getAvatarNameMapping = () => {
    return {
        "Dog": "NemoAvatar",
        "Crocodile": "CocoAvatar",
        "Duck": "HarryAvatar",
        "Cat": "MacchiatoAvatar",
        "Otter": "OtterAvatar",
        "Tiger": "TiagraAvatar",
        "Dinosaur": "UnderbiteAvatar",
        "Moose": "MorseAvatar",
        "Gorilla": "BarbieAvatar",
    };
};

// Find avatar name from image URL
export const getAvatarNameFromUrl = (imageUrl) => {
    const mapping = getAvatarNameMapping();
    const fileName = imageUrl.split('/').pop().split('.')[0];
    
    for (const [name, imgName] of Object.entries(mapping)) {
        if (imgName === fileName) {
            return name;
        }
    }
    
    return "";
};