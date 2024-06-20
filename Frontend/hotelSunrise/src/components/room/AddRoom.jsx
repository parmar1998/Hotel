import React, { useState } from 'react'
import RoomTypeSelector from '../common/RoomTypeSelector';

const Addroom = () => {
    const [newRoom, setnewRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
    })

    const [imagePreview, setImagePreview] = useState("");
    const [successImage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const hanndleRoomInput = (e) => {
        const name = e.target.name;
        let value = e.target.value

        if (name === 'roomPrice') {
            if (!isNaN(value)) {
                value.parseInt(value);
            }
            else {
                value = ""
            }
        }
        setnewRoom({ ...newRoom, [name]: value })
    }


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setnewRoom({ ...newRoom, photo: selectedImage })
        setImagePreview(URL.createObjectURL(selectedImage));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const success = await Addroom(newRoom.photo, newRoom.roomType, newRoom.roomPrice);
            if (success !== undefined) {
                setSuccessMessage("A new room was added to the DB")
                setnewRoom({ photo: null, roomType: "", roomPrice: "" })
                setImagePreview("");
                setErrorMessage("");
            }
            else {
                setErrorMessage("Error adding room")
            }
        }
        catch (error) {
            setErrorMessage(error.message)
        }
    }
    return (
        <>
            <section className='container,mt-5,mb-5'>
                <div className='row  justify-content-center'>
                    <div className='col-md-8 col-lg-6'>
                        <h2 className='mt-5 mb-2'>Add New Room</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='roomType' className='form-label'>Room Type</label>
                                <div>
                                    <RoomTypeSelector
                                     handleRoomInputChange={hanndleRoomInput}
                                     newRoom={newRoom} />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='roomPrice' className='form-label'>Room Price</label>
                                <input className='form-control'
                                    required id="roomPrice"
                                    type='number'
                                    name='roomPrice'
                                    value={newRoom.roomPrice}
                                    onChange={hanndleRoomInput} />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor='photo' className='form-label'>Room Photo</label>
                                <input
                                    id='photo'
                                    name='photo'
                                    type='file'
                                    className='form-control'
                                    onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <img src={imagePreview} alt='Preview Room photo'
                                        style={{ maxWidth: "400px", maxHeight: "400px" }}
                                        className='mb-3' />
                                )}
                            </div>
                            <div className='d-grid d-md-flex mt-2' >
                                <button className='btn btn-outline-primary ml-5'>
                                    Save Room
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Addroom