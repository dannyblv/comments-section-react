'use client';
import React, {useEffect} from 'react';

interface IProps {
  /**
   * The ID of the Thread.
   * This ID is provided to you in dashboard under the thread's section.
  */
  threadId: string;
};

export default ({threadId}: IProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.commentssection.site/embed.js?threadId=${threadId}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [threadId]);
  
  return (
    <div id="commentsSection">
      <noscript>Please enable Javascript.</noscript>
    </div>
  );
};