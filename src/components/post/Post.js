import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { pink } from "@mui/material/colors";

const Post = ({ id, poster, name }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: "56.25%",
                    }}
                    image={poster}
                ></CardMedia>
                <CardContent sx={{ flexGrow: 1, bgcolor: "#cfe8fc" }}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                    </Typography>
                </CardContent>
                <CardActions sx={{ bgcolor: "#cfe8fc" }}>
                    <Button variant="outlined" size="small">
                        View
                    </Button>
                    <Button variant="contained" size="small">
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Post;
