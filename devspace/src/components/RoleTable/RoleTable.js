import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./RoleTable.scss";
import { Link, useNavigate } from "react-router-dom";

const columns = [
  { id: "jobTitle", label: "Job Title", minWidth: 170 },
  { id: "company", label: "Company", minWidth: 100 },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "techStack",
    label: "Tech Stack",
    minWidth: 170,
    align: "right",
    justifyContent: "space-between",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "salary",
    label: "Salary",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "positionType",
    label: "Type",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "createdAt",
    label: "createdAt",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  jobTitle,
  company,
  location,
  salary,
  positionType,
  createdAt
) {
  return {
    jobTitle,
    company,
    location,
    salary,
    positionType,
    createdAt,
  };
}

const rows = [];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  console.log(props.roles);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className="table">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.roles
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((role) => {
                console.log(role._id);

                function handleClick() {
                  navigate(`/role/${role._id}`);
                }
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={role.code}
                    onClick={handleClick}
                  >
                    {columns.map((column, i) => {
                      const value = role[column.id];

                      return (
                        <TableCell
                          key={i}
                          align={column.align}
                          style={{ color: "white", cursor: "hand" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                        //   <Link to={`/role/${role._id}`} className="link">
                        //  </Link>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="pagination"
      />
    </Paper>
  );
}
