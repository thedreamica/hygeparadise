import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface ButtonMicroProps {
    contents: [];
  }

const ListMicro: React.FC<ButtonMicroProps> = ({ contents }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {contents.map((content: any, key: any) => {
                return (
                    <ListItem alignItems="flex-start" key={key}>
                        <ListItemText
                            primary={content}
                        />
                    </ListItem>
                )
            })}
        </List>
    );
}

export default ListMicro
