import React, { useState } from 'react';
import './AddRoom.css'
import Alert from '@mui/material/Alert';

function AddRoom() {
  const [formData, setFormData] = useState(
    {
    roomNumber: '',
    capacity: '',
    includesAc: false,
    status: '',
    vacancy: 3,
    students: [],
   },
  );

  const [isSuccess,setIsSuccess] = useState(false);
  const [isFailure,setIsFailure] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform the POST request using formData
    try {
      const roomArray = [{...formData}];
      const response = await fetch('http://localhost:8084/add-rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomArray),
      })
      .then(response => 
        {
          if(response.ok){
            setIsSuccess(true);
          }else{
            setIsFailure(false);
          }
          setFormData({
            roomNumber: '',
            capacity: '',
            includesAc: false,
            status: '',
            vacancy: '',
            students: []
          });
          return response.json()
        })
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (Event) => {
    const {name,value,type,checked} = Event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({...formData,[name]: newValue});
    setIsSuccess(false);
    setIsFailure(false);
  };

  return (<>
    {isFailure && <Alert severity="error">Some Error Occurred</Alert>}
    {isSuccess && <Alert severity="success">Room Successfully Added</Alert>}
    <div className="add-room-container ">
      <h2 className="add-room-heading">Add Room</h2>
      <form onSubmit={handleSubmit} className="add-room-form">
        <label>
          Room Number:
          <input type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />
        </label>
        <label>
          Capacity:
          <select name="capacity" value={formData.capacity} onChange={handleChange}>
            <option value=''>Select</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
        <label>
          Includes AC:
          <input
            type="checkbox"
            name="includesAc"
            checked={formData.includesAc}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
         
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select</option>
            <option value="available">Available</option>
            <option value="not available">Not Available</option>
          </select>
        </label>
        <label>
          Vacancy:
          <input type="number" name="vacancy" value={formData.vacancy} onChange={handleChange} />
        </label>
        <button type="submit">Add Room</button>
      </form>
    </div>
    </>
  );
}

export default AddRoom;
