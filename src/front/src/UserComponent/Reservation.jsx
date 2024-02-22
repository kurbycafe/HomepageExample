import React, {useEffect, useState} from 'react';

import Calendar from "react-calendar";

import "./calendar-custom.css"
import {Button, Table} from "react-bootstrap";

import axios from "axios";
function Reservation() {
    const [dateState, setDateState] = useState(new Date())

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [value, onChange] = useState(new Date())

    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    useEffect(() => {
        // 여기에서 초기화 로직을 작성합니다.
        // 예를 들어, 처음에 선택한 날짜에 따라 가능한 시간대를 설정할 수 있습니다.
        const timeSlots = getAvailableTimeSlots(selectedDate);
        setAvailableTimeSlots(timeSlots);
    }, []);
    const changeDate = date => {

        setSelectedDate(date);
        // 여기에서 선택한 날짜에 따라 가능한 시간대를 설정합니다.
        const timeSlots = getAvailableTimeSlots(date);
        setAvailableTimeSlots(timeSlots);
    };

    const ClickSelect = (e) => {

        setSelectedTime(e.target.id);

        let selected = document.querySelector(".selected");
        if (selected) {
            selected.classList.remove("selected");
            selected.style.backgroundColor = "white";

        }
        //add class active to clicked element
        e.target.classList.add("selected");
    //css added to selected class
        e.target.style.backgroundColor = "lightblue";



    }

    const getAvailableTimeSlots = (date) => {
        return [

            //time list as json

            '9:00', '10:00', '11:00',
            '12:00', '13:00', '14:00',
            '15:00', '16:00', '17:00',
        ];
    };


    const reserve = () => {

        /*
        * get selected date and transform it to ISO format
        */
        let formattedDate = selectedDate.toISOString().split('T')[0]; // 선택된 날짜를 ISO 형식의 문자열로 변환

        const date = formattedDate.split('-');
        formattedDate = date[2] + '-' + date[1] + '-' + date[0];

        if (selectedTime === '') {
            alert("Please select a time slot");
            return;
        }
        // check if user want to keep going on reservation with selected date and time
        if (!window.confirm(`Do you want to reserve on ${formattedDate} at ${selectedTime}?`)) {
            return;
        }

        axios.post('/reservation/apply', {
            date: formattedDate,
            time: selectedTime
        }
        ).then(response => {
            if (response.data.success) {
                alert("Reservation is successful");
            } else {
                alert("Reservation is failed");
            }
        }
        );


        //move to reservation page
        window.location.href = "/reservation/apply?date=" + formattedDate + "&time=" + selectedTime;
    }


    return (
        <>
            <h1 className="mt-5 mb-4">Reservierung</h1>



            <div className="d-flex align-items-center justify-content-center " style={{minHeight: "70vh"}}>

                <Calendar
                    onChange={onChange} value={value}
                    className="w-75 p-5"
                    locale={"de-DE"}
                    onClickDay={changeDate}
                />
            </div>
            <h3>Available Time Slots for {selectedDate.toDateString()}:</h3>
            <div className="text-center justify-content-center d-flex">

                <Table bordered hover className="w-25">

                    <tbody>
                    {availableTimeSlots.map((timeSlot, index) => (
                        <tr key={index} onClick={ClickSelect}>
                            <td id={index+9}>{timeSlot}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

            </div>
            <div className="text-center justify-content-center d-flex">
                <Button variant="primary" type="submit" onClick={reserve} > Reservierung</Button>
            </div>
        </>
    )
}

export default Reservation;
