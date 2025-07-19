import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
  Alert,
  Collapse,
  Button,
} from "react-bootstrap";

const ScheduleNewAppointments = () => {
  // const[patientName, setPatientName] = useState("");
  const [inputs, setInputs] = useState("");
  //   const [gender, setGender] = useState("Select Gender");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", inputs);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Schedule New Appointment</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div id="patient-details-collapse">
                    <h3>Patient Details</h3>
                    <Row>
                      <Col>
                        <label htmlFor="patientName" className="form-label">
                          Patient Name
                        </label>
                        <input
                          type="text"
                          className="form-control" // Bootstrap class for inputs
                          id="patientName"
                          name="patientName"
                          value={inputs.patientName || ""}
                          onChange={handleChange}
                          placeholder="Enter patient's full name"
                          required
                        />
                      </Col>
                      <Col>
                        <label htmlFor="status" className="form-label">
                          Appointment Status:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="status"
                          name="status"
                          value="New"
                          onChange={handleChange}
                          readObly
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                        <select
                          className="form-select" // Bootstrap class for select
                          id="gender"
                          name="gender"
                          value={inputs.gender || ""}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </Col>
                      <Col>
                        <label htmlFor="dateOfBirth" className="form-label">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={inputs.dateOfBirth || ""}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="contactNumber" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="contactNumber"
                          name="contactNumber"
                          value={inputs.contactNumber || ""}
                          onChange={handleChange}
                          placeholder="e.g., +91-9876543210"
                          pattern="[0-9]{10}"
                          title="Please enter a 10-digit phone number"
                          required
                        />
                      </Col>
                      <Col>
                        <label htmlFor="emailAddress" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailAddress"
                          name="emailAddress"
                          value={inputs.emailAddress || ""}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          required
                        />
                      </Col>
                    </Row>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Enter full address"
                        required
                      ></textarea>
                    </div>
                    <Row>
                      <Col>
                        <label
                          htmlFor="insuranceProvider"
                          className="form-label"
                        >
                          Insurance Provider
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="insuranceProvider"
                          name="insuranceProvider"
                          value={inputs.insuranceProvider || ""}
                          onChange={handleChange}
                          placeholder="e.g., ABC Insurance Co."
                        />
                      </Col>
                      <Col>
                        <label htmlFor="policyNumber" className="form-label">
                          Policy Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="policyNumber"
                          name="policyNumber"
                          value={inputs.policyNumber || ""}
                          onChange={handleChange}
                          placeholder="e.g., P-123456789"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <h3>Appointment Details</h3>
                    <Row>
                      <Col>
                        <label
                          htmlFor="dateofAppointment"
                          className="form-label"
                        >
                          Date of Appointment
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dateofAppointment"
                          name="dateofAppointment"
                          value={inputs.dateofAppointment || ""}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label
                          htmlFor="timeofAppointment"
                          className="form-label"
                        >
                          Time of Appointment:
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          id="timeofAppointment"
                          name="timeofAppointment"
                          value={inputs.timeofAppointment || ""}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                   
                      {/* <label htmlFor="reasonForVisit" className="form-label">
                        Reason for Visit
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="reasonForVisit"
                        name="reasonForVisit"
                        value={inputs.reasonForVisit || ""}
                        rows="3"
                        placeholder="Enter Reason for Visit"
                      ></textarea> */}

                      <div className="mb-3">
                      <label htmlFor="reasonForVisit" className="form-label">
                        Reason for Visit
                      </label>
                      <textarea
                        className="form-control"
                        id="reasonForVisit"
                        name="reasonForVisit"
                        value={inputs.reasonForVisit || ""}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Enter Reason for Visit"
                        required
                      ></textarea>
                    </div>

                  
                    <Row>
                      <Col>
                        <label htmlFor="preferredDoctor" className="form-label">
                          Preferred Doctor/Specialist
                        </label>
                        <select
                          className="form-select"
                          id="preferredDoctor"
                          name="preferredDoctor"
                          value={inputs.preferredDoctor || ""}
                          onChange={handleChange}
                          placeholder="Select Doctor"
                        >
                          <option value="">Select Doctor</option>
                          <option value="Akash">Dr. Akash</option>
                          <option value="Madhav">Dr. Madhav</option>
                          <option value="Adarsh">Dr. Adarsh Tayamgol</option>
                          <option value="Adarsh">Dr. Veeresh</option>
                        </select>
                      </Col>
                      <Col>
                        <label htmlFor="appointmentType" className="form-label">
                          Appointment Type
                        </label>
                        <select
                          className="form-select"
                          id="appointmentType"
                          name="appointmentType"
                          value={inputs.appointmentType || ""}
                        >
                          <option value="In-person">In-person</option>
                          <option value="Telehealth/Virtual">
                            Telehealth/Virtual
                          </option>
                          <option value="Urgent Care">Urgent Care</option>
                          <option value="Routine">Routine</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      style={{
                        width: "300px",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Schedule Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleNewAppointments;
