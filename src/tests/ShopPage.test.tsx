import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import ShopPage from '../components/ShopPage';

describe('ShopPage', () => {
  it('navigates to shop when product clicked', async () => {
    const user = userEvent.setup();

    render(<ShopPage />);
    setTimeout(async () => {
      const card = screen.getByTestId('1');
      await user.click(card);
    }, 2000);

    expect(screen.getByRole('heading', { name: /shop/i }).textContent).toMatch(
      'Shop',
    );
  });
});
