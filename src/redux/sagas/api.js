export const fetchData = async (movie) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
    );
    const data = await response.json();
    console.log('fetchData via API=', data);
    return data;
  } catch (e) {}
};
