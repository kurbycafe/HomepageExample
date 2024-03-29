import React, {useEffect, useState} from 'react';

import Calendar from "react-calendar";

import "./calendar-custom.css"
import {Button, Table} from "react-bootstrap";

import axios from "axios";
import service from "./Service";
function Reservation() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');


    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    /**
     * get current time(CET) from server
     * @returns current time (format : dd-MM-yyyy HH:mm:ss)
     * @returns  current day of week in German (format : EEEE)
     * @returns availableTimeSlots
     * @param date
     */
    const getAvailableTimeSlots = (date) => {
        let resDate = null;

        if(date !== undefined){
            resDate = date

        }


        axios.post('/api/getReservationInfo', {
            resDate: resDate
        })
            .then(response => {

                    console.log('서버 시간 full: ', response.data.srvDateTime);
                    console.log('서버 시간', response.data.srvDate)
                    console.log('user selected date:', response.data.usrDateTime);

                    setAvailableTimeSlots(response.data.timeSlotList);

                }
            );
    }


    useEffect(() => {
        getAvailableTimeSlots();
    }, []);

    /*
    * function to change date on calendar
    * */
    const changeDate = date => {

        console.log("selected date: "+date);
        getAvailableTimeSlots(date);

    };

    /*
    * time selector
    * */
    const ClickSelect = (e) => {

        /*setSelectedTime(e.target.id);

        //request to server to get reservation list


        let selected = document.querySelector(".selected");
        if (selected) {
            selected.classList.remove("selected");
            selected.style.backgroundColor = "white";

        }
        //add class active to clicked element
        e.target.classList.add("selected");
    //css added to selected class
        e.target.style.backgroundColor = "lightblue";
*/


    }





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



        const formData = new FormData();

        formData.append("resDate" , formattedDate);
        formData.append("resTime", selectedTime);

        //move to reservation page
        window.location.href = "/reservation/apply?resDate=" + formattedDate + "&resTime=" + selectedTime;
    }


    return (
        <>
            <h1 className="mt-5 mb-4">Reservierung</h1>

           {/* {reservationList.map(reservation => (
                <li key={reservation.id}>
                    <p>Reservation ID: {reservation.resDate}</p>
                    <p>Reservation Time: {reservation.resTime}</p>
                     restime 변수에 접근하여 사용
                     예약 정보의 나머지 부분도 필요에 따라 출력
                </li>
            ))}*/}

            <div className="d-flex align-items-center justify-content-center " style={{minHeight: "70vh"}}>

                <Calendar

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
