import React, { useState } from "react";

const DeleteActivity = (props) => {
  const [result, setResult] = useState("");

  const deleteActivity = async () => {
    const response = await fetch(
      `https://outdoorsc-backend.onrender.com/api/activities/${props._id}`,
      { method: "DELETE" }
    );

    if (response.status === 200) {
      setResult("Activity Successfully deleted");
      props.setHideActivity(true);
      props.closeDeleteModal();
    } else {
      setResult("Could not delete activity. Try again later");
    }
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.closeDeleteModal}>
          &times;
        </span>
        <h2>Delete Activity</h2>
        <p>Are you sure you want to delete {props.name}</p>
        <hr />
        <section>
          <button onClick={deleteActivity}>Yes</button>
          <button onClick={props.closeDeleteModal}>No</button>
        </section>
        <h4>{result}</h4>
      </div>
    </div>
  );
};

export default DeleteActivity;
