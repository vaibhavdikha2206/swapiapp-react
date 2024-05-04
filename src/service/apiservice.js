// apiService.js
export async function fetchDataFromAPI(text) {
  try {
    const response = await fetch("https://swapi.dev/api/people/?format=json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchDataFromAPIFromText(text) {
  try {
    //const response = await fetch("https://swapi.dev/api/${text}/?format=json");
    //const response = await fetch("http:localhost:8080/swapi2/${text}");
    const response = await fetch(`http://localhost:8080/api/swapi3/${text}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
