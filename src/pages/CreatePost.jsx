import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreatePost.css';
import { supabase } from '../Client';

// Import avatar images
import NemoAvatar from '../assets/NemoAvatar.webp';
import CocoAvatar from '../assets/CocoAvatar.webp';
import HarryAvatar from '../assets/HarryAvatar.webp';
import MacchiatoAvatar from '../assets/MacchiatoAvatar.webp';
import OtterAvatar from '../assets/OtterAvatar.webp';
import TiagraAvatar from '../assets/TiagraAvatar.webp';
import UnderbiteAvatar from '../assets/UnderbiteAvatar.webp';


const CreatePost = () => {
    const navigate = useNavigate();
    const [animal, setAnimal] = useState({
        name: "",
        superpower: "",
        avatar: "",
        selectedAvatarName: ""
    });

    const avatarOptions = [
        { name: "Dog", image: NemoAvatar },
        { name: "Crocodile", image: CocoAvatar },
        { name: "Duck", image: HarryAvatar },
        { name: "Cat", image: MacchiatoAvatar },
        { name: "Otter", image: OtterAvatar },
        { name: "Tiger", image: TiagraAvatar },
        { name: "Dinosaur", image: UnderbiteAvatar },
    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnimal((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    // Handle avatar selection from dropdown
    const handleAvatarChange = (event) => {
        const selectedAvatarName = event.target.value;
        const selectedAvatar = avatarOptions.find(avatar => avatar.name === selectedAvatarName);
        
        if (selectedAvatar) {
            setAnimal((prev) => {
                return {
                    ...prev,
                    avatar: selectedAvatar.image,
                    selectedAvatarName: selectedAvatarName
                };
            });
        } else {
            // If "Select an avatar" is chosen
            setAnimal((prev) => {
                return {
                    ...prev,
                    avatar: "",
                    selectedAvatarName: ""
                };
            });
        }
    };

    const createAnimal = async (event) => {
        event.preventDefault();

        // Validate input fields
        if (!animal.name || !animal.superpower || !animal.avatar) {
            alert("Please fill in all fields");
            return;
        }

        // Insert the new animal into the database
        const { data, error } = await supabase
            .from('Posts')
            .insert({
                name: animal.name,
                superpower: animal.superpower,
                avatar: animal.avatar
            })
            .select();

        navigate('/gallery');
    };

    return (
        <div className="create-container">
            <h1>Create New Animal</h1>
            <form className="create-form">
                <div className="form-group">
                    <label htmlFor="name">Animal Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={animal.name}
                        onChange={handleChange}
                        placeholder="Enter animal name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="superpower">Superpower</label>
                    <input
                        type="text"
                        id="superpower"
                        name="superpower"
                        value={animal.superpower}
                        onChange={handleChange}
                        placeholder="Enter superpower"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <select 
                        id="avatar" 
                        name="avatar"
                        onChange={handleAvatarChange}
                        className="avatar-select"
                        value={animal.selectedAvatarName}
                    >
                        <option value="">Select an avatar</option>
                        {avatarOptions.map((avatar, index) => (
                            <option key={index} value={avatar.name}>
                                {avatar.name}
                            </option>
                        ))}
                    </select>
                </div>

                {animal.avatar && (
                    <div className="avatar-preview">
                        <img src={animal.avatar} alt={animal.name || "Selected avatar"} />
                    </div>
                )}

                <div className="button-group">
                    <button type="button" className="back-button" onClick={() => navigate('/gallery')}>
                        Cancel
                    </button>
                    <button type="submit" className="create-button" onClick={createAnimal}>
                        Create Animal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;