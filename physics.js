// physics.js

// Ensure quizData exists and attach Physics subject
(function initPhysics() {
  var qd = (typeof window !== 'undefined' && window.quizData)
    ? window.quizData
    : (typeof quizData !== 'undefined' ? quizData : {});

  Object.assign(qd, {
    "Physics": {
      "Unit 1: Quantum Mechanics": [
        {
          text: "An experimental evidence for matter waves is",
          options: [
            "Photoelectric effect",
            "Compton effect",
            "Electron diffraction",
            "Interference of light"
          ],
          correctIndex: 2
        },
        {
          text: "A wave packet is used to represent",
          options: [
            "A light wave",
            "A stationary wave",
            "Matter wave",
            "A transverse wave"
          ],
          correctIndex: 2
        },
        {
          text: "Wave function associated with matter waves is a quantum mechanical equivalent of",
          options: [
            "Wavelength of the wave",
            "Frequency of the wave",
            "Amplitude of the wave",
            "Phase of the wave"
          ],
          correctIndex: 2
        },
        {
          text: "The concept of matter wave was suggested by",
          options: [
            "Heisenberg",
            "de Broglie",
            "Schrodinger",
            "Laplace"
          ],
          correctIndex: 1
        },
        {
          text: "The function representing matter waves must be",
          options: [
            "Complex",
            "Real",
            "Zero",
            "Infinity"
          ],
          correctIndex: 0
        },
        {
          text: "A particle with rest mass m₀ is moving with speed c. The de Broglie wavelength associated with it is",
          options: [
            "Zero",
            "Infinity",
            "hγ/c²",
            "m₀c"
          ],
          correctIndex: 0
        },
        {
          text: "The matter waves are",
          options: [
            "Light waves",
            "Sound waves",
            "Probabilistic waves",
            "Electromagnetic waves"
          ],
          correctIndex: 2
        },
        {
          text: "The wavelength of matter waves does not depend on",
          options: [
            "Charge",
            "Mass",
            "Velocity",
            "Momentum"
          ],
          correctIndex: 0
        },
        {
          text: "de Broglie wavelength of a body of mass m and kinetic energy E is",
          options: [
            "λ = h/p",
            "λ = h/meV",
            "λ = h/√(2mE)",
            "λ = h/2meV"
          ],
          correctIndex: 2
        },
        {
          text: "If the energy of a particle is reduced to one-fourth, the percentage increase in the de Broglie wavelength is",
          options: [
            "41%",
            "100%",
            "144%",
            "70%"
          ],
          correctIndex: 1
        },
        {
          text: "The kinetic energy of electron and proton is the same. The relation between their de Broglie wavelengths λₑ and λₚ is",
          options: [
            "λₑ = λₚ",
            "λₑ < λₚ",
            "λₑ > λₚ",
            "λₑ = 2λₚ"
          ],
          correctIndex: 2
        },
        {
          text: "The wave nature associated with electrons in motion was verified by",
          options: [
            "Photoelectric effect",
            "Compton effect",
            "Diffraction by crystals",
            "Incidence of electrons on metallic surface"
          ],
          correctIndex: 2
        },
        {
          text: "________ of a wave is the velocity with which the envelope of the wave propagates through space.",
          options: [
            "Elliptical velocity",
            "Phase velocity",
            "Group velocity",
            "Circular velocity"
          ],
          correctIndex: 2
        },
        {
          text: "The phase and group velocities do not depend on which of the following?",
          options: [
            "Frequency",
            "Wavelength",
            "Phase constant",
            "Attenuation constant"
          ],
          correctIndex: 3
        },
        {
          text: "de Broglie wavelength can be assigned to",
          options: [
            "Only electrons",
            "Any stationary body",
            "Any moving body",
            "Only subatomic particles"
          ],
          correctIndex: 2
        },
        {
          text: "Which one of the following objects, moving at the same speed, has the greatest de Broglie wavelength?",
          options: [
            "Neutron",
            "Electron",
            "Tennis ball",
            "Football"
          ],
          correctIndex: 1
        },
        {
          text: "The group velocity of matter waves associated with a moving particle is",
          options: [
            "The same as phase velocity",
            "Less than the particle velocity",
            "Equal to the particle velocity",
            "More than the particle velocity"
          ],
          correctIndex: 2
        },
        {
          text: "Uncertainty principle is applicable to",
          options: [
            "Macroscopic particles",
            "Microscopic particles",
            "Gases",
            "None of these"
          ],
          correctIndex: 1
        },
        {
          text: "According to Heisenberg uncertainty principle",
          options: [
            "E = mc²",
            "Δx·Δp ≥ h/4π",
            "λ = h/p",
            "Δx·Δp = h/6π"
          ],
          correctIndex: 1
        },
        {
          text: "If uncertainty in the position of an electron is zero, the uncertainty in its momentum would be",
          options: [
            "Zero",
            "< h/2λ",
            "> h/2λ",
            "Infinite"
          ],
          correctIndex: 3
        },
        {
          text: "How is the state of a quantum mechanical system completely specified?",
          options: [
            "By its position in space",
            "By its time",
            "By its wavefunction",
            "By its angular momentum"
          ],
          correctIndex: 2
        },
        {
          text: "The wave function is an acceptable wave function if it is",
          options: [
            "Finite everywhere",
            "Continuous everywhere",
            "Single valued everywhere",
            "Having all these properties"
          ],
          correctIndex: 3
        },
        {
          text: "Schrodinger’s time independent equation is applicable for the particles with",
          options: [
            "Constant energy",
            "Variable energy",
            "Only constant potential energy",
            "All of these"
          ],
          correctIndex: 0
        },
        {
          text: "The steady-state form of Schrodinger wave equation is",
          options: [
            "Linear",
            "Quadratic",
            "Cubic",
            "Nonlinear"
          ],
          correctIndex: 0
        },
        {
          text: "The values of energy for which Schrodinger’s steady state equation can be solved is called",
          options: [
            "Eigen vectors",
            "Eigen values",
            "Eigen functions",
            "Operators"
          ],
          correctIndex: 1
        },
        {
          text: "The Schrodinger wave equation is a",
          options: [
            "Linear differential equation",
            "Non-linear differential equation",
            "Second-order equation",
            "First-order equation"
          ],
          correctIndex: 0
        },
        {
          text: "For a quantum wave particle, E =",
          options: [
            "ℏk",
            "ℏω",
            "ℏω/2",
            "ℏk/2"
          ],
          correctIndex: 1
        },
        {
          text: "Which of the following can be a wave function?",
          options: [
            "tan x",
            "sin x",
            "cot x",
            "sec x"
          ],
          correctIndex: 1
        },
        {
          text: "Which of the following is not a characteristic of wave function?",
          options: [
            "Continuous",
            "Single valued",
            "Normalizable",
            "Multi valued"
          ],
          correctIndex: 3
        },
        {
          text: "The total probability of finding the particle in space must be",
          options: [
            "zero",
            "unity",
            "infinity",
            "double"
          ],
          correctIndex: 1
        },
        {
          text: "The normalized wave function must have ______ norm",
          options: [
            "Unit",
            "zero",
            "finite",
            "infinite"
          ],
          correctIndex: 0
        },
        {
          text: "The square of the magnitude of the wave function is called",
          options: [
            "energy density",
            "probability density",
            "normalization",
            "volume density"
          ],
          correctIndex: 1
        },
        {
          text: "According to the wave function, ψ and its first partial derivative should be _______ functions for all values of x.",
          options: [
            "Zero",
            "Continuous",
            "Infinity",
            "Discontinuous"
          ],
          correctIndex: 1
        },
        {
          text: "For E > 0, the particle has a ______ kinetic energy",
          options: [
            "Zero",
            "Positive",
            "Negative",
            "Infinity"
          ],
          correctIndex: 1
        },
        {
          text: "According to Max Born’s interpretation, |ψ|² represents",
          options: [
            "energy density",
            "particle density",
            "probability density",
            "charge density"
          ],
          correctIndex: 2
        },
        {
          text: "In a one-dimensional infinite potential well, energy of the particle En =",
          options: [
            "n²h²/8mL²",
            "n²ħ²/8mL²",
            "n²h²/2mL²",
            "n²h²/4mL²"
          ],
          correctIndex: 0
        },
        {
          text: "The energy corresponding to the lowest permitted energy level for a particle in an infinite potential well is called",
          options: [
            "Excited energy",
            "Zero-point energy",
            "Metastable state energy",
            "None of these"
          ],
          correctIndex: 1
        },
        {
          text: "For a particle in the ground state in an one-dimensional potential well of width L and of infinite height, the probability of finding it will be maximum at a distance of",
          options: [
            "L/2 from the wall",
            "L/4 from the wall",
            "3L/4 from the wall",
            "L=0 from the wall"
          ],
          correctIndex: 0
        },
        {
          text: "According to the particle in a box, the wave function of the particle lies in which region?",
          options: [
            "x > 0",
            "x < 0",
            "0 < x < L",
            "x > L"
          ],
          correctIndex: 2
        },
        {
          text: "The Energy of the particle is proportional to __________",
          options: [
            "n",
            "n-1",
            "n²",
            "n-2"
          ],
          correctIndex: 2
        },
        {
          text: "The wave function with one node in a one-dimensional infinite potential well corresponds to",
          options: [
            "Ground state",
            "First excited state",
            "Second excited state",
            "Third excited state"
          ],
          correctIndex: 1
        },
        {
          text: "The de Broglie wavelength associated with a particle of mass 6.62 x 10⁻²⁹ kg travelling with a velocity 10⁵ ms⁻¹ is equal to",
          options: [
            "10 nm",
            "1 nm",
            "0.1 nm",
            "0.01 nm"
          ],
          correctIndex: 2
        },
        {
          text: "What is the energy of electron in terms of its ground state energy (E1) when it jumps from n = 1 to n = 4 is",
          options: [
            "E1/9",
            "E1/16",
            "16 E1",
            "4 E1"
          ],
          correctIndex: 2
        },
        {
          text: "An electron is trapped in a one dimensional potential well of width 1 Å. How much energy must be supplied to excite the electron from the ground state to second excited state?",
          options: [
            "4.82 x 10⁻¹⁷ J",
            "4.82 x 10⁻¹⁸ J",
            "1.81 x 10⁻¹⁷ J",
            "1.81 x 10⁻¹⁸ J"
          ],
          correctIndex: 0
        },
        {
          text: "Calculate the deBroglie wavelength associated with an electron with a kinetic energy of 2000 eV is",
          options: [
            "2.74 Å",
            "0.274 Å",
            "27.4 Å",
            "0.0274 Å"
          ],
          correctIndex: 1
        },
        {
          text: "The product of phase velocity and group velocity is equal to",
          options: [
            "particle velocity",
            "velocity of light",
            "square of velocity of light",
            "square root of velocity of light"
          ],
          correctIndex: 2
        },
        {
          text: "Calculate the Zero-point energy for a particle in an infinite potential well for an electron confined to a 1 nm atom.",
          options: [
            "3.9 x10⁻²⁹ J",
            "4.9 X 10⁻²⁹ J",
            "5.9 X 10⁻²⁹ J",
            "6.9 X 10⁻²⁹ J"
          ],
          correctIndex: 2
        },
        {
          text: "The de Broglie wavelength associated with an electron moving with a speed of 10⁵ m/s",
          options: [
            "0.727 Å",
            "7.27 Å",
            "72.7 Å",
            "727 Å"
          ],
          correctIndex: 2
        },
        {
          text: "The ratio of energy of a photon with that of a neutron when both are associated with wavelength of 1 Å, given that the mass of neutron is 1.678 x 10⁻²⁷ Kg.",
          options: [
            "2.5 x10⁵",
            "1.5 X 10⁵",
            "0.5 X 10⁵",
            "3.5 X 10⁵"
          ],
          correctIndex: 1
        },
        {
          text: "An electron is confirmed to move between two rigid walls separated by 20 Å. The de Broglie wavelength representing the groun state energy of an electron is (assume the potential to be zero)",
          options: [
            "0.6 Å",
            "0.2 Å",
            "0.4 Å",
            "0.8 Å"
          ],
          correctIndex: 2
        }
      ],
      "Unit 2: Quantum Computing": [
        {
          text: "In quantum computing, what is the basic unit of information?",
          options: ["Giga", "Qubit", "Bit", "Byte"],
          correctIndex: 1
        },
        {
          text: "What do we call the pieces of information in a quantum computer?",
          options: ["Bits", "Qubits", "Bytes", "Qubytes"],
          correctIndex: 1
        },
        {
          text: "When the information is between 0 and 1 in a quantum computer, what do we call this?",
          options: ["Superposition", "Same position", "Ordinary position", "Different position"],
          correctIndex: 0
        },
        {
          text: "Quantum computers are very good at dealing with",
          options: ["Clarity", "Certainty", "Uncertainty", "Reliability"],
          correctIndex: 2
        },
        {
          text: "What does 'entanglement' mean?",
          options: [
            "Two particles are different",
            "Two particles are separate",
            "Two particles are independent",
            "Two particles are connected"
          ],
          correctIndex: 3
        },
        {
          text: "What can quantum computers be used for?",
          options: [
            "Artificial Intelligence",
            "Simulations/Predictions",
            "Both (A) and (B)",
            "Google Docs and Slides"
          ],
          correctIndex: 2
        },
        {
          text: "When the two members of a Qubit pair exist in a single quantum state, it is known as",
          options: ["Entanglement", "Engagement", "Superposition", "None of the Above"],
          correctIndex: 0
        },
        {
          text: "Quantum computing is relatively _________ than classical computing.",
          options: ["Faster", "Slower", "Average", "None of the Above"],
          correctIndex: 0
        },
        {
          text: "Qubit stands for ________",
          options: ["Quality bits", "Question bit", "Quantum gates", "Quantum bit"],
          correctIndex: 3
        },
        {
          text: "A qubit is a _______ quantum-mechanical system.",
          options: ["One-state", "Two-state", "Three-state", "Four-state"],
          correctIndex: 1
        },
        {
          text: "The set of vectors and set of scalars which follow the same properties followed by linear vector space is said be",
          options: ["Basis", "Dimension", "Hilbert space", "Orthogonal state"],
          correctIndex: 2
        },
        {
          text: "The process of replacing ith row of the matrix by ith column, is said to be",
          options: ["Conjugate Matrix", "Transpose Matrix", "Identity Matrix", "Hermitian Operator"],
          correctIndex: 1
        },
        {
          text: "The operators change with time while the state vectors remain constant, then it is said to be",
          options: [
            "Schrodinger representation",
            "Heisenberg representation",
            "Interaction representation",
            "None of the above"
          ],
          correctIndex: 1
        },
        {
          text: "The operators remain constant while the state vectors change with time, then it is said to be",
          options: [
            "Schrodinger representation",
            "Heisenberg representation",
            "Interaction representation",
            "None of the above"
          ],
          correctIndex: 0
        },
        {
          text: "The diagonal entries of a Hermitian matrix must be",
          options: [
            "Complex conjugate",
            "Real",
            "Both real & Complex conjugate",
            "None of the above"
          ],
          correctIndex: 1
        },
        {
          text: "The eigen value of a Hermitian matrix must be",
          options: [
            "Complex conjugate",
            "Real",
            "Both real & Complex conjugate",
            "None of the above"
          ],
          correctIndex: 1
        },
        {
          text: "What is a vector space?",
          options: [
            "A space consisting of only vectors",
            "A set of vectors closed under addition and scalar multiplication",
            "A space that includes both vectors and scalars",
            "A space that is always three-dimensional"
          ],
          correctIndex: 1
        },
        {
          text: "What is the dimension of a vector space?",
          options: [
            "The size or length of a vector",
            "The number of vectors in the space",
            "The maximum number of linearly independent vectors that span the space",
            "The number of elements in the basis of the space"
          ],
          correctIndex: 2
        },
        {
          text: "What is the span of a set of vectors?",
          options: [
            "The set of all vectors in the vector space",
            "The linear combination of all vectors in the set",
            "The set of vectors that are orthogonal to the given set",
            "The set of vectors that are linearly independent"
          ],
          correctIndex: 1
        },
        {
          text: "In a finite-dimensional vector space, what is the maximum number of linearly independent vectors a basis can have?",
          options: [
            "0",
            "1",
            "The dimension of the vector space",
            "The size of the vector space"
          ],
          correctIndex: 2
        },
        {
          text: "Moore's Law originally stated that the number of transistors on a microchip would double approximately every:",
          options: ["6 months", "1 year", "2 years", "5 years"],
          correctIndex: 2
        },
        {
          text: "What fundamental technology trend enabled the continuation of Moore's Law for several decades?",
          options: [
            "Miniaturization of transistors",
            "Increase in clock speed",
            "Expansion of data storage",
            "Advancements in software algorithms"
          ],
          correctIndex: 0
        },
        {
          text: "Which component of a computer is primarily affected by Moore's Law?",
          options: [
            "Central Processing Unit (CPU)",
            "Random Access Memory (RAM)",
            "Hard Disk Drive (HDD)",
            "Graphics Processing Unit (GPU)"
          ],
          correctIndex: 0
        },
        {
          text: "What is one of the main factors contributing to the end of Moore's Law?",
          options: [
            "Decreased demand for computing power",
            "Physical limits of miniaturization",
            "Lack of innovation in software development",
            "Increasing costs of semiconductor production"
          ],
          correctIndex: 1
        },
        {
          text: "Which alternative approaches are being explored to extend computing power beyond the limits of Moore's Law?",
          options: [
            "Quantum computing",
            "Neuromorphic computing",
            "Optical computing",
            "All of these"
          ],
          correctIndex: 3
        },
        {
          text: "What is the fundamental unit of information in quantum computing?",
          options: ["Bit", "Byte", "Qubit", "Quantum gate"],
          correctIndex: 2
        },
        {
          text: "In classical computing, information is processed using bits. What are the two possible values for a classical bit?",
          options: ["0 and 1", "True and False", "-1 and 1", "Red and Blue"],
          correctIndex: 0
        },
        {
          text: "Which property allows qubits to represent multiple states simultaneously in quantum computing?",
          options: ["Superposition", "Entanglement", "Interference", "Tunnelling"],
          correctIndex: 0
        },
        {
          text: "In a CNOT gate, you create a(n) _____ with two qubits.",
          options: ["Superposition", "Entangled state", "Bloch", "Hadamard"],
          correctIndex: 1
        },
        {
          text: "In a quantum circuit, this gate is used to place a qubit into superposition.",
          options: ["Hadamard", "X-gate", "Bloch", "CNOT"],
          correctIndex: 0
        },
        {
          text: "This quantum gate acts on a single qubit and would most be similar to a traditional NOT gate.",
          options: ["CNOT", "X-Gate", "Hadamard", "Deutsch Gate"],
          correctIndex: 1
        },
        {
          text: "What is superposition in quantum computing?",
          options: [
            "A state in which a qubit can exist in multiple states simultaneously",
            "The process of entangling multiple qubits",
            "A gate used to manipulate qubits",
            "A unit of quantum information"
          ],
          correctIndex: 0
        },
        {
          text: "What happens to the entanglement of qubits when they are physically separated",
          options: [
            "The entanglement is lost",
            "The entanglement remains intact",
            "The entanglement becomes stronger",
            "The entanglement becomes weaker"
          ],
          correctIndex: 1
        },
        {
          text: "What is the purpose of quantum gates in quantum computing?",
          options: [
            "To entangle qubits",
            "To collapse superposition",
            "To manipulate qubits",
            "To measure qubit states"
          ],
          correctIndex: 2
        }
      ],
      "Unit 3: Conductors and Superconductors": [
        {
          text: "Which of the following statement correctly describes a metal based on band theory?",
          options: [
            "A material possessing moderate band gap",
            "A material possessing a large band gap",
            "A material with zero band gap",
            "A material with infinite band gap"
          ],
          correctIndex: 2
        },
        {
          text: "Solids with high value of conductivity are called:",
          options: [
            "Conductors",
            "Non-metal",
            "Insulator",
            "Semi-conductor"
          ],
          correctIndex: 0
        },
        {
          text: "The electrons in valence band are",
          options: [
            "Freely moving inside the solid",
            "Tightly bonded inside the solid",
            "Lies in the innermost orbits and cannot be made free",
            "Lies in the outermost orbits and cannot be made free"
          ],
          correctIndex: 0
        },
        {
          text: "Fermi level for a metal is",
          options: [
            "Highest energy level occupied by electrons at 0°C",
            "Average value of all available energy levels",
            "Highest energy level occupied by electrons at 0 K",
            "Addition of energy of all available electron energy levels"
          ],
          correctIndex: 2
        },
        {
          text: "The free electron theory could not explain which of the following properties?",
          options: [
            "Electrical and thermal conductivity of metals",
            "Thermal and thermal conductivity of non-metal",
            "Ferromagnetism",
            "Ohm’s law"
          ],
          correctIndex: 2
        },
        {
          text: "Free electron theory is based on which of the following assumption?",
          options: [
            "Electrons are freely moving only at the center of the solid",
            "Electrons are freely moving through the entire solid",
            "Electrons can move freely only at the top surface of the solid",
            "Electrons can move freely only at the bottom surface of the solid"
          ],
          correctIndex: 1
        },
        {
          text: "Which statement is correct regarding the influence of temperature on conductivity?",
          options: [
            "Conductivity of metals increases with increase in temperature",
            "Conductivity of metals decreases with increase in temperature",
            "Conductivity of metals does not change with temperature",
            "Conductivity of metals increases with square root of temperature"
          ],
          correctIndex: 1
        },
        {
          text: "Mobility of electron is",
          options: [
            "Average flow of electrons per unit electric field.",
            "Average applied field per unit drift velocity.",
            "Average drift velocity per unit electric field.",
            "Reciprocal of conductivity per unit charge."
          ],
          correctIndex: 2
        },
        {
          text: "Flow of electrons is affected by the following",
          options: [
            "Thermal vibrations",
            "Impurity atoms",
            "Crystal defects",
            "All the answers"
          ],
          correctIndex: 3
        },
        {
          text: "Using the classical theory it can be shown that the electrical resistivity ρ and temperature T is given by",
          options: [
            "ρ ∝ T",
            "ρ ∝ T⁻¹",
            "ρ ∝ T¹/³",
            "ρ ∝ T²"
          ],
          correctIndex: 0
        },
        {
          text: "Matthiessens rule may be written as ρTot = ρphon + ρ₀. Which of the following statement(s) is/are true?",
          options: [
            "ρphon is temperature dependent",
            "ρ₀ is temperature dependent",
            "ρ₀ is due to lattice vibrations",
            "None of these"
          ],
          correctIndex: 0
        },
        {
          text: "Relaxation time may be defined as the time taken by an electron to reduce its velocity to _____ its initial value.",
          options: [
            "1/2",
            "1/3",
            "1/e",
            "1/2e"
          ],
          correctIndex: 2
        },
        {
          text: "The average distance travelled by a free electron between two successive collisions with lattice ions of a metallic crystal is called",
          options: [
            "Mean free path",
            "Free path",
            "Drift velocity",
            "Mean collision time"
          ],
          correctIndex: 0
        },
        {
          text: "According to Pauli’s exclusion principle, an energy level can accommodate not more than _____ electrons.",
          options: [
            "one",
            "two",
            "three",
            "four"
          ],
          correctIndex: 1
        },
        {
          text: "The relationship between current density J and electric field E is",
          options: [
            "J = σE",
            "J = σ / E",
            "J = σ / (2E)",
            "J = (1/σ) E"
          ],
          correctIndex: 0
        },
        {
          text: "The drift velocity is described as",
          options: [
            "v_d = eEτ/m",
            "v_d = Eτ/m",
            "v_d = eτ/m",
            "v_d = eE/n"
          ],
          correctIndex: 0
        },
        {
          text: "Which one is correct about classical free electron theory:",
          options: [
            "Free electrons are responsible for the electrical conductivity of metal",
            "Semiconductors can be explained properly",
            "Insulators can be explained properly",
            "Ohm’s law cannot be derived using free electron theory"
          ],
          correctIndex: 0
        },
        {
          text: "According to free electron theory",
          options: [
            "Valence electrons are tightly bound with the atom",
            "Valence electrons are weakly bound with the atom",
            "There are no free electrons in metal",
            "Some valence electrons are weakly bound and some tightly bound"
          ],
          correctIndex: 1
        },
        {
          text: "Which one is correct about free electrons",
          options: [
            "valence electrons of metals move throughout the material.",
            "valence electrons of metals do not move throughout the material",
            "bound electrons of metals move throughout the material",
            "All electrons of metals move throughout the material"
          ],
          correctIndex: 0
        },
        {
          text: "Electrons in conductors will follow",
          options: [
            "Bose-Einstein distribution",
            "Fermi-Dirac distribution",
            "Maxwell-Boltzmann distribution",
            "Boltzmann distribution"
          ],
          correctIndex: 1
        },
        {
          text: "Which one will be correct about resistance in metal",
          options: [
            "Scattering of free electrons in a metal by structural defects and lattice vibrations",
            "Scattering of free electrons in a metal only by lattice vibrations",
            "Scattering of free electrons in a metal only by structural defects",
            "Scattering of free electrons in a metal by bound electrons"
          ],
          correctIndex: 2
        },
        {
          text: "Which of the following about Fermi-Dirac distribution is false?",
          options: [
            "When E = EF, the probability of finding an electron with energy equal to the Fermi energy in a metal is ½ at any temperature.",
            "At T = 0 K all the energy level up to EF are occupied and all the energy levels above EF are empty.",
            "When T > 0 K, some levels above EF are partially filled while some levels below EF are partially empty.",
            "When T = 0 K, some levels above EF are partially filled while some levels below EF are empty."
          ],
          correctIndex: 3
        },
        {
          text: "Examples of Fermions are",
          options: [
            "Electrons",
            "Photons",
            "Phonons",
            "Atoms"
          ],
          correctIndex: 0
        },
        {
          text: "Which of the following assumptions of the quantum free electron theory is/are true.\n(a) The energy values of the conduction electrons are quantized.\n(b) The distribution of electrons in the various allowed energy levels occur as per Pauli’s exclusion principle.\n(c) The electrons travel with a constant potential inside the metal but confined within its boundaries.",
          options: [
            "(a) only",
            "(b) only",
            "(a) and (c)",
            "(a), (b) and (c)"
          ],
          correctIndex: 3
        },
        {
          text: "According to quantum theory, the electrical conductivity of a metal is due to those free electrons which are",
          options: [
            "very close to Fermi level",
            "much below the Fermi level",
            "valence band",
            "None of the answers"
          ],
          correctIndex: 0
        },
        {
          text: "The mobility of electrons in copper is 3.5 × 10–3 m2V–1s–1. For an applied electric field strength of 2 V/m, the drift velocity of the free electrons is",
          options: [
            "0.7 × 10-3 m/s",
            "7 × 10-3 m/s",
            "1.75 × 10-3 m/s",
            "7 × 103 m/s"
          ],
          correctIndex: 1
        },
        {
          text: "The mobility of electrons in copper 3×103 m2V–1s–1 assuming e =1.6×10–19 C and me = 9.1×10–31 kg. the mean collision time is",
          options: [
            "16.2 × 10-13 s",
            "1.7 × 10-15 s",
            "1.8 × 10-15 s",
            "17.06 × 10-15 s"
          ],
          correctIndex: 3
        },
        {
          text: "Using Fermi distribution function, the value of f(E) for (E – EF) = 0.01 eV at 200 K is",
          options: [
            "0.36",
            "0.64",
            "0.45",
            "0.55"
          ],
          correctIndex: 0
        },
        {
          text: "A uniform silver wire has a resistivity of 1.54×10–8 m at room temperature. For an electric field along the wire of 1 Vcm–1, calculate (a) average drift velocity of electron assuming that there is 5.8 × 1028 conduction electrons /m3 and also (b) calculate the mobility.",
          options: [
            "(a) 0.3 m/s and (b) 10.0 × 10-3 m2/Vs",
            "(a) 0.7 cm/s and (b) 70.0 × 10-3 m2/Vs",
            "(a) 3.0 m/s and (b) 17 × 10-3 m2/Vs",
            "(a) 0.7 m/s and (b) 7.0 × 10-3 m2/Vs"
          ],
          correctIndex: 3
        },
        {
          text: "The magnetic lines of force cannot penetrate the body of a superconductor, a phenomenon is known as",
          options: [
            "Isotopic effect",
            "BCS theory",
            "Meissner effect",
            "Silsbee’s effect"
          ],
          correctIndex: 2
        },
        {
          text: "The minimum amount of current passed through the body of superconductor in order to destroy the superconductivity is called",
          options: [
            "Induced current",
            "Critical current",
            "Eddy current",
            "Hall current"
          ],
          correctIndex: 1
        },
        {
          text: "In superconductivity the conductivity of a material becomes",
          options: [
            "Zero",
            "Finite",
            "Infinite",
            "None of the answers"
          ],
          correctIndex: 2
        },
        {
          text: "In superconductors the temperature at which conductivity of a material becomes infinite is called",
          options: [
            "Critical temperature",
            "Absolute temperature",
            "Mean temperature",
            "Crystallization temperature"
          ],
          correctIndex: 0
        },
        {
          text: "The superconducting state is perfectly _____ in nature.",
          options: [
            "Diamagnetic",
            "Paramagnetic",
            "Ferromagnetic",
            "Ferrimagnetic"
          ],
          correctIndex: 0
        },
        {
          text: "The binding energy of a Cooper pair is of the order of _______",
          options: [
            "10-3 eV",
            "103 eV",
            "10-3 J",
            "103 J"
          ],
          correctIndex: 0
        },
        {
          text: "The electron pairs in a superconductor are ______",
          options: [
            "Bosons",
            "Leptons",
            "Hydrons",
            "Fermions"
          ],
          correctIndex: 0
        },
        {
          text: "The transition to normal state occurs abruptly at a critical magnetic field (Hc) in",
          options: [
            "Type-I superconductor",
            "Type-II superconductor",
            "Both Type-I and Type-II superconductors",
            "Conductors"
          ],
          correctIndex: 0
        },
        {
          text: "The magnetic susceptibility (χ) in superconductor is",
          options: [
            "positive",
            "zero",
            "negative",
            "infinity"
          ],
          correctIndex: 2
        },
        {
          text: "Hard superconductors are also called as __________",
          options: [
            "Type-I superconductor",
            "Type-II superconductor",
            "Both Type-I and Type-II superconductors",
            "Conductors"
          ],
          correctIndex: 1
        },
        {
          text: "Silsbee’s rule gives the relation between",
          options: [
            "current and critical temperature",
            "current and critical magnetic field",
            "current and isotopic mass",
            "critical current and critical magnetic field"
          ],
          correctIndex: 3
        }
      ],
      "Unit 4: Semiconductors": [
        {
          text: "Solids with high value of conductivity are called",
          options: [
            "Conductors",
            "Non-metal",
            "Insulator",
            "Semi-conductor"
          ],
          correctIndex: 0
        },
        {
          text: "Fermi level for a metal is",
          options: [
            "Highest energy level occupied by electrons at 0°C",
            "Average value of all available energy levels",
            "Highest energy level occupied by electrons at 0 K",
            "Addition of energy of all available electron energy levels"
          ],
          correctIndex: 2
        },
        {
          text: "The relationship between current density J and electric field E is",
          options: [
            "J = σE",
            "J = σ / E",
            "J = σ/2E",
            "J = (1/σ) E"
          ],
          correctIndex: 0
        },
        {
          text: "Intrinsic semiconductors are those",
          options: [
            "Which are made of semiconductor material in its purest form",
            "Which have zero energy gap",
            "Which have more electrons than holes",
            "Which are available locally"
          ],
          correctIndex: 0
        },
        {
          text: "A pure semiconductor behaves like an insulator at 0 K because",
          options: [
            "There is no recombination of electrons with holes",
            "Drift velocity of free electrons is very small",
            "Free electrons are not available for current conduction",
            "Energy possessed by electrons at that low temperature is almost zero"
          ],
          correctIndex: 2
        },
        {
          text: "Which of the following about Fermi-Dirac distribution is false?",
          options: [
            "When E = EF, the probability of finding an electron with energy equal to the Fermi energy in a metal is ½ at all temperatures.",
            "At T = 0 K all the energy level up to EF are occupied and all the energy levels above EF are empty.",
            "When T > 0 K, some levels above EF are partially filled while some levels below EF are partially empty.",
            "When T = 0 K, some levels above EF are partially filled while some levels below EF are empty."
          ],
          correctIndex: 3
        },
        {
          text: "Examples of Fermions are",
          options: [
            "Electrons",
            "Photons",
            "Phonons",
            "Atoms"
          ],
          correctIndex: 0
        },
        {
          text: "Using Fermi distribution function, the value of f(E) for (E – EF) = 0.01 eV at 200 K is",
          options: [
            "0.36",
            "0.64",
            "0.45",
            "0.55"
          ],
          correctIndex: 0
        },
        {
          text: "An elemental semiconductor is formed by ______ bonds.",
          options: [
            "Covalent",
            "Electrovalent",
            "Co-ordinate",
            "Ionic"
          ],
          correctIndex: 0
        },
        {
          text: "A semiconductor has ______ temperature coefficient of resistance.",
          options: [
            "Positive",
            "Zero",
            "Negative",
            "Infinite"
          ],
          correctIndex: 2
        },
        {
          text: "The most commonly used semiconductor is",
          options: [
            "Gallium",
            "Silicon",
            "Carbon",
            "Arsenide"
          ],
          correctIndex: 1
        },
        {
          text: "A semiconductor has generally ______ valence electrons.",
          options: [
            "2",
            "3",
            "6",
            "4"
          ],
          correctIndex: 3
        },
        {
          text: "When a pentavalent impurity is added to a pure semiconductor, it becomes",
          options: [
            "An insulator",
            "An intrinsic semiconductor",
            "p-type semiconductor",
            "n-type semiconductor"
          ],
          correctIndex: 3
        },
        {
          text: "Addition of pentavalent impurity to a semiconductor creates",
          options: [
            "Donor electrons",
            "Holes",
            "Valence electrons",
            "Bound electrons"
          ],
          correctIndex: 0
        },
        {
          text: "A pentavalent impurity has ______ valence electrons.",
          options: [
            "3",
            "5",
            "4",
            "6"
          ],
          correctIndex: 1
        },
        {
          text: "An n-type semiconductor is",
          options: [
            "Positively charged",
            "Negatively charged",
            "Electrically neutral",
            "None of the answers"
          ],
          correctIndex: 2
        },
        {
          text: "A trivalent impurity has _____ valence electrons.",
          options: [
            "4",
            "5",
            "6",
            "3"
          ],
          correctIndex: 3
        },
        {
          text: "Addition of trivalent impurity to a semiconductor creates",
          options: [
            "Holes",
            "Donor electrons",
            "Valence electrons",
            "Bound electrons"
          ],
          correctIndex: 0
        },
        {
          text: "A hole in a semiconductor is defined as",
          options: [
            "A free electron",
            "Electron vacancy",
            "A free proton",
            "A free neutron"
          ],
          correctIndex: 1
        },
        {
          text: "As the doping to a pure semiconductor increases, the bulk resistance of the semiconductor",
          options: [
            "Remains the same",
            "Increases",
            "Decreases",
            "Becomes zero"
          ],
          correctIndex: 2
        },
        {
          text: "In an intrinsic semiconductor, current conduction is due to",
          options: [
            "Only holes",
            "Only electrons",
            "Both holes and electrons",
            "None of the answers"
          ],
          correctIndex: 2
        },
        {
          text: "When a pure semiconductor is heated, its resistance",
          options: [
            "Increases",
            "Decreases",
            "Remains the same",
            "Can’t say"
          ],
          correctIndex: 1
        },
        {
          text: "In an intrinsic semiconductor, the number of free electrons",
          options: [
            "Equals the number of holes",
            "Is greater than the number of holes",
            "Is less than the number of holes",
            "None of the answers"
          ],
          correctIndex: 0
        },
        {
          text: "At room temperature, an intrinsic semiconductor has",
          options: [
            "Holes only",
            "Electrons and holes",
            "Electrons only",
            "No holes and no electrons"
          ],
          correctIndex: 1
        },
        {
          text: "At absolute temperature, an intrinsic semiconductor has",
          options: [
            "A few free electrons",
            "Many holes",
            "Many free electrons",
            "No holes and no free electrons"
          ],
          correctIndex: 3
        },
        {
          text: "Which of the following is known as indirect band gap semiconductors?",
          options: [
            "Germanium",
            "GaAs",
            "GaAsP",
            "Carbon"
          ],
          correctIndex: 0
        },
        {
          text: "Which of the following is a semiconductor",
          options: [
            "Diamond",
            "Arsenic",
            "Phosphorous",
            "Gallium arsenide"
          ],
          correctIndex: 3
        },
        {
          text: "In an intrinsic semiconductor, the Fermi level",
          options: [
            "Lies at the middle of the forbidden energy gap.",
            "Is near the conduction band.",
            "Is near the valence band.",
            "May be anywhere in the forbidden energy gap."
          ],
          correctIndex: 0
        },
        {
          text: "For silicon, the energy gap at 300 K is",
          options: [
            "0.7 J",
            "1.1 J",
            "1.1 eV",
            "0.7 eV"
          ],
          correctIndex: 2
        },
        {
          text: "The forbidden gap for germanium is,",
          options: [
            "0.7 J",
            "0.7 eV",
            "1.1 eV",
            "1.1 J"
          ],
          correctIndex: 1
        },
        {
          text: "In a N-type semiconductor, the position of Fermi-level is",
          options: [
            "Close to the valance band",
            "In the middle of the energy band gap",
            "Close to the conduction band",
            "Can be any where"
          ],
          correctIndex: 2
        },
        {
          text: "The mobility of electrons in a material is expressed in unit of:",
          options: [
            "V/s",
            "m2 /V-s",
            "m 2 /s",
            "J/K"
          ],
          correctIndex: 1
        },
        {
          text: "The energy gap in a semiconductor",
          options: [
            "Increases with temperature",
            "Does not change with temperature",
            "Decreases with temperature",
            "Is zero"
          ],
          correctIndex: 1
        },
        {
          text: "Donor impurity atoms in semiconducting material results a new",
          options: [
            "Wide energy band",
            "Narrow energy band",
            "Discrete energy level just below conduction band",
            "Discrete energy level just above valance band"
          ],
          correctIndex: 2
        },
        {
          text: "Hall Effect is clearly visible in",
          options: [
            "Insulators",
            "Semiconductors",
            "Super conductors",
            "Non metals"
          ],
          correctIndex: 1
        },
        {
          text: "Which of the following represents correct expression for Lorentz force?",
          options: [
            "BeV",
            "BV",
            "eV",
            "B"
          ],
          correctIndex: 0
        },
        {
          text: "Hall effect can be used to measure",
          options: [
            "Magnetic field intensity",
            "Mobility",
            "Carrier concentration",
            "All the answers"
          ],
          correctIndex: 3
        },
        {
          text: "Which of the following parameters can’t be found with Hall Effect?",
          options: [
            "Type of semiconductors (p or n type)",
            "Conductivity",
            "Carrier concentration",
            "Area of the device"
          ],
          correctIndex: 3
        },
        {
          text: "In the Hall Effect, the electric field is in X direction and the velocity is in Y direction. Then the direction of the magnetic field is",
          options: [
            "X",
            "Y",
            "Z",
            "XY plane"
          ],
          correctIndex: 2
        },
        {
          text: "The number of electrons in a semiconductor is 10²⁰. Then the Hall coefficient is",
          options: [
            "0.625",
            "0.0625",
            "6.25",
            "62.5"
          ],
          correctIndex: 1
        },
        {
          text: "Calculate the conductivity of silicon doped with 10²¹ atoms m-3 of boron if the mobility of holes is 0.048 m2v-1s-1.",
          options: [
            "76.8/Ωm",
            "7.68/Ωm",
            "7.68 Ωm",
            "0.768/Ωm"
          ],
          correctIndex: 1
        },
        {
          text: "Calculate the resistivity of intrinsic germanium if the intrinsic carrier density is 2.5 x 10¹⁹ m-3 assuming electron and hole mobilities of 0.38 and 0.18 m2v-1s-1 respectively.",
          options: [
            "0.45/Ωm",
            "0.045 Ωm",
            "0.45 Ωm",
            "4.50 Ωm"
          ],
          correctIndex: 2
        },
        {
          text: "A semiconductor sample of thickness 1.2 x 10-4m is placed in a magnetic field of 0.2T acting perpendicular to its thickness. The Hall voltage generated when a current of 100 mA passes through it is (Assume the carrier concentration to be 10²³ m-3)",
          options: [
            "0.123 V",
            "0.0123 V",
            "1.23 V",
            "0.0012 V"
          ],
          correctIndex: 1
        },
        {
          text: "Intrinsic silicon has a carrier concentration of 1.1 x 10¹⁶ m-3. If the mobilities of electrons and holes are 0.17 and 0.035 m2v-1s-1 respectively at room temperature, the resistivity of silicon is",
          options: [
            "0.277x10³ Ωm",
            "27.7x10³ Ωm",
            "2.77x10³ Ωm",
            "0.0277x10³ Ωm"
          ],
          correctIndex: 2
        },
        {
          text: "The compound gallium arsenide has an intrinsic conductivity of 10-6 ohm-1 m-1 at 20 °C. How many electrons have jumped the forbidden energy gap? [Given: μe = 0.88 m2V-1s-1 and μh = 0.04 m2V-1s-1]",
          options: [
            "6.79 x10³ m-3",
            "0.679 x10³ m-3",
            "67.9 x10³ m-3",
            "0.0679 x10³ m-3"
          ],
          correctIndex: 0
        },
        {
          text: "Measurement of Hall coefficient enables the determination of:",
          options: [
            "Temperature coefficient and thermal conductivity",
            "Mobility and carrier concentration",
            "Fermi level and forbidden energy gap",
            "Area of the device"
          ],
          correctIndex: 1
        },
        {
          text: "For a particular material, the Hall coefficient is found to be zero. The material is",
          options: [
            "Intrinsic semiconductor",
            "Extrinsic semiconductor",
            "Metal",
            "Insulator"
          ],
          correctIndex: 3
        },
        {
          text: "What happens to the Hall voltage in a conductor if the magnetic field is reversed (i.e., its direction is flipped)?",
          options: [
            "The Hall voltage becomes zero.",
            "The Hall voltage changes direction but remains the same magnitude.",
            "The Hall voltage doubles in magnitude.",
            "The Hall voltage remains unchanged."
          ],
          correctIndex: 1
        },
        {
          text: "In which direction does the Hall voltage develop in a conductor when a magnetic field is applied perpendicular to the current?",
          options: [
            "Parallel to the current direction",
            "Perpendicular to both the magnetic field and the current direction",
            "In the same direction as the magnetic field",
            "Opposite to the magnetic field direction"
          ],
          correctIndex: 1
        },
        {
          text: "An intrinsic semiconductor, at the absolute zero temperature, behaves like which one of the following?",
          options: [
            "Insulator",
            "Superconductor",
            "n-type semiconductor",
            "p-type semiconductor"
          ],
          correctIndex: 0
        },
        {
          text: "In intrinsic semiconductors, number of electrons is ___________ number of holes",
          options: [
            "equal to",
            "greater than",
            "less than",
            "none of the above"
          ],
          correctIndex: 0
        },
        {
          text: "When a pure semiconductor is heated, its resistance",
          options: [
            "goes up",
            "goes down",
            "remains the same",
            "none of the above"
          ],
          correctIndex: 1
        },
        {
          text: "Intrinsic semiconductor at room temperature will have ______ available for conduction.",
          options: [
            "Electrons",
            "Holes",
            "Both electrons and holes",
            "None of the above"
          ],
          correctIndex: 2
        },
        {
          text: "The density of charge carriers in a pure semiconductor is proportional to",
          options: [
            "exp(-Eg/kT)",
            "exp(-2Eg/kT)",
            "exp((-Eg/kT)²)",
            "exp(-Eg/2kT)"
          ],
          correctIndex: 3
        },
        {
          text: "In an intrinsic semiconductor",
          options: [
            "σ = ne μe e",
            "σ = nh μh e",
            "σ = ni e (μe+μh)",
            "ne μe e > nh μh e"
          ],
          correctIndex: 2
        },
        {
          text: "A semiconductor has generally ……………… valence electrons.",
          options: [
            "2",
            "3",
            "4",
            "5"
          ],
          correctIndex: 2
        },
        {
          text: "A semiconductor has ………… temperature coefficient of resistance.",
          options: [
            "Positive",
            "Negative",
            "Both positive and negative",
            "Infinite"
          ],
          correctIndex: 1
        },
        {
          text: "Which of the following statements about the Hall effect is true?",
          options: [
            "The Hall effect cannot occur in semiconductors",
            "The Hall effect occurs only in metals.",
            "The Hall effect can provide information about the concentration and type of charge carriers",
            "The Hall effect is observed only at very low temperatures"
          ],
          correctIndex: 2
        },
        {
          text: "What is the primary function of a solar cell?",
          options: [
            "To store solar energy in chemical form",
            "To reflect sunlight to solar heaters",
            "To convert sunlight directly into electrical energy",
            "To absorb and retain heat from sunlight"
          ],
          correctIndex: 2
        }
      ],
      "Unit 5: Lasers and Optical Fibers": [
        {
          text: "Important characteristic of laser beam is",
          options: ["Interference", "Diffraction", "Dispersion", "Coherence"],
          correctIndex: 3
        },
        {
          text: "Emission of a photon by an excited atom due to interaction with a passing photon nearby is called",
          options: [
            "Spontaneous emission",
            "Induced absorption",
            "Stimulated emission",
            "Thermionic emission"
          ],
          correctIndex: 2
        },
        {
          text: "Metastable states are",
          options: [
            "Ground state energy states.",
            "Excited state energy levels in which electrons stay for very short interval of time.",
            "Excited state energy levels in which electron can stay for unusually long time.",
            "Nuclear energy states."
          ],
          correctIndex: 2
        },
        {
          text: "The required condition to achieve laser action in a system is",
          options: [
            "State of population inversion",
            "Excitation source",
            "A resonant cavity",
            "All the three"
          ],
          correctIndex: 3
        },
        {
          text: "The purpose of the optical cavity in a laser is to:",
          options: [
            "Convert electrical energy into light",
            "Amplify the light through multiple passes between mirrors",
            "Filter out unwanted frequencies of light",
            "Focus the light into a beam"
          ],
          correctIndex: 1
        },
        {
          text: "In a laser, the mirrors are there on either side of the device",
          options: [
            "In order to filter the heat & leave out only the light.",
            "To protect the eyes of the observer.",
            "To save energy of the excitation source.",
            "So that same photons continue to cause further batches of stimulated transitions."
          ],
          correctIndex: 3
        },
        {
          text: "Nd:YAG laser is a",
          options: ["Two level laser", "Three level laser", "Four level laser", "Five level laser"],
          correctIndex: 2
        },
        {
          text: "In He-Ne laser, the ratio of He to Ne gas molecules is of the order",
          options: ["1:10", "1:1", "10:1", "100:1"],
          correctIndex: 2
        },
        {
          text: "The pumping source in Nd:YAG laser is",
          options: ["Chemical", "Optical", "Electrical", "Mechanical"],
          correctIndex: 1
        },
        {
          text: "Which color of light has the shortest wavelength?",
          options: ["Yellow", "Blue", "Red", "Green"],
          correctIndex: 1
        },
        {
          text: "Laser action is found in _________ semiconductor.",
          options: ["direct band gap", "indirect band gap", "germanium", "silicon"],
          correctIndex: 0
        },
        {
          text: "The light from a laser source is monochromatic because all the photons",
          options: [
            "are in phase",
            "have same energy",
            "have same amplitude",
            "are in the same direction"
          ],
          correctIndex: 1
        },
        {
          text: "Which one of the following statements best describes stimulated emission in a laser?",
          options: [
            "Electrons collide with atoms in a metastable state and cause photons to be emitted.",
            "Atoms in a metastable state de-excite and cause electrons to be emitted.",
            "Photons interact with atoms in a metastable state and cause photons to be emitted.",
            "Photons interact with atoms in a metastable state and cause electrons to be emitted."
          ],
          correctIndex: 2
        },
        {
          text: "Which of the following is an example of optical pumping?",
          options: ["Nd:YAG", "Helium-Neon laser", "Semiconductor laser", "Dye laser"],
          correctIndex: 0
        },
        {
          text: "Why is laser light monochromatic?",
          options: [
            "The excited electrons are in a metastable state.",
            "The system is in a state of population inversion.",
            "The emitted photon and incident photon are of the same phase.",
            "Photons of the same energy as that of the incident photons are emitted when the electrons transit down from a higher energy level."
          ],
          correctIndex: 3
        },
        {
          text: "Which of the following statements concerning a laser system is incorrect?",
          options: [
            "Spontaneous emission occurs in the laser system.",
            "The intensity of the laser beam can be varied by changing the reflective coefficient of the partially reflecting mirror.",
            "The laser system does not require an external energy source.",
            "The laser medium consists of a metastable state."
          ],
          correctIndex: 2
        },
        {
          text: "The active medium in Nd:YAG laser is",
          options: ["Neodymium", "YAG crystal", "Yttrium", "Aluminium"],
          correctIndex: 0
        },
        {
          text: "The number of atoms in the excited state becomes much greater than the number of atoms in the ground state. This is known as",
          options: [
            "normal population",
            "population inversion",
            "stimulated emission",
            "spontaneous emission"
          ],
          correctIndex: 1
        },
        {
          text: "Laser light is intense because",
          options: [
            "it has very less number of photons that are in phase",
            "it has very less number of photons that are not in phase",
            "it has very large number of photons that are in phase",
            "it has very large number of photons that are not in phase"
          ],
          correctIndex: 2
        },
        {
          text: "The emission of photon without being aided by any external agency is called",
          options: [
            "light amplification",
            "induced absorption",
            "stimulated emission",
            "spontaneous emission"
          ],
          correctIndex: 3
        },
        {
          text: "The lifetime of an atom at the ordinary excited state is of the order of",
          options: [
            "few millisecond",
            "few nanosecond",
            "few microsecond",
            "unlimited"
          ],
          correctIndex: 1
        },
        {
          text: "The lifetime of an atom in a metastable state is of the order of",
          options: [
            "a few second",
            "unlimited",
            "a nanosecond",
            "few millisecond"
          ],
          correctIndex: 3
        },
        {
          text: "Supply of energy to atoms for excitation is called",
          options: ["Glowing", "Bombarding", "Incidenting", "Pumping"],
          correctIndex: 3
        },
        {
          text: "Semiconductor lasers do not require two external mirrors to form an optical cavity because",
          options: [
            "the laser light required is of low power",
            "mere driving a minimum current in the diode is enough for laser action",
            "p-section acts as one mirror and n-section acts as the other mirror",
            "a pair of parallel planes cleaved or polished at a particular angle in the crystal reflect the light efficiently"
          ],
          correctIndex: 3
        },
        {
          text: "A semiconductor laser has a peak emission radiation of wavelength 1.24 μm. What is its band gap value in eV?",
          options: ["1.4 eV", "1.6 eV", "1 eV", "1.8 eV"],
          correctIndex: 2
        },
        {
          text: "A He-Ne laser emits light at a wavelength of 632.8 nm and has an output power of 5 mW. The number of photons emitted in each second by this laser are approximately",
          options: [
            "1.79 × 10¹⁸ photons/sec",
            "1.59 × 10¹⁶ photons/sec",
            "0.6 × 10¹⁶ photons/sec",
            "1.59 × 10¹⁸ photons/sec"
          ],
          correctIndex: 1
        },
        {
          text: "If the wavelength of light emitted by spontaneous emission is 696 nm at 300 K, the ratio of population of two energy levels is",
          options: [
            "1.059 × 10⁻³²",
            "1.059 × 10⁻³³",
            "0.059 × 10⁻³⁰",
            "1.059 × 10⁻³⁰"
          ],
          correctIndex: 3
        },
        {
          text: "If a pulsed laser emits photons of wavelength 780 nm with 20 mW average power/pulse, the number of photons contained in each pulse if the pulse duration is 10 ns is approximately",
          options: [
            "7.86 × 10⁸",
            "5.08 × 10⁸",
            "3.86 × 10⁸",
            "1.86 × 10⁸"
          ],
          correctIndex: 0
        },
        {
          text: "The wavelength of radiation emitted by a semiconducting laser with band gap energy 2.8 eV is approximately",
          options: [
            "2.8 Å",
            "4.3308 Å",
            "5548.4 Å",
            "4439.8 Å"
          ],
          correctIndex: 3
        },
        {
          text: "Optical fiber works on the phenomenon of",
          options: [
            "total internal reflection",
            "polarization",
            "diffraction",
            "refraction"
          ],
          correctIndex: 0
        },
        {
          text: "What is the other name for a maximum external incident angle (for fiber)?",
          options: [
            "Optical angle",
            "Total internal reflection angle",
            "Refraction angle",
            "Wave guide acceptance angle"
          ],
          correctIndex: 3
        },
        {
          text: "How does the refractive index vary in Graded Index fibre?",
          options: ["Tangentially", "Radially", "Longitudinally", "Transversely"],
          correctIndex: 1
        },
        {
          text: "Which of the following has more distortion?",
          options: [
            "Single step-index fibre",
            "Graded index fibre",
            "Multimode step-index fibre",
            "Glass fibre"
          ],
          correctIndex: 2
        },
        {
          text: "What causes microscopic bend in optical fibers?",
          options: [
            "Absorption",
            "Scattering",
            "Impurities",
            "Non-uniform pressure"
          ],
          correctIndex: 3
        },
        {
          text: "The loss in signal power as light travels down a fiber is called",
          options: [
            "Dispersion",
            "Scattering",
            "Absorption",
            "Attenuation"
          ],
          correctIndex: 3
        },
        {
          text: "The inner portion of the optical fiber cable is called",
          options: [
            "Cladding",
            "Coating",
            "Inner conductor",
            "Core"
          ],
          correctIndex: 3
        },
        {
          text: "When more than one mode is propagating, how is it dispersed?",
          options: [
            "Dispersion",
            "Inter-modal dispersion",
            "Material dispersion",
            "Waveguide dispersion"
          ],
          correctIndex: 1
        },
        {
          text: "The core of an optical fiber has a",
          options: [
            "Lower refracted index than air",
            "Lower refractive index than the cladding",
            "Higher refractive index than the cladding",
            "Similar refractive index with the cladding"
          ],
          correctIndex: 2
        },
        {
          text: "Having cladding around the core is preferred to coating the core with a reflecting material (silvering) because",
          options: [
            "Silvering is not economical",
            "Coating may get affected by abrasions",
            "Coated material may undergo chemical changes and become dull",
            "The total internal reflection at the core-cladding interface is superior to that by any coated material"
          ],
          correctIndex: 3
        },
        {
          text: "Attenuation in optical fibers means",
          options: [
            "Amplification of signal strength",
            "Division of signal strength",
            "Loss of signal strength",
            "Tuning of signal"
          ],
          correctIndex: 2
        },
        {
          text: "In an optical fiber the signal loss due to scattering is mainly due to",
          options: [
            "Rayleigh scattering",
            "Raman scattering",
            "Wein’s scattering",
            "All the answers"
          ],
          correctIndex: 0
        },
        {
          text: "In an optical fiber, Rayleigh scattering occurs when a photon",
          options: [
            "Encounters an impurity atom in its path",
            "Hits the cladding",
            "Encounters sharp changes in refractive index over distances smaller than its wavelength",
            "Encounters a microscopic bend"
          ],
          correctIndex: 2
        },
        {
          text: "Signal distortion in optical fibers occurs due to",
          options: [
            "Irregularities in fiber structure",
            "Variation in refractive index of the core at different points",
            "Spreading of pulse",
            "Macroscopic bend"
          ],
          correctIndex: 2
        },
        {
          text: "The numerical aperture of an optical fiber in air is 0.32. The numerical aperture of the same fiber in water of refractive index 1.33 is",
          options: ["0.43", "0.32", "0.64", "0.96"],
          correctIndex: 1
        },
        {
          text: "The numerical aperture of a fiber if the angle of acceptance is 15 degrees, is approximately",
          options: ["0.17", "0.26", "0.50", "0.75"],
          correctIndex: 1
        },
        {
          text: "Fractional index change for an optical fiber with core and cladding of refractive indices 1.563 and 1.498 respectively is approximately",
          options: ["0.00415", "0.04159", "0.04300", "0.00400"],
          correctIndex: 1
        },
        {
          text: "The angle of acceptance of an optical fiber with numerical aperture of 0.446 is approximately",
          options: ["26.49°", "7.78°", "20.5°", "30.6°"],
          correctIndex: 0
        },
        {
          text: "An optical signal loses 15% of its power after traversing a fiber length of 400 m. The fiber loss (in dB/km) is approximately",
          options: ["0.0176", "1.7645", "17.645", "0.1764"],
          correctIndex: 1
        },
        {
          text: "The attenuation in an optical fiber of length 500 m, when a light signal of power 100 mW emerges out with a power of 90 mW is approximately",
          options: ["0.0915 dB/km", "0.00915 dB/km", "9.15 dB/km", "0.915 dB/km"],
          correctIndex: 3
        },
        {
          text: "Optical fibers are used in",
          options: [
            "CAT scans",
            "X-ray photos",
            "Ultrasound scans",
            "Endoscopy"
          ],
          correctIndex: 3
        },
        {
          text: "Which fiber is preferred for long distance communication?",
          options: [
            "Step index single mode fiber",
            "Graded index multimode fiber",
            "Step index multimode fiber",
            "Both single mode and multimode fibers"
          ],
          correctIndex: 0
        },
        {
          text: "In the structure of the fiber optic cable, the refractive index of the core is always ____ the refractive index of the cladding",
          options: [
            "Less than",
            "Equal to",
            "Greater than",
            "None of these"
          ],
          correctIndex: 2
        },
        {
          text: "The numerical aperture (NA) in optical fiber is used to describe",
          options: [
            "Light spreading ability",
            "Light gathering or light-collecting ability",
            "Light output from an external shield",
            "Light leakage ability"
          ],
          correctIndex: 1
        },
        {
          text: "The refractive index of the core is uniform throughout and undergoes an abrupt change at the cladding boundary which is known as",
          options: [
            "Uniform-index fiber",
            "Scale-index fiber",
            "Graded-index fiber",
            "Step index fiber"
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
    try { registerSubject('Physics', qd.Physics); } catch (e) {}
  }
})();
