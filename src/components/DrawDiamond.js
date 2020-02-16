import React from 'react';

function DrowDiamond() {
  // 최대 가로/세로 15개,
  // 1,3,5,7,9,11,13,15,13,11,9,7,5,3,1
  // 여백은 -
  // 포문으로 15까지 움직이고, 15넘어가면 엔터
  // 1번째 줄 별 1개
  // 2번째 줄 별 3개
  // 3번째 줄 별 5개 ...
  const drowDiamond = () => {
    let text = '';
    let star = 1;
    for(let j = 0; j < 15; j++){
      const condition = (15 - star)/2;
      for(let i = 0; i < 15; i++){
        if( i < condition ) {
          text += '-';
        } else if( i < condition + star ) {
          text += '*';
        } else {
          text += '-';
        }
        if(i === 14){
          text += '\n';
        }
      }
      if( j < (15 / 2) - 1 ) {
        star += 2;
      } else {
        star -= 2;
      }
    }
    return text;
  }
  
  return (
    <pre>{drowDiamond()}</pre>
    );
}

export default DrowDiamond;
