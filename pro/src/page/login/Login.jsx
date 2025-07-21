// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [studentID, setstudentID] = useState('');
//   const [DateOfBirth, setDateOfBirth] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/login', {
//         register_no: studentID,
//         dob: DateOfBirth,
//       });
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage("Login failed. Invalid credentials.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Register Number:</label>
//         <input
//           type="text"
//           value={studentID}
//           onChange={(e) => setstudentID(e.target.value)}
//           required
//         />
//         <br /><br />
//         <label>Date of Birth:</label>
//         <input
//           type="date"
//           value={DateOfBirth}
//           onChange={(e) => setDateOfBirth(e.target.value)}
//           required
//         />
//         <br /><br />
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  const [studentID, setStudentID] = useState('');
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        studentID: studentID,
        DateOfBirth: dob,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Student ID:</label>
        <input
          type="text"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          required
        />
        <br /><br />
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
export default Login;
