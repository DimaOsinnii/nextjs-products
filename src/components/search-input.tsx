import clsx from 'clsx';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({ value, className, placeholder = 'Search...', onChange }: SearchInputProps) {
  return (
    <div
      className={clsx(
        'flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300',
        'has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-green-400',
        className,
      )}
    >
      <input
        id="search"
        name="search"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
      />
    </div>
  );
}
