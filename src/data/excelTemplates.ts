import type { ExcelTemplate } from '../types/excel';

export const excelTemplates: ExcelTemplate[] = [
  {
    id: 'sales-stats',
    name: 'Sales Data Statistics',
    description: 'Track sales performance with detailed statistics and metrics',
    prompt: 'Create a sales data statistics spreadsheet with columns for Product Name, SKU, Unit Price, Quantity Sold, Total Revenue, Cost per Unit, Profit Margin, and Sales Date. Include formulas for calculating total revenue, profit margins, and monthly sales trends.'
  },
  {
    id: 'customer-info',
    name: 'Customer Information Management',
    description: 'Organize customer details and interaction history',
    prompt: 'Generate a customer information management spreadsheet with columns for Customer ID, Full Name, Email, Phone, Company, Address, Last Purchase Date, Total Purchases, and Customer Status. Include data validation and formatting for contact information.'
  },
  {
    id: 'sales-plan',
    name: 'Sales Planning Template',
    description: 'Plan and track sales targets and achievements',
    prompt: 'Create a sales planning spreadsheet with columns for Sales Representative, Territory, Monthly Target, Current Sales, Achievement Percentage, Products Sold, and Commission. Include conditional formatting for target achievement and commission calculations.'
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    description: 'Track stock levels and inventory movements',
    prompt: 'Generate an inventory management spreadsheet with columns for Product ID, Product Name, Category, Current Stock, Minimum Stock Level, Reorder Point, Unit Cost, Supplier, and Last Restocked Date. Include alerts for low stock and automatic reorder calculations.'
  },
  {
    id: 'sales-performance',
    name: 'Sales Performance Report',
    description: 'Analyze sales team performance and metrics',
    prompt: 'Create a sales performance report with columns for Sales Period, Sales Representative, Region, Product Category, Sales Target, Actual Sales, Achievement Rate, and Bonus Calculation. Include pivot tables and charts for performance visualization.'
  },
  {
    id: 'budget',
    name: 'Budget Template',
    description: 'Plan and track expenses and income',
    prompt: 'Generate a budget spreadsheet with categories for Income (Salary, Investments, Other) and Expenses (Housing, Transportation, Utilities, Food, Entertainment, Savings). Include monthly tracking and variance analysis.'
  },
  {
    id: 'work-schedule',
    name: 'Work Schedule Template',
    description: 'Organize work shifts and assignments',
    prompt: 'Create a work schedule spreadsheet with columns for Employee Name, Department, Shift Type, Start Time, End Time, Break Duration, and Total Hours. Include automatic calculations for overtime and weekly hour totals.'
  },
  {
    id: 'attendance',
    name: 'Employee Attendance Tracker',
    description: 'Monitor employee attendance and leave',
    prompt: 'Generate an employee attendance tracking spreadsheet with columns for Employee ID, Name, Date, Check-in Time, Check-out Time, Total Hours, Leave Type, and Status. Include summary calculations for attendance percentage and leave balance.'
  },
  {
    id: 'invoice',
    name: 'Invoice Template',
    description: 'Professional invoice with calculations',
    prompt: 'Create an invoice template with sections for Company Details, Client Information, Invoice Number, Date, Due Date, Item Description, Quantity, Unit Price, Total, Subtotal, Tax, and Grand Total. Include automatic calculations and payment terms.'
  },
  {
    id: 'calendar',
    name: 'Calendar Template',
    description: 'Monthly calendar with event tracking',
    prompt: 'Generate a calendar spreadsheet with monthly views, including columns for Date, Day, Event Description, Time, Location, and Priority. Include conditional formatting for different event types and duration calculations.'
  }
];