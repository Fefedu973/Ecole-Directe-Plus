
import "./graphics.css"
export default function CopyIcon({ className = "", id = "", alt, ...props }) {
    return (
        <svg aria-label={alt} className={className} id={id} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z" className="stroke-text-alt" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" className="stroke-text-alt" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}