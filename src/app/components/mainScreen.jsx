/* @flow */

import React from 'react'
import classnames from 'classnames'

import style from './mainScreen.style.scss'

type Props = {

}

const getSize = () => {

}

export default ({  }: Props) => {

    return (
        <div className={style['body']}>
            <div className={style['mainWindow']}>
                <div className={style['top']}>
                    dupsko gorne
                </div>
                <div className={style['bottom']}>
                    dupsko dolne
                </div>
            </div>
        </div>
    )
}
