import "./App.css";
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import Feednav from "./components/Feednav";
import Filters from "./components/Filters";
import FixAppointment from "./components/FixAppointment";
import { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Appointment from "./components/Appointment";
import moment from "moment";
import Monthly from "./components/Monthly";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAppointments: [],
      view: "day",
      appointmentLabel: null,
    };
  }
  changeView = (view) => {
    this.setState({
      view,
    });
  };
  changeappointmentLabel = (type) => {
    if (this.state.appointmentLabel === type) {
      this.setState({
        allAppointments: JSON.parse(localStorage.allAppointments),
        appointmentLabel: null,
      });
    } else {
      let allAppointments = JSON.parse(localStorage.allAppointments);
      allAppointments = allAppointments.filter((appt) => {
        if (appt.apptType === type) {
          return appt;
        }
      });
      this.setState({
        allAppointments,
        appointmentLabel: type,
      });
    }
  };
  completeAppointment = () => {
    this.state.allAppointments.forEach((appt) => {
      if (
        moment(new Date()).format("MMM Do YY") >=
          moment(appt.apptDate).format("MMM Do YY") &&
        moment(moment(new Date()).format("LT"), "h:mm A").format("HH:mm") >=
          appt.apptTime
      ) {
        appt.isCompleted = true;
      }
    });
  };
  componentDidUpdate() {
    this.completeAppointment();
  }
  componentDidMount() {
    if (localStorage.allAppointments) {
      this.setState({
        allAppointments: JSON.parse(localStorage.allAppointments),
      });
    }
    this.completeAppointment();
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", () => {
      localStorage.setItem(
        "allAppointments",
        JSON.stringify(this.state.allAppointments)
      );
    });
  }
  handleAppointment = (appointment) => {
    const allAppointments = this.state.allAppointments;
    allAppointments.push(appointment);
    this.setState(
      (prevState) => {
        return {
          allAppointments,
        };
      },
      () => {
        localStorage.setItem(
          "allAppointments",
          JSON.stringify(this.state.allAppointments)
        );
      }
    );
  };
  render() {
    return (
      <>
        <Header />
        <Route path="/" exact={true}>
          <Hero />
          <main className="w-10/12 mx-auto p-4 flex justify-between">
            <div className="w-8/12">
              <Feednav changeView={this.changeView} view={this.state.view} />
              {this.state.view === "day" ? (
                <Appointment
                  allAppointments={this.state.allAppointments}
                  key={this.state.allAppointments.length}
                  view={this.state.view}
                />
              ) : (
                <Monthly
                  allAppointments={this.state.allAppointments}
                  key={this.state.allAppointments.length}
                  view={this.state.view}
                />
              )}
            </div>
            <div className={this.state.view === "month" ? "hidden" : "w-3/12"}>
              <Filters
                changeappointmentLabel={this.changeappointmentLabel}
                appointmentLabel={this.state.appointmentLabel}
              />
            </div>
          </main>
        </Route>
        <Route path="/new" exact={true}>
          <FixAppointment handleAppointment={this.handleAppointment} />
        </Route>
      </>
    );
  }
}

export default withRouter(App);
