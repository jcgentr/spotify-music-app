import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Track } from "../interfaces/Track";

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
  tracks: Track[];
  handleTrackClick: (trackId: string) => void;
};

export default function TracksTable(props: Props) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Popularity</StyledTableCell>
            <StyledTableCell>Open in Spotify</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tracks.map(({ track }) => (
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
              key={track.id}
              onClick={() => props.handleTrackClick(track.id)}
            >
              <StyledTableCell component="th" scope="row">
                {track.name}
              </StyledTableCell>
              <StyledTableCell>{track.popularity}</StyledTableCell>
              <StyledTableCell>
                <a
                  className="underline hover:no-underline"
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {track.external_urls.spotify}
                </a>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
