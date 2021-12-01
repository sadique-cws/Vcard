import { Container, Grid } from "@mui/material";
import ProCard from "./ProCard";
import Side from "./Side";


function Layout () {
    return (
       <Container maxWidth="xl">
            <Grid container sx={{mt:1}} spacing={2}>
            <Grid item lg={2}>
                    <Side/>
            </Grid>
            <Grid item lg={10}>
                <Grid container spacing={2}>
                    <Grid item lg={3}><ProCard title="Lava KKT 40+ Mobile" image="assets/pro1.jpg" descr="testing"/></Grid>
               </Grid>
            </Grid>
        </Grid>
       </Container>
    )
}
export default Layout;