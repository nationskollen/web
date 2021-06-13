export interface Props {
    title: string
}

const InputError = ({ title }: Props) => {
    return (
        <>
            {title !== '' && (
                <span role="alert" className="text-sm text-error mt-sm">{title}</span>
            )}
        </>
    )
}

export default InputError
