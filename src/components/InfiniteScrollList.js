import React, { useEffect } from 'react';

const InfiniteScrollList = () => {
  const onScroll = (e) => {
    console.log(e)
  }
  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll',onScroll)
    }
  },[])
  return (
    <div style={{height:1200+"px"}}>
    </div>
  );
}

export default InfiniteScrollList;