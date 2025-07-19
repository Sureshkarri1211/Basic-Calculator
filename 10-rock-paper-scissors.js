let score=JSON.parse(localStorage.getItem('score'));
  if(score===null){
    score={
    wins:0,
    loses:0,
    Ties:0
    }
  }
      updateScore();
      function playGame(playerMove){
        const computerMove=pickcomputerMove();
        let result='';

        if(playerMove==='Scissors'){
          if(computerMove==='Rock'){
            result='You Lose';
          }
          else if(computerMove==='Paper'){
            result='You Win';
          }
          else if(computerMove==='Scissors'){
            result='Tie';
          }
        }
        else if(playerMove==='Rock'){
          if(computerMove==='Rock'){
            result='Tie';
          }
          else if(computerMove==='Paper'){
            result='You Lose';
          }
          else if(computerMove==='Scissors'){
            result='You Win';
          }
        }
        else if(playerMove==='Paper'){
          if(computerMove==='Rock'){
              result='You Win';
            }
            else if(computerMove==='Paper'){
              result='Tie';
            }
            else if(computerMove==='Scissors'){
              result='You Lose';
            }
          }
          if(result==='You Win'){
            score.wins+=1;
          }
          else if(result==='You Lose'){
            score.loses+=1;
          }
          else{
            score.Ties+=1;
          }
          localStorage.setItem('score',JSON.stringify(score));//since JSON supports only strings we convert the score object into string.
          gameResult(result);
          updateScore();
          pickResult(playerMove,computerMove);
        // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        // Wins:${score.wins},Loses:${score.loses},Ties:${score.Ties}`);
      }
      function pickResult(playerMove,computerMove){
        document.querySelector('.pick-result').innerHTML=`You 
          <img src="${playerMove}-emoji.png" class="move-icon">
          Computer
          <img src="${computerMove}-emoji.png" class="move-icon">.`;
      }
      function gameResult(result){
        document.querySelector('.game-result').innerHTML=`${result}`;
      }
      function updateScore(){
        document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Loses:${score.loses},Ties:${score.Ties}`;
      }
      function pickcomputerMove(){
        const randomNumber=Math.random();//it gives a number between 0 and 1.
        let computerMove='';
        if(randomNumber >=0 && randomNumber < 1/3){
          computerMove='Rock';
        }
        else if(randomNumber >=1/3 && randomNumber <2/3){
          computerMove='Paper';
        }
        else if(randomNumber >=2/3 && randomNumber<1){
          computerMove='Scissors';
        }
        return computerMove;
      }