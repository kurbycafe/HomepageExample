import {Button, Form} from "react-bootstrap";
import {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const ReservationDetail = (location) => {

    const params = new URLSearchParams(window.location.search);
    const resDate = params.get('resDate');
    const resTime = params.get('resTime') + ":00";
    console.log(resDate);

    const submitForm = () => {

        const formData = new FormData(document.getElementById('frm'));

        axios.post('http://localhost:8080/reservation/apply', formData)
            .then(response => {
                if (response.status === 200 && response.data.SUCCESS === true) {
                    alert('login success');
                    /*window.location.href = '/';*/
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div>
            <h1>Reservation Detail</h1>
            <Form id="frm">
                <Form.Group className="mb-3" controlId="resAddr">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="resEmail" type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="resVorName">
                    <Form.Label>Vorname</Form.Label>
                    <Form.Control name="resVorName" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="resNachName">
                    <Form.Label>Nachname</Form.Label>
                    <Form.Control name="resNachName" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="resPhone">
                    <Form.Label>Handy nummer</Form.Label>
                    <Form.Control name="resPhone" type="text"
                                  onChange={(e) =>
                        e.target.value = e.target.value.replace(/[^0-9]/g, '')
                         }/>

                    <Form.Text className="text-muted">
                        please type your phone number without - or space
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="resGender">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Select aria-label="Geschlecht">
                        <option value="1">Mann</option>
                        <option value="2">Frau</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="resDate">
                    <Form.Label>Reservation Date</Form.Label>
                    <Form.Control name="resDate" type={"text"} value={resDate} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="resTime">
                    <Form.Label>Reservation Time</Form.Label>
                    <Form.Control name="resTime" type="text" value={resTime} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="resCont">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={10} name="resCont" />
                </Form.Group>
                <div className="d-flex justify-content-center align-content-center">
                    <Button onClick={submitForm}> submit</Button>
                </div>
            </Form>

        </div>
    );

}

export default ReservationDetail;