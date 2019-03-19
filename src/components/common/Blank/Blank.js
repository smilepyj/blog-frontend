import React from 'react';
import styles from './Blank.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Blank = () => {
    return (
        <div className={cx('blank')}>
            
        </div>
    );
};

export default Blank;