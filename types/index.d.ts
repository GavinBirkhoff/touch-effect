import * as React from "react";
import * as PropTypes from "prop-types";
import { ITouchProps, ITouchState } from "./PropTypes";
export default class TouchEffect extends React.Component<ITouchProps, ITouchState> {
    static defaultProps: {
        disabled: boolean;
    };
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        activeClassName: PropTypes.Requireable<string>;
        activeStyle: PropTypes.Requireable<boolean | object>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    state: {
        active: boolean;
    };
    componentDidUpdate(): void;
    triggerEvent(type: string, isActive: boolean, ev: React.TouchEvent<HTMLElement>): void;
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => void;
    onTouchMove: (e: React.TouchEvent<HTMLElement>) => void;
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void;
    onTouchCancel: (e: React.TouchEvent<HTMLElement>) => void;
    onMouseDown: (e: React.TouchEvent<HTMLElement>) => void;
    onMouseUp: (e: React.TouchEvent<HTMLElement>) => void;
    onMouseLeave: (e: React.TouchEvent<HTMLElement>) => void;
    render(): React.FunctionComponentElement<{
        className: any;
        style: any;
    }> | React.FunctionComponentElement<{
        onTouchStart: (e: React.TouchEvent<HTMLElement>) => void;
        onTouchMove: (e: React.TouchEvent<HTMLElement>) => void;
        onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void;
        onTouchCancel: (e: React.TouchEvent<HTMLElement>) => void;
        onMouseDown: (e: React.TouchEvent<HTMLElement>) => void;
        onMouseUp: (e: React.TouchEvent<HTMLElement>) => void;
        onMouseLeave: (e: React.TouchEvent<HTMLElement>) => void;
    }>;
}
