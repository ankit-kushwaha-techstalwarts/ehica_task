import React from 'react';

const Image = (props) => {
    const {
        alt = '',
        objectFit = "contain",
        height = "100%",
        width = "100%",
        classes = {
            root: "",
            image: "",
        },
        imgStyle ={},
        ...restProps
    } = props;

    return (
        <div style={{ height, width }}>
            <img alt={alt} style={imgStyle} {...restProps} />
        </div>
    )
};


export default Image;
