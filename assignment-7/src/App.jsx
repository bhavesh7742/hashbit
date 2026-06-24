import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort in ascending order based on NRR value of each team
        const sortedData = [...data].sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((err) => console.error("Failed to fetch data", err));
  }, []);

  return (
    <div className="app-container">
      <div className="table-card">
        <h1 className="table-title">IPL Season 2022 Points Table</h1>
        <table className="ipl-table">
          <thead>
            <tr>
              <th>No</th>
              <th className="align-left">Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.Team}>
                <td>{index + 1}</td>
                <td className="team-name align-left">{team.Team}</td>
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
    </div>
  );
}

export default App;
