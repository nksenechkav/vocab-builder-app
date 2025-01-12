// src/components/wordsTable/WordsTable.jsx

import React from "react";
import { useTable } from "react-table";
import { Tooltip, Popover, Typography } from "@mui/material";
import { useState } from "react";
import css from "./WordsTable.module.scss";

const WordsTable = ({ words }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");

  const handlePopoverOpen = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(
      `You are ${content.progress}% done learning "${content.word}"`
    );
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent("");
  };

  const open = Boolean(anchorEl);

  const handleMenuClick = (word) => {
    console.log(`Menu clicked for word: ${word}`);
    // Дополнительная логика для меню
  };

  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <div className={css["header-with-icon"]}>
            <span>Word</span>
            <svg
              id="icon-united-kingdom"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={css["icon"]}
            >
              <use xlinkHref="/icons.svg#icon-united-kingdom" />
            </svg>
          </div>
        ),
        accessor: "word",
        Cell: ({ value }) => (
          <Tooltip title="Click for details" arrow>
            <span>{value}</span>
          </Tooltip>
        ),
      },
      {
        Header: () => (
          <div className={css["header-with-icon"]}>
            <span>Translation</span>
            <svg
              id="icon-ukraine"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={css["icon"]}
            >
              <use xlinkHref="/icons.svg#icon-ukraine" />
            </svg>
          </div>
        ),
        accessor: "translation",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Progress",
        accessor: "progress",
        Cell: ({ value }) => (
          <div className={css["progress-bar-container"]}>
            {/* Текстовый прогресс */}
            <span className={css["progress-text"]}>{value}%</span>
            {/* Круговой прогресс */}
            <div className={css["progress-circle"]}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 36 36"
                className={css["progress-svg"]}
              >
                <circle
                  className={css["progress-bg"]}
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#D4F8D3"
                  strokeWidth="4"
                />
                <circle
                  className={css["progress-fill"]}
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#2BD627"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={100 - value}
                />
              </svg>
            </div>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => (
          <button
            onClick={() => handleMenuClick(row.original.word)}
            className={css["menu-button"]}
          >
            ...
          </button>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => words, [words]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className={css["words-table-container"]}>
      <table {...getTableProps()} className={css["words-table"]}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className={css["table-header"]}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className={css["words-row-header"]}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={css["table-row"]}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={css["words-row"]}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
      </Popover>
    </div>
  );
};

export default WordsTable;
