import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Playlist } from "../interfaces/Playlist";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.grey[400],
    fontSize: 14,
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    fontSize: 16,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

type Props = {
  playlists: Playlist[];
  handlePlaylistClick: (playlist: Playlist) => void;
};

export default function PlaylistsTable(props: Props) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Owner</StyledTableCell>
            <StyledTableCell>Open in Spotify</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.playlists.map((playlist) => (
            <TableRow
              sx={{
                cursor: "pointer",
                "&.MuiTableRow-hover": {
                  "&:hover": {
                    opacity: 0.7,
                  },
                },
              }}
              hover
              //   selected={playlist.id === props.selectedPlaylistId}
              key={playlist.id}
              onClick={() => props.handlePlaylistClick(playlist)}
            >
              <StyledTableCell component="th" scope="row">
                {playlist.name}
              </StyledTableCell>
              <StyledTableCell>{playlist.owner.display_name}</StyledTableCell>
              <StyledTableCell>
                <a
                  className="underline hover:no-underline"
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {playlist.external_urls.spotify}
                </a>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
