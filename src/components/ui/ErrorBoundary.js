import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
export default class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (_jsx("div", { className: "absolute inset-0 bg-[var(--color-bg)]" }));
        }
        return this.props.children;
    }
}
