import win32com.client
import os
from pathlib import Path

def create_sudoku_workbook_with_vba():
    # 创建Excel应用程序实例
    xl = win32com.client.Dispatch("Excel.Application")
    xl.Visible = False
    
    # 创建新的工作簿
    wb = xl.Workbooks.Add()
    ws = wb.Sheets(1)
    ws.Name = "数独游戏"
    
    # VBA代码
    vba_code = """
    Option Explicit

    Private Type SudokuCell
        Value As Integer
        Fixed As Boolean
    End Type

    Private Type SudokuGrid
        Cells(1 To 9, 1 To 9) As SudokuCell
    End Type

    Private CurrentGame As SudokuGrid
    Private Difficulty As String

    Sub InitializeGame()
        Dim i As Integer, j As Integer
        
        ' 清空网格
        Range("A1:I9").ClearContents
        Range("A1:I9").Interior.Color = xlNone
        
        ' 初始化数据结构
        For i = 1 To 9
            For j = 1 To 9
                CurrentGame.Cells(i, j).Value = 0
                CurrentGame.Cells(i, j).Fixed = False
            Next j
        Next i
        
        ' 生成新的数独谜题
        GeneratePuzzle
        
        ' 显示谜题
        DisplayPuzzle
    End Sub

    Sub GeneratePuzzle()
        ' 生成完整的数独解决方案
        GenerateFullSolution
        
        ' 根据难度移除数字
        Select Case Difficulty
            Case "初级"
                RemoveNumbers 30
            Case "中级"
                RemoveNumbers 45
            Case "高级"
                RemoveNumbers 55
            Case Else
                RemoveNumbers 40
        End Select
    End Sub

    Private Sub GenerateFullSolution()
        ' 使用回溯算法生成有效的数独解
        Dim i As Integer, j As Integer
        Dim nums(1 To 9) As Integer
        
        ' 初始化数字数组
        For i = 1 To 9
            nums(i) = i
        Next i
        
        ' 随机打乱数字顺序
        ShuffleArray nums
        
        ' 填充第一行
        For i = 1 To 9
            CurrentGame.Cells(1, i).Value = nums(i)
        Next i
        
        ' 使用回溯算法填充其余单元格
        SolveSudoku
    End Sub

    Private Sub RemoveNumbers(ByVal count As Integer)
        Dim i As Integer, row As Integer, col As Integer
        Dim removed As Integer
        
        removed = 0
        Do While removed < count
            row = Int((9 * Rnd) + 1)
            col = Int((9 * Rnd) + 1)
            
            If CurrentGame.Cells(row, col).Value <> 0 Then
                CurrentGame.Cells(row, col).Value = 0
                removed = removed + 1
            End If
        Loop
    End Sub

    Private Function IsValid(ByVal row As Integer, ByVal col As Integer, ByVal num As Integer) As Boolean
        Dim i As Integer, j As Integer
        Dim boxRow As Integer, boxCol As Integer
        
        ' 检查行
        For i = 1 To 9
            If i <> col And CurrentGame.Cells(row, i).Value = num Then
                IsValid = False
                Exit Function
            End If
        Next i
        
        ' 检查列
        For i = 1 To 9
            If i <> row And CurrentGame.Cells(i, col).Value = num Then
                IsValid = False
                Exit Function
            End If
        Next i
        
        ' 检查3x3方格
        boxRow = 3 * ((row - 1) \ 3)
        boxCol = 3 * ((col - 1) \ 3)
        For i = boxRow + 1 To boxRow + 3
            For j = boxCol + 1 To boxCol + 3
                If (i <> row Or j <> col) And CurrentGame.Cells(i, j).Value = num Then
                    IsValid = False
                    Exit Function
                End If
            Next j
        Next i
        
        IsValid = True
    End Function

    Private Sub DisplayPuzzle()
        Dim i As Integer, j As Integer
        
        For i = 1 To 9
            For j = 1 To 9
                If CurrentGame.Cells(i, j).Value <> 0 Then
                    Cells(i, j).Value = CurrentGame.Cells(i, j).Value
                    If CurrentGame.Cells(i, j).Fixed Then
                        Cells(i, j).Font.Bold = True
                        Cells(i, j).Font.Color = RGB(0, 0, 128)
                    End If
                End If
            Next j
        Next i
    End Sub

    Private Sub Worksheet_Change(ByVal Target As Range)
        Dim cell As Range
        Dim value As Integer
        
        ' 只处理单个单元格的更改
        If Target.Cells.count > 1 Then Exit Sub
        
        Set cell = Target.Cells(1)
        
        ' 检查是否在游戏区域内
        If cell.row > 9 Or cell.Column > 9 Then Exit Sub
        
        ' 获取输入的值
        On Error Resume Next
        value = CInt(cell.Value)
        If Err.Number <> 0 Then
            cell.ClearContents
            Exit Sub
        End If
        On Error GoTo 0
        
        ' 验证输入
        If value < 1 Or value > 9 Then
            cell.ClearContents
            Exit Sub
        End If
        
        ' 检查是否符合数独规则
        If Not IsValid(cell.row, cell.Column, value) Then
            cell.Interior.Color = RGB(255, 200, 200)
        Else
            cell.Interior.Color = xlNone
        End If
        
        ' 检查是否完成游戏
        If IsGameComplete Then
            MsgBox "恭喜！您已完成数独游戏！", vbInformation
        End If
    End Sub

    Private Function IsGameComplete() As Boolean
        Dim i As Integer, j As Integer
        
        ' 检查所有单元格是否都已填写
        For i = 1 To 9
            For j = 1 To 9
                If IsEmpty(Cells(i, j)) Then
                    IsGameComplete = False
                    Exit Function
                End If
            Next j
        Next i
        
        ' 检查所有单元格是否都符合规则
        For i = 1 To 9
            For j = 1 To 9
                If Cells(i, j).Interior.Color = RGB(255, 200, 200) Then
                    IsGameComplete = False
                    Exit Function
                End If
            Next j
        Next i
        
        IsGameComplete = True
    End Function

    Private Sub ShuffleArray(arr() As Integer)
        Dim i As Integer, j As Integer, temp As Integer
        
        For i = UBound(arr) To 2 Step -1
            j = Int((i * Rnd) + 1)
            temp = arr(i)
            arr(i) = arr(j)
            arr(j) = temp
        Next i
    End Sub

    Sub SetDifficulty(level As String)
        Difficulty = level
        InitializeGame
    End Sub
    """
    
    # 添加VBA模块
    vba_module = wb.VBProject.VBComponents.Add(1)  # 1 = vbext_ct_StdModule
    vba_module.CodeModule.AddFromString(vba_code)
    
    # 保存为.xlsm文件
    wb.SaveAs(str(Path(os.getcwd()) / "public/games/excel-sudoku.xlsm"), FileFormat=52)  # 52 = xlOpenXMLWorkbookMacroEnabled
    
    # 关闭Excel
    wb.Close(False)
    xl.Quit()

if __name__ == "__main__":
    create_sudoku_workbook_with_vba() 