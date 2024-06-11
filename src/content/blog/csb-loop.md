---
title: "[CSB] Vòng lặp"
author: quanph
pubDatetime: 2022-09-21T05:17:19Z
slug: csb-loop
featured: true
draft: false
tags:
  - coding
  - python
  - cs
ogImage: ""
description: Vòng lặp trong Python
---

## Table of Contents

## Hàm `range()`

Hàm `range()` trong Python được sử dụng để tạo ra một dãy số nguyên liên tiếp.

> **Lưu ý**: Hàm `range()` không trả về một dãy số mà trả về một đối tượng range. Để xem dãy số, chúng ta cần chuyển đối tượng range sang kiểu dữ liệu list.

### Cú pháp hàm `range()`

```python
# range(stop)
# range(start, stop)
# range(start, stop, step)
```

### Tham số hàm `range()`

- `start`: số nguyên bắt đầu của dãy số (mặc định là 0)
- `stop`: số nguyên kết thúc của dãy số
- `step`: bước nhảy giữa các số (mặc định là 1)

> **Lưu ý**: `stop` sẽ không được trả về trong dãy số.

### Ví dụ về hàm `range()`

```python
# range(stop)
range(5) # 0, 1, 2, 3, 4

# range(start, stop)
range(1, 5) # 1, 2, 3, 4

# range(start, stop, step)
range(1, 10, 2) # 1, 3, 5, 7, 9
```

## Vòng lặp `for`

Vòng lặp `for` trong Python được sử dụng để lặp qua một dãy số hoặc một chuỗi. Vòng lặp này sẽ thực hiện cùng một khối lệnh cho mỗi phần tử trong dãy số hoặc chuỗi.

### Cú pháp vòng lặp `for`

```python
for item in iterable:
    # Khối lệnh
```

### Tham số vòng lặp `for`

- `item`: biến lặp, lưu trữ giá trị của phần tử hiện tại trong dãy số hoặc chuỗi
- `iterable`: dãy số hoặc chuỗi mà chúng ta muốn lặp qua

### Ví dụ vòng lặp `for`

```python
# Lặp qua một dãy số từ 0 đến 4
for i in range(5):
    print(i) # 0 1 2 3 4

# Lặp qua một chuỗi
for char in "Hello":
    print(char) # H e l l o
```

## Vòng lặp `while`

Vòng lặp `while` trong Python được sử dụng để lặp qua một khối lệnh cho đến khi điều kiện không còn đúng. Vòng lặp này sẽ thực hiện cùng một khối lệnh cho mỗi lần lặp.

### Cú pháp vòng lặp `while`

```python
while condition:
    # Khối lệnh
```

### Tham số vòng lặp `while`

- `condition`: điều kiện kiểm tra trước mỗi lần lặp

### Ví dụ vòng lặp `while`

```python
# Lặp cho đến khi i bằng 5
i = 0
while i < 5:
    print(i)
    i += 1
```

## Câu lệnh `break`

Câu lệnh `break` trong Python được sử dụng để thoát khỏi vòng lặp ngay lập tức. Câu lệnh này thường được sử dụng để kết thúc vòng lặp sớm khi một điều kiện nào đó được thỏa mãn. Nếu `break` được sử dụng trong một vòng lặp lồng nhau, nó sẽ thoát khỏi vòng lặp gần nhất.

### Ví dụ về câu lệnh `break`

```python
# Lặp qua một dãy số từ 0 đến 4
for i in range(5):
    if i == 3:
        break
    print(i) # 0 1 2
```

## Câu lệnh `continue`

Câu lệnh `continue` trong Python được sử dụng để bỏ qua phần còn lại của khối lệnh và bắt đầu vòng lặp mới. Câu lệnh này thường được sử dụng để bỏ qua một số phần tử trong vòng lặp. Nếu `continue` được sử dụng trong một vòng lặp lồng nhau, nó sẽ bỏ qua phần còn lại của vòng lặp gần nhất.

### Ví dụ về câu lệnh `continue`

```python
# Lặp qua một dãy số từ 0 đến 4
for i in range(5):
    if i == 3:
        continue
    print(i) # 0 1 2 4
```
