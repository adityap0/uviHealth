import React from "react";
import moment from "moment";
class Appointment extends React.Component {
  render() {
    const allAppointments = this.props.allAppointments;
    return (
      <>
        {allAppointments.map((apt, id) => {
          if (
            this.props.view === "day" &&
            moment(new Date()).format("MMM Do YY") ===
              moment(apt.apptDate).format("MMM Do YY")
          ) {
            return (
              <article className="border-b border-t p-4" key={id}>
                <div className="flex flex-col align-middle justify-between">
                  <h1 className="text-red-500 text-xl">{apt.personName}</h1>
                  <span className="text-xl text-blue-500">
                    @{" "}
                    {moment(`${apt.apptDate} ${apt.apptTime}`).format(
                      "MMMM Do YYYY, h:mm a"
                    )}
                  </span>
                </div>
                <div className="my-4 flex justify-between">
                  <h1 className="text-xl font-bold">{apt.appointmentName}</h1>
                  <h1 className="border p-1">{apt.apptType} Appointment</h1>
                  {apt.isCompleted ? (
                    <button className="mx-1 rounded px-1 border text-xl  bg-green-300 text-white">
                      Completed
                    </button>
                  ) : (
                    <button className="mx-1 rounded px-1 border text-xl  bg-red-500 text-white">
                      Up Coming
                    </button>
                  )}
                </div>
              </article>
            );
          }
        })}
      </>
    );
  }
}

export default Appointment;
