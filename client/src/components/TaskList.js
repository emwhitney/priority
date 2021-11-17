import { useMemo } from "react";
import Table from "./Table";
import Title from "./Title";
import "./TaskList.css";

import { format } from "date-fns";
import axios from "axios";

function TaskList({ taskList, getTaskList }) {
  const COLUMNS = [
    {
      Header: "Priority",
      accessor: "priority",
    },
    {
      Header: "Task",
      accessor: "task",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Date Added",
      accessor: "date-added",
      Cell: ({ value }) => {
        return format(new Date(value), "MM/dd/yyyy");
      },
    },
    {
      Header: "Delete",
      accessor: "taskid",
      Cell: ({ value }) => (
        <div>
          <button className="button-tasklist" onClick={() => handleDelete(value)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  //memoization to avoid constant re-rendering
  const data = useMemo(() => taskList, [taskList]);
  const columns = useMemo(() => COLUMNS, []);

  function handleDelete(taskid) {
    let conf = window.confirm("Are you sure");

    if (conf) {
      axios
        .delete(`http://localhost:4000/deleteTask/${taskid}/`)
        .then(getTaskList());
        window.location.reload();
    }
  }

  return (
    <div>
      <Title />
      <div>
        <h1 id="active-tasks-title">Active Tasks</h1>
        <Table className="table" columns={columns} data={data} />
      </div>
    </div>
  );
}

export default TaskList;
