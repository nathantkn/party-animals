export const getAvatarDescription = (avatarName) => {
    const descriptions = {
        "Dog": "A Royal Corgi who gets along well with cats",
        
        "Crocodile": "Ancient and patient, this mighty reptile has jaws that can crush steel. With armored skin and incredible swimming abilities, it rules both water and land.",
        
        "Duck": "Don't be fooled by its innocent appearance! This duck has mastered water, land, and air travel. Its quack can create sonic booms that ripple through water.",
        
        "Cat": "Mysterious and agile, this feline can see in complete darkness and slip through the smallest spaces. Its purr has healing properties that can mend broken objects.",
        
        "Otter": "The playful engineer of the animal kingdom, this otter can build incredible underwater structures. It can hold its breath for hours and communicate with all aquatic creatures.",
        
        "Tiger": "Majestic and powerful, this tiger moves with silent grace. Its stripes can hypnotize opponents, and its roar can be heard across mountains.",
        
        "Dinosaur": "A creature from another time, this dinosaur combines ancient strength with modern intelligence. Its scales can change color to blend with any environment."
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
        "Dinosaur": "UnderbiteAvatar"
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