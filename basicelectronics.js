// basicelectronics.js

// Ensure quizData exists and attach Basic Electronics subject
(function initBasicElectronics() {
  var qd = (typeof window !== 'undefined' && window.quizData)
    ? window.quizData
    : (typeof quizData !== 'undefined' ? quizData : {});

  Object.assign(qd, {
    "Basic Electronics": {
      "Unit 1: Diodes and Rectifiers": [
        {
          text: "The voltage at which forward current through the diode starts increasing rapidly is called",
          options: [
            "Cut-in voltage",
            "Breakdown voltage",
            "Saturation voltage",
            "Cutoff voltage"
          ],
          correctIndex: 0
        },
        {
          text: "Smaller the ripple factor, the output will have higher component of",
          options: ["Spike", "AC", "DC", "Pulse"],
          correctIndex: 2
        },
        {
          text: "The efficiency of full wave rectifier is about",
          options: ["0.46", "81.2%", "1.21", "40.6%"],
          correctIndex: 1
        },
        {
          text: "When the p-n junction diode is forward biased, it offers",
          options: [
            "High resistance",
            "Low resistance",
            "Low voltage",
            "High voltage"
          ],
          correctIndex: 1
        },
        {
          text: "Zener diode is mainly used as",
          options: [
            "Amplifier",
            "Comparator",
            "Oscillator",
            "Voltage regulator"
          ],
          correctIndex: 3
        },
        {
          text: "The efficiency of half wave rectifier is about",
          options: [
            "81.2%",
            "46%",
            "40.6%",
            "1.21%"
          ],
          correctIndex: 2
        },
        {
          text: "The r.m.s value of load current in a full wave rectifier is",
          options: [
            "0.707 Im",
            "0.5π",
            "0.5 Im",
            "0.3183 Im"
          ],
          correctIndex: 0
        },
        {
          text: "The amount of ripples present at the output of half wave rectifier is",
          options: ["1.21", "0.81", "0.46", "0.50"],
          correctIndex: 0
        },
        {
          text: "The amount of ripples present at the output of a full wave rectifier is approximately",
          options: ["81%", "48%", "42%", "52%"],
          correctIndex: 1
        },
        {
          text: "A silicon diode is connected in series to a DC supply of 2 V and resistance of 13 Ω. The current in the circuit is approximately",
          options: ["1.5 A", "0.55 A", "0.45 A", "0.10 A"],
          correctIndex: 3
        },
        {
          text: "The DC load current of a half wave rectifier is",
          options: [
            "2 Idc / π",
            "2 Im / π",
            "Im / π",
            "1.414 / π"
          ],
          correctIndex: 2
        },
        {
          text: "A sinusoidal voltage of peak value 40 V is applied to a half wave rectifier with RL = 800 Ω and Rf = 8 Ω. The peak value of current is approximately",
          options: [
            "4.95 mA",
            "49.5 mA",
            "0.495 mA",
            "4.95 A"
          ],
          correctIndex: 1
        },
        {
          text: "A silicon diode is connected in series to a DC supply of 5 V and resistance of 1.5 kΩ. The current in the circuit is approximately",
          options: [
            "3.86 mA",
            "2.86 mA",
            "0.38 mA",
            "1.5 mA"
          ],
          correctIndex: 1
        },
        {
          text: "Average DC load voltage of a full wave bridge rectifier is",
          options: [
            "Im / 0.5",
            "2 Im / π",
            "Im / 0.707",
            "2 Vm / π"
          ],
          correctIndex: 3
        },
        {
          text: "In the voltage regulator shown in your notes, if the current through the load decreases",
          options: [
            "The current through R1 will increase.",
            "The current through R1 will decrease.",
            "Zener diode current will increase.",
            "Zener diode current will decrease."
          ],
          correctIndex: 2
        },
        {
          text: "In the given zener regulator circuit (with 120 V input, 70 V zener, and 50 V output), what is the output voltage?",
          options: ["50 V", "70 V", "120 V", "170 V"],
          correctIndex: 0
        },
        {
          text: "The r.m.s value of load current in a half wave rectifier is",
          options: [
            "0.5 Im",
            "0.5π",
            "0.707 Im",
            "0.3183 Im"
          ],
          correctIndex: 0
        },
        {
          text: "A germanium diode is connected in series to a DC supply of 4 V and resistance of 2 kΩ, the current in the circuit is approximately",
          options: [
            "1.85 mA",
            "1.45 mA",
            "0.185 mA",
            "18.5 mA"
          ],
          correctIndex: 0
        },
        {
          text: "A zener diode of 10 V is connected to a supply of 20 V through a series resistance of 200 Ω. With no load, current through the zener is",
          options: [
            "500 mA",
            "50 mA",
            "5 A",
            "400 mA"
          ],
          correctIndex: 1
        },
        {
          text: "A germanium diode is connected in series to a DC supply of 7.5 V and resistance of 1.3 kΩ, the current in the circuit is approximately",
          options: [
            "5.53 mA",
            "5.53 A",
            "5.35 mA",
            "1.53 mA"
          ],
          correctIndex: 0
        },
        {
          text: "A silicon and a germanium diode are connected in series to a DC supply of 8 V and resistance of 2.5 kΩ. The current in the circuit is approximately",
          options: [
            "2.8 A",
            "28 mA",
            "0.28 mA",
            "2.8 mA"
          ],
          correctIndex: 3
        },
        {
          text: "In the breakdown region, zener diode behaves like a source of",
          options: [
            "Constant resistance",
            "Constant current",
            "Constant voltage",
            "Constant power"
          ],
          correctIndex: 2
        },
        {
          text: "Ripple factor for a full wave bridge rectifier with capacitor filter is approximately",
          options: [
            "1 / (4√3 f C R_L)",
            "1 / (2√3 f C R_L)",
            "1 / (2 f C R_L)",
            "1 / (4 f C R_L)"
          ],
          correctIndex: 0
        },
        {
          text: "Which of the following statement is correct?",
          options: [
            "Rectification efficiency of a half wave rectifier is equal to that of the full wave rectifier",
            "All of the given options",
            "Rectification efficiency of a half wave rectifier is lower than that of the full wave rectifier",
            "Rectification efficiency of a half wave rectifier is higher than that of the full wave rectifier"
          ],
          correctIndex: 2
        },
        {
          text: "In a full wave bridge rectifier, the number of diodes conducting at a time during one half cycle of the input signal is",
          options: ["2", "4", "3", "1"],
          correctIndex: 0
        },
        {
          text: "The doping level in a zener diode is __________ that of a PN diode.",
          options: [
            "The same as",
            "Less than",
            "More than",
            "None of the given options"
          ],
          correctIndex: 2
        },
        {
          text: "The basic purpose of filter is to",
          options: [
            "Minimize variations in AC input signal",
            "Suppress harmonics in rectified output",
            "Remove ripples from the rectified output",
            "Stabilize DC output voltage"
          ],
          correctIndex: 2
        },
        {
          text: "The basic reason why a full wave rectifier has twice the efficiency of a half wave rectifier is that",
          options: [
            "It makes use of transformer",
            "Its ripple factor is much less",
            "It utilizes both half-cycles of the input",
            "Its output frequency is double the line frequency"
          ],
          correctIndex: 2
        },
        {
          text: "In a full wave rectifier, if the input frequency is 50 Hz, then output frequency will be",
          options: ["50 Hz", "75 Hz", "100 Hz", "200 Hz"],
          correctIndex: 2
        },
        {
          text: "To get a peak load voltage of 40 V out of a bridge rectifier, what is the approximate rms value of secondary voltage?",
          options: ["0 V", "14.4 V", "28.3 V", "56.6 V"],
          correctIndex: 2
        }
      ],
      "Unit 2: BJT and MOSFET": [
        {
          text: "Total emitter current in BJT is",
          options: [
            "IC + ICBO",
            "IC + IE",
            "IB + IC",
            "IB – IC"
          ],
          correctIndex: 2
        },
        {
          text: "Which is not a MOSFET terminal?",
          options: [
            "Gate",
            "Source",
            "Drain",
            "Base"
          ],
          correctIndex: 3
        },
        {
          text: "What is the collector current for a C–E configuration with a beta of 100 and a base current of 30 μA?",
          options: [
            "3 μA",
            "3 mA",
            "30 μA",
            "30 mA"
          ],
          correctIndex: 1
        },
        {
          text: "In a CE amplifier circuit, the output signal is generated with a phase shift of",
          options: [
            "180°",
            "90°",
            "0°",
            "270°"
          ],
          correctIndex: 0
        },
        {
          text: "For a BJT, which of the following is true?",
          options: [
            "IB ≅ IE",
            "IB ≅ IC",
            "IE ≅ IC",
            "IB ≅ α IE"
          ],
          correctIndex: 2
        },
        {
          text: "Which transistor element is used in CMOS logic?",
          options: [
            "MOSFET",
            "JFET",
            "BJT",
            "Diode"
          ],
          correctIndex: 0
        },
        {
          text: "A transistor has a beta of 200 and a base current of 40 μA in CE configuration. Then the collector current is",
          options: [
            "8 mA",
            "8 μA",
            "80 μA",
            "80 mA"
          ],
          correctIndex: 0
        },
        {
          text: "BJT is made to work as an amplifier when it is operated in ______ region",
          options: [
            "Inverted mode",
            "Saturation",
            "Cutoff",
            "Active"
          ],
          correctIndex: 3
        },
        {
          text: "A transistor has IB = 0.08 mA and IE = 9.60 mA. The value of β is",
          options: [
            "129",
            "119",
            "960",
            "100"
          ],
          correctIndex: 1
        },
        {
          text: "The enhancement type MOSFET works only with ________.",
          options: [
            "large negative gate voltage",
            "large positive source voltage",
            "large positive gate voltage",
            "large negative drain voltage"
          ],
          correctIndex: 2
        },
        {
          text: "A transistor has IB = 0.06 mA and IE = 9.00 mA. The value of β is",
          options: [
            "149",
            "129",
            "960",
            "100"
          ],
          correctIndex: 0
        },
        {
          text: "In CE configuration of BJT, output characteristics are plotted by taking",
          options: [
            "VCE versus IC for constant IE",
            "VCE versus IC for constant IB",
            "VCE versus IC for constant VCB",
            "VCE versus IE for constant IC"
          ],
          correctIndex: 1
        },
        {
          text: "A transistor has IB = 0.06 mA and IE = 9.00 mA. The value of α is",
          options: [
            "9.9",
            "0.99",
            "990",
            "100"
          ],
          correctIndex: 1
        },
        {
          text: "The MOSFET stands for",
          options: [
            "Metal oxide semiconductor FET",
            "Metal oxide surface FET",
            "Metal oxidized selenium FET",
            "Metal of surface FET"
          ],
          correctIndex: 0
        },
        {
          text: "When the transistor operates as an amplifier, it is operating in",
          options: [
            "The active region",
            "The cut-off region",
            "The Ohmic region",
            "The saturation region"
          ],
          correctIndex: 0
        },
        {
          text: "When BJT operates as a switch, it is operated in _____________",
          options: [
            "Cut-off and Saturation region",
            "Active and saturation region",
            "Active and cut-off region",
            "Saturation and active region"
          ],
          correctIndex: 0
        },
        {
          text: "The collector to base current gain β in terms of α is defined as",
          options: [
            "α / (1 − α)",
            "α / (1 + α)",
            "β / (1 + α)",
            "β / (1 + β)"
          ],
          correctIndex: 0
        },
        {
          text: "The collector to emitter current gain α in terms of β is defined as",
          options: [
            "β / (1 + β)",
            "β / (1 − β)",
            "α / (1 + β)",
            "α / (1 + α)"
          ],
          correctIndex: 0
        },
        {
          text: "The leakage current in a transistor is due to:",
          options: [
            "Zener effect",
            "Majority charge carriers",
            "Minority charge carriers",
            "Breakdown"
          ],
          correctIndex: 2
        },
        {
          text: "A bipolar junction transistor is a",
          options: [
            "Current controlled device",
            "Voltage controlled device",
            "Resistance controlled device",
            "Junction controlled device"
          ],
          correctIndex: 1
        },
        {
          text: "The value of α of a transistor is",
          options: [
            "More than 1",
            "Less than 1",
            "0.76 to 0.96",
            "1"
          ],
          correctIndex: 1
        },
        {
          text: "The value of β for a transistor is generally",
          options: [
            "1",
            "Less than 1",
            "Between 20 and 500",
            "Above 500"
          ],
          correctIndex: 2
        },
        {
          text: "The value of β for a silicon transistor given the collector current as 1 mA and base current as 10 μA is",
          options: [
            "100",
            "10",
            "0.1",
            "1000"
          ],
          correctIndex: 0
        },
        {
          text: "If an emitter current is changed by 4 mA, the collector current changes by 3.5 mA. The value of β will be:",
          options: [
            "8",
            "0.5",
            "3.5",
            "7"
          ],
          correctIndex: 3
        },
        {
          text: "A MOSFET is a",
          options: [
            "Current controlled device",
            "Voltage controlled device",
            "Resistance controlled device",
            "Junction controlled device"
          ],
          correctIndex: 1
        },
        {
          text: "A MOSFET has __________ terminals.",
          options: [
            "Two",
            "Five",
            "Three",
            "Four"
          ],
          correctIndex: 2
        },
        {
          text: "If the value of α is 0.9, then value of β is",
          options: [
            "9",
            "0.9",
            "900",
            "90"
          ],
          correctIndex: 0
        },
        {
          text: "The value of β for a silicon transistor given the collector current as 1 mA and base current as 25 μA is",
          options: [
            "40",
            "4",
            "400",
            "4000"
          ],
          correctIndex: 0
        },
        {
          text: "The value of α for a silicon transistor, given the collector current as 1 mA and base current as 25 μA is approximately",
          options: [
            "0.9176",
            "0.9756",
            "0.9276",
            "0.9376"
          ],
          correctIndex: 1
        },
        {
          text: "In CE-RC coupled amplifier, an emitter bypass capacitor is connected in parallel with emitter resistance RE to",
          options: [
            "Increase the noise in the circuit",
            "Provide a low reactance path to the amplified AC signal",
            "Support the resistance RE",
            "Block the DC voltage"
          ],
          correctIndex: 1
        },
        {
          text: "The number of depletion layers in a transistor is",
          options: [
            "Four",
            "Three",
            "One",
            "Two"
          ],
          correctIndex: 3
        },
        {
          text: "In a transistor, signal is transferred from a ________ region",
          options: [
            "High resistance to low resistance",
            "Low resistance to high resistance",
            "High resistance to high resistance",
            "Low resistance to low resistance"
          ],
          correctIndex: 1
        },
        {
          text: "With the E-MOSFET, when gate input voltage is zero, drain current is",
          options: [
            "At saturation",
            "Zero",
            "IDSS",
            "Widening the channel"
          ],
          correctIndex: 1
        },
        {
          text: "MOSFET has a thin layer of silicon dioxide, which acts as a:",
          options: [
            "Resistance",
            "Inductor",
            "Semiconductor",
            "Capacitor"
          ],
          correctIndex: 3
        },
        {
          text: "The base of a transistor is __________ doped",
          options: [
            "Heavily",
            "Moderately",
            "Lightly",
            "Not doped"
          ],
          correctIndex: 2
        },
        {
          text: "The emitter of a transistor is __________ doped",
          options: [
            "Heavily",
            "Moderately",
            "Lightly",
            "Not doped"
          ],
          correctIndex: 0
        }
      ],
      "Unit 3: Operational Amplifiers": [
        {
          text: "Which of the following electrical characteristics is not exhibited by an ideal op-amp?",
          options: [
            "Infinite output resistance",
            "Infinite bandwidth",
            "Infinite voltage gain",
            "Infinite slew rate"
          ],
          correctIndex: 0
        },
        {
          text: "An integrator circuit using an op-amp has __________ in its feedback path.",
          options: [
            "Resistor",
            "Inductor",
            "Capacitor",
            "Diode"
          ],
          correctIndex: 2
        },
        {
          text: "For an ideal op-amp with inputs V1 and V2, the output voltage is:",
          options: [
            "V0 = V1 − V2",
            "V0 = A (V1 − V2)",
            "V0 = A (V1 + V2)",
            "V0 = V1 × V2"
          ],
          correctIndex: 1
        },
        {
          text: "A differentiator circuit using an op-amp has __________ in its feedback path.",
          options: [
            "Capacitor",
            "Resistor",
            "Diode",
            "Inductor"
          ],
          correctIndex: 1
        },
        {
          text: "A sine wave of 0.5 V peak is applied to an inverting amplifier with R1 = 10 kΩ and Rf = 50 kΩ. The output voltage V0 is approximately:",
          options: [
            "5.2 V peak",
            "−10 V peak",
            "−2.5 V peak-to-peak",
            "−2.5 V peak"
          ],
          correctIndex: 3
        },
        {
          text: "The output voltage obtained for an ideal op-amp is by:",
          options: [
            "Amplifying individual input voltages",
            "Amplifying products of two input voltages",
            "Amplifying the difference between the two input voltages",
            "None of the mentioned"
          ],
          correctIndex: 2
        },
        {
          text: "The output voltage V0 of an op-amp integrator is given by",
          options: [
            "V0 = −(1 / (R1 C)) ∫₀^t Vi dt",
            "V0 = −(1 / C) ∫₀^t Vi dt",
            "V0 = −(1 / (R1 C)) ∫_{−∞}^t Vi dt",
            "V0 = −(1 / Rf) ∫₀^t Vi dt"
          ],
          correctIndex: 0
        },
        {
          text: "A sine wave of 0.5 V peak is applied to a non-inverting amplifier with R1 = 10 kΩ and Rf = 50 kΩ. The output voltage V0 is approximately:",
          options: [
            "3 V peak",
            "2.5 V peak",
            "−3 V peak",
            "3 V peak-to-peak"
          ],
          correctIndex: 0
        },
        {
          text: "Which is not an ideal characteristic of an op-amp?",
          options: [
            "Output impedance is zero",
            "Input resistance is zero",
            "Bandwidth is infinity",
            "Open-loop voltage gain is infinity"
          ],
          correctIndex: 1
        },
        {
          text: "The output voltage V0 of an op-amp differentiator is given by",
          options: [
            "V0 = − Rf C (dVi/dt)",
            "V0 = −(1/Rf) ∫ Vi dt",
            "V0 = −(1/C) ∫ Vi dt",
            "V0 = −(1/R1 C) (dVi/dt)"
          ],
          correctIndex: 0
        },
        {
          text: "A sine wave of 3.5 V peak is applied to a non-inverting amplifier with R1 = 20 kΩ and Rf = 80 kΩ. The output voltage V0 is approximately:",
          options: [
            "−12.5 V peak",
            "10 V peak",
            "17.5 V peak",
            "−5 V peak"
          ],
          correctIndex: 2
        },
        {
          text: "Which factor determines the output voltage of an op-amp (in saturation)?",
          options: [
            "Supply voltage only",
            "Both positive and negative saturation voltages",
            "Negative saturation voltage only",
            "Positive saturation voltage only"
          ],
          correctIndex: 1
        },
        {
          text: "The output voltage swing of a comparator for an applied input voltage depends on",
          options: [
            "Regulated power supply voltages",
            "Dual power supply voltages",
            "AC signals applied at the op-amp terminals",
            "DC signals applied at the op-amp terminals"
          ],
          correctIndex: 1
        },
        {
          text: "A sine wave of 2 V peak is applied to an inverting amplifier with R1 = 24 kΩ and Rf = 82 kΩ. The output voltage V0 is approximately:",
          options: [
            "−8.833 V peak",
            "−8.833 V peak-to-peak",
            "−6.833 V peak-to-peak",
            "−6.833 V peak"
          ],
          correctIndex: 3
        },
        {
          text: "An inverting amplifier using an op-amp with R1 and Rf as the resistors provides an output voltage:",
          options: [
            "V0 = −(1 + Rf/R1) Vi",
            "V0 = (1 + Rf/R1) Vi",
            "V0 = −(Rf/R1) Vi",
            "V0 = (Rf/R1) Vi"
          ],
          correctIndex: 2
        },
        {
          text: "A sine wave of 0.5 V peak is applied to a non-inverting amplifier with R1 = 6 kΩ and Rf = 24 kΩ. The output voltage V0 is approximately:",
          options: [
            "2.5 V peak",
            "−2.5 V peak",
            "10 V peak",
            "2.5 V peak-to-peak"
          ],
          correctIndex: 0
        },
        {
          text: "An ideal op-amp has which of the following characteristics?",
          options: [
            "Ri = ∞, A = ∞, Ro = 0",
            "Ri = 0, A = ∞, Ro = 0",
            "Ri = ∞, A = 0, Ro = ∞",
            "Ri = 0, A = ∞, Ro = ∞"
          ],
          correctIndex: 0
        },
        {
          text: "A non-inverting amplifier using op-amp with R1 and Rf as the resistors provides an output voltage:",
          options: [
            "V0 = −(Rf/R1) Vi",
            "V0 = −(1 + Rf/R1) Vi",
            "V0 = (Rf/R1) Vi",
            "V0 = (1 + Rf/R1) Vi"
          ],
          correctIndex: 3
        },
        {
          text: "A non-inverting op-amp has a gain of 91 with R1 = 1 kΩ. The resistor in the feedback path must have a value of approximately",
          options: [
            "91 kΩ",
            "90 kΩ",
            "99 kΩ",
            "92 kΩ"
          ],
          correctIndex: 1
        },
        {
          text: "For an op-amp having differential gain Ad and common mode gain Ac, CMRR is",
          options: [
            "Ad + Ac",
            "1 + (Ad/Ac)",
            "Ad/Ac",
            "Ac/Ad"
          ],
          correctIndex: 2
        },
        {
          text: "A non-inverting op-amp has a gain of 61 with R1 = 2 kΩ. The resistor in the feedback path must have a value of approximately",
          options: [
            "61 kΩ",
            "62 kΩ",
            "121 kΩ",
            "120 kΩ"
          ],
          correctIndex: 3
        },
        {
          text: "An op-amp comparator is a circuit whose output voltage switches between",
          options: [
            "+Vi, −Vi",
            "+Vo, −Vo",
            "+Vsat, −Vsat",
            "None"
          ],
          correctIndex: 2
        },
        {
          text: "An inverting op-amp has a gain of −61 with R1 = 1 kΩ. The resistor in the feedback path must have a value of approximately",
          options: [
            "61 kΩ",
            "60 kΩ",
            "59 kΩ",
            "62 kΩ"
          ],
          correctIndex: 0
        },
        {
          text: "With reference to the output voltage of an inverting op-amp summer V0 = −(Rf/R1)(V1 + V2 + V3), if Rf = R1 = R2 = R3 = R, then",
          options: [
            "V0 = −(V1 + V2 + V3)",
            "V0 = −V1 + V2 + V3",
            "V0 = V1 + V2 + V3",
            "None of these"
          ],
          correctIndex: 0
        }
      ],
      "Unit 4: Oscillators and Feedback": [
        {
          text: "In Colpitts’ oscillator, the components used in the feedback network are",
          options: [
            "2R and 2C",
            "2L and 1C",
            "2C and 1L",
            "2L and 2C"
          ],
          correctIndex: 2
        },
        {
          text: "With a resistance value of R = 1 kΩ in a feedback network of RC oscillator, frequency of oscillations generated is 5 kHz. The value of the capacitor C is approximately",
          options: [
            "0.0129 μF",
            "0.129 μF",
            "0.0219 μF",
            "129 μF"
          ],
          correctIndex: 0
        },
        {
          text: "Gain with negative feedback is given by Af = A / (1 + Aβ). The feedback factor is",
          options: [
            "A",
            "β",
            "Af",
            "Aβ"
          ],
          correctIndex: 1
        },
        {
          text: "An amplifier has an open loop voltage gain of 1000. If 10% negative voltage series feedback is used, then the closed loop gain is approximately",
          options: [
            "9.9",
            "99.9",
            "0.9",
            "990"
          ],
          correctIndex: 0
        },
        {
          text: "For an amplifier with negative feedback, the closed loop gain is given by",
          options: [
            "Af = A / (1 − Aβ)",
            "Af = A / (1 + Aβ)",
            "Af = A / (1 − β)",
            "Af = A / (1 − βA)"
          ],
          correctIndex: 1
        },
        {
          text: "In a practical oscillator circuit, to start oscillations, the loop gain Aβ must be",
          options: [
            "Not equal to 1",
            "Equal to 1",
            "Less than 1",
            "Greater than 1"
          ],
          correctIndex: 0
        },
        {
          text: "An amplifier has an open loop voltage gain of 2000. If 40% negative voltage series feedback is used, then the closed loop gain is approximately",
          options: [
            "249",
            "24.9",
            "0.249",
            "2.49"
          ],
          correctIndex: 3
        },
        {
          text: "In an amplifier, positive feedback leads to",
          options: [
            "Noise",
            "Amplification",
            "Breakdown",
            "Oscillations"
          ],
            correctIndex: 3
        },
        {
          text: "For an amplifier with positive feedback, the closed loop gain is given by",
          options: [
            "Af = A / (1 − β)",
            "Af = A / (1 + Aβ)",
            "Af = A / (1 − Aβ)",
            "Af = A / (1 − βA)"
          ],
          correctIndex: 2
        },
        {
          text: "What is an oscillator?",
          options: [
            "A rectifier",
            "A generator",
            "An amplifier with positive feedback",
            "An amplifier with negative feedback"
          ],
          correctIndex: 2
        },
        {
          text: "An amplifier has an open loop voltage gain of 100,000. If the negative voltage series feedback factor is 0.01, then the closed loop gain is approximately",
          options: [
            "9.9",
            "99.9",
            "0.9",
            "990"
          ],
          correctIndex: 1
        },
        {
          text: "In an amplifier with positive feedback, open loop gain A is 20 with feedback factor β = 0.04. The gain of the amplifier with feedback is",
          options: [
            "200",
            "50",
            "100",
            "infinity"
          ],
          correctIndex: 2
        },
        {
          text: "The feedback factor of Colpitts’ oscillator is given by",
          options: [
            "β = C₂ / C",
            "β = C₁ / C₂",
            "β = C / Cₗ",
            "β = C₂ / C₁"
          ],
          correctIndex: 3
        },
        {
          text: "Which of the following is not an advantage of a negative feedback amplifier?",
          options: [
            "Higher input impedance",
            "Unstable gain",
            "Reduction in noise",
            "Lower output impedance"
          ],
          correctIndex: 1
        },
        {
          text: "An amplifier has an open loop voltage gain of 10,000. If the negative voltage series feedback factor is 0.01, then the closed loop gain is approximately",
          options: [
            "990",
            "9.9",
            "0.99",
            "99"
          ],
          correctIndex: 3
        },
        {
          text: "The feedback factor of Hartley oscillator is given by (L1 and L2 are the split inductances):",
          options: [
            "β = L₂ / L",
            "β = L₂ / L₁",
            "β = L₁ / L₂",
            "β = L / L₁"
          ],
          correctIndex: 2
        },
        {
          text: "Which among the following parameters acts as an initiator for the operation of an oscillator in the absence of input signal?",
          options: [
            "Noise voltage",
            "Noise power",
            "Noise current",
            "Noise temperature"
          ],
          correctIndex: 0
        },
        {
          text: "In which type of oscillator circuit can a capacitor split representation be seen in the tank circuit?",
          options: [
            "Wien bridge",
            "RC phase shift",
            "Hartley",
            "Colpitts"
          ],
          correctIndex: 3
        },
        {
          text: "In an RC phase shift oscillator, the resistances in the feedback network are 4.7 kΩ and capacitor values are C = 0.47 μF. The frequency of oscillations is approximately",
          options: [
            "0.29413 Hz",
            "294.13 Hz",
            "2941.3 Hz",
            "29.413 Hz"
          ],
          correctIndex: 3
        },
        {
          text: "The tank circuit of a Colpitts’ oscillator has L = 5 mH with C1 = 22.22 nF and C2 = 2.22 nF. The feedback factor β is approximately",
          options: [
            "0.001",
            "0.1",
            "0.01",
            "1"
          ],
          correctIndex: 1
        },
        {
          text: "An RC network in an RC phase shift oscillator has C = 0.1 μF. The frequency of oscillations is 1 kHz. The value of R used in the feedback network is approximately",
          options: [
            "650 Ω",
            "500 Ω",
            "600 Ω",
            "1 kΩ"
          ],
          correctIndex: 0
        },
        {
          text: "RC phase shift oscillator is a",
          options: [
            "Low frequency oscillator",
            "High frequency oscillator",
            "Stable frequency oscillator",
            "Relaxation oscillator"
          ],
          correctIndex: 0
        },
        {
          text: "In a Hartley oscillator, if L1 = 5 mH, L2 = 10 mH and C = 0.01 μF, the value of the feedback factor β is approximately",
          options: [
            "50",
            "0.05",
            "0.5",
            "500"
          ],
          correctIndex: 2
        },
        {
          text: "The frequency of oscillations generated by RC phase shift oscillator is (in terms of R and C):",
          options: [
            "1 / (2π f)",
            "1 / (2π √6 R C)",
            "1 / (2π 6 R C)",
            "1 / (2π f R C)"
          ],
          correctIndex: 1
        },
        {
          text: "An RC network in an RC phase shift oscillator has C = 0.2 μF and frequency is 1 kHz. The value of R used in the feedback network is approximately",
          options: [
            "325 Ω",
            "500 Ω",
            "600 Ω",
            "1 kΩ"
          ],
          correctIndex: 0
        },
        {
          text: "Hartley oscillator is a",
          options: [
            "Relaxation oscillator",
            "Low frequency oscillator",
            "Stable frequency oscillator",
            "High frequency oscillator"
          ],
          correctIndex: 3
        },
        {
          text: "In a Hartley oscillator, if L1 = 7 mH, L2 = 10 mH and C = 0.01 μF, the value of the feedback factor β is approximately",
          options: [
            "0.7",
            "0.07",
            "70",
            "700"
          ],
          correctIndex: 0
        },
        {
          text: "The frequency of oscillations generated by Colpitts oscillator is",
          options: [
            "1 / (2π f)",
            "1 / (2π √(L Cₑ))",
            "1 / (2π C)",
            "1 / (2π √(L Ce))"
          ],
          correctIndex: 3
        },
        {
          text: "The components in the feedback network of Hartley and Colpitts oscillators are",
          options: [
            "L & C components",
            "R & C components",
            "Only L component",
            "None of these"
          ],
          correctIndex: 0
        },
        {
          text: "What is the angle of phase shift for each RC network in the Phase Shift Oscillator circuit?",
          options: [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          correctIndex: 2
        },
        {
          text: "In a Hartley oscillator, if L1 = 2 mH, L2 = 8 mH and C = 0.01 μF, the value of the feedback factor β is approximately",
          options: [
            "25",
            "0.025",
            "250",
            "0.25"
          ],
          correctIndex: 3
        },
        {
          text: "The frequency of oscillations generated by Hartley oscillator is",
          options: [
            "1 / (2π √(L C))",
            "1 / (2π fₑ)",
            "1 / (2π √(Le C))",
            "1 / (2π f)"
          ],
          correctIndex: 2
        },
        {
          text: "In an RC-Phase shift oscillator, the components used in the feedback network are",
          options: [
            "4R and 4C",
            "1R and 1C",
            "3R and 3C",
            "2R and 2L"
          ],
          correctIndex: 2
        },
        {
          text: "In a Colpitts oscillator, if C1 = 100 pF, C2 = 60 pF and L = 0.422 H, the value of the feedback factor β is approximately",
          options: [
            "0.6",
            "0.06",
            "60",
            "600"
          ],
          correctIndex: 0
        },
        {
          text: "The criterion that determines the mathematical condition to generate sustained oscillations is",
          options: [
            "Pinch-off criterion",
            "Shockley criterion",
            "Barkhausen criterion",
            "Threshold criterion"
          ],
          correctIndex: 2
        }
      ],
      "Unit 5: Communication & Embedded Systems": [
        {
          text: "Fiber optic cable is a __________ type of channel.",
          options: [
            "Wireless channel",
            "Free space channel",
            "Wired channel",
            "Radio channel"
          ],
          correctIndex: 2
        },
        {
          text: "The mechanism of using the same frequency band within a geographical area in a cellular or mobile communication system is referred to as",
          options: [
            "Frequency reuse",
            "Efficiency",
            "Reliability",
            "Bandwidth coordinator"
          ],
          correctIndex: 0
        },
        {
          text: "Which of the following is true about microprocessors?",
          options: [
            "It has interfacing circuits",
            "It has an internal memory",
            "It contains ALU, CU, and registers",
            "It uses Harvard architecture"
          ],
          correctIndex: 2
        },
        {
          text: "Best example for natural noise is",
          options: [
            "Rain",
            "Traffic noise",
            "Industrial noise",
            "Sound pollution"
          ],
          correctIndex: 0
        },
        {
          text: "The radio channel used for transmission of information from a base station to a mobile station is called",
          options: [
            "Reverse channel",
            "Control channel",
            "Mobile channel",
            "Forward channel"
          ],
          correctIndex: 3
        },
        {
          text: "Which one of the following offers external chips for memory and peripheral interface circuits?",
          options: [
            "Microcontroller",
            "Embedded system",
            "Peripheral System",
            "Microprocessor"
          ],
          correctIndex: 3
        },
        {
          text: "Best example for man-made noise is",
          options: [
            "Rain",
            "Radiations from the sun, stars",
            "Traffic noise",
            "Reflections from Earth"
          ],
          correctIndex: 2
        },
        {
          text: "In a cellular radio system, the __________ connects the cellular base stations and mobile stations to the Public Switched Telephone Networks.",
          options: [
            "Base station (BS)",
            "Mobile Switching Center (MSC)",
            "Forward Control Channel (FCC)",
            "Time Division Multiple Access (TDMA)"
          ],
          correctIndex: 1
        },
        {
          text: "The audio frequency range is",
          options: [
            "30 to 34 kHz",
            "300 Hz to 3.4 kHz",
            "20 Hz to 20 kHz",
            "10 to 10 kHz"
          ],
          correctIndex: 2
        },
        {
          text: "The speech signal frequency range is",
          options: [
            "20 Hz to 20 kHz",
            "30 to 34 kHz",
            "10 to 10 kHz",
            "300 Hz to 3.4 kHz"
          ],
          correctIndex: 3
        },
        {
          text: "Which of the following is true about an Embedded System?",
          options: [
            "An embedded system usually performs a specialized operation and does the same repeatedly",
            "It must have a memory, as its software usually embeds in ROM",
            "It must have connected peripherals to connect input and output devices",
            "All of them"
          ],
          correctIndex: 3
        },
        {
          text: "The following frequency band is utilized in cellular or mobile communication system:",
          options: [
            "Audible frequency",
            "Audio frequency",
            "Unlicensed frequency",
            "Radio frequency"
          ],
          correctIndex: 3
        },
        {
          text: "The loss in the transmission is minimum for the following type of wire:",
          options: [
            "Flat cable",
            "Copper wire",
            "Fiber optic cable",
            "Coaxial cable"
          ],
          correctIndex: 2
        },
        {
          text: "On which component is modulation performed?",
          options: [
            "Transmitter",
            "Signal",
            "Jammer",
            "None of the above"
          ],
          correctIndex: 0
        },
        {
          text: "What is modulated signal?",
          options: [
            "It is the product of modulating signal and carrier signal",
            "It is the product of modulating signal and information signal",
            "It is an input signal",
            "None of the above"
          ],
          correctIndex: 0
        },
        {
          text: "What is the primary difference between a microcontroller and a microprocessor?",
          options: [
            "Microcontrollers have higher clock speeds than microprocessors.",
            "Microcontrollers have built-in memory and peripherals.",
            "Microprocessors have built-in ADCs and DACs.",
            "Microprocessors are smaller in size."
          ],
          correctIndex: 1
        },
        {
          text: "Which channel type is used for initiating mobile calls from the mobile device to base station?",
          options: [
            "Forward Control Channel (FCC)",
            "Forward Voice Channel (FVC)",
            "Reverse Control Channel (RCC)",
            "Reverse Voice Channel (RVC)"
          ],
          correctIndex: 2
        },
        {
          text: "The soft handover of an active call to a new frequency band when a mobile user crosses a cell boundary is called",
          options: [
            "Handoff",
            "Channel efficiency",
            "Frequency reuse",
            "Frequency Division Duplexing"
          ],
          correctIndex: 0
        },
        {
          text: "What is the primary reason mobile communication is referred to as 'Cellular communication'?",
          options: [
            "It uses cells to store energy for mobile devices",
            "The communication signals are powered by biological cells",
            "It involves mobile devices and a base station within a small geographical area called a cell.",
            "It is designed to mimic the structure of biological cells."
          ],
          correctIndex: 2
        },
        {
          text: "In a cellular system, a 'cluster' is defined as:",
          options: [
            "A single base station serving multiple mobile users.",
            "A group of cells that collectively use the complete set of available frequencies.",
            "The central Mobile Switching Centre (MSC) and all its connected base stations.",
            "The transmission media connecting the transmitter and receiver."
          ],
          correctIndex: 1
        },
        {
          text: "What is the primary purpose of ROM in an embedded system?",
          options: [
            "To store the code or program that the user cannot change",
            "To store temporary data for processing",
            "To allow users to change the firmware frequently",
            "To interface with external communication modules"
          ],
          correctIndex: 0
        },
        {
          text: "What is the function of a Sensor in an embedded system?",
          options: [
            "To convert signals into physical action",
            "To display information to the user",
            "To process data without interacting with the real world",
            "To convert energy from one form to another for measurement or control, acting as an input device"
          ],
          correctIndex: 3
        },
        {
          text: "Which of the following is an example of an Actuator?",
          options: [
            "Electric motor",
            "Humidity sensor",
            "PIR (passive infrared) sensor",
            "Keypad"
          ],
          correctIndex: 0
        },
        {
          text: "The I/O subsystem of an embedded system facilitates interaction with the external world primarily through:",
          options: [
            "Only memory modules",
            "Only the core processor",
            "Communication interfaces like Wi-Fi or Bluetooth",
            "Sensors and actuators connected to the input and output ports"
          ],
          correctIndex: 3
        }
      ]
    }
  });

  // Expose back to window or module
  if (typeof window !== 'undefined') {
    window.quizData = qd;
  } else {
    if (typeof module !== 'undefined' && module.exports) module.exports = qd;
  }

  // Auto-register if the registrar API exists
  if (typeof registerSubject === 'function') {
    try { registerSubject('Basic Electronics', qd["Basic Electronics"]); } catch (e) {}
  }
})();
