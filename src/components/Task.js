import React from "react";
import { Draggable } from "@hello-pangea/dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: 10,
            margin: "0 0 8px 0",
            backgroundColor: "#fff",
            borderRadius: 4,
            textShadow: "0 1px 0 rgba(9,30,66,.25)",
            ...provided.draggableProps.style,
          }}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;