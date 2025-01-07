import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const TodoFilter = () => {
    const [position, setPosition] = useState('bottom')
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button >Filter</Button>
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TodoFilter;