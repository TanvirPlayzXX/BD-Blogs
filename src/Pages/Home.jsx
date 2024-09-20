import React from 'react';
import Casd from './../Components/Casd';
import PostViewer from './../Components/PostViewer';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            {/* Image Div */}
        <div className=' relative mb-28 w-full h-2/3 ' >
        <img className='m-auto w-11/12' src="/Header-img.svg" alt="HeaderBG" />

        <div className='absolute  -bottom-14 left-32'><Casd category="Technology" title="The Impact of Technology on the Workplace: How Technology is Changing" authorName="Jane Doe" authorImage="https://randomuser.me/api/portraits/women/68.jpg" date="September 19, 2024" /> </div>
        
        </div>


            <PostViewer type={"Latest"}/>

        </div>
    );
};

export default Home;