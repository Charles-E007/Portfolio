import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
export function HexagonBackground({ className, children, hexagonProps, hexagonSize = 75, hexagonMargin = 3, ...props }) {
    const hexagonWidth = hexagonSize;
    const hexagonHeight = hexagonSize * 1.1;
    const rowSpacing = hexagonSize * 0.8;
    const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
    const computedMarginTop = baseMarginTop + hexagonMargin;
    const oddRowMarginLeft = -(hexagonSize / 2);
    const evenRowMarginLeft = hexagonMargin / 2;
    const [gridDimensions, setGridDimensions] = React.useState({ rows: 0, columns: 0 });
    const updateGridDimensions = React.useCallback(() => {
        const rows = Math.ceil(window.innerHeight / rowSpacing);
        const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
        setGridDimensions({ rows, columns });
    }, [rowSpacing, hexagonWidth]);
    React.useEffect(() => {
        updateGridDimensions();
        window.addEventListener("resize", updateGridDimensions);
        return () => window.removeEventListener("resize", updateGridDimensions);
    }, [updateGridDimensions]);
    return (_jsxs("div", { "data-slot": "hexagon-background", className: cn("relative size-full overflow-hidden bg-[var(--color-bg)]", className), ...props, children: [_jsx("style", { children: `:root { --hexagon-margin: ${hexagonMargin}px; }` }), _jsx("div", { className: "absolute top-0 -left-0 size-full overflow-hidden", children: Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (_jsx("div", { style: {
                        marginTop: computedMarginTop,
                        marginLeft: ((rowIndex + 1) % 2 === 0 ? evenRowMarginLeft : oddRowMarginLeft) - 10,
                    }, className: "inline-flex", children: Array.from({ length: gridDimensions.columns }).map((_, colIndex) => (_jsx("div", { ...hexagonProps, style: {
                            width: hexagonWidth,
                            height: hexagonHeight,
                            marginLeft: hexagonMargin,
                            ...hexagonProps?.style,
                        }, className: cn("relative", "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]", "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[var(--color-bg)] before:opacity-100 before:transition-all before:duration-1000", "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] after:bg-[var(--color-bg)]", "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]", "hover:before:bg-[var(--color-primary)] hover:before:opacity-100 hover:before:duration-0 hover:after:duration-0", hexagonProps?.className) }, `hexagon-${rowIndex}-${colIndex}`))) }, `row-${rowIndex}`))) }), children] }));
}
