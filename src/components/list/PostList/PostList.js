import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
//import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
    return (
        <div className={cx('post-item')}>
            <h2>타이틀</h2>
            <div className={cx('date')}>2019-03-19</div>
            <p>내용</p>
            <div className={cx('tags')}>
                #태그 #태그 #태그
            </div>
        </div>
    );
};

const PostList = () => (
    <div className={cx('post-list')}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
);

export default PostList;