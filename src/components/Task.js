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
            ...provided.draggableProps.style,
          }}
        >
          {task.content}
        </div>
        throw new Error("");
        
      )}
    </Draggable>
  );
};

export default Task;