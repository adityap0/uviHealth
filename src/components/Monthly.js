import React, { Component } from "react";

class Monthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
    };
  }
  componentDidMount() {
    this.generateCards();
  }
  generateCards = () => {
    const d = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      0
    ).getDate();
    const dates = [];
    for (let i = 0; i < d; i++) {
      dates.push(i + 1);
    }
    this.setState({
      dates,
    });
  };
  render() {
    const { dates } = this.state;
    return (
      <>
        <ul className="overflow-auto h-96 cursor-pointer">
          {dates.map((date) => {
            return (
              <li className="border p-4 shadow-lg mb-4 bg-blue-50 rounded">
                <span className="p-1 text-xl rounded bg-pink-400 text-white">
                  {date}{" "}
                  {new Date().toLocaleString("default", { month: "long" })}
                </span>
                <ul>
                  <h1 className="inline-block bg-purple-400 text-white my-2 p-1 rounded">
                    All Appointments :
                  </h1>
                  {this.props.allAppointments.map((element) => {
                    if (Number(element.apptDate.slice(8, 10)) === date) {
                      return (
                        <li
                          className={
                            element.isCompleted
                              ? "border flex justify-between bg-green-400 text-white p-2 rounded"
                              : "border flex justify-between bg-red-500 text-white p-2 rounded"
                          }
                        >
                          <span>{element.appointmentName}</span>
                          <span>{element.personName}</span>
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Monthly;
