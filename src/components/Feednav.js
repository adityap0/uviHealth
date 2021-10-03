import React from "react";
class FeedNav extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li
              className={
                this.props.view === "day"
                  ? "text-green-700 inline-block text-xl p-3 border-b-2 border-green-700"
                  : "text-gray-500 inline-block text-xl p-3 border-b-2"
              }
            >
              <button
                onClick={() => {
                  this.props.changeView("day");
                }}
              >
                Today
              </button>
            </li>
            <li
              className={
                this.props.view === "month"
                  ? "text-green-700 inline-block text-xl p-3 border-b-2 border-green-700"
                  : "text-gray-500 inline-block text-xl p-3 border-b-2"
              }
            >
              <button
                onClick={() => {
                  this.props.changeView("month");
                }}
              >
                This Month
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
export default FeedNav;
