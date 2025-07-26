import { useState, useEffect } from "react";
import Post from "./components/Post";
import "./App.css";
import { Container, Typography, Button, Box,Grid } from "@mui/material";

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const totalPages = Math.ceil(items.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = items.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{background:"purple"}}>
            {<b><i>Posts</i></b>}
          </Typography>

          {currentPosts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
            
          ))}

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}
          >
            <Button
              variant="contained"
              onClick={handlePrev}
              disabled={currentPage === 1}
              sx={{background:"Purple"}}
            >
              Previous Page
            </Button>

            <Typography sx={{ mt: "6px",color:"black" }}>
              Page {currentPage} of {totalPages}
            </Typography>

            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              sx={{background:"Purple"}}
            >
              Next Page
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
