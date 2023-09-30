/**
 * @Project wambi-connect
 * @File LinkWrapper.tsx
 * @Path core/application/components/common
 * @Author BRICE ZELE
 * @Date 06/08/2023
 */
import React, {FC} from 'react'
import Link, {LinkProps} from 'next/link'

// Component definition
// --------------------------------------------------------------------------------------

export interface LinkWrapperProps extends LinkProps {
    isExternalLink?: boolean
    onClick?: () => void
    download?: boolean
    children?: React.ReactNode
    className?: string
}

const LinkWrapper: FC<LinkWrapperProps> = ({
                                               isExternalLink = false,
                                               onClick,
                                               children,
                                               download = false,
                                               className,
                                               ...props
                                           }) => {
    return (
        <Link className={className}
              onClick={onClick}
              target={isExternalLink ? '_blank' : '_self'}
              rel={isExternalLink ? 'noreferrer' : undefined}
              download={download}
              {...props}>
            {children}
        </Link>
    )
}

export default LinkWrapper

// Styles
// --------------------------------------------------------------------------------------
