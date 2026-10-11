import { Search } from 'lucide-react'
import { Input, type InputProps } from './Input'

export function SearchBar(props: Omit<InputProps, 'leadingIcon' | 'type'>) {
  return (
    <Input
      type="search"
      leadingIcon={<Search className="h-4 w-4" />}
      placeholder="Search patients, appointments…"
      {...props}
    />
  )
}
