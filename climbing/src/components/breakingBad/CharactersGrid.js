import React from "react";
import Character from "./Character";

const Characters = ({ items, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <section>
          <h4 className="center collection-header">Breaking Bad Characters</h4>
          <ul className="collection with-header cards">
            {items.map((item) => (
              <Character key={item.char_id} item={item} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Characters;
