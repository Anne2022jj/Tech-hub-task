import { Card, CardContent, Typography } from "@mui/material";

function Post({ title, body }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{background:"pink"}}>
        <Typography variant="h5" ><b><i>{title}</i></b></Typography>
        <Typography variant="body2" color="text.secondary" >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
