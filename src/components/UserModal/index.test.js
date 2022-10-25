import { cleanup, fireEvent, render,screen } from '@testing-library/react';
import UserModal from '.';

cleanup(afterAll)

test('error message show when there is no input', () => {
    render(<UserModal />)

    expect(screen.queryByText(/Username must be more that 3 characters/i)).not.toBeInTheDocument();
    expect(screen.getByText(/What shoud we call you?/i)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText(/Start Chatting/i))
    expect(screen.getByText(/Username must be more that 3 characters/i)).toBeInTheDocument();
}) 
