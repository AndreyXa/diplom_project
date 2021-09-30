import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    Input, TextField,
    Typography,
} from "@material-ui/core";
import {useState} from "react";
import {createUser, listenToUserChange, signIn} from "../firebase/auth";

export const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);


    const handleInputLog = (e) => {
        setLogin(e.target.value);
    };

    const handleInputPass = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn(login,password);
    };

    const handleclickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getNewUser = async () => {
        createUser(login,password);
    };

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Login in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Input
                            margin="normal"
                            required
                            fullWidth
                            value={login}
                            autoFocus
                            onChange={handleInputLog}
                            placeholder="Login"
                        />
                        <Input
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={handleInputPass}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login In
                        </Button>
                        <Button
                            onClick={handleclickOpen}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            New User
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Registration Form</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Registration in users
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="log"
                                    label="Login"
                                    type="email"
                                    fullWidth
                                    onChange={handleInputLog}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="pas"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    onChange={handleInputPass}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Cancel</Button>
                                <Button onClick={getNewUser} color="primary">Log in</Button>
                            </DialogActions>
                        </Dialog>
                        <Grid container>
                            <Grid item></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
};
