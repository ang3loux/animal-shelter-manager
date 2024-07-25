import { render, screen } from '@/tests/test-utils';

import { H1, H2, H3, H4 } from '.';

describe('Heading', () => {
  it('should render heading level 1', () => {
    render(<H1>Heading 1</H1>);

    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toBeTruthy();
  });

  it('should render heading level 2', () => {
    render(<H2>Heading 2</H2>);

    const header = screen.getByRole('heading', { level: 2 });

    expect(header).toBeTruthy();
  });

  it('should render heading level 3', () => {
    render(<H3>Heading 3</H3>);

    const header = screen.getByRole('heading', { level: 3 });

    expect(header).toBeTruthy();
  });

  it('should render heading level 4', () => {
    render(<H4>Heading 4</H4>);

    const header = screen.getByRole('heading', { level: 4 });

    expect(header).toBeTruthy();
  });
});
