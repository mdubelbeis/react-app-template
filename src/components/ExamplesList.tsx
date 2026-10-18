import { Alert, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { useExamples } from '../hooks/useExamples';

export function ExamplesList() {
  const { data, isPending, isError } = useExamples();

  if (isPending) {
    return <CircularProgress aria-label='Loading examples' />;
  }

  if (isError) {
    return <Alert severity='error'>Unable to load examples.</Alert>;
  }

  return (
    <List>
      {data.map((example) => (
        <ListItem key={example.id}>
          <ListItemText primary={example.name} />
        </ListItem>
      ))}
    </List>
  );
}
