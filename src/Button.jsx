import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicButtons() {
     let click = ()=>{
          alert("Hello Guys")
     }
     return (
          <Stack spacing={2} direction="row">
               <Button variant="outlined" color='error' startIcon={<DeleteIcon />} onClick={click}>Delete</Button>
               <Button variant="contained" size='midium' color='success'>Contained</Button>
               <Button variant="outlined">Outlined</Button>
          </Stack>
     );
}