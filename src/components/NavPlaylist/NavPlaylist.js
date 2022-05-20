import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavPlaylist = ({ name, playlistId }) => {
  return (
    <Link to={`/playlist/${playlistId}`}>
      <Box
        px={3}
        py={1}
        sx={{
          color: "text.secondary",
          cursor: "pointer",
          fontsize: 4,
          "&:hover": { color: "text.primary" },
        }}
      >
        {name}
      </Box>
    </Link>
  );
};

export default NavPlaylist;
