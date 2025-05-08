class Quiz { 
   
 constructor (questions, timeLimit, timeRemaining){
  
          this.questions = questions;
          this.timeLimit = timeLimit;
          this.timeRemaining =timeRemaining ;
          this.correctAnswers = 0;
          this.currentQuestionIndex = 0;
        }
    getQuestion(){                          
        return this.questions[this.currentQuestionIndex];                                             
        
    }

    moveToNextQuestion(){
     this.currentQuestionIndex +=1
    }

   
   shuffleQuestions(){
    this.questions.sort(() => Math.random() - 0.5);
   }


   checkAnswer(answer) { 
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (answer === currentQuestion.answer){
        this.correctAnswers += 1;
    }
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
 


     filterQuestionsByDifficulty(difficulty) {
        if (![1, 2, 3].includes(difficulty)) {
            return; 
          }
            this.questions = this.questions.filter(q => q.difficulty === difficulty);
          }
        
       
      averageDifficulty() {
        if (this.questions.length === 0) return 0;
        const total = this.questions.reduce((sum, q) => sum + Number(q.difficulty), 0);
        return total / this.questions.length;
      }
    }


  
