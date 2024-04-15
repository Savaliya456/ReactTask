import React from 'react';

function Demo() {
  return (
    <div>
      <div className="demo">
        <div className="demo1">
          <h1>Request a Demo</h1>
          <br /><br /><br /><br />
          <h2>Schedule a demo with one of our product consultants.</h2>
        </div>
        <div className="demo2">
          <form>
            <label htmlFor="firstName">&nbsp;&nbsp;&nbsp; FIRST NAME</label><br /><br />
            <input type="text" id="firstName" /><br /><br />
            <label htmlFor="email">&nbsp;&nbsp;&nbsp; EMAIL</label><br /><br />
            <input type="text" id="email" /><br /><br />
            <label htmlFor="company">&nbsp;&nbsp;&nbsp; COMPANY</label><br /><br />
            <input type="text" id="company" /><br /><br />
            <button>Submit</button>
          </form>
        </div>
        <div className="demo3">
          <label htmlFor="lastName">&nbsp;&nbsp;&nbsp; LAST NAME</label><br /><br />
          <input type="text" id="lastName" /><br /><br />
          <label htmlFor="phone">&nbsp;&nbsp;&nbsp; PHONE</label><br /><br />
          <input type="text" id="phone" /><br /><br />
          <label htmlFor="jobTitle">&nbsp;&nbsp;&nbsp; JOB TITLE</label><br /><br />
          <input type="text" id="jobTitle" /><br /><br />
        </div>
      </div>
    </div>
  );
}

export default Demo;
