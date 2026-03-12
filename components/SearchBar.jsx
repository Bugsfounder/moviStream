"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import useDebounce from '../hooks/useDebounce';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [inputValue, setInputValue] = useState(initialQuery);
    const debouncedValue = useDebounce(inputValue, 500);
    const router = useRouter();

    useEffect(() => {
        // Prevent navigating on initial mount if the search bar is just populated from URL
        if (debouncedValue !== initialQuery && (debouncedValue || initialQuery)) {
            if (debouncedValue.trim()) {
                router.push(`/?q=${encodeURIComponent(debouncedValue)}`);
            } else {
                router.push('/');
            }
        }
    }, [debouncedValue, router, initialQuery]);

    return (
        <div className="search-container">
            <Search className="search-icon" size={18} />
            <input
                type="text"
                placeholder="Search for a movie..."
                className="search-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
