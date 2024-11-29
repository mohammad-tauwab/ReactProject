import { useContext } from "react";
import logo from "../assets/logo.png";
import { postContext } from "../store/postStorage";
import Comment from "./Comment";
import Welcome from "./Welcome";
import { SlLike } from "react-icons/sl";
import { RiCloseLargeFill } from "react-icons/ri";

function Post() {
  const { postData, deletePost } = useContext(postContext);

  return (
    <>
      {postData.map((value, index) => (
        <>
          <div
            className="card mb-3 position-relative"
            style={{ width: "32rem" }}
          >
            <span
              className="position-absolute top-0 translate-middle rounded-pill badge bg-danger start-100 close"
              onClick={() => {
                deletePost(postData[index].id);
              }}
            >
              <RiCloseLargeFill />
            </span>
            <img src={logo} className="img-fluid card-image" alt="..." />

            <div className="card-body p-2" key={value}>
              <div className="d-flex">
                <h5 className="card-title position-relative">
                  {postData[index].title}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning reaction p-2 mx-4">
                    {postData[index].reactions.likes} <SlLike />
                  </span>
                </h5>
              </div>
              <p className="card-text">{postData[index].body}</p>
              {postData[index].tags.map((tag, index) => (
                <a href="#" className="btn btn-primary py-0 mx-1" key={tag}>
                  {tag}
                </a>
              ))}
              <Comment index={index}></Comment>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
export default Post;
