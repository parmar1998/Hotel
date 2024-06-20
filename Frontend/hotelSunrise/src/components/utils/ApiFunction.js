// Axios is a popular JavaScript library used to make HTTP requests from both the browser and Node.js environments. It provides a simple and powerful API to interact with endpoints, handle responses, and manage HTTP requests. Here are some of the primary uses and features of Axios:
import axios from 'axios'


export const api = axios.create({
    baseURL: "http://localhost:8080"
})
//It returns a promise, and you can use it to work with promises more comfortably.
// This function add a new room to DB
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);
    //The await keyword can only be used inside an async function. It pauses the execution of the function until the promise is resolved, and then it returns the resolved value. If the promise is rejected, it throws an error that can be caught using try and catch.
    const response = await api.post("/rooms/add/new-room", formData);
    if (response.status == 201) {
        return true;
    }
    else {
        return false;
    }
}

// This function gets all roomm types from DB
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/roomTypes");
        return response.data;
    }
    catch (error) {
        throw new Error("Error fetching room Types")
    }
}