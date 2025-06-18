export async function getVisitorLocation() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return `${data.city}, ${data.country_name}`;
  } catch (error) {
    console.error("Failed to get visitor location", error);
    return "Unknown";
  }
}
