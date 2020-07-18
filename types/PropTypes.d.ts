/// <reference types="react" />
export interface ITouchProps {
    disabled?: boolean;
    activeClassName?: string;
    activeStyle?: React.CSSProperties | boolean;
    children?: any;
}
export interface ITouchState {
    active: boolean;
}
