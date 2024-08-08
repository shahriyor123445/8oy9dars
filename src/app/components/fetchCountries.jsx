"use client";

import React, { useState, useEffect } from "react";

function FetchCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://covid-19-data.p.rapidapi.com/help/countries?format=json";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d4c0fe99bbmsh2e2838cf44a894bp1acd03jsn5c531048d93f",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Tarmoq javobi yaxshi emas");
        }
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Total Deaths 85,646</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3code}>
            <div>
              <h2 className="text-lg font-semibold">{country.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchCountries;
