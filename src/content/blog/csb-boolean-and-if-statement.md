---
title: "[CSB] Kiểu dữ liệu boolean và câu lệnh if"
author: quanph
pubDatetime: 2022-09-21T05:17:19Z
slug: csb-boolean-and-if-statement
featured: true
draft: false
tags:
  - coding
  - python
  - cs
ogImage: ""
description: Kiểu dữ liệu boolean và câu lệnh if trong Python
---

## Table of Contents

## Kiểu dữ liệu boolean

Kiểu dữ liệu boolean trong Python chỉ có 2 giá trị: `True` và `False`. Kiểu dữ liệu boolean thường là kết quả của các phép so sánh và được sử dụng để kiểm tra điều kiện trong các câu lệnh điều khiển.

> **Lưu ý**: Trong Python, `True` và `False` phải viết hoa chữ cái đầu tiên.

### Ví dụ về kiểu dữ liệu boolean

```python
t = True
f = False

print(t) # True
print(f) # False

a = 5
b = 10

print(a < b) # True
print(a > b) # False
```

### Phủ định

Để phủ định giá trị boolean, chúng ta sử dụng toán tử `not`. Kết quả của phủ định giá trị `True` là `False` và ngược lại.

```python
t = True
f = False

print(not True) # False
print(not False) # True
```

## Toán tử so sánh và logic

### Toán tử so sánh

Python cung cấp các toán tử so sánh sau:

- `==`: so sánh bằng
- `!=`: so sánh khác
- `>`: so sánh lớn hơn
- `<`: so sánh nhỏ hơn
- `>=`: so sánh lớn hơn hoặc bằng
- `<=`: so sánh nhỏ hơn hoặc bằng

> **Lưu ý**: Toán tử so sánh `==` không phải là `=`. Toán tử `=` được sử dụng để gán giá trị.

### Toán tử logic

Python cung cấp các toán tử logic sau:

- `and`: toán tử `and` trả về `True` nếu cả 2 biểu thức đều đúng
- `or`: toán tử `or` trả về `True` nếu ít nhất 1 trong 2 biểu thức đúng
- `not`: toán tử `not` trả về `True` nếu biểu thức là `False` và ngược lại

### Ví dụ về toán tử so sánh và logic

```python
a = 5
b = 10

print(a == b) # False
print(a != b) # True
print(a < b) # True
print(a > b) # False
print(a <= b) # True
print(a >= b) # False

print(a < b and a > 0) # True
print(a < b and a < 0) # False
print(a < b or a < 0) # True

print(not a < b) # False
```

## Câu lệnh if

Câu lệnh `if` trong Python được sử dụng để kiểm tra điều kiện. Nếu điều kiện đúng, khối lệnh bên trong `if` sẽ được thực thi. Nếu điều kiện sai, khối lệnh bên trong `if` sẽ bị bỏ qua. Câu lệnh `if` thường được kết hợp với các câu lệnh điều khiển khác như `else` và `elif`.

### Cú pháp

```python
if condition:
    # block of code
```

Nếu điều kiện `condition` đúng, khối lệnh bên trong `if` sẽ được thực thi.

```python
if condition:
    # block of code
else:
    # block of code
```

Nếu điều kiện `condition` đúng, khối lệnh bên trong `if` sẽ được thực thi. Ngược lại, khối lệnh bên trong `else` sẽ được thực thi.

```python
if condition1:
    # block of code
elif condition2:
    # block of code
else:
    # block of code
```

Nếu điều kiện `condition1` đúng, khối lệnh bên trong `if` sẽ được thực thi. Nếu điều kiện `condition1` sai và điều kiện `condition2` đúng, khối lệnh bên trong `elif` sẽ được thực thi. Ngược lại, khối lệnh bên trong `else` sẽ được thực thi.

> - Khối lệnh bên trong mỗi câu lệnh điều khiển phải được thụt lề cùng một số khoảng trắng hoặc tab.

Thông thường, **condition là một biểu thức so sánh hoặc logic trả về giá trị boolean**. Nhưng đôi khi nó có thể là một giá trị khác, ví dụ như một chuỗi, một số, một danh sách, một tuple, một từ điển, hoặc một đối tượng khác. Trong trường hợp này, Python sẽ chuyển đổi giá trị đó thành một giá trị boolean rồi kiểm tra điều kiện. Về cơ bản, một giá trị là "truthy" bao gồm:

- Chuỗi không rỗng hoặc danh sách, tuple, từ điển, set không rỗng
- Số khác 0
- `True`

### Ví dụ của câu lệnh if

```python
a = 5
b = 10

if a < b:
    print("a is less than b")
# Output: a is less than b


if a > b:
    print("a is greater than b")
else:
    print("a is not greater than b")
# Output: a is not greater than b

if a < b:
    print("a is less than b")
elif a > b:
    print("a is greater than b")
else:
    print("a is equal to b")
# Output: a is less than b
```
