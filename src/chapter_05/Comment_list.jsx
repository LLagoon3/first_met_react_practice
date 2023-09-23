import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "name0",
        comment: "comment0",
    },
    {
        name: "name1",
        comment: "comment1",
    },
    {
        name: "name2",
        comment: "comment2",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return(<Comment name={comment.name} comment={comment.comment}/>);
            }
            )}
        </div>
    );
}

export default CommentList;