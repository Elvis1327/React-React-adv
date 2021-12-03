import { CSSProperties, useContext } from "react";

import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProudctTitle = ({title, className, style}: Props) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={`${styles.Description} ${className}`} style={style}>
            {title ? title : product.title}
        </span>
    )
};