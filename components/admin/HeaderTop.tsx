import { useAuth } from '@contexts/auth'

const HeaderTop = () => {
    const { token } = useAuth()

    return (
        <section className="container flex justify-between mx-auto py-lg border-b-1 border-primary-extra row">
            <p>asd</p>
            <p>{token}</p>
        </section>
    )
}

export default HeaderTop
