// ADLD MCQ data: Units 1–5
Object.assign(quizData, {
  ADLD: {
    "Unit 1": [
      {
        text: "Note: Correct options follow the given answer key.\n\nQ1. Which of the following is true about analog signals?",
        options: [
          "They have discrete values",
          "They represent data using binary numbers",
          "They vary continuously over time",
          "They are only used in computers"
        ],
        correctIndex: 2
      },
      {
        text: "Q2. Digital signals are preferred over analog signals in computers because:",
        options: [
          "They are continuous",
          "They are immune to noise",
          "They are slower",
          "They use infinite levels of voltage"
        ],
        correctIndex: 1
      },
      {
        text: "Q3. The binary equivalent of the decimal number 13 is:",
        options: [
          "1011",
          "1101",
          "1001",
          "1110"
        ],
        correctIndex: 1
      },
      {
        text: "Q4. Which of the following is a valid octal number?",
        options: [
          "178",
          "88",
          "725",
          "91"
        ],
        correctIndex: 2
      },
      {
        text: "Q5. The hexadecimal number 1A is equivalent to the decimal:",
        options: [
          "26",
          "27",
          "18",
          "16"
        ],
        correctIndex: 0
      },
      {
        text: "Q6. What is the result of 1011 + 1101 in binary?",
        options: [
          "10111",
          "11000",
          "11100",
          "10000"
        ],
        correctIndex: 1
      },
      {
        text: "Q7. What is 1101 – 101 in binary?",
        options: [
          "1000",
          "1010",
          "1110",
          "1001"
        ],
        correctIndex: 0
      },
      {
        text: "Q8. Which logic gate gives a HIGH output only when all inputs are HIGH?",
        options: [
          "OR",
          "NAND",
          "AND",
          "XOR"
        ],
        correctIndex: 2
      },
      {
        text: "Q9. The output of a NOT gate is:",
        options: [
          "Always 1",
          "The same as the input",
          "The complement of the input",
          "0 if input is 0"
        ],
        correctIndex: 2
      },
      {
        text: "Q10. According to Boolean algebra, A + A = ?",
        options: [
          "0",
          "A",
          "1",
          "A'"
        ],
        correctIndex: 1
      },
      {
        text: "Q11. A don’t care condition (X) can be treated as:",
        options: [
          "Always 0",
          "Always 1",
          "Either 0 or 1, based on simplification",
          "Eliminated"
        ],
        correctIndex: 2
      },
      {
        text: "Q12. A completely specified function means:",
        options: [
          "Don’t care conditions are present",
          "All input combinations have defined output",
          "Some outputs are unknown",
          "No inputs are present"
        ],
        correctIndex: 1
      },
      {
        text: "Q13. Incompletely specified Boolean functions are represented using:",
        options: [
          "Only minterms",
          "Don’t care conditions",
          "Binary only",
          "SOP form only"
        ],
        correctIndex: 1
      },
      {
        text: "Q14. What is the binary equivalent of the octal number 17?",
        options: [
          "1111",
          "11001",
          "10001",
          "1000"
        ],
        correctIndex: 2
      },
      {
        text: "Q15. Which logic gate gives a LOW output only when all inputs are HIGH?",
        options: [
          "NAND",
          "NOR",
          "XOR",
          "XNOR"
        ],
        correctIndex: 0
      },
      {
        text: "Q16. “Don’t care” conditions in Boolean expressions are used for:",
        options: [
          "Increasing circuit cost",
          "Optimising the logic function",
          "Removing minterms",
          "Adding extra inputs"
        ],
        correctIndex: 1
      },
      {
        text: "Q17. Convert the hexadecimal number 3F.A to its binary equivalent:",
        options: [
          "111111.101",
          "111111.110",
          "111110.101",
          "111111.111"
        ],
        correctIndex: 0
      },
      {
        text: "Q18. The output of the logic circuit with inputs A, B, and C connected to a NAND gate, followed by a NOT gate, is equivalent to:",
        options: [
          "A + B + C",
          "ABC",
          "A ⊕ B ⊕ C",
          "A' + B' + C'"
        ],
        correctIndex: 1
      },
      {
        text: "Q19. What is the hexadecimal equivalent of the binary number 11110110.1101?",
        options: [
          "F6.D",
          "E7.6",
          "D7.1",
          "F5.C"
        ],
        correctIndex: 0
      },
      {
        text: "Q20. What is the number of minterms in a 4-variable Boolean function?",
        options: [
          "4",
          "8",
          "16",
          "32"
        ],
        correctIndex: 2
      }
    ],

    "Unit 2": [
      {
        text: "Q1. Simplify the expression using Boolean algebra: AB + A'B + AB'",
        options: [
          "A + B",
          "B' + A'",
          "A ⊕ B",
          "A + B'"
        ],
        correctIndex: 2
      },
      {
        text: "Q2. What is the simplified form of the Boolean expression: A + AB",
        options: [
          "B",
          "A",
          "AB",
          "A + B"
        ],
        correctIndex: 0
      },
      {
        text: "Q3. Which of the following is a valid group in a K-map?",
        options: [
          "3 adjacent 1s",
          "Diagonal grouping",
          "2, 4, or 8 adjacent 1s",
          "Random 1s"
        ],
        correctIndex: 1
      },
      {
        text: "Q4. What is the simplified expression from a 3-variable K-map for A, B, C with minterms 1, 3, 5, and 7?",
        options: [
          "A'B'",
          "B",
          "C",
          "B + C"
        ],
        correctIndex: 2
      },
      {
        text: "Q5. The Quine-McCluskey method is also known as:",
        options: [
          "Algebraic method",
          "Tabular method",
          "Karnaugh method",
          "DeMorgan method"
        ],
        correctIndex: 2
      },
      {
        text: "Q6. The function F = A' + B can be implemented using:",
        options: [
          "NOT and OR gates",
          "AND and NOT gates",
          "NOR only",
          "NAND only"
        ],
        correctIndex: 1
      },
      {
        text: "Q7. What is the complement of the Boolean expression A + B?",
        options: [
          "A' + B'",
          "AB",
          "A'B'",
          "A + B'"
        ],
        correctIndex: 0
      },
      {
        text: "Q8. A 4-variable K-map has how many cells?",
        options: [
          "8",
          "16",
          "32",
          "64"
        ],
        correctIndex: 2
      },
      {
        text: "Q9. Which of the following is not a valid group in a 4-variable K-map?",
        options: [
          "1 cell",
          "2 cells",
          "5 cells",
          "8 cells"
        ],
        correctIndex: 2
      },
      {
        text: "Q10. In Quine-McCluskey, a table entry with two '-'s represents:",
        options: [
          "One minterm",
          "Two minterms",
          "Four minterms",
          "Don’t care term"
        ],
        correctIndex: 2
      },
      {
        text: "Q11. Universal gates can be used to build:",
        options: [
          "Any logic circuit",
          "Only SOP forms",
          "Only combinational logic",
          "Only arithmetic circuits"
        ],
        correctIndex: 0
      },
      {
        text: "Q12. Which of the following statements is true regarding the function F = AB + A′B + AB′ + A'B'?",
        options: [
          "F is always equal to 1",
          "F = A + B",
          "F simplifies to A + B",
          "F simplifies to A ⊕ B"
        ],
        correctIndex: 2
      },
      {
        text: "Q13. The circuit implementing F = A′B + AB′ is called:",
        options: [
          "XNOR",
          "NOR",
          "XOR",
          "NAND"
        ],
        correctIndex: 2
      },
      {
        text: "Q14. In the Quine-McCluskey method, what is the significance of a term that covers both minterm 5 (0101) and minterm 7 (0111)?",
        options: [
          "Difference in 2 bits",
          "Invalid pairing",
          "Valid pairing with one variable eliminated",
          "Group with don’t care"
        ],
        correctIndex: 2
      },
      {
        text: "Q15. A group of eight 1s in a 4-variable K-map represents:",
        options: [
          "A single literal",
          "A product term with two literals",
          "A don’t care",
          "A constant 1"
        ],
        correctIndex: 3
      },
      {
        text: "Q16. A function F(A,B,C) has minterms 0, 1, 2, 5, and don’t-care terms 3, 7. What is the minimized expression using K-map?",
        options: [
          "A′C′ + B",
          "A′ + B",
          "A′C + B′C′",
          "A′ + C"
        ],
        correctIndex: 1
      },
      {
        text: "Q17. In the Quine-McCluskey method, the initial grouping is based on:",
        options: [
          "Output values",
          "Number of variables",
          "Number of 1’s in the binary representation of minterms",
          "Prime implicants"
        ],
        correctIndex: 2
      },
      {
        text: "Q18. The Quine-McCluskey method is primarily used for:",
        options: [
          "Converting binary to decimal",
          "Simplifying Boolean expressions",
          "Designing flip-flops",
          "Building combinational circuits"
        ],
        correctIndex: 1
      },
      {
        text: "Q19. What is the output of the Boolean function F = A.(B + C) when A = 1, B = 0, and C = 1?",
        options: [
          "0",
          "1",
          "Undefined",
          "Cannot be determined"
        ],
        correctIndex: 1
      },
      {
        text: "Q20. Which of the following is true about group formation in K-maps?",
        options: [
          "Groups must include diagonal cells",
          "Groups can include only 2 minterms",
          "Groups must be powers of 2",
          "Groups can overlap only once"
        ],
        correctIndex: 2
      }
    ],

    "Unit 3": [
      {
        text: "Q1. A half adder has how many inputs and outputs?",
        options: [
          "2 inputs, 1 output",
          "2 inputs, 2 outputs",
          "1 input, 2 outputs",
          "3 inputs, 1 output"
        ],
        correctIndex: 1
      },
      {
        text: "Q2. The output expressions for a half adder are:",
        options: [
          "Sum = A XOR B; Carry = A AND B",
          "Sum = A OR B; Carry = A AND B",
          "Sum = A XOR B; Carry = A OR B",
          "Sum = A AND B; Carry = A OR B"
        ],
        correctIndex: 2
      },
      {
        text: "Q3. Which gate combination best describes the carry-out of a full adder?",
        options: [
          "AB + BC + AC",
          "A ⊕ B",
          "A ⊕ B ⊕ Cin",
          "A + B + C"
        ],
        correctIndex: 1
      },
      {
        text: "Q4. A 4-bit parallel adder adds:",
        options: [
          "4 bits to a 1-bit number",
          "4 bits + 4 bits",
          "2 bits at a time",
          "1 bit per clock"
        ],
        correctIndex: 2
      },
      {
        text: "Q5. A half subtractor produces:",
        options: [
          "Difference and Sum",
          "Difference and Borrow",
          "Carry and Sum",
          "Borrow and Carry"
        ],
        correctIndex: 1
      },
      {
        text: "Q6. In a half subtractor, the borrow output is:",
        options: [
          "A'B",
          "AB'",
          "A XOR B",
          "A AND B"
        ],
        correctIndex: 0
      },
      {
        text: "Q7. Which of the following is not an output of a comparator?",
        options: [
          "A = B",
          "A > B",
          "A < B",
          "A XOR B"
        ],
        correctIndex: 3
      },
      {
        text: "Q8. A 4-bit comparator compares:",
        options: [
          "One 4-bit input with 1-bit",
          "Two 4-bit binary numbers",
          "Four 1-bit numbers",
          "Two decimal numbers"
        ],
        correctIndex: 1
      },
      {
        text: "Q9. A 3-to-8 line decoder has:",
        options: [
          "3 inputs and 8 outputs",
          "8 inputs and 3 outputs",
          "3 inputs and 3 outputs",
          "8 inputs and 1 output"
        ],
        correctIndex: 0
      },
      {
        text: "Q10. An 8-to-3 encoder has:",
        options: [
          "8 inputs, 3 outputs",
          "3 inputs, 8 outputs",
          "3 inputs, 3 outputs",
          "2 outputs, 4 inputs"
        ],
        correctIndex: 0
      },
      {
        text: "Q11. A multiplexer:",
        options: [
          "Selects one input from many inputs",
          "Sends multiple outputs to one input",
          "Adds two binary numbers",
          "Compares two numbers"
        ],
        correctIndex: 0
      },
      {
        text: "Q12. A 4-to-1 multiplexer has how many select lines?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correctIndex: 1
      },
      {
        text: "Q13. The number of input lines in an 8:1 multiplexer is:",
        options: [
          "8",
          "3",
          "4",
          "2"
        ],
        correctIndex: 0
      },
      {
        text: "Q14. A multiplexer works as a:",
        options: [
          "Data distributor",
          "Data selector",
          "Decoder",
          "Comparator"
        ],
        correctIndex: 1
      },
      {
        text: "Q15. A 16-to-1 multiplexer has how many select lines?",
        options: [
          "3",
          "4",
          "5",
          "2"
        ],
        correctIndex: 2
      },
      {
        text: "Q16. A multiplexer can be used to implement:",
        options: [
          "Latches",
          "Flip-flops",
          "Any combinational function",
          "Only parity generator"
        ],
        correctIndex: 2
      },
      {
        text: "Q17. The output of a half subtractor when A = 0 and B = 1 is:",
        options: [
          "Diff = 1, Borrow = 1",
          "Diff = 0, Borrow = 1",
          "Diff = 1, Borrow = 0",
          "Diff = 0, Borrow = 0"
        ],
        correctIndex: 1
      },
      {
        text: "Q18. A bistable circuit can be used as:",
        options: [
          "Decoder",
          "Counter",
          "Memory element",
          "Comparator"
        ],
        correctIndex: 2
      }
    ],

    "Unit 4": [
      {
        text: "Q1. The main difference between a latch and a flip-flop is:",
        options: [
          "Clock dependency",
          "Output type",
          "Number of inputs",
          "Number of states"
        ],
        correctIndex: 0
      },
      {
        text: "Q2. In an SR latch made from NOR gates, if S = 1 and R = 0, the output is:",
        options: [
          "Q = 1, Q’ = 0",
          "Q = 0, Q’ = 1",
          "Q = Q’ = 1",
          "Q = Q’ = 0"
        ],
        correctIndex: 0
      },
      {
        text: "Q3. What is the characteristic equation of the SR flip-flop?",
        options: [
          "Q+ = R + S",
          "Q+ = Q",
          "Q+ = S + R'Q",
          "Q+ = S + R'"
        ],
        correctIndex: 2
      },
      {
        text: "Q4. The purpose of the master-slave configuration is to:",
        options: [
          "Reduce cost",
          "Prevent the race-around condition",
          "Increase speed",
          "Increase invalid states"
        ],
        correctIndex: 1
      },
      {
        text: "Q5. Which equation correctly describes the next state of a T flip-flop?",
        options: [
          "Q+ = Q",
          "Q+ = D",
          "Q+ = T ⊕ Q",
          "Q+ = T + Q"
        ],
        correctIndex: 2
      },
      {
        text: "Q6. If T = 1 in a T flip-flop, what is the next output state?",
        options: [
          "Set",
          "Reset",
          "No change",
          "Toggle"
        ],
        correctIndex: 3
      },
      {
        text: "Q7. The expression Q+ = Q indicates that:",
        options: [
          "The flip-flop toggles",
          "The output remains unchanged",
          "The flip-flop resets",
          "The flip-flop sets"
        ],
        correctIndex: 1
      },
      {
        text: "Q8. In a JK flip-flop, if J and K inputs remain high for a long duration, what will happen?",
        options: [
          "Flip-flop will latch",
          "Flip-flop will toggle continuously",
          "Outputs freeze",
          "Nothing"
        ],
        correctIndex: 1
      },
      {
        text: "Q9. From the characteristic equation of a JK flip-flop, deduce Q+ if Q = 1, J = 1, K = 0.",
        options: [
          "1",
          "0",
          "Toggle",
          "Invalid"
        ],
        correctIndex: 0
      },
      {
        text: "Q10. What is the output of a JK flip-flop with J = 0, K = 1, and initial state Q = 1?",
        options: [
          "0",
          "1",
          "Toggles",
          "Undefined"
        ],
        correctIndex: 0
      },
      {
        text: "Q11. The JK flip-flop behaves like a T flip-flop when:",
        options: [
          "J = 1, K = 0",
          "J = K = 1",
          "J = 0, K = 1",
          "J = K = 0"
        ],
        correctIndex: 1
      },
      {
        text: "Q12. To convert an SR flip-flop to a D flip-flop, connect:",
        options: [
          "S = D, R = D’",
          "S = D, R = 0",
          "S = D’, R = D",
          "S = 1, R = 1"
        ],
        correctIndex: 0
      },
      {
        text: "Q13. The characteristic equation of a D flip-flop is:",
        options: [
          "Q+ = D",
          "Q+ = T ⊕ Q",
          "Q+ = JQ' + K'Q",
          "Q+ = S + R'"
        ],
        correctIndex: 0
      },
      {
        text: "Q14. A bistable element is a circuit that has:",
        options: [
          "One stable state",
          "Two stable states",
          "No stable state",
          "Multiple outputs"
        ],
        correctIndex: 1
      },
      {
        text: "Q15. A D flip-flop eliminates the invalid state of:",
        options: [
          "SR flip-flop",
          "JK flip-flop",
          "T flip-flop",
          "Master-slave"
        ],
        correctIndex: 0
      },
      {
        text: "Q16. The slave in a master-slave JK flip-flop is enabled when:",
        options: [
          "The clock is HIGH",
          "The clock is LOW",
          "The clock is toggled",
          "The clock is stable"
        ],
        correctIndex: 1
      },
      {
        text: "Q17. If T = 0 in a T flip-flop, what is the next output state?",
        options: [
          "Set",
          "Reset",
          "No change",
          "Toggle"
        ],
        correctIndex: 2
      },
      {
        text: "Q18. In an SR latch made from NOR gates, if S = 0 and R = 1, the output is:",
        options: [
          "Q = 1, Q’ = 0",
          "Q = 0, Q’ = 1",
          "Q = Q’ = 1",
          "Q = Q’ = 0"
        ],
        correctIndex: 1
      },
      {
        text: "Q19. JK flip-flops are preferred over SR flip-flops because:",
        options: [
          "They are cheaper",
          "They eliminate race conditions",
          "They eliminate the invalid state",
          "They are faster"
        ],
        correctIndex: 2
      },
      {
        text: "Q20. A 4-bit shift register using D flip-flops can store:",
        options: [
          "2 bits",
          "8 bits",
          "4 bits",
          "16 bits"
        ],
        correctIndex: 2
      }
    ],

    "Unit 5": [
      {
        text: "Q1. A synchronous MOD-16 counter uses how many flip-flops?",
        options: [
          "4",
          "3",
          "5",
          "6"
        ],
        correctIndex: 0
      },
      {
        text: "Q2. A MOD-5 synchronous counter cycles through how many states?",
        options: [
          "4",
          "10",
          "6",
          "5"
        ],
        correctIndex: 3
      },
      {
        text: "Q3. Synchronous counter design often uses Karnaugh maps to:",
        options: [
          "Store logic",
          "Identify hazards",
          "Simplify D/T input logic",
          "Generate toggles"
        ],
        correctIndex: 2
      },
      {
        text: "Q4. A synchronous counter designed using D flip-flops counts 000 → 001 → 010 → 011. This is:",
        options: [
          "MOD-3",
          "MOD-4",
          "MOD-2",
          "Ring counter"
        ],
        correctIndex: 1
      },
      {
        text: "Q5. For a MOD-6 counter using T flip-flops, how many flip-flops are required?",
        options: [
          "2",
          "3",
          "4",
          "6"
        ],
        correctIndex: 1
      },
      {
        text: "Q6. Which is true about synchronous counters?",
        options: [
          "Trigger on random edges",
          "No timing control",
          "All flip-flops are triggered at the same time",
          "Require fewer gates than ripple"
        ],
        correctIndex: 2
      },
      {
        text: "Q7. For a synchronous 4-bit up-counter using T flip-flops, the T inputs should be:",
        options: [
          "All 1",
          "T₀ = 1, T₁ = Q₀, T₂ = Q₀·Q₁, T₃ = Q₀·Q₁·Q₂",
          "T = Q",
          "Tied to ground"
        ],
        correctIndex: 1
      },
      {
        text: "Q8. In a synchronous counter, all flip-flops are triggered by:",
        options: [
          "Their Q output",
          "Feedback logic",
          "A ring oscillator",
          "The same clock signal"
        ],
        correctIndex: 3
      },
      {
        text: "Q9. A 3-bit ripple down-counter using T flip-flops starts at 111. Next state?",
        options: [
          "000",
          "110",
          "001",
          "011"
        ],
        correctIndex: 1
      },
      {
        text: "Q10. What is the T input for each T flip-flop in a binary ripple counter?",
        options: [
          "1",
          "0",
          "Tied to Q of the previous",
          "Alternating 1 and 0"
        ],
        correctIndex: 2
      },
      {
        text: "Q11. In a ripple counter, each flip-flop is triggered by:",
        options: [
          "A global clock",
          "Its clock",
          "The output of the previous flip-flop",
          "Tied to logic 1"
        ],
        correctIndex: 2
      },
      {
        text: "Q12. In an asynchronous 3-bit up-counter using T flip-flops, how many states are possible?",
        options: [
          "4",
          "6",
          "8",
          "16"
        ],
        correctIndex: 2
      },
      {
        text: "Q13. An asynchronous counter is also called:",
        options: [
          "Ripple counter",
          "Ring counter",
          "Binary counter",
          "Modulo counter"
        ],
        correctIndex: 0
      },
      {
        text: "Q14. Which type of shift register can perform both left and right shifts?",
        options: [
          "SISO",
          "PIPO",
          "SIPO",
          "Bidirectional"
        ],
        correctIndex: 3
      },
      {
        text: "Q15. A parallel-in, parallel-out (PIPO) shift register behaves like:",
        options: [
          "Memory",
          "Counter",
          "Encoder",
          "Demux"
        ],
        correctIndex: 0
      },
      {
        text: "Q16. The output of each D flip-flop in a shift register is connected to:",
        options: [
          "The clock input of the next",
          "The D input of the next",
          "The Q' of the previous",
          "Ground"
        ],
        correctIndex: 1
      },
      {
        text: "Q17. In a shift register, which flip-flop is best suited?",
        options: [
          "T",
          "D",
          "SR",
          "JK"
        ],
        correctIndex: 1
      },
      {
        text: "Q18. A synchronous MOD-6 counter using T flip-flops requires:",
        options: [
          "2 flip-flops",
          "3 flip-flops",
          "4 flip-flops",
          "6 flip-flops"
        ],
        correctIndex: 1
      },
      {
        text: "Q19. A bidirectional shift register can:",
        options: [
          "Shift only left",
          "Shift only right",
          "Shift both left and right",
          "Store only one bit"
        ],
        correctIndex: 2
      },
      {
        text: "Q20. A ring counter is a type of:",
        options: [
          "Ripple counter",
          "Shift register counter",
          "Binary counter",
          "Modulo counter"
        ],
        correctIndex: 1
      }
    ]
  }
});
