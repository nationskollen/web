export interface Props {
    containerClassNames?: string
}

const Logo = ({ containerClassNames }: Props) => {
    return (
        <svg
            width="56"
            height="50"
            viewBox="0 0 56 50"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={containerClassNames}
        >
            <path d="M0.45 40L5.85 10.3H15.525L22.545 30.73L26.28 10.3L31.275 10.345L25.785 40H15.48L9 20.335L5.4 40H0.45Z" />
            <path d="M22.1525 40L27.2825 12.64L27.7775 10.3H37.4075L31.7375 40H22.1525ZM50.0075 37.345C49.1975 39.715 47.2325 40.9 44.1125 40.9C41.8025 40.9 39.8525 39.52 38.2625 36.76C36.6425 34 35.6825 30.37 35.3825 25.87C38.6825 19.84 41.4725 15.58 43.7525 13.09C45.9425 10.72 48.1775 9.535 50.4575 9.535C51.6875 9.535 52.7375 9.865 53.6075 10.525C54.5075 11.185 55.0625 12.04 55.2725 13.09C54.2525 13.51 53.5025 13.885 53.0225 14.215C51.8225 15.115 50.4125 16.57 48.7925 18.58L44.6975 23.485C44.0375 24.265 43.5725 24.835 43.3025 25.195C43.7525 27.715 44.6525 30.22 46.0025 32.71C47.2925 35.08 48.6275 36.625 50.0075 37.345Z" />
        </svg>
    )
}

export default Logo
