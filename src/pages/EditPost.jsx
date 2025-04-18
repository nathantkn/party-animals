import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditPost.css';
import { supabase } from '../Client';

// Import avatar images
import NemoAvatar from '../assets/NemoAvatar.webp';
import CocoAvatar from '../assets/CocoAvatar.webp';
import HarryAvatar from '../assets/HarryAvatar.webp';
import MacchiatoAvatar from '../assets/MacchiatoAvatar.webp';
import OtterAvatar from '../assets/OtterAvatar.webp';
import TiagraAvatar from '../assets/TiagraAvatar.webp';
import UnderbiteAvatar from '../assets/UnderbiteAvatar.webp';

const EditPost = ({ data }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [animal, setAnimal] = useState({
        id: id,
        name: "",
        superpower: "",
        avatar: "",
        selectedAvatarName: "" // New field to track selected avatar name
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

    // Load data for the specific animal when component mounts
    useEffect(() => {
        const loadAnimal = () => {
            if (data) {
                const foundAnimal = data.find(item => item.id === id);
                if (foundAnimal) {
                    // Find which avatar name corresponds to the current image
                    const avatarName = getAvatarNameFromImage(foundAnimal.avatar);
                    
                    setAnimal({
                        id: foundAnimal.id,
                        name: foundAnimal.name,
                        superpower: foundAnimal.superpower,
                        avatar: foundAnimal.avatar,
                        selectedAvatarName: avatarName
                    });
                }
            }
        };

        loadAnimal();
    }, [id, data]);

    // Helper function to get avatar name from image URL
    const getAvatarNameFromImage = (imageUrl) => {
        const matchingAvatar = avatarOptions.find(avatar => avatar.image === imageUrl);
        return matchingAvatar ? matchingAvatar.name : "";
    };

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

    const updateAnimal = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({
                name: animal.name,
                superpower: animal.superpower,
                avatar: animal.avatar
            })
            .eq('id', id);

        // Redirect to the animal's detail page
        navigate(`/post/${id}`);
    };

    const deleteAnimal = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        navigate('/gallery');
    };

    return (
        <div className="edit-container">
            <h1>Edit Animal</h1>
            <form className="edit-form">
                <div className="form-group">
                    <label htmlFor="name">Animal Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={animal.name}
                        onChange={handleChange}
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
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <select 
                        id="avatar" 
                        name="avatar" 
                        value={animal.selectedAvatarName}
                        onChange={handleAvatarChange}
                        className="avatar-select"
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
                    <button type="button" className="back-button" onClick={() => navigate(`/post/${id}`)}>
                        Back
                    </button>
                    <button type="submit" className="update-button" onClick={updateAnimal}>
                        Update Animal
                    </button>
                    <button type="button" className="delete-button" onClick={deleteAnimal}>
                        Delete Animal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;