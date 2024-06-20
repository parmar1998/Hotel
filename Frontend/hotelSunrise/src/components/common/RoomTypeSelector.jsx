import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFunction";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
    // State variables using the useState hook
    const [roomTypes, setRoomTypes] = useState([]);  // Array of room types
    const [showNewRoomTypeInput, setShowNewRoomTypesInput] = useState(false);  // Flag to show/hide new room type input
    const [newRoomType, setNewRoomType] = useState("");  // State for new room type input

    // useEffect hook to fetch room types when component mounts
    //The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data);  // Sets the fetched room types into state
        });
    }, []);

    // Handles changes in the new room type input field
    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);  // Updates new room type state
    };

    // Handles adding a new room type to the list
    const handleAddNewRoomType = () => {
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType]);  // Adds new room type to the roomTypes array
            setNewRoomType("");  // Clears the new room type input field
            setShowNewRoomTypesInput(false);  // Hides the new room type input field
        }
    };

    // JSX to render in the component
    return (
        <>
            {/* Conditional rendering based on the length of roomTypes array */}
            {roomTypes.length > 0 && (
                <div>
                    {/* Select dropdown for room types */}
                    <select
                        name="roomType"
                        id="roomType"
                        value={newRoom.newRoomType}  // Selected room type value
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowNewRoomTypesInput(true);  // Shows new room type input field
                            } else {
                                handleRoomInputChange(e);  // Calls parent component function to handle input change
                            }
                        }}
                    >
                        <option value={""}>select a room type</option>
                        <option value={"Add New"}>Add New</option>
                        {/* Maps through roomTypes array to render options */}
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>

                    {/* Renders the new room type input field if showNewRoomTypeInput is true */}
                    {showNewRoomTypeInput && (
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter a new room type"
                                onChange={handleNewRoomTypeInputChange}
                            />
                            <button
                                className="btn btn-hotel"
                                type="button"
                                onClick={handleAddNewRoomType}
                            >
                                Add
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default RoomTypeSelector;
