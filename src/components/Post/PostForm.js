import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styled from "@mui/material/styles/styled";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const cardContainer = styled(Card)({
    color: "inherit",
    textDecoration: "none",
    justifyContent: "center"
});
const divStyle = {
    paddingTop: '20px',
};

const avatar = styled(Avatar)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
});



const textStyle = {
    textAlign: "left",
    fontSize: "1.0em"
};

const StyledLink = styled(Link)({
    color: "inherit",
    textDecoration: "none",
    marginRight: "16px",

});

function PostForm(props) {

    const { userId, userName, refreshPost } = props;
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const savePost = () => {
        fetch("/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    userId: userId,
                    text: text,
                })
            })
            .then((res) => res.json())
            .catch((err) => console.log("error"))
    }

    const handleSubmit = () => {
        savePost();
        setIsSent(true);
        setTitle("");
        setText("");
        setOpen(true);
        if (refreshPost) {
            refreshPost();
        }
    }
    const handleTitle = (value) => {
        setTitle(value);
        setIsSent(false);
    }

    const handleText = (value) => {
        setText(value);
        setIsSent(false);
    }



    return (
        <div className="postContainer" style={divStyle}>
            <Card component={cardContainer}>
                <CardHeader
                    avatar={
                        <StyledLink to={{ pathname: "/users/" + userId }}>
                            <Avatar component={avatar} aria-label="recipe">
                                {userName.charAt(0).toUpperCase()}

                            </Avatar>
                        </StyledLink>

                    }
                    title={<OutlinedInput id="outlined-adornment-amount"
                        multiline
                        placeholder="Title"
                        value={title}
                        inputProps={{ maxLength: 25 }}
                        fullWidth
                        onChange={(i) => handleTitle(i.target.value)}
                    >
                    </OutlinedInput>}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" style={textStyle}>
                        {<OutlinedInput id="outlined-adornment-amount"
                            multiline
                            placeholder="Text"
                            value={text}
                            inputProps={{ maxLength: 255 }}
                            fullWidth
                            onChange={(i) => handleText(i.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        POST
                                    </Button>
                                    <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
                                        <Alert
                                            onClose={handleClose}
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            Post başarili bir şekilde eklenmiştir.
                                        </Alert>
                                    </Snackbar>

                                </InputAdornment>
                            }

                        >
                        </OutlinedInput>}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default PostForm;
