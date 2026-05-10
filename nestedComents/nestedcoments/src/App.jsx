import React, { useState } from 'react';
import CommentList from './CommentList';

const initialData = [
  {
    id: 1,
    text: "This is a top-level comment. What do you think?",
    likes: 5,
    replies: []
  }
];

const updateTree = (list, id, callback) => {
  return list.map((node) => {
    if (node.id === id) {
      return callback(node);
    }
    if (node.replies && node.replies.length > 0) {
      return { ...node, replies: updateTree(node.replies, id, callback) };
    }
    return node;
  });
};

export default function App() {
  const [comments, setComments] = useState(initialData);
  
  // NEW: State for the top-level comment input
  const [newCommentText, setNewCommentText] = useState("");

  // NEW: Handler for adding a top-level comment
  const handleAddTopLevelComment = () => {
    if (!newCommentText.trim()) return;
    
    const newComment = { 
      id: Date.now(), 
      text: newCommentText, 
      likes: 0, 
      replies: [] 
    };
    
    // Unshift adds the new comment to the top of the feed
    setComments((prev) => [newComment, ...prev]);
    
    // Clear the input field after submitting
    setNewCommentText("");
  };

  const handleAddReply = (parentId, text) => {
    const newReply = { id: Date.now(), text, likes: 0, replies: [] };
    
    setComments((prev) => 
      updateTree(prev, parentId, (node) => ({
        ...node,
        replies: [newReply, ...node.replies]
      }))
    );
  };

  const handleLike = (id) => {
    setComments((prev) => 
      updateTree(prev, id, (node) => ({
        ...node,
        likes: node.likes + 1
      }))
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', fontFamily: 'sans-serif' }}>
      <h2>Discussion Threads</h2>
      
      {/* NEW: Top-Level Comment Input Area */}
      <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '2px solid #eee' }}>
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Start a new discussion..."
          aria-label="New top-level comment"
          style={{ width: '100%', height: '80px', marginBottom: '10px', padding: '10px' }}
        />
        <button 
          onClick={handleAddTopLevelComment}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Post Comment
        </button>
      </div>

      <CommentList 
        comments={comments} 
        onReply={handleAddReply} 
        onLike={handleLike} 
      />
    </div>
  );
}