import React from "react";

interface SchemasProps {
  schemaData?: any; // Making schemaData optional to prevent undefined errors
}

// Function to format date properly
function formatDate(date: any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const timezoneOffset = -date.getTimezoneOffset() / 60;
  const offset = timezoneOffset >= 0 ? `+${timezoneOffset}` : timezoneOffset;
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offset}:00`;
}

// Schema Component
const Schemas: React.FC<SchemasProps> = ({ schemaData = {} }) => {
  // Ensure acfPageAdditionalOptions exists
  const cityName = schemaData?.acfPageAdditionalOptions?.acfCityName || "your city";

  // Debugging: Check if data is loaded correctly
  console.log("Schema Data:", schemaData);
  console.log("City Name:", cityName);

  // Prevent rendering if data is not available
  if (!schemaData.acfPageAdditionalOptions) {
    return null;
  }

  // Schema Data
  const schema = {
    thumbnailUrl:
      "https://www.amarwebdesigner.com/images/amardeep-singh-website-designer-maker-in-india.jpg?fit=1920%2C1080&ssl=1",
    keywords: [
      `Website designer in ${cityName}`,
      `Website maker in ${cityName}`,
      `Web developer in ${cityName}`,
      `Best website designer in ${cityName}`,
    ],
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default Schemas;
