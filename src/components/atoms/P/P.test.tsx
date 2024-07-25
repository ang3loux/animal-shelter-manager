import { render, screen } from '@/tests/test-utils';

import { P } from '.';

const PARAGRAPH =
  'Labore reprehenderit incididunt aliqua aliquip minim ipsum do ullamco incididunt velit excepteur dolore. Incididunt id ipsum enim amet do deserunt. Dolore elit excepteur culpa magna proident sint Lorem. Reprehenderit in elit irure non voluptate occaecat est cillum excepteur ipsum incididunt velit officia aliqua.';

describe('P', () => {
  it('should render the paragraph with given text', () => {
    render(<P>{PARAGRAPH}</P>);

    const paragraph = screen.getByText(PARAGRAPH);
    expect(paragraph).toBeTruthy();
  });
});
