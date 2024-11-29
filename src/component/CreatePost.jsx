import { useContext } from "react";
import { postContext } from "../store/postStorage";

function CreatePost({ getFormValue }) {
  
const {createPost} = useContext(postContext);
  return (
    <form onSubmit={(e) => {
      createPost(e);
    }} action="">
      <div
        className="card mb-2 position-relative"
        style={{ width: "38rem" }}
      >
        <div className="card-body p-2 ">
          <input type="text" className="p-2 m-1 title" placeholder="Title" required />
          <textarea type="text"className=" p-2 m-1 area" placeholder="Description" required/>
          <input type="text" className="p-2 m-1 tags" placeholder="Suitable Tags separatd by ','" required/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        
        Create Post 
      </button>
    </form>
  );
}
export default CreatePost;
