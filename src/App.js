import React from 'react';
import './App.css'; 
import logo from './logo.png';

const Basic = () => {
  return (
    <div>
      <div className="container">
        <div className="rectangle">
          <img src={logo} alt="Logo" className="logo" />
          <button className="connect">Connect Wallet</button>  
          <ul className="nav">
            <li><a href="/logout">Logout</a></li>
          </ul>
          
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <h1>User Profile</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/829/829218.png" alt="Profile" />
          <p>Username: Reyansh Lambha</p>
          <p>Phone Number: 8898435621</p>
          <p>Aadhar Card Number: 1234-5678-9012</p>
          <p>Address: 123 Bounganvilla Street, New Delhi</p>
        </div>
        <div className="certificate">
          <h1>Certificates</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Issuer</th>
                <th>Type</th>
                <th>Issued At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td> <td>Ved Sahni</td> <td>Issuer 1</td><td>Type 1</td>  <td>2023-05-01</td>
                
              </tr>
              <tr>
              <td>2</td> <td>Kabir Thapar</td> <td>Issuer 2</td><td>Type 2</td>  <td>2023-01-01</td>
              </tr>
              <tr>
              <td>3</td> <td>Siddharth Mehra</td> <td>Issuer 3</td><td>Type 3</td>  <td>2023-02-01</td>
              </tr>
              <tr>
              <td>4</td> <td>Kavya Joshi</td> <td>Issuer 4</td><td>Type 4</td>  <td>2023-03-01</td>
              </tr>
              <tr>
              <td>5</td> <td>Maya Singh</td> <td>Issuer 5</td><td>Type 5</td>  <td>2023-04-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Basic;
