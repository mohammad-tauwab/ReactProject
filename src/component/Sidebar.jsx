import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [bgColors, setBgColors] = useState({
    createpost: "white",
    seepost: "white",
    createpostcolor: "black",
    seepostcolor: "black",
  });
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 sidebar"
      style={{ width: "250px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 text-black">Social Media</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          id="createpost"
          onClick={() => {
            setBgColors({
              createpost: "#0d6efd",
              seepost: "white",
              createpostcolor: "white",
              seepostcolor: "black",
            });
          }}
          style={{
            backgroundColor: bgColors.createpost,
            borderRadius: "5px",
          }}
        >
          <Link
            to="/create-post"
            className="nav-link text-black sidebarclick"
            aria-current="page"
          >
            <svg className={`bi pe-none me-2`} width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            <span style={{ color: bgColors.createpostcolor }}>Create Post</span>
          </Link>
        </li>
        <li
          id="seepost"
          className="nav-item"
          onClick={() => {
            setBgColors({
              createpost: "white",
              seepost: "#0d6efd",
              createpostcolor: "black",
              seepostcolor: "white",
            });
          }}
          style={{
            backgroundColor: bgColors.seepost,
            borderRadius: "5px",
          }}
        >
          <Link to="/" className="nav-link text-black sidebarclick">
            <svg className={`bi pe-none me-2`} width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            <span style={{ color: bgColors.seepostcolor }}>See Post</span>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
