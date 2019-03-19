import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostInfo = () => (
    <div className={cx('post-info')}>
        <div className={cx('info')}>
            <h1>타이틀</h1>
            <div className={cx('tags')}>
                #태그 #태그 #태그
            </div>
            <div className={cx('date')}>March 19, 2019</div>
        </div>
    </div>
);

export default PostInfo;