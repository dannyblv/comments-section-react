'use client';
import React, {useEffect} from 'react';

interface IProps {
  /**
   * The ID of the Thread.
   * This ID is provided to you in dashboard under the thread's section.
  */
  threadId: string;
  isDevMode?: boolean;
};

export default ({threadId, isDevMode}: IProps) => {
  const URL = isDevMode ? 'https://www.cslab.io' : 'https://www.commentssection.site';
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${URL}/embed.js?threadId=${threadId}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [threadId]);

  if (!threadId) {
    console.warn('CommentsSection was not rendered, threadId was not provided.');
    return null;
  }

  return (
    <div id="commentsSection" data-testid="commentsSection">
      <noscript>Please enable Javascript.</noscript>
    </div>
  );
};