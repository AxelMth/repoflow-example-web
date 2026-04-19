import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.js';
// Prevent actual fetch calls during tests
beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockReturnValue(new Promise(() => { })));
});
describe('App', () => {
    it('renders the page title', () => {
        render(_jsx(App, {}));
        expect(screen.getByText(/repoflow example/i)).toBeDefined();
    });
    it('shows loading state initially', () => {
        render(_jsx(App, {}));
        expect(screen.getByText(/fetching from api/i)).toBeDefined();
    });
});
