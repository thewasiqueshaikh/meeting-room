import React ,{useState} from 'react'
import '../homepage/homepage.css'
import Calendar from 'react-calendar';
import {FloatingLabel,Form} from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import Booking from '../Booking/booking';
import axios from 'axios';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [value, onChange] = useState(new Date());
  const [room, setRoom] = useState("");
  const [person, setPerson] = useState("");
  const [discrip, setDiscrip] = useState("");
  const [timeSelected, setTimeSelected] = useState(null);
    const [rooms,setState]=useState([]);
  axios({
    method: 'GET',
    url: 'http://localhost:6503/api/rooms',
    headers: { 'Content-Type': 'application/json' }
    }).then(res => setState({ rooms : res.data.Rooms }))
    .catch(err => console.log(err))


  const handleMeeting = (event) => {
    setRoom(event.target.value);
  };
  const handleName = (event) => {
    setPerson(event.target.value);
  };
  const handleDiscription = (event) => {
    setDiscrip(event.target.value);
  };

  const handleTimeSelector = (time) => {
    setTimeSelected(time);
    console.log(rooms);
  };
  const bookRoom = () => {
    let flag = true;
    data.map((elem) => {
      if (
        elem.room === room &&
        elem.timeSelected === timeSelected &&
        elem.dt === value.toLocaleDateString()
      ) {
        alert("Already booked");
        flag = false;
      }
      return <h1>No</h1>;
    });
    if (flag) {
      if (
        room !== "" &&
        person !== "" &&
        discrip !== "" &&
        timeSelected !== null
      ) {
        const d = {
          room: room,
          person: person,
          discription: discrip,
          dt: value.toLocaleDateString(),
          timeSelected: timeSelected
        };
        setData([...data, d]);
        alert("Booked");
        setRoom("");
        setPerson("");
        setDiscrip("");
        setTimeSelected(null);
      } else {
        alert("Check all fields or reselect Room!");
      }
    }
  };
// console.log(rooms);
  return (
    <div className='container'>
        <div className='header'>
            <button>Logout</button>
        </div>
        <div className='text-center'>
            <h1>Meeting Room Booking</h1>
            <br/>    
        </div>
        <div className='center'>
        <FloatingLabel 
            controlId="floatingSelect" 
            label="Meeting Room" 
            className="inputs"  
            onChange={(event) => handleMeeting(event)}
            value={room}>
            <Form.Select className="inputs">
                <option value="MeetingRoom1">Meeting room 1</option>
                <option value="MeetingRoom2">Meeting room 2</option>
                <option value="MeetingRoom3">Meeting room 3</option>
                </Form.Select>
               
        </FloatingLabel>  
        <br/>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3 inputs">
            <Form.Control 
                type="text" 
                placeholder="Enter your Name"  
                className="inputs"  
                onChange={(event) => handleName(event)}
                value={person}/>
        </FloatingLabel>
        
        <FloatingLabel controlId="floatingDescription" label="Description"  className="inputs">
            <Form.Control 
                type="text" 
                placeholder="Enter Meeting Description"  
                className="inputs"  
                onChange={(event) => handleDiscription(event)}
                value={discrip}/>
        </FloatingLabel>
     </div>
     <br/>
     <div className="center">
      <Calendar onChange={onChange} value={value} />
     </div>
     <Booking handleTimeSelector={handleTimeSelector} />
     <button className="btn btn-danger m-3 inputs " onClick={() => bookRoom()}>
        BOOK APPOINTMENT
      </button>
      <br/>
      <div className='text-center'>
            <h1>Events Scheduled</h1>
            <br/>    
        </div>
      <div className="container">
        <table class="table table-hover">
          <thead class="table-danger">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Room</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, id) => (
              <tr>
                <td scope="row">{id + 1}</td>
                <td>{element.room}</td>
                <td>{element.person}</td>
                <td>{element.dt}</td>
                <td>{element.timeSelected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
   </div>
  )
}

export default Homepage