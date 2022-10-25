import { cleanup, render,screen } from '@testing-library/react';
import TextBubble from '.';

cleanup(afterEach)

test('bubble works', () => {
    render(<TextBubble message={'Test Message'} user={'Sami'} time={'22:00'}  />)

    expect(screen.getByText(/Test Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Sami/i)).toBeInTheDocument();
    expect(screen.getByText(/22:00/i)).toBeInTheDocument();
    
    
}) 
