"use client";

import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

export const GenerateButton = ({
    size,
    disabled,
    isSubmitting,
    onSubmit,
    className
}: {
    size?: "default" | "sm",
    disabled: boolean,
    isSubmitting: boolean,
    onSubmit: () => void;
    className?: string
}) => {
    return (
        <Button
            size={size}
            className={className}
            onClick={onSubmit}
            disabled={disabled}
        >
            {
                isSubmitting ? (
                    <>
                        <Loader className='size-3' />
                        Generating...
                    </>
                ) : (
                    "Generate speech"
                )
            }
        </Button>
    )
}
