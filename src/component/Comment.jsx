import { useState } from "react";

function Comment({ index }) {

    const [commentList, setCommentList] = useState([]);
    return (<>
        {commentList.map(comment => (
            <div className="alert alert-info py-0 my-1" role="alert" key={index}>
                {comment}
            </div>
        ))}
        <div className="alert alert-info py-0 my-1" role="alert">
            <input id={index} type="text" className="input-comment px-0 mx-0" placeholder="Post Your Comment"></input>
            <button className="btn py-0 mx-1 post-button" onClick={() => {
                let element = document.getElementById(index);
                let data = element.value;
                element.value = "";
                if (data) {
                    let updateComments = [...commentList, data]
                    setCommentList(updateComments);
                }
            }}>Post Comment</button>
        </div>
    </>
    )
}
export default Comment;