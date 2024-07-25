import { render, screen, waitFor } from '@/tests/test-utils';
import userEvent from '@testing-library/user-event';

import { ModeToggle } from '.';

describe('ModeToggle', () => {
  it('should render the button', () => {
    render(<ModeToggle />);

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeTruthy();
  });

  it('should open the menu when button is clicked', async () => {
    render(<ModeToggle />);

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle theme/i });

      return userEvent.click(button);
    });

    const menu = screen.getByRole('menu', { name: /toggle theme/i });
    expect(menu).toBeTruthy();
  });

  it('should display menu items', async () => {
    render(<ModeToggle />);

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle theme/i });

      return userEvent.click(button);
    });

    const item1 = screen.getByText(/light/i);
    const item2 = screen.getByText(/dark/i);
    const item3 = screen.getByText(/system/i);

    expect(item1).toBeTruthy();
    expect(item2).toBeTruthy();
    expect(item3).toBeTruthy();
  });
});
