import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동1",
        comment: "1111",
    },
    {
        name: "홍길동2",
        comment: "2222",
    },
    {
        name: "홍길동3",
        comment: "3333",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
