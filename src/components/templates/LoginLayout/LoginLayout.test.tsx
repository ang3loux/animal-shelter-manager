import { render, screen } from '@/tests/test-utils';

import { LoginLayout } from '.';

describe('MainLayout', () => {
  it('should render the children components', () => {
    render(
      <LoginLayout>
        <h1>MainLayout children</h1>
      </LoginLayout>
    );

    // Assert
    screen.getByRole('heading', { name: /MainLayout children/i });
  });
});
