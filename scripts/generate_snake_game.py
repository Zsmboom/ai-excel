import xlsxwriter
import os

def create_snake_game():
    # 创建工作簿和工作表
    workbook = xlsxwriter.Workbook('public/games/excel-snake.xlsm')
    worksheet = workbook.add_worksheet('贪吃蛇')
    
    # 设置列宽和行高（创建20x20的游戏区域）
    for col in range(20):
        worksheet.set_column(col, col, 3)  # 设置列宽为3
    for row in range(20):
        worksheet.set_row(row, 20)  # 设置行高为20
    
    # 创建单元格格式
    game_cell_format = workbook.add_format({
        'border': 1,
        'bg_color': '#FFFFFF'
    })
    
    # 设置游戏区域格式
    for row in range(20):
        for col in range(20):
            worksheet.write(row, col, '', game_cell_format)
    
    # 添加控制按钮
    worksheet.write('V1', '贪吃蛇游戏', workbook.add_format({'bold': True, 'font_size': 14}))
    worksheet.write('V3', '分数：', workbook.add_format({'bold': True}))
    worksheet.write('W3', '0')
    worksheet.write('V5', '最高分：', workbook.add_format({'bold': True}))
    worksheet.write('W5', '0')
    
    # 添加游戏说明
    instructions = [
        '游戏说明：',
        '1. 点击"开始游戏"按钮开始',
        '2. 使用方向键控制蛇的移动',
        '3. 吃到食物可以增加分数',
        '4. 撞到墙壁或蛇身则游戏结束',
        '',
        '提示：',
        '* 首次运行需要启用宏',
        '* 游戏过程中请勿切换到其他窗口'
    ]
    
    for i, text in enumerate(instructions):
        worksheet.write(f'V{7+i}', text)
    
    # 添加VBA代码
    vba_code = '''
    Option Explicit

    Private Type Point
        X As Integer
        Y As Integer
    End Type

    Private Type Snake
        Body() As Point
        Direction As String
        Length As Integer
    End Type

    Private CurrentSnake As Snake
    Private Food As Point
    Private Score As Integer
    Private HighScore As Integer
    Private GameOver As Boolean
    Private GameStarted As Boolean

    Private Sub Worksheet_Activate()
        Application.OnKey "{UP}", "MoveUp"
        Application.OnKey "{DOWN}", "MoveDown"
        Application.OnKey "{LEFT}", "MoveLeft"
        Application.OnKey "{RIGHT}", "MoveRight"
    End Sub

    Private Sub Worksheet_Deactivate()
        Application.OnKey "{UP}"
        Application.OnKey "{DOWN}"
        Application.OnKey "{LEFT}"
        Application.OnKey "{RIGHT}"
    End Sub

    Sub InitializeGame()
        Dim i As Integer
        
        ' 初始化游戏状态
        Score = 0
        GameOver = False
        GameStarted = True
        Range("W3").Value = Score
        
        ' 清空游戏区域
        Range("A1:T20").Interior.Color = RGB(255, 255, 255)
        
        ' 初始化蛇
        ReDim CurrentSnake.Body(3)
        CurrentSnake.Length = 3
        CurrentSnake.Direction = "RIGHT"
        
        ' 设置蛇的初始位置
        For i = 0 To 2
            CurrentSnake.Body(i).X = 10
            CurrentSnake.Body(i).Y = 10 - i
        Next i
        
        ' 生成第一个食物
        GenerateFood
        
        ' 显示蛇和食物
        DrawSnake
        DrawFood
        
        ' 启动游戏循环
        Application.OnTime Now + TimeValue("00:00:01"), "GameLoop"
    End Sub

    Sub GameLoop()
        If Not GameStarted Or GameOver Then Exit Sub
        
        ' 移动蛇
        MoveSnake
        
        ' 检查是否吃到食物
        If CurrentSnake.Body(0).X = Food.X And CurrentSnake.Body(0).Y = Food.Y Then
            ' 增加分数
            Score = Score + 10
            Range("W3").Value = Score
            
            ' 更新最高分
            If Score > HighScore Then
                HighScore = Score
                Range("W5").Value = HighScore
            End If
            
            ' 增加蛇的长度
            CurrentSnake.Length = CurrentSnake.Length + 1
            ReDim Preserve CurrentSnake.Body(CurrentSnake.Length - 1)
            
            ' 生成新的食物
            GenerateFood
        End If
        
        ' 检查是否撞墙或撞到自己
        If CheckCollision Then
            GameOver = True
            MsgBox "游戏结束！得分：" & Score, vbInformation
            Exit Sub
        End If
        
        ' 重绘游戏画面
        DrawSnake
        DrawFood
        
        ' 继续游戏循环
        Application.OnTime Now + TimeValue("00:00:01"), "GameLoop"
    End Sub

    Sub MoveSnake()
        Dim i As Integer
        
        ' 保存尾部位置
        For i = CurrentSnake.Length - 1 To 1 Step -1
            CurrentSnake.Body(i).X = CurrentSnake.Body(i - 1).X
            CurrentSnake.Body(i).Y = CurrentSnake.Body(i - 1).Y
        Next i
        
        ' 根据方向移动蛇头
        Select Case CurrentSnake.Direction
            Case "UP"
                CurrentSnake.Body(0).Y = CurrentSnake.Body(0).Y - 1
            Case "DOWN"
                CurrentSnake.Body(0).Y = CurrentSnake.Body(0).Y + 1
            Case "LEFT"
                CurrentSnake.Body(0).X = CurrentSnake.Body(0).X - 1
            Case "RIGHT"
                CurrentSnake.Body(0).X = CurrentSnake.Body(0).X + 1
        End Select
    End Sub

    Function CheckCollision() As Boolean
        Dim i As Integer
        
        ' 检查是否撞墙
        If CurrentSnake.Body(0).X < 1 Or CurrentSnake.Body(0).X > 20 Or _
           CurrentSnake.Body(0).Y < 1 Or CurrentSnake.Body(0).Y > 20 Then
            CheckCollision = True
            Exit Function
        End If
        
        ' 检查是否撞到自己
        For i = 1 To CurrentSnake.Length - 1
            If CurrentSnake.Body(0).X = CurrentSnake.Body(i).X And _
               CurrentSnake.Body(0).Y = CurrentSnake.Body(i).Y Then
                CheckCollision = True
                Exit Function
            End If
        Next i
        
        CheckCollision = False
    End Function

    Sub GenerateFood()
        Dim Valid As Boolean
        Dim i As Integer
        
        Do
            ' 随机生成食物位置
            Food.X = Int((20 * Rnd) + 1)
            Food.Y = Int((20 * Rnd) + 1)
            
            ' 确保食物不在蛇身上
            Valid = True
            For i = 0 To CurrentSnake.Length - 1
                If Food.X = CurrentSnake.Body(i).X And Food.Y = CurrentSnake.Body(i).Y Then
                    Valid = False
                    Exit For
                End If
            Next i
        Loop Until Valid
    End Sub

    Sub DrawSnake()
        Dim i As Integer
        
        ' 清除旧的蛇身
        Range("A1:T20").Interior.Color = RGB(255, 255, 255)
        
        ' 绘制蛇身
        For i = 0 To CurrentSnake.Length - 1
            Cells(CurrentSnake.Body(i).Y, CurrentSnake.Body(i).X).Interior.Color = RGB(0, 128, 0)
        Next i
        
        ' 绘制蛇头
        Cells(CurrentSnake.Body(0).Y, CurrentSnake.Body(0).X).Interior.Color = RGB(0, 200, 0)
    End Sub

    Sub DrawFood()
        ' 绘制食物
        Cells(Food.Y, Food.X).Interior.Color = RGB(255, 0, 0)
    End Sub

    Sub MoveUp()
        If CurrentSnake.Direction <> "DOWN" Then
            CurrentSnake.Direction = "UP"
        End If
    End Sub

    Sub MoveDown()
        If CurrentSnake.Direction <> "UP" Then
            CurrentSnake.Direction = "DOWN"
        End If
    End Sub

    Sub MoveLeft()
        If CurrentSnake.Direction <> "RIGHT" Then
            CurrentSnake.Direction = "LEFT"
        End If
    End Sub

    Sub MoveRight()
        If CurrentSnake.Direction <> "LEFT" Then
            CurrentSnake.Direction = "RIGHT"
        End If
    End Sub

    Sub StartGame()
        If Not GameStarted Then
            InitializeGame
        End If
    End Sub
    '''
    
    # 将VBA代码写入文件
    vba_file = 'temp_vba_code.txt'
    with open(vba_file, 'w') as f:
        f.write(vba_code)
    
    # 关闭工作簿
    workbook.close()
    
    # 删除临时文件
    os.remove(vba_file)

if __name__ == "__main__":
    create_snake_game() 