import NemoAvatar from '../assets/NemoAvatar.webp';
import CocoAvatar from '../assets/CocoAvatar.webp';
import HarryAvatar from '../assets/HarryAvatar.webp';
import MacchiatoAvatar from '../assets/MacchiatoAvatar.webp';
import OtterAvatar from '../assets/OtterAvatar.webp';
import TiagraAvatar from '../assets/TiagraAvatar.webp';
import UnderbiteAvatar from '../assets/UnderbiteAvatar.webp';
import MorseAvatar from '../assets/MorseAvatar.webp';
import BarbieAvatar from '../assets/BarbieAvatar.webp';

export const avatarOptions = [
    { name: "Dog", image: NemoAvatar },
    { name: "Crocodile", image: CocoAvatar },
    { name: "Duck", image: HarryAvatar },
    { name: "Cat", image: MacchiatoAvatar },
    { name: "Otter", image: OtterAvatar },
    { name: "Tiger", image: TiagraAvatar },
    { name: "Dinosaur", image: UnderbiteAvatar },
    { name: "Moose", image: MorseAvatar },
    { name: "Gorilla", image: BarbieAvatar },
];

export const getAvatarNameFromImage = (imageUrl) => {
    const matchingAvatar = avatarOptions.find(avatar => avatar.image === imageUrl);
    return matchingAvatar ? matchingAvatar.name : "";
};

export {
    NemoAvatar,
    CocoAvatar,
    HarryAvatar,
    MacchiatoAvatar,
    OtterAvatar,
    TiagraAvatar,
    UnderbiteAvatar,
    MorseAvatar,
    BarbieAvatar
};