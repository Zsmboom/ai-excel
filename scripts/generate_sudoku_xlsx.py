import xlsxwriter
import random

def create_sudoku_workbook():
    # 创建工作簿和工作表
    workbook = xlsxwriter.Workbook('public/games/excel-sudoku.xlsx')
    worksheet = workbook.add_worksheet('数独游戏')
    
    # 设置列宽和行高
    worksheet.set_column('A:I', 8)
    for row in range(9):
        worksheet.set_row(row, 40)
    
    # 创建单元格格式
    cell_format = workbook.add_format({
        'align': 'center',
        'valign': 'vcenter',
        'font_size': 14,
        'font_name': '微软雅黑',
        'border': 1
    })
    
    thick_border = workbook.add_format({
        'align': 'center',
        'valign': 'vcenter',
        'font_size': 14,
        'font_name': '微软雅黑',
        'border': 2
    })
    
    title_format = workbook.add_format({
        'font_size': 16,
        'font_name': '微软雅黑',
        'bold': True
    })
    
    text_format = workbook.add_format({
        'font_size': 11,
        'font_name': '微软雅黑'
    })
    
    # 设置9x9网格的格式
    for row in range(9):
        for col in range(9):
            if row % 3 == 0 and col % 3 == 0:
                worksheet.write(row, col, '', thick_border)
            else:
                worksheet.write(row, col, '', cell_format)
    
    # 添加数据验证（只允许1-9的数字）
    validation = {
        'validate': 'integer',
        'criteria': 'between',
        'minimum': 1,
        'maximum': 9,
        'error_title': '输入错误',
        'error_message': '请输入1到9之间的数字',
        'input_title': '输入提示',
        'input_message': '请输入1-9的数字'
    }
    worksheet.data_validation('A1:I9', validation)
    
    # 添加标题和说明
    worksheet.write('K1', 'Excel 数独游戏', title_format)
    worksheet.write('K3', '游戏说明：', text_format)
    worksheet.write('K4', '1. 在空格中填入1-9的数字', text_format)
    worksheet.write('K5', '2. 每行、每列和每个3x3方格中', text_format)
    worksheet.write('K6', '   的数字不能重复', text_format)
    worksheet.write('K7', '3. 填错时单元格会显示红色', text_format)
    worksheet.write('K8', '4. 全部填对时会显示提示', text_format)
    
    # 添加条件格式（用于检查重复）
    for row in range(9):
        # 检查行重复
        worksheet.conditional_format(f'A{row+1}:I{row+1}', {
            'type': 'duplicate',
            'format': workbook.add_format({'bg_color': '#FFB6C1'})
        })
        
        # 检查列重复
        worksheet.conditional_format(f'{chr(65+row)}1:{chr(65+row)}9', {
            'type': 'duplicate',
            'format': workbook.add_format({'bg_color': '#FFB6C1'})
        })
    
    # 生成初始数字
    initial_numbers = generate_initial_numbers()
    for pos, num in initial_numbers:
        row, col = pos
        fixed_number_format = workbook.add_format({
            'align': 'center',
            'valign': 'vcenter',
            'font_size': 14,
            'font_name': '微软雅黑',
            'border': 1,
            'font_color': 'navy',
            'bold': True
        })
        worksheet.write(row, col, num, fixed_number_format)
    
    # 保存工作簿
    workbook.close()

def generate_initial_numbers(count=30):
    """生成初始数字，确保符合数独规则"""
    numbers = []
    positions = [(i, j) for i in range(9) for j in range(9)]
    random.shuffle(positions)
    
    for i in range(count):
        pos = positions[i]
        valid_numbers = list(range(1, 10))
        random.shuffle(valid_numbers)
        
        for num in valid_numbers:
            if is_valid_placement(numbers, pos, num):
                numbers.append((pos, num))
                break
    
    return numbers

def is_valid_placement(numbers, pos, num):
    """检查数字放置是否有效"""
    row, col = pos
    
    # 检查行
    for (r, c), n in numbers:
        if r == row and n == num:
            return False
    
    # 检查列
    for (r, c), n in numbers:
        if c == col and n == num:
            return False
    
    # 检查3x3方格
    box_row, box_col = 3 * (row // 3), 3 * (col // 3)
    for (r, c), n in numbers:
        if (box_row <= r < box_row + 3 and 
            box_col <= c < box_col + 3 and 
            n == num):
            return False
    
    return True

if __name__ == "__main__":
    create_sudoku_workbook() 