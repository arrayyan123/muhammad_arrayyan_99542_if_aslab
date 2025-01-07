import React, { useState } from 'react'
import WebsiteLayout from '@/Layouts/WebsiteLayout'
import Hero from '@/Components/Home/Hero'
import MainBlog from '@/Components/Blog/MainBlog'
import HeroBlog from '@/Components/Blog/HeroBlog'
import { Head } from '@inertiajs/react'

function Blog() {
    const [isBlogSelected, setIsBlogSelected] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogSelect = (blog) => {
        setIsBlogSelected(true);
        setSelectedBlog(blog);
    };

    const handleBlogDeselect = () => {
        setIsBlogSelected(false);
        setSelectedBlog(null);
    };
    return (
        <WebsiteLayout>
            <Head title='blog' />
            {!isBlogSelected && <HeroBlog onBlogSelect={handleBlogSelect} />}
            <MainBlog
                isBlogSelected={isBlogSelected}
                selectedBlog={selectedBlog}
                onBlogSelect={handleBlogSelect}
                onBlogDeselect={handleBlogDeselect}
            />
        </WebsiteLayout>
    )
}

export default Blog