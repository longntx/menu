import React from "react";

export interface MenuProps {
    label: string;
}

const Menu = (props: MenuProps) => {
    return <button>{props.label}</button>;
};

export default Menu;
