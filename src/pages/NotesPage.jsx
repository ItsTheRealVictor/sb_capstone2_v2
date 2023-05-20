import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Collection from '../components/Collection';


const CollectionGenerator = () => {
// Inside the CollectionGenerator component
const [collection, setCollection] = useState([]);

const addCollection = () => {
  const newCollection = <Collection notes={[]} />;
  setCollection([...collection, newCollection]);
};

// ...

return (
  <div>
    {collection.map((item, index) => (
      <Card key={index}>
        <CardContent>
          {item}
        </CardContent>
      </Card>
    ))}
    <Button variant="contained" onClick={addCollection}>
      Add Collection
    </Button>
  </div>
);

};

export default CollectionGenerator;