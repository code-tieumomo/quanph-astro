---
title: "[CSB] Hàm input()"
author: quanph
pubDatetime: 2022-09-21T05:17:19Z
slug: csb-input
featured: true
draft: false
tags:
  - coding
  - python
  - cs
ogImage: ""
description: Hàm input() trong Python
---

## Table of Contents

## Hàm input()

Hàm `input()` trong Python được sử dụng để nhận dữ liệu từ bàn phím. Hàm này sẽ trả về một chuỗi dữ liệu mà người dùng nhập vào.

> Kiểu dữ liệu trả về của hàm `input()` là [chuỗi (str)](/posts/csb-number-and-string/#kiểu-dữ-liệu-chuỗi-str).

## Cú pháp

```python
input(prompt)
```

## Tham số

- `prompt`: chuỗi thông báo hiển thị cho người dùng trước khi họ nhập dữ liệu

## Ví dụ

```python
name = input("Nhập tên của bạn: ")
print("Xin chào,", name) # Xin chào, <tên của bạn>
```
