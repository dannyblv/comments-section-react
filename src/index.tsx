import React from 'react';
import {createRoot} from 'react-dom/client';
import CommentsSection from './CommentsSection';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <h1>CommentSection.site React sandbox</h1>
    <CommentsSection threadId="cmft79qo1000hupuk1vqym8ps" />
  </React.StrictMode>
);