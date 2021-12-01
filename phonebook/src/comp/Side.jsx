import { Paper, Stack } from "@mui/material"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign : "center",
    color: theme.palette.text.secondary,
    fontSize:"22px",
    boxShadow:"none",
    borderWidth:"1px",
    borderStyle:"solid",
    borderColor:"#eee"
}))
const Side = () => {
    return (
        <Stack spacing={1}>
            <Item>Crime</Item>
            <Item>Drama</Item>
            <Item>Science</Item>
            <Item>Novel</Item>
            <Item>Technology</Item>
        </Stack>
    )
}

export default Side; 