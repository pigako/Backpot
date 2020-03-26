import React, { useCallback, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import {
  DELETE_EPISODE_COMMENT_REQUEST,
  UPDATE_EPISODE_COMMENT_REQUEST,
} from '../reducers/episode';

const SCommentCard = styled.div`
  margin: 1.5rem;
`;
const CommentCardTop = styled.div`
  height: 2rem;
  background: #f7f7f7;
  border-bottom: solid 1px #6441a5;
  display: inline-block;
  width: 100%;
  font-size: 1rem;

  & > label {
    line-height: 2rem;
  }
`;
const CommentCardNickname = styled.label`
  font-weight: bold;
  margin-left: 1rem;
`;
const CommentCardCreateLabel = styled.label`
  display: block;
  float: right;
`;
const CommentUpDelButtonDiv = styled.div`
  font-size: 1rem;
  display: inline-block;
  float: right;
  margin-right: 1rem;
  line-height: 2rem;

  & > a {
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      color: #148cff;
    }
  }
`;
const CommentCardContent = styled.div`
  margin: 1.5rem;
  & > div {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const CommentCard = ({ comment }) => {
  const { id: myId } = useSelector(state => state.user.me) || false;
  const dispatch = useDispatch();

  const [isUpdatingComment, setIsUpdatingComment] = useState(false);
  const [updateCommentText, setUpdateCommentText] = useState('');

  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorLoded, setEditorLoded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  const onUpdateComment = useCallback(
    e => {
      if (isUpdatingComment) {
        dispatch({
          type: UPDATE_EPISODE_COMMENT_REQUEST,
          data: {
            id: comment.id,
            content: updateCommentText,
          },
        });
        setIsUpdatingComment(false);
      } else {
        setIsUpdatingComment(true);
      }
    },
    [isUpdatingComment, comment && comment.id, updateCommentText],
  );

  const onUpdateCommentCancle = useCallback(
    e => {
      setIsUpdatingComment(false);
      setUpdateCommentText(comment.content);
    },
    [comment && comment.content],
  );

  const onDeleteComment = useCallback(
    e => {
      console.log('CommentCard', comment.id);
      dispatch({
        type: DELETE_EPISODE_COMMENT_REQUEST,
        commentId: comment.id,
      });
    },
    [comment && comment.id],
  );

  return (
    <SCommentCard key={+comment.id}>
      <CommentCardTop>
        <CommentCardNickname>{comment.User.nickname}</CommentCardNickname>
        <CommentCardCreateLabel>
          {moment(comment.createdAt).format('YY.MM.DD HH시 mm분')}
        </CommentCardCreateLabel>
        {myId === comment.User.id ? (
          <CommentUpDelButtonDiv>
            {isUpdatingComment ? (
              <a onClick={onUpdateCommentCancle}>취소</a>
            ) : null}
            <a onClick={onUpdateComment}>수정</a>
            <a onClick={onDeleteComment}>삭제</a>
          </CommentUpDelButtonDiv>
        ) : null}
      </CommentCardTop>
      <CommentCardContent>
        {isUpdatingComment ? (
          editorLoded ? (
            <CKEditor
              key={'board'}
              editor={ClassicEditor}
              data={comment && comment.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setUpdateCommentText(data);
              }}
            />
          ) : (
            <p>Editor Loding</p>
          )
        ) : (
          <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
        )}
      </CommentCardContent>
    </SCommentCard>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentCard;
