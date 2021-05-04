import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom'

import styles from '../styles/CoverImage.module.css'

export function CoverImage({ color, image }) {
    
    return (
	<img className={styles.stuff} src={image} />
    )
}

export default CoverImage;

