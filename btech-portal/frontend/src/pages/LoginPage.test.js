import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page and submits form', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    const nameInput = getByLabelText(/name/i);
    const rollNumberInput = getByLabelText(/roll number/i);
    const mobileNumberInput = getByLabelText(/mobile number/i);
    const submitButton = getByText(/submit/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(rollNumberInput, { target: { value: '12345' } });
    fireEvent.change(mobileNumberInput, { target: { value: '9876543210' } });
    fireEvent.click(submitButton);

    // Add assertions to verify form submission
});
