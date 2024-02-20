import React, {useState} from 'react';

import Calendar from "react-calendar";

import "./calendar-custom.css"
import * as availableTimeSlots from "react-bootstrap/ElementChildren";

function Reservation() {
    const [dateState, setDateState] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [value, onChange] = useState(new Date())

    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    const changeDate = date => {
        setSelectedDate(date);
        // 여기에서 선택한 날짜에 따라 가능한 시간대를 설정합니다.
        const timeSlots = getAvailableTimeSlots(date);
        setAvailableTimeSlots(timeSlots);
    };


    const getAvailableTimeSlots = (date) => {
        // 여기에 선택한 날짜에 따라 가능한 시간대를 계산하는 로직을 작성합니다.
        // 예를 들어, 데이터베이스에서 해당 날짜의 예약된 시간대를 가져오거나
        // 미리 정의된 시간대 중에서 선택할 수 있는 시간대를 반환할 수 있습니다.
        // 이 예시에서는 임의로 시간대를 생성하여 반환합니다.
        return [
            '9:00 AM', '10:00 AM', '11:00 AM',
            '12:00 PM', '1:00 PM', '2:00 PM',
            '3:00 PM', '4:00 PM', '5:00 PM',
        ];
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center " style={{minHeight: "100vh"}}>

                <Calendar
                    onChange={onChange} value={value}
                    className="w-75 p-5"
                    locale={"de-DE"}
                    onClickDay={changeDate}
                />
            </div>

            <div>
                <h3>Available Time Slots for {selectedDate.toDateString()}:</h3>
                <ul>
                    {availableTimeSlots.map((timeSlot, index) => (
                        <li key={index}>{timeSlot}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Reservation;
