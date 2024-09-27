import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';

import CommentsSection from './CommentsSection';

describe('CommentsSection React Component', () => {
  const threadId = 'test-thread-id';

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  test('should fetch the script from the correct URL', () => {
    const appendChildSpy = jest.spyOn(document.head, 'appendChild');
    render(<CommentsSection threadId={threadId} />);

    expect(appendChildSpy).toHaveBeenCalled();
    const scriptElement = appendChildSpy.mock.calls[0][0] as HTMLScriptElement;
    expect(scriptElement.src).toBe(`https://www.commentssection.site/embed.js?threadId=${threadId}`);
  });

  test('should render a div with id "commentsSection"', () => {
    render(<CommentsSection threadId={threadId} />);
    const divElement = screen.getByTestId('commentsSection');
    expect(divElement).toBeInTheDocument();
  });

  test('should remove the script when the component is unmounted', () => {
    const removeChildSpy = jest.spyOn(document.head, 'removeChild');
    const { unmount } = render(<CommentsSection threadId={threadId} />);
    unmount();

    expect(removeChildSpy).toHaveBeenCalled();
    const scriptElement = removeChildSpy.mock.calls[0][0] as HTMLScriptElement;
    expect(scriptElement.src).toBe(`https://www.commentssection.site/embed.js?threadId=${threadId}`);
  });

  test('should render a noscript tag inside the div', () => {
    render(<CommentsSection threadId={threadId} />);
    const noscriptElement = screen.getByText('Please enable Javascript.');
    expect(noscriptElement).toBeInTheDocument();
  });
});