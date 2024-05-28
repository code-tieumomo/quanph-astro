---
title: "[CSB] Hàm print()"
author: quanph
pubDatetime: 2022-09-21T05:17:19Z
slug: csb-print
featured: true
draft: false
tags:
  - coding
  - python
  - cs
ogImage: ""
description: Hàm print() trong Python
---

## Table of Contents

## Hàm print()

Hàm `print()` trong Python được sử dụng để in ra màn hình console nội dung mà chúng ta muốn hiển thị.

## Cú pháp

```python
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
```

## Tham số

- `value`: giá trị cần in ra console
- `sep`: chuỗi ngăn cách giữa các giá trị, mặc định là khoảng trắng (' ')
- `end`: chuỗi kết thúc, mặc định là xuống dòng ('\n')
- `file`: xác định nơi mà nội dung cần in sẽ được gửi đến. Mặc định, hàm print() in ra đầu ra tiêu chuẩn (standard output), thường là màn hình console
- `flush`: kiểm soát xem output có được đẩy ngay lập tức ra màn hình hay không

## Ví dụ

```python
print("Hello, world!") # Hello, world!
print("Hello", "world", sep=", ", end="!\n") # Hello, world!
```
