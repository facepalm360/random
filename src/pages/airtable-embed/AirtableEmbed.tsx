import React from "react";

export default function AirtableEmbed() {
  return (
    <div>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrUKmz91Cf1iOKGM?backgroundColor=green&layout=card&viewControls=on"
        frameBorder="0"
        width="100%"
        height="800"
        style={{ background: "transparent", border: "1px, solid #ccc;" }}
      ></iframe>
    </div>
  );
}
