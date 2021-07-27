import React, { useState, useEffect } from 'react';
import { fetchComments } from '../utils/api';
import Comment from './comment'

const InfiniteScrollList = () => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const CARD_HEIGHT = 500
  useEffect(()=>{
    getComments(page)
  },[page])
  const onScroll = (e) => {
    const {
      scrollHeight,
      scrollTop,
      clientHeight
    } = e.scrollingElement;
    if (scrollTop + clientHeight + (CARD_HEIGHT*1.5) > scrollHeight) {
      setPage(page=>page+1)
    }
  }
  const getComments = async (page) => {
    const data = await fetchComments(page);
    setComments((prev) => [...prev, ...data]);
  }

  useEffect(() => {
    document.addEventListener('scroll',onScroll)
    return () => {
      document.removeEventListener('scroll',onScroll)
    }
  },[])

  return (
    <div>
      {comments.map((comment) => 
        <Comment key={comment.id} comment={comment} />
      )} 
    </div>
  );
}

export default InfiniteScrollList;