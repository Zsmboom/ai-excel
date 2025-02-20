import * as XLSX from 'xlsx';
import type { AnalysisResult, TableConfigOptions } from '../types/excel';

export function generateExcel(analysis: AnalysisResult, config: TableConfigOptions): Blob {
  const workbook = XLSX.utils.book_new();

  analysis.data.forEach(sheet => {
    // 创建一个新的数据数组，避免修改原始数据
    let data = config.enableSorting || config.enableColumnSums 
      ? [...sheet.rows]
      : sheet.rows;

    // 仅在需要时进行排序
    if (config.enableSorting && sheet.headers.length > 0) {
      const firstHeader = sheet.headers[0];
      data.sort((a, b) => {
        const aVal = a[firstHeader];
        const bVal = b[firstHeader];
        return String(aVal).localeCompare(String(bVal));
      });
    }

    // 仅在需要时计算列总和
    if (config.enableColumnSums) {
      const sums: Record<string, number | string> = { [sheet.headers[0]]: '总计' };
      sheet.headers.slice(1).forEach(header => {
        const values = data.map(row => parseFloat(row[header]));
        if (values.every(v => !isNaN(v))) {
          sums[header] = values.reduce((a, b) => a + b, 0);
        }
      });
      data.push(sums);
    }

    // 创建工作表并设置列宽
    const worksheet = XLSX.utils.json_to_sheet(data, {
      header: sheet.headers
    });

    // 设置合理的列宽
    const colWidths: { [key: string]: number } = {};
    sheet.headers.forEach((header, idx) => {
      const col = XLSX.utils.encode_col(idx);
      colWidths[col] = Math.max(
        header.length * 2,
        Math.min(50, Math.max(...data.map(row => String(row[header]).length)))
      );
    });
    worksheet['!cols'] = Object.keys(colWidths).map(col => ({ wch: colWidths[col] }));

    // 仅在需要时创建数据透视表
    if (config.enablePivotTables && sheet.headers.length >= 2) {
      const pivotSheet = createPivotTable(data, sheet.headers);
      XLSX.utils.book_append_sheet(workbook, pivotSheet, `${sheet.name} (透视表)`);
    }

    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name);
  });

  // 使用更高效的二进制写入
  const excelBuffer = XLSX.write(workbook, { 
    bookType: 'xlsx', 
    type: 'array',
    compression: true
  });
  
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