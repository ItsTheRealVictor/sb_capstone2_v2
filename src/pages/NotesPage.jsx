import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Collection from '../components/Collection';
import Typography from '@mui/material/Typography';
import Note from '../components/Note'

const RandomBoxGenerator = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = <Note/>


    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <Button variant="contained" onClick={addNote}>
        Add Note
      </Button>
      <div style={{ marginTop: '10px' }}>{notes}</div>
    </div>
  );
};

export default RandomBoxGenerator;
