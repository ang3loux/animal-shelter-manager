import { render, screen, waitFor } from '@/tests/test-utils';
import userEvent from '@testing-library/user-event';

import { Button } from '@/components/atoms/Button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '.';

const Component: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Dropdown Menu</Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Title</DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Item 1</span>
          <DropdownMenuShortcut>T</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Item 2</span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span>Subitem 1</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

describe('DropdownMenu', () => {
  it('should render the button', () => {
    render(<Component />);

    const button = screen.getByRole('button', { name: /dropdown menu/i });
    expect(button).toBeTruthy();
  });

  it('should open the menu when button is clicked', async () => {
    render(<Component />);

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /dropdown menu/i });

      return userEvent.click(button);
    });

    const menu = screen.getByRole('menu', { name: /dropdown menu/i });
    expect(menu).toBeTruthy();
  });

  it('should display menu items', async () => {
    render(<Component />);

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /dropdown menu/i });

      return userEvent.click(button);
    });

    const item1 = screen.getByText(/item 1/i);
    const item2 = screen.getByText(/item 2/i);

    expect(item1).toBeTruthy();
    expect(item2).toBeTruthy();
  });

  it('should open the submenu when item 2 is clicked', async () => {
    render(<Component />);

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /dropdown menu/i });

      return userEvent.click(button);
    });

    await waitFor(() => {
      const item2 = screen.getByRole('menuitem', { name: /item 2/i });

      return userEvent.hover(item2);
    });

    await waitFor(() => {
      expect(screen.getByText(/subitem 1/i)).toBeTruthy();
    });
  });
});
