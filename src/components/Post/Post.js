import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from "@mui/material/styles/styled";
import CommentIcon from '@mui/icons-material/Comment';

const cardContainer = styled(Card)({
    color: "inherit",
    textDecoration: "none",
    justifyContent : "center"
});
const divStyle = {
    paddingTop: '20px',
};

const avatar = styled(Avatar)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
});


const headerStyle = {
    textAlign: "left",
    fontWeight: "bold"
};

const textStyle = {
    textAlign: "left",
    fontSize: "1.0em"
};

const StyledLink = styled(Link)({
    color: "inherit",
    textDecoration: "none",
    marginRight: "16px",

});

function Post(props) {

    const { title, text, userId, userName } = props;
    const [expanded, setExpanded] = useState(false);
    const [liked, setLiked] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const handleLike = () => {
        setLiked(!liked);
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
                    title={
                        <Typography
                            variant="h6" style={headerStyle}>{title}
                        </Typography>}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" style={textStyle}>
                        {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        onClick={handleLike}

                        aria-label="add to favorites">
                        <FavoriteIcon style={liked ? { color: "red" } : null} />
                    </IconButton>
                    <IconButton
                        style={{ marginLeft: 'auto' }}
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"


                    >
                        <CommentIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default Post;
