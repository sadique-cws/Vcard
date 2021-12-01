import { Card, CardMedia, Typography,Button, CardActions } from "@mui/material"

const ProCard = (props) => {
    const PATH = process.env.PUBLIC_URL;

    return (
        <Card sx={{textAlign:"center"}}>
            <CardMedia image={PATH + props.image} sx={{height:200}}/>
            <Typography variant="h6">
                {props.title}
            </Typography>
            <Typography variant="p" component="div">
                {props.descr}
            </Typography>

            <CardActions>
            <Button color="primary" variant="contained">Add To Cart</Button>
            <Button color="error" variant="contained">Read More</Button>
            </CardActions>
    
        </Card>
    )
}

export default ProCard;