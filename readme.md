<div style="background-color: white;margin-bottom: 10px; padding: 10px; display: inline-block;">
  <a href="https://www.commentssection.site">
    <img src="https://www.commentssection.site/_next/image?url=%2FlogoWide.png&w=640&q=75" alt="Comments Section">
  </a>
</div>

A React component to render a comments section using [commentssection.site](https://www.commentssection.site). This component allows you to easily embed a comments thread in your React application.

## Installation

Install the component via npm:

```sh
npm install react-comments-section
```

Or via Yarn:

```sh
yarn add react-comments-section
```

## Usage

To use the `CommentsSection` component, you need to obtain a [`threadId`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FDanny%2FDesktop%2Freact-comments-section%2Fsrc%2FCommentsSection.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A2%7D%7D%5D%2C%22e4e84244-cb68-4184-8932-fedb32ecdded%22%5D "Go to definition") from the [commentssection.site dashboard](https://www.commentssection.site/dashboard/threads/add). Follow these steps:

1. **Create a New Thread**: Go to the [commentssection.site dashboard](https://www.commentssection.site/dashboard/threads/add) and create a new thread.
2. **Get the [`threadId`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FDanny%2FDesktop%2Freact-comments-section%2Fsrc%2FCommentsSection.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A2%7D%7D%5D%2C%22e4e84244-cb68-4184-8932-fedb32ecdded%22%5D "Go to definition")**: After creating the thread, you will receive a [`threadId`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FDanny%2FDesktop%2Freact-comments-section%2Fsrc%2FCommentsSection.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A2%7D%7D%5D%2C%22e4e84244-cb68-4184-8932-fedb32ecdded%22%5D "Go to definition") which you will use in the component.

### Example

Here is an example of how to use the `CommentsSection` component in your React application:

```tsx
import React from 'react';
import CommentsSection from 'react-comments-section';

const App = () => {
  const threadId = 'your-thread-id'; // Replace with your actual threadId

  return (
    <div>
      <h1>Comments Section</h1>
      <CommentsSection threadId={threadId} />
    </div>
  );
};

export default App;
```

### Props

- [`threadId`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FDanny%2FDesktop%2Freact-comments-section%2Fsrc%2FCommentsSection.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A2%7D%7D%5D%2C%22e4e84244-cb68-4184-8932-fedb32ecdded%22%5D "Go to definition") (string): The ID of the thread. This ID is provided to you in the dashboard under the thread's section.

## License

This project is licensed under the ISC License.

## Support

For any questions or support, please contact [support@commentssection.site](mailto:support@commentssection.site). Opening a GitHub issue is also welcome. For more detailed information, you can refer to the [documentation](https://www.commentssection.site/docs/embed).