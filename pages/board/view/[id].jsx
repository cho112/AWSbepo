import { useRouter } from "next/router"

const View = ({name}) => {
    const router = useRouter()
    return (
        <>
            View Page <h2> {router.query.id}<br/>{name}</h2>
        </>
    )
}
export function getServerSideProps(){
    return {
        props:{
            name:'aa22'
        }
    }
}

export default View