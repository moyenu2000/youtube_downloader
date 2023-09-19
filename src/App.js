// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [students, setStudents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const fetchData = async () => {
//     try {
//       const response = await axios.post(`https://mernbackend-xi.vercel.app/student`, {name: searchTerm});
//       setStudents(response.data);
//     } catch (error) {
//       console.error('There was an error fetching the data', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={fetchData}>Search</button>

//         <div>
//           {students.map((student) => (
//             <div key={student._id} className="student-box">
//               <p>Registration: {student.Registration}</p>
//               <p>Name: {student.Name}</p>
//               <p>College: {student.College}</p>
//               <p>Result: {student.ResultPassed}</p>
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post(`https://mernbackend-xi.vercel.app/student`, {name: searchTerm});
      setStudents(response.data);
    } catch (error) {
      console.error('There was an error fetching the data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h3>Record by Name</h3>
      </header>

      <form id="searchForm">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <input type="button" value="Search" onClick={fetchData} />
      </form>

      <h2>Result:</h2>
      <div id="result">
        {students.map((student) => (
          <div className="record" key={student._id}>
            <p><strong>Registration:</strong> {student.Registration}</p>
            <p><strong>Name:</strong> {student.Name}</p>
            <p><strong>College:</strong> {student.College}</p>
            <p><strong>Result:</strong> {student.ResultPassed}</p>
            <hr />
          </div>
        ))}
      </div>

      <footer>perplexed_me</footer>
    </div>
  );
}

export default App;
