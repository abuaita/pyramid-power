import Head from 'next/head'
import Link from 'next/link'
import Common from '../../components/common'

export default function FirstPost() {
    return (
        <Common>
            <Head>
            <title>codenames</title>
            </Head>

            <h1>Play</h1>
            <Link href=".."><a>Home</a></Link>
        </Common>
    )
  }  