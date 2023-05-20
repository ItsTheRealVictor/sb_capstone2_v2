import React, { useState } from 'react';
import Collection from './Collection';

function CollectionGenerator() {
  const [collections, setCollections] = useState([]);
  const [sidebarItems, setSidebarItems] = useState([]);

  const addCollection = () => {
    const newCollection = { title: '', backgroundColor: '#ffffff', notes: [] };
    setCollections([...collections, newCollection]);
  };

  const saveCollection = (index, updatedCollection) => {
    const updatedCollections = [...collections];
    updatedCollections[index] = updatedCollection;
    setCollections(updatedCollections);

    const updatedSidebarItems = [...sidebarItems];
    updatedSidebarItems[index] = updatedCollection.title;
    setSidebarItems(updatedSidebarItems);
  };

  return (
    <div>
      {collections.map((collection, index) => (
        <Collection
          key={index}
          collection={collection}
          onSaveCollection={(updatedCollection) => saveCollection(index, updatedCollection)}
        />
      ))}
      <button onClick={addCollection}>Add Collection</button>


    </div>
  );
}

export default CollectionGenerator;
