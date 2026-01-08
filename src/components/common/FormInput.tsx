interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = ''
}: FormInputProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required={required}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}