import React from "react";
function updateTime() {
  const indiaTime = moment.tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
}

const time = new Date().toString();
const now = new Date().toString();

const Body = () => {
  return (
    <div>
      <h2>This is the clock that shows time in USA at all times.</h2>
      <h2>
        Current Date is : {now} a Current Time is : {time}
      </h2>
    </div>
  );
};

export default Body;
