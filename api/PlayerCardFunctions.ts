// api/PlayerCardFunctions.ts
const apiURL = 'http://172.28.16.1:8000';

export const getTrainingSessionsCount = async (playerId: number) => {
  try {
    const response = await fetch(`${apiURL}/api/Sessions/TrainingSessionsCount/${playerId}`);

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return data.Session_Count;
    } else {
      console.error('Error:', response.statusText);
      return 0;
    }
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
};

export const getTotalTrainingTime = async (playerId: number) => {
  try {
    const response = await fetch(`${apiURL}/api/Sessions/TotalTrainingTime/${playerId}`);

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return { totalSessionHours: data.totalSessionHours, totalSessionMinutes: data.totalSessionMinutes };
    } else {
      console.error('Error:', response.statusText);
      return { totalSessionHours: '00', totalSessionMinutes: '00' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { totalSessionHours: '00', totalSessionMinutes: '00' };
  }
};

export const getTotalScore = async (playerId: number) => {
  try {
    const response = await fetch(`${apiURL}/api/Sessions/TotalScore/${playerId}`);

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      console.log('Total Score:', data.TotalScore);
      return parseFloat(data.TotalScore).toFixed(0);
    } else {
      console.error('Error:', response.statusText);
      return '';
    }
  } catch (error) {
    console.error('Error:', error);
    return '';
  }
};

export const getTotalGames = async (playerId: number) => {
  try {
    const response = await fetch(`${apiURL}/api/Sessions/totalGames/${playerId}`);

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return data.totalGames;
    } else {
      console.error('Error:', response.statusText);
      return 0;
    }
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
};

export const getPlayerName = async (playerId: number) => {
  try {
    const response = await fetch(`${apiURL}/api/Sessions/PlayerName/${playerId}`);

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return { firstname: data.firstname, lastname: data.lastname };
    } else {
      console.error('Error:', response.statusText);
      return { firstname: '', lastname: '' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { firstname: '', lastname: '' };
  }
};
