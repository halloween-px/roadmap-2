import { useState, useEffect, createContext, useContext } from "react";
const MainContext = createContext();
const usersLimit = 4;
export const MainProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [userPages, setUserPages] = useState(1);
  const loadUsers = (page = 1) => {
    const skip = usersLimit * (page - 1);
    fetch(`http://localhost:3001/users?skip=${skip}&limit=${usersLimit}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.items)
        setUserPages(Math.ceil(data.count / usersLimit))
      })
  }
  const loadUser = (userId) => {
    fetch(`http://localhost:3001/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.item);
      })
  }

  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const loadPosts = (userId) => {
    fetch(`http://localhost:3001/posts?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.items);
      })
  }
  const loadPost = (postId) => {
    fetch(`http://localhost:3001/posts/${postId}`)
      .then(res => res.json())
      .then(data => {
        setPost(data.item)
      })
  }

  const [comments, setComments] = useState([]);
  const loadComments = (postId) => {
    fetch(`http://localhost:3001/comments?postId=${postId}`)
      .then(res => res.json())
      .then(data => {
        setComments(data.items);
      })
  }

  const value = {
    users, user, userPages, loadUsers, loadUser,
    posts, post, loadPosts, loadPost,
    comments, loadComments,
  }

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => useContext(MainContext);