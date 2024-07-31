import { render, screen } from '@/tests/test-utils';

describe('MainLayout', () => {
  it('should pass the test', () => {
    render(<h1>Foo bar baz</h1>);

    // Assert
    screen.getByRole('heading', { name: /foo bar baz/i });
  });
});
