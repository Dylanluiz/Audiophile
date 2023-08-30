import React from "react";

export default function Brief() {
    return (
        <section className="brief-section">
           <picture className="observed">
                <source 
                    media="(min-width: 650px)" 
                    srcSet='https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fshared%2Ftablet%2Fimage-best-gear.jpg?alt=media&token=2d9d5232-4848-4098-aa17-e3102ca6851b' />

                <source
                    media="(min-width: 1024px)"
                    srcSet="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fshared%2Fdesktop%2Fimage-best-gear.jpg?alt=media&token=a1d67a14-3002-4717-a9cb-61730effbd75"
                />

                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fshared%2Fmobile%2Fimage-best-gear.jpg?alt=media&token=c6fdb09e-756c-4bbc-afed-08cec8df3fc6" 
                    alt="man listening to music" 
                    />
           </picture>
            <h2>Bringing you the <span>best</span> audio gear</h2>

            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </section>
    )
}