import React from 'react';
import './photos.scss';
import VirtualScroll from 'virtual-scroll-component';

function Photos({photos, handleLastRow}) {
    const renderedPhotos = photos.map(({url,id}) => {
        const style = {
            backgroundImage: `url(${url})`
        };
       return (
           <a href={url} target={"_blank"} key={id}>
               <div className={"photo"} style={style}/>
           </a>
       );
    });

    return (
        <VirtualScroll className={"photos"} onLastRow={handleLastRow} rowHeight={250}>
            {renderedPhotos}
        </VirtualScroll>
    );
}

export default Photos;
