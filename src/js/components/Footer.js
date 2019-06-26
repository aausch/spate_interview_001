import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import { theme } from '../theme'

export default class Footer extends React.PureComponent {

    render() {

        return (
            <div className={css(styles.footer)}>
                <div className={css(styles.first)}>Hope you liked the demo!</div>
                <div className={css(styles.second)}>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({

    footer: {
        gridArea: 'FOOTER',
        background: `${theme.color_gray_primary}`,
        padding: `${theme.space_lg}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: `${theme.font_weight_medium}`,
        color: `${theme.color_darkGray}`
    },

    second: {
        display: 'flex',
        flexDirection: 'row'
    },

    link: {
        fontWeight: `${theme.font_weight_medium}`,
        color: `${theme.color_primary}`,
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
        ':hover': {
            color: `${theme.color_secondary}`
        }
    },


})
