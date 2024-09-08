// src/services/apiService.js
export const fetchLGAResults = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/lgas');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching LGAs:', error);
      throw error;
    }
  };
  
  export const fetchWardResults = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/wards');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching Wards:', error);
      throw error;
    }
  };
  
  export const fetchPollingUnitResults = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/polling-units');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching Polling Units:', error);
      throw error;
    }
  };
  