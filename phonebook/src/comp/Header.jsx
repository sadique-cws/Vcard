import React from 'react';
import {AppBar, Toolbar, Typography,Box, Button} from "@mui/material";

const Header = () => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" sx={{flexGrow:1}}>
                            CWS Book
                    </Typography>

                    <Box >
                        <Button variant="text" color="inherit">Home</Button>
                        <Button variant="text" color="inherit">Add Book</Button>
                        <Button variant="text" color="inherit">Add Category</Button>
                        <Button variant="text" color="inherit">Login</Button>
                        <Button variant="text" color="inherit">Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;