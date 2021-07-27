import React, { useState, useEffect } from 'react';
import { fetchComments } from '../utils/api';

const InfiniteScrollList = () => {
  const [page,setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const CARD_HEIGHT = 500
  useEffect(async ()=>{
    setLoading(true)
    console.log(page)
    await getComments(page)
    setLoading(false)
  },[page])
  const onScroll = (e) => {
    if (!loading) {
      const {
        scrollHeight,
        scrollTop,
        clientHeight
      } = e.target.scrollingElement;
      if (scrollTop + clientHeight + (CARD_HEIGHT)/2 > scrollHeight) {
        setPage(page => page+1)
      }
    }
  }
  const getComments = async () => {
    setLoading(true)
    const data = await fetchComments(page);
    console.log(data);
    setComments((prev) => [...prev, ...data]);
    setLoading(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll',onScroll)
    }
  },[])

  return (
    <div style={{height:(2000*page)+"px"}}>
    </div>
  );
}

export default InfiniteScrollList;