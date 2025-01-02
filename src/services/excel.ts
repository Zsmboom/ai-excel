import * as XLSX from 'xlsx';
import type { AnalysisResult, TableConfigOptions } from '../types/excel';

export function generateExcel(analysis: AnalysisResult, config: TableConfigOptions): Blob {
  const workbook = XLSX.utils.book_new();

  analysis.data.forEach(sheet => {
    let data = [...sheet.rows];

    // Apply sorting if enabled
    if (config.enableSorting) {
      const firstHeader = sheet.headers[0];
      data.sort((a, b) => {
        const aVal = a[firstHeader];
        const bVal = b[firstHeader];
        return aVal > bVal ? 1 : -1;
      });
    }

    // Calculate column sums if enabled
    if (config.enableColumnSums) {
      const sums: Record<string, number> = {};
      sheet.headers.forEach(header => {
        const values = data.map(row => parseFloat(row[header]));
        if (values.every(v => !isNaN(v))) {
          sums[header] = values.reduce((a, b) => a + b, 0);
        }
      });
      data.push({ ...sums, [sheet.headers[0]]: 'Total' });
    }

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add pivot table if enabled
    if (config.enablePivotTables) {
      const pivotSheet = createPivotTable(data, sheet.headers);
      XLSX.utils.book_append_sheet(workbook, pivotSheet, `${sheet.name} (Pivot)`);
    }

    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name);
  });

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  return new Blob([excelBuffer], { 
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
  });
}

function createPivotTable(
  data: Array<Record<string, any>>, 
  headers: string[]
): XLSX.WorkSheet {
  // Create a simple pivot table using the first column as rows
  // and summarizing numeric columns
  const pivotData: Record<string, Record<string, number>> = {};
  const rowHeader = headers[0];
  
  headers.slice(1).forEach(header => {
    data.forEach(row => {
      const rowKey = row[rowHeader];
      const value = parseFloat(row[header]);
      
      if (!isNaN(value)) {
        if (!pivotData[rowKey]) {
          pivotData[rowKey] = {};
        }
        if (!pivotData[rowKey][header]) {
          pivotData[rowKey][header] = 0;
        }
        pivotData[rowKey][header] += value;
      }
    });
  });

  return XLSX.utils.json_to_sheet(
    Object.entries(pivotData).map(([key, values]) => ({
      [rowHeader]: key,
      ...values
    }))
  );
}