import React from 'react'
import Skeleton from 'react-loading-skeleton';

const LoadingSkelleton = (props) => {

    return ( 
        <>
        {
            props.alignment === 'vertical' && (
            <div className="row pt storepadding">
                {Array.from({ length: props.count }, (_, key) => (
                    <div className={`col-sm-${12/props.count}`} key={key}>
                        <Skeleton width={props.width} height={props.height} />
                    </div>
                ))}
            </div>
            )
        }
        </>
     );
}
 
export default LoadingSkelleton;