import React from 'react';

const CollectionList = ({ collections }) => {
  return (
    <ul>
      {collections.map((collection) => (
        <li key={collection.id}>
          <h3>{collection.title}</h3>
          <ul>
            {collection.notes.map((note) => (
              <li key={note.id}>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CollectionList;
