const BASE_URL = "http://127.0.0.1:5000";

export const finalResponse = async (prompt) => {
  try {
    const apiUrl = `${BASE_URL}/chat`;

    const response = await fetch(apiUrl, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("checkkk", data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};