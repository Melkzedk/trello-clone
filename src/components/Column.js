import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";

const Column = ({ column, tasks }) => {
  return (
    <div style={{ margin: 8 }}>
      <h3>{column.title}</h3>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: "#f4f5f7",
              padding: 8,
              width: 250,
              minHeight: 100,
            }}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;