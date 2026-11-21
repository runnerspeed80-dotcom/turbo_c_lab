# Turbo C++ Lab — Browser-Based IDE for UVCE Students

A lightweight, browser-based **Turbo C & C++ 3.2** environment built specifically for students at **UVCE** (University Visvesvaraya College of Engineering, Bengaluru) to practice coding and lab experiments without struggling with local DOSBox installations or legacy Windows compatibility issues.

🌐 **Live Demo:** [https://vercel.app](https://vercel.app) *(Update with your exact Vercel link)*

---

## Why This Exists (UVCE Coding Labs)

In our college programming labs at **UVCE**, foundational C and C++ coursework (such as **CS11CL01**) still uses **Turbo C / C++** along with classic DOS libraries like `<conio.h>` and `<graphics.h>`. Setting up Turbo C++ on modern Windows 11, macOS, or Linux laptops—or practicing on mobile—can be tedious and error-prone.

This web app brings the exact **UVCE college lab environment** directly into any browser so students can write, compile, and practice lab programs anywhere, anytime.

---

## Key Features

* **Instant Turbo C++ 3.2 in Browser:** Run C and C++ programs directly in your browser with zero installation or configuration.
* **CS11CL01 Lab Syllabus & Programs:** Direct one-click download for **`CS11CL01-Syllabus.pdf`** and quick access to lab exercises.
* **Easy Code Import, Copy & Paste:** Paste code directly from your clipboard or import `.C` and `.CPP` files into the DOS workspace without manually retyping.
* **Save & Download Locally:** Save programs in your browser storage or download `.c` / `.cpp` files directly to your device for lab submission.
* **Standard DOS Libraries Supported:** Full support for `<conio.h>`, `clrscr()`, `getch()`, and `<graphics.h>` (BGI graphics mode).
* **Mobile & Desktop Friendly:** Works smoothly on laptops, lab desktops, and smartphones.

---

## Essential Turbo C++ Keyboard Shortcuts

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`Ctrl + F9`** | Run Program | Compiles, links, and executes the active program. |
| **`Alt + F5`** | User Screen | Opens the output console to view program results. |
| **`F2`** | Save File | Saves the current source code file. |
| **`F3`** | Open File | Opens an existing `.C` or `.CPP` file from the virtual disk. |
| **`F5`** | Zoom Window | Maximizes or restores the active editor window. |
| **`Alt + X`** | Quit | Exits the Borland Turbo C++ IDE. |

---

## Running Locally

If you want to run this project locally on your machine:

1. Clone or download this repository.
2. Open a terminal inside the project folder (`turbo-c-lab`).
3. Start a local HTTP server:
   ```bash
   python -m http.server 8080
   ```
4. Open **`http://localhost:8080`** in your browser.

---

## Inspiration & Acknowledgements

This project was inspired by the following open-source projects and communities:
* **[Turbo C++ Online Compiler](https://github.io)** by [Sankalp Singh](https://github.com) — for the browser-based Turbo C/C++ IDE concept and student-friendly lab workflow.
* **[ISM-Philippines](https://github.com)** — for additional inspiration behind building accessible educational tools.
