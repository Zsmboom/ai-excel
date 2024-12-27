import React from 'react';
import { ArrowUpDown, Calculator, Grid } from 'lucide-react';

export interface TableConfigProps {
  config: TableConfigOptions;
  onChange: (config: TableConfigOptions) => void;
}

export interface TableConfigOptions {
  enableColumnSums: boolean;
  enablePivotTables: boolean;
  enableSorting: boolean;
}

export function TableConfig({ config, onChange }: TableConfigProps) {
  const handleChange = (key: keyof TableConfigOptions) => {
    onChange({ ...config, [key]: !config[key] });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <ConfigOption
        icon={<Calculator className="h-5 w-5" />}
        label="Enable Column Sums"
        checked={config.enableColumnSums}
        onChange={() => handleChange('enableColumnSums')}
      />
      <ConfigOption
        icon={<Grid className="h-5 w-5" />}
        label="Enable Pivot Tables"
        checked={config.enablePivotTables}
        onChange={() => handleChange('enablePivotTables')}
      />
      <ConfigOption
        icon={<ArrowUpDown className="h-5 w-5" />}
        label="Enable Column Sorting"
        checked={config.enableSorting}
        onChange={() => handleChange('enableSorting')}
      />
    </div>
  );
}

interface ConfigOptionProps {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: () => void;
}

function ConfigOption({ icon, label, checked, onChange }: ConfigOptionProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
      />
      {icon}
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </label>
  );
}