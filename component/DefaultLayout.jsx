import Link from 'next/link'

const DefaultLayout = ({children}) => {
    return (
        <>
            <div>
                헤더
                <ul>
                    <li><Link href='/'>홈으로</Link></li>
                    <li><Link href='/about'>어바웃</Link></li>
                    <li><Link href='/board/list'>게시판</Link></li>
                </ul>
            </div>
            <div>
                {children}
            </div>
            <div>
                푸터
            </div>
        </>

    )

}

export default DefaultLayout