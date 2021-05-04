import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom'
import FlatList from 'flatlist-react'

import styles from '../styles/PreviousPosts.module.css'

export function PreviousPosts() {
    console.log(posts)
    // TODO: Fetch news/posts from server
    return (
        <div className={styles.container}>
            <h1>Tidigare meddelanden</h1>
            <div className={styles.postBox}>
                <FlatList
                    list={posts}
                    renderItem={(item) => <Posts post={item} />}
                    renderWhenEpmty={() => <p>TOM</p>}
                />
            </div>
        </div>
    )
}

function Posts({ post }) {
    const { title, info } = post

    return (
        <div className={styles.postContainer}>
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    )
}

const posts = [
    {
        title: 'Banan',
        info:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem nibh, auctor eu nulla quis, suscipit malesuada mauris. Proin sed venenatis tellus. Aenean eget nunc ipsum. Aenean vestibulum iaculis ex, ut tristique metus tempus vel. Fusce tristique mattis risus, eu aliquam sapien venenatis porta. Nullam accumsan ligula sit amet turpis posuere, at dignissim mi bibendum. Nulla tincidunt ultricies ante, id pulvinar nunc rutrum et. Nullam elit lacus, varius sit amet aliquet in, maximus at mi. Praesent auctor pharetra quam, vel laoreet nunc accumsan id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eleifend nisi ac est auctor consectetur.',
    },
    {
        title: 'kokos',
        info:
            'Curabitur consectetur, nisl in hendrerit tincidunt, augue nisl vehicula mi, et convallis ligula dolor lobortis mauris. Sed at efficitur neque, lobortis ullamcorper diam. Integer vulputate lorem aliquam mi accumsan pellentesque. Integer sed faucibus tellus. Curabitur quis purus tempor, lobortis velit at, posuere sem. Nunc turpis nunc, facilisis ac nisl sed, aliquet euismod nulla. Quisque ultrices egestas mi vitae efficitur. Suspendisse rhoncus, tellus ac convallis pharetra, magna purus ullamcorper magna, id commodo purus risus eget eros. Nullam hendrerit sapien sit amet dolor iaculis iaculis. Quisque vulputate elementum nisi sit amet lobortis. Morbi maximus auctor nibh sit amet porta. Fusce id feugiat purus, at sagittis lorem. ',
    },
    {
        title: 'kokos',
        info:
            'Curabitur consectetur, nisl in hendrerit tincidunt, augue nisl vehicula mi, et convallis ligula dolor lobortis mauris. Sed at efficitur neque, lobortis ullamcorper diam. Integer vulputate lorem aliquam mi accumsan pellentesque. Integer sed faucibus tellus. Curabitur quis purus tempor, lobortis velit at, posuere sem. Nunc turpis nunc, facilisis ac nisl sed, aliquet euismod nulla. Quisque ultrices egestas mi vitae efficitur. Suspendisse rhoncus, tellus ac convallis pharetra, magna purus ullamcorper magna, id commodo purus risus eget eros. Nullam hendrerit sapien sit amet dolor iaculis iaculis. Quisque vulputate elementum nisi sit amet lobortis. Morbi maximus auctor nibh sit amet porta. Fusce id feugiat purus, at sagittis lorem. ',
    },
    {
        title: 'kokos',
        info:
            'Curabitur consectetur, nisl in hendrerit tincidunt, augue nisl vehicula mi, et convallis ligula dolor lobortis mauris. Sed at efficitur neque, lobortis ullamcorper diam. Integer vulputate lorem aliquam mi accumsan pellentesque. Integer sed faucibus tellus. Curabitur quis purus tempor, lobortis velit at, posuere sem. Nunc turpis nunc, facilisis ac nisl sed, aliquet euismod nulla. Quisque ultrices egestas mi vitae efficitur. Suspendisse rhoncus, tellus ac convallis pharetra, magna purus ullamcorper magna, id commodo purus risus eget eros. Nullam hendrerit sapien sit amet dolor iaculis iaculis. Quisque vulputate elementum nisi sit amet lobortis. Morbi maximus auctor nibh sit amet porta. Fusce id feugiat purus, at sagittis lorem. ',
    },
    {
        title: 'kokos',
        info:
            'Curabitur consectetur, nisl in hendrerit tincidunt, augue nisl vehicula mi, et convallis ligula dolor lobortis mauris. Sed at efficitur neque, lobortis ullamcorper diam. Integer vulputate lorem aliquam mi accumsan pellentesque. Integer sed faucibus tellus. Curabitur quis purus tempor, lobortis velit at, posuere sem. Nunc turpis nunc, facilisis ac nisl sed, aliquet euismod nulla. Quisque ultrices egestas mi vitae efficitur. Suspendisse rhoncus, tellus ac convallis pharetra, magna purus ullamcorper magna, id commodo purus risus eget eros. Nullam hendrerit sapien sit amet dolor iaculis iaculis. Quisque vulputate elementum nisi sit amet lobortis. Morbi maximus auctor nibh sit amet porta. Fusce id feugiat purus, at sagittis lorem. ',
    },
]

export default PreviousPosts
