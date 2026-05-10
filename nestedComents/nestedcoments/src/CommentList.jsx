import React from 'react';
import CommentItem from './CommentItem';

export default function CommentList({comments,onReply,onLike}) {
if (!comments || comments.length === 0) return null;

  return (
    <div role="group" style={{ marginTop: '10px' }}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={onReply}
          onLike={onLike}
        />
      ))}
    </div>
  );

}