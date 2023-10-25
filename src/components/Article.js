import React from "react";

function Article({ title, date, preview }) {
  const formattedDate = date || "January 1, 1970"; // Use a default value if date is not provided

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
