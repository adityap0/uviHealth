import React from "react";
class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentLabel: this.props.appointmentLabel,
    };
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="p-2 bg-gray-200 my-4">
          <ul className="flex flex-wrap justify-evenly align-middle">
            {["Fitness Coach", "Nutrition Coach", "Doctor Coach"].map(
              (type) => {
                return (
                  <li
                    className={
                      this.props.appointmentLabel === type
                        ? "flex rounded px-2 m-1 cursor-pointer bg-green-400 text-white hover:bg-green-500"
                        : "flex rounded px-2 m-1 cursor-pointer bg-gray-400 text-white hover:bg-gray-500"
                    }
                    onClick={() => {
                      this.props.changeappointmentLabel(`${type}`);
                    }}
                  >
                    {type}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Filters;
