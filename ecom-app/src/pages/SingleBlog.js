import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'

const SingleBlog = () => {
    return (
        <>
            <Meta title={'Dynamic Blog Name'} />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to='/blogs' className='d-flex align-items-center gap-10 mb-3'>
                                    <BsArrowLeft className='fs-5' />Go back to Blogs</Link>
                                <h3 className='title'>
                                    A Beautiful Sunday Morning renaissance
                                </h3>
                                <img src='images/blog-1.webp' className='img-fluid w-100 my-4' alt='blog'/>
                                <p>
                                    You're only as good as your last collection, which is an enormus
                                    pressure. I think There is something about luxury it's not something
                                    people need, but it's what they want. It really pulls at their heart.
                                    I have a fantastic relationship with money.luxury it's not something
                                    people need, but it's what they want. It really pulls at their heart.
                                    I have a fantastic relationship with money.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog