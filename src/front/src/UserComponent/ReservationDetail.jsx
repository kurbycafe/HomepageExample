import {Form} from "react-bootstrap";

const ReservationDetail = () => {
    return (
        <div>
            <h1>Reservation Detail</h1>

            <Form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"  />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email"  />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone"  />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="text" className="form-control" id="date"  />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="text" className="form-control" id="time"  />
                </div>
                <div className="form-group">
                    <label htmlFor="people">People</label>
                    <input type="text" className="form-control" id="people"  />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3"  />
                </div>
            </Form>

        </div>
    );

}

export default ReservationDetail;