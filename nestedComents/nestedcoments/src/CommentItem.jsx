import CommentList from "./CommentList"; 
import React,{useState,useRef,useEffect} from "react";

export default function CommentItem ({ comment, onReply, onLike }){

    const [isReplying, setIsReplying] = useState(false);
  
  // Auto-Save Draft: Initialize from localStorage
  const [draftText, setDraftText] = useState(
    () => localStorage.getItem(`draft_${comment.id}`) || ""
  );
  
  const inputRef = useRef(null);

  // Focus management: Accessibility win
  useEffect(() => {
    if (isReplying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isReplying]);

  // Debounced auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (draftText.trim()) {
        localStorage.setItem(`draft_${comment.id}`, draftText);
      }
    }, 500); // 500ms debounce
    
    return () => clearTimeout(timer); // Cleanup on unmount/re-render
  }, [draftText, comment.id]);

  const handleSubmit = () => {
    if (!draftText.trim()) return;
    
    onReply(comment.id, draftText);
    
    // Reset state and clear storage
    setDraftText("");
    setIsReplying(false);
    localStorage.removeItem(`draft_${comment.id}`);
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div 
      role="article" 
      style={{ borderLeft: '2px solid #ddd', paddingLeft: '15px', marginBottom: '15px' }}
    >
      <div style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
        <p style={{ margin: '0 0 10px 0' }}>{comment.text}</p>
        
        <div>
          <button onClick={() => onLike(comment.id)} style={{ marginRight: '10px' }}>
            👍 {comment.likes}
          </button>
          <button onClick={() => setIsReplying(!isReplying)}>
            {isReplying ? 'Cancel' : 'Reply'}
          </button>
        </div>
      </div>

      {isReplying && (
        <div style={{ marginTop: '10px', paddingLeft: '15px' }}>
          <textarea
            ref={inputRef}
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a reply... (Cmd/Ctrl + Enter to submit)"
            aria-label="Reply input"
            style={{ width: '100%', height: '60px', marginBottom: '5px' }}
          />
          <button onClick={handleSubmit}>Submit Reply</button>
        </div>
      )}

      {/* THE RECURSION: Render children if they exist */}
      <CommentList 
        comments={comment.replies} 
        onReply={onReply} 
        onLike={onLike} 
      />
    </div>
  );
}