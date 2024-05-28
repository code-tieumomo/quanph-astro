---
title: "[CSB] Kiểu dữ liệu số (int, float) và chuỗi (str)"
author: quanph
pubDatetime: 2022-09-21T05:17:19Z
slug: csb-number-and-string
featured: true
draft: false
tags:
  - coding
  - python
  - cs
ogImage: ""
description: Kiểu dữ liệu số (int, float) và chuỗi (str) trong Python
---

## Table of Contents

## Kiểu dữ liệu chuỗi (str)

Kiểu dữ liệu chuỗi (str) trong Python được sử dụng để lưu trữ các chuỗi ký tự. Chuỗi là một dãy các ký tự được bao quanh bởi dấu nháy đơn (`'`) hoặc dấu nháy kép (`"`).

```python
x = "Hello, world!" # chuỗi ký tự
y = 'Python' # chuỗi ký tự
```

### Escape character

Trong Python, có một số ký tự đặc biệt được gọi là escape character. Escape character được sử dụng để biểu diễn các ký tự không thể hiển thị trực tiếp trong chuỗi. Một số escape character phổ biến nhất bao gồm:

- `\n`: xuống dòng
- `\t`: tab
- `\\`: dấu gạch chéo
- `\'`: dấu nháy đơn
- `\"`: dấu nháy kép

```python
x = "Hello\nworld!" # Hello
                    # world!
y = "Hello\tworld!" # Hello    world!
z = "This is
a multi-line
string" # lỗi: không thể chứa xuống dòng trong chuỗi
```

### Các thao tác với chuỗi

#### F-string

F-string là một cú pháp mới được giới thiệu từ Python 3.6. F-string cho phép chúng ta chèn giá trị của biến vào chuỗi một cách dễ dàng và linh hoạt.

```python
name = "Alice"
age = 20
print(f"My name is {name} and I am {age} years old.") # My name is Alice and I am 20 years old.
```

#### Cắt chuỗi

Cắt chuỗi là một cách để trích xuất một phần của chuỗi dựa trên chỉ mục của các ký tự.

Cú pháp:

```python
s[start:end]
```

Trong đó:

- `start`: chỉ mục bắt đầu cắt chuỗi (bao gồm)
- `end`: chỉ mục kết thúc cắt chuỗi (không bao gồm)

> Nếu không có `start`, chuỗi sẽ được cắt từ đầu. Nếu không có `end`, chuỗi sẽ được cắt đến cuối.

Ví dụ:

```python
s = "Hello, world!"
print(s[0]) # H
print(s[7]) # w
print(s[0:5]) # Hello
print(s[7:]) # world!
print(s[:5]) # Hello
```

#### Độ dài chuỗi

Để lấy độ dài của chuỗi, chúng ta sử dụng hàm `len()`.

```python
s = "Hello, world!"
print(len(s)) # 13
```

#### Kiểm tra chuỗi

Để kiểm tra xem một chuỗi có tồn tại trong chuỗi khác hay không, chúng ta sử dụng toán tử `in`.

```python
s = "Hello, world!"
print("world" in s) # True
print("Python" in s) # False
```

#### Ghép chuỗi

Để ghép chuỗi, chúng ta sử dụng toán tử `+`.

```python
s1 = "Hello"
s2 = "world"
s = s1 + ", " + s2 + "!"
print(s) # Hello, world!
```

## Kiểu dữ liệu số (int, float)

### Kiểu dữ liệu số nguyên (int)

Kiểu dữ liệu số nguyên (int) trong Python được sử dụng để lưu trữ các số nguyên không có phần thập phân. Ví dụ về số nguyên bao gồm các số dương, số âm và số 0.

```python
x = 5 # số nguyên dương
y = -10 # số nguyên âm
z = 0 # số 0
```

### Kiểu dữ liệu số thực (float)

Kiểu dữ liệu số thực (float) trong Python được sử dụng để lưu trữ các số có phần thập phân. Ví dụ về số thực bao gồm các số dương, số âm và số 0.

```python
x = 3.14 # số thực dương
y = -2.5 # số thực âm
z = 0.0 # số 0
```

### Các phép toán số học

Python hỗ trợ nhiều phép toán số học cơ bản như cộng, trừ, nhân, chia, chia lấy phần dư, lũy thừa.

```python
x = 5
y = 2
print(x + y) # 7 - cộng
print(x - y) # 3 - trừ
print(x * y) # 10 - nhân
print(x / y) # 2.5 - chia
print(x // y) # 2 - chia lấy phần nguyên
print(x % y) # 1 - chia lấy phần dư
print(x ** y) # 25 - lũy thừa
```

## Chuyển đổi kiểu dữ liệu

Để chuyển đổi một biến sang kiểu dữ liệu khác, chúng ta sử dụng các hàm như `int()`, `float()`, `str()`.

```python
x = 5
y = float(x) # chuyển đổi x sang kiểu float
z = str(x) # chuyển đổi x sang kiểu str
```

## Phân biệt number và string

Khi thực hiện phép toán giữa số và chuỗi, Python sẽ báo lỗi.

```python
x = 5
y = "5"
print(x + y) # lỗi: không thể cộng số với chuỗi
```

> 5 và "5" là hai kiểu dữ liệu khác nhau, nên không thể thực hiện phép toán giữa chúng.

## Tổng kết

- Kiểu dữ liệu chuỗi (str) được sử dụng để lưu trữ chuỗi ký tự.
- Kiểu dữ liệu số nguyên (int) được sử dụng để lưu trữ số nguyên không có phần thập phân.
- Kiểu dữ liệu số thực (float) được sử dụng để lưu trữ số có phần thập phân.
- Python hỗ trợ nhiều phép toán số học cơ bản như cộng, trừ, nhân, chia, chia lấy phần dư, lũy thừa.
- Để chuyển đổi một biến sang kiểu dữ liệu khác, chúng ta sử dụng các hàm như `int()`, `float()`, `str()`.
- Khi thực hiện phép toán giữa số và chuỗi, Python sẽ báo lỗi.
