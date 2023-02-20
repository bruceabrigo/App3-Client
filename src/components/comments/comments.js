import { useState, useEffect } from 'react'
import CommentForm from './commentForm'
import Comment from './comment'
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from '../../api/auth'



const Comments = ({ currentUserId, commentsUrl }) => {
  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  )

  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  }

  const addComment = (text, parentId) => {
    console.log("hello", text, parentId)
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([...backendComments, comment])
      setActiveComment(null)
    }) .catch(error => {
      console.log(error)
    })
  }


  const updateComment = (text, commentId) => {
    console.log(text, commentId)
    updateCommentApi(text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text }
        }
        return backendComment
      })
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }


  const deleteComment = (commentId) => {
    deleteCommentApi(commentId).then(() => {
      const updatedBackendComments = backendComments.filter(
        (backendComment) => backendComment.id !== commentId
      )
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }
    

  useEffect(() => {
    getCommentsApi(commentsUrl).then((res) => {
      setBackendComments(res.data.comment)
    })
  }, [])
    
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Comment" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments