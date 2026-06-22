import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
export default function ViewProjectButton({ href, label = "Voir le projet" }) {
    return (_jsx(StyledWrapper, { children: _jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: "project-btn", children: label }) }));
}
const StyledWrapper = styled.div `
  .project-btn {
    display: inline-block;
    padding: 14px 28px;
    border-radius: 12px;
    color: #080808;
    z-index: 1;
    background: var(--color-primary);
    position: relative;
    font-weight: 700;
    font-family: var(--font-display);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 15px;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.4);
    transition: all 250ms;
    overflow: hidden;
    text-decoration: none;
    pointer-events: auto;
  }
  .project-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 12px;
    background-color: var(--color-secondary);
    z-index: -1;
    transition: all 250ms;
  }
  .project-btn:hover {
    color: #fff;
  }
  .project-btn:hover::before {
    width: 100%;
  }
`;
