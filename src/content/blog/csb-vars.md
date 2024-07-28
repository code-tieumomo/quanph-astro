---
title: "[CSB] Biến (Variables)"
author: quanph
pubDatetime: 2022-09-21T05:17:19Z
slug: csb-vars
featured: true
draft: false
tags:
  - coding
  - python
  - cs
ogImage: ""
description: Biến (Variables) trong Python
---

## Table of Contents

## Biến (Variables)

Biến là một khái niệm quan trọng trong lập trình. Biến là một vùng nhớ trong bộ nhớ máy tính được dùng để lưu trữ dữ liệu. Mỗi biến sẽ có một tên riêng và một giá trị cụ thể. Trong Python, biến không cần khai báo kiểu dữ liệu mà giá trị của biến sẽ xác định kiểu dữ liệu của nó.

## Cú pháp

```python
<biến> = <giá trị>
```

## Ví dụ

```python
x = 5 # biến x lưu giá trị 5
y = "Hello, world!" # biến y lưu chuỗi "Hello, world!"
z = 3.14 # biến z lưu giá trị 3.14
```

## Gán giá trị cho biến

Để gán giá trị cho biến, chúng ta sử dụng toán tử `=`. Toán tử này không có nghĩa là so sánh mà có nghĩa là gán giá trị của biến bên trái bằng giá trị của biến bên phải.

```python
x = 5 # gán giá trị 5 cho biến x
a, b, c = 1, 2, 3 # gán giá trị 1 cho biến a, 2 cho biến b và 3 cho biến c
```

## Đặt tên biến

Khi đặt tên cho biến, chúng ta cần tuân thủ một số quy tắc sau:

- Tên biến chỉ chứa các ký tự chữ cái, chữ số và dấu gạch dưới `_`
- Tên biến không được bắt đầu bằng chữ số
- Tên biến không được trùng với các từ khóa của Python (ví dụ: `if`, `else`, `for`, `while`, `print`, `input`, ...)

```python
my_variable = 10 # tên biến hợp lệ
myVariable = 20 # tên biến hợp lệ
my-variable = 30 # tên biến không hợp lệ
1variable = 40 # tên biến không hợp lệ
```

## Kiểm tra kiểu dữ liệu của biến

Để kiểm tra kiểu dữ liệu của biến, chúng ta sử dụng hàm `type()`.

```python
x = 5
print(type(x)) # <class 'int'>

y = "Hello, world!"
print(type(y)) # <class 'str'>

z = 3.14
print(type(z)) # <class 'float'>
```
