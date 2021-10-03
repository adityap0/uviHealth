import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
class FixAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      appointmentName: null,
      personName: null,
      apptType: `Fitness Coach`,
      apptDate: moment().format("L"),
      apptTime: moment(moment(new Date()).format("LT"), "h:mm A").format(
        "HH:mm"
      ),
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { appointmentName, personName, apptType, apptDate, apptTime } =
      this.state;
    const appointment = {
      appointmentName,
      personName,
      apptType,
      apptDate,
      apptTime,
      isCompleted: false,
    };
    this.props.handleAppointment(appointment);
    this.props.history.push("/");
  };
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <form className="w-5/12 mx-auto my-14" onSubmit={this.handleSubmit}>
          <h1 className="text-center text-5xl my-4">Make an appointment</h1>
          <div className="flex flex-col relative">
            <input
              type="text"
              name="appointmentName"
              className="border rounded w-full my-2 p-4"
              placeholder="Appointment Name"
              onChange={this.handleChange}
              required={true}
            />
            <input
              type="text"
              name="personName"
              className="border rounded w-full my-2 p-4"
              placeholder="Person Name"
              onChange={this.handleChange}
              required={true}
            />

            <select
              name="apptType"
              className="border rounded w-full my-2 p-4"
              onChange={this.handleChange}
            >
              <option
                className="border rounded w-full my-2 p-4"
                default
                disabled
              >
                Select type
              </option>
              <option className="border rounded w-full my-2 p-4">
                Fitness Coach
              </option>
              <option className="border rounded w-full my-2 p-4">
                Nutrition Coach
              </option>
              <option className="border rounded w-full my-2 p-4">
                Doctor Coach
              </option>
            </select>
            <input
              className="border rounded w-full my-2 p-4"
              type="date"
              name="apptDate"
              defaultValue={moment().format("L")}
              onChange={this.handleChange}
              min={new Date()
                .toISOString()
                .replace(/T.*/, "")
                .split("-")
                .join("-")}
            ></input>

            <input
              className="border rounded w-full my-2 p-4"
              type="time"
              name="apptTime"
              defaultValue={moment(
                moment(new Date()).format("LT"),
                "h:mm A"
              ).format("HH:mm")}
              onChange={this.handleChange}
            ></input>

            <button
              type="submit"
              className="bg-green-400 w-2/12 p-4 rounded text-white absolute -bottom-16 right-0 cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(FixAppointment);
