import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface UserAvatarProps {
    src: string;
    fallback?: string;
    alt?: string;
}

export default function UserAvatar({ src, fallback = "JH", alt = "" }: UserAvatarProps) {
    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
}
