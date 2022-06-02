import { Box, Typography, Grid, IconButton } from "@mui/material";
import React from "react";
import PlayerControlls from "../PlayerControlls/PlayerControlls";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PlayerOverlay = ({ sliderStyle, spotifyApi }) => {
  return (
    <Box
      id="PlayerOverlay"
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "background.paper",
        display: { md: "none", xs: "block" },
        position: "fixed",
        top: 0,
        left: 0,
        transition: "all 0.3s",
        // transform: "translateY(100vh)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <IconButton
            onClick={() => {
              console.log("asdasd");
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Cali bound
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src="" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Cali bound
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Cali bound
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PlayerControlls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerOverlay;
