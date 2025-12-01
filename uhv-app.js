// UHV Quiz Application
class UHVQuizApp {
    constructor() {
        this.questions = [
            {"id": 1, "question": "What is invariant and universal among all human beings", "options": ["Natural Acceptance", "Understanding", "Expectations", "None of these"], "correct": 0},
            {"id": 2, "question": "Value education helps to", "options": ["Remove our confusions", "Bring harmony in all levels of human living", "Removes our contradictions", "All of these"], "correct": 3},
            {"id": 3, "question": "Holistic development of human beings", "options": ["Living only with Physical facility", "Living with Relationships", "Living for all the three – right understanding, relationship and physical facility (Human Consciousness)", "None of these"], "correct": 2},
            {"id": 4, "question": "Experiential validation of proposal means", "options": ["Living according to our desires", "Living according to proposal after verifying it by natural acceptance", "Living according to our expectations", "Living according to our thoughts"], "correct": 1},
            {"id": 5, "question": "Ensuring justice in relationship on the basis of values leads to --------- in the society.", "options": ["Trust", "Fearlessness", "Respect", "None of these"], "correct": 1},
            {"id": 6, "question": "Which of the following is more pronounced in animal consciousness?", "options": ["Right understanding", "Physical facility", "Relationship", "None of these"], "correct": 1},
            {"id": 7, "question": "Identify the correct order.", "options": ["Physical facility, right understanding, relationship", "Physical facility, relationship, right understanding", "Relationship, right understanding, physical facility", "Right understanding, relationship, physical facility"], "correct": 3},
            {"id": 8, "question": "Self-explorations means", "options": ["Dialogue between what you are and what you what to be", "It is the process of self-evaluation through self-investigation", "It is the process of knowing the human conduct", "All theses"], "correct": 3},
            {"id": 9, "question": "Which of the following fact is not true about profession, if ethics is followed in professional life?", "options": ["Able to earn a livelihood of the family", "Evaluated by the wealth it generates", "Requires certain skills", "Profession is also a service"], "correct": 1},
            {"id": 10, "question": "Need for value education:", "options": ["Correct identification of our aspirations", "To fulfill our aspirations in continuity", "Evaluation of our beliefs", "All of these"], "correct": 3},
            {"id": 11, "question": "Universal human aspirations means:", "options": ["Happiness and Prosperity", "Continuity of Happiness and Prosperity", "Happiness", "Prosperity"], "correct": 1},
            {"id": 12, "question": "What is happiness?", "options": ["A harmony state in which you want to be", "A state getting through sensations", "A state of preconditioning", "All of these"], "correct": 0},
            {"id": 13, "question": "The basic guideline for value education:", "options": ["Cannot be defined for the present system", "Cannot be universal", "Universal, Natural, Rational and Verifiable", "None of these"], "correct": 2},
            {"id": 14, "question": "Which one of the following is NOT the part of basic guidelines prepared for Value Education?", "options": ["Universal", "Rational", "Leading to disharmony", "Verifiable"], "correct": 2},
            {"id": 15, "question": "Which of the following is the attitude of ethical human conduct?", "options": ["Values", "Wealth", "Storage", "None of these"], "correct": 0},
            {"id": 16, "question": "Imagination includes", "options": ["Desires and Thoughts", "Thoughts and Expectations", "Desire and Expectations", "Desires, Thoughts and Expectations (DTE)"], "correct": 3},
            {"id": 17, "question": "Which of the options given below is one of the dimensions of human endeavour?", "options": ["Education", "Corruption", "Competition", "None of these"], "correct": 0},
            {"id": 18, "question": "The basic desire of the human being is always", "options": ["Happy", "Prosperous", "Happy and Prosperous", "None of these"], "correct": 2},
            {"id": 19, "question": "Human life is lived at four levels: Individual, Family, ...................., and Nature.", "options": ["Community", "Imaging", "Society", "Analyzing"], "correct": 2},
            {"id": 20, "question": "The definitiveness of human conduct in terms of values, policies and character is termed as .....................", "options": ["Responsibilities", "Values", "Profession", "None of these"], "correct": 1},
            {"id": 21, "question": "Developing the ethical competence in the profession is the only effective way to ensure ........................", "options": ["Responsibilities", "Ethics", "Professionalism", "Success"], "correct": 1},
            {"id": 22, "question": ".................. are considered the moral standards by which people judge the behaviour.", "options": ["Responsibilities", "Ethics", "Professionalism", "Success"], "correct": 1},
            {"id": 23, "question": ".............. is the implications of right understanding in profession.", "options": ["Responsibilities", "Ethics", "Professionalism", "Success"], "correct": 1},
            {"id": 24, "question": "Holistic production systems are", "options": ["Eco-friendly", "People friendly", "Both Eco- friendly and People friendly", "None of these"], "correct": 2},
            {"id": 25, "question": "Lot of physical facilities can provide us", "options": ["Happiness", "Prosperity", "Both Prosperity and Happiness", "None of these"], "correct": 3},
            {"id": 26, "question": "The basic capacity of analyzing is known as", "options": ["Desire", "Expectation", "Thought", "Behaviour"], "correct": 2},
            {"id": 27, "question": "The process of education and right living leads to...............", "options": ["Labour", "Right understanding", "Existence", "Co-existence"], "correct": 3},
            {"id": 28, "question": "The definiteness of behaviour and work of human being is termed as", "options": ["Human Behaviour", "Human Character", "Human Constitution", "Human Efforts"], "correct": 1},
            {"id": 29, "question": "Understanding of human values leads to the practice of", "options": ["Responsibility", "Professional Behaviour", "Ethics", "None of these"], "correct": 2},
            {"id": 30, "question": "The second dimension of human being is", "options": ["Thought", "Work", "Behaviour", "Realization"], "correct": 3},
            {"id": 31, "question": "When we set our goals in right direction with the help of right understanding, it is called as .............", "options": ["Skill Domain", "Development", "Value Domain", "Prosperity"], "correct": 2},
            {"id": 32, "question": "Our participation in different levels in the larger order is known as .................", "options": ["Behaviour", "Efforts", "Values", "None of these"], "correct": 2},
            {"id": 33, "question": "Attention and Appreciation from others", "options": ["Can't be continuous", "Can't ensure continuous happiness", "Create dependency on others", "All of these"], "correct": 3},
            {"id": 34, "question": "The programme for health and samyam leads to feeling of ............in family.", "options": ["Prosperity", "Happiness", "Both the Happiness and Prosperity", "None of these"], "correct": 2},
            {"id": 35, "question": "Production and work for physical facilities leads to ............ in family and ............. with nature.", "options": ["Prosperity, Existence", "Happiness, Existence", "Prosperity, Co-existence", "Happiness, Co-existence"], "correct": 2},
            {"id": 36, "question": "Education has two domains- Value Domain and Skill Domain. Which of the following is true?", "options": ["Value domain is the part of the skill domain", "Value domain is in conflict with skill domain", "The value domain deals with the understanding part, while the skill domain deals with the learning part.", "The value domain deals with the learning part, while the skill domain deals with the understanding part."], "correct": 2},
            {"id": 37, "question": "Value Education leads human being to", "options": ["Conflicts", "Confusion", "Harmony", "All of these"], "correct": 2},
            {"id": 38, "question": "It is the second level of living", "options": ["Individual", "Society", "Nature", "Family"], "correct": 3},
            {"id": 39, "question": "One of the undesirable common habits with us is that we have a tendency to suspect others ................", "options": ["Intention", "Competence", "Both intention and competence", "None of these"], "correct": 2},
            {"id": 40, "question": "Which of the following is not a dimension of human being?", "options": ["Society", "Thought", "Behaviour", "Realization"], "correct": 0},
            {"id": 41, "question": "In the process of self-exploration we will not verify on the basis of ................", "options": ["Others perception", "Scriptures", "Reading from instruments", "All of these"], "correct": 3},
            {"id": 42, "question": "It is the fourth level of living", "options": ["Society", "Nature", "Individual", "Family"], "correct": 1},
            {"id": 43, "question": "The result of self-exploration is............", "options": ["Realization", "Right understanding", "Both Realization and Right understanding", "None of these"], "correct": 2},
            {"id": 44, "question": "The process of verification of any proposal can be useful when verified", "options": ["At One's own right", "On the basis of reading from the instruments", "On the basis of readings from the books", "On the basis of others' perception and understanding"], "correct": 0},
            {"id": 45, "question": "Self-exploration is the dialogue between 'what you are' and", "options": ["'what you want to be'", "'what others want you to be'", "'what society wants you to be'", "All of these"], "correct": 0},
            {"id": 46, "question": "Continuous happiness and prosperity are the .................", "options": ["Impractical thought", "Impossible desires", "Basic human aspirations", "None of these"], "correct": 2},
            {"id": 47, "question": "To be wealthy is .................. condition in the modern world to be happy.", "options": ["The most important", "The true", "Not essential", "Fake"], "correct": 3},
            {"id": 48, "question": "Being happy ............ good-luck and lot of external circumstances.", "options": ["Means", "Depends on", "Does not depend on", "None of these"], "correct": 2},
            {"id": 49, "question": "Which one of the following is true?", "options": ["A human being needs both, relationship as well as physical facilities. One cannot replace the other.", "If a human being has abundant (plentiful) of physical facilities, her/his prosperity is ensured.", "If a human being has abundant (plentiful) of physical facilities, his/her happiness is ensured.", "If a human being is happy in continuity, she/he does not need physical facilities anymore."], "correct": 1},
            {"id": 50, "question": "Living with Physical Comforts only means ...........", "options": ["Animal Consciousness", "God Consciousness", "Human Consciousness", "Real Consciousness"], "correct": 0},
            {"id": 51, "question": "The feeling of producing/having more than required physical facility is", "options": ["Prosperity", "Happiness", "Success", "Satisfaction"], "correct": 0},
            {"id": 52, "question": "To verify the proposal or assumption through self exploration leads to", "options": ["Assuming", "Knowing", "Realizing", "Preconditioning"], "correct": 1},
            {"id": 53, "question": "Which are the four levels of living?", "options": ["Individual, family, society, nature", "Thought, behaviour, work, realization", "Material, pranic, animal, human", "None of these"], "correct": 0},
            {"id": 54, "question": "If something is .................. to us, without any force or compulsion, then it is often correct, and does not change with people and time.", "options": ["Not acceptable", "Less acceptable", "Completely acceptable", "Naturally acceptable"], "correct": 3},
            {"id": 55, "question": "The value of any unit in this existence is in its ........................ in the larger order of which it is a part.", "options": ["Participation", "Existence", "Performance", "Appearance"], "correct": 0},
            {"id": 56, "question": "The four dimensions of human being are thought, ..................., work and realization", "options": ["Action", "Speaking", "Behaviour", "Performance"], "correct": 2},
            {"id": 57, "question": "On continued basis we should examine our ..............", "options": ["Thought system", "Performance system", "Belief system", "None of these"], "correct": 2},
            {"id": 58, "question": "Two basic things in the content of self-exploration are to know my basic desires in may life and the second is to know how to .......................", "options": ["Perform these", "Remove these", "Fulfill these", "None of these"], "correct": 2},
            {"id": 59, "question": "Expression of thought is in the form of ............................", "options": ["Behaviour", "Work", "Realization", "Behaviour and Work"], "correct": 3},
            {"id": 60, "question": "Universal, rational, and verifiable are the ................... of value education.", "options": ["Needs", "Outcomes", "Basic guidelines", "None of these"], "correct": 1},
            {"id": 61, "question": "The value of entity is decided on the basis of ......................", "options": ["Participation in the larger order", "MRP", "Cost", "Physical properties"], "correct": 0},
            {"id": 62, "question": "Value education helps us to correctly identify our ................", "options": ["Goals", "Aspirations", "Desires", "All of these"], "correct": 3},
            {"id": 63, "question": "The purpose of the value education is to ..................", "options": ["Foster universal values", "Make the syllabus easy for the students to learn", "Develop values in individuals", "Both foster universal values and develop values in individuals"], "correct": 3},
            {"id": 64, "question": "A harmonious world is created by values at 4 levels. These are...................", "options": ["Home, Family, Society, Nation", "Individual, Family, Society, Existence", "School, Home, Office, Temple", "None of these"], "correct": 1},
            {"id": 65, "question": "The content of self-exploration is to understand the desire and ............. of human being.", "options": ["Potential", "Programme", "Purpose", "None of these"], "correct": 1},
            {"id": 66, "question": "Human-Rest of the nature interaction is called as ............", "options": ["Behaviour", "Production", "Work", "Realization"], "correct": 2},
            {"id": 67, "question": "Clarity and Identification of comprehensive human goals in the light of right understanding is called ........................", "options": ["Science", "Work", "Wisdom", "Behaviour"], "correct": 2},
            {"id": 68, "question": "Comprehensive human goals are fulfilled with the help of ............", "options": ["Wisdom", "Science", "Precondition and sensation", "All of these"], "correct": 1},
            {"id": 69, "question": "To ensure justice from family to world family is called ..................", "options": ["Production", "Science", "Wisdom", "Undivided human society"], "correct": 3},
            {"id": 70, "question": "Ensuring mutual fulfilment and mutual prosperity from family to world family is .........", "options": ["Science", "Wisdom", "Undivided human society", "Universal human order"], "correct": 3},
            {"id": 71, "question": "Which among the following is not a comprehensive human goal?", "options": ["Right understanding in every individual", "Mastery and complete control over nature", "Fearlessness in society", "Harmony in nature"], "correct": 1},
            {"id": 72, "question": "Ensuring the concept of undivided society and universal human order from generation to generation is called .............", "options": ["Wisdom", "Undivided human society", "Universal human order", "Human Tradition"], "correct": 3},
            {"id": 73, "question": "Transformation through Human Education includes", "options": ["Personal Transformation", "Societal Transformation", "Both Personal as well as societal transformation", "Materialistic transformation"], "correct": 2},
            {"id": 74, "question": "In society, obsession for consumption, profit and sensory pleasure is more due to", "options": ["Knowledge", "Assumption", "Recognition", "Fulfilment"], "correct": 1},
            {"id": 75, "question": "Sound, Touch, Taste, Smell, and Form are ..............", "options": ["Traps", "Innate faculty", "Sensations", "Preconditioning"], "correct": 2},
            {"id": 76, "question": "Definite completion point of feelings is ................", "options": ["Outside", "Within", "Nowhere", "Others"], "correct": 1},
            {"id": 77, "question": "An individual aspiring for the universal human order will be ..............", "options": ["More responsible socially and ecologically", "More rich", "More powerful", "None of these"], "correct": 0},
            {"id": 78, "question": "\"All are our own, all are interconnected and inter dependent\" means ............", "options": ["Oneness", "Worship", "Ease", "None of these"], "correct": 0},
            {"id": 79, "question": "............... and ....................... are the basis of undivided society", "options": ["Love and Oneness", "Care and guidance", "Affection and Respect", "None of these"], "correct": 0},
            {"id": 80, "question": "In Teacher – Student relationship, the teacher should have the feeling of ........... for the students.", "options": ["Love", "Guidance", "Care", "Gratitude"], "correct": 1},
            {"id": 81, "question": "In Teacher – Student relationship, the students should have the feeling of ........... for the Teachers.", "options": ["Love", "Guidance", "Care", "Gratitude"], "correct": 3},
            {"id": 82, "question": "For relationship among siblings, there is a need for the feelings of .........", "options": ["Love and Trust", "Care and affection", "Respect", "All of these"], "correct": 3},
            {"id": 83, "question": "What are the feelings that remain as base of all relationships?", "options": ["Reverence, Glory, Gratitude", "Trust, Respect, Affection", "Care, Guidance, Affection", "Trust, Reverence, Glory"], "correct": 1},
            {"id": 84, "question": "Moral value is combination of ...............", "options": ["Right Speech, Right Action", "Right Vision, Right Resolve", "Right Livelihood, Right Effort", "Right Awareness, Right Concentration"], "correct": 0},
            {"id": 85, "question": "Meditation includes .........................", "options": ["Right Speech, Right Action", "Right Vision, Right Resolve", "Right Livelihood, Right Effort", "Right Awareness, Right Concentration"], "correct": 3},
            {"id": 86, "question": "Belief centric wisdom is ..................", "options": ["Knowledge based on listening", "Knowledge based on self realization of existential reality", "Reasoning based knowledge", "None of these"], "correct": 0},
            {"id": 87, "question": "Logic centric wisdom is ....................", "options": ["Knowledge based on listening", "Knowledge based on self realization of existential reality", "Reasoning based knowledge", "None of these"], "correct": 2},
            {"id": 88, "question": "Realization centric wisdom is ................", "options": ["Knowledge based on listening", "Knowledge based on self realization of existential reality", "Reasoning based knowledge", "None of these"], "correct": 1},
            {"id": 89, "question": "Non-violence means not hurting anyone by ..............", "options": ["Body", "Mind", "Speech and words", "All of these"], "correct": 3},
            {"id": 90, "question": "Liberation means ...........", "options": ["To see the existence clearly", "To see the reality as it is", "To be rid of all types of misunderstanding, confusions", "All of these"], "correct": 3},
            {"id": 91, "question": "It is natural for ................... to slowly deteriorate", "options": ["Physical things/Physical facilities", "Happiness", "Feelings", "Relationship"], "correct": 0}
        ];

        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            nameInput.addEventListener('click', () => nameInput.focus());
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 40);
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 20 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            const timerElement = document.getElementById('timer');
            if (this.timeRemaining <= 5 * 60 && timerElement) {
                timerElement.classList.add('warning');
            }
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 40`;
        }

        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 40) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        if (nextBtn) nextBtn.style.display = questionNumber === 40 ? 'none' : 'block';
        if (submitBtn) submitBtn.style.display = questionNumber === 40 ? 'block' : 'none';
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) clearInterval(this.timer);

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0, wrong = 0, unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 40) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct,
            wrong,
            unanswered,
            timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const studentNameDisplay = document.getElementById('studentNameDisplay');
        const scorePercentageEl = document.getElementById('scorePercentage');
        const correctCount = document.getElementById('correctCount');
        const wrongCount = document.getElementById('wrongCount');
        const unansweredCount = document.getElementById('unansweredCount');
        const timeTakenEl = document.getElementById('timeTaken');

        if (studentNameDisplay) studentNameDisplay.textContent = this.studentName;
        if (scorePercentageEl) scorePercentageEl.textContent = `${scorePercentage}%`;
        if (correctCount) correctCount.textContent = correct;
        if (wrongCount) wrongCount.textContent = wrong;
        if (unansweredCount) unansweredCount.textContent = unanswered;

        if (timeTakenEl) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            timeTakenEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const reviewCorrectCount = document.getElementById('reviewCorrectCount');
        const reviewWrongCount = document.getElementById('reviewWrongCount');
        const reviewUnansweredCount = document.getElementById('reviewUnansweredCount');

        if (reviewCorrectCount) reviewCorrectCount.textContent = correct;
        if (reviewWrongCount) reviewWrongCount.textContent = wrong;
        if (reviewUnansweredCount) reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) timerElement.classList.remove('warning');
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) nameInput.value = '';
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('uhvQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('uhvQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
        const modal = document.getElementById('adminModal');
        if (modal) modal.classList.remove('hidden');
    }

    hideAdminModal() {
        const modal = document.getElementById('adminModal');
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (modal) modal.classList.add('hidden');
        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
    }

    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'UHVADMIN' && password === 'HAREKRSNA') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('uhvQuizResults') || '[]');
            
            const totalStudents = document.getElementById('totalStudents');
            const averageScoreEl = document.getElementById('averageScore');
            const completionRateEl = document.getElementById('completionRate');
            const studentTableBody = document.getElementById('studentTableBody');

            if (totalStudents) totalStudents.textContent = results.length;
            
            if (averageScoreEl) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                averageScoreEl.textContent = `${averageScore}%`;
            }
            
            if (completionRateEl) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 40).length / results.length) * 100)
                    : 0;
                completionRateEl.textContent = `${completionRate}%`;
            }

            if (studentTableBody) {
                studentTableBody.innerHTML = '';
                results.slice(-20).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('uhvQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `uhv_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) targetScreen.classList.add('active');
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new UHVQuizApp();
});
