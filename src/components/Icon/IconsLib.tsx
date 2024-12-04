// For icon primatives 


type iconsProps = {
    color?: string;
    width?: number;
    height?: number;
}

export const icons = {
    placeholder: ({ color = "primary", width = 24, height = 24 } : iconsProps) => (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM4.5 19.5V5.56031L18.4397 19.5H4.5ZM5.56031 4.5H19.5V18.4406L5.56031 4.5Z" fill={`var(--fg-${color})`}/>
        </svg>
    ),

}

