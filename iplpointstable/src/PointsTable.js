import React from 'react';
import './PointsTable.css'; // Optional: for styling

const teams = [
  {
    "No": 1,
    "Team": "Gujarat Titans",
    "Matches": 14,
    "Won": 10,
    "Lost": 4,
    "Tied": 0,
    "NRR": 0.316,
    "Points": 20
  },
  {
    "No": 2,
    "Team": "Rajasthan Royals",
    "Matches": 14,
    "Won": 9,
    "Lost": 5,
    "Tied": 0,
    "NRR": 0.298,
    "Points": 18
  },
  {
    "No": 3,
    "Team": "Lucknow Super Giants",
    "Matches": 14,
    "Won": 9,
    "Lost": 5,
    "Tied": 0,
    "NRR": 0.251,
    "Points": 18
  },
  {
    "No": 4,
    "Team": "Royal Challengers Bangalore",
    "Matches": 14,
    "Won": 8,
    "Lost": 6,
    "Tied": 0,
    "NRR": -0.253,
    "Points": 16
  },
  {
    "No": 5,
    "Team": "Delhi Capitals",
    "Matches": 14,
    "Won": 7,
    "Lost": 7,
    "Tied": 0,
    "NRR": 0.204,
    "Points": 14
  },
  {
    "No": 6,
    "Team": "Punjab Kings",
    "Matches": 14,
    "Won": 7,
    "Lost": 7,
    "Tied": 0,
    "NRR": 0.126,
    "Points": 14
  },
  {
    "No": 7,
    "Team": "Kolkata Knight Riders",
    "Matches": 14,
    "Won": 6,
    "Lost": 8,
    "Tied": 0,
    "NRR": 0.146,
    "Points": 12
  },
  {
    "No": 8,
    "Team": "Sunrisers Hyderabad",
    "Matches": 14,
    "Won": 6,
    "Lost": 8,
    "Tied": 0,
    "NRR": -0.379,
    "Points": 12
  },
  {
    "No": 9,
    "Team": "Chennai Super Kings",
    "Matches": 14,
    "Won": 4,
    "Lost": 10,
    "Tied": 0,
    "NRR": -0.203,
    "Points": 8
  },
  {
    "No": 10,
    "Team": "Mumbai Indians",
    "Matches": 14,
    "Won": 4,
    "Lost": 10,
    "Tied": 0,
    "NRR": -0.506,
    "Points": 8
  }
];

const PointsTable = () => {
  return (
    <div className="points-table">
      <h1>IPL 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.No}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PointsTable;
