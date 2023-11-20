import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // necessary to use toBeIntheDocument()

import Button from '../index';

describe('Button component', () => {

    test('Should render button component', () => {
        render(<Button name="test-name" ></Button>);
        
        const button = screen.getByRole('button', {
            name: /button/i
          });
        
        expect(button).toBeInTheDocument();
    });

});
