import React from 'react';
import {ArrowUpOutlined} from '@ant-design/icons';
import './styles.css';
const RFQuestionAnswerCard = ({question, answer, withVotes}) => {
  return (
    <div>
      <div className="qAndACard">
        <div className="qSection">
          <span>Q:</span>
          <span>{question}</span>
        </div>
        <div className="qAndAAnswer">{answer}</div>
      </div>
      {withVotes && (
        <div className="voteStrip">
          <button className="vsIcon">
            <ArrowUpOutlined />
            <span>Upvote</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RFQuestionAnswerCard;
