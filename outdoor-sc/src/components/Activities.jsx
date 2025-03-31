const getActivities = async () => {
  const url = "https://jaervin1.github.io/json/activity.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
