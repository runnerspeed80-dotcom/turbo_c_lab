const PROGRAMS = {
practice: [
{
  t: "Smallest & Largest of 3 Numbers",
  f: "PRAC2.C",
  d: "Find smallest and largest of three numbers",
  code: String.raw`/* Practice 2: Find smallest and largest of three numbers */
#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, c, smallest, largest;
    clrscr();

    printf("Enter three integers: ");
    scanf("%d %d %d", &a, &b, &c);

    /* Finding largest */
    largest = a;
    if (b > largest)
        largest = b;
    if (c > largest)
        largest = c;

    /* Finding smallest */
    smallest = a;
    if (b < smallest)
        smallest = b;
    if (c < smallest)
        smallest = c;

    printf("\n--- Results ---\n");
    printf("Numbers entered : %d, %d, %d\n", a, b, c);
    printf("Largest number  = %d\n", largest);
    printf("Smallest number = %d\n", smallest);

    getch();
}
`
},
{
  t: "Evaluate Expressions",
  f: "PRAC3.C",
  d: "Evaluate: (a) a + b * c / d and (b) (a + b * c) - d ^ a using pow()",
  code: String.raw`/* Practice 3: Evaluate expressions using math.h */
#include <stdio.h>
#include <conio.h>
#include <math.h>

void main()
{
    float a, b, c, d, res1, res2;
    clrscr();

    printf("Enter values for a, b, c, and d: ");
    scanf("%f %f %f %f", &a, &b, &c, &d);

    if (d == 0)
    {
        printf("\nError: Division by zero ('d' cannot be 0).\n");
    }
    else
    {
        /* Expression (a): a + b * c / d */
        res1 = a + (b * c) / d;

        /* Expression (b): (a + b * c) - d ^ a */
        res2 = (a + b * c) - (float)pow(d, a);

        printf("\n--- Evaluation Results ---\n");
        printf("Expression (a) [a + b * c / d]       = %.2f\n", res1);
        printf("Expression (b) [(a + b * c) - d ^ a] = %.2f\n", res2);
    }

    getch();
}
`
},
{
  t: "Binary & Decimal Conversion",
  f: "PRAC4.C",
  d: "Convert Binary to Decimal and Decimal to Binary",
  code: String.raw`/* Practice 4: Convert Binary to Decimal and Decimal to Binary */
#include <stdio.h>
#include <conio.h>

void main()
{
    int choice;
    long bin, tempBin, dec = 0, rem, base = 1;
    int num, tempNum, binArr[32], i = 0, j;

    clrscr();
    printf("--- BINARY & DECIMAL CONVERTER ---\n");
    printf("1. Convert Binary to Decimal\n");
    printf("2. Convert Decimal to Binary\n");
    printf("Enter your choice (1 or 2): ");
    scanf("%d", &choice);

    switch (choice)
    {
        case 1:
            printf("\nEnter a binary number (e.g. 1101): ");
            scanf("%ld", &bin);
            tempBin = bin;
            while (tempBin > 0)
            {
                rem = tempBin % 10;
                dec = dec + rem * base;
                base = base * 2;
                tempBin = tempBin / 10;
            }
            printf("Binary: %ld -> Decimal: %ld\n", bin, dec);
            break;

        case 2:
            printf("\nEnter a positive decimal number: ");
            scanf("%d", &num);
            tempNum = num;
            if (num == 0)
            {
                printf("Decimal: 0 -> Binary: 0\n");
            }
            else
            {
                while (tempNum > 0)
                {
                    binArr[i++] = tempNum % 2;
                    tempNum = tempNum / 2;
                }
                printf("Decimal: %d -> Binary: ", num);
                for (j = i - 1; j >= 0; j--)
                {
                    printf("%d", binArr[j]);
                }
                printf("\n");
            }
            break;

        default:
            printf("\nInvalid Choice! Please enter 1 or 2.\n");
    }

    getch();
}
`
},
{
  t: "Sum of Odd & Even Numbers",
  f: "PRAC5.C",
  d: "Find sum of odd and even numbers from 1 to N",
  code: String.raw`/* Practice 5: Find sum of odd and even numbers from 1 to N */
#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i;
    long evenSum = 0, oddSum = 0;

    clrscr();
    printf("Enter value of N: ");
    scanf("%d", &n);

    if (n < 1)
    {
        printf("Please enter an integer N >= 1.\n");
    }
    else
    {
        for (i = 1; i <= n; i++)
        {
            if (i % 2 == 0)
                evenSum += i;
            else
                oddSum += i;
        }

        printf("\n--- Results for 1 to %d ---\n", n);
        printf("Sum of even numbers = %ld\n", evenSum);
        printf("Sum of odd numbers  = %ld\n", oddSum);
        printf("Total sum (1 to N)  = %ld\n", evenSum + oddSum);
    }

    getch();
}
`
},
{
  t: "String Operations (string.h)",
  f: "PRAC6.C",
  d: "Perform string operations (strlen, strcpy, strcat, strcmp, strrev)",
  code: String.raw`/* Practice 6: Perform string operations using <string.h> */
#include <stdio.h>
#include <conio.h>
#include <string.h>

void main()
{
    char str1[100], str2[100], copyStr[100], catStr[200], revStr[100];
    int len1, len2, cmpRes;

    clrscr();
    printf("Enter first string: ");
    gets(str1);
    printf("Enter second string: ");
    gets(str2);

    /* 1. strlen */
    len1 = strlen(str1);
    len2 = strlen(str2);
    printf("\n1. strlen (Length):\n");
    printf("   Length of str1 (\"%s\") = %d\n", str1, len1);
    printf("   Length of str2 (\"%s\") = %d\n", str2, len2);

    /* 2. strcpy */
    strcpy(copyStr, str1);
    printf("\n2. strcpy (Copy):\n");
    printf("   copyStr = \"%s\"\n", copyStr);

    /* 3. strcat */
    strcpy(catStr, str1);
    strcat(catStr, str2);
    printf("\n3. strcat (Concatenation):\n");
    printf("   Combined = \"%s\"\n", catStr);

    /* 4. strcmp */
    cmpRes = strcmp(str1, str2);
    printf("\n4. strcmp (Comparison):\n");
    if (cmpRes == 0)
        printf("   Both strings are equal.\n");
    else if (cmpRes > 0)
        printf("   str1 is greater than str2 (diff = %d).\n", cmpRes);
    else
        printf("   str1 is smaller than str2 (diff = %d).\n", cmpRes);

    /* 5. strrev */
    strcpy(revStr, str1);
    strrev(revStr);
    printf("\n5. strrev (Reverse):\n");
    printf("   Reverse of str1 = \"%s\"\n", revStr);

    getch();
}
`
},
{
  t: "Pascal's Triangle",
  f: "PRAC7.C",
  d: "Display Pascal's triangle",
  code: String.raw`/* Practice 7: Display Pascal's triangle */
#include <stdio.h>
#include <conio.h>

void main()
{
    int rows, coef = 1, space, i, j;

    clrscr();
    printf("Enter number of rows for Pascal's Triangle: ");
    scanf("%d", &rows);

    printf("\n--- Pascal's Triangle (%d rows) ---\n\n", rows);
    for (i = 0; i < rows; i++)
    {
        for (space = 1; space <= rows - i; space++)
            printf("  ");

        for (j = 0; j <= i; j++)
        {
            if (j == 0 || i == 0)
                coef = 1;
            else
                coef = coef * (i - j + 1) / j;

            printf("%4d", coef);
        }
        printf("\n");
    }

    getch();
}
`
}
],
lab: [
{
  t: "Roots of Quadratic Equation",
  f: "LAB1A.C",
  d: "Find all roots (real, equal, imaginary) of a quadratic equation",
  code: String.raw`/* Lab 1A: Find all roots of a quadratic equation */
#include <stdio.h>
#include <conio.h>
#include <math.h>

void main()
{
    float a, b, c, disc, root1, root2, realPart, imagPart;

    clrscr();
    printf("Enter coefficients a, b, and c: ");
    scanf("%f %f %f", &a, &b, &c);

    if (a == 0)
    {
        printf("\nError: 'a' cannot be zero in a quadratic equation.\n");
    }
    else
    {
        disc = b * b - 4 * a * c;

        if (disc > 0)
        {
            root1 = (-b + sqrt(disc)) / (2 * a);
            root2 = (-b - sqrt(disc)) / (2 * a);
            printf("\nRoots are Real and Distinct:\n");
            printf("Root 1 = %.4f\n", root1);
            printf("Root 2 = %.4f\n", root2);
        }
        else if (disc == 0)
        {
            root1 = -b / (2 * a);
            printf("\nRoots are Real and Equal:\n");
            printf("Root 1 = Root 2 = %.4f\n", root1);
        }
        else
        {
            realPart = -b / (2 * a);
            imagPart = sqrt(-disc) / (2 * a);
            printf("\nRoots are Complex (Imaginary):\n");
            printf("Root 1 = %.4f + %.4fi\n", realPart, imagPart);
            printf("Root 2 = %.4f - %.4fi\n", realPart, imagPart);
        }
    }

    getch();
}
`
},
{
  t: "Reverse Integer & Palindrome",
  f: "LAB1B.C",
  d: "Find the reverse of an integer and check whether it is a palindrome",
  code: String.raw`/* Lab 1B: Reverse of an integer and palindrome check */
#include <stdio.h>
#include <conio.h>

void main()
{
    long num, temp, rev = 0;
    int rem;

    clrscr();
    printf("Enter an integer: ");
    scanf("%ld", &num);

    temp = num;
    while (temp != 0)
    {
        rem = (int)(temp % 10);
        rev = rev * 10 + rem;
        temp = temp / 10;
    }

    printf("\nOriginal number = %ld\n", num);
    printf("Reversed number = %ld\n", rev);

    if (num == rev)
        printf("\nResult: %ld is a Palindrome!\n", num);
    else
        printf("\nResult: %ld is NOT a Palindrome.\n", num);

    getch();
}
`
},
{
  t: "Fibonacci Series Using Recursion",
  f: "LAB2A.C",
  d: "Generate and print first N Fibonacci numbers using recursion",
  code: String.raw`/* Lab 2A: Generate and print first N Fibonacci numbers using recursion */
#include <stdio.h>
#include <conio.h>

int fibonacci(int n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

void main()
{
    int n, i;

    clrscr();
    printf("Enter number of terms (N): ");
    scanf("%d", &n);

    if (n <= 0)
    {
        printf("Please enter a positive integer.\n");
    }
    else
    {
        printf("\nFirst %d Fibonacci numbers using recursion:\n", n);
        for (i = 0; i < n; i++)
        {
            printf("%d ", fibonacci(i));
        }
        printf("\n");
    }

    getch();
}
`
},
{
  t: "GCD of Two Integers",
  f: "LAB2B.C",
  d: "Find the GCD of two integers",
  code: String.raw`/* Lab 2B: Find the GCD of two integers */
#include <stdio.h>
#include <conio.h>

int findGCD(int a, int b)
{
    int temp;
    while (b != 0)
    {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

void main()
{
    int num1, num2, gcd;

    clrscr();
    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);

    gcd = findGCD(num1, num2);

    printf("\nGCD of %d and %d is: %d\n", num1, num2, gcd);

    getch();
}
`
},
{
  t: "Mean, Variance & Std Deviation",
  f: "LAB3A.C",
  d: "Compute mean, variance, and standard deviation of N real numbers",
  code: String.raw`/* Lab 3A: Compute mean, variance, and standard deviation of N real numbers */
#include <stdio.h>
#include <conio.h>
#include <math.h>

void main()
{
    int n, i;
    float arr[50], sum = 0.0, mean, varSum = 0.0, variance, stdDev;

    clrscr();
    printf("Enter number of real numbers (N <= 50): ");
    scanf("%d", &n);

    if (n <= 0 || n > 50)
    {
        printf("Invalid value: N must be between 1 and 50.\n");
    }
    else
    {
        printf("Enter %d real numbers:\n", n);
        for (i = 0; i < n; i++)
        {
            printf("arr[%d]: ", i);
            scanf("%f", &arr[i]);
            sum += arr[i];
        }

        mean = sum / n;

        for (i = 0; i < n; i++)
        {
            varSum += (arr[i] - mean) * (arr[i] - mean);
        }

        variance = varSum / n;
        stdDev = sqrt(variance);

        printf("\n--- Statistical Analysis ---\n");
        printf("Mean               = %.4f\n", mean);
        printf("Variance           = %.4f\n", variance);
        printf("Standard Deviation = %.4f\n", stdDev);
    }

    getch();
}
`
},
{
  t: "Linear Search in Array",
  f: "LAB3B.C",
  d: "Search an element in an array using linear search",
  code: String.raw`/* Lab 3B: Search an element in an array using linear search */
#include <stdio.h>
#include <conio.h>

void main()
{
    int arr[50], n, key, i, found = 0;

    clrscr();
    printf("Enter number of elements in array: ");
    scanf("%d", &n);

    printf("Enter %d integers:\n", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("\nEnter element to search: ");
    scanf("%d", &key);

    for (i = 0; i < n; i++)
    {
        if (arr[i] == key)
        {
            printf("\nElement %d found at position %d (index %d).\n", key, i + 1, i);
            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("\nElement %d was not found in the array.\n", key);
    }

    getch();
}
`
},
{
  t: "Interchange Largest & Smallest",
  f: "LAB4A.C",
  d: "Interchange the largest and smallest numbers in an array",
  code: String.raw`/* Lab 4A: Interchange the largest and smallest numbers in an array */
#include <stdio.h>
#include <conio.h>

void main()
{
    int arr[50], n, i;
    int minIndex = 0, maxIndex = 0, temp;

    clrscr();
    printf("Enter number of elements in array: ");
    scanf("%d", &n);

    printf("Enter %d integers:\n", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    for (i = 1; i < n; i++)
    {
        if (arr[i] < arr[minIndex])
            minIndex = i;
        if (arr[i] > arr[maxIndex])
            maxIndex = i;
    }

    printf("\nSmallest element = %d (at index %d)\n", arr[minIndex], minIndex);
    printf("Largest element  = %d (at index %d)\n", arr[maxIndex], maxIndex);

    /* Swap smallest and largest */
    temp = arr[minIndex];
    arr[minIndex] = arr[maxIndex];
    arr[maxIndex] = temp;

    printf("\nArray after interchanging largest and smallest:\n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    getch();
}
`
},
{
  t: "Binary Search in Sorted Array",
  f: "LAB4B.C",
  d: "Search an element in a sorted array using binary search",
  code: String.raw`/* Lab 4B: Search an element in a sorted array using binary search */
#include <stdio.h>
#include <conio.h>

void main()
{
    int arr[50], n, key, i, low, high, mid, found = 0;

    clrscr();
    printf("Enter number of elements in array: ");
    scanf("%d", &n);

    printf("Enter %d elements in ascending sorted order:\n", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    low = 0;
    high = n - 1;

    while (low <= high)
    {
        mid = (low + high) / 2;
        if (arr[mid] == key)
        {
            printf("\nElement %d found at position %d (index %d).\n", key, mid + 1, mid);
            found = 1;
            break;
        }
        else if (arr[mid] < key)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    if (!found)
    {
        printf("\nElement %d was not found in the array.\n", key);
    }

    getch();
}
`
},
{
  t: "String Palindrome Without Library",
  f: "LAB5A.C",
  d: "Check whether a given string is a palindrome without using library functions",
  code: String.raw`/* Lab 5A: Check palindrome string without using library functions */
#include <stdio.h>
#include <conio.h>

void main()
{
    char str[100];
    int len = 0, i, isPal = 1;

    clrscr();
    printf("Enter a string: ");
    gets(str);

    /* Determine length manually */
    while (str[len] != '\0')
    {
        len++;
    }

    /* Compare from start and end */
    for (i = 0; i < len / 2; i++)
    {
        if (str[i] != str[len - 1 - i])
        {
            isPal = 0;
            break;
        }
    }

    printf("\nString entered: \"%s\"\n", str);
    if (isPal)
        printf("Result: The string is a PALINDROME!\n");
    else
        printf("Result: The string is NOT a palindrome.\n");

    getch();
}
`
},
{
  t: "Count Characters & Spaces",
  f: "LAB5B.C",
  d: "Count the number of vowels, consonants, digits, and white spaces in a string",
  code: String.raw`/* Lab 5B: Count vowels, consonants, digits, and white spaces */
#include <stdio.h>
#include <conio.h>

void main()
{
    char str[200], ch;
    int vowels = 0, consonants = 0, digits = 0, spaces = 0, i;

    clrscr();
    printf("Enter a string: ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        ch = str[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            vowels++;
        }
        else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
        {
            consonants++;
        }
        else if (ch >= '0' && ch <= '9')
        {
            digits++;
        }
        else if (ch == ' ' || ch == '\t')
        {
            spaces++;
        }
    }

    printf("\n--- Character Count Summary ---\n");
    printf("Vowels      : %d\n", vowels);
    printf("Consonants  : %d\n", consonants);
    printf("Digits      : %d\n", digits);
    printf("White Spaces: %d\n", spaces);

    getch();
}
`
},
{
  t: "Bubble Sort",
  f: "LAB6A.C",
  d: "Sort N elements of an array in ascending order using bubble sort",
  code: String.raw`/* Lab 6A: Sort N elements in ascending order using bubble sort */
#include <stdio.h>
#include <conio.h>

void main()
{
    int arr[50], n, i, j, temp;

    clrscr();
    printf("Enter number of elements (N <= 50): ");
    scanf("%d", &n);

    printf("Enter %d integers:\n", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    /* Bubble Sort */
    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("\nSorted array in ascending order:\n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    getch();
}
`
},
{
  t: "Read & Write Array Using Pointers",
  f: "LAB6B.C",
  d: "Write and read the contents of an array using pointers",
  code: String.raw`/* Lab 6B: Write and read the contents of an array using pointers */
#include <stdio.h>
#include <conio.h>

void main()
{
    int arr[50], n, i;
    int *ptr;

    clrscr();
    ptr = arr; /* Pointer to base address of array */

    printf("Enter number of elements in array: ");
    scanf("%d", &n);

    printf("Enter %d integers using pointer notation:\n", n);
    for (i = 0; i < n; i++)
    {
        printf("Element %d: ", i + 1);
        scanf("%d", (ptr + i));
    }

    printf("\nDisplaying array contents using pointers:\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d] (at address %p) = %d\n", i, (void*)(ptr + i), *(ptr + i));
    }

    getch();
}
`
},
{
  t: "Matrix Multiply & Transpose",
  f: "LAB7.C",
  d: "Input two matrices (MxN & PxQ), multiply if compatible, and print product & transpose",
  code: String.raw`/* Lab 7: Matrix multiplication and transpose in matrix form */
#include <stdio.h>
#include <conio.h>

void main()
{
    int a[10][10], b[10][10], c[10][10], ct[10][10];
    int m, n, p, q, i, j, k;

    clrscr();
    printf("Enter rows and columns of Matrix A (M N): ");
    scanf("%d %d", &m, &n);

    printf("Enter rows and columns of Matrix B (P Q): ");
    scanf("%d %d", &p, &q);

    if (n != p)
    {
        printf("\nMatrix multiplication NOT possible!\n");
        printf("Columns of A (%d) must equal rows of B (%d).\n", n, p);
    }
    else
    {
        printf("\nEnter elements of Matrix A (%d x %d):\n", m, n);
        for (i = 0; i < m; i++)
            for (j = 0; j < n; j++)
                scanf("%d", &a[i][j]);

        printf("\nEnter elements of Matrix B (%d x %d):\n", p, q);
        for (i = 0; i < p; i++)
            for (j = 0; j < q; j++)
                scanf("%d", &b[i][j]);

        /* Matrix Multiplication: C = A x B */
        for (i = 0; i < m; i++)
        {
            for (j = 0; j < q; j++)
            {
                c[i][j] = 0;
                for (k = 0; k < n; k++)
                {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }

        /* Transpose of C */
        for (i = 0; i < m; i++)
        {
            for (j = 0; j < q; j++)
            {
                ct[j][i] = c[i][j];
            }
        }

        /* Resultant Matrix */
        printf("\n=== RESULTANT MATRIX C (%d x %d) ===\n", m, q);
        for (i = 0; i < m; i++)
        {
            for (j = 0; j < q; j++)
                printf("%6d", c[i][j]);
            printf("\n");
        }

        /* Transpose Matrix */
        printf("\n=== TRANSPOSE OF MATRIX C (%d x %d) ===\n", q, m);
        for (i = 0; i < q; i++)
        {
            for (j = 0; j < m; j++)
                printf("%6d", ct[i][j]);
            printf("\n");
        }
    }

    getch();
}
`
},
{
  t: "Call by Value & Reference",
  f: "LAB8.C",
  d: "Add & subtract integers showing call by value/reference and with/without return types",
  code: String.raw`/* Lab 8: Call by value & reference, with and without return type */
#include <stdio.h>
#include <conio.h>

/* Function with return type & Call by Value */
int addByValue(int x, int y)
{
    return (x + y);
}

/* Function without return type & Call by Value */
void subWithoutReturn(int x, int y)
{
    printf("Call by Value without return: %d - %d = %d\n", x, y, (x - y));
}

/* Function with return type & Call by Reference */
int addByReference(int *x, int *y)
{
    return (*x + *y);
}

/* Function without return type & Call by Reference */
void subByReference(int *x, int *y, int *diff)
{
    *diff = *x - *y;
}

void main()
{
    int num1, num2, sum, diff;

    clrscr();
    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);

    printf("\n--- Function Demonstrations ---\n");

    /* (a) & (b) Call by Value with return type */
    sum = addByValue(num1, num2);
    printf("1. addByValue returned sum = %d\n", sum);

    /* (c) Function without return type */
    printf("2. ");
    subWithoutReturn(num1, num2);

    /* (a) & (b) Call by Reference with return type */
    sum = addByReference(&num1, &num2);
    printf("3. addByReference returned sum = %d\n", sum);

    /* (a) & (c) Call by Reference without return type */
    subByReference(&num1, &num2, &diff);
    printf("4. subByReference calculated diff = %d\n", diff);

    getch();
}
`
},
{
  t: "Swap Two Variables Using Pointers",
  f: "LAB9A.C",
  d: "Swap the contents of two variables using pointers",
  code: String.raw`/* Lab 9A: Swap the contents of two variables using pointers */
#include <stdio.h>
#include <conio.h>

void swap(int *p1, int *p2)
{
    int temp = *p1;
    *p1 = *p2;
    *p2 = temp;
}

void main()
{
    int a, b;

    clrscr();
    printf("Enter two integers (a and b): ");
    scanf("%d %d", &a, &b);

    printf("\nBefore swapping:\n");
    printf("a = %d, b = %d\n", a, b);

    swap(&a, &b);

    printf("\nAfter swapping using pointers:\n");
    printf("a = %d, b = %d\n", a, b);

    getch();
}
`
},
{
  t: "Concatenate Two Files",
  f: "LAB9B.C",
  d: "Concatenate the contents of two text files into a third file",
  code: String.raw`/* Lab 9B: Concatenate the contents of two text files into a third file */
#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

void main()
{
    FILE *f1, *f2, *f3;
    char ch;
    char file1[20], file2[20], file3[20];

    clrscr();
    printf("--- FILE CONCATENATION PROGRAM ---\n");
    printf("Enter name of first file  (e.g., F1.TXT): ");
    scanf("%s", file1);
    printf("Enter name of second file (e.g., F2.TXT): ");
    scanf("%s", file2);
    printf("Enter name of output file (e.g., MERGED.TXT): ");
    scanf("%s", file3);

    /* Open first file */
    f1 = fopen(file1, "r");
    if (f1 == NULL)
    {
        printf("Error: Cannot open source file %s.\n", file1);
        printf("Note: Create sample files using File -> New first.\n");
        getch();
        return;
    }

    /* Open second file */
    f2 = fopen(file2, "r");
    if (f2 == NULL)
    {
        printf("Error: Cannot open source file %s.\n", file2);
        fclose(f1);
        getch();
        return;
    }

    /* Open third file for writing */
    f3 = fopen(file3, "w");
    if (f3 == NULL)
    {
        printf("Error: Cannot create output file %s.\n", file3);
        fclose(f1);
        fclose(f2);
        getch();
        return;
    }

    /* Copy contents of file1 to output file */
    while ((ch = (char)fgetc(f1)) != EOF)
    {
        fputc(ch, f3);
    }

    /* Copy contents of file2 to output file */
    while ((ch = (char)fgetc(f2)) != EOF)
    {
        fputc(ch, f3);
    }

    printf("\nFiles '%s' and '%s' concatenated successfully into '%s'!\n", file1, file2, file3);

    fclose(f1);
    fclose(f2);
    fclose(f3);

    /* Display output file */
    printf("\nContents of %s:\n--------------------------------\n", file3);
    f3 = fopen(file3, "r");
    if (f3 != NULL)
    {
        while ((ch = (char)fgetc(f3)) != EOF)
            putchar(ch);
        fclose(f3);
    }
    printf("\n--------------------------------\n");

    getch();
}
`
},
{
  t: "Student Structure Records",
  f: "LAB10.C",
  d: "Student structure records: search by roll_no, average and highest test marks",
  code: String.raw`/* Lab 10: Student structure with search, average, and highest test marks */
#include <stdio.h>
#include <conio.h>

struct student
{
    char name[30];
    int roll_no;
    float marks[3];
};

void main()
{
    struct student s[50];
    int n, i, j, searchRoll, found = 0;
    float totalMarks[3], avgMarks[3], maxMarks[3];

    clrscr();
    printf("Enter number of student records (N <= 50): ");
    scanf("%d", &n);

    /* Input student records */
    for (i = 0; i < n; i++)
    {
        printf("\n--- Details for Student %d ---\n", i + 1);
        printf("Name: ");
        scanf("%s", s[i].name);
        printf("Roll Number: ");
        scanf("%d", &s[i].roll_no);
        for (j = 0; j < 3; j++)
        {
            printf("Marks in Test %d: ", j + 1);
            scanf("%f", &s[i].marks[j]);
        }
    }

    /* Initialize test calculations */
    for (j = 0; j < 3; j++)
    {
        totalMarks[j] = 0.0;
        maxMarks[j] = s[0].marks[j];
    }

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < 3; j++)
        {
            totalMarks[j] += s[i].marks[j];
            if (s[i].marks[j] > maxMarks[j])
                maxMarks[j] = s[i].marks[j];
        }
    }

    for (j = 0; j < 3; j++)
    {
        avgMarks[j] = totalMarks[j] / n;
    }

    /* Display summary of records */
    clrscr();
    printf("================ ALL STUDENT RECORDS ================\n");
    printf("%-10s %-15s %-8s %-8s %-8s\n", "Roll No", "Name", "Test 1", "Test 2", "Test 3");
    for (i = 0; i < n; i++)
    {
        printf("%-10d %-15s %-8.2f %-8.2f %-8.2f\n",
               s[i].roll_no, s[i].name, s[i].marks[0], s[i].marks[1], s[i].marks[2]);
    }

    /* (ii) Average marks in each test */
    printf("\n--- (ii) AVERAGE MARKS IN EACH TEST ---\n");
    for (j = 0; j < 3; j++)
        printf("Test %d Average: %.2f\n", j + 1, avgMarks[j]);

    /* (iii) Highest marks in each test */
    printf("\n--- (iii) HIGHEST MARKS IN EACH TEST ---\n");
    for (j = 0; j < 3; j++)
        printf("Test %d Highest: %.2f\n", j + 1, maxMarks[j]);

    /* (i) Search on roll_no */
    printf("\n--- (i) SEARCH BY ROLL NUMBER ---\n");
    printf("Enter Roll Number to search: ");
    scanf("%d", &searchRoll);

    for (i = 0; i < n; i++)
    {
        if (s[i].roll_no == searchRoll)
        {
            printf("\nRecord Found:\n");
            printf("Name       : %s\n", s[i].name);
            printf("Roll Number: %d\n", s[i].roll_no);
            printf("Marks      : Test 1 = %.2f, Test 2 = %.2f, Test 3 = %.2f\n",
                   s[i].marks[0], s[i].marks[1], s[i].marks[2]);
            found = 1;
            break;
        }
    }

    if (!found)
        printf("\nStudent with Roll Number %d not found.\n", searchRoll);

    getch();
}
`
}
]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PROGRAMS;
}